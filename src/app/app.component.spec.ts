import {TestBed, async, ComponentFixture} from '@angular/core/testing';

import { AppComponent } from './app.component';
import {Component} from '@angular/core';

@Component({selector: 'app-triangle-challenge', template: ''})
class TriangleChallengeStubComponent {}

let comp:    AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TriangleChallengeStubComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp    = fixture.componentInstance;
    });
  }));

  tests();
});

function tests() {
  it('can instantiate the component', () => {
    expect(comp).not.toBeNull();
  });
}
