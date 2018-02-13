import { Component, OnInit } from '@angular/core';
import { Musical } from '../musical';
import { MusicalService } from '../musical.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  musicals: Musical[] = [];

  constructor(private musicalService: MusicalService) { }

  ngOnInit() {
    this.getMusicals();
  }

  getMusicals(): void {
    this.musicalService.getMusicals()
      .subscribe(musicals => this.musicals =
      musicals.slice(1, 5));
  }
}
