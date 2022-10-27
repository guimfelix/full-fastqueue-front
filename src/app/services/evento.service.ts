import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Evento } from '../evento/evento';
import { Observable } from 'rxjs';
import { Espectador } from '../espectador/espectador';

const API_URL = 'https://fastqueue-back.herokuapp.com/api/eventos/';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor( private http: HttpClient ) { } 

  salvar( evento: Evento ) : Observable<Evento> {
    return this.http.post<Evento>( API_URL , evento);
  }

  atualizar( evento: Evento ) : Observable<any> {
    return this.http.put<Evento>(`${API_URL}${evento.id}` , evento);
  }

  getEventos() : Observable<Evento[]> {
    return this.http.get<Evento[]>(API_URL);
  }
  
  getEventoById(id: number) : Observable<Evento> {
    return this.http.get<any>(`${API_URL}${id}`);
  }

  deletar(evento: Evento) : Observable<any> {
    return this.http.delete<any>(`${API_URL}${evento.id}`);
  }

  buscar(nomeEvento: string): Observable<any> {
    return this.http.get<any>(`${API_URL}busca?nomeEvento=${nomeEvento}`);
  }

  vincular( id: number, espectador: Espectador ) : Observable<any> {
    return this.http.put<Espectador>(`${API_URL}${id}/vincular` , espectador);
  }

}
