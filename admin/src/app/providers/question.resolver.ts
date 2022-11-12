import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { Question } from '../entities/question';
import { QuestionService } from './question.service';
import { LoadingGlobalState } from './loading-global.state';

@Injectable({
  providedIn: 'root'
})
export class QuestionResolver implements Resolve<Question | boolean> {
  constructor(
    private _questionService: QuestionService,
    private _loadingGlobalState: LoadingGlobalState,
    private _router: Router,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question> | Promise<boolean> {
    const id: number = +route.paramMap.get('id')!;

    this._loadingGlobalState.loading = true;
    return this._questionService.get(id).pipe(
      finalize(() => this._loadingGlobalState.loading = false),
      catchError((err) => {
        this._router.navigate(['/']);
        return throwError(err);
      })
    );
  }
}
