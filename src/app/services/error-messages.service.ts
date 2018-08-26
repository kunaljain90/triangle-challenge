import { Injectable } from '@angular/core';

@Injectable()
export class ErrorMessagesService {

  errorMessages =
    {
      'triangleForm': {
        'sideA': [
          { type: 'required', message: 'Please enter length for Side A' }
        ],
        'sideB': [
          { type: 'required', message: 'Please enter length for Side B' }
        ],
        'sideC': [
          { type: 'required', message: 'Please enter length for Side C' }
        ]
      }
    };

}
