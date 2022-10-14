import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardEspectadorComponent } from './board-espectador/board-espectador.component';
import { BoardProdutorComponent } from './board-produtor/board-produtor.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { EspectadorFormComponent } from './espectador/espectador-form/espectador-form.component';
import { EspectadorListaComponent } from './espectador/espectador-lista/espectador-lista.component';
import { ProdutorFormComponent } from './produtor/produtor-form/produtor-form.component';
import { ProdutorListaComponent } from './produtor/produtor-lista/produtor-lista.component';
import { AuthGuard } from './auth.guard';
import { EventoListaComponent } from './evento/evento-lista/evento-lista.component';
import { EventoFormComponent } from './evento/evento-form/evento-form.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { EventoEspectadorComponent } from './espectador/evento-espectador/evento-espectador.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'espectador', component: BoardEspectadorComponent, canActivate: [AuthGuard] },
  { path: 'espectador-form', component: EspectadorFormComponent, canActivate: [AuthGuard] },
  { path: 'espectador-lista', component: EspectadorListaComponent, canActivate: [AuthGuard], data: { roles: ['PAPEL_ADMIN', 'PAPEL_PRODUTOR']} },
  { path: 'produtor', component: BoardProdutorComponent, canActivate: [AuthGuard], data: { roles: ['PAPEL_PRODUTOR']} },
  { path: 'produtor-form', component: ProdutorFormComponent, canActivate: [AuthGuard], data: { roles: ['PAPEL_PRODUTOR']} } ,
  { path: 'produtor-lista', component: ProdutorListaComponent, canActivate: [AuthGuard], data: { roles: ['PAPEL_ADMIN']} },
  { path: 'admin', component: BoardAdminComponent, canActivate: [AuthGuard], data: { roles: ['PAPEL_ADMIN'] } },
  { path: 'evento-lista', component: EventoListaComponent },
  { path: 'evento-form', component: EventoFormComponent, canActivate: [AuthGuard], data: { roles: ['PAPEL_ADMIN', 'PAPEL_PRODUTOR']} },
  { path: 'evento-espectador', component: EventoEspectadorComponent, canActivate: [AuthGuard] },
  { path: 'evento-produtor', component: EventoFormComponent, canActivate: [AuthGuard], data: { roles: ['PAPEL_ADMIN', 'PAPEL_PRODUTOR']} },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
