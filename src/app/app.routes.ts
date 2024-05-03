import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { ListaComponent } from './lista/lista.component';
import { PrincipalComponent } from './principal/principal.component';
import { DetalheComponent } from './detalhe/detalhe.component';

export const routes: Routes = [
    {path: '', component: PrincipalComponent},
    {path: 'pokedex', component: PokedexComponent},
    {path: 'lista', component: ListaComponent},
    {path: 'detalhe/:id', component: DetalheComponent}
];
