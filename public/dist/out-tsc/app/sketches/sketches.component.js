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
import { Sketches } from '../videos';
import { VideoEditorService } from '../video-editor.service';
var SketchesComponent = (function () {
    function SketchesComponent(titleService, videoEditorService) {
        this.titleService = titleService;
        this.videoEditorService = videoEditorService;
        this.videos = [];
    }
    SketchesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("TRADOO | SKETCHES");
        if (Sketches.length) {
            this.videos = Sketches;
        }
        else {
            this.videoEditorService.getByType('Sketches')
                .subscribe(function (videos) {
                _this.videos = videos;
                videos.forEach(function (video) { return Sketches.push(video); });
            });
        }
    };
    return SketchesComponent;
}());
SketchesComponent = __decorate([
    Component({
        selector: 'app-sketches',
        templateUrl: './sketches.component.html',
        styleUrls: ['./sketches.component.css'],
        providers: [VideoEditorService]
    }),
    __metadata("design:paramtypes", [Title, VideoEditorService])
], SketchesComponent);
export { SketchesComponent };
//# sourceMappingURL=../../../../src/app/sketches/sketches.component.js.map