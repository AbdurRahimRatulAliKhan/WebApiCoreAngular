import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Designation, Epmloyee } from './epmloyee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(myhttp:HttpClient) { }
  employeeUrl:string='https://localhost:7251/api/Employee';
  designationUrl:string='https://localhost:7251/api/Designation';
  listEmployee: Epmloyee[]=[];
  listDesignation: Designation[]=[];
}
