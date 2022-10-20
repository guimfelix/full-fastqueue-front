import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService, private router: Router) { }

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
    //mudar rota
    this.router.navigate(['evento-lista']);
  }

  irCriarEvento() {
    //criar regra se for espectador criar signup
    this.router.navigate(['evento-form']);
  }
  
}
