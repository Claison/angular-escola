import { Component, OnInit } from '@angular/core';
import {PartidaService} from '../../partida.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-consultar-partidas',
  templateUrl: './consultar-partidas.component.html',
  styleUrls: ['./consultar-partidas.component.css']
})
export class ConsultarPartidasComponent implements OnInit {

  constructor(private partidaService: PartidaService, private route: ActivatedRoute) { }
partida;
  lances=null;
  ngOnInit() {
      this.atualizarLista();
      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.partidaService.getPartida(id)
          .subscribe(partidas => this.partida = partidas);
  }
    atualizarLista() {
        this.partidaService.getLances()
            .subscribe(lances => this.lances = lances);
    }
}
