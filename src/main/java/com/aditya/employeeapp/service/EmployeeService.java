package com.aditya.employeeapp.service;

import com.aditya.employeeapp.entity.Employee;
import com.aditya.employeeapp.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee updateEmp(Long id, Employee updatedEmployee) {

        Employee employee = employeeRepository.findById(id).orElseThrow();

        if (updatedEmployee.getName() != null) {
            employee.setName(updatedEmployee.getName());
        }

        if (updatedEmployee.getEmail() != null) {
            employee.setEmail(updatedEmployee.getEmail());
        }

        if (updatedEmployee.getDepartment() != null) {
            employee.setDepartment(updatedEmployee.getDepartment());
        }

        return employeeRepository.save(employee);
    }
}
