import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { VideoEditorService } from '../video-editor.service';

@Component({
  selector: 'app-video-editor',
  templateUrl: './video-editor.component.html',
  styleUrls: ['./video-editor.component.css'],
  providers: [VideoEditorService]
})
export class VideoEditorComponent implements OnInit, OnDestroy {
  videos: any = [];
  newVideo: any = {};

  constructor(private router: Router, private videoEditorService: VideoEditorService) { }

  ngOnInit() {
      if(!localStorage.getItem('token')) this.router.navigate(['/home']);
      this.getAll();
  }

  ngOnDestroy(){
      localStorage.removeItem('token');
  }

  add(){
      this.videoEditorService.add(this.newVideo)
      .subscribe(res => {
          console.log(res);
      })
  }

  getAll(){
      this.videoEditorService.getAll()
      .subscribe(res => this.videos = res);
  }

  getByType(type: string){
      this.videoEditorService.getByType(type)
      .subscribe(res => this.videos = res);
  }

  update(video: any){
    this.videoEditorService.update(video)
    .subscribe(res => this.videos = res);
  }

}
