package com.klu.hospitalmanagement.controller;

import com.klu.hospitalmanagement.entity.User;
import com.klu.hospitalmanagement.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Doctor controller — exposes the list of registered doctors.
 * Used by the frontend BookAppointment page to populate the doctor dropdown.
 *
 * Doctors are Users with role = "doctor".
 */
@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class DoctorController {

    private final UserService userService;

    public DoctorController(UserService userService) {
        this.userService = userService;
    }

    /**
     * GET /api/doctors — returns all users with role = "doctor".
     */
    @GetMapping
    public ResponseEntity<List<User>> getAllDoctors() {
        return ResponseEntity.ok(userService.getDoctors());
    }

    /**
     * GET /api/doctors/{id} — returns a single doctor by user ID.
     */
    @GetMapping("/{id}")
    public ResponseEntity<?> getDoctorById(@PathVariable Long id) {
        return userService.getUserById(id)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
