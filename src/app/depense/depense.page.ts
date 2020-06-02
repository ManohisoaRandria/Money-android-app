import { ApiService } from './../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.page.html',
  styleUrls: ['./depense.page.scss'],
})
export class DepensePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  items=[];
  listItemLength: number;
  listItem: any;
  nbElementPage = 5; //ovaina 10 element n page iray

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.listItemLength = 0;
    console.log(this.listItemLength);
    this.listItem = document.getElementById('listItem');
    this.api.alldepenseSubject.subscribe(data=>{
      this.items=data;
      if(this.items.length<5){
        this.appendItems(5);
      }
      if(this.listItemLength!=0 && this.infiniteScroll!=undefined)this.infiniteScroll.disabled=false;
    })
    this.api.getAllDepense().then(res=>{
      this.appendItems(5);
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })

  }

  async loadData(event) {
      if (this.listItemLength < this.items.length) {
        console.log('Loading data...');
        await this.wait(500);
        event.target.complete();
        this.appendItems(5);
        console.log('Done');
      } else {
        console.log('No More Data');
        this.infiniteScroll.disabled = true;
      }
  }

  viewMotif(item: any) {
    if(!item.motifVisible) {
      item.motifVisible = true;
    } else {
      item.motifVisible = false;
    }
  }

  wait(time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }
   dateHeureDuJourMalagasy(daty:string){
    let andro=new Map();
    let volana=new Map();
    andro.set(1,'Alatsinainy');
    andro.set(2,'Talata');
    andro.set(3,'Alarobia');
    andro.set(4,'Alakamisy');
    andro.set(5,'Zoma');
    andro.set(6,'Asabotsy');
    andro.set(7,'Alahady');

    volana.set(0,'Janoary');
    volana.set(1,'Febroary');
    volana.set(2,'Martsa');
    volana.set(3,'Aprily');
    volana.set(4,'May');
    volana.set(5,'Jona');
    volana.set(6,'Jolay');
    volana.set(7,'Aogositra');
    volana.set(8,'Septambra');
    volana.set(9,'Oktobra');
    volana.set(10,'Novambra');
    volana.set(11,'Desambra');

    let now=new Date(daty);
    return andro.get(now.getDay())+" "+now.getDate()+" "+volana.get(now.getMonth())+" "+now.getFullYear();
}
  appendItems(number) {
    if((this.items.length - this.listItemLength) < this.nbElementPage) { // reste element < nbeltPage
      number = this.items.length - this.listItemLength;
    }
    const originalLength = this.listItemLength;
    for (var i = 0; i < number; i++) {
     
      const element = document.createElement('ion-item');
      element.innerHTML = `
        <ion-card>
          <ion-card-subtitle>
            ${this.dateHeureDuJourMalagasy(this.items[i + originalLength].date)}
          </ion-card-subtitle>
          <ion-card-content *ngIf="!items[${i + originalLength}].motifVisible">
            <ion-label>
              Montant: ${this.items[i + originalLength].montant}
            </ion-label>
            <ion-label>
              Motif: ${this.items[i + originalLength].motif}
            </ion-label>
          </ion-card-content>
        </ion-card>
      `;
      this.listItem.appendChild(element);
      this.listItemLength++;
    }
  }
}
