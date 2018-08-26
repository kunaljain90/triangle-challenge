import { TestBed, inject } from '@angular/core/testing';

import { ErrorMessagesService } from './error-messages.service';

describe('ErrorMessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorMessagesService]
    });
  });

  it('should be created', inject([ErrorMessagesService], (service: ErrorMessagesService) => {
    expect(service).toBeTruthy();
  }));

  it('should have error messages property and triangleForm property', inject([ErrorMessagesService], (service: ErrorMessagesService) => {
    expect(service.errorMessages.triangleForm).toBeTruthy();
  }));
});
