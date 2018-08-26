import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowErrorsComponent } from './show-errors.component';
import {FormsModule} from "@angular/forms";
import {ErrorMessagesService} from "../../services/error-messages.service";

describe('ShowErrorsComponent', () => {
  let component: ShowErrorsComponent;
  let fixture: ComponentFixture<ShowErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:      [ FormsModule ],
      declarations: [ ShowErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should be created', () => {
    expect(component).toBeTruthy();
  });*/
});
