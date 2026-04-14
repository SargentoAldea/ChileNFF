import { Injectable } from '@angular/core';
import { Especie } from '../models/especies.model';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  private especies: Especie[] = [
    {
      id: 1,
      nombre: 'Huemul',
      categoria: 'Fauna',
      descripcionCorta: 'Ciervo heráldico de los Andes.',
      descripcionCompleta: 'El huemul es un ciervo nativo de Chile y Argentina...',
      imagen: 'assets/huemul.jpg',
      enPeligro: true
    },

  ];

  getEspecies() {
    return this.especies;
  }

  getEspecieById(id: number) {
    return this.especies.find(e => e.id === id);
  }
}