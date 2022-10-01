import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThouHaveYetToBecomeMeComponent } from './thou-have-yet-to-become-me.component';

describe('ThouHaveYetToBecomeMeComponent', () => {
  let component: ThouHaveYetToBecomeMeComponent;
  let fixture: ComponentFixture<ThouHaveYetToBecomeMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThouHaveYetToBecomeMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThouHaveYetToBecomeMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
