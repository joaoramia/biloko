import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Special, Standups, Sketches, Pranks } from '../videos';

declare let jQuery:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  screenWidth: number;

  special: any = Special;
  standups: any = Standups;
  sketches: any = Sketches;
  pranks: any = Pranks;
  numbers: any = [];

  slideIndex: number = 1;

  constructor(private route: ActivatedRoute, private router: Router, private titleService: Title) {  }

  ngOnInit() {
      this.titleService.setTitle( `TRADOO`);
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          this.numbers = [0, 1, 2];
      }
      else {
          this.numbers = [0, 1, 2, 3, 4, 5];
      }
  }

  goTo(url: string):void {
      this.router.navigate([url]);
  }

}
