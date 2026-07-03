package com.klu.hospitalmanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class InvalidAdmissionStateException extends RuntimeException {
    public InvalidAdmissionStateException(String message) {
        super(message);
    }
}
