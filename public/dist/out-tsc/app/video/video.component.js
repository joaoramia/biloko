var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Special, Standups, Sketches, Pranks, All } from '../videos';
import { VideoEditorService } from '../video-editor.service';
var VideoComponent = (function () {
    function VideoComponent(route, router, titleService, sanitizer, videoEditorService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.titleService = titleService;
        this.sanitizer = sanitizer;
        this.videoEditorService = videoEditorService;
        this.videos = Standups.concat(Sketches, Pranks, [Special]);
        this.changedVideo = false;
        this.whatsappShare = 'whatsapp://send?text=';
        this.whatsappShareUrl = '';
        this.mobile = false;
        this.firstPlay = true;
        router.events.subscribe(function (val) {
            _this.url = 'http://www.tradoo.com.br' + val.url;
            if (typeof FB != 'undefined')
                _this.changeDomain();
            _this.whatsappShare = 'whatsapp://send?text=';
            _this.whatsappShare += _this.url;
            _this.whatsappShare = _this.sanitizer.bypassSecurityTrustUrl(_this.whatsappShare);
            _this.whatsappShareUrl = _this.url;
            _this.firstPlay = true;
        });
    }
    VideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkDevice();
        this.route
            .params
            .subscribe(function (params) {
            _this.mode = params['id'];
            _this.id = params['id'];
            _this.getVideos();
        });
        jQuery(window).resize(function () {
            jQuery('#video-player_youtube_iframe').css({ "height": "100%", "width": "100%" });
        }).resize();
        this.changeDomain();
    };
    VideoComponent.prototype.getVideos = function () {
        var _this = this;
        if (All.length) {
            this.videos = All;
            this.getCurrentAndNextVideo();
        }
        else {
            this.videoEditorService.getAll()
                .subscribe(function (videos) {
                _this.videos = videos;
                All.concat(videos);
                _this.getCurrentAndNextVideo();
            });
        }
    };
    VideoComponent.prototype.getCurrentAndNextVideo = function () {
        var _this = this;
        var found = false;
        this.videos.forEach(function (video, index) {
            if (video.youtubeID == _this.id) {
                _this.mode = _this.id;
                found = true;
                _this.currentVideo = video;
                _this.titleService.setTitle("TRADOO | " + _this.currentVideo.title);
                if (index < _this.videos.length - 1) {
                    _this.nextVideo = _this.videos[index + 1];
                }
                else {
                    _this.nextVideo = _this.videos[0];
                }
            }
        });
        if (!found) {
            this.router.navigate(['/home']);
        }
        this.changeVideo(this.mode);
    };
    VideoComponent.prototype.ngAfterViewInit = function () {
    };
    VideoComponent.prototype.makePlayer = function () {
        this.getFBComments(document, 'script', 'facebook-jssdk');
    };
    VideoComponent.prototype.changeVideo = function (nextVideoId) {
        var temp = this;
        this.mode = nextVideoId;
        console.log(this.player);
        if (this.player)
            this.player.remove();
        jQuery('video').attr('src', 'https://www.youtube.com/watch?v=' + this.mode);
        jQuery('track').attr('src', 'assets/subtitles/' + this.mode + '.vtt');
        this.player = new window['MediaElementPlayer']('.video-player', {
            plugins: ['youtube'],
            'webkit-playsinline': 'webkit-playsinline',
            playsinline: 'playsinline',
            startLanguage: 'pt',
            success: function (mediaElement, domObject) {
                mediaElement.addEventListener('play', function (e) {
                    if (temp.firstPlay) {
                        temp.enterFullScreen();
                        temp.firstPlay = false;
                    }
                }, false);
            }
        });
        this.changedVideo = true;
    };
    VideoComponent.prototype.enterFullScreen = function () {
        if (screen.width < 1000)
            this.player.enterFullScreen();
    };
    VideoComponent.prototype.shareFacebook = function () {
        if (!this.currentVideo)
            return;
        var href = 'http://www.tradoo.com.br/video/' + this.mode;
        FB.ui({
            method: 'share',
            mobile_iframe: true,
            app_id: '370981806602348',
            display: 'iframe',
            href: href,
            link: href,
            title: "TRADOO \u27B3 " + this.currentVideo.title,
            picture: 'http://www.tradoo.com.br/assets/img/' + this.mode + '.png',
            caption: "TRADOO | " + this.currentVideo.author,
            description: this.currentVideo.description
        }, function (response) { });
    };
    VideoComponent.prototype.shareGPlus = function () {
        window.open("https://plus.google.com/share?url=" + this.url, "", "height=550,width=400,left=100,top=100,menubar=0");
    };
    VideoComponent.prototype.checkDevice = function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.mobile = true;
        }
    };
    VideoComponent.prototype.getFBComments = function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.8";
        fjs.parentNode.insertBefore(js, fjs);
    };
    VideoComponent.prototype.changeDomain = function () {
        this.changedVideo = false;
        var comments = document.getElementById('comments');
        if (comments)
            comments.innerHTML = '';
        var parser = document.getElementById('comments');
        if (!parser)
            return;
        parser.innerHTML = "<div\n        class=\"fb-comments\"\n        data-href=\"" + this.url + "\"\n        data-numposts=\"3\"\n        data-colorscheme=\"light\"\n        data-mobile=\"true\"\n        data-order-by=\"social\"\n        style=\"\n            background: rgb(246,247,249);\n            border-radius: 1px;\n            margin-top: 20px;\n        \"\n        >\n      </div>";
        FB.XFBML.parse(parser);
        this.getFBComments(document, 'script', 'facebook-jssdk');
    };
    VideoComponent.prototype.removeFBComments = function (id) {
        var fjs = document.getElementsByTagName('script')[0];
        var elementToRemove = document.getElementById(id);
        if (elementToRemove)
            fjs.parentNode.removeChild(elementToRemove);
    };
    return VideoComponent;
}());
VideoComponent = __decorate([
    Component({
        selector: 'app-video',
        templateUrl: './video.component.html',
        styleUrls: ['./video.component.css'],
        providers: [VideoEditorService]
    }),
    __metadata("design:paramtypes", [ActivatedRoute, Router, Title, DomSanitizer, VideoEditorService])
], VideoComponent);
export { VideoComponent };
//# sourceMappingURL=../../../../src/app/video/video.component.js.map