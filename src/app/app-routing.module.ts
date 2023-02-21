import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './components/forgot/forgot.component';
import { LoginComponent } from './components/login/login.component';
import { NofoundComponent } from './components/nofound/nofound.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'forgot-password', component:ForgotComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'}, 
  { path: 'admin', loadChildren: () => import('./admin/customers.module').then(m => m.CustomersModule) },
  {path:'**', component:NofoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
