import { Component, OnInit } from '@angular/core';
import { Musical } from '../musical';
import { MUSICALS } from '../mock-musicals';
import { MusicalService } from '../musical.service';

@Component({
  selector: 'app-musicals',
  templateUrl: './musicals.component.html',
  styleUrls: ['./musicals.component.css']
})
export class MusicalsComponent implements OnInit {

  musicals: Musical[];

  constructor(private musicalService: MusicalService) { }

  getMusicals(): void {
    this.musicalService.getMusicals()
      .subscribe(musicals => this.musicals = musicals);
  }

  ngOnInit() {
    this.getMusicals();
  }

  selectedMusical: Musical;

  onSelect(musical: Musical): void {
    this.selectedMusical = musical;
  }

}
