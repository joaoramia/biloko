import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Special, Standups, Sketches, Pranks } from '../videos';
import { VideoEditorService } from '../video-editor.service';

declare let jQuery:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VideoEditorService]
})
export class HomeComponent implements OnInit {

  screenWidth: number;

  special: any = {};
  standups: any = [];
  sketches: any = [];
  pranks: any = [];
  numbers: any = [];

  slideIndex: number = 1;

  constructor(private route: ActivatedRoute, private router: Router, private titleService: Title, private videoEditorService: VideoEditorService) {  }

  ngOnInit() {
      this.titleService.setTitle( `TRADOO`);
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          this.numbers = [0, 1, 2];
      }
      else {
          this.numbers = [0, 1, 2, 3, 4, 5];
      }

      // cache system
      if(Sketches.length){
          this.sketches = Sketches;
      }
      else {
          this.videoEditorService.getByType('Sketches')
          .subscribe(videos => {
              this.sketches = videos;
              videos.forEach(video => Sketches.push(video));
          });
      }

      // cache system
      if(Pranks.length){
          this.pranks = Pranks;
      }
      else {
          this.videoEditorService.getByType('Pranks')
          .subscribe(videos => {
              this.pranks = videos;
              videos.forEach(video => Pranks.push(video));
          });
      }

      // cache system
      if(Standups.length){
          this.standups = Standups;
      }
      else {
          this.videoEditorService.getByType('Standups')
          .subscribe(videos => {
              this.standups = videos;
              videos.forEach(video => Standups.push(video));
          });
      }

      // cache system
      if (Object.keys(Special).length){
          this.special = Special;
      }
      else {
          this.videoEditorService.getByType('Special')
          .subscribe(videos => {
              if (videos.length) {
                  this.special = videos[0];
                  for (let key in videos[0]){
                    Special[key] = videos[0][key];
                  }
              }
          });
      }
  }

  goTo(url: string):void {
      this.router.navigate([url]);
  }

}
