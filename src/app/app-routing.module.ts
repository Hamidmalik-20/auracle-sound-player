import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PalylistCardComponent } from './palylist-card/palylist-card.component';
import { PlayerBlockComponent } from './player-block/player-block.component';
import { SettingsComponent } from './settings/settings.component';
import { SehduleComponent } from './sehdule/sehdule.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'playlist', component: PalylistCardComponent },
  { path: 'player', component: PlayerBlockComponent },
  { path: 'setting', component: SettingsComponent },
  { path: 'sehdule', component: SehduleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
