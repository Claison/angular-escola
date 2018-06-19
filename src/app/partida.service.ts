import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class PartidaService {
    API_URL = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }
    addPartida(data: string,  hora: string, timeVisitante: string, timeMandante: string): Observable<any> {
        const partida = {data:data, hora:hora, timeVisitante:timeVisitante, timeMandante:timeMandante };
        return this.http.post(this.API_URL + '/partidas', partida);
    }
    addLance(lancej: string,  status: string, horaj: string, minutoj: string, jogador: string): Observable<any> {
        const lan = {lancej:lancej, status:status, horaj:horaj, minutoj:minutoj, jogador:jogador  };
        return this.http.post(this.API_URL + '/lances', lan);
    }

    getPartida(id: number): Observable<any> {
        return this.http.get(this.API_URL + '/partidas/' + id );
    }
    getLance(id: number): Observable<any[]> {
        return this.http.get<any[]>(this.API_URL + '/lances/'+ id );
    }
    getMandantes(): Observable<any[]> {
        return this.http.get<any[]>(this.API_URL + '/timeMandantes');
    }
    getVisitantes(): Observable<any[]> {
        return this.http.get<any[]>(this.API_URL + '/timeVisitantes');
    }
    getTLances(): Observable<any[]> {
        return this.http.get<any[]>(this.API_URL + '/tipoLances');
    }
    getJogadores(): Observable<any[]> {
        return this.http.get<any[]>(this.API_URL + '/jogadores');
    }

}