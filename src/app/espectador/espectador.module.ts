import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule } from '@angular/forms';

import { EspectadorRoutingModule } from './espectador-routing.module';
import { EspectadorFormComponent } from './espectador-form/espectador-form.component';
import { EspectadorListaComponent } from './espectador-lista/espectador-lista.component';
import { RouterModule } from '@angular/router';
import { EventoEspectadorComponent } from './evento-espectador/evento-espectador.component';


@NgModule({
  declarations: [EspectadorFormComponent, EspectadorListaComponent, EventoEspectadorComponent],
  imports: [
    CommonModule,
    EspectadorRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [ EspectadorFormComponent, EspectadorListaComponent ]
})
export class EspectadorModule { }
