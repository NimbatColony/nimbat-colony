import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonyChroniclesComponent } from './colony-chronicles.component';

describe('ColonyChroniclesComponent', () => {
  let component: ColonyChroniclesComponent;
  let fixture: ComponentFixture<ColonyChroniclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColonyChroniclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColonyChroniclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
