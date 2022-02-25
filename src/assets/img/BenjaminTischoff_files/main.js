(self["webpackChunkbenjamin_tischoff"] = self["webpackChunkbenjamin_tischoff"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 4, vars: 0, consts: [[1, "body"], [1, "picture"], ["src", "/assets/img/Benjamin-Tischoff.png"], [1, "text"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".body[_ngcontent-%COMP%] {\n  margin-left: 150px;\n  margin-right: 150px;\n}\n\n.picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssa0JBQUE7RUFDQSxtQkFBQTtBQUNMOztBQUtJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUZSIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICAgICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gICAgIG1hcmdpbi1yaWdodDogMTUwcHg7XG59XG5cblxuLnBpY3R1cmUge1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _site_hello_site_hello_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-hello/site-hello.component */ 6761);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills/skills.component */ 5490);
/* harmony import */ var _mywork_mywork_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mywork/mywork.component */ 2855);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ 698);






class AppComponent {
    constructor() {
        this.title = 'benjamin-tischoff';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "body"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-site-hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-mywork");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _site_hello_site_hello_component__WEBPACK_IMPORTED_MODULE_1__.SiteHelloComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__.SkillsComponent, _mywork_mywork_component__WEBPACK_IMPORTED_MODULE_3__.MyworkComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent], styles: [".body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _site_hello_site_hello_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site-hello/site-hello.component */ 6761);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills/skills.component */ 5490);
/* harmony import */ var _mywork_mywork_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mywork/mywork.component */ 2855);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ 698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _site_hello_site_hello_component__WEBPACK_IMPORTED_MODULE_3__.SiteHelloComponent,
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__.SkillsComponent,
        _mywork_mywork_component__WEBPACK_IMPORTED_MODULE_5__.MyworkComponent,
        _about_about_component__WEBPACK_IMPORTED_MODULE_6__.AboutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 0, consts: [[1, "head"], [1, "navigation"], ["src", "/assets/img/logo.png"], ["href", "#"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Meine Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Meine Arbeiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00DCber mich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Datenschutzerkl\u00E4rung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".head[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  height: 70px;\n  display: flex;\n  box-shadow: 0 1px 3px #fff3;\n  padding-bottom: 14px;\n  padding-top: 16px;\n  z-index: 2;\n}\n.head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 80px;\n  width: 48px;\n  height: 50px;\n}\n.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n.navigation[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  color: white;\n  text-decoration: none;\n  font-family: sans-serif;\n  font-size: x-small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFUjtBQUNRO0VBQ0ksWUFBQTtBQUNaO0FBTUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQUtJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSFIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4ICNmZmYzO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgaW1nIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgXG5cbn1cblxuLm5hdmlnYXRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIFxuICAgIGEge1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XG4gICAgICAgIFxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2855:
/*!********************************************!*\
  !*** ./src/app/mywork/mywork.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyworkComponent": () => (/* binding */ MyworkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class MyworkComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyworkComponent.ɵfac = function MyworkComponent_Factory(t) { return new (t || MyworkComponent)(); };
MyworkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyworkComponent, selectors: [["app-mywork"]], decls: 17, vars: 0, consts: [[1, "mywork-body"], [1, "first-row"], [1, "window1"], ["src", "/assets/img/comp.png", 1, "computer"], ["src", "/assets/img/Polloloco.png", 1, "pollo"], [1, "window"], ["src", "/assets/img/kochwelt.png", 1, "kochwelt"], ["src", "/assets/img/kanban.png", 1, "kanban"], ["src", "/assets/img/tictactoe.png", 1, "tictactoe"]], template: function MyworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Meine Arbeiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mywork-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 30px;\n}\n.mywork-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  color: #d8d8d8;\n  font-family: sans-serif;\n  font-weight: 600;\n  font-size: x-large;\n  z-index: 1;\n  margin-bottom: 32px;\n}\n.first-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.computer[_ngcontent-%COMP%] {\n  width: 249px;\n  height: 260px;\n  filter: invert(1);\n  background-color: white;\n  margin-top: -45px;\n}\n.pollo[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 138px;\n  margin-bottom: 81px;\n  margin-left: -239px;\n  transform: scale(0.7);\n  z-index: 5;\n}\n.kochwelt[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 138px;\n  margin-bottom: 81px;\n  margin-left: -239px;\n  transform: scale(0.7);\n  z-index: 5;\n}\n.kanban[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 138px;\n  margin-bottom: 81px;\n  margin-left: -239px;\n  transform: scale(0.7);\n  z-index: 5;\n}\n.tictactoe[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 138px;\n  margin-bottom: 81px;\n  margin-left: -239px;\n  transform: scale(0.7);\n  z-index: 5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15d29yay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtBQUFKO0FBRUk7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUdBO0VBQ0ksYUFBQTtBQUFKO0FBT0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUpKO0FBT0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFKSjtBQU9BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBSko7QUFPQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQUpKO0FBT0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFKSiIsImZpbGUiOiJteXdvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXl3b3JrLWJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgaDEge1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG59XG4uZmlyc3Qtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5cblxuXG5cbi5jb21wdXRlciB7XG4gICAgd2lkdGg6IDI0OXB4O1xuICAgIGhlaWdodDogMjYwcHg7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxKTtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAtNDVweDtcbn1cblxuLnBvbGxvIHtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgaGVpZ2h0OiAxMzhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4MXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjM5cHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICAgIHotaW5kZXg6IDU7XG59XG5cbi5rb2Nod2VsdCB7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIGhlaWdodDogMTM4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogODFweDtcbiAgICBtYXJnaW4tbGVmdDogLTIzOXB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgICB6LWluZGV4OiA1O1xufVxuXG4ua2FuYmFuIHtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgaGVpZ2h0OiAxMzhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4MXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjM5cHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICAgIHotaW5kZXg6IDU7XG59XG5cbi50aWN0YWN0b2Uge1xuICAgIHdpZHRoOiAyMzBweDtcbiAgICBoZWlnaHQ6IDEzOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDgxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMzlweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgei1pbmRleDogNTtcbn0iXX0= */"] });


/***/ }),

