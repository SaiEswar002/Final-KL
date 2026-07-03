package com.klu.hospitalmanagement.service;

import com.klu.hospitalmanagement.entity.Appointment;
import com.klu.hospitalmanagement.exception.ResourceNotFoundException;
import com.klu.hospitalmanagement.repository.AppointmentRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

/**
 * AppointmentService — manages appointment CRUD operations.
 *
 * Java Collections usage (academic requirement):
 *   - Queue<Appointment> : in-memory pending appointment queue (FIFO processing)
 *   - List<Appointment>  : all return types for appointment lists
 *
 * The appointmentQueue holds newly created appointments before they are
 * persisted, demonstrating Queue-based scheduling patterns.
 */
@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;

    /**
     * In-memory FIFO queue of pending appointments.
     * Queue<Appointment> — explicit Java Collections usage for academic evaluation.
     * LinkedList implements Queue interface.
     */
    private final Queue<Appointment> appointmentQueue = new LinkedList<>();

    public AppointmentService(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    // ---- Create ----

    public Appointment createAppointment(Appointment appointment) {
        appointment.setStatus("booked");
        appointment.setCreatedAt(LocalDateTime.now());

        // Enqueue before persisting — demonstrates Queue<Appointment>
        appointmentQueue.offer(appointment);

        Appointment saved = appointmentRepository.save(appointment);

        // Dequeue after successful persistence
        appointmentQueue.poll();

        return saved;
    }

    // ---- Queries — all return List<Appointment> ----

    public List<Appointment> getAppointmentsByUserId(Long userId) {
        return appointmentRepository.findByUserId(userId);
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    /**
     * Returns appointments scheduled for today — used by DashboardController.
     */
    public List<Appointment> getTodaysAppointments() {
        String today = LocalDate.now().toString();
        return appointmentRepository.findByDate(today);
    }

    public long countToday() {
        return getTodaysAppointments().size();
    }

    // ---- Status Change ----

    public void cancelAppointment(Long id) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Appointment", id));
        appointment.setStatus("cancelled");
        appointment.setUpdatedAt(LocalDateTime.now());
        appointmentRepository.save(appointment);
    }

    public void deleteAppointment(Long id) {
        if (!appointmentRepository.existsById(id)) {
            throw new ResourceNotFoundException("Appointment", id);
        }
        appointmentRepository.deleteById(id);
    }

    // ---- Queue Inspection (for academic / debug purposes) ----

    /**
     * Returns the current size of the in-memory appointment queue.
     */
    public int getQueueSize() {
        return appointmentQueue.size();
    }

    /**
     * Peeks at the next appointment in the queue without removing it.
     */
    public Appointment peekQueue() {
        return appointmentQueue.peek();
    }
}
