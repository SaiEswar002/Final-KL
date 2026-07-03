package com.klu.hospitalmanagement.service;

import com.klu.hospitalmanagement.entity.*;
import com.klu.hospitalmanagement.enums.AdmissionStatus;
import com.klu.hospitalmanagement.enums.BedStatus;
import com.klu.hospitalmanagement.exception.*;
import com.klu.hospitalmanagement.repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.*;

/**
 * AdmissionService — core business logic for hospital admissions.
 *
 * Java Collections used explicitly:
 *   - List<Admission>  : return types for patient/doctor admission histories
 *   - List<AdmissionStatus> : status filter lists for guard queries
 *
 * Business Rules enforced:
 *   1. Patient cannot be admitted if already ADMITTED or UNDER_TREATMENT
 *   2. Bed must be FREE before assignment
 *   3. Discharged patient cannot be re-admitted via state transition
 *   4. On admit  → bed becomes OCCUPIED, ward.availableBeds decrements
 *   5. On discharge → bed becomes FREE, ward.availableBeds increments
 */
@Service
public class AdmissionService {

    private final AdmissionRepository admissionRepository;
    private final UserRepository userRepository;
    private final WardRepository wardRepository;
    private final BedRepository bedRepository;
    private final WardService wardService;
    private final BedService bedService;

    public AdmissionService(AdmissionRepository admissionRepository,
                            UserRepository userRepository,
                            WardRepository wardRepository,
                            BedRepository bedRepository,
                            WardService wardService,
                            BedService bedService) {
        this.admissionRepository = admissionRepository;
        this.userRepository = userRepository;
        this.wardRepository = wardRepository;
        this.bedRepository = bedRepository;
        this.wardService = wardService;
        this.bedService = bedService;
    }

    // ---- Admit Patient ----

    @Transactional
    public Admission admitPatient(Long patientId, Long doctorId, Long wardId, Long bedId) {

        // --- Resolve entities ---
        User patient = userRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException(patientId));

        User doctor = userRepository.findById(doctorId)
                .orElseThrow(() -> new DoctorNotFoundException(doctorId));

        Ward ward = wardRepository.findById(wardId)
                .orElseThrow(() -> new WardNotFoundException(wardId));

        // --- Rule 1: patient must not already be admitted ---
        List<AdmissionStatus> activeStatuses = List.of(
                AdmissionStatus.ADMITTED, AdmissionStatus.UNDER_TREATMENT, AdmissionStatus.PENDING);

        admissionRepository.findByPatientAndStatusIn(patient, activeStatuses)
                .ifPresent(existing -> {
                    throw new InvalidAdmissionStateException(
                        "Patient '" + patient.getUsername() +
                        "' is already admitted (status: " + existing.getStatus() + ").");
                });

        // --- Resolve bed (auto-assign first free bed in ward if bedId is null) ---
        Bed bed;
        if (bedId != null) {
            bed = bedRepository.findById(bedId)
                    .orElseThrow(() -> new ResourceNotFoundException("Bed", bedId));
            // Rule 2: bed must be free
            if (bed.getStatus() == BedStatus.OCCUPIED) {
                throw new BedOccupiedException(bed.getBedNumber());
            }
        } else {
            // Auto-assign first available free bed in the ward
            bed = bedRepository.findFirstByWardAndStatus(ward, BedStatus.FREE)
                    .orElseThrow(() -> new NoBedAvailableException(ward.getWardName()));
        }

        // --- Mark bed occupied, decrement ward count ---
        bedService.occupyBed(bed);
        wardService.decrementAvailableBeds(ward);

        // --- Create admission ---
        Admission admission = Admission.builder()
                .patient(patient)
                .doctor(doctor)
                .ward(ward)
                .bed(bed)
                .admissionDate(LocalDate.now())
                .status(AdmissionStatus.ADMITTED)
                .build();

        return admissionRepository.save(admission);
    }

    // ---- Update Status (e.g. ADMITTED → UNDER_TREATMENT) ----

    @Transactional
    public Admission updateStatus(Long admissionId, AdmissionStatus newStatus) {
        Admission admission = getAdmissionById(admissionId);

        // Rule 3: DISCHARGED is a terminal state — cannot transition out
        if (admission.getStatus() == AdmissionStatus.DISCHARGED) {
            throw new InvalidAdmissionStateException(
                "Cannot change status of a DISCHARGED admission. " +
                "Create a new admission for re-admission.");
        }

        // Prevent illegal backward transitions
        if (newStatus == AdmissionStatus.ADMITTED
                && admission.getStatus() == AdmissionStatus.UNDER_TREATMENT) {
            throw new InvalidAdmissionStateException(
                "Cannot move back from UNDER_TREATMENT to ADMITTED.");
        }

        admission.setStatus(newStatus);
        return admissionRepository.save(admission);
    }

    // ---- Discharge ----

    @Transactional
    public Admission dischargePatient(Long admissionId) {
        Admission admission = getAdmissionById(admissionId);

        if (admission.getStatus() == AdmissionStatus.DISCHARGED) {
            throw new InvalidAdmissionStateException("Patient is already discharged.");
        }

        // Rule 5: free the bed and increment ward available count
        bedService.freeBed(admission.getBed());
        wardService.incrementAvailableBeds(admission.getWard());

        admission.setStatus(AdmissionStatus.DISCHARGED);
        admission.setDischargeDate(LocalDate.now());
        return admissionRepository.save(admission);
    }

    // ---- Queries — all return List<Admission> ----

    public List<Admission> getAllAdmissions() {
        return admissionRepository.findAll();
    }

    public Admission getAdmissionById(Long id) {
        return admissionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Admission", id));
    }

    public List<Admission> getAdmissionsByPatient(Long patientId) {
        User patient = userRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException(patientId));
        return admissionRepository.findByPatient(patient);
    }

    public List<Admission> getAdmissionsByDoctor(Long doctorId) {
        User doctor = userRepository.findById(doctorId)
                .orElseThrow(() -> new DoctorNotFoundException(doctorId));
        return admissionRepository.findByDoctor(doctor);
    }

    public List<Admission> getAdmissionsByStatus(AdmissionStatus status) {
        return admissionRepository.findByStatus(status);
    }

    public List<Admission> getTodaysAdmissions() {
        return admissionRepository.findByAdmissionDate(LocalDate.now());
    }

    // ---- Counts for dashboard ----
    public long countByStatus(AdmissionStatus status) {
        return admissionRepository.countByStatus(status);
    }

    public long countTotal() {
        return admissionRepository.count();
    }
}
