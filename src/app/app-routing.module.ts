import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/auth.guard';
import { DefaultComponent } from './modules/layouts/default/default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { SigninComponent } from './modules/login/signin/signin.component';


const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'category',
    component: DefaultComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/category/category.module').then(
            (m) => m.CategoryModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: '', component: SigninComponent },
  { path: 'login', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
