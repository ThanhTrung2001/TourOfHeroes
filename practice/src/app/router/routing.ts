import { Routes } from '@angular/router';
import { HeroesComponent } from '../components/heroes/heroes.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HeroDetailComponent } from '../components/heroes/hero-detail/hero-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
];
