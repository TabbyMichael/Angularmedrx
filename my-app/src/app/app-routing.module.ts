import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { PharmacyRegistrationComponent } from './pharmacy-registration/pharmacy-registration.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { UserdetailsSignupComponent } from './userdetails-signup/userdetails-signup.component';
// import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sign-up-page', component: SignUpPageComponent},
  {path: 'pharmacy-registration', component: PharmacyRegistrationComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'userdetails-signup', component: UserdetailsSignupComponent},
  // {path: 'signin', component: SigninComponent},
  {path: '**', redirectTo: ''}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}

