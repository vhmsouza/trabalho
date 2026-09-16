import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  favoritos: any[] = [];

  adicionarProduto(produto: any) {

    const jaExiste = this.favoritos.some(
      item => item.id === produto.id
    );

    if (!jaExiste) {
      this.favoritos.push(produto);
    }
  }

  pegarFavoritos() {
    return this.favoritos;
  }

  limparFavoritos(): void {
    this.favoritos = [];
  }
}