import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API_URL = "http://localhost:8086";

  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get(this.API_URL+"/getEmployee");
  }

  setEmployees(body:any){
    return this.http.post(this.API_URL+"/addEmployee",body);
  }
}
 