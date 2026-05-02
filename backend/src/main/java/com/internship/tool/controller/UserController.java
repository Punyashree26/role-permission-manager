package com.internship.tool.controller;

import com.internship.tool.entity.User;
import com.internship.tool.service.UserService;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import jakarta.validation.Valid;

// ✅ ADD THIS
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/create")
    // ✅ ADD THIS
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        User savedUser = userService.createUser(user);
        return ResponseEntity.status(201).body(savedUser);
    }

    @GetMapping("/{id}")
    // ✅ ADD THIS
    @PreAuthorize("hasAnyRole('USER','ADMIN')")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/all")
    // ✅ ADD THIS
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Page<User>> getAllUsers(Pageable pageable) {
        Page<User> users = userService.getAllUsers(pageable);
        return ResponseEntity.ok(users);
    }
}

// package com.internship.tool.controller;

// import com.internship.tool.entity.User;
// import com.internship.tool.service.UserService;

// import org.springframework.web.bind.annotation.*;
// import org.springframework.http.ResponseEntity;
// import org.springframework.data.domain.Page;
// import org.springframework.data.domain.Pageable;

// import jakarta.validation.Valid;

// @RestController
// @RequestMapping("/users")
// public class UserController {

//     private final UserService userService;

//     public UserController(UserService userService) {
//         this.userService = userService;
//     }

//     @PostMapping("/create")
//     public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
//         User savedUser = userService.createUser(user);
//         return ResponseEntity.status(201).body(savedUser);
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<User> getUserById(@PathVariable Long id) {
//         User user = userService.getUserById(id);
//         return ResponseEntity.ok(user);
//     }

//     @GetMapping("/all")
//     public ResponseEntity<Page<User>> getAllUsers(Pageable pageable) {
//         Page<User> users = userService.getAllUsers(pageable);
//         return ResponseEntity.ok(users);
//     }
// }
