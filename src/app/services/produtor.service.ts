import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Produtor } from '../produtor/produtor';
import { Observable } from 'rxjs';

const API_URL = 'https://fastqueue-back.herokuapp.com/api/produtor/';

@Injectable({
  providedIn: 'root'
})
export class ProdutorService {

  constructor( private http: HttpClient ) { } 

  salvar( produtor: Produtor ) : Observable<Produtor> {
    return this.http.post<Produtor>( API_URL , produtor);
  }

  atualizar( produtor: Produtor ) : Observable<any> {
    return this.http.put<Produtor>(`${API_URL}${produtor.id}` , produtor);
  }

  getProdutores() : Observable<Produtor[]> {
    return this.http.get<Produtor[]>(API_URL);
  }
  
  getProdutorById(id: number) : Observable<Produtor> {
    return this.http.get<any>(`${API_URL}${id}`);
  }

  deletar(produtor: Produtor) : Observable<any> {
    return this.http.delete<any>(`${API_URL}${produtor.id}`);
  }

}
