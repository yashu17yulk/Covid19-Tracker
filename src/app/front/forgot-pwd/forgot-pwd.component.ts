import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/admin/services/auth-service.service';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {


  constructor(
    private authService: AuthServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  msg="";
  msgClass='success';
  doForgotPwd(fpwdData: NgForm) {
     
    let email = fpwdData.value.email;
    let password = fpwdData.value.password;

    this.authService.changePassword(email, password).subscribe(data => {

      if(('success')){
        this.msg="password changed";
        this.msgClass='alert alert-success';
        console.log("password changed");
      }
      //else{
        //this.=data;
       // this.msgClass='alert alert-danger';
      //}
      

    });

  }
}
