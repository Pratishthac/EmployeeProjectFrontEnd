import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template :'<h1 style="text-align: left; font-size: 1.5em; margin-left: 5%;">List of employees </h1>',
  styleUrls: ['./app.style.css']
})

export class HeaderComponent {
  name= "user";
}
