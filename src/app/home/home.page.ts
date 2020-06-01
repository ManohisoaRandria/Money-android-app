import { AuthService } from 'src/app/services/auth.service';
import { Component, Input ,OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService  } from '../services/api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nom:string;
  solde:number=232;
  error:string="";

  constructor(public alertControlle:AlertController,private auth:AuthService,private router:Router,private apiService:ApiService) {
    this.auth.obs.subscribe(res=>{
      this.nom=res;
    });
  }

  ngOnInit() {
    this.apiService.soldeSubject.subscribe(data=>{
      this.solde = data;
    }
    );
    this.apiService.getMySolde().then((res:number)=>{
      console.log("solde OK");
    }).catch(err=>{
      this.error=err;
    });
  }

}
