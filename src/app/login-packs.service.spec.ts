import { TestBed } from '@angular/core/testing';

import { LoginPacksService } from './login-packs.service';

describe('LoginPacksService', () => {
  let service: LoginPacksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginPacksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
