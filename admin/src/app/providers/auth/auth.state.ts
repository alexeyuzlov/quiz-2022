import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IUser {
  userName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthState {
  public user: IUser | null = null;

  public get(): Observable<IUser> {
    const user = localStorage.getItem('user');
    const result = user ? JSON.parse(user) : null;

    return of(result);
  }

  public set(user: IUser): Observable<any> {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));

    return of(null);
  }

  public logout(): Observable<any> {
    this.user = null;
    localStorage.removeItem('user');

    return of(null);
  }
}
