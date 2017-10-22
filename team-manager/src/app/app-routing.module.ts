import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { ListComponent } from './list/list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: '', redirectTo: 'players/list', pathMatch: 'full' },
  { path: 'players', component: PlayersComponent, children: [
    { path: 'list', component: ListComponent },
    { path: 'addplayer', component: AddPlayerComponent }
  ]},
  { path: 'status', component: PlayerStatusComponent, children: [
    { path: 'game/:id', component: GameComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing = RouterModule.forRoot(routes);
