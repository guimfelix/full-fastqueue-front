import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/services/evento.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Evento } from '../evento';

@Component({
  selector: 'app-evento-pesquisa',
  templateUrl: './evento-pesquisa.component.html',
  styleUrls: ['./evento-pesquisa.component.css']
})
export class EventoPesquisaComponent implements OnInit {

  nomeEvento: string;
  eventos: Evento[] = [];
  enderecoSelecionado = false;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private dadosToken: TokenStorageService,
      private service: EventoService, 
      private router: Router
  ) { }

  ngOnInit(): void {

  }

  preparaEndereco(){
    this.enderecoSelecionado = true;
  }

  buscaEvento() {
    this.service
      .buscar(this.nomeEvento)
      .subscribe(resposta => {
        this.eventos = resposta,
        errorResponse => this.mensagemErro = "Não foi encontrado eventos com esse nome";
      });
  }

}
