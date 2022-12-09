import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then(m => m.Home2Module)
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule)
  },
  // { path: 'user-profile', component: ProfileComponent },
  // { path: 'register', component: SignupComponent },
  // { path: 'landing', component: LandingComponent },
  // { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home2', pathMatch: 'full' }


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
