import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depense-today',
  templateUrl: './depense-today.page.html',
  styleUrls: ['./depense-today.page.scss'],
})
export class DepenseTodayPage implements OnInit {
  items = [
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
  ]
  constructor() { }

  ngOnInit() {

  }

  viewMotif(item: any) {
    if(!item.motifVisible) {
      item.motifVisible = true;
    } else {
      item.motifVisible = false;
    }
  }

}
