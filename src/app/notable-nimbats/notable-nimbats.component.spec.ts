import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotableNimbatsComponent } from './notable-nimbats.component';

describe('NotableNimbatsComponent', () => {
  let component: NotableNimbatsComponent;
  let fixture: ComponentFixture<NotableNimbatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotableNimbatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotableNimbatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
