import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  navBarObj;
  constructor(
    private authService: AuthServiceService,
    private router: Router) {

    this.navBarObj = new NavbarComponent(router);


  }

  ngOnInit(): void { 
    let token = this.navBarObj.loggedin();
    if(token){
       this.router.navigate(['/admin/dashboard']);
    } 
  }
  msg = '';

  doLogin(lgnFrmData: NgForm) {
    this.authService.userLogin(lgnFrmData.value).subscribe(data => {

      if (data != null) {
        localStorage.setItem('token', data);
        console.log("Login Successfully");
        this.router.navigate(['/admin/dashboard']);
      } else {
        console.log("Not Login, Please try again!");
        this.msg = "please enter the valid username and password!";
      }

    });

  }

}

