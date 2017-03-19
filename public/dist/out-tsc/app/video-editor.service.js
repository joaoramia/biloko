var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var VideoEditorService = (function () {
    function VideoEditorService(http) {
        this.http = http;
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem('token')
        });
        this.options = new RequestOptions({ headers: this.headers });
    }
    VideoEditorService.prototype.add = function (obj) {
        console.log(obj);
        obj.token = localStorage.getItem('token');
        this.updateHeaders();
        return this.http.post('http://localhost:3030/api/video/add', obj, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    VideoEditorService.prototype.getAll = function () {
        return this.http.get('http://localhost:3030/api/video/get')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    VideoEditorService.prototype.getByType = function (type) {
        return this.http.get("http://localhost:3030/api/video/get/" + type)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    VideoEditorService.prototype.getById = function (id) {
        return this.http.get("http://localhost:3030/api/video/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    VideoEditorService.prototype.update = function (obj) {
        obj.token = localStorage.getItem('token');
        this.updateHeaders();
        console.log(obj);
        return this.http.post('http://localhost:3030/api/video/edit', obj, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    VideoEditorService.prototype.updateHeaders = function () {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem('token')
        });
        this.options = new RequestOptions({ headers: this.headers });
    };
    return VideoEditorService;
}());
VideoEditorService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], VideoEditorService);
export { VideoEditorService };
//# sourceMappingURL=../../../src/app/video-editor.service.js.map