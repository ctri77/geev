import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dash-board-component',
  templateUrl: './dash-board-component.component.html',
  styleUrls: ['./dash-board-component.component.scss'],
})

@Injectable()
export class DashBoardComponentComponent implements OnInit {

  results = [];
  resultsFilter = [];
  compteur = 0;

  constructor(private http: HttpClient) {
    
    
  }

  ngOnInit() {
    this.getStart();
  }

  getStart() {
    setInterval(
      () => {
        this.getApiService();
      }
    , 10000)
  }

  getApiService() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let tempObj = {
      tempTime: Date,
      rel: String,
      diff: Date,
    };
    
  
    let debut = Date.now();

    let timeShow = new Date();
    let dd = timeShow.getDate();
    let mm = timeShow.getMonth() + 1;
    let yyyy = timeShow.getFullYear();
    let hh = timeShow.getHours();
    let min = timeShow.getMinutes();
    let ss = timeShow.getSeconds();
    if (dd < 10) {
      dd = 0 + dd;
    } 
    if (mm < 10) {
      mm = 0 + mm;
    }

    tempObj.tempTime = dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + min + ':' + ss;

    this.http
      .get<any[]>(proxyurl+'https://prod.geev.fr/alive')
      .subscribe(
        (response) => {
          this.compteur += 1;
          tempObj.rel = this.compteur + 'm ago';
          let fin = Date.now();
          let diff = fin - debut;
          tempObj.diff = diff;
          this.results = [...this.results, tempObj];
          if (this.results.length <= 5) {
            this.resultsFilter = this.results;
          } else {
            let j = 0;
            for (let i = this.results.length - 5;i<= this.results.length;i++) {
              this.resultsFilter[j] = this.results[i];
              if (i !== this.results.length) {
                j += 1;
              }    
            }

          }

          
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      )
  }
}

