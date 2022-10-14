import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isProdutor = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(isProdutor: boolean): void {
    const { username, email, password } = this.form;
    if (isProdutor) {
      this.authService.register(username, email, password).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    } else {
      this.authService.produtorRegister(username, email, password).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }
    this.isProdutor = false;
  }

  produtorAtivado(): void {
    this.isProdutor = true;
  }
}