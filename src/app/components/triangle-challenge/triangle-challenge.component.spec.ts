import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleChallengeComponent } from './triangle-challenge.component';
import {TriangleService} from '../../services/triangle.service';
import {ReactiveFormsModule} from '@angular/forms';
import { NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from "@angular/platform-browser";

describe('TriangleChallengeComponent', () => {
  let component: TriangleChallengeComponent;
  let fixture: ComponentFixture<TriangleChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [ReactiveFormsModule ],
      declarations: [ TriangleChallengeComponent ],
      providers: [TriangleService],
      schemas: [NO_ERRORS_SCHEMA]

    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(TriangleChallengeComponent);
      component    = fixture.componentInstance;
    });
  }));

  it('Triangle component should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Form should be invalid if form values are invalid', () => {
    expect(component.triangleForm.controls.sideA.valid).toBe(false);
    expect(component.triangleForm.controls.sideB.valid).toBe(false);
    expect(component.triangleForm.controls.sideC.valid).toBe(false);

    expect(component.triangleForm.valid).toBe(false);

  });

  it('On Submit, user should be notified of type of triangle', () => {

    component.triangleForm.controls.sideA.setValue(2);
    component.triangleForm.controls.sideB.setValue(2);
    component.triangleForm.controls.sideC.setValue(2);
    component.onSubmit();
    expect(component.triangleType).toBe('Equilateral Triangle');

    component.triangleForm.controls.sideB.setValue(3);
    component.onSubmit();
    expect(component.triangleType).toBe('Isoceles Triangle');

    component.triangleForm.controls.sideC.setValue(4);
    component.onSubmit();
    expect(component.triangleType).toBe('Scalene Triangle');

    component.triangleForm.controls.sideC.setValue(0);
    component.onSubmit();
    expect(component.triangleType).toBe('Invalid Triangle');

  });
});


