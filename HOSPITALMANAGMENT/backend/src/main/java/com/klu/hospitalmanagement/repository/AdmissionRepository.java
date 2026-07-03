package com.klu.hospitalmanagement.repository;

import com.klu.hospitalmanagement.entity.Admission;
import com.klu.hospitalmanagement.entity.Bed;
import com.klu.hospitalmanagement.entity.User;
import com.klu.hospitalmanagement.enums.AdmissionStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface AdmissionRepository extends JpaRepository<Admission, Long> {

    List<Admission> findByPatient(User patient);

    List<Admission> findByDoctor(User doctor);

    List<Admission> findByStatus(AdmissionStatus status);

    /**
     * Find active admission for a patient — used to prevent double admissions.
     */
    Optional<Admission> findByPatientAndStatusIn(User patient, List<AdmissionStatus> statuses);

    /**
     * Check if a bed has an active assignment.
     */
    Optional<Admission> findByBedAndStatusIn(Bed bed, List<AdmissionStatus> statuses);

    /**
     * Admissions created on a specific date — used in dashboard today-count.
     */
    List<Admission> findByAdmissionDate(LocalDate date);

    /**
     * Count by status — for dashboard statistics.
     */
    long countByStatus(AdmissionStatus status);
}
