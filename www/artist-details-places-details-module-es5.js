(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["artist-details-places-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/artist/details/places-details.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/artist/details/places-details.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories/travel\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Travel Details</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"travel-details-content\">\n<ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button >\n      <ion-back-button ion-fab-button defaultHref=\"app/user\"></ion-back-button>\n    <!-- <ion-icon name=\"arrow-back\"></ion-icon> -->\n  </ion-fab-button>\n</ion-fab>\n  <ion-row class=\"image-row\">\n     \n          \n    <ion-col size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"add-overlay details-image\" [src]=\"'./assets/sample-images/xage.jpg'\">\n        <app-aspect-ratio [ratio]=\"{w:64, h:50}\">\n          <span class=\"checkbox-subtitle1\">Xage Mode</span>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n\n  </ion-row>\n  <ion-row class=\"description-row\">\n    <ion-col size=\"12\">\n      <!-- <h3 class=\"details-name\">\n        <app-text-shell animation=\"bouncing\" [data]=\"''\"></app-text-shell>\n      </h3> -->\n      <p class=\"details-short-description\">\n        <app-text-shell  animation=\"bouncing\" [data]=\"'Top Songs'\"></app-text-shell>\n      </p>\n    </ion-col>\n\n  \n   \n </ion-row>\n\n\n <ion-item class=\"notification-item\" lines=\"none\">\n  <ion-row class=\"notification-item-wrapper\">\n  \n    <ion-col class=\"details-wrapper\">\n      <h2 class=\"details-name\">Astrothunder</h2>\n      <p class=\"details-description\">Travis Scott ■ ASTROWORLD</p>\n    </ion-col>\n    <ion-col size=\"2\" class=\"date-wrapper\">\n      <h3 class=\"notification-date\">02:03</h3>\n    </ion-col>\n  </ion-row>\n</ion-item>\n\n<ion-item class=\"notification-item\" lines=\"none\">\n  <ion-row class=\"notification-item-wrapper\">\n  \n    <ion-col class=\"details-wrapper\">\n      <h2 class=\"details-name\">Astrothunder</h2>\n      <p class=\"details-description\">Travis Scott ■ ASTROWORLD</p>\n    </ion-col>\n    <ion-col size=\"2\" class=\"date-wrapper\">\n      <h3 class=\"notification-date\">02:03</h3>\n    </ion-col>\n  </ion-row>\n</ion-item>\n\n\n<ion-row class=\"description-row\">\n  <ion-col size=\"12\">\n    <!-- <h3 class=\"details-name\">\n      <app-text-shell animation=\"bouncing\" [data]=\"''\"></app-text-shell>\n    </h3> -->\n    <p class=\"details-short-description\">\n      <app-text-shell  animation=\"bouncing\" [data]=\"'Albums'\"></app-text-shell>\n    </p>\n    <div class=\"user-friends-section\">\n        <ion-row class=\"friends-row\">\n          <ion-col [routerLink]=\"['/app/user/album']\"class=\"friend-item\" size=\"3\" >\n            <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n              <app-image-shell class=\"friend-picture\" [src]=\"'./assets/sample-images/xage.jpg'\"></app-image-shell>\n            </app-aspect-ratio>\n            <span class=\"friend-name\">\n              <app-text-shell [data]=\"'Xage Mode'\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col [routerLink]=\"['/app/user/album']\"class=\"friend-item\" size=\"3\" >\n            <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n              <app-image-shell class=\"friend-picture\" [src]=\"'./assets/sample-images/xage.jpg'\"></app-image-shell>\n            </app-aspect-ratio>\n            <span class=\"friend-name\">\n              <app-text-shell [data]=\"'Xage Mode'\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col [routerLink]=\"['/app/user/album']\"class=\"friend-item\" size=\"3\" >\n            <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n              <app-image-shell class=\"friend-picture\" [src]=\"'./assets/sample-images/xage.jpg'\"></app-image-shell>\n            </app-aspect-ratio>\n            <span class=\"friend-name\">\n              <app-text-shell [data]=\"'Xage Mode'\"></app-text-shell>\n            </span>\n          </ion-col>\n        </ion-row>\n        </div>\n  </ion-col>\n\n\n \n</ion-row>\n\n\n\n\n<ion-row class=\"description-row\">\n  <ion-col size=\"12\">\n    <!-- <h3 class=\"details-name\">\n      <app-text-shell animation=\"bouncing\" [data]=\"''\"></app-text-shell>\n    </h3> -->\n    <p class=\"details-short-description\">\n      <app-text-shell  animation=\"bouncing\" [data]=\"'Singles & EPs'\"></app-text-shell>\n    </p>\n    <div class=\"user-friends-section\">\n    <ion-row class=\"friends-row\">\n      <ion-col [routerLink]=\"['/app/user/album']\"class=\"friend-item\" size=\"3\" >\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell class=\"friend-picture\" [src]=\"'./assets/sample-images/xage.jpg'\"></app-image-shell>\n        </app-aspect-ratio>\n        <span class=\"friend-name\">\n          <app-text-shell [data]=\"'Xage Mode'\"></app-text-shell>\n        </span>\n      </ion-col>\n      <ion-col [routerLink]=\"['/app/user/album']\"class=\"friend-item\" size=\"3\" >\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell class=\"friend-picture\" [src]=\"'./assets/sample-images/xage.jpg'\"></app-image-shell>\n        </app-aspect-ratio>\n        <span class=\"friend-name\">\n          <app-text-shell [data]=\"'Xage Mode'\"></app-text-shell>\n        </span>\n      </ion-col>\n      <ion-col [routerLink]=\"['/app/user/album']\"class=\"friend-item\" size=\"3\" >\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell class=\"friend-picture\" [src]=\"'./assets/sample-images/xage.jpg'\"></app-image-shell>\n        </app-aspect-ratio>\n        <span class=\"friend-name\">\n          <app-text-shell [data]=\"'Xage Mode'\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n    </div>\n  \n  </ion-col>\n\n\n \n</ion-row>\n\n \n \n<ion-row class=\"description-row\">\n  <ion-col size=\"12\">\n    <!-- <h3 class=\"details-name\">\n      <app-text-shell animation=\"bouncing\" [data]=\"''\"></app-text-shell>\n    </h3> -->\n    <p class=\"details-short-description\">\n      <app-text-shell  animation=\"bouncing\" [data]=\"'About'\"></app-text-shell>\n\n    </p>\n\n    <p class=\"details-description\">\n        <app-text-shell style=\"color:white; font-size: 13px;\" animation=\"bouncing\"  [data]=\"'Hailing from Namuwongo a suburb in the mid city of Uganda ,Kampala, Xage Mode real names Baguma Patrick is a home grown talent of crude bars that hails top of his city with break out hits like Cooperfield '\"></app-text-shell>\n\n    </p>\n  </ion-col>\n\n\n \n</ion-row>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/artist/details/places-details.model.ts":
/*!********************************************************!*\
  !*** ./src/app/artist/details/places-details.model.ts ***!
  \********************************************************/
/*! exports provided: PlacesDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesDetailsModel", function() { return PlacesDetailsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");


var PlacesDetailsModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlacesDetailsModel, _super);
    function PlacesDetailsModel() {
        var _this = _super.call(this) || this;
        _this.tags = new Array(3).fill('');
        _this.openHours = [
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: false,
                hourFrom: '',
                hourTo: ''
            }
        ];
        _this.whereToStay = [
            {
                picture: '',
                name: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                rating: null
            }
        ];
        _this.whereToEat = [
            {
                picture: '',
                name: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                rating: null
            }
        ];
        _this.relatedActivities = [
            {
                picture: '',
                name: '',
                category: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                category: '',
                rating: null
            }
        ];
        return _this;
    }
    return PlacesDetailsModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));



/***/ }),

