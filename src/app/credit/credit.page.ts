import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-credit',
  templateUrl: './credit.page.html',
  styleUrls: ['./credit.page.scss'],
})
export class CreditPage implements OnInit {
  date:string ="";
  date2=new Date();
  montant:Number = 0.0; 
  error:string = "";
  timeLoad:boolean = false;

  constructor(private apiService:ApiService,private router:Router) { }

  ngOnInit() {
  }

  onCredit(){
    if(this.montant > 0&&this.date != null && this.date!=""){
      this.error="";
      this.apiService.onAddSold(this.montant,this.date.substring(0,10).replace(/-/g, "/")).then(res=>{
        this.timeLoad = true;
        console.log(res);
        this.date="";
        this.montant=0.0;
        this.error = "";
        this.timeLoad = false;
        this.router.navigate(['/tabs/home']);
      }).catch(err=>{
        this.error=err;
      });
    }else{
      this.error="montant 0";
    }
  }
}
