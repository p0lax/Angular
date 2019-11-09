import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hero', component: HeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
