import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Employees} from '../../interfaces/employees';
import {HttpEmployeeService} from '../../services/httpEmployee.service';
import Swal from 'sweetalert2';
import {Skills} from '../../interfaces/skills';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  @Output() refreshTable = new EventEmitter<boolean>();

  employeeForm: FormGroup;
  skill: string;
  skills: Array<Skills>;
  flagViewError = false;

  constructor(
    private fb: FormBuilder,
    private employeesService: HttpEmployeeService
  ) {
    this.skills = [];
    // @ts-ignore
    this.employeeForm = this.fb.group<Employees>({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      area: ['', Validators.required],
      birthday: ['', Validators.required],
      address: ['', Validators.required],
      skill: [''],
    });
  }

  ngOnInit(): void {
  }

  addSkill = () => {
    const Value = this.employeeForm.controls.skill.value;
    console.log(Value);
    if ( Value.length > 3 ) {
      const skill: Skills = {
        skill_id: null,
        employee_id: null,
        name: this.employeeForm.controls.skill.value,
      };
      this.skills.push( skill );
      this.employeeForm.controls.skill.reset('');
      console.log(this.skills);
      this.flagViewError = false;
    } else {
      this.flagViewError = true;
    }
  }

  removeElement = (id) => {
    if ( id !== -1 ) {
      this.skills.splice( id, 1 );
    }
  }

  onSubmit = () => {
    const flagSave = this.employeeForm.controls.name.valid &&
      this.employeeForm.controls.area.valid &&
      this.employeeForm.controls.birthday.valid &&
      this.employeeForm.controls.address.valid;
    console.log('Flag =>', this.employeeForm.controls.email.valid);
    if ( flagSave ) {
      this.employeesService.saveEmployee(this.employeeForm.value, this.skills)
        .subscribe( res => {
          Swal.fire({
            icon: 'success',
            title: 'Guardado Correcto',
            text: 'Se inserto con exito el empleado',
          })
            .then( () => {
              this.refreshTable.emit(true);
              this.employeeForm.reset();
              this.skills = [];
            });
        }, error => {
          const text = error.status === 500 ? 'Correo Duplicado' : 'No se inserto con exito el empleado';
          Swal.fire({
            icon: 'error',
            title: 'Error en Guardado',
            text: text,
          })
            .then( sres => {
              console.log('Error => ', error, sres);
            });
        });
    }
  }

}
