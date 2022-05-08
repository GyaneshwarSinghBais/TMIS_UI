import { TestBed } from '@angular/core/testing';

import { RoleWHGuard } from './role-wh.guard';

describe('RoleWHGuard', () => {
  let guard: RoleWHGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleWHGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
