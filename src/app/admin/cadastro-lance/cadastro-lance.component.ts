import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PartidaService} from "../../partida.service";

@Component({
  selector: 'app-cadastro-lance',
  templateUrl: './cadastro-lance.component.html',
  styleUrls: ['./cadastro-lance.component.css']
})
export class CadastroLanceComponent implements OnInit {
lances=[];
status=null;
  constructor(private partidaService: PartidaService, private route: ActivatedRoute) { }

  ngOnInit() {
  this.atualizarLista();
  }
    atualizarLista() {
        this.partidaService.getLances()
            .subscribe(lances => this.lances = lances);
    }
}
