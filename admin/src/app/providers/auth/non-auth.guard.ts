import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthState, IUser } from './auth.state';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanActivate {
  constructor(
    private _authState: AuthState,
    private _router: Router
  ) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._authState.get().pipe(
      map((user: IUser | null) => {
        if (!user) {
          return true;
        }

        this._router.navigate(['/']);

        return false;
      })
    );
  }
}
