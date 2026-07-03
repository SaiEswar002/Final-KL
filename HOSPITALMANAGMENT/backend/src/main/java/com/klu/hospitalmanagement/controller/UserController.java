package com.klu.hospitalmanagement.controller;

import com.klu.hospitalmanagement.dto.AuthResponse;
import com.klu.hospitalmanagement.dto.LoginRequest;
import com.klu.hospitalmanagement.entity.User;
import com.klu.hospitalmanagement.service.UserService;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 * User controller — handles auth (register/login) and user management.
 *
 * Login endpoint returns an AuthResponse containing:
 *   - JWT token (Bearer)
 *   - Full user profile (id, username, email, role, etc.)
 *
 * Sensitive data (password hash) is NEVER returned.
 */
@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = {
	    "http://localhost:5173",
	    "http://localhost:5174",
	    "http://localhost:3000"
	})
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // ---- POST /api/users/register ----
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(
            @RequestParam("username") String username,
            @RequestParam("email") String email,
            @RequestParam("password") String password,
            @RequestParam(value = "role", defaultValue = "patient") String role,
            @RequestParam(value = "phone", required = false) String phone,
            @RequestParam(value = "address", required = false) String address,
            @RequestParam(value = "gender", required = false) String gender,
            @RequestParam(value = "age", required = false) Integer age,
            @RequestParam(value = "specialization", required = false) String specialization,
            @RequestParam(value = "department", required = false) String department,
            @RequestParam(value = "profilePhoto", required = false) MultipartFile profilePhoto) {
    	System.out.println("========== REGISTER API HIT ==========");
        try {
            User saved = userService.register(username, email, password, role,
                    phone, address, gender, age, specialization, department, profilePhoto);

            // Return the full user object (no password field exposed — entity has no @JsonProperty)
            return ResponseEntity.ok(saved);

        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", e.getMessage()));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to save profile photo."));
        }
    }

    // ---- POST /api/users/login ----
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        try {
            AuthResponse response = userService.login(loginRequest.getEmail(), loginRequest.getPassword());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", e.getMessage()));
        }
    }

    // ---- GET /api/users/user?email=... ----
    @GetMapping("/user")
    public ResponseEntity<?> getUserByEmail(@RequestParam String email) {
        return userService.getUserByEmail(email)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("message", "User not found")));
    }

    // ---- GET /api/users/{id} ----
    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        return userService.getUserById(id)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("message", "User not found")));
    }

    // ---- PUT /api/users/update/{id} ----
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        try {
            return ResponseEntity.ok(userService.updateProfile(id, updatedUser));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", e.getMessage()));
        }
    }

    // ---- GET /api/users/all ----
    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    // ---- DELETE /api/users/{id} ----
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        try {
            userService.deleteUser(id);
            return ResponseEntity.ok(Map.of("message", "User deleted successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", e.getMessage()));
        }
    }
}
