import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/endereco';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../evento';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.css']
})
export class EventoListaComponent implements OnInit {

  eventos: Evento[] = [];
  enderecoSelecionado = false;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
      private service: EventoService, 
      private router: Router) { }

  ngOnInit(): void {
    this.service
      .getEventos()
      .subscribe(resposta => {
        this.eventos = resposta;  
      }
      );
  }

  preparaEndereco(){
    this.enderecoSelecionado = true;
  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  vinculaEvento(id: number) {
    this.router.navigate(['evento-espectador'])
  }

}
