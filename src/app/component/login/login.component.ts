import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email:string;
  mdp:string;
  error:string="";
  timeLoad:boolean = false;
  TPMdp:string = 'password';
feno:boolean=true;
  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit() {}

  onLogIn(){
    this.timeLoad = true;
    this.auth.signIn(this.email,this.mdp).then(res=>{
      console.log(res);
      this.timeLoad = false;
      this.mdp="";
      this.error="";
      this.email="";
      this.router.navigate(['tabs']);
    }).catch(err=>{
      this.error=err;
      this.timeLoad = false;
    });
   
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
