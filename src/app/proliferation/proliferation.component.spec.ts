import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProliferationComponent } from './proliferation.component';

describe('ProliferationComponent', () => {
  let component: ProliferationComponent;
  let fixture: ComponentFixture<ProliferationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProliferationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProliferationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
