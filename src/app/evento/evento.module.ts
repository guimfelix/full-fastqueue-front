import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import { EventoFormComponent } from './evento-form/evento-form.component';
import { EventoListaComponent } from './evento-lista/evento-lista.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventoMapaComponent } from './evento-mapa/evento-mapa.component';


@NgModule({
  declarations: [EventoFormComponent, EventoListaComponent, EventoMapaComponent],
  imports: [
    CommonModule,
    EventoRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: [EventoFormComponent, EventoListaComponent]
})
export class EventoModule { }
