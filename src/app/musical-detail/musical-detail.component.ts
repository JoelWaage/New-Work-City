import { Component, OnInit, Input } from '@angular/core';
import { Musical } from '../musical';

@Component({
  selector: 'app-musical-detail',
  templateUrl: './musical-detail.component.html',
  styleUrls: ['./musical-detail.component.css']
})
export class MusicalDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() musical: Musical

}
