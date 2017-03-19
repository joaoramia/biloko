import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Special, Standups } from '../videos';
import { VideoEditorService } from '../video-editor.service';

@Component({
  selector: 'app-standup',
  templateUrl: './standup.component.html',
  styleUrls: ['./standup.component.css'],
  providers: [VideoEditorService]
})
export class StandupComponent implements OnInit {

  videos: any = [];
  constructor(private titleService: Title, private videoEditorService: VideoEditorService) { }

  ngOnInit() {
      this.titleService.setTitle( `TRADOO | STAND UP`);

      // cache system
      if(Standups.length){
          this.videos = Standups;
      }
      else {
          this.videoEditorService.getByType('Standups')
          .subscribe(videos => {
              this.videos = videos;
              videos.forEach(video => Standups.push(video));
          });
      }
  }

}
