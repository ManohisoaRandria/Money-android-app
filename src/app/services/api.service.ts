import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private  token:string;
  private todayDepense=[];
  private solde:number;
  private alldepense:any[]=[];
  tokenSubject=new BehaviorSubject("");
  todayDepenseSubject=new BehaviorSubject([]);
  soldeSubject=new BehaviorSubject(0);
  alldepenseSubject=new BehaviorSubject([]);

  constructor(private http:HttpClient) { 
   
  }

  emitToken(){
    this.tokenSubject.next(this.token);
  }
  emitTodayDepense(){
    this.todayDepenseSubject.next(this.todayDepense);
  }
  soldeSubjectDepense(){
    this.soldeSubject.next(this.solde);
  }
  emitAlldepenses(){
    this.alldepenseSubject.next(this.alldepense);
  }
  getAllDepense(){
    return new Promise((resolve,reject)=>{
      const header=new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem('token')
      });
      const requestOptions = {                                                                                                                                                                                 
        headers: header
      };
      this.http.get('http://localhost/volakoBack/depense/all',requestOptions).subscribe((res:any[])=>{
          if(typeof(res)=='string' && res=="not loged"){
            reject(res);
          }else{
            this.alldepense=res;
            this.emitAlldepenses();
            resolve(res);
          }
      },error=>{
        reject(error);
      })
    });
  }
  getDepsenseToDay(){
    return new Promise((resolve,reject)=>{
     
    
      const header=new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem('token')
      });
      const requestOptions = {                                                                                                                                                                                 
        headers: header
      };
      this.http.get('http://localhost/volakoBack/depense/today',requestOptions).subscribe((res:any[])=>{
          if(typeof(res)=='string' && res=="not loged"){
            reject(res);
          }else{
            this.todayDepense=res;
            this.emitTodayDepense();
            resolve(res);
          }
      },error=>{
        reject(error);
      })
    });
  }
  addDepenseToDay(date:string,motif:string,montant:number){
    return new Promise((resolve,reject)=>{
      let data={
        "date":date,
        "montant":montant,
        "motif":motif
      }
      const header=new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem('token')
      });
      const requestOptions = {                                                                                                                                                                                 
        headers: header
      };
      this.http.post('http://localhost/volakoBack/mp',data,requestOptions).subscribe(res=>{
          if(res=="data invalid" || res=="no data to insert"){
            reject(res);
          }else{
            this.getDepsenseToDay().then(res2=>{
              this.getAllDepense().then(res3=>{
                let rep={
                  "res1":res2,
                  "res2":res3
                }
                resolve(rep);
              });
            });
            
          }
      },error=>{
        reject(error);
      })
    });
   
  }
}
