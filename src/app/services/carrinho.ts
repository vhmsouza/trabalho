import { Injectable } from '@angular/core';

export interface ProdutoCarrinho {
  id: number;
  nome: string;
  imagem: string;
  preco: number;
  quantidade: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private produtos: ProdutoCarrinho[] = [];

  adicionarProduto(produto: ProdutoCarrinho) {
    const existente = this.produtos.find(
      item => item.id === produto.id
    );

    if (existente) {
      existente.quantidade++;
    } else {
      this.produtos.push({
        ...produto,
        quantidade: 1
      });
    }
  }

  removerProduto(id: number) {
    this.produtos = this.produtos.filter(
      produto => produto.id !== id
    );
  }

  aumentarQuantidade(id: number) {
    const produto = this.produtos.find(
      item => item.id === id
    );

    if (produto) {
      produto.quantidade++;
    }
  }

  diminuirQuantidade(id: number) {
    const produto = this.produtos.find(
      item => item.id === id
    );

    if (!produto) return;

    if (produto.quantidade > 1) {
      produto.quantidade--;
    } else {
      this.removerProduto(id);
    }
  }

  getProdutos() {
    return this.produtos;
  }

  getTotal() {
    return this.produtos.reduce(
      (total, produto) =>
        total + produto.preco * produto.quantidade,
      0
    );
  }

  limparCarrinho() {
    this.produtos = [];
  }
}