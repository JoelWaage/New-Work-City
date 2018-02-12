import { Component, OnInit } from '@angular/core';
import { Musical } from '../musical';
import { MUSICALS } from '../mock-musicals';

@Component({
  selector: 'app-musicals',
  templateUrl: './musicals.component.html',
  styleUrls: ['./musicals.component.css']
})
export class MusicalsComponent implements OnInit {

  musicals = MUSICALS

  constructor() { }

  ngOnInit() {
  }

}
