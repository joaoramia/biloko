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
import { Router, ActivatedRoute } from '@angular/router';
import { Special, Standups, Sketches, Pranks } from '../videos';
import { VideoEditorService } from '../video-editor.service';
var HomeComponent = (function () {
    function HomeComponent(route, router, titleService, videoEditorService) {
        this.route = route;
        this.router = router;
        this.titleService = titleService;
        this.videoEditorService = videoEditorService;
        this.special = {};
        this.standups = [];
        this.sketches = [];
        this.pranks = [];
        this.numbers = [];
        this.slideIndex = 1;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("TRADOO");
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.numbers = [0, 1, 2];
        }
        else {
            this.numbers = [0, 1, 2, 3, 4, 5];
        }
        if (Sketches.length) {
            this.sketches = Sketches;
        }
        else {
            this.videoEditorService.getByType('Sketches')
                .subscribe(function (videos) {
                _this.sketches = videos;
                videos.forEach(function (video) { return Sketches.push(video); });
            });
        }
        if (Pranks.length) {
            this.pranks = Pranks;
        }
        else {
            this.videoEditorService.getByType('Pranks')
                .subscribe(function (videos) {
                _this.pranks = videos;
                videos.forEach(function (video) { return Pranks.push(video); });
            });
        }
        if (Standups.length) {
            this.standups = Standups;
        }
        else {
            this.videoEditorService.getByType('Standups')
                .subscribe(function (videos) {
                _this.standups = videos;
                videos.forEach(function (video) { return Standups.push(video); });
            });
        }
        if (Object.keys(Special).length) {
            this.special = Special;
        }
        else {
            this.videoEditorService.getByType('Special')
                .subscribe(function (videos) {
                if (videos.length) {
                    _this.special = videos[0];
                    for (var key in videos[0]) {
                        Special[key] = videos[0][key];
                    }
                }
            });
        }
    };
    HomeComponent.prototype.goTo = function (url) {
        this.router.navigate([url]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        providers: [VideoEditorService]
    }),
    __metadata("design:paramtypes", [ActivatedRoute, Router, Title, VideoEditorService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=../../../../src/app/home/home.component.js.map