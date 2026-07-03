package com.klu.hospitalmanagement.controller;

import com.klu.hospitalmanagement.entity.Admission;
import com.klu.hospitalmanagement.enums.AdmissionStatus;
import com.klu.hospitalmanagement.service.AdmissionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Admission Controller — REST API for patient admission management.
 *
 * Base URL: /api/admissions
 * All endpoints require JWT.
 *
 * Business rules enforced in AdmissionService:
 *   - Patient cannot be admitted twice
 *   - Bed must be FREE before assignment
 *   - DISCHARGED is a terminal state (cannot re-admit)
 *   - Bed and ward counts update automatically
 */
@RestController
@RequestMapping("/api/admissions")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class AdmissionController {

    private final AdmissionService admissionService;

    public AdmissionController(AdmissionService admissionService) {
        this.admissionService = admissionService;
    }

    /**
     * POST /api/admissions
     * Body: { patientId, doctorId, wardId, bedId (optional) }
     * If bedId is omitted, the first free bed in the ward is auto-assigned.
     */
    @PostMapping
    public ResponseEntity<Admission> admitPatient(@RequestBody Map<String, Object> request) {
        Long patientId = Long.parseLong(request.get("patientId").toString());
        Long doctorId  = Long.parseLong(request.get("doctorId").toString());
        Long wardId    = Long.parseLong(request.get("wardId").toString());
        Long bedId     = request.containsKey("bedId") && request.get("bedId") != null
                         ? Long.parseLong(request.get("bedId").toString()) : null;

        return ResponseEntity.ok(admissionService.admitPatient(patientId, doctorId, wardId, bedId));
    }

    /** GET /api/admissions — all admissions */
    @GetMapping
    public ResponseEntity<List<Admission>> getAllAdmissions() {
        return ResponseEntity.ok(admissionService.getAllAdmissions());
    }

    /** GET /api/admissions/{id} */
    @GetMapping("/{id}")
    public ResponseEntity<Admission> getAdmissionById(@PathVariable Long id) {
        return ResponseEntity.ok(admissionService.getAdmissionById(id));
    }

    /** GET /api/admissions/patient/{patientId} */
    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<Admission>> getByPatient(@PathVariable Long patientId) {
        return ResponseEntity.ok(admissionService.getAdmissionsByPatient(patientId));
    }

    /** GET /api/admissions/doctor/{doctorId} */
    @GetMapping("/doctor/{doctorId}")
    public ResponseEntity<List<Admission>> getByDoctor(@PathVariable Long doctorId) {
        return ResponseEntity.ok(admissionService.getAdmissionsByDoctor(doctorId));
    }

    /** GET /api/admissions/status/{status} */
    @GetMapping("/status/{status}")
    public ResponseEntity<List<Admission>> getByStatus(@PathVariable String status) {
        AdmissionStatus admissionStatus = AdmissionStatus.valueOf(status.toUpperCase());
        return ResponseEntity.ok(admissionService.getAdmissionsByStatus(admissionStatus));
    }

    /** GET /api/admissions/today */
    @GetMapping("/today")
    public ResponseEntity<List<Admission>> getTodaysAdmissions() {
        return ResponseEntity.ok(admissionService.getTodaysAdmissions());
    }

    /**
     * PUT /api/admissions/{id}/status
     * Body: { "status": "UNDER_TREATMENT" }
     */
    @PutMapping("/{id}/status")
    public ResponseEntity<Admission> updateStatus(@PathVariable Long id,
                                                   @RequestBody Map<String, String> request) {
        AdmissionStatus newStatus = AdmissionStatus.valueOf(request.get("status").toUpperCase());
        return ResponseEntity.ok(admissionService.updateStatus(id, newStatus));
    }

    /**
     * PUT /api/admissions/{id}/discharge
     * Marks patient as DISCHARGED, frees the bed, updates ward count.
     */
    @PutMapping("/{id}/discharge")
    public ResponseEntity<Admission> dischargePatient(@PathVariable Long id) {
        return ResponseEntity.ok(admissionService.dischargePatient(id));
    }
}
