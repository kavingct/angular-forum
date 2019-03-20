import { TestBed } from '@angular/core/testing';

import { CategoryDetailService } from './category-detail.service';

describe('CategoryDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryDetailService = TestBed.get(CategoryDetailService);
    expect(service).toBeTruthy();
  });
});
