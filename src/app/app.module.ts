import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PalylistCardComponent } from './palylist-card/palylist-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerBlockComponent } from './player-block/player-block.component';
import { SettingsComponent } from './settings/settings.component';
import { SehduleComponent } from './sehdule/sehdule.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PalylistCardComponent,
    PlayerBlockComponent,
    SettingsComponent,
    SehduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
