import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depense-today',
  templateUrl: './depense-today.page.html',
  styleUrls: ['./depense-today.page.scss'],
})
export class DepenseTodayPage implements OnInit {
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
  }

}
