import { Injectable } from '@angular/core';
import { Musical } from './musical';
import { MUSICALS } from './mock-musicals'

@Injectable()
export class MusicalService {

  constructor() { }

  getMusicals(): Musical[] {
    return MUSICALS;
  }
}
