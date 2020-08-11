import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Employees} from '../../interfaces/employees';
import {HttpEmployeeService} from '../../services/httpEmployee.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeesService: HttpEmployeeService
  ) {
    // @ts-ignore
    this.employeeForm = this.fb.group<Employees>({
      name: ['', Validators.required],
      email: ['bad@', Validators.email, Validators.required],
      area: ['', Validators.required],
      birthday: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit = () => {
    this.employeesService.saveEmployee(this.employeeForm.value)
      .subscribe( res => {
        console.log(res);
      }, error => {
        console.log(error);
      });
  };

}
