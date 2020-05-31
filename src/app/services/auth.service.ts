import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isAuth:boolean = false;
    
    constructor(private  http:HttpClient){}
    signIn(email:string,mdp:string){
      return new Promise((resolve,reject)=>{
        let data={
          "email":email,
          "pwd":mdp
        }
        this.http.post('http://localhost/volakoBack/login',data).subscribe(res=>{
            resolve(res);
        },error=>{
          reject(error);
        })
      });
    
    }
    signUp(nom:string,email:string,mdp:string){
      this.isAuth = true;
  }
    signOut(){
        this.isAuth = false;
    }
}