/***/ 6761:
/*!****************************************************!*\
  !*** ./src/app/site-hello/site-hello.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteHelloComponent": () => (/* binding */ SiteHelloComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SiteHelloComponent {
    constructor() { }
    ngOnInit() {
    }
}
SiteHelloComponent.ɵfac = function SiteHelloComponent_Factory(t) { return new (t || SiteHelloComponent)(); };
SiteHelloComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SiteHelloComponent, selectors: [["app-site-hello"]], decls: 16, vars: 0, consts: [[1, "hello-body"], [1, "text"], [1, "name-color"], [1, "e-color"], ["src", "/assets/img/Benjamin Tischoff.jpg"], [1, "arrow-container"], ["src", "/assets/img/arrow.png"]], template: function SiteHelloComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Darf ich mich vorstellen?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Benjamin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Tischoff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Front End Develop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "r ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".hello-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(75vh - 100px);\n  margin-top: 67px;\n}\n.hello-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #d8d8d8;\n  width: 100%;\n  font-family: sans-serif;\n  font-weight: 600;\n  font-size: xx-large;\n  margin-bottom: 16px;\n  line-height: 150%;\n  margin-right: 25px;\n}\n.hello-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .name-color[_ngcontent-%COMP%] {\n  color: #ff326f;\n}\n.hello-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .e-color[_ngcontent-%COMP%] {\n  color: #31fcb8;\n}\n.hello-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  border-radius: 70px;\n  margin-left: 100px;\n}\n.arrow-container[_ngcontent-%COMP%] {\n  background-color: black;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  height: 150px;\n}\n.arrow-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUtaGVsbG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUFRO0VBQ0ksY0FBQTtBQUVaO0FBQ1E7RUFDSSxjQUFBO0FBQ1o7QUFHSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRFI7QUFLQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUZKO0FBSUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUZSIiwiZmlsZSI6InNpdGUtaGVsbG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVsbG8tYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogY2FsYyg3NXZoIC0gMTAwcHgpO1xuICAgIG1hcmdpbi10b3A6IDY3cHg7XG4gICAgXG4gICAgaDEge1xuICAgICAgICBjb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgICAgIC5uYW1lLWNvbG9yIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCA1MCwgMTExKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lLWNvbG9yIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNDksIDI1MiwgMTg0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNzBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIH1cbn1cblxuLmFycm93LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGhlaWdodDogMTUwcHg7XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cblxufVxuIl19 */"] });


/***/ }),

/***/ 5490:
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 43, vars: 0, consts: [[1, "skills-body"], [1, "skills-container"], [1, "two-skills"], [1, "skill"], ["src", "/assets/img/html.png", 1, "html"], ["src", "/assets/img/javascript.png"], [1, "jira", "skill"], ["src", "/assets/img/testing.png"], ["src", "/assets/img/css.png"], ["src", "/assets/img/typescript.png"], ["src", "/assets/img/lila.png", 1, "lila"], ["src", "/assets/img/angular.png"], ["src", "/assets/img/git.png"], ["src", "/assets/img/scrum.png", 1, "git"], [1, "scrum"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Meine F\u00E4higkeiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Jacascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Softwaretesting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "CSS/SCSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Jira/Confluence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Scrum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".skills-body[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 50px;\n}\n.skills-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  color: #d8d8d8;\n  font-family: sans-serif;\n  font-weight: 600;\n  font-size: x-large;\n  margin-bottom: 60px;\n}\n.skills-container[_ngcontent-%COMP%] {\n  width: calc(100vw - 50px);\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.skill[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background-color: bisque;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 10px 0px 70px 0px;\n}\n.skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.git[_ngcontent-%COMP%] {\n  transform: scale(2);\n  margin-top: 18px;\n}\n.lila[_ngcontent-%COMP%] {\n  transform: scale(1.4);\n}\n.scrum[_ngcontent-%COMP%] {\n  margin-top: 22px;\n}\np[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  color: white;\n  margin-top: 8px;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0k7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNSO0FBR0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFKO0FBS0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUZKO0FBTUk7RUFDSSxXQUFBO0FBSlI7QUFTQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVdBO0VBQ0kscUJBQUE7QUFSSjtBQVdBO0VBQ0ksZ0JBQUE7QUFSSjtBQVdBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFSSiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGxzLWJvZHkge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuXG4gICAgaDEge1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICB9XG59XG5cbi5za2lsbHMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDUwcHgpOyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5cblxuLnNraWxsIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCAwcHggNzBweCAwcHg7XG5cbiAgICBcblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgIFxuICAgIH1cbn1cblxuLmdpdHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG5cbiAgICBcbn1cblxuLmxpbGEge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbn1cblxuLnNjcnVtIHtcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xufVxuXG5we1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgei1pbmRleDogMTtcbn0iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6461:
/*!***************************************************************!*\
  !*** ./node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./log": 708
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6461;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3208), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map