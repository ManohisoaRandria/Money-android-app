import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-depense',
  templateUrl: './add-depense.page.html',
  styleUrls: ['./add-depense.page.scss'],
})
export class AddDepensePage implements OnInit {
  daty=new Date();
  timeload:boolean=false;
  constructor(private api:ApiService) { }

  ngOnInit() {
  }
  
  logForm(form:NgForm){
    console.log( form.value.date.substring(0,10).replace(/-/g, "/"));
    let date= form.value.date.substring(0,10).replace(/-/g, "/");
    this.timeload=true;
    this.api.addDepenseToDay(date,form.value.motif,form.value.montant).then(res=>{
      this.timeload=false;
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
    //this.api.addDepenseToDay();
  }

}
