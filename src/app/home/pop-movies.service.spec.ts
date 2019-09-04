import { TestBed } from '@angular/core/testing';

import { PopMoviesService } from './pop-movies.service';

describe('PopMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopMoviesService = TestBed.get(PopMoviesService);
    expect(service).toBeTruthy();
  });
});
