import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
// export class EmployeeDetailsComponent {

// }

export class EmployeeDetailsComponent implements OnInit {
  constructor(public empService:EmployeeService){}
  ngOnInit() {
    this.empService.getEmployees().subscribe(data=>{
      this.empService.listEmployee=data;
    });
  }
}