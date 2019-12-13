(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-state-listing-real-state-listing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/real-state/listing/real-state-listing.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/real-state/listing/real-state-listing.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Real State Listing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"real-state-listing-content\">\n  <div class=\"listing-item\" *ngFor=\"let item of listing.items\">\n    <ion-row class=\"image-row\">\n      <ion-col size=\"12\">\n        <a class=\"image-anchor\" [routerLink]=\"['/app/categories/real-state/', item.slug]\">\n          <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"item-picture\" [src]=\"item.picture\">\n            <app-aspect-ratio [ratio]=\"{w:365, h:125}\">\n            </app-aspect-ratio>\n          </app-image-shell>\n        </a>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"description-row\">\n      <ion-col size=\"12\" class=\"details-col\">\n        <ion-row class=\"details-wrapper\">\n          <ion-col>\n            <h4 class=\"item-price\">\n              <span class=\"price-icon\">$</span>\n              <app-text-shell [data]=\"item.price\"></app-text-shell>\n            </h4>\n            <p class=\"item-address\">\n              <app-text-shell [data]=\"item.address\"></app-text-shell>\n            </p>\n          </ion-col>\n          <ion-col class=\"bookmark-col\" size=\"2\">\n            <ion-icon *ngIf=\"item.liked\" class=\"like-icon\" name=\"heart\"></ion-icon>\n            <ion-icon *ngIf=\"!item.liked\" class=\"like-icon\" name=\"heart-empty\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <ion-col class=\"accommodations-col\" size=\"12\">\n        <ion-row class=\"accommodations-wrapper\">\n          <ion-col class=\"item-accommodation\">\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/guests.svg\"></ion-icon>\n            <span class=\"accommodation-property\">Guests</span>\n            <span class=\"accommodation-value\">\n              <app-text-shell [data]=\"item.accommodations?.guests\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col class=\"item-accommodation\">\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/bedrooms.svg\"></ion-icon>\n            <span class=\"accommodation-property\">Bedrooms</span>\n            <span class=\"accommodation-value\">\n              <app-text-shell [data]=\"item.accommodations?.bedrooms\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col class=\"item-accommodation\">\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/bathroom.svg\"></ion-icon>\n            <span class=\"accommodation-property\">Bathrooms</span>\n            <span class=\"accommodation-value\">\n              <app-text-shell [data]=\"item.accommodations?.bathrooms\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col class=\"item-accommodation\">\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/patio.svg\"></ion-icon>\n            <span class=\"accommodation-property\">Patios</span>\n            <span class=\"accommodation-value\">\n              <app-text-shell [data]=\"item.accommodations?.patios\"></app-text-shell>\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"amenities-col\" *ngIf=\"item.amenities\">\n        <h5 class=\"amenities-title\">Amenities</h5>\n        <ion-row class=\"amenities-wrapper\">\n          <ng-container>\n            <ion-col class=\"item-amenity\" size=\"4\" *ngFor=\"let amenity of item.amenities.slice(0, 4); let i = index\">\n              <ion-icon *ngIf=\"amenity.icon\" class=\"amenity-icon\" [src]=\"amenity.icon\"></ion-icon>\n              <span class=\"amenity-value\">\n                <app-text-shell [data]=\"amenity.name\"></app-text-shell>\n              </span>\n            </ion-col>\n            <ion-col class=\"has-more-amenities\" *ngIf=\"i == 3 && item.amenities.length > 4\">\n              <span class=\"amenities-count\">+{{ item.amenities.length - 4 }}</span>\n            </ion-col>\n          </ng-container>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/real-state/listing/real-state-listing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/real-state/listing/real-state-listing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RealStateListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateListingPageModule", function() { return RealStateListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _real_state_listing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./real-state-listing.page */ "./src/app/real-state/listing/real-state-listing.page.ts");
/* harmony import */ var _real_state_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./real-state-listing.resolver */ "./src/app/real-state/listing/real-state-listing.resolver.ts");
/* harmony import */ var _real_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../real-state.service */ "./src/app/real-state/real-state.service.ts");











