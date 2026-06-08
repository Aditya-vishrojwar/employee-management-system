package com.aditya.employeeapp.controller;

import com.aditya.employeeapp.entity.Employee;
import com.aditya.employeeapp.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;


    @PostMapping(value = "/saveEmp")
    public Employee saveEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @GetMapping(value = "/getAllEmp")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @DeleteMapping("/deleteEmp/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        employeeRepository.deleteById(id);
        return "Employee Deleted Successfully";
    }
}