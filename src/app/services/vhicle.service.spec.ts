import { TestBed } from '@angular/core/testing';

import { VhicleService } from './vhicle.service';

describe('VhicleService', () => {
  let service: VhicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VhicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
