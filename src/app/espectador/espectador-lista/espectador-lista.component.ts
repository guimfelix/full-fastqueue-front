import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/endereco';
import { EspectadorService } from 'src/app/services/espectador.service';
import { Espectador } from '../espectador';

@Component({
  selector: 'app-espectador-lista',
  templateUrl: './espectador-lista.component.html',
  styleUrls: ['./espectador-lista.component.css']
})
export class EspectadorListaComponent implements OnInit {

  espectadores: Espectador[] = [];
  enderecoSelecionado: Endereco;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: EspectadorService,
    private router: Router) { }

  ngOnInit(): void {
    this.service
      .getEspectadores()
      .subscribe( resposta => this.espectadores = resposta );
  }

  preparaEndereco(endereco: Endereco){
    this.enderecoSelecionado = endereco;
  }
}
