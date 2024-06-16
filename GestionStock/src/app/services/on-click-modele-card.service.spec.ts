import { TestBed } from '@angular/core/testing';

import { OnClickModeleCardService } from './on-click-modele-card.service';

describe('OnClickModeleCardService', () => {
  let service: OnClickModeleCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnClickModeleCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
