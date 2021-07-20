import { Component, OnInit } from '@angular/core';
import{AuthServiceService } from'../services/auth-service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  msgTrue=false;
  inqlist: any = [];
  Details={
    name:'',
    contact:'',
    address:''
  }
  con=''
  constructor(private authService:AuthServiceService) { }
  ngOnInit(): void {
    this.authService.inqal().subscribe( 
      {
        next: (result) => {
          console.log(result);
          this.inqlist = result;}})}
          
 deleteid(x:any){
    this.authService.delinq(x).subscribe(data=>{
      console.log(data);
    });
 }
 edit(x:any){
  this.Details=x;
  this.con=x.contact
}
update(){
  this.authService.updateinq(this.con,this.Details).subscribe(
    (resp:any)=>{console.log(resp);
    },
    (err:any)=>{
      console.log(err);
      
    }
  )
}
}
