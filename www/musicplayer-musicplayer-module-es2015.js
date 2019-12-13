(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["musicplayer-musicplayer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/musicplayer/musicplayer.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/musicplayer/musicplayer.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    \n  <ion-toolbar mode=\"ios\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"musicplayer\"></ion-back-button>\n        </ion-buttons>\n    <ion-title text-center text-uppercase color=\"light\">\n      Playing from Album\n      <br>\n     <span text-lowercase class=\"subT\">Rick and Morty</span> \n    </ion-title>\n   \n  \n  </ion-toolbar>\n  <!-- <ion-toolbar mode=\"ios\">\n    <ion-title text-center text-uppercase color=\"light\">Playing Music in Ionic-Capacitor</ion-title>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content>\n  <div class=\"fixedContent\">\n    <ion-thumbnail [ngStyle]=\"{'background':'url('+ image +')'}\"></ion-thumbnail>\n  </div>\n\n  <div class=\"padding_Top\">\n    <div class=\"fixedContent\">\n      <ion-text color=\"light\">Hotel California</ion-text>\n      <p text-uppercase color=\"light\" class=\"pUser microsoft marquee \">Eagles</p>\n    </div>\n    <ion-range min=\"0\" max=\"{{duration}}\" [(ngModel)]=\"position\" color=\"light\">\n    </ion-range>\n    <div class=\"rangePlaytime\">\n      <ion-label class=\"startTime\" color=\"light\">{{ display_position }}</ion-label>\n      <ion-label class=\"endTime\" color=\"light\" *ngIf=\"duration == -1\">--:--</ion-label>\n      <ion-label class=\"endTime\" color=\"light\" *ngIf=\"duration != -1\">{{ display_duration }}</ion-label>\n    </div>\n\n  </div>\n\n  <ion-grid>\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-col>\n        <div class=\"flexRow\">\n          <div>\n            <ion-button fill=\"clear\" color=\"light\">\n              <ion-icon name=\"heart-empty\" class=\"Iconsize_For_Rev\"></ion-icon>\n            </ion-button>\n          </div>\n\n          <div>\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"controlSeconds('back')\">\n              <ion-icon name=\"rewind\"></ion-icon>\n            </ion-button>\n          </div>\n\n          <div>\n            <ion-button class=\"play_pause_btn\" (click)=\"play()\" color=\"light\" *ngIf=\"!is_playing\" justify-content-center\n              [disabled]=\"!is_ready\" align-items-center>\n              <ion-icon name=\"play\" class=\"darkColor\"></ion-icon>\n            </ion-button>\n\n            <ion-button class=\"play_pause_btn\" (click)=\"pause()\" color=\"light\" *ngIf=\"is_playing\" justify-content-center\n              [disabled]=\"!is_ready\" align-items-center>\n              <ion-icon name=\"pause\" class=\"darkColor\"></ion-icon>\n            </ion-button>\n          </div>\n\n          <div>\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"controlSeconds('forward')\">\n              <ion-icon name=\"fastforward\" class=\"Iconsize_For_Rev\"></ion-icon>\n            </ion-button>\n          </div>\n\n          <div>\n            <ion-button fill=\"clear\" color=\"light\">\n              <ion-icon name=\"remove-circle-outline\" class=\"Iconsize_For_Rev\"></ion-icon>\n            </ion-button>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\" class=\"transparent_Item\">\n          <ion-button slot=\"start\" fill=\"clear\" color=\"light\">\n            <ion-icon name=\"flash\" expand=\"icon-only\" class=\"Iconsize_For_Rev\"></ion-icon>\n          </ion-button>\n          <ion-button slot=\"end\" fill=\"clear\" color=\"light\">\n            <ion-icon name=\"share\" expand=\"icon-only\" class=\"Iconsize_For_Rev\"></ion-icon>\n          </ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<!-- <ion-footer color=\"primary\">\n  <ion-button expand=\"full\">\n    <a href=\"https://enappd.com\">More Ionic 4 Templates & Starters</a>\n  </ion-button>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/musicplayer/musicplayer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/musicplayer/musicplayer.module.ts ***!
  \***************************************************/
/*! exports provided: MusicplayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicplayerPageModule", function() { return MusicplayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _musicplayer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./musicplayer.page */ "./src/app/musicplayer/musicplayer.page.ts");

/**
 * Ionic 4 Spotify app starter - Ion Spotify (https://store.enappd.com/product/ionic-4-spotify-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */






const routes = [
    {
        path: '',
        component: _musicplayer_page__WEBPACK_IMPORTED_MODULE_6__["MusicplayerPage"]
    }
];
let MusicplayerPageModule = class MusicplayerPageModule {
};
MusicplayerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_musicplayer_page__WEBPACK_IMPORTED_MODULE_6__["MusicplayerPage"]]
    })
], MusicplayerPageModule);



