import { TestBed } from '@angular/core/testing';

import { HttpEmployeeService } from './httpEmployee.service';

describe('HttpService', () => {
  let service: HttpEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
