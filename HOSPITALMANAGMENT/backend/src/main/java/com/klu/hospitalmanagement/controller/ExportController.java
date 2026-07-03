package com.klu.hospitalmanagement.controller;

import com.klu.hospitalmanagement.entity.Admission;
import com.klu.hospitalmanagement.entity.User;
import com.klu.hospitalmanagement.service.AdmissionService;
import com.klu.hospitalmanagement.service.UserService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

/**
 * Export Controller — admin-only CSV export endpoints.
 *
 * Endpoints:
 *   GET /api/export/patients    — downloads patients as CSV + saves to exports/
 *   GET /api/export/admissions  — downloads admissions as CSV + saves to exports/
 *
 * Files are also persisted in the exports/ directory relative to working directory.
 */
@RestController
@RequestMapping("/api/export")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class ExportController {

    private final UserService userService;
    private final AdmissionService admissionService;

    private static final String EXPORTS_DIR = System.getProperty("user.dir") + "/exports/";

    public ExportController(UserService userService, AdmissionService admissionService) {
        this.userService = userService;
        this.admissionService = admissionService;
    }

    /**
     * GET /api/export/patients
     * Exports all patients (role=patient) as CSV.
     * Returns file as download AND saves a copy in exports/
     */
    @GetMapping("/patients")
    public ResponseEntity<byte[]> exportPatients() throws IOException {
        List<User> patients = userService.getAllUsers().stream()
                .filter(u -> "patient".equalsIgnoreCase(u.getRole()))
                .toList();

        StringBuilder csv = new StringBuilder();
        csv.append("ID,Username,Email,Phone,Address,Gender,Age\n");
        for (User p : patients) {
            csv.append(csvRow(
                p.getId(), p.getUsername(), p.getEmail(),
                p.getPhone(), p.getAddress(), p.getGender(), p.getAge()
            ));
        }

        String fileName = "patients_" + timestamp() + ".csv";
        saveToExportsDir(fileName, csv.toString());

        return buildDownloadResponse(csv.toString().getBytes(), fileName);
    }

    /**
     * GET /api/export/admissions
     * Exports all admissions as CSV.
     * Returns file as download AND saves a copy in exports/
     */
    @GetMapping("/admissions")
    public ResponseEntity<byte[]> exportAdmissions() throws IOException {
        List<Admission> admissions = admissionService.getAllAdmissions();

        StringBuilder csv = new StringBuilder();
        csv.append("ID,Patient,Doctor,Ward,Bed,AdmissionDate,DischargeDate,Status\n");
        for (Admission a : admissions) {
            csv.append(csvRow(
                a.getId(),
                a.getPatient().getUsername(),
                a.getDoctor().getUsername(),
                a.getWard().getWardName(),
                a.getBed().getBedNumber(),
                a.getAdmissionDate(),
                a.getDischargeDate() != null ? a.getDischargeDate() : "",
                a.getStatus()
            ));
        }

        String fileName = "admissions_" + timestamp() + ".csv";
        saveToExportsDir(fileName, csv.toString());

        return buildDownloadResponse(csv.toString().getBytes(), fileName);
    }

    // ---- Helpers ----

    private String csvRow(Object... values) {
        StringBuilder row = new StringBuilder();
        for (int i = 0; i < values.length; i++) {
            String val = values[i] != null ? values[i].toString().replace(",", ";") : "";
            row.append(val);
            if (i < values.length - 1) row.append(",");
        }
        row.append("\n");
        return row.toString();
    }

    private void saveToExportsDir(String fileName, String content) throws IOException {
        Path dir = Paths.get(EXPORTS_DIR);
        if (!Files.exists(dir)) Files.createDirectories(dir);
        Files.writeString(dir.resolve(fileName), content);
    }

    private ResponseEntity<byte[]> buildDownloadResponse(byte[] content, String fileName) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType("text/csv"));
        headers.setContentDispositionFormData("attachment", fileName);
        headers.setContentLength(content.length);
        return ResponseEntity.ok().headers(headers).body(content);
    }

    private String timestamp() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss"));
    }
}
