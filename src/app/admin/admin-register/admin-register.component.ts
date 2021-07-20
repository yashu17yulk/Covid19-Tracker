import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  msg="";
  msgClass='success';
  doRegister(regForm: NgForm) {  
    console.log(regForm.value);   
    this.authService.userRegister(regForm.value).subscribe(data => {
      if(data.includes('Success')){
        this.msg =data;
        this.msgClass='alert alert-success';
      }else{
        this.msg =data;
        this.msgClass='alert alert-error';
      }
      
    });
  }

}