/***/ "./src/app/artist/details/places-details.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/artist/details/places-details.module.ts ***!
  \*********************************************************/
/*! exports provided: PlacesDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesDetailsPageModule", function() { return PlacesDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _places_details_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./places-details.page */ "./src/app/artist/details/places-details.page.ts");
/* harmony import */ var _places_details_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./places-details.resolver */ "./src/app/artist/details/places-details.resolver.ts");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../places.service */ "./src/app/artist/places.service.ts");











var routes = [
    {
        path: '',
        component: _places_details_page__WEBPACK_IMPORTED_MODULE_8__["PlacesDetailsPage"],
        resolve: {
            data: _places_details_resolver__WEBPACK_IMPORTED_MODULE_9__["PlacesDetailsResolver"]
        }
    }
];
var PlacesDetailsPageModule = /** @class */ (function () {
    function PlacesDetailsPageModule() {
    }
    PlacesDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            declarations: [
                _places_details_page__WEBPACK_IMPORTED_MODULE_8__["PlacesDetailsPage"]
            ],
            providers: [
                _places_details_resolver__WEBPACK_IMPORTED_MODULE_9__["PlacesDetailsResolver"],
                _places_service__WEBPACK_IMPORTED_MODULE_10__["PlacesService"]
            ]
        })
    ], PlacesDetailsPageModule);
    return PlacesDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/artist/details/places-details.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/artist/details/places-details.page.ts ***!
  \*******************************************************/
/*! exports provided: PlacesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesDetailsPage", function() { return PlacesDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PlacesDetailsPage = /** @class */ (function () {
    function PlacesDetailsPage(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.slidesOptions = {
            zoom: {
                toggle: false // Disable zooming to prevent weird double tap zomming on slide images
            }
        };
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.details = _this.router.getCurrentNavigation().extras.state.item;
                console.log(_this.router.getCurrentNavigation().extras.state.item);
            }
        });
    }
    Object.defineProperty(PlacesDetailsPage.prototype, "isShell", {
        get: function () {
            return (this.details && this.details.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    PlacesDetailsPage.prototype.ngOnInit = function () {
        // this.route.data.subscribe((resolvedRouteData) => {
        //   const detailsDataStore = resolvedRouteData['data'];
        //   detailsDataStore.state.subscribe(
        //     (state) => {
        //       this.details = state;
        //     },
        //     (error) => {}
        //   );
        // },
        // (error) => {});
    };
    PlacesDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlacesDetailsPage.prototype, "isShell", null);
    PlacesDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-places-details',
            template: __webpack_require__(/*! raw-loader!./places-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/artist/details/places-details.page.html"),
            styles: [__webpack_require__(/*! ./styles/places-details.page.scss */ "./src/app/artist/details/styles/places-details.page.scss"), __webpack_require__(/*! ./styles/places-details.shell.scss */ "./src/app/artist/details/styles/places-details.shell.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlacesDetailsPage);
    return PlacesDetailsPage;
}());



/***/ }),

/***/ "./src/app/artist/details/places-details.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/artist/details/places-details.resolver.ts ***!
  \***********************************************************/
/*! exports provided: PlacesDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesDetailsResolver", function() { return PlacesDetailsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ "./src/app/artist/places.service.ts");



var PlacesDetailsResolver = /** @class */ (function () {
    function PlacesDetailsResolver(placesService) {
        this.placesService = placesService;
    }
    PlacesDetailsResolver.prototype.resolve = function () {
        var dataSource = this.placesService.getDetailsDataSource();
        var dataStore = this.placesService.getDetailsStore(dataSource);
        return dataStore;
    };
    PlacesDetailsResolver.ctorParameters = function () { return [
        { type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"] }
    ]; };
    PlacesDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"]])
    ], PlacesDetailsResolver);
    return PlacesDetailsResolver;
}());



/***/ }),

