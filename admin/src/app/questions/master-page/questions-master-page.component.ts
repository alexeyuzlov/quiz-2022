import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../providers/question.service';
import { Question } from '../../entities/question';

@Component({
  selector: 'app-questions-master-page',
  templateUrl: './questions-master-page.component.html',
})
export class QuestionsMasterPageComponent implements OnInit {
  public questions: Question[] = [];

  constructor(
    private _questionService: QuestionService,
  ) {
  }

  ngOnInit(): void {
    this._questionService.getAll().subscribe(
      (questions: Question[]) => this.questions = questions
    );
  }

}
