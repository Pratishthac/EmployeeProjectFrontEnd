import {Component, Input, OnChanges} from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from './Project';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  providers: [ ProjectsService ]

})

export class ProjectsComponent implements OnChanges{

  projects:Project[] = [];

  @Input() eid:number;

  private errorMessage:any = '';

  constructor(private projectService : ProjectsService){
    //this.getProjects();
  }

  ngOnChanges(){
    console.log("eid in projects component:"+this.eid);
    this.projectService.getProjects(this.eid)
      .subscribe(projects=> this.projects = projects,
        error=> this.errorMessage = <any>error);
    console.log('projects:'+this.projects.toString());
  }
}
