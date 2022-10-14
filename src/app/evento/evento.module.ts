import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import { EventoFormComponent } from './evento-form/evento-form.component';
import { EventoListaComponent } from './evento-lista/evento-lista.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EventoFormComponent, EventoListaComponent],
  imports: [
    CommonModule,
    EventoRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: [EventoFormComponent, EventoListaComponent]
})
export class EventoModule { }
