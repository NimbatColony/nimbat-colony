import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageGuidelinesComponent } from './usage-guidelines.component';

describe('UsageGuidelinesComponent', () => {
  let component: UsageGuidelinesComponent;
  let fixture: ComponentFixture<UsageGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageGuidelinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsageGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
