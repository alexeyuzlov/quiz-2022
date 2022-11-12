import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../../entities/question';

@Component({
  selector: 'app-questions-edit-page',
  templateUrl: './questions-edit-page.component.html',
})
export class QuestionsEditPageComponent implements OnInit {
  public form!: FormGroup;

  public question: Question | null = null;

  constructor(
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.question = this._activatedRoute.snapshot.data['question'];

    this.form = this._fb.nonNullable.group({
      question: ['']
    });

    if (this.question) {
      this.form.patchValue(this.question);
    }
  }
}
