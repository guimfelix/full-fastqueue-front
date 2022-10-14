import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ProdutorFormComponent } from './produtor-form/produtor-form.component';
import { ProdutorListaComponent } from './produtor-lista/produtor-lista.component';


const routes: Routes = [
  { }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutorRoutingModule { }
