package com.clarivate.EmployeeController;

import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.clarivate.EmployeeDTO.Employee;
import com.clarivate.EmployeeRepository.EmployeeRepository;
import com.fasterxml.jackson.databind.node.ObjectNode;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EmployeeController {
	
	@Autowired
	EmployeeRepository empRepo;
	
	
	@GetMapping("/index")
	public String getTestStr() {
		return "Welcome to Spring Boot!";
	}
	
	@PostMapping("/addEmployee")
	public HashMap addEmployee(@RequestBody Employee employee) {
		empRepo.save(employee);
		HashMap<String,Object> map = new HashMap<>();
		map.put("status", 200);
		map.put("message","Successfully added to DB");
		return map;
	}
	
	//@CrossOrigin(value = "*")
	@GetMapping("/getEmployee")
	public List<Employee> getEmployee(){
		return empRepo.findAll();
	}
	
}
