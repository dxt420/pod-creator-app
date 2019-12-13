(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"user\">\n        <ion-icon name=\"musical-notes\"></ion-icon>\n      <ion-label class=\"tab-title\">Home</ion-label>\n    </ion-tab-button>\n \n    <ion-tab-button tab=\"library\">\n        <ion-icon  name=\"ios-filing\"></ion-icon>\n      <ion-label class=\"tab-title\">My Pod</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"upload\">\n        <ion-icon  name=\"search\"></ion-icon>\n        <ion-label class=\"tab-title\">Upload</ion-label>\n      </ion-tab-button>\n    <ion-tab-button tab=\"notifications\">\n        <ion-icon  name=\"ios-menu\"></ion-icon>\n        <ion-label class=\"tab-title\">More</ion-label>\n    </ion-tab-button>\n    \n  </ion-tab-bar>\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs/styles/tabs.page.scss":
/*!********************************************!*\
  !*** ./src/app/tabs/styles/tabs.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-button {\n  --color: var(--ion-color-medium-shade);\n  --color-selected: var(--ion-color-dark);\n}\n\nion-tab-bar {\n  --background:#060606;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9zdHlsZXMvRDpcXHNoaXRcXHBvZC1jcmVhdG9yL3NyY1xcYXBwXFx0YWJzXFxzdHlsZXNcXHRhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3N0eWxlcy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNDQUFBO0VBQ0EsdUNBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC90YWJzL3N0eWxlcy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuaW9uLXRhYi1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG5pb24tdGFiLWJhcntcbiAgLS1iYWNrZ3JvdW5kOiMwNjA2MDY7XG59XG4iLCJpb24tdGFiLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbmlvbi10YWItYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiMwNjA2MDY7XG59Il19 */"

/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let TabsPage = class TabsPage {
    constructor(menu) {
        this.menu = menu;
    }
    ionViewWillEnter() {
        this.menu.enable(true);
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
        styles: [__webpack_require__(/*! ./styles/tabs.page.scss */ "./src/app/tabs/styles/tabs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], TabsPage);



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");





const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
        children: [
            {
                path: 'categories',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | categories-categories-module */ "categories-categories-module").then(__webpack_require__.bind(null, /*! ../categories/categories.module */ "./src/app/categories/categories.module.ts")).then(m => m.CategoriesPageModule)
                    },
                    {
                        path: 'fashion',
                        loadChildren: () => Promise.all(/*! import() | fashion-listing-fashion-listing-module */[__webpack_require__.e("common"), __webpack_require__.e("fashion-listing-fashion-listing-module")]).then(__webpack_require__.bind(null, /*! ../fashion/listing/fashion-listing.module */ "./src/app/fashion/listing/fashion-listing.module.ts")).then(m => m.FashionListingPageModule)
                    },
                    {
                        path: 'fashion/:productId',
                        loadChildren: () => Promise.all(/*! import() | fashion-details-fashion-details-module */[__webpack_require__.e("common"), __webpack_require__.e("fashion-details-fashion-details-module")]).then(__webpack_require__.bind(null, /*! ../fashion/details/fashion-details.module */ "./src/app/fashion/details/fashion-details.module.ts")).then(m => m.FashionDetailsPageModule)
                    },
                    {
                        path: 'food',
                        loadChildren: () => Promise.all(/*! import() | food-listing-food-listing-module */[__webpack_require__.e("default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5"), __webpack_require__.e("common"), __webpack_require__.e("food-listing-food-listing-module")]).then(__webpack_require__.bind(null, /*! ../food/listing/food-listing.module */ "./src/app/food/listing/food-listing.module.ts")).then(m => m.FoodListingPageModule)
                    },
                    {
                        path: 'food/:productId',
                        loadChildren: () => Promise.all(/*! import() | food-details-food-details-module */[__webpack_require__.e("default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5"), __webpack_require__.e("common"), __webpack_require__.e("food-details-food-details-module")]).then(__webpack_require__.bind(null, /*! ../food/details/food-details.module */ "./src/app/food/details/food-details.module.ts")).then(m => m.FoodDetailsPageModule)
                    },
                    {
                        path: 'travel',
                        loadChildren: () => Promise.all(/*! import() | travel-listing-travel-listing-module */[__webpack_require__.e("common"), __webpack_require__.e("travel-listing-travel-listing-module")]).then(__webpack_require__.bind(null, /*! ../travel/listing/travel-listing.module */ "./src/app/travel/listing/travel-listing.module.ts")).then(m => m.TravelListingPageModule)
                    },
                    {
                        path: 'travel/:productId',
                        loadChildren: () => Promise.all(/*! import() | travel-details-travel-details-module */[__webpack_require__.e("common"), __webpack_require__.e("travel-details-travel-details-module")]).then(__webpack_require__.bind(null, /*! ../travel/details/travel-details.module */ "./src/app/travel/details/travel-details.module.ts")).then(m => m.TravelDetailsPageModule)
                    },
                    {
                        path: 'deals',
                        loadChildren: () => Promise.all(/*! import() | deals-listing-deals-listing-module */[__webpack_require__.e("default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5"), __webpack_require__.e("common"), __webpack_require__.e("deals-listing-deals-listing-module")]).then(__webpack_require__.bind(null, /*! ../deals/listing/deals-listing.module */ "./src/app/deals/listing/deals-listing.module.ts")).then(m => m.DealsListingPageModule)
                    },
                    {
                        path: 'deals/:productId',
                        loadChildren: () => Promise.all(/*! import() | deals-details-deals-details-module */[__webpack_require__.e("default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5"), __webpack_require__.e("common"), __webpack_require__.e("deals-details-deals-details-module")]).then(__webpack_require__.bind(null, /*! ../deals/details/deals-details.module */ "./src/app/deals/details/deals-details.module.ts")).then(m => m.DealsDetailsPageModule)
                    },
                    {
                        path: 'real-state',
                        loadChildren: () => Promise.all(/*! import() | real-state-listing-real-state-listing-module */[__webpack_require__.e("common"), __webpack_require__.e("real-state-listing-real-state-listing-module")]).then(__webpack_require__.bind(null, /*! ../real-state/listing/real-state-listing.module */ "./src/app/real-state/listing/real-state-listing.module.ts")).then(m => m.RealStateListingPageModule)
                    },
                    {
                        path: 'real-state/:productId',
                        loadChildren: () => Promise.all(/*! import() | real-state-details-real-state-details-module */[__webpack_require__.e("common"), __webpack_require__.e("real-state-details-real-state-details-module")]).then(__webpack_require__.bind(null, /*! ../real-state/details/real-state-details.module */ "./src/app/real-state/details/real-state-details.module.ts")).then(m => m.RealStateDetailsPageModule)
                    }
                ]
            },
            {
                path: 'user',
                children: [
                    {
                        path: '',
                        // loadChildren: () => import('../user/profile/user-profile.module').then(m => m.UserProfilePageModule)
                        loadChildren: () => Promise.all(/*! import() | user-profile-playlist-module */[__webpack_require__.e("common"), __webpack_require__.e("user-profile-playlist-module")]).then(__webpack_require__.bind(null, /*! ../user/profile/playlist.module */ "./src/app/user/profile/playlist.module.ts")).then(m => m.PlaylistPageModule)
                    },
                    {
                        path: 'artists',
                        loadChildren: () => Promise.all(/*! import() | artists-notifications-module */[__webpack_require__.e("common"), __webpack_require__.e("artists-notifications-module")]).then(__webpack_require__.bind(null, /*! ../artists/notifications.module */ "./src/app/artists/notifications.module.ts")).then(m => m.NotificationsPageModule)
                    },
                    {
                        path: 'album',
                        loadChildren: () => Promise.all(/*! import() | album-profile-user-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("album-profile-user-profile-module")]).then(__webpack_require__.bind(null, /*! ../album/profile/user-profile.module */ "./src/app/album/profile/user-profile.module.ts")).then(m => m.UserProfilePageModule)
                    }
                ]
            },
            {
                path: 'upload',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | upload-upload-module */ "upload-upload-module").then(__webpack_require__.bind(null, /*! ../upload/upload.module */ "./src/app/upload/upload.module.ts")).then(m => m.UploadPageModule)
                    }
                ]
            },
            {
                path: 'library',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | library-profile-user-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("library-profile-user-profile-module")]).then(__webpack_require__.bind(null, /*! ../library/profile/user-profile.module */ "./src/app/library/profile/user-profile.module.ts")).then(m => m.UserProfilePageModule)
                    }
                ]
            },
            {
                path: 'notifications',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | notifications-notifications-module */[__webpack_require__.e("common"), __webpack_require__.e("notifications-notifications-module")]).then(__webpack_require__.bind(null, /*! ../notifications/notifications.module */ "./src/app/notifications/notifications.module.ts")).then(m => m.NotificationsPageModule)
                    }
                ]
            },
            {
                path: 'artist',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | artist-details-places-details-module */ "artist-details-places-details-module").then(__webpack_require__.bind(null, /*! ../artist/details/places-details.module */ "./src/app/artist/details/places-details.module.ts")).then(m => m.PlacesDetailsPageModule)
                    }
                ]
            },
            {
                path: 'musicplayer',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | musicplayer-musicplayer-module */ "musicplayer-musicplayer-module").then(__webpack_require__.bind(null, /*! ../musicplayer/musicplayer.module */ "./src/app/musicplayer/musicplayer.module.ts")).then(m => m.MusicplayerPageModule)
                    }
                ]
            },
        ]
    },
    // /app/ redirect
    {
        path: '',
        redirectTo: 'app/categories',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: []
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map