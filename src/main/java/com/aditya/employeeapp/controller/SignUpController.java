package com.aditya.employeeapp.controller;

import com.aditya.employeeapp.entity.EmpSignUp;
import com.aditya.employeeapp.repository.SignUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignUpController {

    @Autowired
    private SignUpRepository signUpRepository;

    @PostMapping(value = "signUp")
    public void signUp(@RequestBody EmpSignUp signUp){
        signUpRepository.save(signUp);
    }
}
