import { AuthService } from 'src/app/services/auth.service';
import { Component, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nom:string;
  solde:number=232;
  constructor(public alertControlle:AlertController,private auth:AuthService,private router:Router) {
    this.auth.obs.subscribe(res=>{
      this.nom=res;
    });
   
  }


}
