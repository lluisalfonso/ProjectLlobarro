import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reset } from './reset.component';

describe('ResetComponent', () => {
  let component: Reset;
  let fixture: ComponentFixture<Reset>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reset ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reset);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
