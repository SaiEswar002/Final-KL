package com.klu.hospitalmanagement.controller;

import com.klu.hospitalmanagement.entity.Ward;
import com.klu.hospitalmanagement.service.WardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Ward Controller — REST API for hospital ward management.
 *
 * Base URL: /api/wards
 * All endpoints require JWT (configured in SecurityConfig).
 */
@RestController
@RequestMapping("/api/wards")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class WardController {

    private final WardService wardService;

    public WardController(WardService wardService) {
        this.wardService = wardService;
    }

    /** GET /api/wards — list all wards */
    @GetMapping
    public ResponseEntity<List<Ward>> getAllWards() {
        return ResponseEntity.ok(wardService.getAllWards());
    }

    /** GET /api/wards/{id} — get ward by ID */
    @GetMapping("/{id}")
    public ResponseEntity<Ward> getWardById(@PathVariable Long id) {
        return ResponseEntity.ok(wardService.getWardById(id));
    }

    /** POST /api/wards — create new ward */
    @PostMapping
    public ResponseEntity<Ward> createWard(@RequestBody Map<String, Object> request) {
        String wardName = (String) request.get("wardName");
        int totalBeds = Integer.parseInt(request.get("totalBeds").toString());
        return ResponseEntity.ok(wardService.createWard(wardName, totalBeds));
    }

    /** PUT /api/wards/{id} — update ward */
    @PutMapping("/{id}")
    public ResponseEntity<Ward> updateWard(@PathVariable Long id,
                                            @RequestBody Map<String, Object> request) {
        String wardName = (String) request.get("wardName");
        int totalBeds = Integer.parseInt(request.get("totalBeds").toString());
        return ResponseEntity.ok(wardService.updateWard(id, wardName, totalBeds));
    }

    /** DELETE /api/wards/{id} — delete ward */
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteWard(@PathVariable Long id) {
        wardService.deleteWard(id);
        return ResponseEntity.ok(Map.of("message", "Ward deleted successfully"));
    }
}
