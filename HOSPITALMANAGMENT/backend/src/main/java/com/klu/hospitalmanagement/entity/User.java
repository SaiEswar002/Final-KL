package com.klu.hospitalmanagement.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    /**
     * Stored as BCrypt hash. Never plaintext.
     */
    @JsonIgnore
    @Column(nullable = false)
    private String password;

    /**
     * Values: "patient" | "doctor" | "admin"
     */
    @Column(nullable = false)
    @Builder.Default
    private String role = "patient";

    private String profilePhoto;

    // ---- Patient / Shared fields ----
    private String phone;
    private String address;
    private String gender;
    private Integer age;

    // ---- Doctor-specific fields ----
    private String specialization;
    private String department;
}
