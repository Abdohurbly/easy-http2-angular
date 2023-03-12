import { TestBed } from '@angular/core/testing';

import { EasyHttpService } from './easy-http.service';

describe('EasyHttpService', () => {
  let service: EasyHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
