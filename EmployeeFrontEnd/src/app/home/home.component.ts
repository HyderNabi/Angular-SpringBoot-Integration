import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
  }

  submit(form:any){
    this.service.setEmployees(form.value).subscribe((res)=>{
      alert("Employee Added!");
      console.log(res);
    },(err)=>{
      console.log(err);
    });
  }

}
