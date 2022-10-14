import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { GoogleLoginProvider, SocialAuthService } from "angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  isCadastrado = true;
  idCliente: number;
  

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private authServiceSocial: SocialAuthService,
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveRefreshToken(data.refreshToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.isCadastrado = this.tokenStorage.getUser().isCadastrado;
        if (!this.isCadastrado && this.roles.length==2) {
          this.router.navigate(['produtor-form']);
        } else if (this.isCadastrado && this.roles.length==2) {
          this.router.navigate(['home']);
        } else if (this.roles.includes('PAPEL_ADMIN', 0)) {
          this.router.navigate(['admin']);
        } else if (!this.isCadastrado && this.roles.length==1) {
          this.router.navigate(['espectador-form']);
        } else {
          this.router.navigate(['home']);
        }
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  signInWithGoogle(): void {
    this.authServiceSocial.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authServiceSocial.signOut();
  }
}
