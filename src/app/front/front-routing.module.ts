import { ResourcesComponent } from './resources/resources.component';
import { LoginComponent } from './login/login.component';
import { OthercountriesComponent } from './othercountries/othercountries.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiaComponent } from './india/india.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { FrontComponent } from './front.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: '', component: FrontComponent,
    children: [

      { path: 'india', component: IndiaComponent },
      { path: 'othercountries', component: OthercountriesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      { path: 'resources', component:ResourcesComponent },
      { path: 'forgotpwd',component:ForgotPwdComponent },
    ],

  },





];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
