import {Injectable, Input} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Logger } from './logger.service';
import { Project } from './Project';

@Injectable()
export class ProjectsService{

  constructor(private http: Http, private logger: Logger) {
  }

  getProjects(eid):Observable<Project[]> {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      console.log("eid in projects service:"+eid);

      return this.http.get('http://localhost:8080/employeeDetails/employeeProjects/'+eid, {headers: headers})
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}

