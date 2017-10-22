import { Component, OnInit } from '@angular/core';
import { ManagerService } from './../manager.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player = {
    name: '',
    position: ''
  };

  constructor(
    private _managerServive: ManagerService,
    private _http: Http,
    private _router: Router) {}

  ngOnInit() {
  }

  create() {
    this._http.post('/players', this.player)
    .subscribe(
      (response) => {
        console.log('Succeessful response from the server');
        console.log(this.player);
        this._router.navigate(['/players/list']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
