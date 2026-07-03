package com.klu.hospitalmanagement.dto;

import com.klu.hospitalmanagement.entity.User;
import lombok.Data;

/**
 * Response DTO sent to frontend after successful login.
 * Includes the JWT token along with user profile info.
 * Password is NEVER included in the response.
 */
@Data
public class AuthResponse {

    private String token;
    private Long id;
    private String username;
    private String email;
    private String role;
    private String profilePhoto;
    private String phone;
    private String address;
    private String gender;
    private Integer age;
    private String specialization;
    private String department;

    public static AuthResponse from(User user, String token) {
        AuthResponse res = new AuthResponse();
        res.setToken(token);
        res.setId(user.getId());
        res.setUsername(user.getUsername());
        res.setEmail(user.getEmail());
        res.setRole(user.getRole());
        res.setProfilePhoto(user.getProfilePhoto());
        res.setPhone(user.getPhone());
        res.setAddress(user.getAddress());
        res.setGender(user.getGender());
        res.setAge(user.getAge());
        res.setSpecialization(user.getSpecialization());
        res.setDepartment(user.getDepartment());
        return res;
    }
}
