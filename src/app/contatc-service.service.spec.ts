import { TestBed } from '@angular/core/testing';

import { ContatcServiceService } from './contatc-service.service';

describe('ContatcServiceService', () => {
  let service: ContatcServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatcServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
