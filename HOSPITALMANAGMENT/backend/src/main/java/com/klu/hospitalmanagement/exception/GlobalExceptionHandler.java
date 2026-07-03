package com.klu.hospitalmanagement.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.*;

/**
 * Global exception handler — catches all domain exceptions and returns
 * consistent JSON error responses with timestamp, status, and message.
 *
 * All custom exceptions are mapped here so controllers stay clean.
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    // ---- 404 Not Found ----

    @ExceptionHandler({
        ResourceNotFoundException.class,
        PatientNotFoundException.class,
        DoctorNotFoundException.class,
        WardNotFoundException.class
    })
    public ResponseEntity<Map<String, Object>> handleNotFound(RuntimeException ex) {
        return buildResponse(HttpStatus.NOT_FOUND, ex.getMessage());
    }

    // ---- 409 Conflict ----

    @ExceptionHandler(BedOccupiedException.class)
    public ResponseEntity<Map<String, Object>> handleBedOccupied(BedOccupiedException ex) {
        return buildResponse(HttpStatus.CONFLICT, ex.getMessage());
    }

    // ---- 400 Bad Request ----

    @ExceptionHandler({
        InvalidAdmissionStateException.class,
        IllegalArgumentException.class
    })
    public ResponseEntity<Map<String, Object>> handleBadRequest(RuntimeException ex) {
        return buildResponse(HttpStatus.BAD_REQUEST, ex.getMessage());
    }

    // ---- 503 Service Unavailable ----

    @ExceptionHandler(NoBedAvailableException.class)
    public ResponseEntity<Map<String, Object>> handleNoBed(NoBedAvailableException ex) {
        return buildResponse(HttpStatus.SERVICE_UNAVAILABLE, ex.getMessage());
    }

    // ---- 500 Internal Server Error (catch-all) ----

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleGeneral(Exception ex) {
        return buildResponse(HttpStatus.INTERNAL_SERVER_ERROR,
                "An unexpected error occurred: " + ex.getMessage());
    }

    // ---- Helper ----

    private ResponseEntity<Map<String, Object>> buildResponse(HttpStatus status, String message) {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("timestamp", LocalDateTime.now().toString());
        body.put("status", status.value());
        body.put("error", status.getReasonPhrase());
        body.put("message", message);
        return ResponseEntity.status(status).body(body);
    }
}
