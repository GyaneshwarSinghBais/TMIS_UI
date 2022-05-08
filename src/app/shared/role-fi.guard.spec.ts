import { TestBed } from '@angular/core/testing';

import { RoleFIGuard } from './role-fi.guard';

describe('RoleFIGuard', () => {
  let guard: RoleFIGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleFIGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
