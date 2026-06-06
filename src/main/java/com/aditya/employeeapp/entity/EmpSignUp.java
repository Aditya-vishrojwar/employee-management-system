package com.aditya.employeeapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class EmpSignUp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    String firstName;
    String loginEmail;
    String loginPassword;
}
