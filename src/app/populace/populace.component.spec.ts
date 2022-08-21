import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulaceComponent } from './populace.component';

describe('PopulaceComponent', () => {
  let component: PopulaceComponent;
  let fixture: ComponentFixture<PopulaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
