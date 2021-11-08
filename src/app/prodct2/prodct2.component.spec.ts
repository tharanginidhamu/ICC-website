import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prodct2Component } from './prodct2.component';

describe('Prodct2Component', () => {
  let component: Prodct2Component;
  let fixture: ComponentFixture<Prodct2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prodct2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prodct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
