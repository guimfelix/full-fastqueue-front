import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Evento } from '../evento/evento';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/eventos/';

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

}
