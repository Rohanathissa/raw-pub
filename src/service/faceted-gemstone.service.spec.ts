import { TestBed } from '@angular/core/testing';

import { FacetedGemstoneService } from './faceted-gemstone.service';

describe('FacetedGemstoneService', () => {
  let service: FacetedGemstoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacetedGemstoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
