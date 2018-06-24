import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { CadastroPartidaComponent } from './cadastro-partida/cadastro-partida.component';
import { PartidaService } from '../partida.service';
import { CadastroLanceComponent } from './cadastro-lance/cadastro-lance.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConsultarPartidasComponent} from './consultar-partidas/consultar-partidas.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        AdminRoutingModule,
    ],
    declarations: [
        AdminComponent,
        CadastroPartidaComponent,
        CadastroLanceComponent,
        ConsultarPartidasComponent
    ],
    providers: [PartidaService]
})
export class AdminModule { }

