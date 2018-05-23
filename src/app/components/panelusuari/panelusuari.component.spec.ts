import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelusuariComponent } from './panelusuari.component';

describe('PanelusuariComponent', () => {
  let component: PanelusuariComponent;
  let fixture: ComponentFixture<PanelusuariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelusuariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelusuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
