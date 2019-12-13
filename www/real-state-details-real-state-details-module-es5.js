(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-state-details-real-state-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/real-state/details/real-state-details.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/real-state/details/real-state-details.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories/real-state\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Real State Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"real-state-details-content\">\n  <ion-row class=\"image-row\">\n    <ion-col size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"details-picture\" [src]=\"details.picture\">\n        <app-aspect-ratio [ratio]=\"{w:64, h:40}\">\n          <ion-icon class=\"bookmark-icon\" name=\"heart\"></ion-icon>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"description-row\">\n    <ion-col size=\"12\">\n      <h4 class=\"details-price\">\n        <span class=\"price-icon\">$</span>\n        <app-text-shell [data]=\"details.price\"></app-text-shell>\n      </h4>\n      <p class=\"details-address\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details.location?.address\"></app-text-shell>\n      </p>\n      <p class=\"details-address\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details.location?.city\"></app-text-shell>\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <p class=\"details-description\">\n        <app-text-shell animation=\"bouncing\" lines=\"5\" [data]=\"details.description\"></app-text-shell>\n      </p>\n    </ion-col>\n  </ion-row>\n  <div class=\"accommodations-wrapper\">\n    <h3 class=\"detail-title\">About the space</h3>\n    <ion-row class=\"accommodation-row\">\n      <ion-col class=\"icon-wrapper\">\n        <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/guests.svg\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"4\">\n        <span class=\"accommodation-name\">Guests</span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span class=\"accommodation-value\">\n          <app-text-shell [data]=\"details.accommodations?.guests\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"accommodation-row\">\n      <ion-col class=\"icon-wrapper\">\n        <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/bedrooms.svg\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"4\">\n        <span class=\"accommodation-name\">Bedrooms</span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span class=\"accommodation-value\">\n          <app-text-shell [data]=\"details.accommodations?.bedrooms\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"accommodation-row\">\n      <ion-col class=\"icon-wrapper\">\n        <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/bathroom.svg\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"4\">\n        <span class=\"accommodation-name\">Bathrooms</span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span class=\"accommodation-value\">\n          <app-text-shell [data]=\"details.accommodations?.bathrooms\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"accommodation-row\">\n      <ion-col class=\"icon-wrapper\">\n        <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/patio.svg\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"4\">\n        <span class=\"accommodation-name\">Patio</span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span class=\"accommodation-value\">\n          <app-text-shell [data]=\"details.accommodations?.patios\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"location-wrapper\">\n    <div class=\"location-header\">\n      <h3 class=\"detail-title\">Location</h3>\n      <span class=\"location-address\">\n        <app-text-shell [data]=\"details.location?.address\"></app-text-shell>\n      </span>\n    </div>\n    <!-- <app-aspect-ratio [ratio]=\"{w: 64, h: 30}\">\n      <app-image-shell [src]=\"'https://maps.googleapis.com/maps/api/staticmap?center=' + details.location?.latlng + '&zoom=15&size=640x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xd9453a%7C' + details.location?.latlng + '&key=YOUR_KEY_HERE'\">\n      </app-image-shell>\n    </app-aspect-ratio> -->\n    <app-aspect-ratio [ratio]=\"{w:64, h:30}\">\n      <app-image-shell class=\"location-image\" animation=\"spinner\" [src]=\"details.location?.mapImage\" [alt]=\"'location map'\"></app-image-shell>\n    </app-aspect-ratio>\n  </div>\n  <div class=\"amenities-wrapper\">\n    <h3 class=\"detail-title\">Amenities</h3>\n    <ion-row class=\"amenities-tags\">\n      <ion-col class=\"tag-wrapper\" *ngFor=\"let amenity of details.amenities\">\n        <span class=\"amenity-tag\">\n          <app-text-shell [data]=\"amenity.name\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"safety-features-wrapper\">\n    <h3 class=\"detail-title\">Safety Features</h3>\n    <ul class=\"features-list\">\n      <li class=\"feature-item\">\n        <app-text-shell [data]=\"'Smoke Detector'\"></app-text-shell>\n      </li>\n      <li class=\"feature-item\">\n        <app-text-shell [data]=\"'Carbon Monoxide Detector'\"></app-text-shell>\n      </li>\n      <li class=\"feature-item\">\n        <app-text-shell [data]=\"'Security Alarm System'\"></app-text-shell>\n      </li>\n    </ul>\n  </div>\n  <div class=\"availability-wrapper\">\n    <h3 class=\"detail-title\">Availability</h3>\n    <ion-row class=\"availability-row\">\n      <span class=\"availability-description\">\n        <app-text-shell [data]=\"'1 month minimum'\"></app-text-shell>\n      </span>\n      <span class=\"availability-value\">\n        <app-text-shell [data]=\"'Available from June'\"></app-text-shell>\n      </span>\n    </ion-row>\n    <ion-button class=\"book-now-btn\" color=\"dark\" expand=\"block\" fill=\"outline\">BOOK NOW</ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/real-state/details/real-state-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/real-state/details/real-state-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: RealStateDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateDetailsPageModule", function() { return RealStateDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _real_state_details_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./real-state-details.page */ "./src/app/real-state/details/real-state-details.page.ts");
/* harmony import */ var _real_state_details_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./real-state-details.resolver */ "./src/app/real-state/details/real-state-details.resolver.ts");
/* harmony import */ var _real_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../real-state.service */ "./src/app/real-state/real-state.service.ts");











