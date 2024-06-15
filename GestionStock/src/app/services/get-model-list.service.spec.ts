import { TestBed } from '@angular/core/testing';

import { GetModelListService } from './get-model-list.service';

describe('GetModelListService', () => {
  let service: GetModelListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetModelListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
