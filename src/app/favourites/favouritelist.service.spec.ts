import { TestBed } from '@angular/core/testing';

import { FavouritelistService } from './favouritelist.service';

describe('FavouritelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavouritelistService = TestBed.get(FavouritelistService);
    expect(service).toBeTruthy();
  });
});
