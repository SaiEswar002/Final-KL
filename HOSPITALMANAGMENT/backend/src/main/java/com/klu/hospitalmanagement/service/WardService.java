package com.klu.hospitalmanagement.service;

import com.klu.hospitalmanagement.entity.Ward;
import com.klu.hospitalmanagement.exception.WardNotFoundException;
import com.klu.hospitalmanagement.repository.WardRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class WardService {

    private final WardRepository wardRepository;

    public WardService(WardRepository wardRepository) {
        this.wardRepository = wardRepository;
    }

    /**
     * Create a new ward. totalBeds and availableBeds start equal.
     */
    @Transactional
    public Ward createWard(String wardName, int totalBeds) {
        if (wardRepository.existsByWardName(wardName)) {
            throw new IllegalArgumentException("Ward '" + wardName + "' already exists.");
        }
        Ward ward = Ward.builder()
                .wardName(wardName)
                .totalBeds(totalBeds)
                .availableBeds(totalBeds)
                .build();
        return wardRepository.save(ward);
    }

    /**
     * Returns all wards — List<Ward> demonstrates Java Collections usage.
     */
    public List<Ward> getAllWards() {
        return wardRepository.findAll();
    }

    public Ward getWardById(Long id) {
        return wardRepository.findById(id)
                .orElseThrow(() -> new WardNotFoundException(id));
    }

    public Ward getWardByName(String name) {
        return wardRepository.findByWardName(name)
                .orElseThrow(() -> new WardNotFoundException("Ward not found: " + name));
    }

    @Transactional
    public Ward updateWard(Long id, String wardName, int totalBeds) {
        Ward ward = getWardById(id);
        int diff = totalBeds - ward.getTotalBeds();
        ward.setWardName(wardName);
        ward.setTotalBeds(totalBeds);
        ward.setAvailableBeds(Math.max(0, ward.getAvailableBeds() + diff));
        return wardRepository.save(ward);
    }

    @Transactional
    public void deleteWard(Long id) {
        if (!wardRepository.existsById(id)) throw new WardNotFoundException(id);
        wardRepository.deleteById(id);
    }

    // Called by AdmissionService when a bed is occupied
    @Transactional
    public void decrementAvailableBeds(Ward ward) {
        ward.setAvailableBeds(Math.max(0, ward.getAvailableBeds() - 1));
        wardRepository.save(ward);
    }

    // Called by AdmissionService when a patient is discharged
    @Transactional
    public void incrementAvailableBeds(Ward ward) {
        if (ward.getAvailableBeds() < ward.getTotalBeds()) {
            ward.setAvailableBeds(ward.getAvailableBeds() + 1);
            wardRepository.save(ward);
        }
    }
}
