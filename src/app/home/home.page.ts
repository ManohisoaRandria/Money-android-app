import { Component, Input } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tabsPage = TabsPage;
  
  constructor(public alertControlle:AlertController) {}

  async onLogOut(){
    const alert = await this.alertControlle.create({
      header: 'Are you sure?',
      buttons: ['Yes','No']
    });

    await alert.present();
  }
}
