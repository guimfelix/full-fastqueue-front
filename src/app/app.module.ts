import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardProdutorComponent } from './board-produtor/board-produtor.component';
import { BoardEspectadorComponent } from './board-espectador/board-espectador.component';

import { authInterceptorProviders } from './utils/auth.interceptor';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { ProdutorFormComponent } from './produtor/produtor-form/produtor-form.component';
import { ProdutorListaComponent } from './produtor/produtor-lista/produtor-lista.component';
import { EventoFormComponent } from './evento/evento-form/evento-form.component';
import { EventoListaComponent } from './evento/evento-lista/evento-lista.component';
import { EspectadorFormComponent } from './espectador/espectador-form/espectador-form.component';
import { EspectadorListaComponent } from './espectador/espectador-lista/espectador-lista.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { EventoEspectadorComponent } from './espectador/evento-espectador/evento-espectador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardProdutorComponent,
    BoardEspectadorComponent,
    ProdutorFormComponent,
    ProdutorListaComponent,
    EventoFormComponent,
    EventoListaComponent,
    EspectadorFormComponent,
    EspectadorListaComponent,
    ConfiguracoesComponent,
    EventoEspectadorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
  ],
  providers: [authInterceptorProviders,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '357594961004-f1833o8jsqdob4qa869dsm4kmsqu9fgq.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
