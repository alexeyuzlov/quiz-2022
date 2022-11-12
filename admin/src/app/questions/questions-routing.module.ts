import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';
import { QuestionsMasterPageComponent } from './master-page/questions-master-page.component';
import { QuestionsEditPageComponent } from './edit-page/questions-edit-page.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionResolver } from '../providers/question.resolver';

const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent,
    children: [
      {
        path: '',
        component: QuestionsMasterPageComponent,
      },
      {
        path: 'create',
        component: QuestionsEditPageComponent,
      },
      {
        path: ':id',
        component: QuestionsEditPageComponent,
        resolve: {
          question: QuestionResolver
        }
      },
      {
        path: '**',
        component: NotFoundPageComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule {
}
