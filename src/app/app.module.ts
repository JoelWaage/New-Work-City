import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MusicalsComponent } from './musicals/musicals.component';
import { MusicalDetailComponent } from './musical-detail/musical-detail.component';
import { MusicalService } from './musical.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    MusicalsComponent,
    MusicalDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    MusicalService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
