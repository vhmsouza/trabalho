import { Component } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';


@Component({
  selector: 'app-produtos',
  imports: [ProductCard],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {}
