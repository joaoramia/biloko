var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { GlobalEventEmitter } from './global-events-manager.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { FooterComponent } from './footer/footer.component';
import { StandupComponent } from './standup/standup.component';
import { SketchesComponent } from './sketches/sketches.component';
import { PranksComponent } from './pranks/pranks.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { VideoEditorComponent } from './video-editor/video-editor.component';
var currentVideo;
var appRoutes = [
    {
        path: 'video/:id',
        component: VideoComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'standup',
        component: StandupComponent
    },
    {
        path: 'sketches',
        component: SketchesComponent
    },
    {
        path: 'pranks',
        component: PranksComponent
    },
    {
        path: 'busca',
        component: SearchComponent
    },
    {
        path: 'video-editor',
        component: VideoEditorComponent
    },
    {
        path: 'tbd/login',
        component: LoginComponent
    },
    {
        path: 'tbd/signup',
        component: RegisterComponent
    },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: HomeComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            NavbarComponent,
            HomeComponent,
            VideoComponent,
            FooterComponent,
            StandupComponent,
            SketchesComponent,
            PranksComponent,
            SearchComponent,
            LoginComponent,
            RegisterComponent,
            ProfileComponent,
            VideoEditorComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot(appRoutes)
        ],
        providers: [GlobalEventEmitter],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map