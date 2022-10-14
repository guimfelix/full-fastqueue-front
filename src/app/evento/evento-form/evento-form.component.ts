import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Espectador } from 'src/app/espectador/espectador';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from '../evento';
import { Observable } from 'rxjs';
import { Endereco } from 'src/app/endereco';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css']
})
export class EventoFormComponent implements OnInit {

  endereco: Endereco;
  evento: Evento;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
      private service: EventoService ,
      private router: Router,
      private activatedRoute: ActivatedRoute)
  {
    this.evento = new Evento();
    this.endereco = new Endereco();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
        if(this.id){
          this.service
            .getEventoById(this.id)
            .subscribe( 
              response => this.evento = response ,
              errorResponse => this.evento = new Evento()
            )
        }
    })
  }

  voltarHome(){
    this.router.navigate(['/home'])
  }
  
  onSubmit(){
    if(this.id){
      this.service
        .atualizar(this.evento)
        .subscribe(response => {
            this.success = true;
            this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o evento.']
        })
    }else{
      this.service
        .salvar(this.evento)
          .subscribe( response => {
            this.success = true;
            this.errors = null;
            this.evento = response;
          } , errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          })
    }
  }
}
