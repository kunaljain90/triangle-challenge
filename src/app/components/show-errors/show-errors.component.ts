import {Component, Input, OnInit} from '@angular/core';
import {ErrorMessagesService} from '../../services/error-messages.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css'],
  providers: [ErrorMessagesService]
})
export class ShowErrorsComponent implements OnInit {

  @Input('control') control: FormControl;
  @Input('fieldName') fieldName: string;

  errorMessages: any  = [];

  static getErrorMessagesForField(path, obj) {

    return path.split('.').reduce(function(prev, curr) {
      return prev ? prev[curr] : null;
    }, obj || self);
  }

  constructor(private errorMessagesService: ErrorMessagesService) {
  }

  ngOnInit() {
    if (this.errorMessagesService.errorMessages !== undefined) {
      const messages = ShowErrorsComponent.getErrorMessagesForField(this.fieldName, this.errorMessagesService.errorMessages);

      if (messages !== undefined) {
        this.errorMessages = messages;
      }
    }
  }
}
