import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeeService } from "./employee.service";
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { Logger } from './logger.service';
import { ProjectsComponent } from './projects.component'
import { ProjectsService } from './projects.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [EmployeeService, Logger, ProjectsService],
  bootstrap: [AppComponent]

})
export class AppModule { }
