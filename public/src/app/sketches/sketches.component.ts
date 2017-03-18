import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Special, Sketches } from '../videos';

@Component({
  selector: 'app-sketches',
  templateUrl: './sketches.component.html',
  styleUrls: ['./sketches.component.css']
})
export class SketchesComponent implements OnInit {

  special: any = Special;
  videos: any = Sketches;
  constructor(private titleService: Title) { }

  ngOnInit() {
      this.titleService.setTitle( `TRADOO | SKETCHES`);
  }

}
