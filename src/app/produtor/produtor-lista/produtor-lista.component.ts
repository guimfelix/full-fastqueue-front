import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/endereco';
import { ProdutorService } from 'src/app/services/produtor.service';
import { Produtor } from '../produtor';

@Component({
  selector: 'app-produtor-lista',
  templateUrl: './produtor-lista.component.html',
  styleUrls: ['./produtor-lista.component.css']
})
export class ProdutorListaComponent implements OnInit {

  produtores: Produtor[] = [];
  enderecoSelecionado = false;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: ProdutorService,
    private router: Router) { }

    displayStyle = "none";
  
    openPopup() {
      this.displayStyle = "block";
    }
    closePopup() {
      this.displayStyle = "none";
    }
  
  ngOnInit(): void {
    this.service
    .getProdutores()
    .subscribe ( resposta => this.produtores = resposta );
  }

  preparaEndereco(){
    this.enderecoSelecionado = true;
  }
}
