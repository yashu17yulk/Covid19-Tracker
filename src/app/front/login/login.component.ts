import { HeaderComponent } from './../header/header.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/admin/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  headerObj;
  constructor(
    private authService: AuthServiceService,
    private router: Router) {

    this.headerObj = new HeaderComponent(router);


  }

  ngOnInit(): void { 
    let token = this.headerObj.loggedin();
    if(token){
       this.router.navigate(['/admin/dashboard']);
    } 
  }
  msg = '';

  doLogin(lgnFrmData: NgForm) {
    this.authService.userLogin(lgnFrmData.value).subscribe(data => {

      if (data != null) {
        localStorage.setItem('user_token', data);
        console.log("Login Successfully");
        this.router.navigate(['/resources']);
      } else {
        console.log("Not Login, Please try again!");
        this.msg = "please enter the valid username and password!";
      }

    });

  }

}

