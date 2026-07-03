package com.hms.controller;

import com.hms.entity.User;
import com.hms.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "http://localhost:5173")
public class DoctorController {

    @Autowired
    private UserService userService;

    /**
     * Get all registered doctors.
     */
    @GetMapping
    public ResponseEntity<List<User>> getAllDoctors() {
        return ResponseEntity.ok(userService.getDoctors());
    }

    /**
     * Get a specific doctor's profile by ID.
     */
    @GetMapping("/{id}")
    public ResponseEntity<?> getDoctorById(@PathVariable Long id) {
        return userService.getUserById(id)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
