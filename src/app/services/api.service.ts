import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private token: string;
  private todayDepense = [];
  private solde: number;
  private alldepense: any[] = [];
  tokenSubject = new BehaviorSubject("");
  todayDepenseSubject = new BehaviorSubject([]);
  soldeSubject = new BehaviorSubject(0);
  alldepenseSubject = new BehaviorSubject([]);
  private url: string = "http://localhost/volakoBack";
  constructor(private http: HttpClient) {

  }

  emitToken() {
    this.tokenSubject.next(this.token);
  }
  emitTodayDepense() {
    this.todayDepenseSubject.next(this.todayDepense);
  }
  soldeSubjectDepense() {
    this.soldeSubject.next(this.solde);
  }
  emitAlldepenses() {
    this.alldepenseSubject.next(this.alldepense);
  }
  getAllDepense() {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      });
      const requestOptions = {
        headers: header
      };
      this.http.get(this.url + '/depense/all', requestOptions).subscribe((res: any[]) => {
        if (typeof (res) == 'string' && res == "not loged") {
          reject(res);
        } else {
          this.alldepense = res;
          this.emitAlldepenses();
          resolve(res);
        }
      }, error => {
        reject(error);
      })
    });
  }
  getDepsenseToDay() {
    return new Promise((resolve, reject) => {


      const header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      });
      const requestOptions = {
        headers: header
      };
      this.http.get(this.url + '/depense/today', requestOptions).subscribe((res: any[]) => {
        if (typeof (res) == 'string' && res == "not loged") {
          reject(res);
        } else {
          this.todayDepense = res;
          this.emitTodayDepense();
          resolve(res);
        }
      }, error => {
        reject(error);
      })
    });
  }
  addDepenseToDay(date: string, motif: string, montant: number) {
    return new Promise((resolve, reject) => {
      let data = {
        "date": date,
        "montant": montant,
        "motif": motif
      }
      const header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      });
      const requestOptions = {
        headers: header
      };
      this.http.post(this.url + '/depenser', data, requestOptions).subscribe(res => {
        if (res == "data invalid" || res == "no data to insert" || res == "solde insuffisante") {
          reject(res);
        } else {
          this.getDepsenseToDay().then(res2 => {
            this.getAllDepense().then(res3 => {
              let rep = {
                "res1": res2,
                "res2": res3
              }
              ///Pour modifier le solde dans home
              this.getMySolde().then(res4 => {
                let rep2 = {
                  "res1": rep,
                  "res2": res4
                }
                resolve(rep2);
              });
            });
          });

        }
      }, error => {
        reject(error);
      })
    });
  }

  getMySolde() {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      });
      const requestOptions = {
        headers: header
      };
      this.http.get(this.url + '/mySolde', requestOptions).subscribe((res: any) => {
        if (res == "not loged") {
          reject(res);
        } else {
          this.solde = res;
          this.soldeSubjectDepense();
          resolve(res);
        }
      }, error => {
        reject(error);
      })
    });
  }

  onAddSold(montant: Number, date: string) {
    return new Promise((resolve, reject) => {
      let data = {
        "montant": montant,
        "date": date
      }
      //header
      const optionRequete = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
        })
      };
      this.http.post(this.url + '/credit', data, optionRequete).subscribe(res => {
        if (res == "not loged" || res == "no data to insert" || res == "data invalid") {
          reject("Credit failed");
        } else {
          ///Pour modifier le solde dans home
          this.getMySolde().then(res => {
            resolve(res);
          });
          console.log(localStorage.getItem('user'));
          resolve("Credit succes");
        }
      }, error => {
        reject(error);
      })

    });
  }
}
