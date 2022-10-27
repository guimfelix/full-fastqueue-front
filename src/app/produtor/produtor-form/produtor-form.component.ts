import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/endereco';
import { EspectadorService } from 'src/app/services/espectador.service';
import { ProdutorService } from 'src/app/services/produtor.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Produtor } from '../produtor';
import { ProdutorListaComponent } from '../produtor-lista/produtor-lista.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-produtor-form',
  templateUrl: './produtor-form.component.html',
  styleUrls: ['./produtor-form.component.css']
})
export class ProdutorFormComponent implements OnInit {

  endereco: Endereco;
  produtor: Produtor;
  success: boolean = false;
  errors: string[];
  idLogado: any = null;

  constructor(
    private service: ProdutorService,
    private service2: EspectadorService,
    private dadosToken: TokenStorageService,
    private router: Router,
  )
  { 
    this.produtor = new Produtor();
    this.endereco = new Endereco();
    this.produtor.endereco = this.endereco;
  }

  ngOnInit(): void {
    this.idLogado = window.sessionStorage.getItem('ID_CLIENTE'); 
    this.produtor.id = null;
    if (this.idLogado) {
      this.service
        .getProdutorById(this.idLogado)
        .subscribe( 
          response => this.produtor = response ,
          errorResponse => this.produtor = new Produtor()
        )
    } else {
      this.service.getProdutorByUserId(this.dadosToken.getUser().id)
        .subscribe(
          response => this.produtor = response,
          errorResponse => this.produtor = new Produtor()
      );
      if (this.produtor.id != undefined) {
        window.sessionStorage.setItem('ID_CLIENTE', this.produtor.id.toString());
      } else {
        this.produtor.id = null;
      }
      
    }
  }

  voltarHome() {
    this.router.navigate(['/home'])
  }

  onSubmit(){
    if(this.idLogado){

      this.service
        .atualizar(this.produtor)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o produtor.']
        });
      this.service2.atualizar(this.produtor)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o produtor.']
      });


    }else{

      this.service
        .salvar(this.produtor)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.produtor = response;
          window.sessionStorage.setItem('ID_CLIENTE', this.produtor.id.toString());
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        });
      this.service2.salvar(this.produtor)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.produtor = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });

    }
    this.router.navigate(['/home'])
  }
}
