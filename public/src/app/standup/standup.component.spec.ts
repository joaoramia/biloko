/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StandupComponent } from './standup.component';

describe('StandupComponent', () => {
  let component: StandupComponent;
  let fixture: ComponentFixture<StandupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
