import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleChallengeComponent } from './triangle-challenge.component';

describe('TriangleChallengeComponent', () => {
  let component: TriangleChallengeComponent;
  let fixture: ComponentFixture<TriangleChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriangleChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangleChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /* it('should be created', () => {
    expect(component).toBeTruthy();
  });*/
});
