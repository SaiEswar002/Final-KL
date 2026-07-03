package com.klu.hospitalmanagement.controller;

import com.klu.hospitalmanagement.entity.Appointment;
import com.klu.hospitalmanagement.service.AppointmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Appointment controller — CRUD operations for hospital appointments.
 *
 * Endpoints:
 *   POST   /api/appointments              — create (patient books)
 *   GET    /api/appointments              — list all (admin)
 *   GET    /api/appointments/user/{id}    — list by patient ID
 *   PUT    /api/appointments/{id}/cancel  — cancel appointment
 *   DELETE /api/appointments/{id}         — hard delete (admin)
 */
@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class AppointmentController {

    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @PostMapping
    public ResponseEntity<?> createAppointment(@RequestBody Appointment appointment) {
        try {
            Appointment saved = appointmentService.createAppointment(appointment);
            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", "Failed to create appointment: " + e.getMessage()));
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Appointment>> getAppointmentsByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(appointmentService.getAppointmentsByUserId(userId));
    }

    @GetMapping
    public ResponseEntity<List<Appointment>> getAllAppointments() {
        return ResponseEntity.ok(appointmentService.getAllAppointments());
    }

    @PutMapping("/{id}/cancel")
    public ResponseEntity<?> cancelAppointment(@PathVariable Long id) {
        try {
            appointmentService.cancelAppointment(id);
            return ResponseEntity.ok(Map.of("message", "Appointment cancelled successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAppointment(@PathVariable Long id) {
        try {
            appointmentService.deleteAppointment(id);
            return ResponseEntity.ok(Map.of("message", "Appointment deleted successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", e.getMessage()));
        }
    }
}
