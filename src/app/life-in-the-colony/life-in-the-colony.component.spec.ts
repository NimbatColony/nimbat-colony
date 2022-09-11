import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeInTheColonyComponent } from './life-in-the-colony.component';

describe('LifeInTheColonyComponent', () => {
  let component: LifeInTheColonyComponent;
  let fixture: ComponentFixture<LifeInTheColonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeInTheColonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeInTheColonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
