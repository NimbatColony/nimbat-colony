import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaughtUpInYourWheelingDealingComponent } from './caught-up-in-your-wheeling-dealing.component';

describe('CaughtUpInYourWheelingDealingComponent', () => {
  let component: CaughtUpInYourWheelingDealingComponent;
  let fixture: ComponentFixture<CaughtUpInYourWheelingDealingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaughtUpInYourWheelingDealingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaughtUpInYourWheelingDealingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