var routes = [
    {
        path: '',
        component: _real_state_details_page__WEBPACK_IMPORTED_MODULE_8__["RealStateDetailsPage"],
        resolve: {
            data: _real_state_details_resolver__WEBPACK_IMPORTED_MODULE_9__["RealStateDetailsResolver"]
        }
    }
];
var RealStateDetailsPageModule = /** @class */ (function () {
    function RealStateDetailsPageModule() {
    }
    RealStateDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                _real_state_details_page__WEBPACK_IMPORTED_MODULE_8__["RealStateDetailsPage"]
            ],
            providers: [
                _real_state_details_resolver__WEBPACK_IMPORTED_MODULE_9__["RealStateDetailsResolver"],
                _real_state_service__WEBPACK_IMPORTED_MODULE_10__["RealStateService"]
            ]
        })
    ], RealStateDetailsPageModule);
    return RealStateDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/real-state/details/real-state-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/real-state/details/real-state-details.page.ts ***!
  \***************************************************************/
/*! exports provided: RealStateDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateDetailsPage", function() { return RealStateDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RealStateDetailsPage = /** @class */ (function () {
    function RealStateDetailsPage(route) {
        this.route = route;
    }
    Object.defineProperty(RealStateDetailsPage.prototype, "isShell", {
        get: function () {
            return (this.details && this.details.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    RealStateDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (resolvedRouteData) {
            var detailsDataStore = resolvedRouteData['data'];
            detailsDataStore.state.subscribe(function (state) {
                _this.details = state;
            }, function (error) { });
        }, function (error) { });
    };
    RealStateDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RealStateDetailsPage.prototype, "isShell", null);
    RealStateDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-real-state-details',
            template: __webpack_require__(/*! raw-loader!./real-state-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/real-state/details/real-state-details.page.html"),
            styles: [__webpack_require__(/*! ./styles/real-state-details.page.scss */ "./src/app/real-state/details/styles/real-state-details.page.scss"), __webpack_require__(/*! ./styles/real-state-details.shell.scss */ "./src/app/real-state/details/styles/real-state-details.shell.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RealStateDetailsPage);
    return RealStateDetailsPage;
}());



/***/ }),

/***/ "./src/app/real-state/details/real-state-details.resolver.ts":
/*!*******************************************************************!*\
  !*** ./src/app/real-state/details/real-state-details.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: RealStateDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateDetailsResolver", function() { return RealStateDetailsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _real_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../real-state.service */ "./src/app/real-state/real-state.service.ts");



