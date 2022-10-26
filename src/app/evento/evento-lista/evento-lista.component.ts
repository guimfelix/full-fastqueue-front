import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/endereco';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { EventoService } from '../../services/evento.service';Evento
import { Evento } from '../evento';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.css']
})
export class EventoListaComponent implements OnInit {

  eventos: Evento[] = [];
  roles: string[] = [];
  enderecoSelecionado = false;
  mensagemSucesso: string;
  mensagemErro: string;
  isEspectador = true;

  constructor(
      private dadosToken: TokenStorageService,
      private service: EventoService, 
      private router: Router) { }

  ngOnInit(): void {
    this.service
      .getEventos()
      .subscribe(resposta => {
        this.eventos = resposta;
      }
    );
    this.roles = this.dadosToken.getUser().roles;
    if (this.roles.length > 1) {
      this.isEspectador = false;
    };
    
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
    console.log("id do evento" + id);
    window.sessionStorage.setItem('ID_EVENTO', id.toString());
    console.log("dados Token" + this.dadosToken.getUser().id);
    if (this.dadosToken.getUser().id == undefined) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['evento-vinculo']);
    }
  }

  eventoForm(id: number) {
    window.sessionStorage.setItem('ID_EVENTO', id.toString());  
    if (this.roles.length > 1) {
      this.router.navigate(['evento-form']);
    }
  }

  novoEvento() {
    this.router.navigate(['evento-form']);
  }

}
