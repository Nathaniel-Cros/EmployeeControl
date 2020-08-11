import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Employees } from '../interfaces/employees';
import { environment } from '../../environments/environment';
import { ResponseSaveEmployee } from '../interfaces/rsponse-save-employee';
import {GetAllEmployees} from '../interfaces/get-all-employees';
import {Skills} from "../interfaces/skills";

@Injectable({
  providedIn: 'root'
})
export class HttpEmployeeService {
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  public saveEmployee = (employee: Employees, skills: Array<Skills>) => {
    employee.skills = skills;
    return this.httpClient.post<ResponseSaveEmployee>(
      environment.URL.concat('/api/employees/saveEmployee'),
      employee,
      {headers: this.headers}
    );
  }

  public getAllEmployees = () => this.httpClient.get<GetAllEmployees>(
    environment.URL.concat('/api/employees/all'),
    { headers: this.headers }
  )
}
