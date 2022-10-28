import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/endereco';
import { Evento } from 'src/app/evento/evento';
import { EspectadorService } from 'src/app/services/espectador.service';
import { EventoService } from 'src/app/services/evento.service';
import { ProdutorService } from 'src/app/services/produtor.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Espectador } from '../espectador';

@Component({
  selector: 'app-evento-espectador',
  templateUrl: './evento-espectador.component.html',
  styleUrls: ['./evento-espectador.component.css']
})
export class EventoEspectadorComponent implements OnInit {

  espectador: Espectador;
  eventos: Evento[] = [];
  enderecoSelecionado: Endereco;
  mensagemSucesso: string;
  mensagemErro: string;
  idLogado: any;
  isEspectador = true;
  roles: string[] = [];

  constructor(
    private service: EspectadorService,
    private service2: EventoService,
    private service3: ProdutorService,
    private token: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.idLogado = window.sessionStorage.getItem('ID_CLIENTE');
    if (this.token.getUser().roles.length > 1) {
      this.service3
        .getEventosByProdutorId(this.idLogado)
        .subscribe(resposta => this.eventos = resposta);
    } else {
      this.service
        .getEventosByEspectadorId(this.idLogado)
        .subscribe(resposta => this.eventos = resposta);
    }
    this.roles = this.token.getUser().roles;
    if (this.roles.length > 1) {
      this.isEspectador = false;
    };

  }

  preparaEndereco(endereco: Endereco){
    this.enderecoSelecionado = endereco;
  }

  novoEvento() {
    window.sessionStorage.removeItem('ID_EVENTO');
    this.router.navigate(['evento-form']);
  }

  eventoForm(id: number) {
    window.sessionStorage.setItem('ID_EVENTO', id.toString());  
    if (this.roles.length > 1) {
      this.router.navigate(['evento-form']);
    }
  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}

