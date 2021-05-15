import { TestBed } from '@angular/core/testing';

import { CentreVaccService } from './centre-vacc.service';

describe('CentreVaccService', () => {
  let service: CentreVaccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentreVaccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
