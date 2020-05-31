import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {

  nom:string;
  email:string;
  mdp:string;
  confMdp:string;
  error:string="";
  timeLoad:boolean = false;
  TPConf:string = 'password';
  TPMdp:string = 'password';

  constructor(private router:Router,private auth:AuthService) {}

  ngOnInit() {}

  onInscription(){
    if(this.mdp=="" || this.confMdp=="" || this.mdp!=this.confMdp){
      this.error="Mot de pass incorrect"
    }else{
      this.timeLoad = true;
      this.auth.signUp(this.nom,this.email,this.mdp).then(res=>{
        console.log(res);
        this.timeLoad = false;
        this.email="";
        this.error="";
        this.confMdp="";
        this.mdp="";
        this.router.navigate(['auth']);
      }).catch(err=>{
        this.error=err;
        this.timeLoad = false;
      });
    }
    
  }

  //Controle de l'icone eye
  onChangeTPConf(){
    if(this.TPConf === 'password'){
      this.TPConf = 'text';
    }else{
      this.TPConf = 'password';
    }   
  }
  onChangeTPMdp(){
    if(this.TPMdp === 'password'){
      this.TPMdp = 'text';
    }else{
      this.TPMdp = 'password';
    }   
  }
}
