package com.klu.hospitalmanagement.repository;

import com.klu.hospitalmanagement.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findByUserId(Long userId);

    List<Appointment> findByDoctor(String doctor);

    List<Appointment> findByStatus(String status);

    List<Appointment> findByDate(String date);
}
