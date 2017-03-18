webpackJsonp([0,3],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalEventEmitter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalEventEmitter = (function () {
    function GlobalEventEmitter() {
        this.currentResults = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.currentWords = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.askForUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    GlobalEventEmitter = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], GlobalEventEmitter);
    return GlobalEventEmitter;
}());
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/global-events-manager.service.js.map

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 382;


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(503);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/main.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.login = function (n, p) {
        console.log('here', n, p);
        return this.http.post('http://localhost:3030/v1/getout', { "n": n, "p": p })
            .map(function (response) {
            var res = response.json();
            console.log(res);
            if (res && res.token) {
                localStorage.setItem('currentUser', JSON.stringify(res));
                localStorage.setItem('token', JSON.stringify(res.token));
            }
        });
    };
    AdminService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AdminService);
    return AdminService;
    var _a;
}());
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/admin.service.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_service__ = __webpack_require__(500);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(adminService) {
        this.adminService = adminService;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.login = function () {
        console.log('clicked', this.n, this.p);
        this.adminService.login(this.n, this.p);
    };
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__(677),
            styles: [__webpack_require__(667)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__admin_service__["a" /* AdminService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__admin_service__["a" /* AdminService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__admin_service__["a" /* AdminService */]) === 'function' && _a) || Object])
    ], AdminComponent);
    return AdminComponent;
    var _a;
}());
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/admin.component.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */])) {
                return;
            }
            document.body.scrollTop = 0;
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(678),
            styles: [__webpack_require__(668)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/app.component.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_events_manager_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__video_video_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__standup_standup_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sketches_sketches_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pranks_pranks_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_search_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_admin_component__ = __webpack_require__(501);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var currentVideo;
var appRoutes = [
    {
        path: 'video/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__video_video_component__["a" /* VideoComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'standup',
        component: __WEBPACK_IMPORTED_MODULE_11__standup_standup_component__["a" /* StandupComponent */]
    },
    {
        path: 'sketches',
        component: __WEBPACK_IMPORTED_MODULE_12__sketches_sketches_component__["a" /* SketchesComponent */]
    },
    {
        path: 'pranks',
        component: __WEBPACK_IMPORTED_MODULE_13__pranks_pranks_component__["a" /* PranksComponent */]
    },
    {
        path: 'busca',
        component: __WEBPACK_IMPORTED_MODULE_14__search_search_component__["a" /* SearchComponent */]
    },
    {
        path: 'getoutofheremotherfucker',
        component: __WEBPACK_IMPORTED_MODULE_15__admin_admin_component__["a" /* AdminComponent */]
    },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__video_video_component__["a" /* VideoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__standup_standup_component__["a" /* StandupComponent */],
                __WEBPACK_IMPORTED_MODULE_12__sketches_sketches_component__["a" /* SketchesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pranks_pranks_component__["a" /* PranksComponent */],
                __WEBPACK_IMPORTED_MODULE_14__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_15__admin_admin_component__["a" /* AdminComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__global_events_manager_service__["a" /* GlobalEventEmitter */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/app.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(679),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/footer.component.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videos__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(route, router, titleService) {
        this.route = route;
        this.router = router;
        this.titleService = titleService;
        this.special = __WEBPACK_IMPORTED_MODULE_3__videos__["b" /* Special */];
        this.standups = __WEBPACK_IMPORTED_MODULE_3__videos__["e" /* Standups */];
        this.sketches = __WEBPACK_IMPORTED_MODULE_3__videos__["d" /* Sketches */];
        this.pranks = __WEBPACK_IMPORTED_MODULE_3__videos__["c" /* Pranks */];
        this.numbers = [];
        this.slideIndex = 1;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("TRADOO");
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.numbers = [0, 1, 2];
        }
        else {
            this.numbers = [0, 1, 2, 3, 4, 5];
        }
    };
    HomeComponent.prototype.goTo = function (url) {
        this.router.navigate([url]);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(680),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === 'function' && _c) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/home.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_service__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_events_manager_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(searchService, router, globalEventEmitter) {
        this.searchService = searchService;
        this.router = router;
        this.globalEventEmitter = globalEventEmitter;
        this.searchWord = '';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // Highlight the top nav as scrolling occurs
        jQuery('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 51
        });
        // Closes the Responsive Menu on Menu Item Click
        jQuery('.navbar-collapse ul li a').click(function () {
            jQuery('.navbar-toggle:visible').click();
        });
        // Offset for Main Navigation
        jQuery('#mainNav').affix({
            offset: {
                top: 100
            }
        });
    };
    NavbarComponent.prototype.search = function () {
        this.searchService.setCurrentWords(this.searchWord);
        this.globalEventEmitter.currentWords.emit(this.searchWord);
        this.searchService.updateSearch();
        this.router.navigate(['/busca']);
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(681),
            styles: [__webpack_require__(671)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__global_events_manager_service__["a" /* GlobalEventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__global_events_manager_service__["a" /* GlobalEventEmitter */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/navbar.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videos__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PranksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PranksComponent = (function () {
    function PranksComponent(titleService) {
        this.titleService = titleService;
        this.special = __WEBPACK_IMPORTED_MODULE_2__videos__["b" /* Special */];
        this.videos = __WEBPACK_IMPORTED_MODULE_2__videos__["c" /* Pranks */];
    }
    PranksComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("TRADOO | PRANKS");
    };
    PranksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-pranks',
            template: __webpack_require__(682),
            styles: [__webpack_require__(672)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === 'function' && _a) || Object])
    ], PranksComponent);
    return PranksComponent;
    var _a;
}());
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/pranks.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__videos__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_events_manager_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = (function () {
    function SearchService(globalEventEmitter) {
        var _this = this;
        this.globalEventEmitter = globalEventEmitter;
        this.currentSearch = [];
        this.currentWords = '';
        this.globalEventEmitter.askForUpdate.subscribe(function (mode) {
            _this.globalEventEmitter.currentResults.emit(_this.currentSearch);
            _this.globalEventEmitter.currentWords.emit(_this.currentWords);
        });
    }
    SearchService.prototype.checkVideo = function (video) {
        var words = this.currentWords.split(' ');
        var found = false;
        words.forEach(function (word) {
            if (!found && (video.title.toLowerCase().includes(word) || video.author.toLowerCase().includes(word))) {
                found = true;
            }
        });
        return found;
    };
    SearchService.prototype.updateSearch = function () {
        var _this = this;
        this.currentWords = this.currentWords.toLowerCase();
        var result = __WEBPACK_IMPORTED_MODULE_1__videos__["a" /* All */].filter(function (video) {
            var found = false;
            if (!found && (video.title.toLowerCase().includes(_this.currentWords) || video.author.toLowerCase().includes(_this.currentWords))) {
                found = true;
            }
            return found;
        });
        this.currentSearch = result;
        this.globalEventEmitter.currentResults.emit(this.currentSearch);
    };
    SearchService.prototype.setCurrentWords = function (str) {
        this.currentWords = str;
    };
    SearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__global_events_manager_service__["a" /* GlobalEventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__global_events_manager_service__["a" /* GlobalEventEmitter */]) === 'function' && _a) || Object])
    ], SearchService);
    return SearchService;
    var _a;
}());
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/search.service.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_events_manager_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(titleService, globalEventEmitter) {
        var _this = this;
        this.titleService = titleService;
        this.globalEventEmitter = globalEventEmitter;
        this.globalEventEmitter.currentResults.subscribe(function (results) { return _this.videos = results; });
        this.globalEventEmitter.currentWords.subscribe(function (words) { return _this.currentWords = words; });
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalEventEmitter.askForUpdate.emit(true);
        this.titleService.setTitle("TRADOO | BUSCA");
        this.globalEventEmitter.currentResults.subscribe(function (results) { return _this.videos = results; });
        this.globalEventEmitter.currentWords.subscribe(function (words) { return _this.currentWords = words; });
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__(683),
            styles: [__webpack_require__(673)],
            providers: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__global_events_manager_service__["a" /* GlobalEventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__global_events_manager_service__["a" /* GlobalEventEmitter */]) === 'function' && _b) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/search.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videos__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SketchesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SketchesComponent = (function () {
    function SketchesComponent(titleService) {
        this.titleService = titleService;
        this.special = __WEBPACK_IMPORTED_MODULE_2__videos__["b" /* Special */];
        this.videos = __WEBPACK_IMPORTED_MODULE_2__videos__["d" /* Sketches */];
    }
    SketchesComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("TRADOO | SKETCHES");
    };
    SketchesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-sketches',
            template: __webpack_require__(684),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === 'function' && _a) || Object])
    ], SketchesComponent);
    return SketchesComponent;
    var _a;
}());
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/sketches.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videos__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StandupComponent = (function () {
    function StandupComponent(titleService) {
        this.titleService = titleService;
        this.special = __WEBPACK_IMPORTED_MODULE_2__videos__["b" /* Special */];
        this.videos = __WEBPACK_IMPORTED_MODULE_2__videos__["e" /* Standups */];
    }
    StandupComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("TRADOO | STAND UP");
    };
    StandupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-standup',
            template: __webpack_require__(685),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === 'function' && _a) || Object])
    ], StandupComponent);
    return StandupComponent;
    var _a;
}());
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/standup.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videos__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideoComponent = (function () {
    function VideoComponent(route, router, titleService, sanitizer) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.titleService = titleService;
        this.sanitizer = sanitizer;
        this.videos = __WEBPACK_IMPORTED_MODULE_3__videos__["e" /* Standups */].concat(__WEBPACK_IMPORTED_MODULE_3__videos__["d" /* Sketches */], __WEBPACK_IMPORTED_MODULE_3__videos__["c" /* Pranks */], [__WEBPACK_IMPORTED_MODULE_3__videos__["b" /* Special */]]);
        this.changedVideo = false;
        this.whatsappShare = 'whatsapp://send?text=';
        this.whatsappShareUrl = '';
        this.mobile = false;
        this.firstPlay = true;
        router.events.subscribe(function (val) {
            _this.url = 'http://www.tradoo.com.br' + val.url;
            if (typeof FB != 'undefined' && _this.changedVideo)
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
            _this.id = params['id'];
            _this.getCurrentAndNextVideo();
        });
        // When the window is resized
        jQuery(window).resize(function () {
            jQuery('#video-player_youtube_iframe').css({ "height": "100%", "width": "100%" });
        }).resize();
    };
    VideoComponent.prototype.getCurrentAndNextVideo = function () {
        var _this = this;
        var found = false;
        this.videos.forEach(function (video, index) {
            if (video.id == _this.id) {
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
        var temp = this;
        this.player = new window['MediaElementPlayer']('#video-player', {
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
        this.getFBComments(document, 'script', 'facebook-jssdk');
    };
    VideoComponent.prototype.changeVideo = function (nextVideoId) {
        var temp = this;
        this.mode = nextVideoId;
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
    VideoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-video',
            template: __webpack_require__(686),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]) === 'function' && _d) || Object])
    ], VideoComponent);
    return VideoComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/video.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: true
};
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/environment.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/polyfills.js.map

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = ".admin-div {\n  margin-top:200px;\n}\n"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = ".video-entrada {\n  margin-top: -6%;\n}\n\n.video-div {\n  margin-top: 1%;\n}\n\n.videos {\n  margin-top: 20px;\n}\n\n.more {\n  font-family: Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 25px;\n  text-align: center;\n  margin-top: 50px;\n  margin-bottom: -45px;\n}\n\n.more a {\n  text-decoration: none;\n}\n\n.more-standups, .more-pranks {\n  color: #2c3e50 !important;\n  padding: 10px;\n  border: 2px solid #2c3e50;\n  border-radius: 30px;\n}\n\n.more-sketches {\n  color: white !important;\n  padding: 10px;\n  border: 2px solid white;\n  border-radius: 30px;\n}\n\n.skills {\n  color: rgba(0, 0, 0, 1);\n}\n\n#page-top {\n  color: white;\n  background: rgba(14, 22, 30, 1);\n}\n\n.name {\n  color: white;\n}\n\n.mySlides {\n  margin: 0 auto;\n  width: 100%;\n  position: relative;\n}\n\n.mySlides img {\n  cursor: pointer;\n  max-height: 450px;\n  max-width: 100%;\n  position: relative;\n  margin: 0 auto;\n  -webkit-transition: visibility 0s, opacity 0.5s linear;\n  transition: visibility 0s, opacity 0.5s linear;\n}\n\n.title {\n  cursor: pointer;\n  top: 40px;\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  font-weight: 700;\n  background: rgba(0, 0, 0, 0.5);\n  width: 40%;\n  position: absolute;\n  text-align: left;\n  padding-left: 10px;\n  margin-left: 10%;\n  font-size: 30px;\n  z-index: 1;\n}\n\n#standup {\n  /*color: white;\n  background: rgba(44, 62, 80, 1);*/\n  background: #FFE34C;\n  box-shadow: 0px 0px 44px -2px rgba(0,0,0,0.93);\n}\n\n#sketches {\n  color: white;\n  background: rgba(14, 22, 30, 1);\n  box-shadow: 0px 0px 44px -2px rgba(0,0,0,0.93);\n}\n\n#pranks {\n  /*color: white;\n  background: rgba(44, 62, 80, 1);*/\n  background: #FFE34C;\n  box-shadow: 0px 0px 44px -2px rgba(0,0,0,0.93);\n}\n\n@media screen and (max-width: 780px){\n  .title {\n    width: 70%;\n  }\n  .more {\n    margin-top: 35px;\n  }\n}\n"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = ".navbar-custom {\n  z-index: 1;\n  max-height: 45px !important;\n  font-size: 16px !important;\n  padding-top: 2px !important;\n  box-shadow: 0 5px 16px 0 rgba(0,0,0,0.5);\n}\n\n.navbar-collapse {\n  padding-top: 0;\n}\n\n.page-scroll .active {\n  color: #FFE34C;\n}\n\n.navbar-brand {\n  color: white !important;\n}\n\n.search {\n  color: white;\n  margin-top: 12px !important;\n  float: left;\n  margin-left: 15px;\n  margin-top: 10px;\n}\n\n.search-button:hover {\n  cursor: pointer;\n  color: #FFE34C;\n}\n\n.search input {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid white;\n  font-weight: lighter;\n  font-size: 14px;\n  width: 350px;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n@media (max-width: 1199px){\n  .search input {\n    width: 300px;\n  }\n}\n\n@media (max-width: 1000px){\n  .navbar-custom {\n    font-size: 13px;\n  }\n\n  .navbar-brand {\n    font-size: 20px;\n  }\n\n  .search input {\n    width: 200px;\n  }\n\n  .container {\n    margin-left: 0 !important;\n    width: 100%;\n  }\n}\n\n@media (max-width: 900px){\n  .search input {\n    width: 170px;\n  }\n}\n\n@media (max-width: 767px){\n  .navbar-collapse a {\n    background: rgba(44, 62, 80, 0.8);\n  }\n\n  .navbar-collapse a:hover {\n    background: rgba(44, 62, 80, 1);\n  }\n\n  .search input {\n    width: 350px;\n  }\n}\n\n@media (max-width: 630px){\n  .search input {\n    width: 250px;\n  }\n}\n\n@media (max-width: 510px){\n  .search input {\n    width: 200px;\n  }\n}\n\n@media (max-width: 460px){\n  .search input {\n    width: 150px;\n  }\n}\n\n@media (max-width: 430px){\n  .search input {\n    width: 120px;\n  }\n}\n"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "#pranks {\n  background: #FFE34C;\n  box-shadow: 0px 0px 44px -2px rgba(0,0,0,0.93);\n}\n"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "#search {\n  background: #FFE34C;\n  height: 100% !important;\n  width: 100%;\n  position: relative;\n}\n"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "#sketches {\n  color: white;\n  background: rgba(14, 22, 30, 1);\n  box-shadow: 0px 0px 44px -2px rgba(0,0,0,0.93);\n}\n"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "#standup {\n  background: #FFE34C;\n  box-shadow: 0px 0px 44px -2px rgba(0,0,0,0.93);\n}\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ".video-page {\n  padding-left: 3%;\n  padding-right: 3%;\n  padding-top: 13%;\n  padding-bottom: 13%;\n  background: rgba(14, 22, 30, 1);\n  z-index: 1000 !important;\n}\n\nvideo {\n  z-index: 1000;\n}\n\n.author {\n  font-family: Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 32px;\n  color: white;\n  text-transform: uppercase;\n}\n\n.title {\n  font-family: Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 22px;\n  color: white;\n  text-transform: uppercase;\n}\n\n.description {\n  font-family: Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 16px;\n  color: white;\n}\n\n.description a {\n  font-style:italic;\n  color: white;\n}\n\n.type {\n  font-family: Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  text-transform: uppercase;\n  font-size: 20px;\n  color: white;\n}\n\n.next-div {\n  position: fixed;\n  background: rgba(0,0,0,0.3);\n  border-radius: 3px;\n  padding: 8px;\n  bottom: 10px;\n  right: 10px;\n}\n\n.next {\n  font-family: Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  text-transform: uppercase;\n  font-size: 20px;\n  margin-top: 35px;\n  color: white;\n}\n\n.next-video {\n  max-width: 250px;\n  border-radius: 2px;\n}\n\n.next-video-title {\n  margin-bottom: 15px;\n  font-family: Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 10px;\n  color: white;\n  text-transform: uppercase;\n}\n\n.next-video-length {\n  position: absolute;\n  float: right;\n  bottom: 8px;\n  margin-left: 6px;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.social-media {\n  padding-top: 10px;\n}\n\n.share {\n  font-family: Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 10px;\n  color: white;\n  text-transform: uppercase;\n}\n\n.square {\n  width: 50px;\n\theight: 50px;\n  font-size: 40px;\n  cursor: pointer;\n}\n\n.whatsapp {\n  float: left;\n  background: rgba(37, 211, 102, 1);\n}\n\n.facebook {\n  float: left;\n  background: rgba(59, 89, 152, 1);\n}\n\n.twitter {\n  float: left;\n  background: rgba(29, 161, 242, 1);\n}\n\n.google-plus {\n  float: left;\n  background: rgba(219, 68, 55, 1);\n  font-size: 35px;\n}\n\n.social-media-logo {\n  text-align: center;\n}\n\n\n.fa-whatsapp, .fa-facebook, .fa-twitter {\n  color: white;\n  vertical-align: bottom;\n  padding-bottom: 12px;\n}\n\n.fa-google-plus {\n  color: white;\n  vertical-align: bottom;\n  padding-bottom: 8px;\n}\n\n.fb-comments {\n  margin-top: 30px;\n  background: rgb(246,247,249) !important;\n  border-radius: 2px !important;\n  margin-top: 20px !important;\n}\n\n#comments {\n  background: rgb(246, 247, 249) !important;\n  border-radius: 2px !important;\n  margin-top: 20px !important;\n}\n\n._2pi8 {\n  background: rgba(246, 247, 249, 1) !important;\n}\n\niframe, .mejs-player {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n#video-player_youtube_iframe, #video-player, .mejs__inner, .mejs__mediaelement {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.mejs__mediaelement {\n  position: relative !important;\n  display: table !important;\n}\n\n.mejs__mediaelement iframe {\n  position: absolute !important;\n\ttop: 0 !important;\n\tleft: 0 !important;\n\twidth: 100% !important;\n\theight: 100% !important;\n}\n\n.row {\n    margin-right: 0px !important;\n    margin-left: 0px !important;\n}\n\n@media screen and (max-width: 1000px) {\n  .video-page {\n    padding-top: 20%;\n  }\n\n}\n@media screen and (max-width: 1270px) {\n  .next-div {\n    position: relative;\n    background: none;\n  }\n}\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<div class='admin-div'>\n  <input type=\"text\" [(ngModel)]=\"n\">\n  <input type=\"password\" [(ngModel)]=\"p\">\n  <button (click)=\"login()\">submit</button>\n</div>\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"text-center\">\n    <div class=\"footer-above\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"footer-col col-xs-8 col-xs-offset-2\">\n                    <h3>Tradoo</h3>\n                    <p>Vídeos do YouTube com legendas em português</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"footer-below\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    Copyright &copy; Tradoo 2017\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<header id=\"page-top\" class=\"index\">\n    <div class=\"container video-entrada\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"intro-text\">\n                    <span class=\"name\">Destaque</span>\n                    <div class=\"mySlides first\">\n                      <div class=\"title\" (click)=\"goTo('/video/' + special.id)\">{{ special.author }}<br>{{ special.title }}</div>\n                      <img src=\"{{ 'assets/img/' + special.id + '.png' }}\" (click)=\"goTo('/video/' + special.id)\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n\n<!-- Portfolio Grid Section -->\n<section id=\"standup\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <h2 class=\"test-estilos\">Stand Up Comedy</h2>\n            </div>\n        </div>\n        <div class=\"row videos\">\n            <div *ngFor=\"let i of numbers\" class=\"col-sm-4 portfolio-item\">\n              <h3><span *ngIf=\"i == 0\" class=\"new\"><i class=\"fa fa-bolt\" aria-hidden=\"true\"></i> NOVO</span> {{ standups[i].title }}</h3>\n              <h5>{{ standups[i].author }}</h5>\n                <a class=\"portfolio-link\" routerLink=\"{{ '/video/' + standups[i].id }}\" routerLinkActive=\"active\">\n                    <img src=\"{{ 'assets/img/' + standups[i].id + '.png' }}\" class=\"img-responsive\" alt=\"\">\n                    <div class=\"length\">{{ standups[i].length }}</div>\n                </a>\n            </div>\n        </div>\n        <div class=\"row more\">\n          <a class=\"more-standups\" routerLink=\"/standup\">Mais...</a>\n        </div>\n    </div>\n</section>\n\n<!-- Sketches Grid Section -->\n<section id=\"sketches\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <h2 class=\"test-estilos\">Sketches</h2>\n            </div>\n        </div>\n        <div class=\"row videos\">\n            <div *ngFor=\"let i of numbers\" class=\"col-sm-4 portfolio-item\">\n              <h3><span *ngIf=\"i == 0\" class=\"new-dark\"><i class=\"fa fa-bolt\" aria-hidden=\"true\"></i> NOVO</span> {{ sketches[i].title }}</h3>\n              <h5>{{ sketches[i].author }}</h5>\n                <a class=\"portfolio-link\" routerLink=\"{{ '/video/' + sketches[i].id }}\" routerLinkActive=\"active\">\n                    <img src=\"{{ 'assets/img/' + sketches[i].id + '.png' }}\" class=\"img-responsive\" alt=\"\">\n                    <div class=\"length\">{{ sketches[i].length }}</div>\n                </a>\n            </div>\n        </div>\n        <div class=\"row more\">\n          <a class=\"more-sketches\" routerLink=\"/sketches\">Mais...</a>\n        </div>\n    </div>\n</section>\n\n<!-- Pranks Grid Section -->\n<section id=\"pranks\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <h2 class=\"test-estilos\">Pranks</h2>\n            </div>\n        </div>\n        <div class=\"row videos\">\n            <div *ngFor=\"let i of numbers; let i = index\" class=\"col-sm-4 portfolio-item\">\n              <!-- <span class=\"new\"><i class=\"fa fa-bolt\" aria-hidden=\"true\"></i></span> -->\n              <h3><span *ngIf=\"i == 0\" class=\"new\"><i class=\"fa fa-bolt\" aria-hidden=\"true\"></i> NOVO</span> {{ pranks[i].title }}</h3>\n              <h5>{{ pranks[i].author }}</h5>\n                <a class=\"portfolio-link\" routerLink=\"{{ '/video/' + pranks[i].id }}\" routerLinkActive=\"active\">\n                    <img src=\"{{ 'assets/img/' + pranks[i].id + '.png' }}\" class=\"img-responsive\" alt=\"\">\n                    <div class=\"length\">{{ pranks[i].length }}</div>\n                </a>\n            </div>\n        </div>\n        <div class=\"row more\">\n          <a class=\"more-pranks\" routerLink=\"/pranks\">Mais...</a>\n        </div>\n    </div>\n</section>\n\n<app-footer></app-footer>\n\n<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->\n<div class=\"scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md\">\n    <a class=\"btn btn-primary\" href=\"#page-top\">\n        <i class=\"fa fa-chevron-up\"></i>\n    </a>\n</div>\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav id=\"mainNav\" class=\"navbar navbar-default navbar-fixed-top navbar-custom affix\" style=\"z-index: 10;\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header page-scroll\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span> Menu <i class=\"fa fa-bars\"></i>\n            </button>\n            <a class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active\">TRADOO</a>\n            <div class=\"search\">\n              <form class=\"search-form\" (submit)=\"search()\">\n                <i class=\"fa fa-search search-button\" aria-hidden=\"true\" (click)=\"search()\"></i>\n                <input class=\"search-input\" type=\"text\" [(ngModel)]=\"searchWord\" name=\"search\">\n              </form>\n            </div>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"page-scroll\">\n                    <a routerLink=\"/standup\" routerLinkActive=\"active\">Stand Up Comedy</a>\n                </li>\n                <li class=\"page-scroll\">\n                    <a routerLink=\"/sketches\" routerLinkActive=\"active\">Sketches</a>\n                </li>\n                <li class=\"page-scroll\">\n                    <a routerLink=\"/pranks\" routerLinkActive=\"active\">Pranks</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<!-- Portfolio Grid Section -->\n<section id=\"pranks\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <h2 class=\"test-estilos\">Pranks</h2>\n            </div>\n        </div>\n        <div class=\"row videos\">\n            <div *ngFor=\"let video of videos, let i = index\" class=\"col-sm-4 portfolio-item\">\n              <h3><span *ngIf=\"i == 0\" class=\"new\"><i class=\"fa fa-bolt\" aria-hidden=\"true\"></i> NOVO</span> {{ video.title }}</h3>\n              <h5>{{ video.author }}</h5>\n                <a class=\"portfolio-link\" routerLink=\"{{ '/video/' + video.id }}\" routerLinkActive=\"active\">\n                    <img src=\"{{ 'assets/img/' + video.id + '.png' }}\" class=\"img-responsive\" alt=\"\">\n                    <div class=\"length\">{{ video.length }}</div>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<!-- Portfolio Grid Section -->\n<section id=\"search\" *ngIf=\"videos\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <h2 class=\"test-estilos\">{{ currentWords }}</h2>\n            </div>\n        </div>\n        <div class=\"row videos\">\n            <div *ngFor=\"let video of videos; let i = index\" class=\"col-sm-4 portfolio-item\">\n              <h3><span *ngIf=\"i == 0\" class=\"new\"><i class=\"fa fa-bolt\" aria-hidden=\"true\"></i> NOVO</span> {{ video.title }}</h3>\n              <h5>{{ video.author }}</h5>\n                <a class=\"portfolio-link\" routerLink=\"{{ '/video/' + video.id }}\" routerLinkActive=\"active\">\n                    <img src=\"{{ 'assets/img/' + video.id + '.png' }}\" class=\"img-responsive\" alt=\"\">\n                    <div class=\"length\">{{ video.length }}</div>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<section id=\"sketches\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <h2 class=\"test-estilos\">Sketches</h2>\n            </div>\n        </div>\n        <div class=\"row videos\">\n            <div *ngFor=\"let video of videos, let i = index\" class=\"col-sm-4 portfolio-item\">\n              <h3><span *ngIf=\"i == 0\" class=\"new-dark\"><i class=\"fa fa-bolt\" aria-hidden=\"true\"></i> NOVO</span> {{ video.title }}</h3>\n              <h5>{{ video.author }}</h5>\n                <a class=\"portfolio-link\" routerLink=\"{{ '/video/' + video.id }}\" routerLinkActive=\"active\">\n                    <img src=\"{{ 'assets/img/' + video.id + '.png' }}\" class=\"img-responsive\" alt=\"\">\n                    <div class=\"length\">{{ video.length }}</div>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<!-- Portfolio Grid Section -->\n<section id=\"standup\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <h2 class=\"test-estilos\">Stand Up Comedy</h2>\n            </div>\n        </div>\n        <div class=\"row videos\">\n            <div *ngFor=\"let video of videos, let i = index\" class=\"col-sm-4 portfolio-item\">\n              <h3><span *ngIf=\"i == 0\" class=\"new\"><i class=\"fa fa-bolt\" aria-hidden=\"true\"></i> NOVO</span> {{ video.title }}</h3>\n              <h5>{{ video.author }}</h5>\n                <a class=\"portfolio-link\" routerLink=\"{{ '/video/' + video.id }}\" routerLinkActive=\"active\">\n                    <img src=\"{{ 'assets/img/' + video.id + '.png' }}\" class=\"img-responsive\" alt=\"\">\n                    <div class=\"length\">{{ video.length }}</div>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<div class=\"video-page\" *ngIf=\"mode\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n\n            <div class=\"video-div col-md-7\">\n              <video class=\"mejs-player video-player\" webkit-playsinline playsinline width=\"100%\" height=\"100%\" id=\"video-player\">\n                  <source type=\"video/youtube\" src=\"{{ mode ? 'https://www.youtube.com/watch?v=' + mode : ''}}\">\n                  <track src=\"{{ mode ? ('assets/subtitles/' + mode + '.vtt') : ''}}\" label=\"Portugues\" kind=\"subtitles\" srclang=\"pt\" default=\"\">\n              </video>\n\n              <div class=\"social-media col-xs-12\">\n                <div class=\"rectangle share\">\n                  <div class=\"share-text\">\n                    Compartilhar\n                  </div>\n                </div>\n                <div *ngIf=\"mobile\" class=\"square whatsapp\">\n                  <div class=\"social-media-logo\">\n                    <a\n                    [attr.href]=\"whatsappShare\"\n                    data-action=\"share/whatsapp/share\"\n                    ><i class=\"fa fa-whatsapp\" aria-hidden=\"true\"></i></a>\n                  </div>\n                </div>\n                <div class=\"square facebook\" (click)=\"shareFacebook()\">\n                  <div class=\"social-media-logo\">\n                    <a><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n                  </div>\n                </div>\n                <div class=\"square twitter\">\n                  <div class=\"social-media-logo\">\n                    <a class=\"twitter-share-button\"\n                      href=\"https://twitter.com/share\"\n                      data-size=\"large\"\n                      data-text=\"custom share text\"\n                      data-url=\"https://linktosite\"\n                      data-hashtags=\"example,demo\"\n                      data-via=\"twitterdev\"\n                      data-related=\"twitterapi,twitter\"\n                      target=\"_blank\">\n                      <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                    </a>\n                  </div>\n                </div>\n                <div id=\"gplusShare\" class=\"square google-plus\" (click)=\"shareGPlus()\">\n                  <div class=\"social-media-logo\">\n                      <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"video-info col-xs-12 col-sm-12 col-md-5 col-lg-5\">\n              <span class=\"author\">{{ currentVideo ? currentVideo.author : '' }}</span><br>\n              <span class=\"title\">{{ mode ? currentVideo.title : '' }}</span><br><br>\n              <span class=\"description\">{{ mode ? currentVideo.description : '' }}<br>\n                <a href=\"{{ mode ? 'https://www.youtube.com/watch?v=' + mode : ''}}\" target=\"_blank\">Veja o vídeo no YouTube</a>\n              </span><br><br>\n              <div class=\"next-div\">\n                <span class=\"next\">Próximo vídeo:</span><br>\n                <span class=\"next-video-title\">{{ nextVideo.author + ' - ' + nextVideo.title }}</span><br>\n                <a routerLink=\"{{'/video/' + nextVideo.id}}\" routerLinkActive=\"active\">\n                    <img src=\"{{ 'assets/img/' + nextVideo.id + '.png' }}\" class=\"next-video\" alt=\"\" (click)=\"changeVideo(nextVideo.id)\">\n                    <div class=\"next-video-length\">{{ nextVideo.length }}</div>\n                </a>\n              </div>\n            </div>\n        </div>\n        <div id=\"comments\" class=\"col-xs-12 col-sm-10 col-md-7\">\n          <div *ngIf=\"currentVideo\"\n            class=\"fb-comments\"\n            [attr.data-href]=\"url\"\n            data-numposts=\"3\"\n            data-colorscheme=\"light\"\n            data-mobile=\"true\"\n            data-order-by=\"social\">\n          </div>\n        </div>\n    </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(383);


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Special; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Standups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Sketches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Pranks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return All; });
var Special = {
    author: 'Dov Davidoff',
    title: 'Droga do Amor',
    id: 'XpBE6lt9VWM',
    type: 'Stand Up Comedy',
    description: 'Provando a equação Amor = Drogas',
    length: '2:54'
};
var Standups = [
    // {
    //   author: 'Ismo Leikola',
    //   title: 'Africa',
    //   id: 'vtRaGrIbF6Y',
    //   type: 'Stand Up Comedy',
    //   description: 'Minha mãe me dizia pra comer tudo porque tem fome na Africa',
    //   length: '1:05',
    //   views: 56067
    // },
    // {
    //   author: 'Dan Levy',
    //   title: 'Justin Timberlake',
    //   id: 'lD91Fv9Zg6s',
    //   type: 'Stand Up Comedy',
    //   description: 'O dia em que encontrei o Justin Timberlake',
    //   length: '2:29',
    //   views: 157855
    // },
    {
        author: 'Erik Myers',
        title: 'Viciado Esquisito',
        id: 'I8PxOFol0xI',
        type: 'Stand Up Comedy',
        description: 'Como algumas pessoas se viciam em coisas tão estranhas',
        length: '2:10',
        views: 181764
    },
    {
        author: 'KT Tatara',
        title: 'Mudando a Senha',
        id: 'mHbh9BUdwGY',
        type: 'Stand Up Comedy',
        description: 'Como é chato trocar de senhas na internet',
        length: '3:21'
    },
    {
        author: 'Ismo Leikola',
        title: 'Dinheiro Mudo',
        id: 'LHUQby2BUHA',
        type: 'Stand Up Comedy',
        description: 'Como a língua inglesa tem tantas palavras com letras mudas',
        length: '1:11',
        views: 90083
    },
    {
        author: 'Dave Chappelle',
        title: 'Estupro de Homem',
        id: 'LLWlBgj0uOc',
        type: 'Stand Up Comedy',
        description: 'O estuprador de homens de Houston',
        length: '2:10'
    },
    {
        author: 'Dan Levy',
        title: 'O Outro Dan Levy',
        id: 'Ku3y9YQJdFo',
        type: 'Stand Up Comedy',
        description: 'A historia do Dan Levy do Canada, que criou rivalidade com vampiros',
        length: '2:33'
    },
    {
        author: 'Ismo Leikola',
        title: 'Super Homem',
        id: 'uLH_QHTptFg',
        type: 'Stand Up Comedy',
        description: 'É um passaro? É um avião?',
        length: '1:54',
        views: 95115
    },
    {
        author: 'James Smith',
        title: 'Vida de Estrangeiro',
        id: '6byMXj_b_J0',
        type: 'Stand Up Comedy',
        description: 'James Smith conta como foi sua mudança da Australia para os Estados Unidos',
        length: '4:49'
    },
    {
        author: "Chris D'Elia",
        title: 'Risadas de Rapper',
        id: 'pI5LZEn0qEU',
        type: 'Stand Up Comedy',
        description: "Porque rappers riem tanto durante músicas",
        length: '2:15'
    },
    {
        author: "Brooks Wheelan",
        title: 'Pegadinha da Manteiga',
        id: '9O0qZTI5nck',
        type: 'Stand Up Comedy',
        description: "A sensação de acordar com manteiga na cueca",
        length: '3:42'
    },
    {
        author: "Nate Bargatze",
        title: 'Policiais e prostitutas',
        id: 'JYGzd-uakI0',
        type: 'Stand Up Comedy',
        description: "Como contar duas más notícias de uma vez só",
        length: '1:30'
    },
    {
        author: "KT Tatara",
        title: 'Educação Japonesa',
        id: '6s0KD0qFy28',
        type: 'Stand Up Comedy',
        description: "Como os japoneses são uma civilização superior, quase alienígena",
        length: '2:09'
    },
    {
        author: 'Tom Dreesen',
        title: 'Ex Mulher',
        id: 'j1adUEFHWSQ',
        type: 'Stand Up Comedy',
        description: 'Tom Dreesen comenta sobre sua adorável ex mulher',
        length: '1:03'
    }
];
var Sketches = [{
        author: "Whitest Kids U' Know",
        title: 'Irmãos com Armas',
        id: 'j-guAQ5TL6s',
        type: 'Sketches',
        description: "Quando o futuro de nosso país depende de três irmãos",
        length: '2:16'
    },
    {
        author: "Whitest Kids U' Know",
        title: 'Homem Cego',
        id: 'CjCxyruU8NI',
        type: 'Sketches',
        description: "Dois eventos importantes na vida do cara que voltou a enxergar",
        length: '2:18'
    },
    {
        author: "Whitest Kids U' Know",
        title: 'Muleque Dahora',
        id: 'rKFZTRBoZGY',
        type: 'Sketches',
        description: "Aquele pai sem noção",
        length: '0:58'
    },
    {
        author: "Whitest Kids U' Know",
        title: 'Gozando Devagar',
        id: 'nsGnqf3CUW8',
        type: 'Sketches',
        description: "Aquele amigo que não sabe repetir brincadeiras",
        length: '1:42'
    },
    {
        author: "Dead Kevin",
        title: 'Amigo Antigo',
        id: 'qsaPXOqnTNM',
        type: 'Sketches',
        description: "Quando você encontra amigos antigos, mas não se recorda deles",
        length: '3:40'
    },
    {
        author: "Dead Kevin",
        title: 'Telefonema Íntimo',
        id: 'j5mB6iIVgPg',
        type: 'Sketches',
        description: "Aquele cara que não sabe levar na esportiva",
        length: '1:06'
    },
    {
        author: "Dead Kevin",
        title: 'Cosquinhas',
        id: 'Vw54lqm_M3I',
        type: 'Sketches',
        description: "Bullying acima dos limites",
        length: '1:15'
    },
    {
        author: "Dead Kevin",
        title: 'Senha do Wifi',
        id: 'i6mzTID_hck',
        type: 'Sketches',
        description: "Ninguém nunca lembra a senha da internet",
        length: '2:37'
    },
    {
        author: "Dead Kevin",
        title: 'Amigo com Herpes',
        id: 'SRejy2CPAn8&t=7s',
        type: 'Sketches',
        description: "Ninguém quer admitir ter herpes",
        length: '1:35'
    },
    {
        author: "Dead Kevin",
        title: 'Acidente Nojento',
        id: 'kf08gdYpJT8',
        type: 'Sketches',
        description: "Aquela pegadinha que acaba errado, bem errado",
        length: '1:59'
    }
];
var Pranks = [{
        author: "Roman Atwood",
        title: 'Espirro explosivo',
        id: 'nscaesfyGws',
        type: 'Pranks',
        description: "O espirro que se torna alegria da galera",
        length: '2:17'
    },
    {
        author: "Roman Atwood",
        title: 'Matando meu filho',
        id: 'z7HxiMWVL4g',
        type: 'Pranks',
        description: "Minha mulher ficou enfurecida comigo depois disso",
        length: '2:26'
    },
    {
        author: "VitalyzdTv",
        title: 'O Fim do Mundo',
        id: 'i3_YFwUJ2J8&t=94s',
        type: 'Pranks',
        description: "Avisando as pessoas na rua que um tsunami ta chegando",
        length: '3:56'
    },
    {
        author: "Andrew Hales",
        title: 'Dançando Sozinho',
        id: 'xHhMUh1qLv4',
        type: 'Pranks',
        description: "A reação das pessoas ao aceitarem fazer um favor",
        length: '2:50'
    },
    {
        author: "Andrew Hales",
        title: 'Dando as Mãos',
        id: 'W27pfiRg5WQ',
        type: 'Pranks',
        description: "Um estranho tentando segurar sua mão, o que você faz?",
        length: '2:01'
    },
    {
        author: "Andrew Hales",
        title: 'Tinder Vergonhoso',
        id: 'eDWMaD4jr7A',
        type: 'Pranks',
        description: "Fingindo que deu match com meninas desconhecidas",
        length: '3:21'
    }
];
var All = Standups.concat(Sketches).concat(Pranks).concat([Special]);
//# sourceMappingURL=/Users/jramia/Documents/development/portfolio/standup-server/public/src/videos.js.map

/***/ })

},[704]);
//# sourceMappingURL=main.bundle.map