import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  qtdPapeis: any;

  constructor(private userService: UserService, private router: Router, private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    
  }

  irListaEvento() {
    this.router.navigate(['evento-lista']);
  }

  irPesquisaEvento() {
    this.router.navigate(['evento-pesquisa']);
  }

  irCriarEvento() {
    if (this.tokenStorageService.getUser().roles == undefined)
      this.qtdPapeis = 0;
    else
      this.qtdPapeis = this.tokenStorageService.getUser().roles.length;
    
    if (this.qtdPapeis > 1) {
      this.router.navigate(['evento-form']);
    } else {
      this.tokenStorageService.signOut();
      this.router.navigate(['register']);
    }
  }
  
}
