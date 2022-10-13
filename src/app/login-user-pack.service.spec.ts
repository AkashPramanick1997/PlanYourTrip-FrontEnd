import { TestBed } from '@angular/core/testing';

import { LoginUserPackService } from './login-user-pack.service';

describe('LoginUserPackService', () => {
  let service: LoginUserPackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginUserPackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
