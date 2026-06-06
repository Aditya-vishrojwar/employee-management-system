package com.aditya.employeeapp.repository;

import com.aditya.employeeapp.entity.EmpSignUp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignUpRepository extends JpaRepository<EmpSignUp, Long> {
    EmpSignUp findByLoginEmail(String loginEmail);
}
