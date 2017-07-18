import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Logger } from './logger.service';
import {Employee} from "./Employee";

@Injectable()
export class EmployeeService {

  constructor(private http: Http, private logger: Logger) {
  }

  getEmployees(): Observable<Employee[]> {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/employeeDetails/employees', {headers: headers})
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
