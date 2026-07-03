package com.klu.hospitalmanagement.dto;

import lombok.Data;

@Data
public class AppointmentDTO {
    private Long userId;
    private String hospital;
    private String doctor;
    private String date;
    private String timeSlot;
    private String description;
    private String status;
}
