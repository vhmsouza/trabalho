import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho';            

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class Carrinho {

  constructor(public carrinhoService: CarrinhoService) {}

  get produtos() {
    return this.carrinhoService.getProdutos();
  }

  get total() {
    return this.carrinhoService.getTotal();
  }

  aumentarQuantidade(id: number) {
    this.carrinhoService.aumentarQuantidade(id);
  }

  diminuirQuantidade(id: number) {
    this.carrinhoService.diminuirQuantidade(id);
  }

  removerProduto(id: number) {
    this.carrinhoService.removerProduto(id);
  }

  limparCarrinho() {
    this.carrinhoService.limparCarrinho();
  }
}