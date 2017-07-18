import { Component } from '@angular/core';
import { EmployeeService } from "./employee.service";
import {Employee} from "./Employee";
import {Post} from "./post";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ EmployeeService ]
})

export class AppComponent {
  employees:Employee[] = [];
  posts:Post[] = [];
  private errorMessage:any = '';
  eid ;

  constructor(private employeeService: EmployeeService) {
    this.getEmployees();
  }
  public showProjects(event, eid) {
    this.eid = eid;
    console.log("eid in app component:"+eid);
  }

  getEmployees(){
    this.employeeService.getEmployees()
      .subscribe(employees=> this.employees = employees,
        error=> this.errorMessage = <any>error);
  }

}
