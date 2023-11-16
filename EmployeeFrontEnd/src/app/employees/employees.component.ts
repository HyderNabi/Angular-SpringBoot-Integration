import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  search:any;
  employees : any;
  
  constructor(private service:EmployeeService,private route:ActivatedRoute) {}

  ngOnInit(): void {
     this.route.queryParams.subscribe(params => {
      this.search = params['query'];
  });

    this.service.getEmployees().subscribe((data)=>{
      this.employees = data;
      //console.log(data);
    },(err)=>{
      console.log(err);
    })
  }

}
