import { Component, OnInit } from '@angular/core';
import{InqService} from'../../service/inq.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  dateToday: number = Date.now();
  constructor(private authService:InqService) { }
  inqlist: any = [];
  msg='';
  addData(formVals: NgForm){
console.log(formVals.value);


    this.authService.inqlogin(formVals.value).subscribe(data => {
      if (data != null) {
        this.msg="User has been registered successfully";
      }else{
        this.msg="Something went Wrong!";
      }
    });
    };
  ngOnInit(): void {
    this.authService.inqal(). subscribe ( 
      {
        next: (result) => {
          console.log(result);
          this.inqlist = result;}})}

}