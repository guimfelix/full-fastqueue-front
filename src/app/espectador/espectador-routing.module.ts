import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { EspectadorFormComponent } from './espectador-form/espectador-form.component';
import { EspectadorListaComponent } from './espectador-lista/espectador-lista.component';


const routes: Routes = [
  { }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspectadorRoutingModule { }
