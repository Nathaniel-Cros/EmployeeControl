import {Component} from '@angular/core';
import {Employees} from './interfaces/employees';
import {HttpEmployeeService} from './services/httpEmployee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  refreshTable = true;
  employees: Array<Employees>;
  title = 'frontEmployeesControl';

  constructor(private httpEmployeeService: HttpEmployeeService) {
    this.refreshEmployees(true);
    this.employees = [];
  }

  public refreshEmployees = ( refreshTable ) => {
    if ( refreshTable ){
      this.httpEmployeeService.getAllEmployees()
        .subscribe( res => {
          if ( res.success ) {
            this.employees = [];
            this.employees.push( ...res.data);
          }
        });
    }
  }
}
