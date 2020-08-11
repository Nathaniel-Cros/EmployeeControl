import {Skills} from './skills';

export interface Employees {
  employeeId?: number;
  name: string;
  email: string;
  area: string;
  birthday: string;
  address: string;
  skills: Array<Skills>;
}
