package com.klu.hospitalmanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class BedOccupiedException extends RuntimeException {
    public BedOccupiedException(String bedNumber) {
        super("Bed '" + bedNumber + "' is already occupied and cannot be assigned.");
    }
}
