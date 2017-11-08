webpackJsonp([1,5],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_speech_speech_search_speech_search_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_speech_speech_submit_speech_submit_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_speech_speech_list_speech_list_component__ = __webpack_require__(143);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });



var routes = [
    { path: 'list',
        linkText: 'View my Speeches',
        iconClass: 'fa fa-list-alt',
        component: __WEBPACK_IMPORTED_MODULE_2__components_speech_speech_list_speech_list_component__["a" /* SpeechListComponent */] },
    { path: 'submit',
        linkText: 'Submit a new Speech',
        iconClass: 'fa fa-plus-square-o',
        component: __WEBPACK_IMPORTED_MODULE_1__components_speech_speech_submit_speech_submit_component__["a" /* SpeechSubmitComponent */] },
    { path: 'search',
        linkText: 'Search all Speeches',
        iconClass: 'fa fa-search',
        component: __WEBPACK_IMPORTED_MODULE_0__components_speech_speech_search_speech_search_component__["a" /* SpeechSearchComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_speech_speech_list_speech_list_component__["a" /* SpeechListComponent */] }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__speech_model__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_speech_api_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeechListComponent = (function () {
    function SpeechListComponent(api) {
        this.api = api;
        this.selectedSpeech = new __WEBPACK_IMPORTED_MODULE_0__speech_model__["a" /* Speech */]();
        this.selectedIndex = -1;
    }
    SpeechListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getSpeechData().then(function (data) {
            if (__WEBPACK_IMPORTED_MODULE_1__core_speech_api_service__["a" /* SpeechApiService */].speeches.length) {
                _this.speechList = __WEBPACK_IMPORTED_MODULE_1__core_speech_api_service__["a" /* SpeechApiService */].speeches;
                _this.speechList.concat(data.data);
                _this.selectedSpeech = _this.speechList[0];
                _this.selectedIndex = 0;
            }
            else {
                _this.speechList = data.data;
                _this.selectedSpeech = _this.speechList[0];
                _this.selectedIndex = 0;
                __WEBPACK_IMPORTED_MODULE_1__core_speech_api_service__["a" /* SpeechApiService */].speeches = _this.speechList;
            }
        });
    };
    SpeechListComponent.prototype.removeSpeech = function () {
        this.speechList.splice(this.selectedIndex, 1);
        __WEBPACK_IMPORTED_MODULE_1__core_speech_api_service__["a" /* SpeechApiService */].speeches = this.speechList;
        __WEBPACK_IMPORTED_MODULE_1__core_speech_api_service__["a" /* SpeechApiService */].update();
    };
    SpeechListComponent.prototype.selectSpeech = function (item, idx) {
        this.selectedSpeech = item;
        this.selectedIndex = idx;
    };
    return SpeechListComponent;
}());
SpeechListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* Component */])({
        selector: 'app-speech-list',
        template: __webpack_require__(268),
        styles: [__webpack_require__(255)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_speech_api_service__["a" /* SpeechApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_speech_api_service__["a" /* SpeechApiService */]) === "function" && _a || Object])
], SpeechListComponent);

var _a;
//# sourceMappingURL=speech-list.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_speech_api_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeechSearchComponent = (function () {
    function SpeechSearchComponent(api) {
        this.api = api;
        this.result = [];
    }
    SpeechSearchComponent.prototype.ngOnInit = function () {
    };
    SpeechSearchComponent.prototype.search = function () {
        this.result = this.api.search(this.seachQuery);
    };
    return SpeechSearchComponent;
}());
SpeechSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'app-speech-search',
        template: __webpack_require__(269),
        styles: [__webpack_require__(256)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__core_speech_api_service__["a" /* SpeechApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__core_speech_api_service__["a" /* SpeechApiService */]) === "function" && _a || Object])
], SpeechSearchComponent);

var _a;
//# sourceMappingURL=speech-search.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_speech_api_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speech_model__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechSubmitComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpeechSubmitComponent = (function () {
    function SpeechSubmitComponent(router) {
        this.router = router;
        this.newSpeech = new __WEBPACK_IMPORTED_MODULE_2__speech_model__["a" /* Speech */]();
    }
    SpeechSubmitComponent.prototype.ngOnInit = function () {
    };
    SpeechSubmitComponent.prototype.onSpeechSave = function (item) {
        __WEBPACK_IMPORTED_MODULE_1__core_speech_api_service__["a" /* SpeechApiService */].speeches.push(item);
        __WEBPACK_IMPORTED_MODULE_1__core_speech_api_service__["a" /* SpeechApiService */].update();
        this.router.navigate(['/list']);
    };
    return SpeechSubmitComponent;
}());
SpeechSubmitComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_5" /* Component */])({
        selector: 'app-speech-submit',
        template: __webpack_require__(270),
        styles: [__webpack_require__(257)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object])
], SpeechSubmitComponent);

