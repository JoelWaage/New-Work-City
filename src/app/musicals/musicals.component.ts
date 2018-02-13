import { Component, OnInit } from '@angular/core';

import { Musical } from '../musical';
import { MusicalService } from '../musical.service';

@Component({
  selector: 'app-musicals',
  templateUrl: './musicals.component.html',
  styleUrls: ['./musicals.component.css']
})
export class MusicalsComponent implements OnInit {
  musicals: Musical[];

  constructor(private musicalService: MusicalService) { }

  ngOnInit() {
    this.getMusicals();
  }

  getMusicals(): void {
    this.musicalService.getMusicals()
    .subscribe(musicals => this.musicals = musicals);
  }

}
