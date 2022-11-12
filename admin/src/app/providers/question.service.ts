import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../entities/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  get api() {
    return `http://localhost:3000/questions/`;
  }

  constructor(
    private _http: HttpClient
  ) {
  }

  public getAll(): Observable<Question[]> {
    return this._http.get<Question[]>(`${this.api}`);
  }

  public get(id: number): Observable<Question> {
    return this._http.get<Question>(`${this.api}${id}`);
  }

  public create(question: Question): Observable<Question> {
    return this._http.post<Question>(`${this.api}`, question);
  }

  public edit(question: Question): Observable<Question> {
    return this._http.put<Question>(`${this.api}${question.id}`, question);
  }

  public remove(id: number) {
    return this._http.delete(`${this.api}${id}`);
  }
}
