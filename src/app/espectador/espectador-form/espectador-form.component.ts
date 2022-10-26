import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/endereco';
import { AuthService } from 'src/app/services/auth.service';
import { EspectadorService } from 'src/app/services/espectador.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Espectador } from '../espectador';

@Component({
  selector: 'app-espectador-form',
  templateUrl: './espectador-form.component.html',
  styleUrls: ['./espectador-form.component.css']
})
export class EspectadorFormComponent implements OnInit {

  endereco: Endereco;
  espectador: Espectador
  success: boolean = false;
  errors: string[];
  idLogado: any = null;

  constructor(
    private service: EspectadorService,
    private dadosToken: TokenStorageService,
    private router: Router)
  { 
    this.espectador = new Espectador();
    this.endereco = new Endereco();
  }

  ngOnInit(): void {
    //this.espectador.id = null;
    this.idLogado = window.sessionStorage.getItem('ID_CLIENTE');
    if (this.idLogado) {
      this.service
        .getEspectadorById(this.idLogado)
        .subscribe(
          response => this.espectador = response,
          errorResponse => this.espectador = new Espectador()
        )
    } else { 
      this.service
        .getEspectadorByUserId(this.dadosToken.getUser().id)
        .subscribe(
          response => this.espectador = response,
          errorResponse => this.espectador = new Espectador()
      );
      window.sessionStorage.setItem('ID_CLIENTE', this.espectador.id.toString());
    }
  }

  voltarHome(){
    this.router.navigate(['/home'])
  }

  onSubmit() {
    if(this.idLogado){
      this.service
        .atualizar(this.espectador)
        .subscribe(response => {
            this.success = true;
            this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o espectador.']
        })

    } else {
      this.service
        .salvar(this.espectador)
          .subscribe( response => {
            this.success = true;
            this.errors = null;
            this.espectador = response;
            window.sessionStorage.setItem('ID_CLIENTE', this.espectador.id.toString());
          } , errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          })

    }
    this.router.navigate(['/home'])
  }
 

}
