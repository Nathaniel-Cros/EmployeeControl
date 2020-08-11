import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterEmployeeComponent } from './Components/register-employee/register-employee.component';
import { TableEmployeesComponent } from './Components/table-employees/table-employees.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegisterSkillsComponent } from './Components/register-skills/register-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterEmployeeComponent,
    TableEmployeesComponent,
    RegisterSkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
