import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from './player';
import "rxjs";

@Injectable()
export class ManagerService {

  players = [];

  constructor(private _http: Http) { }

  index(callback) {
    this._http.get('/players').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  create(player) {
    return this._http.post(`/players/list`, player)
    .subscribe (
      (response) => {
        console.log('Successful response from the server');
        /* code */
      },
      (err) => {
        console.log(err);
      }
    );
  }

  destroy(id: string, callback) {
    this._http.delete(`/players/${id}`).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

}
