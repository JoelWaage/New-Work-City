import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MusicalsComponent } from './musicals/musicals.component';
import { MusicalDetailComponent } from './musical-detail/musical-detail.component';
import { MusicalService } from './musical.service';


@NgModule({
  declarations: [
    AppComponent,
    MusicalsComponent,
    MusicalDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    MusicalService,
    /* . . . */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
