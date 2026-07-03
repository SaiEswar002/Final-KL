package com.klu.hospitalmanagement.repository;

import com.klu.hospitalmanagement.entity.Ward;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WardRepository extends JpaRepository<Ward, Long> {

    Optional<Ward> findByWardName(String wardName);

    boolean existsByWardName(String wardName);
}
