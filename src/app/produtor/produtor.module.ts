import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutorRoutingModule } from './produtor-routing.module';
import { ProdutorFormComponent } from './produtor-form/produtor-form.component';
import { ProdutorListaComponent } from './produtor-lista/produtor-lista.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ProdutorFormComponent, ProdutorListaComponent],
  imports: [
    CommonModule,
    ProdutorRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [ ProdutorFormComponent, ProdutorListaComponent ]
})
export class ProdutorModule { }
