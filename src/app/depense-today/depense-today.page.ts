import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depense-today',
  templateUrl: './depense-today.page.html',
  styleUrls: ['./depense-today.page.scss'],
})
export class DepenseTodayPage implements OnInit {
  items = [];
  
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.todayDepenseSubject.subscribe(data=>{
      this.items=data;
    })
    this.api.getDepsenseToDay().then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }

  viewMotif(item: any) {
    if(!item.motifVisible) {
      item.motifVisible = true;
    } else {
      item.motifVisible = false;
    }
  }

}
