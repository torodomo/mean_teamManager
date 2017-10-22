import { Component, OnInit } from '@angular/core';
import { ManagerService } from './../manager.service';
import { Http } from '@angular/http';
import { Player } from './../player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  players: Player[];
  game: number;
  game1: boolean = true;
  game2: boolean = false;
  game3: boolean = false;

  constructor(
    private _managerServive: ManagerService,
    private _http: Http,
    ) {}

  ngOnInit() {
    this.getPlayers();
  }
  whichGame(game) {
    if (game === 1) {
      this.game1 = true;
      this.game2 = false;
      this.game3 = false;
      return this.game1;
    }
    if (game === 2) {
      this.game1 = false;
      this.game2 = true;
      this.game3 = false;
      return this.game2;
    }
    if (game === 3) {
      this.game1 = false;
      this.game2 = false;
      this.game3 = true;
      return this.game3;
    }
  }

  getPlayers() {
    this._managerServive.index(players => this.players = players);
  }
}
