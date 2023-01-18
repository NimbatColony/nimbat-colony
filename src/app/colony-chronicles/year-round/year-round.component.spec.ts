import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearRoundComponent } from './year-round.component';

describe('YearRoundComponent', () => {
  let component: YearRoundComponent;
  let fixture: ComponentFixture<YearRoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearRoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
