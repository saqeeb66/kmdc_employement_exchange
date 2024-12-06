package com.kmdc.candidateform.Controller;

import com.kmdc.candidateform.model.User;
import com.kmdc.candidateform.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Registration endpoint
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        boolean registrationSuccessful = userService.registerUser(user);
        if (registrationSuccessful) {
            return ResponseEntity.ok("Registration successful!");
        } else {
            return ResponseEntity.badRequest().body("Username or email already exists.");
        }
    }

    // Login endpoint
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        boolean isAuthenticated = userService.authenticateUser(user);
        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials.");
        }
    }
}
