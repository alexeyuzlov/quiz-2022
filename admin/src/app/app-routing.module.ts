import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { AuthGuard } from './providers/auth/auth.guard';
import { NonAuthGuard } from './providers/auth/non-auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [NonAuthGuard]
  },
  {
    path: 'app',
    component: AccountPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'questions',
        loadChildren: () => import('./questions').then(({QuestionsModule}) => QuestionsModule),
      },
      {
        path: '',
        redirectTo: '/app/questions',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NotFoundPageComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
