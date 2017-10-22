import { Component, OnInit } from '@angular/core';
import { ManagerService } from './../manager.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  players = [];

  constructor(
    private _managerServive: ManagerService,
    private _http: Http,
    ) { this.show(); }

  ngOnInit() {
  }

  show() {
    this._http.get('/players')
    .subscribe(
      (players) => {
        console.log('Succeessful response from the server');
        this.players = players.json();
        console.log(this.players);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  remove(id) {
    this._http.delete(`/players/${id}`)
    .subscribe(
      (response) => {
        console.log('Succeessful response from the server');
        console.log(response);
        this.show();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
