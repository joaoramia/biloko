/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SketchesComponent } from './sketches.component';

describe('SketchesComponent', () => {
  let component: SketchesComponent;
  let fixture: ComponentFixture<SketchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
