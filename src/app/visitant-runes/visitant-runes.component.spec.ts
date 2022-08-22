import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitantRunesComponent } from './visitant-runes.component';

describe('VisitantRunesComponent', () => {
  let component: VisitantRunesComponent;
  let fixture: ComponentFixture<VisitantRunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitantRunesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitantRunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
