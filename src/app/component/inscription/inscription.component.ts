import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

import { Router } from '@angular/router';

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

  timeLoad:boolean = false;
  TPConf:string = 'password';
  TPMdp:string = 'password';

  constructor(private router:Router) {}

  ngOnInit() {}

  onInscription(){
    this.timeLoad = true;
    setTimeout(
      ()=>{
        this.timeLoad=false;
        this.router.navigate(['/tabs/home']);
      },4000
    );
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
