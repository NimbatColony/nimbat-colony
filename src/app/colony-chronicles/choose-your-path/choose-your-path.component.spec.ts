import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseYourPathComponent } from './choose-your-path.component';

describe('ChooseYourPathComponent', () => {
  let component: ChooseYourPathComponent;
  let fixture: ComponentFixture<ChooseYourPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseYourPathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseYourPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
