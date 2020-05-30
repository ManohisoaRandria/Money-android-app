import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepensePage } from './depense.page';

describe('DepensePage', () => {
  let component: DepensePage;
  let fixture: ComponentFixture<DepensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