var routes = [
    {
        path: '',
        component: _real_state_listing_page__WEBPACK_IMPORTED_MODULE_8__["RealStateListingPage"],
        resolve: {
            data: _real_state_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["RealStateListingResolver"]
        }
    }
];
var RealStateListingPageModule = /** @class */ (function () {
    function RealStateListingPageModule() {
    }
    RealStateListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                _real_state_listing_page__WEBPACK_IMPORTED_MODULE_8__["RealStateListingPage"]
            ],
            providers: [
                _real_state_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["RealStateListingResolver"],
                _real_state_service__WEBPACK_IMPORTED_MODULE_10__["RealStateService"]
            ]
        })
    ], RealStateListingPageModule);
    return RealStateListingPageModule;
}());



/***/ }),

/***/ "./src/app/real-state/listing/real-state-listing.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/real-state/listing/real-state-listing.page.ts ***!
  \***************************************************************/
/*! exports provided: RealStateListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateListingPage", function() { return RealStateListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RealStateListingPage = /** @class */ (function () {
    function RealStateListingPage(route) {
        this.route = route;
    }
    Object.defineProperty(RealStateListingPage.prototype, "isShell", {
        get: function () {
            return (this.listing && this.listing.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    RealStateListingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (resolvedRouteData) {
            var listingDataStore = resolvedRouteData['data'];
            listingDataStore.state.subscribe(function (state) {
                _this.listing = state;
            }, function (error) { });
        }, function (error) { });
    };
    RealStateListingPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RealStateListingPage.prototype, "isShell", null);
    RealStateListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-real-state-listing',
            template: __webpack_require__(/*! raw-loader!./real-state-listing.page.html */ "./node_modules/raw-loader/index.js!./src/app/real-state/listing/real-state-listing.page.html"),
            styles: [__webpack_require__(/*! ./styles/real-state-listing.page.scss */ "./src/app/real-state/listing/styles/real-state-listing.page.scss"), __webpack_require__(/*! ./styles/real-state-listing.shell.scss */ "./src/app/real-state/listing/styles/real-state-listing.shell.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RealStateListingPage);
    return RealStateListingPage;
}());



/***/ }),

/***/ "./src/app/real-state/listing/real-state-listing.resolver.ts":
/*!*******************************************************************!*\
  !*** ./src/app/real-state/listing/real-state-listing.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: RealStateListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateListingResolver", function() { return RealStateListingResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _real_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../real-state.service */ "./src/app/real-state/real-state.service.ts");



var RealStateListingResolver = /** @class */ (function () {
    function RealStateListingResolver(realStateService) {
        this.realStateService = realStateService;
    }
    RealStateListingResolver.prototype.resolve = function () {
        var dataSource = this.realStateService.getListingDataSource();
        var dataStore = this.realStateService.getListingStore(dataSource);
        return dataStore;
    };
    RealStateListingResolver.ctorParameters = function () { return [
        { type: _real_state_service__WEBPACK_IMPORTED_MODULE_2__["RealStateService"] }
    ]; };
    RealStateListingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_real_state_service__WEBPACK_IMPORTED_MODULE_2__["RealStateService"]])
    ], RealStateListingResolver);
    return RealStateListingResolver;
}());



/***/ }),