/***/ }),

/***/ "./src/app/musicplayer/musicplayer.page.scss":
/*!***************************************************!*\
  !*** ./src/app/musicplayer/musicplayer.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: linear-gradient(to top, #060606, #00695c);\n}\n\nion-toolbar {\n  --background: #00685b;\n}\n\nion-footer {\n  background: black;\n}\n\nion-footer a {\n  color: white !important;\n  text-decoration: none !important;\n}\n\n.marquee {\n  width: 450px;\n  margin: 0 auto;\n  overflow: hidden;\n  white-space: nowrap;\n  box-sizing: border-box;\n  -webkit-animation: marquee 50s linear infinite;\n          animation: marquee 50s linear infinite;\n}\n\nion-title {\n  font-size: 11px;\n}\n\n.subT {\n  font-weight: 400;\n}\n\nion-title.textSubtitle {\n  font-size: 11px;\n  font-weight: bold;\n}\n\n.marquee:hover {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n/* Make it move */\n\n@-webkit-keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n\n@keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n\n.fixedContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 24px;\n}\n\n.fixedContent ion-text {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.fixedContent .pUser {\n  color: var(--ion-color-light-shade);\n  font-size: 14px;\n}\n\n.fixedContent ion-thumbnail {\n  width: 35vh;\n  height: 35vh;\n  background-size: cover !important;\n  background-position: center !important;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.66), 0 1px 5px 0 rgba(0, 0, 0, 0.65);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n}\n\n.header-md:after {\n  bottom: 0px;\n}\n\nion-button.play_pause_btn {\n  width: 65px !important;\n  height: 65px !important;\n  --border-radius: 50%;\n  --box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n}\n\n.darkColor {\n  color: black !important;\n  font-size: 32px;\n  margin-left: 3px;\n}\n\nion-range {\n  padding-bottom: 0;\n  padding-top: 0;\n}\n\n.rangePlaytime {\n  display: flex;\n  justify-content: space-between;\n}\n\n.rangePlaytime .startTime {\n  padding-left: 9px;\n}\n\n.rangePlaytime .endTime {\n  padding-right: 15px;\n}\n\n.Iconsize_For_Rev {\n  font-size: 23px;\n}\n\n.flexRow {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.transparent_Item {\n  --background: transparent;\n}\n\n.padding_Top {\n  padding-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWNwbGF5ZXIvRDpcXHNoaXRcXHBvZC1jcmVhdG9yL3NyY1xcYXBwXFxtdXNpY3BsYXllclxcbXVzaWNwbGF5ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9tdXNpY3BsYXllci9tdXNpY3BsYXllci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx1REFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FEQ0U7RUFDRSx1QkFBQTtFQUNBLGdDQUFBO0FDQ0o7O0FER0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURDQTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7QUNFRjs7QURDQSxpQkFBQTs7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RUNFRjtFRENBO0lBQ0UsbUJBQUE7RUNDRjtBQUNGOztBRFJBO0VBQ0U7SUFDRSxpQkFBQTtFQ0VGO0VEQ0E7SUFDRSxtQkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FDQUo7O0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLCtHQUFBO0VBQ0EsMEdBQUE7QUNGSjs7QURNQTtFQUNFLFdBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFFQSxvQkFBQTtFQUNBLGlIQUFBO0VBQ0EsNEdBQUE7QUNKRjs7QURPQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNKRjs7QURPQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0pGOztBRE1FO0VBQ0UsaUJBQUE7QUNKSjs7QURPRTtFQUNFLG1CQUFBO0FDTEo7O0FEU0E7RUFDRSxlQUFBO0FDTkY7O0FEU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDTkY7O0FEU0E7RUFDRSx5QkFBQTtBQ05GOztBRFNBO0VBQ0UsaUJBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL211c2ljcGxheWVyL211c2ljcGxheWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwNjA2MDYsICMwMDY5NWMpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzAwNjg1Yjtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBhIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubWFycXVlZSB7XG4gIHdpZHRoOiA0NTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGFuaW1hdGlvbjogbWFycXVlZSA1MHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDExcHg7XG59XG4uc3ViVHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmlvbi10aXRsZS50ZXh0U3VidGl0bGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWFycXVlZTpob3ZlciB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG5cbi8qIE1ha2UgaXQgbW92ZSAqL1xuQGtleWZyYW1lcyBtYXJxdWVlIHtcbiAgMCUge1xuICAgIHRleHQtaW5kZW50OiAzMGVtO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdGV4dC1pbmRlbnQ6IC0xMDVlbTtcbiAgfVxufVxuXG4uZml4ZWRDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBpb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLnBVc2VyIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLy8gbWFyZ2luOiAxMnB4O1xuICB9XG5cbiAgaW9uLXRodW1ibmFpbCB7XG4gICAgd2lkdGg6IDM1dmg7XG4gICAgaGVpZ2h0OiAzNXZoO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC42KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjY2KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xuICB9XG59XG5cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBib3R0b206IDBweDtcbn1cblxuaW9uLWJ1dHRvbi5wbGF5X3BhdXNlX2J0biB7XG4gIHdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjVweCAhaW1wb3J0YW50O1xuICAvLyBmb250LXNpemU6IDIuM2VtICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgLS10cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xufVxuXG4uZGFya0NvbG9yIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuaW9uLXJhbmdlIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ucmFuZ2VQbGF5dGltZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAuc3RhcnRUaW1lIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDlweDtcbiAgfVxuXG4gIC5lbmRUaW1lIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG59XG5cbi5JY29uc2l6ZV9Gb3JfUmV2IHtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG4uZmxleFJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRyYW5zcGFyZW50X0l0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ucGFkZGluZ19Ub3Age1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDYwNjA2LCAjMDA2OTVjKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDY4NWI7XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cbmlvbi1mb290ZXIgYSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1hcnF1ZWUge1xuICB3aWR0aDogNDUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBhbmltYXRpb246IG1hcnF1ZWUgNTBzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uc3ViVCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmlvbi10aXRsZS50ZXh0U3VidGl0bGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWFycXVlZTpob3ZlciB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG5cbi8qIE1ha2UgaXQgbW92ZSAqL1xuQGtleWZyYW1lcyBtYXJxdWVlIHtcbiAgMCUge1xuICAgIHRleHQtaW5kZW50OiAzMGVtO1xuICB9XG4gIDEwMCUge1xuICAgIHRleHQtaW5kZW50OiAtMTA1ZW07XG4gIH1cbn1cbi5maXhlZENvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG59XG4uZml4ZWRDb250ZW50IGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5maXhlZENvbnRlbnQgLnBVc2VyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5maXhlZENvbnRlbnQgaW9uLXRodW1ibmFpbCB7XG4gIHdpZHRoOiAzNXZoO1xuICBoZWlnaHQ6IDM1dmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC42KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjY2KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5pb24tYnV0dG9uLnBsYXlfcGF1c2VfYnRuIHtcbiAgd2lkdGg6IDY1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgLS10cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xufVxuXG4uZGFya0NvbG9yIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuaW9uLXJhbmdlIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ucmFuZ2VQbGF5dGltZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yYW5nZVBsYXl0aW1lIC5zdGFydFRpbWUge1xuICBwYWRkaW5nLWxlZnQ6IDlweDtcbn1cbi5yYW5nZVBsYXl0aW1lIC5lbmRUaW1lIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLkljb25zaXplX0Zvcl9SZXYge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbi5mbGV4Um93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udHJhbnNwYXJlbnRfSXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5wYWRkaW5nX1RvcCB7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/musicplayer/musicplayer.page.ts":
/*!*************************************************!*\
  !*** ./src/app/musicplayer/musicplayer.page.ts ***!
  \*************************************************/
/*! exports provided: MusicplayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicplayerPage", function() { return MusicplayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let MusicplayerPage = class MusicplayerPage {
    constructor(platform, media) {
        this.platform = platform;
        this.media = media;
        this.image = 'assets/album_art.jpg';
        this.filename = 'Baba O`reily';
        this.duration = -1;
        this.play_The_track = "/android_asset/public/assets/GOT.mp3"; //note this specific url format is used in android only
        this.position = 0;
        this.is_playing = false;
        this.is_in_play = false;
        this.is_ready = false;
        this.display_position = '00:00';
        this.display_duration = '00:00';
    }
    ngOnInit() {
        // comment out the following line when adjusting UI in browsers
        this.prepareAudioFile();
    }
    prepareAudioFile() {
        this.platform.ready().then((res) => {
            this.getDuration();
        });
    }
    getDuration() {
        this.curr_playing_file = this.media.create(this.play_The_track);
        // on occassions, the plugin only gives duration of the file if the file is played
        // at least once
        this.curr_playing_file.play();
        this.curr_playing_file.setVolume(0.0); // you don't want users to notice that you are playing the file
        const self = this;
        // The plugin does not give the correct duration on playback start
        // Need to check for duration repeatedly
        let temp_duration = self.duration;
        this.get_duration_interval = setInterval(() => {
            if (self.duration === -1 || !self.duration) {
                self.duration = ~~(self.curr_playing_file.getDuration()); // make it an integer
            }
            else {
                if (self.duration !== temp_duration) {
                    temp_duration = self.duration;
                }
                else {
                    self.curr_playing_file.stop();
                    self.curr_playing_file.release();
                    clearInterval(self.get_duration_interval);
                    this.display_duration = this.toHHMMSS(self.duration);
                    self.setToPlayback();
                }
            }
        }, 100);
    }
    setToPlayback() {
        this.curr_playing_file = this.media.create(this.play_The_track);
        this.curr_playing_file.onStatusUpdate.subscribe(status => {
            switch (status) {
                case 1:
                    break;
                case 2: // 2: playing
                    this.is_playing = true;
                    break;
                case 3: // 3: pause
                    this.is_playing = false;
                    break;
                case 4: // 4: stop
                default:
                    this.is_playing = false;
                    break;
            }
        });
        this.is_ready = true;
        this.getAndSetCurrentAudioPosition();
    }
    getAndSetCurrentAudioPosition() {
        const diff = 1;
        const self = this;
        this.get_position_interval = setInterval(() => {
            const last_position = self.position;
            self.curr_playing_file.getCurrentPosition().then((position) => {
                if (position >= 0 && position < self.duration) {
                    if (Math.abs(last_position - position) >= diff) {
                        // set position
                        self.curr_playing_file.seekTo(last_position * 1000);
                    }
                    else {
                        // update position for display
                        self.position = position;
                        this.display_position = this.toHHMMSS(self.position);
                    }
                }
                else if (position >= self.duration) {
                    self.stop();
                    self.setToPlayback();
                }
            });
        }, 100);
    }
    play() {
        this.curr_playing_file.play();
    }
    pause() {
        this.curr_playing_file.pause();
    }
    stop() {
        this.curr_playing_file.stop();
        this.curr_playing_file.release();
        clearInterval(this.get_position_interval);
        this.position = 0;
    }
    controlSeconds(action) {
        const step = 5;
        const numberRange = this.position;
        switch (action) {
            case 'back':
                this.position = numberRange < step ? 0.001 : numberRange - step;
                break;
            case 'forward':
                this.position = numberRange + step < this.duration ? numberRange + step : this.duration;
                break;
            default:
                break;
        }
    }
    ngOnDestroy() {
        this.stop();
    }
    toHHMMSS(secs) {
        var sec_num = parseInt(secs, 10);
        var minutes = Math.floor(sec_num / 60) % 60;
        var seconds = sec_num % 60;
        return [minutes, seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v, i) => v !== "00" || i >= 0)
            .join(":");
    }
};
MusicplayerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_2__["Media"] }
];
MusicplayerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-musicplayer',
        template: __webpack_require__(/*! raw-loader!./musicplayer.page.html */ "./node_modules/raw-loader/index.js!./src/app/musicplayer/musicplayer.page.html"),
        styles: [__webpack_require__(/*! ./musicplayer.page.scss */ "./src/app/musicplayer/musicplayer.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_2__["Media"]])
], MusicplayerPage);



/***/ })

}]);
//# sourceMappingURL=musicplayer-musicplayer-module-es2015.js.map