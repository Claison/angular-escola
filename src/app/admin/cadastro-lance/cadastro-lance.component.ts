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
    jogadores=[];
    lancej=null;
    jogador=null;
    status=null;
    horaj=null;
    minutoj=null;
    cadastro_ok = false;
    cadastro_erro = false;
    id=null;

  constructor(private partidaService: PartidaService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.atualizarLista();
      this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      // if (this.id) {
      //     this.partidaService.getLance(this.id)
      //         .subscribe(lan => {
      //             this.lancej = lan.lancej;
      //             this.status = lan.status;
      //             this.horaj = lan.horaj;
      //             this.minutoj = lan.minutoj;
      //             this.jogador = lan.jogador;
      //         });
      // }
  }
    salvar() {
        this.partidaService.addLance(this.lancej, this.status, this.horaj, this.minutoj, this.jogador)
            .subscribe(lanceT => {
                    console.log(lanceT);
                    this.cadastro_ok = true;
                    this.cadastro_erro = false;
                    this.lancej = null;
                    this.status = null;
                    this.horaj = null;
                    this.minutoj = null;
                    this.jogador = null;
                },
                erro => {
                    this.cadastro_ok = false;
                    this.cadastro_erro = true;
                });
    }

    atualizarLista() {
        this.partidaService.getTLances()
            .subscribe(lances => this.lances = lances);
        this.partidaService.getJogadores()
            .subscribe(jogadores => this.jogadores = jogadores);
    }
}
