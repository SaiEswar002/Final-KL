package com.hms.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    /**
     * Role values: "patient", "doctor", "admin"
     */
    @Column(nullable = false)
    private String role;

    private String profilePhoto;

    // ---- Patient / Common fields ----
    private String phone;
    private String address;
    private String gender;
    private Integer age;

    // ---- Doctor-specific fields ----
    private String specialization;
    private String department;
}
