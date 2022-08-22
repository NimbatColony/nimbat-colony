import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriousBattesOocComponent } from './curious-battes-ooc.component';

describe('CuriousBattesOocComponent', () => {
  let component: CuriousBattesOocComponent;
  let fixture: ComponentFixture<CuriousBattesOocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriousBattesOocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuriousBattesOocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
