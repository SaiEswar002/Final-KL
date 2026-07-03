package com.klu.hospitalmanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class WardNotFoundException extends RuntimeException {
    public WardNotFoundException(String message) { super(message); }
    public WardNotFoundException(Long id) { super("Ward not found with id: " + id); }
}
