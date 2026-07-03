package com.klu.hospitalmanagement.dto;

import lombok.Builder;
import lombok.Data;

/**
 * Dashboard statistics DTO — returned by GET /api/dashboard/stats.
 * Aggregates counts from all modules in one response.
 */
@Data
@Builder
public class DashboardStatsDTO {

    // Users
    private long totalPatients;
    private long totalDoctors;
    private long totalUsers;

    // Appointments
    private long totalAppointments;
    private long todaysAppointments;

    // Beds
    private long totalBeds;
    private long occupiedBeds;
    private long availableBeds;

    // Wards
    private long totalWards;

    // Admissions
    private long totalAdmissions;
    private long activeAdmissions;    // ADMITTED + UNDER_TREATMENT
    private long pendingAdmissions;
    private long dischargedAdmissions;
}
