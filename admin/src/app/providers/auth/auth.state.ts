import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IUser {
  userName: string;
}

export const AUTH_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthState {
  public user: IUser | null = null;

  public get(): Observable<IUser> {
    const user = localStorage.getItem(AUTH_KEY);
    const result = user ? JSON.parse(user) : null;

    return of(result);
  }

  public set(user: IUser): Observable<any> {
    this.user = user;
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));

    return of(null);
  }

  public logout(): Observable<any> {
    this.user = null;
    localStorage.removeItem(AUTH_KEY);

    return of(null);
  }
}
