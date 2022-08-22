import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriousBattesComponent } from './curious-battes.component';

describe('CuriousBattesComponent', () => {
  let component: CuriousBattesComponent;
  let fixture: ComponentFixture<CuriousBattesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriousBattesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuriousBattesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
