import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class indiaService {
 //getdata
 // private getindiaurl = "https://www.mohfw.gov.in/data/datanew.json";
  private getindiaurl = "https://api.covid19india.org/v4/min/data.min.json";
  constructor(private http: HttpClient ) { }

//create afunction
getindia(){
  return this.http.get(this.getindiaurl);

}
}