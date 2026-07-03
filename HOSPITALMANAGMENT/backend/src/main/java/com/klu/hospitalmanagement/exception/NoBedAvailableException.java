package com.klu.hospitalmanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.SERVICE_UNAVAILABLE)
public class NoBedAvailableException extends RuntimeException {
    public NoBedAvailableException(String wardName) {
        super("No free beds available in ward: " + wardName);
    }
}
