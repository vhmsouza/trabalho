import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email: string = '';
  senha: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  entrar(): void {
    if (this.email.trim() === '' || this.senha.trim() === '') {
      alert('Preencha e-mail e senha para entrar.');
      return;
    }

    const loginValido = this.authService.verificarLogin(this.email, this.senha);

    if (!loginValido) {
      alert('E-mail ou senha incorretos.');
      return;
    }

    this.authService.login(this.email);

    if (this.authService.ehAdmin(this.email)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/home']);
    }
  }
}