import { Component, OnInit } from '@angular/core';
import { DepenseTodayPage } from '../depense-today/depense-today.page';
import { DepensePage } from '../depense/depense.page';
import { AddDepensePage } from '../add-depense/add-depense.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  depenseTodayPage = DepenseTodayPage;
  depensePage = DepensePage;
  addDepensePage = AddDepensePage;

  constructor() { }

  ngOnInit() {
  }

}
