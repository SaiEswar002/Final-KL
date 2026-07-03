package com.klu.hospitalmanagement.service;

import com.klu.hospitalmanagement.entity.Bed;
import com.klu.hospitalmanagement.entity.Ward;
import com.klu.hospitalmanagement.enums.BedStatus;
import com.klu.hospitalmanagement.exception.BedOccupiedException;
import com.klu.hospitalmanagement.exception.ResourceNotFoundException;
import com.klu.hospitalmanagement.exception.WardNotFoundException;
import com.klu.hospitalmanagement.repository.BedRepository;
import com.klu.hospitalmanagement.repository.WardRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class BedService {

    private final BedRepository bedRepository;
    private final WardRepository wardRepository;

    public BedService(BedRepository bedRepository, WardRepository wardRepository) {
        this.bedRepository = bedRepository;
        this.wardRepository = wardRepository;
    }

    @Transactional
    public Bed addBed(String bedNumber, Long wardId) {
        Ward ward = wardRepository.findById(wardId)
                .orElseThrow(() -> new WardNotFoundException(wardId));

        if (bedRepository.existsByBedNumberAndWard(bedNumber, ward)) {
            throw new IllegalArgumentException(
                "Bed '" + bedNumber + "' already exists in ward '" + ward.getWardName() + "'.");
        }

        return bedRepository.save(Bed.builder()
                .bedNumber(bedNumber)
                .ward(ward)
                .status(BedStatus.FREE)
                .build());
    }

    public Bed getBedById(Long id) {
        return bedRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Bed", id));
    }

    /**
     * Returns all beds for a given ward.
     * List<Bed> — explicit Java Collections usage.
     */
    public List<Bed> getBedsByWard(Long wardId) {
        Ward ward = wardRepository.findById(wardId)
                .orElseThrow(() -> new WardNotFoundException(wardId));
        return bedRepository.findByWard(ward);
    }

    /**
     * Returns beds grouped by ward — Map<Long, List<Bed>>.
     * Demonstrates Java Collections Map usage for academic evaluation.
     */
    public Map<Long, List<Bed>> getBedsGroupedByWard() {
        List<Bed> allBeds = bedRepository.findAll();
        Map<Long, List<Bed>> bedMap = new HashMap<>();
        for (Bed bed : allBeds) {
            Long wardId = bed.getWard().getId();
            bedMap.computeIfAbsent(wardId, k -> new ArrayList<>()).add(bed);
        }
        return bedMap;
    }

    public List<Bed> getAllBeds() {
        return bedRepository.findAll();
    }

    public List<Bed> getFreeBeds() {
        return bedRepository.findByStatus(BedStatus.FREE);
    }

    public List<Bed> getOccupiedBeds() {
        return bedRepository.findByStatus(BedStatus.OCCUPIED);
    }

    /**
     * Mark a bed as OCCUPIED — called by AdmissionService on admit.
     */
    @Transactional
    public void occupyBed(Bed bed) {
        if (bed.getStatus() == BedStatus.OCCUPIED) {
            throw new BedOccupiedException(bed.getBedNumber());
        }
        bed.setStatus(BedStatus.OCCUPIED);
        bedRepository.save(bed);
    }

    /**
     * Mark a bed as FREE — called by AdmissionService on discharge.
     */
    @Transactional
    public void freeBed(Bed bed) {
        bed.setStatus(BedStatus.FREE);
        bedRepository.save(bed);
    }

    @Transactional
    public void deleteBed(Long id) {
        if (!bedRepository.existsById(id)) {
            throw new ResourceNotFoundException("Bed", id);
        }
        bedRepository.deleteById(id);
    }

    public long countTotal() { return bedRepository.count(); }
    public long countFree()  { return bedRepository.countByStatus(BedStatus.FREE); }
    public long countOccupied() { return bedRepository.countByStatus(BedStatus.OCCUPIED); }
}
