import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  inqregUrl="http://localhost:4100/users/inq";
  inqall="http://localhost:4100/users/allInq";
  registerUrl = "http://localhost:4100/users/adduser";
  loginUrl="http://localhost:4100/users/login";
  forgotPwdUrl = "http://localhost:4100/users/forgotPwd";
  constructor(private http: HttpClient) { }

  userRegister(user: any) {
    return this.http.post(this.registerUrl,user,{responseType: 'text'});    
  }

  userLogin(loginUserData:any){    
    return this.http.post(this.loginUrl,loginUserData,{responseType: 'text'});  
  }

  changePassword(email:any,pwd:any){
    return this.http.put(this.forgotPwdUrl,{email:email, password:pwd});  
  }

  updateinq(pay:any,body:any){
    const inqupdate="http://localhost:4100/users/update/"+pay
   return this.http.put(inqupdate,body)
   }

   inqal(){
    return this.http.get(this.inqall);
  }
  delinq(pay:any){
  const inqdel="http://localhost:4100/users/delete/"+pay;
  return this.http.delete(inqdel)
    }
    inqlogin(logininq:any){
      return this.http.post(this.inqregUrl,logininq);  
    }
}