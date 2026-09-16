import { Component, Input } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho';
import { FavoritosService } from '../../services/favoritos';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  @Input() pesquisa: string = '';

  encontrado(produto: any): boolean {
    const termo = this.pesquisa
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();

    if (!termo) {
      return true;
    }

    const texto = `${produto.nome} ${produto.descricao}`
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();

    return texto.includes(termo);
  }

  constructor(
    private carrinhoService: CarrinhoService,
    public favoritosService: FavoritosService
  ) {}

  adicionarAoCarrinho(produto: any) {
    this.carrinhoService.adicionarProduto({
      id: produto.id,
      nome: produto.nome,
      imagem: produto.imagem,
      preco: produto.precoAtual,
      quantidade: 1
    });
  }

  adicionarAosFavoritos(produto: any) {
    this.favoritosService.adicionarProduto(produto);
    alert('Produto adicionado aos favoritos');
  }

  // PRODUTO 1
  produto1 = {
    id: 1,
    nome: 'Batom Vermelho',
    descricao: 'Batom cremoso com acabamento elegante.',
    imagem: '/imagens/batom.png.jpeg',
    precoAntigo: 59.90,
    precoAtual: 39.90,
    avaliacao: 5,
    favoritado: false
  };

  // PRODUTO 2
  produto2 = {
    id: 2,
    nome: 'Gloss Rosa',
    descricao: 'Gloss com brilho intenso e confortável.',
    imagem: '/imagens/gloss.png',
    precoAntigo: 49.90,
    precoAtual: 34.90,
    avaliacao: 5,
    favoritado: false
  };

  // PRODUTO 3
  produto3 = {
    id: 3,
    nome: 'Base Líquida',
    descricao: 'Base leve com acabamento uniforme e natural.',
    imagem: '/imagens/base.png',
    precoAntigo: 69.90,
    precoAtual: 49.90,
    avaliacao: 5,
    favoritado: false
  };

  // PRODUTO 4
  produto4 = {
    id: 4,
    nome: 'Blush Rosa',
    descricao: 'Blush delicado para um toque saudável à pele.',
    imagem: '/imagens/blush.png',
    precoAntigo: 54.90,
    precoAtual: 37.90,
    avaliacao: 5,
    favoritado: false
  };

  // PRODUTO 5
  produto5 = {
    id: 5,
    nome: 'Paleta de Sombras',
    descricao: 'Cores versáteis para criar looks incríveis.',
    imagem: '/imagens/paleta.png.jpeg',
    precoAntigo: 89.90,
    precoAtual: 64.90,
    avaliacao: 5,
    favoritado: false
  };

  // PRODUTO 6
  produto6 = {
    id: 6,
    nome: 'Máscara de Cílios',
    descricao: 'Cílios mais volumosos, definidos e marcantes.',
    imagem: '/imagens/mascara.png',
    precoAntigo: 59.90,
    precoAtual: 42.90,
    avaliacao: 5,
    favoritado: false
  };

  // PRODUTO 7
  produto7 = {
    id: 7,
    nome: 'Iluminador',
    descricao: 'Brilho suave para destacar sua beleza.',
    imagem: '/imagens/iluminador.png',
    precoAntigo: 69.90,
    precoAtual: 49.90,
    avaliacao: 5,
    favoritado: false
  };

  // PRODUTO 8
  produto8 = {
    id: 8,
    nome: 'Kit de Pincéis',
    descricao: 'Kit completo para uma maquiagem impecável.',
    imagem: '/imagens/kit.png',
    precoAntigo: 79.90,
    precoAtual: 54.90,
    avaliacao: 5,
    favoritado: false
  };

  // PRODUTO 9
  produto9 = {
    id: 9,
    nome: 'Creme Facial',
    descricao: 'Hidratação para deixar sua pele macia e cuidada.',
    imagem: '/imagens/feron.png.jpeg',
    precoAntigo: 74.90,
    precoAtual: 52.90,
    avaliacao: 5,
    favoritado: false
  };
}