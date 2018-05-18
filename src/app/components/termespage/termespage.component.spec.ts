import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermespageComponent } from './termespage.component';

describe('TermespageComponent', () => {
  let component: TermespageComponent;
  let fixture: ComponentFixture<TermespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
