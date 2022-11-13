import { Component } from '@angular/core';
import { AuthService } from '../providers/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
})
export class AccountPageComponent {
  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) {
  }

  public logout() {
    this._authService.logout().subscribe(
      () => {
        this._router.navigate(['/login'])
      }
    );
  }
}
