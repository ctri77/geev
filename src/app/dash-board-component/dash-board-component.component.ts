import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dash-board-component',
  templateUrl: './dash-board-component.component.html',
  styleUrls: ['./dash-board-component.component.scss'],
})

@Injectable()
export class DashBoardComponentComponent implements OnInit {

  
  lastUpdate = new Date();

  constructor(private http: HttpClient) {
    let results = [];
  }

  ngOnInit() {
    this.getStart();
  }

  getStart() {
    setInterval(
      () => {
        this.getApiService();
      }
    , 60000)
  }

  getApiService() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let tempObj = {};
    let upDate = new Date();
    this.http
      .get<any[]>(proxyurl+'https://prod.geev.fr/alive')
      .subscribe(
        (response) => {
          tempObj = {...tempObj, upDate};
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      )
  }
}

