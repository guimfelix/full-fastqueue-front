import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { Espectador } from 'src/app/espectador/espectador';
import { EspectadorService } from 'src/app/services/espectador.service';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from '../evento';

@Component({
  selector: 'app-evento-vinculo',
  templateUrl: './evento-vinculo.component.html',
  styleUrls: ['./evento-vinculo.component.css']
})
export class EventoVinculoComponent implements OnInit {

  idEvento: any;
  idCliente: any;
  evento: Evento;
  espectador: Espectador;

  constructor(
    private router: Router,
    private service1: EspectadorService,
    private service2: EventoService,
  ) { }

  ngOnInit(): void {
    this.idCliente = window.sessionStorage.getItem("ID_CLIENTE");
    this.idEvento = window.sessionStorage.getItem("ID_EVENTO");

    this.service2.getEventoById(this.idEvento).subscribe(res => {
      this.evento = res;
    });
    this.service1.getEspectadorById(this.idCliente).subscribe(res => {
      this.espectador = res;
    });
    
  }

  vincularEvento() {
    this.service1.vincular(this.espectador.id, this.evento).subscribe(res => {

    });
    this.service2.vincular(this.evento.id, this.espectador).subscribe(res => {

    });
    this.router.navigate(['/evento-espectador'])

  }

}
