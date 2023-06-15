import { TestBed } from '@angular/core/testing';

import { HTTPServiceService } from './service.service';

describe('ServiceService', () => {
  let service: HTTPServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HTTPServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
