import { TestBed } from '@angular/core/testing';

import { MssageService } from './mssage.service';

describe('MssageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MssageService = TestBed.get(MssageService);
    expect(service).toBeTruthy();
  });
});
