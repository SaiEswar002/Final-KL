package com.klu.hospitalmanagement.controller;

import com.klu.hospitalmanagement.dto.DashboardStatsDTO;
import com.klu.hospitalmanagement.enums.AdmissionStatus;
import com.klu.hospitalmanagement.repository.UserRepository;
import com.klu.hospitalmanagement.repository.WardRepository;
import com.klu.hospitalmanagement.service.AdmissionService;
import com.klu.hospitalmanagement.service.AppointmentService;
import com.klu.hospitalmanagement.service.BedService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Dashboard Controller — aggregates statistics from all modules.
 *
 * GET /api/dashboard/stats — single call returns all counts for the admin dashboard.
 *
 * Data returned:
 *   - Total Patients, Total Doctors
 *   - Total/Today's Appointments
 *   - Total/Occupied/Available Beds
 *   - Total Wards
 *   - Total/Active/Pending/Discharged Admissions
 */
@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class DashboardController {

    private final UserRepository userRepository;
    private final AppointmentService appointmentService;
    private final BedService bedService;
    private final WardRepository wardRepository;
    private final AdmissionService admissionService;

    public DashboardController(UserRepository userRepository,
                                AppointmentService appointmentService,
                                BedService bedService,
                                WardRepository wardRepository,
                                AdmissionService admissionService) {
        this.userRepository = userRepository;
        this.appointmentService = appointmentService;
        this.bedService = bedService;
        this.wardRepository = wardRepository;
        this.admissionService = admissionService;
    }

    @GetMapping("/stats")
    public ResponseEntity<DashboardStatsDTO> getDashboardStats() {

        long totalPatients = userRepository.findByRole("patient").size();
        long totalDoctors  = userRepository.findByRole("doctor").size();
        long totalUsers    = userRepository.count();

        long totalAppointments = appointmentService.getAllAppointments().size();
        long todaysAppointments = appointmentService.countToday();

        long totalBeds    = bedService.countTotal();
        long occupiedBeds = bedService.countOccupied();
        long freeBeds     = bedService.countFree();

        long totalWards = wardRepository.count();

        long totalAdmissions     = admissionService.countTotal();
        long admittedCount       = admissionService.countByStatus(AdmissionStatus.ADMITTED);
        long underTreatmentCount = admissionService.countByStatus(AdmissionStatus.UNDER_TREATMENT);
        long pendingAdmissions   = admissionService.countByStatus(AdmissionStatus.PENDING);
        long dischargedAdmissions = admissionService.countByStatus(AdmissionStatus.DISCHARGED);

        DashboardStatsDTO stats = DashboardStatsDTO.builder()
                .totalPatients(totalPatients)
                .totalDoctors(totalDoctors)
                .totalUsers(totalUsers)
                .totalAppointments(totalAppointments)
                .todaysAppointments(todaysAppointments)
                .totalBeds(totalBeds)
                .occupiedBeds(occupiedBeds)
                .availableBeds(freeBeds)
                .totalWards(totalWards)
                .totalAdmissions(totalAdmissions)
                .activeAdmissions(admittedCount + underTreatmentCount)
                .pendingAdmissions(pendingAdmissions)
                .dischargedAdmissions(dischargedAdmissions)
                .build();

        return ResponseEntity.ok(stats);
    }
}
