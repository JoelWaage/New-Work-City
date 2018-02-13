import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Musical } from './musical';
import { MUSICALS } from './mock-musicals';
import { MessageService } from './message.service';

@Injectable()
export class MusicalService {

  constructor(private messageService: MessageService) { }

  getMusicals(): Observable<Musical[]> {
    //Todo: send the message _after_ fetching the musicals
    this.messageService.add('MusicalService: fetched musicals');
    return of(MUSICALS);
  }

  getMusical(id: number): Observable<Musical> {
    //Todo: send the message _after_ fetching the musical
    this.messageService.add(`MusicalService: fetched musical id=${id}`);
    return of(MUSICALS.find(musical => musical.id === id));
  }
}
