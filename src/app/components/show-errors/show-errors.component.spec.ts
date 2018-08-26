import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowErrorsComponent } from './show-errors.component';
import {ErrorMessagesService} from "../../services/error-messages.service";

let component: ShowErrorsComponent;
let fixture: ComponentFixture<ShowErrorsComponent>;
describe('ShowErrorsComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowErrorsComponent ],
      providers: [ErrorMessagesService]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ShowErrorsComponent);
      component    = fixture.componentInstance;
    });
  }));

  tests();
});

function tests() {
  it('can instantiate the component', () => {
    expect(component).not.toBeNull();
  });

  it('Get Error Messages for injected fieldname triangleForm.sideA', () => {
    component.fieldName = 'triangleForm.sideA';
    component.ngOnInit();
    expect(component.errorMessages.length >= 1).toBe(true);
  });

  it('Get Empty Error Messages when field name is not valid', () => {
    component.fieldName = 'triangleForm.abcd';
    component.ngOnInit();
    expect(component.errorMessages.length === 0).toBe(true);
  });
}
