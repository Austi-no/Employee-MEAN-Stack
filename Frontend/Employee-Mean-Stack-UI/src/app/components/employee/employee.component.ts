import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Employee } from '../model/employee.model';

import { ApiService } from "../service/api.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [ApiService]
})
export class EmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  employeFormGroup: FormGroup;
  employeeList: any = [];

  constructor(public service: ApiService, private fb: FormBuilder) { }

  ngOnInit() {

    this.getAllEmployee()
    this.employeFormGroup = this.fb.group({
      _id: [''],
      name: [''],
      position: [''],
      office: [''],
      salary: ['']
    })
  }


  saveEmployee() {
    console.log(this.employeFormGroup.value)

    this.service.saveEmployee(this.employeFormGroup.value).subscribe(res => {
      console.log(res)
      this.getAllEmployee()
      this.ngOnInit()
    }, error => {
      console.log(error.error.message)
    })

  }

  getAllEmployee(): any {
    this.service.getAllEmployees().subscribe(res => {
      console.log(res)
      this.employeeList = res
    })
  }

  deleteEmployee(id: any) {
    this.service.deleteEmployeeById(id).subscribe(res => {
      this.getAllEmployee();
      console.log(res);
    },
      error => {
        console.log(error.error.message)
      });
  }






}
