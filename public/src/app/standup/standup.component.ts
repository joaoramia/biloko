import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Special, Standups } from '../videos';

@Component({
  selector: 'app-standup',
  templateUrl: './standup.component.html',
  styleUrls: ['./standup.component.css']
})
export class StandupComponent implements OnInit {

  special: any = Special;
  videos: any = Standups;
  constructor(private titleService: Title) { }

  ngOnInit() {
      this.titleService.setTitle( `TRADOO | STAND UP`);
  }

}
