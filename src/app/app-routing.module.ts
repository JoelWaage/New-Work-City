import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicalsComponent } from './musicals/musicals.component';

const routes: Routes = [
  { path: 'musicals', component: MusicalsComponent }
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
