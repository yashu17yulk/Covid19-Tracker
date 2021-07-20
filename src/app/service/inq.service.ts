import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InqService {
  inqregUrl="http://localhost:4100/users/inq";
  inqall="http://localhost:4100/users/allInq";
  constructor(private httpClient:HttpClient) { }
  inqlogin(logininq:any){
    return this.httpClient.post(this.inqregUrl,logininq);  
  }
  inqal(){
    return this.httpClient.get(this.inqall);
  }
}
