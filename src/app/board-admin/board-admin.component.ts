import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { EventBusService } from '../shared/event-bus.service';
import { EventData } from '../shared/event.class';
import jsPDF from 'jspdf';
import { EventoService } from '../services/evento.service';
import autoTable from 'jspdf-autotable';
import { Evento } from '../evento/evento';
import html2canvas from 'html2canvas';
import { ProdutorService } from '../services/produtor.service';
import { EspectadorService } from '../services/espectador.service';
import { Produtor } from '../produtor/produtor';
import { Espectador } from '../espectador/espectador';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  eventos: Evento[] = [];
  produtores: Produtor[] = [];
  espectadores: Espectador[] = [];
  content: any;

  constructor(
    private eventoService: EventoService,
    private produtorService: ProdutorService,
    private espectadorService: EspectadorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.eventoService.getEventos().subscribe(
      data => {
        this.eventos = data;
      },
      err => {
        this.content = err.error.message || err.error || err.message;
      }
    );
    this.produtorService.getProdutores().subscribe(
      data => {
        this.produtores = data;
      },
      err => {
        this.content = err.error.message || err.error || err.message;
      }
    );
    this.espectadorService.getEspectadores().subscribe(
      data => {
        this.espectadores = data;
      },
      err => {
        this.content = err.error.message || err.error || err.message;
      }
    );
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('MeuRelatorio.pdf');
    
    });
  }

  openXLS(): void {
    let element = document.getElementById('htmlData');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    XLSX.writeFile(wb, 'MeuRelatorio.xlsx');
  }

  estatisticas(): void {
    this.router.navigate(['estatistica']);
  }

  listarEspectador(): void {
    this.router.navigate(['espectador-lista']);
  }

  listarProdutor(): void {
    this.router.navigate(['produtor-lista']);
  }

  listarEvento(): void {
    this.router.navigate(['evento-lista']);
  }
}
