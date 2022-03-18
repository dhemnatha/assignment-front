import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { TokenStoreService } from '../../auth/services/token-store.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  // form: any = {
  //   email: null,
  //   password: null,
  // };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  submitted = false;
  constructor(
    // private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  get f() {
    return this.signInForm.controls;
  }

  goToHome(): void {
    this.router.navigate(['/home/dashboard']);
  }

  onSubmit(): void {
    this.submitted = true;
    if (!this.signInForm.invalid) {
      this.authService
        .login(this.signInForm.value.email, this.signInForm.value.password)
        .subscribe({
          next: (data) => {
            this.tokenStorage.saveToken(data.results.token);
            this.tokenStorage.saveUserAuthStatus('true');
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.goToHome();
          },
          error: (err) => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          },
        });
    }
  }
}
