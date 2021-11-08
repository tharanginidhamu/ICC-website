import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prodct3Component } from './prodct3.component';

describe('Prodct3Component', () => {
  let component: Prodct3Component;
  let fixture: ComponentFixture<Prodct3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prodct3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prodct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
