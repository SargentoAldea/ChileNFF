import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productos: Producto[] = [
    { id: 1, nombre: 'Polera Huemul', precio: 15990, imagen: 'assets/polera-huemul.jpg', categoria: 'Vestuario' },
    { id: 2, nombre: 'Gorro Puma', precio: 9990, imagen: 'assets/gorro-puma.webp', categoria: 'Accesorios' },
    { id: 3, nombre: 'Poster Araucaria', precio: 5000, imagen: 'assets/poster-araucaria.jpg', categoria: 'Decoración' },
    { id: 4, nombre: 'Mochila Pudú', precio: 24990, imagen: 'assets/mochila-pudu.jpg', categoria: 'Accesorios' }
  ];

  getProductos() { return this.productos; }
}