var _a;
//# sourceMappingURL=speech-submit.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 174;


/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(195);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routes__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.routesList = __WEBPACK_IMPORTED_MODULE_0__app_routes__["a" /* routes */];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(264),
        styles: [__webpack_require__(251)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_speech_speech_edit_speech_edit_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_speech_api_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_speech_speech_search_speech_search_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_speech_speech_submit_speech_submit_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_speech_speech_list_speech_list_component__ = __webpack_require__(143);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_speech_speech_search_speech_search_component__["a" /* SpeechSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_speech_speech_submit_speech_submit_component__["a" /* SpeechSubmitComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_speech_speech_list_speech_list_component__["a" /* SpeechListComponent */],
            __WEBPACK_IMPORTED_MODULE_0__components_speech_speech_edit_speech_edit_component__["a" /* SpeechEditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__core_speech_api_service__["a" /* SpeechApiService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 192:
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
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(265),
        styles: [__webpack_require__(252)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "routes", void 0);
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(266),
        styles: [__webpack_require__(253)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speech_model__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeechEditComponent = (function () {
    function SpeechEditComponent(modalService) {
        this.modalService = modalService;
        this.title = '';
        this.onSpeechDelete = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* EventEmitter */]();
        this.onSpeechSave = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* EventEmitter */]();
    }
    SpeechEditComponent.prototype.ngOnInit = function () {
        emailjs.init("user_IBVTOHnPRneri0GSLQXdA");
    };
    SpeechEditComponent.prototype.onSave = function () {
        this.onSpeechSave.emit(this.speech);
    };
    SpeechEditComponent.prototype.sendSpeechToEmail = function (reply_to) {
        if (!reply_to || reply_to.trim() === '') {
            this.modalRef.close();
            return;
        }
        emailjs.send("gmail", "template_5jjMU201", {
            "reply_to": reply_to,
            "from_name": "speech-app@gmail.com",
            "title": this.speech.title,
            "author": this.speech.author,
            "date": this.speech.date.day + "/" + this.speech.date.month + "/" + this.speech.date.year,
            "message_html": this.speech.content
        });
        this.shareSpeech();
        this.modalRef.close();
    };
    SpeechEditComponent.prototype.open = function (content) {
        var _this = this;
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    SpeechEditComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    SpeechEditComponent.prototype.shareSpeech = function () {
        this.speech.isShared = !this.speech.isShared;
    };
    SpeechEditComponent.prototype.removeSpeech = function () {
        this.onSpeechDelete.emit();
    };
    return SpeechEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__speech_model__["a" /* Speech */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__speech_model__["a" /* Speech */]) === "function" && _a || Object)
], SpeechEditComponent.prototype, "speech", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], SpeechEditComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], SpeechEditComponent.prototype, "hideDeleteBtn", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], SpeechEditComponent.prototype, "hideShareBtn", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_4" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], SpeechEditComponent.prototype, "onSpeechDelete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_4" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* EventEmitter */]) === "function" && _c || Object)
], SpeechEditComponent.prototype, "onSpeechSave", void 0);
SpeechEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* Component */])({
        selector: 'speech-edit',
        template: __webpack_require__(267),
        styles: [__webpack_require__(254)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _d || Object])
], SpeechEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=speech-edit.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports = "<app-navbar\n  [routes]=\"routesList\"\n></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">AppSpeech</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#appNavBar\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"appNavBar\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n\n      <li class=\"nav-item\" *ngFor=\"let route of routes\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"{{route.path}}\">\n              <i class=\"{{route.iconClass}}\" *ngIf=\"route.iconClass\" aria-hidden=\"true\"></i> {{ route.linkText }}\n          </a>\n      </li>\n\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = "\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Share speech</h4>\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n              <div class=\"input-group\">\n                  <input type=\"email\" class=\"form-control\" [(ngModel)]=\"reply_to\" placeholder=\"Email\" aria-label=\"Search for...\">\n                  <span class=\"input-group-btn\">\n                    <button class=\"btn btn-info\" (click)=\"sendSpeechToEmail(reply_to)\" type=\"button\">Send</button>\n                  </span>\n                </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n        </div>\n      </ng-template>\n\n<div class=\"card card-default\">\n    <div class=\"card-header\">\n      <div class=\"card-title\">\n          <i class=\"fa fa-file-text\" aria-hidden=\"true\"></i> {{ title }}\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <input type=\"text\" placeholder=\"Type title here\" [(ngModel)]=\"speech.title\" class=\"form-control mb-2\" >\n      <textarea\n        placeholder=\"Type speech content here\"\n        class=\"form-control\"\n        name=\"\" id=\"\"\n        cols=\"30\"\n        [(ngModel)]=\"speech.content\"\n        rows=\"10\"></textarea>\n      <div class=\"row mt-2\">\n        <div class=\"col-sm\">\n          <input type=\"text\" placeholder=\"Author\" [(ngModel)]=\"speech.author\" class=\"form-control\">\n        </div>\n        <div class=\"col-sm\">\n          <input type=\"text\" placeholder=\"Subject area keywords\" [(ngModel)]=\"speech.subject\" class=\"form-control\">\n        </div>\n        <div class=\"col-sm\">\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                         name=\"dp\" [(ngModel)]=\"speech.date\" ngbDatepicker #d=\"ngbDatepicker\">\n                  <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\n                      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-footer text-right\">\n        <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"!hideDeleteBtn\" (click)=\"removeSpeech()\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> Delete</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSave()\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Save</button>\n        <button type=\"button\" class=\"btn btn-success\" *ngIf=\"!hideShareBtn\" [disabled]=\"speech.isShared\" (click)=\"open(content)\"><i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i> Share</button>\n    </div>\n  </div>\n"

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container mt-3\">\n  <h1>View my Speeches</h1>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card card-default\">\n        <div class=\"card-header\">\n          <div class=\"card-title\">\n              <i class=\"fa fa-list-ul\" aria-hidden=\"true\"></i> Speeches list\n          </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"list-group\">\n                <button type=\"button\" *ngFor=\"let speech of speechList; let i = index\"\n                    (click)=\"selectSpeech(speech, i)\"\n                    [ngClass]=\"{'active': i == selectedIndex}\"\n                    class=\"list-group-item list-group-item-action\">\n                    <i class=\"fa fa-file-word-o\" aria-hidden=\"true\"></i> {{ speech.title }} \n                    <span *ngIf=\"speech.isShared\" class=\"badge badge-success\">Shared</span>\n                </button>\n            </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n      <speech-edit\n        [speech]=\"selectedSpeech\"\n        title=\"Speech content\"\n        (onSpeechDelete)=\"removeSpeech()\">\n      </speech-edit>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <h1>Search speech</h1>\n  <div class=\"row\">\n      <div class=\"col-md\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"seachQuery\" placeholder=\"Search for...\" aria-label=\"Search for...\">\n            <span class=\"input-group-btn\">\n              <button class=\"btn btn-info\" (click)=\"search()\" type=\"button\">\n                  <i class=\"fa fa-search\" aria-hidden=\"true\"></i> Search\n              </button>\n            </span>\n          </div>\n          <div class=\"list-group mt-2\">\n              <a href=\"javascriot:void(0)\" *ngFor=\"let speech of result; let i = index\"\n                  [ngClass]=\"{'active': i == selectedIndex}\"\n                  class=\"list-group-item list-group-item-action\">\n                  <i class=\"fa fa-file-word-o\" aria-hidden=\"true\"></i> {{ speech.title }} <span *ngIf=\"speech.isShared\" class=\"badge badge-success\">Shared</span>\n              </a>\n          </div>\n          <div class=\"alert alert-info\" *ngIf=\"!result.length\" role=\"alert\">\n              Please type search query and click Search button\n            </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n    <h1>Submit a new Speech</h1>\n    <div class=\"row\">\n        <div class=\"col-md\">\n          <speech-edit\n            [hideDeleteBtn]=\"true\"\n            [hideShareBtn]=\"true\"\n            [speech]=\"newSpeech\"\n            (onSpeechSave)=\"onSpeechSave($event)\"\n            title=\"Create new speech\"></speech-edit>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(175);


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpeechApiService = SpeechApiService_1 = (function () {
    function SpeechApiService() {
        this.getSpeechData()
            .then(function (data) {
            var speeches = localStorage.getItem('speeches');
            if (speeches) {
                try {
                    SpeechApiService_1.speeches = JSON.parse(speeches);
                }
                catch (e) {
                    console.log('Parse speeches error !');
                }
            }
            else {
                SpeechApiService_1.speeches = data.data;
                localStorage.setItem('speeches', JSON.stringify(data.data));
            }
        });
    }
    SpeechApiService.update = function () {
        localStorage.setItem('speeches', JSON.stringify(SpeechApiService_1.speeches));
    };
    SpeechApiService.prototype.getSpeechData = function () {
        return fetch('assets/data.json')
            .then(function (res) {
            return res.json();
        });
    };
    SpeechApiService.prototype.search = function (query) {
        var result = SpeechApiService_1.speeches.filter(function (item) {
            return item.title.includes(query) || item.content.includes(query) || item.subject.includes(query);
        });
        return result;
    };
    return SpeechApiService;
}());
SpeechApiService.speeches = [];
SpeechApiService = SpeechApiService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SpeechApiService);

var SpeechApiService_1;
//# sourceMappingURL=speech-api.service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Speech; });
var Speech = (function () {
    function Speech(title, author) {
        this.title = title;
        this.author = author;
    }
    return Speech;
}());

;
//# sourceMappingURL=speech.model.js.map

/***/ })

},[326]);
//# sourceMappingURL=main.bundle.js.map