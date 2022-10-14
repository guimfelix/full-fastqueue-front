import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { EventoFormComponent } from './evento-form/evento-form.component';
import { EventoListaComponent } from './evento-lista/evento-lista.component';


const routes: Routes = [
  {
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
