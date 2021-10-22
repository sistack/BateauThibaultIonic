import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Vue51CoquillagesPage } from './vue51-coquillages.page';

describe('Vue51CoquillagesPage', () => {
  let component: Vue51CoquillagesPage;
  let fixture: ComponentFixture<Vue51CoquillagesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Vue51CoquillagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Vue51CoquillagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
