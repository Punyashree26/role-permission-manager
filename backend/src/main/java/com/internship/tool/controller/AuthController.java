package com.internship.tool.controller;

import com.internship.tool.entity.User;
import com.internship.tool.repository.UserRepository;
import com.internship.tool.config.JwtUtil;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public AuthController(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    // ✅ REGISTER
    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        return ResponseEntity.ok(userRepository.save(user));
    }

    // ✅ LOGIN
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {

        User existing = userRepository.findByEmail(user.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!existing.getPassword().equals(user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token = jwtUtil.generateToken(existing.getEmail());

        return ResponseEntity.ok(token);
    }

    // ✅ REFRESH (basic version)
    @GetMapping("/refresh")
    public ResponseEntity<String> refresh(@RequestHeader("Authorization") String header) {

        String token = header.substring(7);
        String email = jwtUtil.extractEmail(token);

        String newToken = jwtUtil.generateToken(email);

        return ResponseEntity.ok(newToken);
    }
}