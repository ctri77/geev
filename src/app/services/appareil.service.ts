import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppareilService implements OnInit {

  results = [
  ];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('titi');
    this.getApiService();
 
  }


  getApiService() {
    console.log('toto');
    this.http
      .get<any[]>('https://prod.geev.fr/alive')
      .subscribe(
        (response) => {
          console.log(response);
          this.results = response;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      )
  }
}