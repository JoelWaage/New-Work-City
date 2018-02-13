import { Injectable } from '@angular/core';
import { Musical } from './musical';
import { MUSICALS } from './mock-musicals';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MusicalService {

  constructor() { }

  getMusicals(): Observable<Musical[]> {
    return of(MUSICALS);
  }
}
