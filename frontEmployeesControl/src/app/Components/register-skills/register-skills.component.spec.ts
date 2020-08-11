import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSkillsComponent } from './register-skills.component';

describe('RegisterSkillsComponent', () => {
  let component: RegisterSkillsComponent;
  let fixture: ComponentFixture<RegisterSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
