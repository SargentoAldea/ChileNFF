import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SpeciesService } from '../../services/species.service';
import { Especie } from '../../models/especies.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-species-d',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './species-d.component.html',
  styleUrl: './species-d.component.css'
})
export class SpeciesDComponent implements OnInit {
  especie: Especie | undefined;

  constructor(
    private route: ActivatedRoute,
    private speciesService: SpeciesService
  ) {}
  ngOnInit() {
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.especie = this.speciesService.getEspecieById(id);
  }

}
