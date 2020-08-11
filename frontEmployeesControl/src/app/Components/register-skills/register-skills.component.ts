import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Skills} from "../../interfaces/skills";

@Component({
  selector: 'app-register-skills',
  templateUrl: './register-skills.component.html',
  styleUrls: ['./register-skills.component.css']
})
export class RegisterSkillsComponent implements OnInit {

  @Input() skills: Array<Skills> = [];
  @Output() RemoveId = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public requestDeleteElement = (id) => {
    this.RemoveId.emit(id);
  }
}
