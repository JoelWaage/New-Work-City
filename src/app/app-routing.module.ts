import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicalsComponent } from './musicals/musicals.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MusicalDetailComponent } from './musical-detail/musical-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MusicalDetailComponent },
  { path: 'musicals', component: MusicalsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
