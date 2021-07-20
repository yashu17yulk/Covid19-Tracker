import { TestBed } from '@angular/core/testing';

import { InqService } from './inq.service';

describe('InqService', () => {
  let service: InqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
