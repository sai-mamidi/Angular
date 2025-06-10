import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './dashboard/view/view.component';
import { ProtectorGuard } from './auth/protector.guard';

const routes: Routes = [
  {path: 'home', component: AppComponent,
    children : [
      {path: '',loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)}
    ],
    canActivate: [ProtectorGuard]
  },
  {path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)},
  {path: '', redirectTo: 'auth',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
