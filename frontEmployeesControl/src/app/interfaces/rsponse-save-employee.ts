import {Employees} from './employees';

export interface ResponseSaveEmployee {
  success: boolean;
  data: Employees;
  error: any;
}
