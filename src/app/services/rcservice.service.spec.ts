import { TestBed } from '@angular/core/testing';

import { RcserviceService } from './rcservice.service';

describe('RcserviceService', () => {
  let service: RcserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RcserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
