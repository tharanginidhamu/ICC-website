import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { LandingComponent } from './landing/landing.component';
import { Prodct2Component } from './prodct2/prodct2.component';
import { Prodct3Component } from './prodct3/prodct3.component';


const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
 
    { path: 'landing',          component: LandingComponent },
    { path: 'prodct2',          component: Prodct2Component },
    { path: 'prodct3',          component: Prodct3Component },
    
    { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
