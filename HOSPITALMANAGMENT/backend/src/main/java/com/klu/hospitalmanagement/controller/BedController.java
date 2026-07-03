package com.klu.hospitalmanagement.controller;

import com.klu.hospitalmanagement.entity.Bed;
import com.klu.hospitalmanagement.service.BedService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Bed Controller — REST API for hospital bed management.
 *
 * Base URL: /api/beds
 * All endpoints require JWT.
 */
@RestController
@RequestMapping("/api/beds")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class BedController {

    private final BedService bedService;

    public BedController(BedService bedService) {
        this.bedService = bedService;
    }

    /** GET /api/beds — all beds */
    @GetMapping
    public ResponseEntity<List<Bed>> getAllBeds() {
        return ResponseEntity.ok(bedService.getAllBeds());
    }

    /** GET /api/beds/free — all free beds */
    @GetMapping("/free")
    public ResponseEntity<List<Bed>> getFreeBeds() {
        return ResponseEntity.ok(bedService.getFreeBeds());
    }

    /** GET /api/beds/occupied — all occupied beds */
    @GetMapping("/occupied")
    public ResponseEntity<List<Bed>> getOccupiedBeds() {
        return ResponseEntity.ok(bedService.getOccupiedBeds());
    }

    /** GET /api/beds/ward/{wardId} — beds in a specific ward */
    @GetMapping("/ward/{wardId}")
    public ResponseEntity<List<Bed>> getBedsByWard(@PathVariable Long wardId) {
        return ResponseEntity.ok(bedService.getBedsByWard(wardId));
    }

    /**
     * GET /api/beds/grouped — beds grouped by ward ID.
     * Returns Map<Long, List<Bed>> — demonstrates Java Collections Map usage.
     */
    @GetMapping("/grouped")
    public ResponseEntity<Map<Long, List<Bed>>> getBedsGrouped() {
        return ResponseEntity.ok(bedService.getBedsGroupedByWard());
    }

    /** GET /api/beds/{id} — single bed */
    @GetMapping("/{id}")
    public ResponseEntity<Bed> getBedById(@PathVariable Long id) {
        return ResponseEntity.ok(bedService.getBedById(id));
    }

    /** POST /api/beds — add a new bed to a ward */
    @PostMapping
    public ResponseEntity<Bed> addBed(@RequestBody Map<String, Object> request) {
        String bedNumber = (String) request.get("bedNumber");
        Long wardId = Long.parseLong(request.get("wardId").toString());
        return ResponseEntity.ok(bedService.addBed(bedNumber, wardId));
    }

    /** DELETE /api/beds/{id} — remove a bed */
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteBed(@PathVariable Long id) {
        bedService.deleteBed(id);
        return ResponseEntity.ok(Map.of("message", "Bed deleted successfully"));
    }

    /** GET /api/beds/stats — quick bed count stats */
    @GetMapping("/stats")
    public ResponseEntity<Map<String, Long>> getBedStats() {
        return ResponseEntity.ok(Map.of(
            "total",    bedService.countTotal(),
            "free",     bedService.countFree(),
            "occupied", bedService.countOccupied()
        ));
    }
}
