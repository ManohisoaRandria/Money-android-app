import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Location } from "@angular/common";
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  url:string;
  constructor(private router:Router,private api:ApiService,private location: Location,public alertControlle:AlertController) { }

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (this.location.path() != "") {
        this.url = this.location.path().split('/')[2];
      } 
    });
   
  }

  addDep(){
    this.router.navigateByUrl('/tabs/add-depense');
  }

  //deco
  async onLogOut(){
    const alert = await this.alertControlle.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Yes',
          handler: () => {
            this.router.navigate(['auth']);
            console.log('ok');
          }
        }
    ]
    });

    await alert.present();
  }

}
