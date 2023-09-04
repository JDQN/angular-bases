import { TestBed } from '@angular/core/testing';

import { CountriesServiceTsService } from './countries.service.ts.service';

describe('CountriesServiceTsService', () => {
  let service: CountriesServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
