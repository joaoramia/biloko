import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Special, Pranks } from '../videos';
import { VideoEditorService } from '../video-editor.service';

@Component({
  selector: 'app-pranks',
  templateUrl: './pranks.component.html',
  styleUrls: ['./pranks.component.css'],
  providers: [VideoEditorService]
})
export class PranksComponent implements OnInit {

  videos: any = [];

  constructor(private titleService: Title, private videoEditorService: VideoEditorService) { }

  ngOnInit() {
      this.titleService.setTitle( `TRADOO | PRANKS`);

      // cache system
      if(Pranks.length){
          this.videos = Pranks;
      }
      else {
          this.videoEditorService.getByType('Pranks')
          .subscribe(videos => {
              this.videos = videos;
              videos.forEach(video => Pranks.push(video));
          });
      }
  }

}
