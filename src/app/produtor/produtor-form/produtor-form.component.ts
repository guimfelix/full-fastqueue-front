import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Endereco } from 'src/app/endereco';
import { EspectadorService } from 'src/app/services/espectador.service';
import { ProdutorService } from 'src/app/services/produtor.service';
import { Produtor } from '../produtor';

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
  idLogado: any;

  constructor(
    private service: ProdutorService,
    private service2: EspectadorService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  )
  { 
    this.produtor = new Produtor();
    this.endereco = new Endereco();
  }

  ngOnInit(): void {
    this.idLogado = window.sessionStorage.getItem('ID_CLIENTE'); 
    if(this.idLogado){
      this.service
        .getProdutorById(this.idLogado)
        .subscribe( 
          response => this.produtor = response ,
          errorResponse => this.produtor = new Produtor()
        )
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
          this.errors = ['Erro ao atualizar o cliente.']
        });
      this.service2.atualizar(this.produtor)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o cliente.']
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
        window.sessionStorage.setItem('ID_CLIENTE', this.produtor.id.toString());
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });

    }

  }
}
