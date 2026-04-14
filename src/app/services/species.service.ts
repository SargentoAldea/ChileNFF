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
      descripcionCompleta: 'El huemul es un ciervo nativo de Chile y Argentina, formando parte de los simbolos de nuestra nación',
      imagen: 'assets/huemul.jpg',
      enPeligro: true
    },

    {
      id: 2,
      nombre: 'Cóndor Andino',
      categoria: 'Fauna',
      descripcionCorta: 'Ave nacional.',
      descripcionCompleta: 'El Condor es un ave nativa de Chile y forma parte de los simbolos patrios, estado de conservación vulnerable',
      imagen: 'assets/ave.jpg',
      enPeligro: true
    },

    {
      id: 3,
      nombre: 'Puma Chileno',
      categoria: 'Fauna',
      descripcionCorta: 'Felino que se encuentra desde Arica y Magallanes.',
      descripcionCompleta: 'El pelaje del puma es de color gris rojizo con zonas más claras en la parte inferior del cuerpo, y con una punta negra en la cola. Esta apariencia le resulta útil para acechar sigilosamente a sus presas.',
      imagen: 'assets/puma.jpg',
      enPeligro: true
    },

    {
      id: 4,
      nombre: 'Araucaria',
      categoria: 'Flora',
      descripcionCorta: 'Especie arbórea perteneciente al género de coníferas Araucaria de la familia Araucariaceae.',
      descripcionCompleta: 'Árbol sagrado y milenario, clave para la biodiversidad, La Araucaria es capaz de crecer hasta 50 metros de altura, posee un tronco grueso y recto, de hasta 2,5 metros de diámetro. La corteza es gruesa, agrietada y en forma de placas hexagonales.',
      imagen: 'assets/araucaria.jpg',
      enPeligro: true
    },

    {
      id: 5,
      nombre: 'Copiue',
      categoria: 'Flora',
      descripcionCorta: 'Flor Nacional.',
      descripcionCompleta: 'Lapageria rosea, llamada popularmente copihue, es una planta enredadera perennifolia​ perteneciente al orden Liliales e integrante de la familia Philesiaceae, ​​​​​​ conforme a la clasificación filogenética, o Smilacaceae, ​​​ según la clasificación biológica.',
      imagen: 'assets/copiue.jpg',
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