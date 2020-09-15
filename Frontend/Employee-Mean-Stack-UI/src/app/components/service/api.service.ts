import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  selectedEmployee: Employee;
  employees: Employee[];

  readonly baseUrl = 'http://localhost:9000/employees'
  constructor(private http: HttpClient) { }


  saveEmployee(emp: Employee): any {
    return this.http.post(this.baseUrl, emp);
  }

  getAllEmployees(): any {
    return this.http.get(this.baseUrl + "/getAll");
  }

  deleteEmployeeById(id: any): any {
    return this.http.delete(this.baseUrl + "/" + id);
  }

  getEmployeeById(id: any): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);
  }
}
