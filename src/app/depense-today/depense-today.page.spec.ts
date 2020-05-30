import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepenseTodayPage } from './depense-today.page';

describe('DepenseTodayPage', () => {
  let component: DepenseTodayPage;
  let fixture: ComponentFixture<DepenseTodayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepenseTodayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepenseTodayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
