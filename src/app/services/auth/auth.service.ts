import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ADMIN_EMAIL = 'admin@lumiere.com';
  private ADMIN_SENHA = 'admin';

  cadastrar(nome: string, email: string, senha: string): void {
    const usuario = { nome, email, senha };
    localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));
  }

  verificarLogin(email: string, senha: string): boolean {
    if (email === this.ADMIN_EMAIL && senha === this.ADMIN_SENHA) {
      return true;
    }

    const dados = localStorage.getItem('usuarioCadastrado');
    if (!dados) {
      return false;
    }

    const usuario = JSON.parse(dados);
    return usuario.email === email && usuario.senha === senha;
  }

  ehAdmin(email: string): boolean {
    return email === this.ADMIN_EMAIL;
  }

  login(nome: string) {
    localStorage.setItem('usuario', nome);
  }

  getUsuario(): string | null {
    return localStorage.getItem('usuario');
  }

  logout() {
    localStorage.removeItem('usuario');
  }
}