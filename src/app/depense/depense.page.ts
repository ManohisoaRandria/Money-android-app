import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.page.html',
  styleUrls: ['./depense.page.scss'],
})
export class DepensePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  items: any;
  listItemLength: number;
  listItem: any;
  nbElementPage = 5; //ovaina 10 element n page iray

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        montant: 1000,
        date: new Date('2020-6-04'),
        motif: 'cigarette',
        motifVisible: false
      },
      {
        montant: 2500,
        date: new Date('2020-6-04'),
        motif: 'gouter',
        motifVisible: false
      },
      {
        montant: 500,
        date: new Date('2020-6-04'),
        motif: 'frais',
        motifVisible: false
      },
      {
        montant: 1000,
        date: new Date('2020-6-03'),
        motif: 'cigarette',
        motifVisible: false
      },
      {
        montant: 2500,
        date: new Date('2020-6-03'),
        motif: 'gouter',
        motifVisible: false
      },
      {
        montant: 500,
        date: new Date('2020-6-03'),
        motif: 'frais',
        motifVisible: false
      },
      {
        montant: 1000,
        date: new Date('2020-6-2'),
        motif: 'cigarette',
        motifVisible: false
      },
      {
        montant: 2500,
        date: new Date('2020-6-02'),
        motif: 'gouter',
        motifVisible: false
      },
      {
        montant: 500,
        date: new Date('2020-6-02'),
        motif: 'frais',
        motifVisible: false
      },
      {
        montant: 1000,
        date: new Date('2020-6-01'),
        motif: 'cigarette',
        motifVisible: false
      },
      {
        montant: 2500,
        date: new Date('2020-6-01'),
        motif: 'gouter',
        motifVisible: false
      },
      {
        montant: 500,
        date: new Date('2020-6-01'),
        motif: 'frais',
        motifVisible: false
      },
      {
        montant: 1000,
        date: new Date('2020-5-31'),
        motif: 'cigarette',
        motifVisible: false
      },
      {
        montant: 2500,
        date: new Date('2020-5-31'),
        motif: 'gouter',
        motifVisible: false
      },
      {
        montant: 500,
        date: new Date('2020-5-31'),
        motif: 'frais',
        motifVisible: false
      },
      {
        montant: 1000,
        date: new Date('2020-5-30'),
        motif: 'cigarette',
        motifVisible: false
      },
      {
        montant: 2500,
        date: new Date('2020-5-30'),
        motif: 'gouter',
        motifVisible: false
      },
      {
        montant: 500,
        date: new Date('2020-5-30'),
        motif: 'frais',
        motifVisible: false
      }
    ];
    this.listItemLength = 0;
    console.log(this.listItemLength);
    this.listItem = document.getElementById('listItem');
    this.appendItems(5);
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
            <ion-datetime value="${this.items[i + originalLength].date}" display-format="DD-MM-YYYY , h:mm A" picker-format="h:mm A" display-timezone="utc"></ion-datetime>
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
