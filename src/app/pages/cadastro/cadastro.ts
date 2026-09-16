import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-cadastro',
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  formCadastro: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
      confirmarSenha: ['', Validators.required]
    });
  }

  cadastrar() {
    if (this.formCadastro.invalid) {
      this.formCadastro.markAllAsTouched();
      return;
    }

    const { nome, email, senha, confirmarSenha } = this.formCadastro.value;

    if (senha.length !== 4) {
      alert('A senha deve ter 4 digítos!');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senha não conferem');
      return;
    }

    this.authService.cadastrar(nome, email, senha);

    this.router.navigate(['/produtos']);
  }
}