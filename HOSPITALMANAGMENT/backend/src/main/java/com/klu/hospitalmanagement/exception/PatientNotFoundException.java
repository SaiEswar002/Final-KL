package com.klu.hospitalmanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class PatientNotFoundException extends RuntimeException {
    public PatientNotFoundException(String message) { super(message); }
    public PatientNotFoundException(Long id) { super("Patient not found with id: " + id); }
}
