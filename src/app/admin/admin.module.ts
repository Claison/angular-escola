import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { CadastroPartidaComponent } from './cadastro-partida/cadastro-partida.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { PartidaService } from '../partida.service';
import { CadastroLanceComponent } from './cadastro-lance/cadastro-lance.component';

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
        CadastroLanceComponent
    ],
    providers: [PartidaService]
})
export class AdminModule { }

