import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router'; 
import { ProductService } from '../../services/producto.service'; 
import { Producto } from '../../models/producto.model'; 

@Component({
  selector: 'app-catalogo',
  standalone: true,

  imports: [CommonModule, RouterLink], 
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  listaProductos: Producto[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {

    this.listaProductos = this.productService.getProductos();
  }
}
