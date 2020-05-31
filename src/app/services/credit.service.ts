import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { provideRoutes } from '@angular/router';

import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
    providedIn:'root'
})
@Pipe({
    name: 'dateFormatPipe',
})
export class CreditService {

     constructor(private http:HttpClient){}

     onAddSold(montant:Number,date:Date){
        return new Promise((resolve,reject)=>{
        var datePipe = new DatePipe("en-US");
        let dateS = datePipe.transform(date, 'yyyy/MM/dd');

        let data={
            "montant":montant,
            "date":dateS
        }

        //header
        const optionRequete = {
            headers: new HttpHeaders({ 
              'Authorization':'Bearer '+localStorage.getItem("token"),
            })
        };

        this.http.post('http://localhost/wccs2-volako-back/credit',data,optionRequete).subscribe(res=>{
            if(res == "not loged" || res =="no data to insert" || res == "data invalid"){
              reject("Credit failed");
            }else{
                console.log(res);
                resolve("Credit succes");
            } 
        },error=>{
          reject(error);
        })
        
     });
     
    }
}