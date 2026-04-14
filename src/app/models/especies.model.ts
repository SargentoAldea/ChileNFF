export interface Especie {
  id: number;
  nombre: string;
  categoria: 'Flora' | 'Fauna';
  descripcionCorta: string;
  descripcionCompleta: string;
  imagen: string;
  enPeligro: boolean;
}