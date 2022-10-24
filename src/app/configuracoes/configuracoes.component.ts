import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  roles: string[] = [];

  constructor(private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    window.location.reload
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getUser().roles;
      console.log(this.roles);
      if (this.roles.includes('PAPEL_ADMIN')) {
        this.router.navigate(['admin']);
      } else if (this.roles.includes('PAPEL_PRODUTOR')) {
        console.log("entrei produtor");
        this.router.navigate(['produtor-form']);
      } else if (this.roles.includes('PAPEL_ESPECTADOR')){ 
        console.log("entrei espectador");
        this.router.navigate(['espectador-form']);
      } else {
        this.router.navigate(['login']);
      }
    }
  }

}
