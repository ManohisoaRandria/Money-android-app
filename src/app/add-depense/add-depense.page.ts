import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-depense',
  templateUrl: './add-depense.page.html',
  styleUrls: ['./add-depense.page.scss'],
})
export class AddDepensePage implements OnInit {
  daty=new Date();
  timeload:boolean=false;
  error:string="";
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit() {
  }
  
  logForm(form:NgForm){
    
    console.log( form.value.date.substring(0,10).replace(/-/g, "/"));
    let date= form.value.date.substring(0,10).replace(/-/g, "/");
    this.timeload=true;
    this.api.addDepenseToDay(date,form.value.motif,form.value.montant).then(res=>{
      this.timeload=false;
      form.resetForm();
      this.error="";
      this.router.navigate(['/tabs/home']);
      console.log(res);
    }).catch(err=>{
      this.timeload=false;
      this.error=err;
      console.log(err);
    })
    //this.api.addDepenseToDay();
  }

}
