import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonyCultureComponent } from './colony-culture.component';

describe('ColonyCultureComponent', () => {
  let component: ColonyCultureComponent;
  let fixture: ComponentFixture<ColonyCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColonyCultureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColonyCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
