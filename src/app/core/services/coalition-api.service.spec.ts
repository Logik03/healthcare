import { TestBed } from '@angular/core/testing';

import { CoalitionApiService } from './coalition-api.service';

describe('CoalitionApiService', () => {
  let service: CoalitionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoalitionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
