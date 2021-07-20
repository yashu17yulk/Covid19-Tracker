import { Router } from '@angular/router';
import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  headerObj: any;
  constructor(private router: Router) {
    this.headerObj = new HeaderComponent(this.router);
  }

  ngOnInit(): void {




  }
  chkLogin() {
    let token = this.headerObj.loggedin();
    if (!token) {
      this.router.navigate(['/login']);
    
      
    }else{
      window.location.href="../../../assets/files/LINKSOPSCOVID19INDIA-Pan_India_Master.pdf";
    }


  }
}
