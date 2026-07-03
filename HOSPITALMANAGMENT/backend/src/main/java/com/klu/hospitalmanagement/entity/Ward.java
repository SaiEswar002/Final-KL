package com.klu.hospitalmanagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "wards")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Ward {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String wardName;

    @Column(nullable = false)
    private int totalBeds;

    @Column(nullable = false)
    private int availableBeds;
}