/***/ "./src/app/artist/details/styles/places-details.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/artist/details/styles/places-details.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-border-radius: var(--app-fair-radius);\n  --page-tags-vertical-gutter: 2px;\n  --page-tags-horizontal-gutter: 4px;\n  --page-places-gutter: 5px;\n  --page-friends-gutter: calc(var(--page-margin) / 2);\n  --page-color: #00AFFF;\n}\n\n.details-description {\n  line-height: 1.3;\n  font-size: 14px;\n}\n\n.friend-picture {\n  border-radius: var(--page-border-radius);\n}\n\n.user-about-section {\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: var(--page-margin);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n\n.user-about-section .user-description {\n  color: var(--ion-color-dark-shade);\n  text-align: justify;\n  margin: var(--page-margin) 0px;\n  font-size: 14px;\n  line-height: 1.3;\n}\n\n.user-friends-section {\n  padding-bottom: var(--page-margin);\n}\n\n.user-friends-section .heading-row {\n  margin-bottom: var(--page-margin);\n  justify-content: space-between;\n  align-items: center;\n}\n\n.user-friends-section .heading-row .details-section-title {\n  margin: 0px;\n}\n\n.user-friends-section .heading-row .details-section-titleX {\n  width: 100%;\n  font-weight: 500;\n  color: var(--ion-color-light);\n  margin: 0px 0px var(--page-margin);\n  margin: 0px;\n}\n\n.user-friends-section .heading-row .heading-call-to-action {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  text-decoration: none;\n  color: var(--ion-color-secondary);\n}\n\n.user-friends-section .friends-row {\n  --ion-grid-columns: 7;\n  --ion-grid-column-padding: 0px;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  will-change: scroll-position;\n  margin-left: calc(var(--page-margin) * -1);\n  margin-right: calc(var(--page-margin) * -1);\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.user-friends-section .friends-row::-webkit-scrollbar {\n  display: none;\n}\n\n.user-friends-section .friends-row::before, .user-friends-section .friends-row::after {\n  content: \"\";\n  flex: 0 0 calc(var(--page-margin) - var(--page-friends-gutter));\n}\n\n.user-friends-section .friends-row .friend-item {\n  padding: 0px var(--page-friends-gutter);\n}\n\n.user-friends-section .friends-row .friend-item .friend-name {\n  display: block;\n  text-align: center;\n  margin: var(--page-margin) 0px;\n  font-size: 14px;\n  color: white;\n}\n\nion-content {\n  --background: linear-gradient(to top, #060606, #690000);\n}\n\nion-item {\n  --ion-background-color: red !important;\n}\n\n.item, .list, .item-content, .item-complex {\n  --ion-background-color: transparent !important;\n}\n\nion-toolbar {\n  --background: #680000;\n}\n\n.notification-item {\n  --padding-start: 0px;\n  padding: 5px;\n  color: var(--ion-color-medium);\n  box-shadow: inset 0 8px 2px -9px var(--ion-color-darkest);\n}\n\n.notification-item .notification-item-wrapper {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  align-items: center;\n}\n\n.notification-item .details-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding-left: var(--page-margin);\n}\n\n.notification-item .details-wrapper .details-name {\n  margin-top: 0px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-secondary);\n}\n\n.notification-item .details-wrapper .details-description {\n  font-size: 12px;\n  margin: 0px;\n}\n\n.notification-item .date-wrapper {\n  align-self: flex-start;\n}\n\n.notification-item .date-wrapper .notification-date {\n  margin: 0px;\n  font-size: 12px;\n  text-align: end;\n}\n\n.checkbox-subtitle1 {\n  font-weight: 500;\n  font-size: 25px;\n  color: var(--ion-color-lightest);\n  word-break: break-word;\n  overflow: visible;\n  position: absolute;\n  width: 70%;\n  left: 4%;\n  top: 93%;\n  transform: translateY(-50%);\n}\n\n.travel-details-content .image-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.travel-details-content .image-row .icon-wrapper {\n  margin: 0px 15%;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.travel-details-content .description-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n  padding-bottom: 0px;\n}\n\n.travel-details-content .description-row .details-name {\n  margin: 0px;\n  font-size: 20px;\n}\n\n.travel-details-content .description-row .details-short-description {\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: var(--page-margin);\n  font-size: 14px;\n  color: var(--ion-color-light);\n  font-weight: 600;\n  text-decoration: underline;\n}\n\n.travel-details-content .description-row .details-score {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: var(--page-margin);\n}\n\n.travel-details-content .description-row .details-score .score-item {\n  display: flex;\n  align-items: center;\n}\n\n.travel-details-content .description-row .details-score .score-item:not(:last-child) {\n  padding-right: var(--page-margin);\n}\n\n.travel-details-content .description-row .details-score .score-item .score-icon {\n  font-size: 24px;\n  color: var(--ion-color-dark-tint);\n}\n\n.travel-details-content .description-row .details-score .score-item .score-value {\n  font-size: 16px;\n  margin-left: 4px;\n}\n\n.travel-details-content .description-row .details-tags {\n  --ion-grid-column-padding: 0px;\n  justify-content: center;\n  margin-top: calc(var(--page-tags-vertical-gutter) * -1);\n}\n\n.travel-details-content .description-row .details-tags .tag-wrapper {\n  padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter) var(--page-tags-vertical-gutter) 0px;\n  flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.travel-details-content .description-row .details-tags .tag-wrapper:last-child {\n  padding-right: 0px;\n}\n\n.travel-details-content .description-row .details-tags .item-tag {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 1px solid var(--ion-color-light-shade);\n  padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter);\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.travel-details-content .description-row .details-description {\n  line-height: 1.3;\n  font-size: 14px;\n}\n\n.travel-details-content .detail-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-dark-tint);\n  margin: 0px 0px var(--page-margin);\n}\n\n.travel-details-content .open-hours-wrapper {\n  padding: 0px var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item {\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item + .open-hour-item {\n  margin-top: calc(var(--page-margin) / 2);\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 75%;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-day {\n  display: block;\n  padding-right: var(--page-margin);\n  width: 40%;\n  font-size: 14px;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-separator {\n  margin: 0px var(--page-margin);\n  line-height: 1;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value {\n  flex: 0 1 25%;\n  font-weight: 500;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value:first-child {\n  text-align: start;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value:last-child {\n  text-align: end;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-closed {\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\n.travel-details-content .location-wrapper {\n  padding: 0px 0px calc(var(--page-margin) * 2);\n}\n\n.travel-details-content .location-wrapper .location-header {\n  padding: 0px var(--page-margin) 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.travel-details-content .location-wrapper .detail-title {\n  margin-bottom: 5px;\n}\n\n.travel-details-content .location-wrapper .location-address {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.travel-details-content .detail-alt-title {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--ion-color-dark-shade);\n  margin: 0px 0px var(--page-margin);\n}\n\n.travel-details-content .suggested-places-wrapper {\n  padding: 0px var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row {\n  --ion-grid-column-padding: var(--page-places-gutter);\n  margin-left: calc(var(--page-places-gutter) * -1);\n  margin-right: calc(var(--page-places-gutter) * -1);\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place {\n  display: flex;\n  flex-direction: column;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-name {\n  font-size: 12px;\n  font-weight: 400;\n  margin: calc(var(--page-margin) / 2) 0px 5px;\n  text-align: center;\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-rating {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-rating .rating-icon {\n  color: var(--page-color);\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-rating .rating-value {\n  color: var(--page-color);\n  font-size: 14px;\n  margin-left: 4px;\n}\n\n.travel-details-content .related-activities-wrapper {\n  padding: 0px 0px calc(var(--page-margin) * 2);\n}\n\n.travel-details-content .related-activities-wrapper .related-activity {\n  --ion-grid-column-padding: 0px;\n}\n\n.travel-details-content .related-activities-wrapper .related-activity:not(:last-child) {\n  margin-bottom: var(--page-margin);\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details {\n  text-align: center;\n  position: relative;\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-name {\n  margin: 0px;\n  margin-top: 5px;\n  font-size: 14px;\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-category {\n  display: block;\n  margin-top: 2px;\n  font-size: 12px;\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-rating {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: 5px;\n  margin-right: var(--page-margin);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-rating .rating-icon {\n  color: var(--page-color);\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-rating .rating-value {\n  color: var(--page-color);\n  font-size: 14px;\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aXN0L2RldGFpbHMvc3R5bGVzL0Q6XFxzaGl0XFxwb2QtY3JlYXRvci9zcmNcXGFwcFxcYXJ0aXN0XFxkZXRhaWxzXFxzdHlsZXNcXHBsYWNlcy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXJ0aXN0L2RldGFpbHMvc3R5bGVzL3BsYWNlcy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXJ0aXN0L2RldGFpbHMvc3R5bGVzL0Q6XFxzaGl0XFxwb2QtY3JlYXRvci9zcmNcXHRoZW1lXFxtaXhpbnNcXHNjcm9sbGJhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUVBLG1EQUFBO0VBRUEscUJBQUE7QUNKRjs7QURRQTtFQUVFLGdCQUFBO0VBQ0EsZUFBQTtBQ05GOztBRFNBO0VBQ0Usd0NBQUE7QUNORjs7QURTQTtFQUNFLDBFQUFBO0VBQ0Esa0NBQUE7RUFDQSxxREFBQTtBQ05GOztBRFFFO0VBQ0Usa0NBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTko7O0FEVUE7RUFFRSxrQ0FBQTtBQ1JGOztBRFdFO0VBQ0UsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDVEo7O0FEV0k7RUFFRSxXQUFBO0FDVk47O0FEYUk7RUFDRSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtBQ1pOOztBRGVJO0VBQ0Usa0VBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FDYk47O0FEaUJFO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7RUU3RUYsd0JBQUE7RUFHQSw4QkFBQTtFQUNBLHFCQUFBO0FENERGOztBQ3pERTtFQUNFLGFBQUE7QUQyREo7O0FEY0k7RUFFRSxXQUFBO0VBRUEsK0RBQUE7QUNkTjs7QURpQkk7RUFDRSx1Q0FBQTtBQ2ZOOztBRGlCTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNmUjs7QURxQkE7RUFDRSx1REFBQTtBQ2xCRjs7QURzQkE7RUFDRSxzQ0FBQTtBQ25CRjs7QUR1QkU7RUFDRSw4Q0FBQTtBQ3BCSjs7QUR3QkE7RUFDRSxxQkFBQTtBQ3JCRjs7QUR3QkE7RUFDRSxvQkFBQTtFQUdBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0FDdkJGOztBRHlCRTtFQUNFLDhCQUFBO0VBRUEsV0FBQTtFQUNBLG1CQUFBO0FDeEJKOztBRDJCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUN6Qko7O0FEMkJJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtBQ3pCTjs7QUQ0Qkk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQzFCTjs7QUQ4QkU7RUFDRSxzQkFBQTtBQzVCSjs7QUQ4Qkk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUM1Qk47O0FEaUNBO0VBQ0UsZ0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0NBQUE7RUFFQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUVBLFFBQUE7RUFDQSwyQkFBQTtBQ2pDRjs7QUR5Q0U7RUFDRSw4QkFBQTtBQ3RDSjs7QUR3Q0k7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdENOOztBRDBDRTtFQUNFLDhCQUFBO0VBRUEsMkVBQUE7RUFDQSxtQkFBQTtBQ3pDSjs7QUQyQ0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ3pDTjs7QUQ0Q0k7RUFDRSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQzFDTjs7QUQ2Q0k7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtBQzNDTjs7QUQ2Q007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUMzQ1I7O0FENkNRO0VBQ0UsaUNBQUE7QUMzQ1Y7O0FEOENRO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0FDNUNWOztBRCtDUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQzdDVjs7QURrREk7RUFDRSw4QkFBQTtFQUVBLHVCQUFBO0VBQ0EsdURBQUE7QUNqRE47O0FEbURNO0VBQ0UsaUhBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FDakRSOztBRG1EUTtFQUNFLGtCQUFBO0FDakRWOztBRHFETTtFQUNFLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsNEVBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUNuRFI7O0FEdURJO0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0FDdEROOztBRDBERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7QUN4REo7O0FEMkRFO0VBQ0UsNERBQUE7QUN6REo7O0FEMkRJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3pETjs7QUQyRE07RUFDRSxlQUFBO0VBQ0EsbUNBQUE7QUN6RFI7O0FEMkRRO0VBQ0Usd0NBQUE7QUN6RFY7O0FENERRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FDMURWOztBRDREVTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDMURaOztBRDZEVTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQzNEWjs7QUQ2RFk7RUFDRSw4QkFBQTtFQUNBLGNBQUE7QUMzRGQ7O0FEOERZO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDNURkOztBRDhEYztFQUNFLGlCQUFBO0FDNURoQjs7QUQ4RGM7RUFDRSxlQUFBO0FDNURoQjs7QURnRVk7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUM5RGQ7O0FEc0VFO0VBQ0UsNkNBQUE7QUNwRUo7O0FEc0VJO0VBQ0UsbUNBQUE7RUFDQSwyQ0FBQTtBQ3BFTjs7QUR1RUk7RUFDRSxrQkFBQTtBQ3JFTjs7QUR3RUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDdEVOOztBRDBFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0FDeEVKOztBRDJFRTtFQUNFLDREQUFBO0FDekVKOztBRDJFSTtFQUNFLG9EQUFBO0VBRUEsaURBQUE7RUFDQSxrREFBQTtBQzFFTjs7QUQ0RU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDMUVSOztBRDRFUTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQzFFVjs7QUQ0RVU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FDMUVaOztBRDZFVTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDM0VaOztBRDZFWTtFQUNFLHdCQUFBO0FDM0VkOztBRDhFWTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDNUVkOztBRG9GRTtFQUNFLDZDQUFBO0FDbEZKOztBRG9GSTtFQUNFLDhCQUFBO0FDbEZOOztBRG9GTTtFQUNFLGlDQUFBO0FDbEZSOztBRHFGTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNuRlI7O0FEcUZRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDbkZWOztBRHNGUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ3BGVjs7QUR1RlE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUN0RlY7O0FEd0ZVO0VBQ0Usd0JBQUE7QUN0Rlo7O0FEeUZVO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUN2RloiLCJmaWxlIjoic3JjL2FwcC9hcnRpc3QvZGV0YWlscy9zdHlsZXMvcGxhY2VzLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9zY3JvbGxiYXJzXCI7XG4vLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gIC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcjogMnB4O1xuICAtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcjogNHB4O1xuICAtLXBhZ2UtcGxhY2VzLWd1dHRlcjogNXB4O1xuXG4gIC0tcGFnZS1mcmllbmRzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAtLXBhZ2UtY29sb3I6ICMwMEFGRkY7XG59XG5cblxuLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICAvLyBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgMHB4IDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZnJpZW5kLXBpY3R1cmUge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1wYWdlLWJvcmRlci1yYWRpdXMpO1xufVxuXG4udXNlci1hYm91dC1zZWN0aW9uIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gIC51c2VyLWRlc2NyaXB0aW9uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICB9XG59XG5cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiB7XG4gIC8vIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblxuICAuaGVhZGluZy1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5kZXRhaWxzLXNlY3Rpb24tdGl0bGUge1xuICAgXG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG5cbiAgICAuZGV0YWlscy1zZWN0aW9uLXRpdGxlWCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgIFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIC5oZWFkaW5nLWNhbGwtdG8tYWN0aW9uIHtcbiAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICB9XG4gIH1cblxuICAuZnJpZW5kcy1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uczogNzsgLy8gV2Ugd2FudCB0byBzaG93IHRocmVlIGZyaWVuZHMgYW5kIGEgaGFsZi4gRWFjaCBmcmllbmQgZmlsbHMgMiBjb2xzID0+ICgzLjUgKiAyID0gNyBjb2xzKVxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICB3aWxsLWNoYW5nZTogc2Nyb2xsLXBvc2l0aW9uO1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKTtcbiAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuXG4gICAgQGluY2x1ZGUgaGlkZS1zY3JvbGxiYXJzKCk7XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICAvLyAuZnJpZW5kLWl0ZW0gaGFzIDhweCBvZiBzaWRlIHBhZGRpbmcsIHdlIG5lZWQgYW4gZXh0cmEgNHB4IGF0IHRoZSBiZWdpbm5pbmcgYW5kIGVuZCB0byBmaWxsIHRoZSAxMnB4IHNpZGUgbWFyZ2luIG9mIHRoZSB2aWV3XG4gICAgICBmbGV4OiAwIDAgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLWZyaWVuZHMtZ3V0dGVyKSk7XG4gICAgfVxuXG4gICAgLmZyaWVuZC1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLWZyaWVuZHMtZ3V0dGVyKTtcblxuICAgICAgLmZyaWVuZC1uYW1lIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwNjA2MDYsICM2OTAwMDApO1xuXG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIH1cblxuXG4gIC5pdGVtLCAubGlzdCwgLml0ZW0tY29udGVudCwgLml0ZW0tY29tcGxleCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG5cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM2ODAwMDA7XG59XG5cbi5ub3RpZmljYXRpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAvLyAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgOHB4IDJweCAtOXB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAubm90aWZpY2F0aW9uLWl0ZW0td3JhcHBlciB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5kZXRhaWxzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5kZXRhaWxzLW5hbWUge1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAuZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gIH1cblxuICAuZGF0ZS13cmFwcGVyIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXG4gICAgLm5vdGlmaWNhdGlvbi1kYXRlIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cbiAgfVxufVxuXG4uY2hlY2tib3gtc3VidGl0bGUxIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLy8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNzAlO1xuICBsZWZ0OiA0JTtcbiAgLy8gdmVydGljYWxseSBjZW50ZXJlZFxuICB0b3A6IDkzJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQge1xuICAvLyAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLmltYWdlLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgLmljb24td3JhcHBlciB7XG4gICAgICBtYXJnaW46IDBweCAxNSU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5kZXNjcmlwdGlvbi1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuXG4gICAgLmRldGFpbHMtbmFtZSB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAuZGV0YWlscy1zaG9ydC1kZXNjcmlwdGlvbiB7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgLmRldGFpbHMtc2NvcmUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgICAgLnNjb3JlLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjb3JlLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NvcmUtdmFsdWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRldGFpbHMtdGFncyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSAqIC0xKTtcblxuICAgICAgLnRhZy13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgdmFyKC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyKSB2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSAwcHg7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaXRlbS10YWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXIpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgICAgIC8vIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSAwcHggMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlsLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgfVxuXG4gIC5vcGVuLWhvdXJzLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5zY2hlZHVsZXMtbGlzdCB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG5cbiAgICAgIC5vcGVuLWhvdXItaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG5cbiAgICAgICAgJiArIC5vcGVuLWhvdXItaXRlbSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY2hlZHVsZS1vdXRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB3aWR0aDogNzUlO1xuXG4gICAgICAgICAgLnNjaGVkdWxlLWRheSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNjaGVkdWxlLWhvdXJzIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5zY2hlZHVsZS1zZXBhcmF0b3Ige1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2NoZWR1bGUtdmFsdWUge1xuICAgICAgICAgICAgICBmbGV4OiAwIDEgMjUlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zY2hlZHVsZS1jbG9zZWQge1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxvY2F0aW9uLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5sb2NhdGlvbi1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIH1cblxuICAgIC5kZXRhaWwtdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIC5sb2NhdGlvbi1hZGRyZXNzIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbC1hbHQtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gICAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgfVxuXG4gIC5zdWdnZXN0ZWQtcGxhY2VzLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5zdWdnZXN0ZWQtcGxhY2VzLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiB2YXIoLS1wYWdlLXBsYWNlcy1ndXR0ZXIpO1xuXG4gICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLXBsYWNlcy1ndXR0ZXIpICogLTEpO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtcGxhY2VzLWd1dHRlcikgKiAtMSk7XG5cbiAgICAgIC5zdWdnZXN0ZWQtcGxhY2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuXG4gICAgICAgIC5wbGFjZS1kZXRhaWxzIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAucGxhY2UtbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweCA1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBsYWNlLXJhdGluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAucmF0aW5nLWljb24ge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yYXRpbmctdmFsdWUge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmVsYXRlZC1hY3Rpdml0aWVzLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5yZWxhdGVkLWFjdGl2aXR5IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgfVxuXG4gICAgICAuYWN0aXZpdHktZGV0YWlscyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5hY3Rpdml0eS1uYW1lIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2aXR5LWNhdGVnb3J5IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2aXR5LXJhdGluZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAucmF0aW5nLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yYXRpbmctdmFsdWUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gIC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcjogMnB4O1xuICAtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcjogNHB4O1xuICAtLXBhZ2UtcGxhY2VzLWd1dHRlcjogNXB4O1xuICAtLXBhZ2UtZnJpZW5kcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFnZS1jb2xvcjogIzAwQUZGRjtcbn1cblxuLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mcmllbmQtcGljdHVyZSB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXBhZ2UtYm9yZGVyLXJhZGl1cyk7XG59XG5cbi51c2VyLWFib3V0LXNlY3Rpb24ge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG4udXNlci1hYm91dC1zZWN0aW9uIC51c2VyLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udXNlci1mcmllbmRzLXNlY3Rpb24gLmhlYWRpbmctcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udXNlci1mcmllbmRzLXNlY3Rpb24gLmhlYWRpbmctcm93IC5kZXRhaWxzLXNlY3Rpb24tdGl0bGUge1xuICBtYXJnaW46IDBweDtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuaGVhZGluZy1yb3cgLmRldGFpbHMtc2VjdGlvbi10aXRsZVgge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIG1hcmdpbjogMHB4O1xufVxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5oZWFkaW5nLXJvdyAuaGVhZGluZy1jYWxsLXRvLWFjdGlvbiB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4udXNlci1mcmllbmRzLXNlY3Rpb24gLmZyaWVuZHMtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiA3O1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHdpbGwtY2hhbmdlOiBzY3JvbGwtcG9zaXRpb247XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKTtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKTtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuZnJpZW5kcy1yb3c6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuZnJpZW5kcy1yb3c6OmJlZm9yZSwgLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5mcmllbmRzLXJvdzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBmbGV4OiAwIDAgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLWZyaWVuZHMtZ3V0dGVyKSk7XG59XG4udXNlci1mcmllbmRzLXNlY3Rpb24gLmZyaWVuZHMtcm93IC5mcmllbmQtaXRlbSB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLWZyaWVuZHMtZ3V0dGVyKTtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuZnJpZW5kcy1yb3cgLmZyaWVuZC1pdGVtIC5mcmllbmQtbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDYwNjA2LCAjNjkwMDAwKTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLml0ZW0sIC5saXN0LCAuaXRlbS1jb250ZW50LCAuaXRlbS1jb21wbGV4IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM2ODAwMDA7XG59XG5cbi5ub3RpZmljYXRpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCA4cHggMnB4IC05cHggdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLm5vdGlmaWNhdGlvbi1pdGVtIC5ub3RpZmljYXRpb24taXRlbS13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ub3RpZmljYXRpb24taXRlbSAuZGV0YWlscy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLm5vdGlmaWNhdGlvbi1pdGVtIC5kZXRhaWxzLXdyYXBwZXIgLmRldGFpbHMtbmFtZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLm5vdGlmaWNhdGlvbi1pdGVtIC5kZXRhaWxzLXdyYXBwZXIgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLm5vdGlmaWNhdGlvbi1pdGVtIC5kYXRlLXdyYXBwZXIge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuLm5vdGlmaWNhdGlvbi1pdGVtIC5kYXRlLXdyYXBwZXIgLm5vdGlmaWNhdGlvbi1kYXRlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4uY2hlY2tib3gtc3VidGl0bGUxIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwJTtcbiAgbGVmdDogNCU7XG4gIHRvcDogOTMlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5pbWFnZS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuaW1hZ2Utcm93IC5pY29uLXdyYXBwZXIge1xuICBtYXJnaW46IDBweCAxNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1zaG9ydC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLXNjb3JlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLXNjb3JlIC5zY29yZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtc2NvcmUgLnNjb3JlLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtc2NvcmUgLnNjb3JlLWl0ZW0gLnNjb3JlLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtc2NvcmUgLnNjb3JlLWl0ZW0gLnNjb3JlLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy10YWdzIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSAqIC0xKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtdGFncyAudGFnLXdyYXBwZXIge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpIDBweDtcbiAgZmxleC1ncm93OiAwO1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy10YWdzIC50YWctd3JhcHBlcjpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy10YWdzIC5pdGVtLXRhZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCAub3Blbi1ob3VyLWl0ZW0gKyAub3Blbi1ob3VyLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIC5zY2hlZHVsZS1vdXRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDc1JTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWRheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWhvdXJzIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWhvdXJzIC5zY2hlZHVsZS1zZXBhcmF0b3Ige1xuICBtYXJnaW46IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIC5zY2hlZHVsZS1vdXRlciAuc2NoZWR1bGUtaG91cnMgLnNjaGVkdWxlLXZhbHVlIHtcbiAgZmxleDogMCAxIDI1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWhvdXJzIC5zY2hlZHVsZS12YWx1ZTpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIC5zY2hlZHVsZS1vdXRlciAuc2NoZWR1bGUtaG91cnMgLnNjaGVkdWxlLXZhbHVlOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCAub3Blbi1ob3VyLWl0ZW0gLnNjaGVkdWxlLW91dGVyIC5zY2hlZHVsZS1ob3VycyAuc2NoZWR1bGUtY2xvc2VkIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmxvY2F0aW9uLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAubG9jYXRpb24td3JhcHBlciAubG9jYXRpb24taGVhZGVyIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAubG9jYXRpb24td3JhcHBlciAuZGV0YWlsLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmxvY2F0aW9uLXdyYXBwZXIgLmxvY2F0aW9uLWFkZHJlc3Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXRhaWwtYWx0LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuc3VnZ2VzdGVkLXBsYWNlcy13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnN1Z2dlc3RlZC1wbGFjZXMtd3JhcHBlciAuc3VnZ2VzdGVkLXBsYWNlcy1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiB2YXIoLS1wYWdlLXBsYWNlcy1ndXR0ZXIpO1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLXBsYWNlcy1ndXR0ZXIpICogLTEpO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1wbGFjZXMtZ3V0dGVyKSAqIC0xKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5zdWdnZXN0ZWQtcGxhY2VzLXdyYXBwZXIgLnN1Z2dlc3RlZC1wbGFjZXMtcm93IC5zdWdnZXN0ZWQtcGxhY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnN1Z2dlc3RlZC1wbGFjZXMtd3JhcHBlciAuc3VnZ2VzdGVkLXBsYWNlcy1yb3cgLnN1Z2dlc3RlZC1wbGFjZSAucGxhY2UtZGV0YWlscyB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5zdWdnZXN0ZWQtcGxhY2VzLXdyYXBwZXIgLnN1Z2dlc3RlZC1wbGFjZXMtcm93IC5zdWdnZXN0ZWQtcGxhY2UgLnBsYWNlLWRldGFpbHMgLnBsYWNlLW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHggNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuc3VnZ2VzdGVkLXBsYWNlcy13cmFwcGVyIC5zdWdnZXN0ZWQtcGxhY2VzLXJvdyAuc3VnZ2VzdGVkLXBsYWNlIC5wbGFjZS1kZXRhaWxzIC5wbGFjZS1yYXRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5zdWdnZXN0ZWQtcGxhY2VzLXdyYXBwZXIgLnN1Z2dlc3RlZC1wbGFjZXMtcm93IC5zdWdnZXN0ZWQtcGxhY2UgLnBsYWNlLWRldGFpbHMgLnBsYWNlLXJhdGluZyAucmF0aW5nLWljb24ge1xuICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuc3VnZ2VzdGVkLXBsYWNlcy13cmFwcGVyIC5zdWdnZXN0ZWQtcGxhY2VzLXJvdyAuc3VnZ2VzdGVkLXBsYWNlIC5wbGFjZS1kZXRhaWxzIC5wbGFjZS1yYXRpbmcgLnJhdGluZy12YWx1ZSB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtYWN0aXZpdGllcy13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtYWN0aXZpdGllcy13cmFwcGVyIC5yZWxhdGVkLWFjdGl2aXR5IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtYWN0aXZpdGllcy13cmFwcGVyIC5yZWxhdGVkLWFjdGl2aXR5Om5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1hY3Rpdml0aWVzLXdyYXBwZXIgLnJlbGF0ZWQtYWN0aXZpdHkgLmFjdGl2aXR5LWRldGFpbHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWFjdGl2aXRpZXMtd3JhcHBlciAucmVsYXRlZC1hY3Rpdml0eSAuYWN0aXZpdHktZGV0YWlscyAuYWN0aXZpdHktbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWFjdGl2aXRpZXMtd3JhcHBlciAucmVsYXRlZC1hY3Rpdml0eSAuYWN0aXZpdHktZGV0YWlscyAuYWN0aXZpdHktY2F0ZWdvcnkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1hY3Rpdml0aWVzLXdyYXBwZXIgLnJlbGF0ZWQtYWN0aXZpdHkgLmFjdGl2aXR5LWRldGFpbHMgLmFjdGl2aXR5LXJhdGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1hY3Rpdml0aWVzLXdyYXBwZXIgLnJlbGF0ZWQtYWN0aXZpdHkgLmFjdGl2aXR5LWRldGFpbHMgLmFjdGl2aXR5LXJhdGluZyAucmF0aW5nLWljb24ge1xuICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1hY3Rpdml0aWVzLXdyYXBwZXIgLnJlbGF0ZWQtYWN0aXZpdHkgLmFjdGl2aXR5LWRldGFpbHMgLmFjdGl2aXR5LXJhdGluZyAucmF0aW5nLXZhbHVlIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59IiwiLy8gSGlkZSBzY3JvbGxiYXJzOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzg5OTQ4MzcvMTExNjk1OVxuQG1peGluIGhpZGUtc2Nyb2xsYmFycygpIHtcbiAgLy8gSUUgMTArXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcblxuICAvLyBGaXJlZm94XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuXG4gIC8vIFNhZmFyaSBhbmQgQ2hyb21lXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/artist/details/styles/places-details.shell.scss":
/*!*****************************************************************!*\
  !*** ./src/app/artist/details/styles/places-details.shell.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #00AFFF;\n  --shell-color-rgb: 0,175,255;\n}\n\napp-image-shell.details-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .40);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.details-icon {\n  --image-shell-loading-background: transparent;\n}\n\n.details-name > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 20px;\n}\n\n.details-short-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 80%;\n}\n\n.details-short-description > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.score-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.score-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.item-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 50px;\n}\n\n.item-tag > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.details-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n}\n\n.schedule-day > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 90%;\n}\n\n.schedule-day > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.schedule-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 100%;\n}\n\n.schedule-value > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.location-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.location-address > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\napp-image-shell.location-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.place-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .05);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .15);\n}\n\n.place-name > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n}\n\n.rating-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.rating-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\napp-image-shell.related-activity-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .05);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .15);\n}\n\n.activity-name > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 25%;\n  margin: 0px auto;\n}\n\n.activity-name > app-text-shell.text-loaded {\n  max-width: inherit;\n  margin: 0px;\n}\n\n.activity-category > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n  max-width: 45%;\n  margin: 0px auto;\n}\n\n.activity-category > app-text-shell.text-loaded {\n  max-width: inherit;\n  margin: 0px;\n}\n\n.rating-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.rating-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aXN0L2RldGFpbHMvc3R5bGVzL0Q6XFxzaGl0XFxwb2QtY3JlYXRvci9zcmNcXGFwcFxcYXJ0aXN0XFxkZXRhaWxzXFxzdHlsZXNcXHBsYWNlcy1kZXRhaWxzLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2FydGlzdC9kZXRhaWxzL3N0eWxlcy9wbGFjZXMtZGV0YWlscy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQ0RGOztBRFdBO0VBQ0UsbUVBQUE7RUFDQSxzRUFBQTtFQUNBLDhEQUFBO0FDUkY7O0FEV0E7RUFDRSw2Q0FBQTtBQ1JGOztBRFdBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtBQ1JGOztBRFlBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNURjs7QURXRTtFQUNFLGtCQUFBO0FDVEo7O0FEYUE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1ZGOztBRFlFO0VBQ0UsY0FBQTtBQ1ZKOztBRGNBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNYRjs7QURhRTtFQUNFLGNBQUE7QUNYSjs7QURlQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUNaRjs7QURlQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDWkY7O0FEY0U7RUFDRSxrQkFBQTtBQ1pKOztBRGdCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDYkY7O0FEZUU7RUFDRSxrQkFBQTtBQ2JKOztBRGlCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDZEY7O0FEZ0JFO0VBQ0Usa0JBQUE7QUNkSjs7QURrQkE7RUFDRSxtRUFBQTtFQUNBLDhEQUFBO0FDZkY7O0FEa0JBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtBQ2ZGOztBRGtCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUNmRjs7QURrQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ2ZGOztBRGlCRTtFQUNFLGNBQUE7QUNmSjs7QURtQkE7RUFDRSxtRUFBQTtFQUNBLDhEQUFBO0FDaEJGOztBRG1CQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNoQkY7O0FEa0JFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDaEJKOztBRG9CQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNqQkY7O0FEbUJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDakJKOztBRHFCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDbEJGOztBRG9CRTtFQUNFLGNBQUE7QUNsQkoiLCJmaWxlIjoic3JjL2FwcC9hcnRpc3QvZGV0YWlscy9zdHlsZXMvcGxhY2VzLWRldGFpbHMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjMDBBRkZGO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMCwxNzUsMjU1O1xufVxuXG4vLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxuOmhvc3QoLmlzLXNoZWxsKSB7XG4gIC8vIGlvbi1jb250ZW50IHtcbiAgLy8gICBvcGFjaXR5OiAwLjg7XG4gIC8vIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLmRldGFpbHMtaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuNDApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmRldGFpbHMtaWNvbiB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmRldGFpbHMtbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG5cbi5kZXRhaWxzLXNob3J0LWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogODAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uc2NvcmUtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuLmRldGFpbHMtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLnNjaGVkdWxlLWRheSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDkwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLnNjaGVkdWxlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogMTAwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmxvY2F0aW9uLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA2MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5sb2NhdGlvbi1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwucGxhY2UtcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xufVxuXG4ucGxhY2UtbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG4ucmF0aW5nLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMDUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwucmVsYXRlZC1hY3Rpdml0eS1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjA1KTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG59XG5cbi5hY3Rpdml0eS1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogMjUlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuXG4uYWN0aXZpdHktY2F0ZWdvcnkgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbiAgbWF4LXdpZHRoOiA0NSU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG5cbi5yYXRpbmctdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICMwMEFGRkY7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAwLDE3NSwyNTU7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5kZXRhaWxzLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjQwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5kZXRhaWxzLWljb24ge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5kZXRhaWxzLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMjBweDtcbn1cblxuLmRldGFpbHMtc2hvcnQtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG4uZGV0YWlscy1zaG9ydC1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4uc2NvcmUtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuLnNjb3JlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn1cblxuLml0ZW0tdGFnID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cbi5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbi5kZXRhaWxzLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5zY2hlZHVsZS1kYXkgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG59XG4uc2NoZWR1bGUtZGF5ID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5zY2hlZHVsZS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uc2NoZWR1bGUtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLmxvY2F0aW9uLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA2MCU7XG59XG4ubG9jYXRpb24tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwubG9jYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnBsYWNlLXBpY3R1cmUge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMDUpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbn1cblxuLnBsYWNlLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbn1cblxuLnJhdGluZy12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjA1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG59XG4ucmF0aW5nLXZhbHVlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnJlbGF0ZWQtYWN0aXZpdHktcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xufVxuXG4uYWN0aXZpdHktbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDI1JTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5hY3Rpdml0eS1uYW1lID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYWN0aXZpdHktY2F0ZWdvcnkgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbiAgbWF4LXdpZHRoOiA0NSU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4uYWN0aXZpdHktY2F0ZWdvcnkgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5yYXRpbmctdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuLnJhdGluZy12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/artist/listing/places-listing.model.ts":
/*!********************************************************!*\
  !*** ./src/app/artist/listing/places-listing.model.ts ***!
  \********************************************************/
