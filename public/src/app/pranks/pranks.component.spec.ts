/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PranksComponent } from './pranks.component';

describe('PranksComponent', () => {
  let component: PranksComponent;
  let fixture: ComponentFixture<PranksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PranksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PranksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
