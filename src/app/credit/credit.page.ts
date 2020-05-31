import { Component, OnInit } from '@angular/core';
import { CreditService } from '../services/credit.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-credit',
  templateUrl: './credit.page.html',
  styleUrls: ['./credit.page.scss'],
})
export class CreditPage implements OnInit {
  date:Date = new Date();
  montant:Number = 0.0; 
  error:string = "";
  timeLoad:boolean = false;

  constructor(private creditService:CreditService,private router:Router) { }

  ngOnInit() {
  }

  onCredit(){
    this.creditService.onAddSold(this.montant,this.date).then(res=>{
      this.timeLoad = true;
      console.log(res);
      this.date=new Date();
      this.montant=0.0;
      this.error = "";
      this.timeLoad = false;
      this.router.navigate(['/tabs/home']);
    }).catch(err=>{
      this.error=err;
    });
  }
}
