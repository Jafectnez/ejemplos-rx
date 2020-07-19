import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo7Component } from './ejemplo7.component';

describe('Ejemplo7Component', () => {
  let component: Ejemplo7Component;
  let fixture: ComponentFixture<Ejemplo7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
