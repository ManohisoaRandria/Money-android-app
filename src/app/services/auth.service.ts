import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isAuth:boolean = false;
    nomUser:string="";
    obs=new BehaviorSubject("");
    emit(){
      this.obs.next(this.nomUser);
    }

    constructor(private  http:HttpClient){}

    signIn(email:string,mdp:string){
      return new Promise((resolve,reject)=>{
        let data={
          "email":email,
          "pwd":mdp
        }
        this.http.post('http://localhost/wccs2-volako-back/login',data).subscribe(res=>{
            if(res=="no login" || res=="login diso"){
              reject("Login failed");
            }else if(res['userName']!=undefined && res['token']!=undefined){
              localStorage.setItem("user",res['userName']);
              localStorage.setItem("token",res['token']);
              this.nomUser=localStorage.getItem('user');
              this.emit();
              this.isAuth = true;
              resolve(localStorage.getItem("token"));
            } 
        },error=>{
          reject(error);
        })
      });
    
    }
    signUp(nom:string,email:string,mdp:string){
      return new Promise((resolve,reject)=>{
        let data={
          "nom":nom,
          "email":email,
          "pwd":mdp
        }
        this.http.post('http://localhost/wccs2-volako-back/inscription',data).subscribe(res=>{
            if(res=="no inscription data"){
              reject(res);
            }else if(res['message']!=undefined && res['message']=="register success"){
              resolve(res['message']);
            }else{
              reject(res['message']);
            }
        },error=>{
          reject(error);
        })
      });
    }
    signOut(){
      localStorage.clear();
      this.nomUser="";
      this.emit();
      this.isAuth = false;
    }
}
