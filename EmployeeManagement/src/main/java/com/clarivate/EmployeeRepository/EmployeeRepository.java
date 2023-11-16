package com.clarivate.EmployeeRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.clarivate.EmployeeDTO.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
