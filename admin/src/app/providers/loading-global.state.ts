import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingGlobalState {
  public loading: boolean = false;
}
