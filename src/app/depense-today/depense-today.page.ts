import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depense-today',
  templateUrl: './depense-today.page.html',
  styleUrls: ['./depense-today.page.scss'],
})
export class DepenseTodayPage implements OnInit {
<<<<<<< HEAD
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
=======
  depenses:any[];
  show:boolean=true;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.todayDepenseSubject.subscribe(res=>{
      this.depenses=res;
    });
    this.get();
   // this.api.emit();
  }
  get(){
    this.api.getDepsenseToDay();
    this.show=false;
>>>>>>> 28ffd9e1abe61945f876caf09b2da2faf57ccb96
  }

}
