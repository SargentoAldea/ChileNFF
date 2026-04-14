import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../../services/species.service';
import { Especie } from '../../models/especies.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-species-l',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './species-l.component.html',
  styleUrl: './species-l.component.css'
})
export class SpeciesLComponent implements OnInit {
  listaEspecies: Especie[] = [];

  constructor(private speciesService: SpeciesService) {}

  ngOnInit() {
    this.listaEspecies = this.speciesService.getEspecies();

  }

  ordenarAlfabeticamente (){
    this.listaEspecies.sort((a,b) => a.nombre.localeCompare(b.nombre))
  }
}
