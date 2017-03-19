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
import { Router } from '@angular/router';
import { VideoEditorService } from '../video-editor.service';
var VideoEditorComponent = (function () {
    function VideoEditorComponent(router, videoEditorService) {
        this.router = router;
        this.videoEditorService = videoEditorService;
        this.videos = [];
        this.newVideo = {};
    }
    VideoEditorComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('token'))
            this.router.navigate(['/home']);
        this.getAll();
    };
    VideoEditorComponent.prototype.ngOnDestroy = function () {
        localStorage.removeItem('token');
    };
    VideoEditorComponent.prototype.add = function () {
        this.videoEditorService.add(this.newVideo)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    VideoEditorComponent.prototype.getAll = function () {
        var _this = this;
        this.videoEditorService.getAll()
            .subscribe(function (res) { return _this.videos = res; });
    };
    VideoEditorComponent.prototype.getByType = function (type) {
        var _this = this;
        this.videoEditorService.getByType(type)
            .subscribe(function (res) { return _this.videos = res; });
    };
    VideoEditorComponent.prototype.update = function (video) {
        var _this = this;
        this.videoEditorService.update(video)
            .subscribe(function (res) { return _this.videos = res; });
    };
    return VideoEditorComponent;
}());
VideoEditorComponent = __decorate([
    Component({
        selector: 'app-video-editor',
        templateUrl: './video-editor.component.html',
        styleUrls: ['./video-editor.component.css'],
        providers: [VideoEditorService]
    }),
    __metadata("design:paramtypes", [Router, VideoEditorService])
], VideoEditorComponent);
export { VideoEditorComponent };
//# sourceMappingURL=../../../../src/app/video-editor/video-editor.component.js.map