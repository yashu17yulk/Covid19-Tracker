import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  submit() {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loggedin() {
    return localStorage.getItem('user_token');
  }

  onLogout(){
    localStorage.removeItem('user_token');
    this.router.navigate(['/login']);

  }
}

