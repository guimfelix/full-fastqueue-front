import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/endereco';
import { Evento } from 'src/app/evento/evento';
import { EspectadorService } from 'src/app/services/espectador.service';
import { EventoService } from 'src/app/services/evento.service';
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

  constructor(
    private service: EspectadorService,
    private service2: EventoService,
    private router: Router) { }

  ngOnInit(): void {
    this.idLogado = window.sessionStorage.getItem('ID_CLIENTE');
    this.service
      .getEspectadorById(this.idLogado)
      .subscribe(resposta => this.espectador = resposta);
    
    this.service2.getEventos()
      .subscribe(resposta => this.eventos = resposta);
  }

  preparaEndereco(endereco: Endereco){
    this.enderecoSelecionado = endereco;
  }
}

