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

  timeLoad:boolean = false;
  TPMdp:string = 'password';

  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit() {}

  onLogIn(){
    this.timeLoad = true;
    this.auth.signIn(this.email,this.mdp).then(res=>{
      console.log(this.email,this.mdp);
      this.timeLoad = false;
      console.log(res);
    }).catch(err=>{
      console.log(err);
    });
    // setTimeout(
    //   ()=>{
    //     this.timeLoad = false;
    //     this.router.navigate(['/tabs/home']);
    //   },4000
    // );
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
