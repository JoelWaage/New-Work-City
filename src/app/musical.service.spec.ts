import { TestBed, inject } from '@angular/core/testing';

import { MusicalService } from './musical.service';

describe('MusicalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicalService]
    });
  });

  it('should be created', inject([MusicalService], (service: MusicalService) => {
    expect(service).toBeTruthy();
  }));
});
