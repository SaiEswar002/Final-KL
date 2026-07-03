package com.klu.hospitalmanagement.repository;

import com.klu.hospitalmanagement.entity.Bed;
import com.klu.hospitalmanagement.entity.Ward;
import com.klu.hospitalmanagement.enums.BedStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BedRepository extends JpaRepository<Bed, Long> {

    List<Bed> findByWard(Ward ward);

    List<Bed> findByWardAndStatus(Ward ward, BedStatus status);

    List<Bed> findByStatus(BedStatus status);

    Optional<Bed> findFirstByWardAndStatus(Ward ward, BedStatus status);

    boolean existsByBedNumberAndWard(String bedNumber, Ward ward);

    long countByStatus(BedStatus status);
}
