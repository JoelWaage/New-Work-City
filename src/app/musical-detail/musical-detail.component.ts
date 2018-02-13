import { Component, OnInit, Input } from '@angular/core';
import { Musical } from '../musical';
import { ActivatedRoute }from '@angular/router';
import { Location } from '@angular/common';

import { MusicalService } from '../musical.service';

@Component({
  selector: 'app-musical-detail',
  templateUrl: './musical-detail.component.html',
  styleUrls: ['./musical-detail.component.css']
})
export class MusicalDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private musicalService: MusicalService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMusical();
  }

  getMusical(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.musicalService.getMusical(id)
      .subscribe(musical => this.musical = musical);
  }

  goBack(): void {
    this.location.back();
  }

  @Input() musical: Musical

}
