import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ContactComponent } from './pages/contact/contact.component'
import { SpeciesDComponent } from './pages/species-d/species-d.component';
import { SpeciesLComponent } from './pages/species-l/species-l.component';


export const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'catalogo', component: CatalogoComponent },
  {path: 'contacto', component: ContactComponent},
  {path: 'especies', component : SpeciesLComponent},
  {path: 'especies/:id', component: SpeciesDComponent},
];
