import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Espectador } from '../espectador/espectador';
import { Observable } from 'rxjs';
import { Evento } from '../evento/evento';

const API_URL = 'https://fastqueue-back.herokuapp.com/api/espectador/';
//const API_URL = 'https://localhost:8080/api/espectador/';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {

  constructor( private http: HttpClient ) { } 

  salvar( espectador: Espectador ) : Observable<Espectador> {
    return this.http.post<Espectador>( API_URL , espectador);
  }

  atualizar( espectador: Espectador ) : Observable<any> {
    return this.http.put<Espectador>(`${API_URL}${espectador.id}` , espectador);
  }

  getEspectadores() : Observable<Espectador[]> {
    return this.http.get<Espectador[]>(API_URL);
  }
  
  getEspectadorById(id: number) : Observable<Espectador> {
    return this.http.get<any>(`${API_URL}${id}`);
  }

  getEspectadorByUserId(id: number) : Observable<Espectador> {
    return this.http.get<any>(`${API_URL}usuario/${id}`);
  }

  getEventosByEspectadorId(id: number) : Observable<Evento[]> {
    return this.http.get<Evento[]>(`${API_URL}${id}/eventos`);
  }
  
  deletar(espectador: Espectador) : Observable<any> {
    return this.http.delete<any>(`${API_URL}${espectador.id}`);
  }

  vincular( id: number, evento: Evento ) : Observable<any> {
    return this.http.put<Evento>(`${API_URL}${id}/vincular` , evento);
  }
}



