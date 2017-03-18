import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Special, Standups, Sketches, Pranks } from '../videos';

declare var jQuery:any;

declare var fbAsyncInit:Function;

declare var FB:any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit, AfterViewInit {

  mode: any;
  id: any;
  player: any;
  videos: any = Standups.concat(Sketches, Pranks, [Special]);
  currentVideo: any;
  nextVideo: any;
  url: any;
  changedVideo: boolean = false;
  whatsappShare: any = 'whatsapp://send?text=';
  whatsappShareUrl: any = '';
  mobile: boolean = false;
  firstPlay: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private titleService: Title, private sanitizer: DomSanitizer) {
      router.events.subscribe((val) => {
          this.url = 'http://www.tradoo.com.br' + val.url;
          if (typeof FB != 'undefined' && this.changedVideo) this.changeDomain();
          this.whatsappShare = 'whatsapp://send?text=';
          this.whatsappShare += this.url;
          this.whatsappShare = this.sanitizer.bypassSecurityTrustUrl(this.whatsappShare);
          this.whatsappShareUrl = this.url;
          this.firstPlay = true;
      });
  }

  ngOnInit() {
      this.checkDevice();
      this.route
      .params
      .subscribe(params => {
          this.id = params['id'];
          this.getCurrentAndNextVideo();
      });

      // When the window is resized
      jQuery(window).resize(function() {
          jQuery('#video-player_youtube_iframe').css({"height": "100%", "width": "100%"});
      }).resize();
  }

  getCurrentAndNextVideo(): void {
      let found = false;
      this.videos.forEach((video, index) => {
          if (video.id == this.id){
              this.mode = this.id;
              found = true;
              this.currentVideo = video;
              this.titleService.setTitle( `TRADOO | ${this.currentVideo.title}` );
              if (index < this.videos.length - 1){
                  this.nextVideo = this.videos[index + 1];
              }
              else {
                  this.nextVideo = this.videos[0];
              }
          }
      });
      if (!found) {
          this.router.navigate(['/home']);
      }
      this.changeVideo(this.mode);
  }

  ngAfterViewInit() {
    let temp = this;
    this.player = new window['MediaElementPlayer']('#video-player', {
      plugins: ['youtube'],
      'webkit-playsinline': 'webkit-playsinline',
      playsinline: 'playsinline',
      startLanguage: 'pt',
      success: (mediaElement, domObject) => {
        mediaElement.addEventListener('play', function(e) {
            if (temp.firstPlay) {
                temp.enterFullScreen();
                temp.firstPlay = false;
            }
       }, false);
      }
    });

    this.getFBComments(document, 'script', 'facebook-jssdk');
  }

  changeVideo(nextVideoId: string): void {
      let temp = this;
      this.mode = nextVideoId;

      if (this.player) this.player.remove();

      jQuery('video').attr('src', 'https://www.youtube.com/watch?v=' + this.mode);
      jQuery('track').attr('src', 'assets/subtitles/' + this.mode + '.vtt');

      this.player = new window['MediaElementPlayer']('.video-player', {
        plugins: ['youtube'],
        'webkit-playsinline': 'webkit-playsinline',
        playsinline: 'playsinline',
        startLanguage: 'pt',
        success: (mediaElement, domObject) => {
          mediaElement.addEventListener('play', function(e) {
            if (temp.firstPlay) {
                temp.enterFullScreen();
                temp.firstPlay = false;
            }
         }, false);
        }
      });
      this.changedVideo = true;
  }

  enterFullScreen(): void {
    if (screen.width < 1000) this.player.enterFullScreen();
  }

  shareFacebook(): void {
    if (!this.currentVideo) return;
    const href = 'http://www.tradoo.com.br/video/' + this.mode;
    FB.ui({
      method: 'share',
      mobile_iframe: true,
      app_id: '370981806602348',
      display: 'iframe',
      href: href,
      link: href,
      title: `TRADOO ➳ ${this.currentVideo.title}`,
      picture: 'http://www.tradoo.com.br/assets/img/' + this.mode + '.png',
      caption: `TRADOO | ${this.currentVideo.author}`,
      description: this.currentVideo.description
    }, function(response){});
  }

  shareGPlus():void {
    window.open("https://plus.google.com/share?url="+this.url,"","height=550,width=400,left=100,top=100,menubar=0");
  }

  checkDevice(): void {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        this.mobile = true;
    }
  }

  getFBComments(d, s, id): void {
    var js, fjs = d.getElementsByTagName(s)[0];
    js = d.createElement(s); js.id = id;

    js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
  }

  changeDomain(): void {
      this.changedVideo = false;

      let comments = document.getElementById('comments');
      if (comments) comments.innerHTML='';

      let parser = document.getElementById('comments');

      if (!parser) return;

      parser.innerHTML = `<div
        class="fb-comments"
        data-href="${this.url}"
        data-numposts="3"
        data-colorscheme="light"
        data-mobile="true"
        data-order-by="social"
        style="
            background: rgb(246,247,249);
            border-radius: 1px;
            margin-top: 20px;
        "
        >
      </div>`;
      FB.XFBML.parse(parser);
      this.getFBComments(document, 'script', 'facebook-jssdk');
  }

  removeFBComments(id): void {
      let fjs = document.getElementsByTagName('script')[0];
      let elementToRemove = document.getElementById(id);
      if (elementToRemove) fjs.parentNode.removeChild(elementToRemove);
  }

}