var RealStateDetailsResolver = /** @class */ (function () {
    function RealStateDetailsResolver(realStateService) {
        this.realStateService = realStateService;
    }
    RealStateDetailsResolver.prototype.resolve = function () {
        var dataSource = this.realStateService.getDetailsDataSource();
        var dataStore = this.realStateService.getDetailsStore(dataSource);
        return dataStore;
    };
    RealStateDetailsResolver.ctorParameters = function () { return [
        { type: _real_state_service__WEBPACK_IMPORTED_MODULE_2__["RealStateService"] }
    ]; };
    RealStateDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_real_state_service__WEBPACK_IMPORTED_MODULE_2__["RealStateService"]])
    ], RealStateDetailsResolver);
    return RealStateDetailsResolver;
}());



/***/ }),

/***/ "./src/app/real-state/details/styles/real-state-details.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/real-state/details/styles/real-state-details.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-amenity-vertical-gutter: 2px;\n  --page-amenity-horizontal-gutter: 4px;\n  --page-color: #d9453a;\n}\n\n.real-state-details-content {\n  --background: var(--page-background);\n}\n\n.real-state-details-content .image-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.real-state-details-content .image-row .bookmark-icon {\n  position: absolute;\n  right: var(--page-margin);\n  top: var(--page-margin);\n  font-size: 32px;\n  color: var(--page-color);\n}\n\n.real-state-details-content .description-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n\n.real-state-details-content .description-row .details-price {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-dark-tint);\n  display: flex;\n}\n\n.real-state-details-content .description-row .details-price .price-icon {\n  margin-right: 5px;\n}\n\n.real-state-details-content .description-row .details-address {\n  margin: 0px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-state-details-content .description-row .details-address + .details-address {\n  margin-top: 5px;\n}\n\n.real-state-details-content .description-row .details-description {\n  margin: var(--page-margin) 0px 0px;\n  font-size: 14px;\n  color: var(--ion-color-medium-shade);\n}\n\n.real-state-details-content .detail-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px 0px var(--page-margin);\n}\n\n.real-state-details-content .accommodations-wrapper {\n  padding: var(--page-margin);\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.real-state-details-content .accommodations-wrapper .accommodation-row {\n  --ion-grid-column-padding: 0px;\n  align-items: center;\n}\n\n.real-state-details-content .accommodations-wrapper .accommodation-row + .accommodation-row {\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.real-state-details-content .accommodations-wrapper .accommodation-row .icon-wrapper {\n  display: flex;\n  align-items: center;\n  flex-grow: 0;\n  padding-right: 20px;\n}\n\n.real-state-details-content .accommodations-wrapper .accommodation-row .accommodation-icon {\n  font-size: 30px;\n  color: var(--ion-color-medium-shade);\n}\n\n.real-state-details-content .accommodations-wrapper .accommodation-row .accommodation-name {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-state-details-content .accommodations-wrapper .accommodation-row .accommodation-value {\n  display: block;\n  font-size: 16px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-state-details-content .location-wrapper {\n  padding: calc(var(--page-margin) / 2) 0px var(--page-margin);\n}\n\n.real-state-details-content .location-wrapper .location-header {\n  padding: 0px var(--page-margin) 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.real-state-details-content .location-wrapper .detail-title {\n  margin-bottom: 5px;\n}\n\n.real-state-details-content .location-wrapper .location-address {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-state-details-content .amenities-wrapper {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin);\n}\n\n.real-state-details-content .amenities-wrapper .amenities-tags {\n  --ion-grid-column-padding: 0px;\n  justify-content: center;\n  margin-top: calc(var(--page-amenity-vertical-gutter) * -1);\n}\n\n.real-state-details-content .amenities-wrapper .amenities-tags .tag-wrapper {\n  padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter) var(--page-amenity-vertical-gutter) 0px;\n  flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.real-state-details-content .amenities-wrapper .amenities-tags .tag-wrapper:last-child {\n  padding-right: 0px;\n}\n\n.real-state-details-content .amenities-wrapper .amenities-tags .amenity-tag {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 1px solid var(--ion-color-light-shade);\n  padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-state-details-content .safety-features-wrapper {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin);\n}\n\n.real-state-details-content .safety-features-wrapper .features-list {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\n.real-state-details-content .safety-features-wrapper .features-list .feature-item {\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-state-details-content .safety-features-wrapper .features-list .feature-item + .feature-item {\n  margin-top: calc(var(--page-margin) / 2);\n}\n\n.real-state-details-content .availability-wrapper {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin);\n}\n\n.real-state-details-content .availability-wrapper .availability-row {\n  --ion-grid-column-padding: 0px;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.real-state-details-content .availability-wrapper .availability-row .availability-description,\n.real-state-details-content .availability-wrapper .availability-row .availability-value {\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n  display: block;\n  flex: 1;\n  display: flex;\n}\n\n.real-state-details-content .availability-wrapper .availability-row .availability-description {\n  color: var(--ion-color-medium-tint);\n  justify-content: flex-start;\n}\n\n.real-state-details-content .availability-wrapper .availability-row .availability-value {\n  color: var(--page-color);\n  justify-content: flex-end;\n}\n\n.real-state-details-content .availability-wrapper .book-now-btn {\n  margin: var(--page-margin) 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhbC1zdGF0ZS9kZXRhaWxzL3N0eWxlcy9EOlxcc2hpdFxccG9kLWNyZWF0b3Ivc3JjXFxhcHBcXHJlYWwtc3RhdGVcXGRldGFpbHNcXHN0eWxlc1xccmVhbC1zdGF0ZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVhbC1zdGF0ZS9kZXRhaWxzL3N0eWxlcy9yZWFsLXN0YXRlLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0NBQUE7RUFDQSw4Q0FBQTtFQUVBLG1DQUFBO0VBQ0EscUNBQUE7RUFFQSxxQkFBQTtBQ0hGOztBRE9BO0VBQ0Usb0NBQUE7QUNKRjs7QURNRTtFQUNFLDhCQUFBO0FDSko7O0FETUk7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUNKTjs7QURRRTtFQUNFLDhCQUFBO0VBRUEsMkJBQUE7QUNQSjs7QURTSTtFQUNFLDRDQUFBO0VBQ0gsZUFBQTtFQUNBLGdCQUFBO0VBQ0csaUNBQUE7RUFDQSxhQUFBO0FDUE47O0FEU007RUFDRSxpQkFBQTtBQ1BSOztBRFdJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQ1ROOztBRFdNO0VBQ0UsZUFBQTtBQ1RSOztBRGFJO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNYTjs7QURlRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7QUNiSjs7QURnQkU7RUFDRSwyQkFBQTtFQUNBLHlDQUFBO0FDZEo7O0FEZ0JJO0VBQ0UsOEJBQUE7RUFFQSxtQkFBQTtBQ2ZOOztBRGlCTTtFQUNFLHlDQUFBO0FDZlI7O0FEa0JNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDaEJSOztBRG1CTTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtBQ2pCUjs7QURvQk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDbEJSOztBRHFCTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUNuQlI7O0FEd0JFO0VBQ0UsNERBQUE7QUN0Qko7O0FEd0JJO0VBQ0UsbUNBQUE7RUFDQSwyQ0FBQTtBQ3RCTjs7QUR5Qkk7RUFDRSxrQkFBQTtBQ3ZCTjs7QUQwQkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDeEJOOztBRDRCRTtFQUNFLDJFQUFBO0FDMUJKOztBRDRCSTtFQUNFLDhCQUFBO0VBRUEsdUJBQUE7RUFDQSwwREFBQTtBQzNCTjs7QUQ2Qk07RUFDRSwwSEFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUMzQlI7O0FENkJRO0VBQ0Usa0JBQUE7QUMzQlY7O0FEK0JNO0VBQ0UsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsOENBQUE7RUFDQSxrRkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQzdCUjs7QURrQ0U7RUFDRSwyRUFBQTtBQ2hDSjs7QURrQ0k7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENOOztBRGtDTTtFQUNFLGVBQUE7RUFDQSxtQ0FBQTtBQ2hDUjs7QURrQ1E7RUFDRSx3Q0FBQTtBQ2hDVjs7QURzQ0U7RUFDRSwyRUFBQTtBQ3BDSjs7QURzQ0k7RUFDRSw4QkFBQTtFQUVBLDhCQUFBO0VBQ0EsbUJBQUE7QUNyQ047O0FEdUNNOztFQUVFLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtBQ3JDUjs7QUR3Q007RUFDRSxtQ0FBQTtFQUNBLDJCQUFBO0FDdENSOztBRHlDTTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUN2Q1I7O0FEMkNJO0VBQ0Usa0NBQUE7QUN6Q04iLCJmaWxlIjoic3JjL2FwcC9yZWFsLXN0YXRlL2RldGFpbHMvc3R5bGVzL3JlYWwtc3RhdGUtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyOiAycHg7XG4gIC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyOiA0cHg7XG5cbiAgLS1wYWdlLWNvbG9yOiAjZDk0NTNhO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5yZWFsLXN0YXRlLWRldGFpbHMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAuaW1hZ2Utcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAuYm9va21hcmstaWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgLmRlc2NyaXB0aW9uLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLmRldGFpbHMtcHJpY2Uge1xuICAgICAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgLnByaWNlLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV0YWlscy1hZGRyZXNzIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG5cbiAgICAgICYgKyAuZGV0YWlscy1hZGRyZXNzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCAwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIH1cblxuICAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciB7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgLmFjY29tbW9kYXRpb24tcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgJiArIC5hY2NvbW1vZGF0aW9uLXJvdyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgfVxuXG4gICAgICAuaWNvbi13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAuYWNjb21tb2RhdGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICB9XG5cbiAgICAgIC5hY2NvbW1vZGF0aW9uLW5hbWUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgIH1cblxuICAgICAgLmFjY29tbW9kYXRpb24tdmFsdWUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubG9jYXRpb24td3JhcHBlciB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLmxvY2F0aW9uLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgfVxuXG4gICAgLmRldGFpbC10aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgLmxvY2F0aW9uLWFkZHJlc3Mge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICB9XG4gIH1cblxuICAuYW1lbml0aWVzLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5hbWVuaXRpZXMtdGFncyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyKSAqIC0xKTtcblxuICAgICAgLnRhZy13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcikgdmFyKC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyKSB2YXIoLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyKSAwcHg7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYW1lbml0eS10YWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zYWZldHktZmVhdHVyZXMtd3JhcHBlciB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLmZlYXR1cmVzLWxpc3Qge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4O1xuXG4gICAgICAuZmVhdHVyZS1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcblxuICAgICAgICAmICsgLmZlYXR1cmUtaXRlbSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hdmFpbGFiaWxpdHktd3JhcHBlciB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLmF2YWlsYWJpbGl0eS1yb3cge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAuYXZhaWxhYmlsaXR5LWRlc2NyaXB0aW9uLFxuICAgICAgLmF2YWlsYWJpbGl0eS12YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICAuYXZhaWxhYmlsaXR5LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgLmF2YWlsYWJpbGl0eS12YWx1ZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYm9vay1ub3ctYnRuIHtcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCAwcHg7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXI6IDJweDtcbiAgLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXI6IDRweDtcbiAgLS1wYWdlLWNvbG9yOiAjZDk0NTNhO1xufVxuXG4ucmVhbC1zdGF0ZS1kZXRhaWxzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4ucmVhbC1zdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmltYWdlLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi5yZWFsLXN0YXRlLWRldGFpbHMtY29udGVudCAuaW1hZ2Utcm93IC5ib29rbWFyay1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB0b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG59XG4ucmVhbC1zdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnJlYWwtc3RhdGUtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtcHJpY2Uge1xuICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucmVhbC1zdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1wcmljZSAucHJpY2UtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnJlYWwtc3RhdGUtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtYWRkcmVzcyB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLnJlYWwtc3RhdGUtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtYWRkcmVzcyArIC5kZXRhaWxzLWFkZHJlc3Mge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucmVhbC1zdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLnJlYWwtc3RhdGUtZGV0YWlscy1jb250ZW50IC5kZXRhaWwtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5yZWFsLXN0YXRlLWRldGFpbHMtY29udGVudCAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ucmVhbC1zdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmFjY29tbW9kYXRpb25zLXdyYXBwZXIgLmFjY29tbW9kYXRpb24tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJlYWwtc3RhdGUtZGV0YWlscy1jb250ZW50IC5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIC5hY2NvbW1vZGF0aW9uLXJvdyArIC5hY2NvbW1vZGF0aW9uLXJvdyB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnJlYWwtc3RhdGUtZGV0YWlscy1jb250ZW50IC5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIC5hY2NvbW1vZGF0aW9uLXJvdyAuaWNvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1ncm93OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLnJlYWwtc3RhdGUtZGV0YWlscy1jb250ZW50IC5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIC5hY2NvbW1vZGF0aW9uLXJvdyAuYWNjb21tb2RhdGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG4ucmVhbC1zdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmFjY29tbW9kYXRpb25zLXdyYXBwZXIgLmFjY29tbW9kYXRpb24tcm93IC5hY2NvbW1vZGF0aW9uLW5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5yZWFsLXN0YXRlLWRldGFpbHMtY29udGVudCAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciAuYWNjb21tb2RhdGlvbi1yb3cgLmFjY29tbW9kYXRpb24tdmFsdWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5yZWFsLXN0YXRlLWRldGFpbHMtY29udGVudCAubG9jYXRpb24td3JhcHBlciB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5yZWFsLXN0YXRlLWRldGFpbHMtY29udGVudCAubG9jYXRpb24td3JhcHBlciAubG9jYXRpb24taGVhZGVyIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ucmVhbC1zdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmxvY2F0aW9uLXdyYXBwZXIgLmRldGFpbC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5yZWFsLXN0YXRlLWRldGFpbHMtY29udGVudCAubG9jYXRpb24td3JhcHBlciAubG9jYXRpb24tYWRkcmVzcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLnJlYWwtc3RhdGUtZGV0YWlscy1jb250ZW50IC5hbWVuaXRpZXMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5yZWFsLXN0YXRlLWRldGFpbHMtY29udGVudCAuYW1lbml0aWVzLXdyYXBwZXIgLmFtZW5pdGllcy10YWdzIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyKSAqIC0xKTtcbn1cbi5yZWFsLXN0YXRlLWRldGFpbHMtY29udGVudCAuYW1lbml0aWVzLXdyYXBwZXIgLmFtZW5pdGllcy10YWdzIC50YWctd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcikgdmFyKC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcikgMHB4O1xuICBmbGV4LWdyb3c6IDA7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG59XG4ucmVhbC1zdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmFtZW5pdGllcy13cmFwcGVyIC5hbWVuaXRpZXMtdGFncyAudGFnLXdyYXBwZXI6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5yZWFsLXN0YXRlLWRldGFpbHMtY29udGVudCAuYW1lbml0aWVzLXdyYXBwZXIgLmFtZW5pdGllcy10YWdzIC5hbWVuaXR5LXRhZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG4ucmVhbC1zdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLnNhZmV0eS1mZWF0dXJlcy13cmFwcGVyIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnJlYWwtc3RhdGUtZGV0YWlscy1jb250ZW50IC5zYWZldHktZmVhdHVyZXMtd3JhcHBlciAuZmVhdHVyZXMtbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG4ucmVhbC1zdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLnNhZmV0eS1mZWF0dXJlcy13cmFwcGVyIC5mZWF0dXJlcy1saXN0IC5mZWF0dXJlLWl0ZW0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLnJlYWwtc3RhdGUtZGV0YWlscy1jb250ZW50IC5zYWZldHktZmVhdHVyZXMtd3JhcHBlciAuZmVhdHVyZXMtbGlzdCAuZmVhdHVyZS1pdGVtICsgLmZlYXR1cmUtaXRlbSB7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ucmVhbC1zdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmF2YWlsYWJpbGl0eS13cmFwcGVyIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnJlYWwtc3RhdGUtZGV0YWlscy1jb250ZW50IC5hdmFpbGFiaWxpdHktd3JhcHBlciAuYXZhaWxhYmlsaXR5LXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJlYWwtc3RhdGUtZGV0YWlscy1jb250ZW50IC5hdmFpbGFiaWxpdHktd3JhcHBlciAuYXZhaWxhYmlsaXR5LXJvdyAuYXZhaWxhYmlsaXR5LWRlc2NyaXB0aW9uLFxuLnJlYWwtc3RhdGUtZGV0YWlscy1jb250ZW50IC5hdmFpbGFiaWxpdHktd3JhcHBlciAuYXZhaWxhYmlsaXR5LXJvdyAuYXZhaWxhYmlsaXR5LXZhbHVlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucmVhbC1zdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmF2YWlsYWJpbGl0eS13cmFwcGVyIC5hdmFpbGFiaWxpdHktcm93IC5hdmFpbGFiaWxpdHktZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnJlYWwtc3RhdGUtZGV0YWlscy1jb250ZW50IC5hdmFpbGFiaWxpdHktd3JhcHBlciAuYXZhaWxhYmlsaXR5LXJvdyAuYXZhaWxhYmlsaXR5LXZhbHVlIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnJlYWwtc3RhdGUtZGV0YWlscy1jb250ZW50IC5hdmFpbGFiaWxpdHktd3JhcHBlciAuYm9vay1ub3ctYnRuIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/real-state/details/styles/real-state-details.shell.scss":
/*!*************************************************************************!*\
  !*** ./src/app/real-state/details/styles/real-state-details.shell.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #d9453a;\n  --shell-color-rgb: 217,69,58;\n}\n\napp-image-shell.details-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.details-price app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  --text-shell-line-height: 18px;\n  max-width: 100px;\n  min-width: 50px;\n}\n\n.details-price app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.details-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.details-address > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.details-address + .details-address > app-text-shell {\n  max-width: 80%;\n}\n\n.details-address + .details-address > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.details-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n}\n\n.accommodation-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.accommodation-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.location-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.location-address > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\napp-image-shell.location-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.amenity-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 50px;\n}\n\n.amenity-tag > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.feature-item > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 40%;\n}\n\n.feature-item > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.availability-description > app-text-shell,\n.availability-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 80%;\n}\n\n.availability-description > app-text-shell.text-loaded,\n.availability-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhbC1zdGF0ZS9kZXRhaWxzL3N0eWxlcy9EOlxcc2hpdFxccG9kLWNyZWF0b3Ivc3JjXFxhcHBcXHJlYWwtc3RhdGVcXGRldGFpbHNcXHN0eWxlc1xccmVhbC1zdGF0ZS1kZXRhaWxzLnNoZWxsLnNjc3MiLCJzcmMvYXBwL3JlYWwtc3RhdGUvZGV0YWlscy9zdHlsZXMvcmVhbC1zdGF0ZS1kZXRhaWxzLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0FDREY7O0FEV0E7RUFDRSxtRUFBQTtFQUNBLDhEQUFBO0FDUkY7O0FEV0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUkY7O0FEVUU7RUFDRSxrQkFBQTtBQ1JKOztBRGFFO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNWSjs7QURZSTtFQUNFLGtCQUFBO0FDVk47O0FEY0U7RUFDRSxjQUFBO0FDWko7O0FEY0k7RUFDRSxrQkFBQTtBQ1pOOztBRGlCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUNkRjs7QURpQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ2RGOztBRGdCRTtFQUNFLGNBQUE7QUNkSjs7QURrQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ2ZGOztBRGlCRTtFQUNFLGtCQUFBO0FDZko7O0FEbUJBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtBQ2hCRjs7QURtQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ2hCRjs7QURrQkU7RUFDRSxjQUFBO0FDaEJKOztBRG9CQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDakJGOztBRG1CRTtFQUNFLGtCQUFBO0FDakJKOztBRHVCRTs7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ25CSjs7QURxQkk7O0VBQ0UsY0FBQTtBQ2xCTiIsImZpbGUiOiJzcmMvYXBwL3JlYWwtc3RhdGUvZGV0YWlscy9zdHlsZXMvcmVhbC1zdGF0ZS1kZXRhaWxzLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogI2Q5NDUzYTtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDIxNyw2OSw1ODtcbn1cblxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2Vcbjpob3N0KC5pcy1zaGVsbCkge1xuICAvLyBpb24tY29udGVudCB7XG4gIC8vICAgb3BhY2l0eTogMC44O1xuICAvLyB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5kZXRhaWxzLXBpY3R1cmUge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuLmRldGFpbHMtcHJpY2UgYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG1pbi13aWR0aDogNTBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmRldGFpbHMtYWRkcmVzcyB7XG4gICYgPiBhcHAtdGV4dC1zaGVsbCB7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG5cbiAgICAmLnRleHQtbG9hZGVkIHtcbiAgICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICB9XG4gIH1cblxuICAmICsgLmRldGFpbHMtYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcblxuICAgICYudGV4dC1sb2FkZWQge1xuICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIH1cbiAgfVxufVxuXG4uZGV0YWlscy1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uYWNjb21tb2RhdGlvbi12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuLmxvY2F0aW9uLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA2MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5sb2NhdGlvbi1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG4uYW1lbml0eS10YWcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi5mZWF0dXJlLWl0ZW0gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA0MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5hdmFpbGFiaWxpdHktZGVzY3JpcHRpb24sXG4uYXZhaWxhYmlsaXR5LXZhbHVlIHtcbiAgJiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAgIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgICBtaW4td2lkdGg6IDgwJTtcblxuICAgICYudGV4dC1sb2FkZWQge1xuICAgICAgbWluLXdpZHRoOiAwcHg7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICNkOTQ1M2E7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAyMTcsNjksNTg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5kZXRhaWxzLXBpY3R1cmUge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuLmRldGFpbHMtcHJpY2UgYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cbi5kZXRhaWxzLXByaWNlIGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4uZGV0YWlscy1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNjAlO1xufVxuLmRldGFpbHMtYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuLmRldGFpbHMtYWRkcmVzcyArIC5kZXRhaWxzLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIG1heC13aWR0aDogODAlO1xufVxuLmRldGFpbHMtYWRkcmVzcyArIC5kZXRhaWxzLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLmRldGFpbHMtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLmFjY29tbW9kYXRpb24tdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuLmFjY29tbW9kYXRpb24tdmFsdWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4ubG9jYXRpb24tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDYwJTtcbn1cbi5sb2NhdGlvbi1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5sb2NhdGlvbi1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG4uYW1lbml0eS10YWcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuLmFtZW5pdHktdGFnID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn1cblxuLmZlYXR1cmUtaXRlbSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcbn1cbi5mZWF0dXJlLWl0ZW0gPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLmF2YWlsYWJpbGl0eS1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsLFxuLmF2YWlsYWJpbGl0eS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDgwJTtcbn1cbi5hdmFpbGFiaWxpdHktZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCxcbi5hdmFpbGFiaWxpdHktdmFsdWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufSJdfQ== */"

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
//# sourceMappingURL=real-state-details-real-state-details-module-es5.js.map