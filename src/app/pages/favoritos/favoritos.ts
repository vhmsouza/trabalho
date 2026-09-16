import { Component } from '@angular/core';
import { FavoritosService } from '../../services/favoritos';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css'
})
export class Favoritos {

  favoritos: any[] = [];

  constructor(private favoritosService: FavoritosService) {
    this.favoritos = this.favoritosService.pegarFavoritos();
  }

  limparFavoritos(): void {
    if (confirm('Tem certeza que deseja remover todos os favoritos?')) {
      this.favoritosService.limparFavoritos();
      this.favoritos = [];
    }
  }
}