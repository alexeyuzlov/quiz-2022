import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, LoginRequest } from '../providers/auth/auth.service';
import { Router } from '@angular/router';

interface LoginForm {
  userName: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  public form!: FormGroup<LoginForm>;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
  ) {
  }

  ngOnInit(): void {
    this.form = this._fb.nonNullable.group({
      userName: ['user', Validators.required],
      password: ['pass', Validators.required],
    })
  }

  public submit() {
    const body: LoginRequest = this.form.getRawValue();

    this._authService.login(body).subscribe(
      () => {
        this._router.navigate(['/'])
      }
    );
  }
}