/*! exports provided: PlacesItemModel, PlacesListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesItemModel", function() { return PlacesItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesListingModel", function() { return PlacesListingModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");


var PlacesItemModel = /** @class */ (function () {
    function PlacesItemModel() {
    }
    return PlacesItemModel;
}());

var PlacesListingModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlacesListingModel, _super);
    function PlacesListingModel() {
        var _this = _super.call(this) || this;
        _this.items = [
            new PlacesItemModel(),
            new PlacesItemModel(),
            new PlacesItemModel(),
            new PlacesItemModel()
        ];
        return _this;
    }
    return PlacesListingModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));



/***/ }),

/***/ "./src/app/artist/places.service.ts":
/*!******************************************!*\
  !*** ./src/app/artist/places.service.ts ***!
  \******************************************/
/*! exports provided: PlacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesService", function() { return PlacesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _listing_places_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listing/places-listing.model */ "./src/app/artist/listing/places-listing.model.ts");
/* harmony import */ var _details_places_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/places-details.model */ "./src/app/artist/details/places-details.model.ts");






var PlacesService = /** @class */ (function () {
    function PlacesService(http) {
        this.http = http;
    }
    PlacesService.prototype.getListingDataSource = function () {
        return this.http.get('./assets/sample-data/places/listing.json');
    };
    PlacesService.prototype.getListingStore = function (dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _listing_places_listing_model__WEBPACK_IMPORTED_MODULE_4__["PlacesListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    };
    PlacesService.prototype.getDetailsDataSource = function () {
        return this.http.get('./assets/sample-data/places/details.json');
    };
    PlacesService.prototype.getDetailsStore = function (dataSource) {
        // Use cache if available
        if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_places_details_model__WEBPACK_IMPORTED_MODULE_5__["PlacesDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.detailsDataStore.load(dataSource);
        }
        return this.detailsDataStore;
    };
    PlacesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PlacesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlacesService);
    return PlacesService;
}());



/***/ }),

