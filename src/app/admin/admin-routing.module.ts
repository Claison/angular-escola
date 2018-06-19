import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {CadastroPartidaComponent} from "./cadastro-partida/cadastro-partida.component";
import {CadastroLanceComponent} from "./cadastro-lance/cadastro-lance.component";

const routes: Routes = [
    {
        path: '', component: AdminComponent, children: [
            {path: 'partida', component: CadastroPartidaComponent},
            {path: 'lances', component: CadastroLanceComponent},


        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
