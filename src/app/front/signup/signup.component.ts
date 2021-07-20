import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/admin/services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  msg="";
  msgClass='success';
  doRegister(regForm: NgForm) {  
    console.log(regForm.value);
    this.authService.userRegister(regForm.value).subscribe(data => {
      if(data.includes('success')){
        this.msg =data;
        this.msgClass='alert alert-success';
      }else{
        this.msg =data;
        this.msgClass='alert alert-danger';
      }
      
    });
  }

}
