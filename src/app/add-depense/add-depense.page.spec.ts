import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDepensePage } from './add-depense.page';

describe('AddDepensePage', () => {
  let component: AddDepensePage;
  let fixture: ComponentFixture<AddDepensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDepensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDepensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
