package com.hms.service;

import com.hms.entity.User;
import com.hms.exception.ResourceNotFoundException;
import com.hms.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User register(String username, String email, String password, String role,
                         String phone, String address, String gender, Integer age,
                         String specialization, String department,
                         MultipartFile profilePhoto) throws IOException {

        if (userRepository.existsByEmail(email)) {
            throw new IllegalArgumentException("Email already in use");
        }
        if (userRepository.existsByUsername(username)) {
            throw new IllegalArgumentException("Username already in use");
        }

        String fileName = null;
        if (profilePhoto != null && !profilePhoto.isEmpty()) {
            fileName = System.currentTimeMillis() + "_" + profilePhoto.getOriginalFilename();
            String uploadDir = System.getProperty("user.dir") + "/uploads/";
            File uploadFolder = new File(uploadDir);
            if (!uploadFolder.exists()) {
                uploadFolder.mkdirs();
            }
            profilePhoto.transferTo(new File(uploadDir + fileName));
        }

        User user = User.builder()
                .username(username)
                .email(email)
                .password(password)
                .role(role)
                .phone(phone)
                .address(address)
                .gender(gender)
                .age(age)
                .specialization(specialization)
                .department(department)
                .profilePhoto(fileName)
                .build();

        return userRepository.save(user);
    }

    public User login(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));

        if (!user.getPassword().equals(password)) {
            throw new IllegalArgumentException("Invalid credentials");
        }
        return user;
    }

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

    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new ResourceNotFoundException("User", id);
        }
        userRepository.deleteById(id);
    }
}
