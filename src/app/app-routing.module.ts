import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './containers/site.component';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      // { path: 'home', component: SiteComponent },
      { path: 'bet', component: SiteComponent },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
