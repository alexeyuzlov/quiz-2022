import { Component } from '@angular/core';
import { LoadingGlobalState } from './providers/loading-global.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    public loadingGlobalState: LoadingGlobalState
  ) {
  }
}
