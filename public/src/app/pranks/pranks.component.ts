import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Special, Pranks } from '../videos';

@Component({
  selector: 'app-pranks',
  templateUrl: './pranks.component.html',
  styleUrls: ['./pranks.component.css']
})
export class PranksComponent implements OnInit {

  special: any = Special;
  videos: any = Pranks;

  constructor(private titleService: Title) { }

  ngOnInit() {
      this.titleService.setTitle( `TRADOO | PRANKS`);
  }

}