/***/ "./src/app/shell/data-store.ts":
/*!*************************************!*\
  !*** ./src/app/shell/data-store.ts ***!
  \*************************************/
/*! exports provided: ShellModel, DataStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModel", function() { return ShellModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStore", function() { return DataStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/app-shell.config */ "./src/app/shell/config/app-shell.config.ts");




var ShellModel = /** @class */ (function () {
    function ShellModel() {
        this.isShell = false;
    }
    return ShellModel;
}());

var DataStore = /** @class */ (function () {
    function DataStore(shellModel) {
        this.shellModel = shellModel;
        // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
        // However, in production you should set this delay to 0 in the assets/config/app-shell.config.prod.json file.
        // tslint:disable-next-line:max-line-length
        this.networkDelay = (_config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.networkDelay) ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.networkDelay : 0;
        this.timeline = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    // Static function with generics
    // (ref: https://stackoverflow.com/a/24293088/1116959)
    // Append a shell (T & ShellModel) to every value (T) emmited to the timeline
    DataStore.AppendShell = function (dataObservable, shellModel, networkDelay) {
        if (networkDelay === void 0) { networkDelay = 400; }
        var delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(networkDelay));
        // Assign shell flag accordingly
        // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            delayObservable,
            dataObservable
        ]).pipe(
        // Dismiss unnecessary delayValue
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), delayValue = _b[0], dataValue = _b[1];
            return Object.assign(dataValue, { isShell: false });
        }), 
        // Set the shell model as the initial value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(Object.assign(shellModel, { isShell: true })));
    };
    DataStore.prototype.load = function (dataSourceObservable) {
        var _this = this;
        var dataSourceWithShellObservable = DataStore.AppendShell(dataSourceObservable, this.shellModel, this.networkDelay);
        dataSourceWithShellObservable
            .subscribe(function (dataValue) {
            _this.timeline.next(dataValue);
        });
    };
    Object.defineProperty(DataStore.prototype, "state", {
        get: function () {
            return this.timeline.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DataStore.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DataStore;
}());



/***/ })

}]);
//# sourceMappingURL=artist-details-places-details-module-es5.js.map