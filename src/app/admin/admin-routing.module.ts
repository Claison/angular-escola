import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultarPartidasComponent} from './consultar-partidas/consultar-partidas.component';
import {AdminComponent} from './admin/admin.component';
import {CadastroPartidaComponent} from './cadastro-partida/cadastro-partida.component';
import {CadastroLanceComponent} from './cadastro-lance/cadastro-lance.component';

const routes: Routes = [
    {
        path: '', component: AdminComponent, children: [
            {path: 'partida', component: CadastroPartidaComponent},
            {path: 'lances', component: CadastroLanceComponent},
            {path: 'consulta', component: ConsultarPartidasComponent},
            {path: 'consulta/:id', component: ConsultarPartidasComponent},


        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
