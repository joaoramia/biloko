import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Special, Sketches } from '../videos';
import { VideoEditorService } from '../video-editor.service';

@Component({
  selector: 'app-sketches',
  templateUrl: './sketches.component.html',
  styleUrls: ['./sketches.component.css'],
  providers: [VideoEditorService]
})
export class SketchesComponent implements OnInit {

  videos: any = [];
  constructor(private titleService: Title, private videoEditorService: VideoEditorService) { }

  ngOnInit() {
      this.titleService.setTitle( `TRADOO | SKETCHES`);

      // cache system
      if(Sketches.length){
          this.videos = Sketches;
      }
      else {
          this.videoEditorService.getByType('Sketches')
          .subscribe(videos => {
              this.videos = videos;
              videos.forEach(video => Sketches.push(video));
          });
      }
  }

}
