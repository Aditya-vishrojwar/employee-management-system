package com.aditya.employeeapp.controller;

import com.aditya.employeeapp.entity.EmpSignUp;
import com.aditya.employeeapp.entity.Login;
import com.aditya.employeeapp.repository.SignUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    SignUpRepository signUpRepository;

    @PostMapping(value = "login")
    public ResponseEntity<String> login(@RequestBody Login login) {

        EmpSignUp existingEmp =
                signUpRepository.findByLoginEmail(login.getEmail());

        if (existingEmp == null) {
            return ResponseEntity.badRequest()
                    .body("User not found");
        }

        if (existingEmp.getLoginPassword()
                .equals(login.getPassword())) {

            return ResponseEntity.ok("SUCCESS");
        }

        return ResponseEntity.badRequest()
                .body("Invalid Password");
    }
}
