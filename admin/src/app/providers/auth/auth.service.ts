import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AuthState } from './auth.state';

export interface LoginRequest {
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private _authState: AuthState,
  ) {
  }

  public login(body: LoginRequest): Observable<any> {
    if (body.userName === 'user' && body.password === 'pass') {
      return this._authState.set({
        userName: body.userName
      });
    }

    return throwError(new Error('Incorrect password'))
  }

  public logout(): Observable<any> {
    return this._authState.logout();
  }
}
