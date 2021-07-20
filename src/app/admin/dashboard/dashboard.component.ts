import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  navBarObj;
   
   
  constructor(private router:Router) { 
  this.navBarObj = new NavbarComponent(router);
  }

  ngOnInit(): void {
    let token = this.navBarObj.loggedin();
    if(!token){
       this.router.navigate(['/admin']);
    } 
  }
  


}
