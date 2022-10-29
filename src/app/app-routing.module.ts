import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CourcesComponent } from './cources/cources.component';

const routes: Routes = [{path:"Navbar",component:NavbarComponent},{path:"home",component:HomeComponent},{path:"registration",component:RegistrationComponent},{path:"login",component:LoginComponent},
{path:"cources",component:CourcesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
