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
  constructor(private api:ApiService) { }

  ngOnInit() {
  }
  
  logForm(form:NgForm){
    console.log(form.value);
    this.api.addDepenseToDay();
  }

}
