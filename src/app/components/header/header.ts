import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(public auth: AuthService, private router:Router){}

  sair(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}