/***/ "./src/app/real-state/listing/styles/real-state-listing.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/real-state/listing/styles/real-state-listing.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background);\n  --page-amenity-vertical-gutter: 6px;\n  --page-amenity-horizontal-gutter: 4px;\n  --page-color: #d9453a;\n}\n\n.real-state-listing-content {\n  --background: var(--page-background);\n}\n\n.listing-item .image-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.listing-item .image-row .image-anchor {\n  display: block;\n}\n\n.listing-item .description-row {\n  --ion-grid-column-padding: 0px;\n  padding-bottom: var(--page-margin);\n}\n\n.listing-item .description-row .details-col {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) 0px;\n}\n\n.listing-item .description-row .details-col .details-wrapper {\n  justify-content: space-between;\n}\n\n.listing-item .description-row .details-col .details-wrapper .item-price {\n  margin: 0px 0px 5px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  display: flex;\n  align-items: center;\n}\n\n.listing-item .description-row .details-col .details-wrapper .item-price .price-icon {\n  margin-right: 5px;\n}\n\n.listing-item .description-row .details-col .details-wrapper .item-address {\n  margin: 0px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item .description-row .details-col .details-wrapper .bookmark-col {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.listing-item .description-row .details-col .details-wrapper .bookmark-col .like-icon {\n  font-size: 32px;\n  color: var(--page-color);\n}\n\n.listing-item .description-row .accommodations-col {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n\n.listing-item .description-row .accommodations-col .accommodations-wrapper {\n  padding-top: calc(var(--page-margin));\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation + .item-accommodation {\n  padding-left: calc((var(--page-margin) / 2) * 3);\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-property {\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-value {\n  display: inline-block;\n  font-weight: 400;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n  margin-top: 4px;\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-name {\n  display: inline-block;\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-icon {\n  color: var(--ion-color-medium-tint);\n  font-size: 30px;\n}\n\n.listing-item .description-row .amenities-col {\n  padding: 0px var(--page-margin) calc(var(--page-margin) / 2);\n  background: var(--app-background-shade);\n}\n\n.listing-item .description-row .amenities-col .amenities-title {\n  margin: var(--page-margin) 0px calc(var(--page-margin) / 2);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--ion-color-medium-shade);\n}\n\n.listing-item .description-row .amenities-col .amenities-wrapper {\n  margin: 0px calc(var(--page-amenity-horizontal-gutter) * -1);\n}\n\n.listing-item .description-row .amenities-col .amenities-wrapper .item-amenity {\n  padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.listing-item .description-row .amenities-col .amenities-wrapper .item-amenity .amenity-icon {\n  color: var(--ion-color-medium-tint);\n  font-size: 30px;\n  flex-shrink: 0;\n}\n\n.listing-item .description-row .amenities-col .amenities-wrapper .item-amenity .amenity-value {\n  display: block;\n  font-weight: 300;\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n  margin-left: calc(var(--page-amenity-horizontal-gutter) * 2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhbC1zdGF0ZS9saXN0aW5nL3N0eWxlcy9EOlxcc2hpdFxccG9kLWNyZWF0b3Ivc3JjXFxhcHBcXHJlYWwtc3RhdGVcXGxpc3RpbmdcXHN0eWxlc1xccmVhbC1zdGF0ZS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVhbC1zdGF0ZS9saXN0aW5nL3N0eWxlcy9yZWFsLXN0YXRlLWxpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0NBQUE7RUFDQSx3Q0FBQTtFQUVBLG1DQUFBO0VBQ0EscUNBQUE7RUFFQSxxQkFBQTtBQ0hGOztBRE9BO0VBQ0Usb0NBQUE7QUNKRjs7QURRRTtFQUNFLDhCQUFBO0FDTEo7O0FET0k7RUFDRSxjQUFBO0FDTE47O0FEU0U7RUFDRSw4QkFBQTtFQUVBLGtDQUFBO0FDUko7O0FEVUk7RUFDRSw0REFBQTtBQ1JOOztBRFVNO0VBQ0UsOEJBQUE7QUNSUjs7QURVUTtFQUNFLG1CQUFBO0VBQ0gsZ0JBQUE7RUFDRyxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1JWOztBRFVVO0VBQ0UsaUJBQUE7QUNSWjs7QURZUTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUNWVjs7QURhUTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ1hWOztBRGFVO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FDWFo7O0FEaUJJO0VBQ0Usa0RBQUE7QUNmTjs7QURpQk07RUFDRSxxQ0FBQTtBQ2ZSOztBRGtCTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FDaEJSOztBRGtCUTtFQUNFLGdEQUFBO0FDaEJWOztBRG1CUTtFQUNFLGVBQUE7RUFDQSxtQ0FBQTtBQ2pCVjs7QURvQlE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtBQ2xCVjs7QURxQlE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQ25CVjs7QURzQlE7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7QUNwQlY7O0FEeUJJO0VBQ0UsNERBQUE7RUFDQSx1Q0FBQTtBQ3ZCTjs7QUR5Qk07RUFDRSwyREFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUN2QlI7O0FEMEJNO0VBQ0UsNERBQUE7QUN4QlI7O0FEMEJRO0VBQ0Usa0ZBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ3hCVjs7QUQwQlU7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDeEJaOztBRDJCVTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLDREQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDekJaIiwiZmlsZSI6InNyYy9hcHAvcmVhbC1zdGF0ZS9saXN0aW5nL3N0eWxlcy9yZWFsLXN0YXRlLWxpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcjogNnB4O1xuICAtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcjogNHB4O1xuXG4gIC0tcGFnZS1jb2xvcjogI2Q5NDUzYTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4ucmVhbC1zdGF0ZS1saXN0aW5nLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5saXN0aW5nLWl0ZW0ge1xuICAuaW1hZ2Utcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAuaW1hZ2UtYW5jaG9yIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG4gIC5kZXNjcmlwdGlvbi1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAuZGV0YWlscy1jb2wge1xuICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuXG4gICAgICAuZGV0YWlscy13cmFwcGVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgIC5pdGVtLXByaWNlIHtcbiAgICAgICAgICBtYXJnaW46IDBweCAwcHggNXB4O1xuICAgIFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIC5wcmljZS1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pdGVtLWFkZHJlc3Mge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib29rbWFyay1jb2wge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgICAgIC5saWtlLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hY2NvbW1vZGF0aW9ucy1jb2wge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAgIC5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pKTtcbiAgICAgIH1cblxuICAgICAgLml0ZW0tYWNjb21tb2RhdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICAgICAgJiArIC5pdGVtLWFjY29tbW9kYXRpb24ge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgKiAzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY2NvbW1vZGF0aW9uLXByb3BlcnR5IHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYWNjb21tb2RhdGlvbi12YWx1ZSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY2NvbW1vZGF0aW9uLW5hbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYWNjb21tb2RhdGlvbi1pY29uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYW1lbml0aWVzLWNvbCB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgICAgIC5hbWVuaXRpZXMtdGl0bGUge1xuICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICB9XG5cbiAgICAgIC5hbWVuaXRpZXMtd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogMHB4IGNhbGModmFyKC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyKSAqIC0xKTtcblxuICAgICAgICAuaXRlbS1hbWVuaXR5IHtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgIC5hbWVuaXR5LWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYW1lbml0eS12YWx1ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcikgKiAyKTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXI6IDZweDtcbiAgLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXI6IDRweDtcbiAgLS1wYWdlLWNvbG9yOiAjZDk0NTNhO1xufVxuXG4ucmVhbC1zdGF0ZS1saXN0aW5nLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5saXN0aW5nLWl0ZW0gLmltYWdlLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmltYWdlLXJvdyAuaW1hZ2UtYW5jaG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtY29sIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCAuZGV0YWlscy13cmFwcGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCAuZGV0YWlscy13cmFwcGVyIC5pdGVtLXByaWNlIHtcbiAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCAuZGV0YWlscy13cmFwcGVyIC5pdGVtLXByaWNlIC5wcmljZS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtY29sIC5kZXRhaWxzLXdyYXBwZXIgLml0ZW0tYWRkcmVzcyB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCAuZGV0YWlscy13cmFwcGVyIC5ib29rbWFyay1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCAuZGV0YWlscy13cmFwcGVyIC5ib29rbWFyay1jb2wgLmxpa2UtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5hY2NvbW1vZGF0aW9ucy1jb2wge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIC5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIHtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIC5pdGVtLWFjY29tbW9kYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5hY2NvbW1vZGF0aW9ucy1jb2wgLml0ZW0tYWNjb21tb2RhdGlvbiArIC5pdGVtLWFjY29tbW9kYXRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpICogMyk7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmFjY29tbW9kYXRpb25zLWNvbCAuaXRlbS1hY2NvbW1vZGF0aW9uIC5hY2NvbW1vZGF0aW9uLXByb3BlcnR5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIC5pdGVtLWFjY29tbW9kYXRpb24gLmFjY29tbW9kYXRpb24tdmFsdWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIC5pdGVtLWFjY29tbW9kYXRpb24gLmFjY29tbW9kYXRpb24tbmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIC5pdGVtLWFjY29tbW9kYXRpb24gLmFjY29tbW9kYXRpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmFtZW5pdGllcy1jb2wge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYW1lbml0aWVzLWNvbCAuYW1lbml0aWVzLXRpdGxlIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5hbWVuaXRpZXMtY29sIC5hbWVuaXRpZXMtd3JhcHBlciB7XG4gIG1hcmdpbjogMHB4IGNhbGModmFyKC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyKSAqIC0xKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYW1lbml0aWVzLWNvbCAuYW1lbml0aWVzLXdyYXBwZXIgLml0ZW0tYW1lbml0eSB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5hbWVuaXRpZXMtY29sIC5hbWVuaXRpZXMtd3JhcHBlciAuaXRlbS1hbWVuaXR5IC5hbWVuaXR5LWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYW1lbml0aWVzLWNvbCAuYW1lbml0aWVzLXdyYXBwZXIgLml0ZW0tYW1lbml0eSAuYW1lbml0eS12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpICogMik7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/real-state/listing/styles/real-state-listing.shell.scss":
/*!*************************************************************************!*\
  !*** ./src/app/real-state/listing/styles/real-state-listing.shell.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #d9453a;\n  --shell-color-rgb: 217,69,58;\n}\n\napp-image-shell.item-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.item-price app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  min-width: 50px;\n  max-width: 100px;\n}\n\n.item-price app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.item-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.item-address > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.accommodation-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.accommodation-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.amenity-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 12px;\n  min-width: 50px;\n}\n\n.amenity-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhbC1zdGF0ZS9saXN0aW5nL3N0eWxlcy9EOlxcc2hpdFxccG9kLWNyZWF0b3Ivc3JjXFxhcHBcXHJlYWwtc3RhdGVcXGxpc3RpbmdcXHN0eWxlc1xccmVhbC1zdGF0ZS1saXN0aW5nLnNoZWxsLnNjc3MiLCJzcmMvYXBwL3JlYWwtc3RhdGUvbGlzdGluZy9zdHlsZXMvcmVhbC1zdGF0ZS1saXN0aW5nLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0FDREY7O0FEV0E7RUFDRSxtRUFBQTtFQUNBLDhEQUFBO0FDUkY7O0FEV0E7RUFDRSwwREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1JGOztBRFVFO0VBQ0Usa0JBQUE7QUNSSjs7QURZQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDVEY7O0FEV0U7RUFDRSxrQkFBQTtBQ1RKOztBRGFBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNWRjs7QURZRTtFQUNFLGNBQUE7QUNWSjs7QURjQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDWEY7O0FEYUU7RUFDRSxjQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9yZWFsLXN0YXRlL2xpc3Rpbmcvc3R5bGVzL3JlYWwtc3RhdGUtbGlzdGluZy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICNkOTQ1M2E7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAyMTcsNjksNTg7XG59XG5cbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG46aG9zdCguaXMtc2hlbGwpIHtcbiAgLy8gaW9uLWNvbnRlbnQge1xuICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgLy8gfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaXRlbS1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5pdGVtLXByaWNlIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uaXRlbS1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNjAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uYWNjb21tb2RhdGlvbi12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuLmFtZW5pdHktdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICNkOTQ1M2E7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAyMTcsNjksNTg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5pdGVtLXBpY3R1cmUge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuLml0ZW0tcHJpY2UgYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG4uaXRlbS1wcmljZSBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDYwJTtcbn1cbi5pdGVtLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLmFjY29tbW9kYXRpb24tdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuLmFjY29tbW9kYXRpb24tdmFsdWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4uYW1lbml0eS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjA1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG4uYW1lbml0eS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59Il19 */"

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
//# sourceMappingURL=real-state-listing-real-state-listing-module-es5.js.map