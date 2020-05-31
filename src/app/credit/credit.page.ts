import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.page.html',
  styleUrls: ['./credit.page.scss'],
})
export class CreditPage implements OnInit {
  date:Date = new Date();
  montant:Number = 0.0; 

  constructor() { }

  ngOnInit() {
  }

  onCredit(){
    console.log("ca marche");
  }
}
