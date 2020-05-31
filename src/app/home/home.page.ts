import { Component, Input } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { AlertController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tabsPage = TabsPage;
  
  constructor(public alertControlle:AlertController,private router:Router) {}

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
