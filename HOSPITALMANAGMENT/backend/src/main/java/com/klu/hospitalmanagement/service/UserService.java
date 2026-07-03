package com.klu.hospitalmanagement.service;

import com.klu.hospitalmanagement.dto.AuthResponse;
import com.klu.hospitalmanagement.entity.User;
import com.klu.hospitalmanagement.exception.ResourceNotFoundException;
import com.klu.hospitalmanagement.repository.UserRepository;
import com.klu.hospitalmanagement.security.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

/**
 * User service — merged from travel-backend-jenkins UserService and previous HMS UserService.
 *
 * Migrated features:
 *  - BCrypt password hashing (from travel backend)
 *  - JWT token generation on login (from travel backend)
 *  - File upload for profile photos (from HMS backend)
 *  - Hospital-domain fields: role, phone, address, gender, age, specialization, department
 */
@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public UserService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    // ---- Registration ----

    public User register(String username, String email, String password, String role,
                         String phone, String address, String gender, Integer age,
                         String specialization, String department,
                         MultipartFile profilePhoto) throws IOException {

        if (userRepository.existsByEmail(email)) {
            throw new IllegalArgumentException("Email is already registered.");
        }
        if (userRepository.existsByUsername(username)) {
            throw new IllegalArgumentException("Username is already taken.");
        }

        String photoFileName = saveProfilePhoto(profilePhoto);

        User user = User.builder()
                .username(username)
                .email(email)
                .password(passwordEncoder.encode(password))   // BCrypt hash
                .role(role != null ? role : "patient")
                .phone(phone)
                .address(address)
                .gender(gender)
                .age(age)
                .specialization(specialization)
                .department(department)
                .profilePhoto(photoFileName)
                .build();

        return userRepository.save(user);
    }

    // ---- Login — returns AuthResponse with JWT ----

    public AuthResponse login(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("No account found with this email."));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new IllegalArgumentException("Incorrect password.");
        }

        String token = jwtUtil.generateToken(user.getEmail());
        return AuthResponse.from(user, token);
    }

    // ---- Profile Update ----

    public User updateProfile(Long id, User updatedData) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", id));

        user.setUsername(updatedData.getUsername());
        user.setPhone(updatedData.getPhone());
        user.setAddress(updatedData.getAddress());
        user.setGender(updatedData.getGender());
        user.setAge(updatedData.getAge());
        user.setSpecialization(updatedData.getSpecialization());
        user.setDepartment(updatedData.getDepartment());

        return userRepository.save(user);
    }

    // ---- Queries ----

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<User> getDoctors() {
        return userRepository.findByRole("doctor");
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    // ---- Delete ----

    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new ResourceNotFoundException("User", id);
        }
        userRepository.deleteById(id);
    }

    // ---- Private Helpers ----

    private String saveProfilePhoto(MultipartFile photo) throws IOException {
        if (photo == null || photo.isEmpty()) return null;
        String fileName = System.currentTimeMillis() + "_" + photo.getOriginalFilename();
        String uploadDir = System.getProperty("user.dir") + "/uploads/";
        File folder = new File(uploadDir);
        if (!folder.exists()) folder.mkdirs();
        photo.transferTo(new File(uploadDir + fileName));
        return fileName;
    }
}
