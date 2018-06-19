import { Component, OnInit } from '@angular/core';
import {PartidaService} from "../../partida.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cadastro-partida',
  templateUrl: './cadastro-partida.component.html',
  styleUrls: ['./cadastro-partida.component.css']
})
export class CadastroPartidaComponent implements OnInit {
    cadastro_ok = false;
    cadastro_erro = false;
    timeVisitante=null;
    timeMandante=null;
    hora=null;
    data=null;
    id = null;
    Tmandantes=[];
    Tvisitantes=[];

  constructor(private partidaService: PartidaService, private route: ActivatedRoute) {}

  ngOnInit() {
      this.atualizarLista()
      this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      if (this.id) {
          this.partidaService.getPartida(this.id)
              .subscribe(partida => {
                  this.data = partida.data;
                  this.hora = partida.hora;
                  this.timeVisitante = partida.timeVisitante;
                  this.timeMandante = partida.timeMandante;
              });
      }
  }
    salvar() {
        this.partidaService.addPartida(this.data, this.hora, this.timeMandante, this.timeVisitante)
                .subscribe(produto => {
                        console.log(produto);
                        this.cadastro_ok = true;
                        this.cadastro_erro = false;
                        this.data = null;
                        this.hora = null;
                        this.timeVisitante = null;
                        this.timeMandante = null;
                    },
                    erro => {
                        this.cadastro_ok = false;
                        this.cadastro_erro = true;
                    });
        }
    atualizarLista() {
        this.partidaService.getMandantes()
            .subscribe(mandante => this.Tmandantes = mandante);
        this.partidaService.getVisitantes()
            .subscribe(visitante => this.Tvisitantes = visitante);
    }


}

