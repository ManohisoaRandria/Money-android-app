import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private  token:string;
  private todayDepense:any[]=[];
  private solde:number;
  private alldepense:any[];
  tokenSubject=new BehaviorSubject("");
  todayDepenseSubject=new BehaviorSubject([]);
  soldeSubject=new BehaviorSubject(0);
  alldepenseSubject=new BehaviorSubject([]);

  constructor() { }

  emitToken(){
    this.tokenSubject.next(this.token);
  }
  emitTodayDepense(){
    this.todayDepenseSubject.next(this.todayDepense);
  }
  soldeSubjectDepense(){
    this.soldeSubject.next(this.solde);
  }
  alldepensedepsens(){
    this.alldepenseSubject.next(this.alldepense);
  }
  getDepsenseToDay(){
    setTimeout(() => {
      this.todayDepense=["aza","qsdqs","sqdqsd"];
      this.emitTodayDepense();
    }, 2000);
  }
  addDepenseToDay(){
    setTimeout(() => {
      this.todayDepense.push("vee");
      this.emitTodayDepense();
    }, 2000);
  }
}
