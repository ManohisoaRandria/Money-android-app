import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email:string;
  mdp:string;

  timeLoad:boolean = false;
  TPMdp:string = 'password';

  constructor(private router:Router) { }

  ngOnInit() {}

  onLogin(){
    this.timeLoad = true;
    setTimeout(
      ()=>{
        this.timeLoad = false;
        this.router.navigate(['/tabs/home']);
      },4000
    );
  }

   //Controle de l'icone eye
  onChangeTPMdp(){
    if(this.TPMdp === 'password'){
      this.TPMdp = 'text';
    }else{
      this.TPMdp = 'password';
    }   
  }
}
