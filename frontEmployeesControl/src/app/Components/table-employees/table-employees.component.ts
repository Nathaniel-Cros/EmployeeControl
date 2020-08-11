import {Component, Input, OnInit} from '@angular/core';
import {Employees} from '../../interfaces/employees';

@Component({
  selector: 'app-table-employees',
  templateUrl: './table-employees.component.html',
  styleUrls: ['./table-employees.component.css']
})
export class TableEmployeesComponent implements OnInit {
  @Input() employees: Array<Employees>;

  constructor() {
  }
  ngOnInit(): void {
  }

}
