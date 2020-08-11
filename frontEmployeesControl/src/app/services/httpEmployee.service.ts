import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from '../interfaces/employees';
import { environment } from '../../environments/environment';
import { ResponseSaveEmployee } from '../interfaces/rsponse-save-employee';

@Injectable({
  providedIn: 'root'
})
export class HttpEmployeeService {
  headers;

  constructor(private httpClient: HttpClient) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
  }

  public saveEmployee = (employee: Employees) => this.httpClient.post<ResponseSaveEmployee>(
    environment.URL.concat('/employee/saveEmploye'),
    employee,
    {headers: this.headers}
  )
}
