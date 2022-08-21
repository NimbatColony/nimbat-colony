import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicalCapabilitiesComponent } from './magical-capabilities.component';

describe('MagicalCapabilitiesComponent', () => {
  let component: MagicalCapabilitiesComponent;
  let fixture: ComponentFixture<MagicalCapabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicalCapabilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicalCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
