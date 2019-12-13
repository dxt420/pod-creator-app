(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-components-custom-components-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/custom-components.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/custom-components/custom-components.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Custom Components\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <ion-item-divider sticky=\"true\">\n    <ion-label>Checkbox Wrapper</ion-label>\n  </ion-item-divider>\n  <section class=\"showcase-section\">\n    <p>\n      This is a super straightforward component whose purpose is to wrap an <code>&lt;ion-checkbox&gt;</code> element to enable accessing the checkbox state from its parents.\n    </p>\n<pre>\n&lt;app-checkbox-wrapper class=\"custom-checkbox\"&gt;\n  &lt;ion-checkbox checked=true&gt;&lt;/ion-checkbox&gt;\n  &lt;ion-label&gt;Sample Checkbox&lt;/ion-label&gt;\n&lt;/app-checkbox-wrapper&gt;\n</pre>\n<pre>\napp-checkbox-wrapper.custom-checkbox &#123;\n  background: #CCC;\n  color: #000;\n\n  &.checkbox-checked &#123;\n    background: #00AFFF;\n    color: #FFF;\n  &#125;\n&#125;\n</pre>\n    <app-checkbox-wrapper class=\"custom-checkbox\">\n      <ion-checkbox checked=true></ion-checkbox>\n      <ion-label>Sample Checkbox</ion-label>\n    </app-checkbox-wrapper>\n  </section>\n\n  <ion-item-divider sticky=\"true\">\n    <ion-label>Show/Hide Password</ion-label>\n  </ion-item-divider>\n  <section class=\"showcase-section\">\n    <p>\n      By wrapping an <code>&lt;ion-input&gt;</code> element with this component, you can enhance the UX and add a show/hide password functionality.\n    </p>\n<pre>\n&lt;app-show-hide-password&gt;\n  &lt;ion-input type=\"password\" placeholder=\"Try setting a password\" value=\"It's a secret!\"&gt;&lt;/ion-input&gt;\n&lt;/app-show-hide-password&gt;\n</pre>\n    <app-show-hide-password>\n      <ion-input type=\"password\" placeholder=\"Try setting a password\" value=\"It's a secret!\"></ion-input>\n    </app-show-hide-password>\n  </section>\n\n  <ion-item-divider sticky=\"true\">\n    <ion-label>Countdown Timer</ion-label>\n  </ion-item-divider>\n  <section class=\"showcase-section\">\n    <p>\n      This components shows the remaining time (in days, hours, minutes or seconds) to a given date.\n    </p>\n    <p>\n      A few examples on how to use this component:\n    </p>\n    <h5>From days to seconds</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'day', to: 'second'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'day', to: 'second'}\"></app-countdown-timer>\n    <h5>From days to minutes</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'day', to: 'minute'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'day', to: 'minute'}\"></app-countdown-timer>\n    <h5>From hours to seconds</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'hour', to: 'second'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n    <h5>From hours to minutes</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'hour', to: 'minute'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'minute'}\"></app-countdown-timer>\n    <h5>From minutes to seconds</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'minute', to: 'second'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'minute', to: 'second'}\"></app-countdown-timer>\n    <h5>Just days</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'day', to: 'day'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'day', to: 'day'}\"></app-countdown-timer>\n    <h5>Just hours</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'hour', to: 'hour'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\n    <h5>Just minutes</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'minute', to: 'minute'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'minute', to: 'minute'}\"></app-countdown-timer>\n    <h5>Just seconds</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'second', to: 'second'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'second', to: 'second'}\"></app-countdown-timer>\n  </section>\n  <section class=\"showcase-section\">\n    <h2>Styling</h2>\n    <p>\n      You can change different properties to adjust the look and feel of the component.\n    </p>\n    <h5>Fill</h5>\n<pre>\napp-countdown-timer &#123;\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: 10px;\n  --countdown-fill-background: #FFFFFF;\n  --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      background-color: transparent;\n      --countdown-padding: 10px;\n      --countdown-fill-border: none;\n      --countdown-fill-border-radius: 10px;\n      --countdown-fill-background: #FFFFFF;\n      --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n    \" fill=\"countdown\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n    <h5>Color</h5>\n<pre>\napp-countdown-timer &#123;\n  --countdown-fill-background: #000000;\n  --countdown-value-color: #FFFFFF;\n  --countdown-unit-color: #F2F2F2;\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      --countdown-fill-background: #000000;\n      --countdown-padding: 10px;\n      --countdown-value-color: #FFFFFF;\n      --countdown-unit-color: #F2F2F2;\n    \" fill=\"countdown\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n    <h5>Margins & Paddings</h5>\n<pre>\napp-countdown-timer &#123;\n  --countdown-margin: 0px;\n  --countdown-padding: 0px;\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: 2px;\n  --countdown-inner-time-padding: 0px;\n&#125;\n</pre>\n    <h5>Time unit positioning</h5>\n    <p>\n      Time units to the right (default)\n    </p>\n<pre>\napp-countdown-timer &#123;\n  --countdown-time-flex-direction: row-reverse;\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      --countdown-time-flex-direction: row-reverse;\n    \" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\n    <p>\n      Time units to the left\n    </p>\n<pre>\napp-countdown-timer &#123;\n  --countdown-time-flex-direction: row;\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      --countdown-time-flex-direction: row;\n    \" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\n    <p>\n      Time units above\n    </p>\n<pre>\napp-countdown-timer &#123;\n  --countdown-time-flex-direction: column;\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      --countdown-time-flex-direction: column;\n    \" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\n    <p>\n      Time units below\n    </p>\n<pre>\napp-countdown-timer &#123;\n  --countdown-time-flex-direction: column-reverse;\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      --countdown-time-flex-direction: column-reverse;\n    \" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\n    <p>\n      This component can be configured with different fill modes (by default, no fill will be applied).\n    </p>\n    <h5>Fill: Entire Countdown</h5>\n<pre>\n&lt;app-countdown-timer <b>fill=\"countdown\"</b> [end]=\"countdownDate\" [units]=\"&#123;from: 'hour', to: 'second'&#125;\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer style=\"\n    background-color: transparent;\n    --countdown-padding: 10px;\n    --countdown-fill-border: none;\n    --countdown-fill-border-radius: 10px;\n    --countdown-fill-background: #FFFFFF;\n    --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n    \" fill=\"countdown\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n    <h5>Fill: Time wrapper</h5>\n<pre>\n&lt;app-countdown-timer <b>fill=\"time\"</b> [end]=\"countdownDate\" [units]=\"&#123;from: 'hour', to: 'second'&#125;\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer style=\"\n    background-color: transparent;\n    --countdown-padding: 10px;\n    --countdown-time-margin: 0px 10px;\n    --countdown-time-padding: 10px 0px;\n    --countdown-fill-border: none;\n    --countdown-fill-border-radius: 10px;\n    --countdown-fill-background: #FFFFFF;\n    --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n    \" fill=\"time\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n    <h5>Fill: Inner Time Value</h5>\n<pre>\n&lt;app-countdown-timer <b>fill=\"inner-time\"</b> [end]=\"countdownDate\" [units]=\"&#123;from: 'hour', to: 'second'&#125;\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer style=\"\n    background-color: transparent;\n    --countdown-padding: 10px;\n    --countdown-inner-time-margin: 5px;\n    --countdown-inner-time-padding: 10px;\n    --countdown-fill-border: none;\n    --countdown-fill-border-radius: 10px;\n    --countdown-fill-background: #FFFFFF;\n    --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n    \" fill=\"inner-time\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n  </section>\n</ion-content>\n"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/app-shell.config */ "./src/app/shell/config/app-shell.config.ts");



class ShellModel {
    constructor() {
        this.isShell = false;
    }
}
class DataStore {
    constructor(shellModel) {
        this.shellModel = shellModel;
        // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
        // However, in production you should set this delay to 0 in the assets/config/app-shell.config.prod.json file.
        // tslint:disable-next-line:max-line-length
        this.networkDelay = (_config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.networkDelay) ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.networkDelay : 0;
        this.timeline = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
    }
    // Static function with generics
    // (ref: https://stackoverflow.com/a/24293088/1116959)
    // Append a shell (T & ShellModel) to every value (T) emmited to the timeline
    static AppendShell(dataObservable, shellModel, networkDelay = 400) {
        const delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(networkDelay));
        // Assign shell flag accordingly
        // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([
            delayObservable,
            dataObservable
        ]).pipe(
        // Dismiss unnecessary delayValue
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([delayValue, dataValue]) => Object.assign(dataValue, { isShell: false })), 
        // Set the shell model as the initial value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(Object.assign(shellModel, { isShell: true })));
    }
    load(dataSourceObservable) {
        const dataSourceWithShellObservable = DataStore.AppendShell(dataSourceObservable, this.shellModel, this.networkDelay);
        dataSourceWithShellObservable
            .subscribe((dataValue) => {
            this.timeline.next(dataValue);
        });
    }
    get state() {
        return this.timeline.asObservable();
    }
}
DataStore.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/showcase/custom-components/custom-components.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.module.ts ***!
  \************************************************************************/
/*! exports provided: CustomComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponentsModule", function() { return CustomComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _custom_components_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-components.page */ "./src/app/showcase/custom-components/custom-components.page.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../showcase.service */ "./src/app/showcase/showcase.service.ts");










let CustomComponentsModule = class CustomComponentsModule {
};
CustomComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _custom_components_page__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsPage"]
                }
            ])
        ],
        declarations: [
            _custom_components_page__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsPage"]
        ],
        providers: [
            _showcase_service__WEBPACK_IMPORTED_MODULE_9__["ShowcaseService"]
        ]
    })
], CustomComponentsModule);



/***/ }),

/***/ "./src/app/showcase/custom-components/custom-components.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background-shade);\n}\n.showcase-content ion-item-divider {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 100px;\n}\n.showcase-content pre {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content code {\n  color: #F92672;\n  font-weight: 500;\n}\n.showcase-content .custom-checkbox {\n  background: #CCC;\n  color: #000;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n}\n.showcase-content .custom-checkbox ion-label {\n  -webkit-margin-start: 10px;\n          margin-inline-start: 10px;\n}\n.showcase-content .custom-checkbox.checkbox-checked {\n  background: #00AFFF;\n  color: #FFF;\n}\n.showcase-content app-countdown-timer {\n  --countdown-value-color: var(--ion-color-darkest);\n  --countdown-unit-color: var(--ion-color-darkest);\n  padding: 20px;\n  margin-bottom: 40px;\n  background-color: #FFF;\n}\n.showcase-content app-show-hide-password {\n  background-color: #FFF;\n  padding: 0px 15px;\n}\n.showcase-content app-show-hide-password ion-input {\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2UvY3VzdG9tLWNvbXBvbmVudHMvRDpcXHNoaXRcXHBvZC1jcmVhdG9yL3NyY1xcYXBwXFxzaG93Y2FzZVxcY3VzdG9tLWNvbXBvbmVudHNcXGN1c3RvbS1jb21wb25lbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvY3VzdG9tLWNvbXBvbmVudHMvY3VzdG9tLWNvbXBvbmVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSx1QkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FES0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDSEo7QURLSTtFQUNFLDBCQUFBO1VBQUEseUJBQUE7QUNITjtBRE1JO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDSk47QURRRTtFQUNFLGlEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ05KO0FEU0U7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FDUEo7QURTSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNQTiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL2N1c3RvbS1jb21wb25lbnRzL2N1c3RvbS1jb21wb25lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDEwMHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5jdXN0b20tY2hlY2tib3gge1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMTBweDtcbiAgICB9XG5cbiAgICAmLmNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgYmFja2dyb3VuZDogIzAwQUZGRjtcbiAgICAgIGNvbG9yOiAjRkZGO1xuICAgIH1cbiAgfVxuXG4gIGFwcC1jb3VudGRvd24tdGltZXIge1xuICAgIC0tY291bnRkb3duLXZhbHVlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gICAgLS1jb3VudGRvd24tdW5pdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICB9XG5cbiAgYXBwLXNob3ctaGlkZS1wYXNzd29yZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59XG4uc2hvd2Nhc2UtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuY3VzdG9tLWNoZWNrYm94IHtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuY3VzdG9tLWNoZWNrYm94IGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuY3VzdG9tLWNoZWNrYm94LmNoZWNrYm94LWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjMDBBRkZGO1xuICBjb2xvcjogI0ZGRjtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGFwcC1jb3VudGRvd24tdGltZXIge1xuICAtLWNvdW50ZG93bi12YWx1ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICAtLWNvdW50ZG93bi11bml0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG4uc2hvd2Nhc2UtY29udGVudCBhcHAtc2hvdy1oaWRlLXBhc3N3b3JkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBhcHAtc2hvdy1oaWRlLXBhc3N3b3JkIGlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/showcase/custom-components/custom-components.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.page.ts ***!
  \**********************************************************************/
/*! exports provided: CustomComponentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponentsPage", function() { return CustomComponentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);



let CustomComponentsPage = class CustomComponentsPage {
    // Instead of hardcoded one
    // countdownDate = '12/01/2018';
    constructor() {
        // Relative date (better to showcase UI micro-interactions)
        this.countdownDate = dayjs__WEBPACK_IMPORTED_MODULE_2__().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss');
    }
};
CustomComponentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-showcase-custom-components',
        template: __webpack_require__(/*! raw-loader!./custom-components.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/custom-components.page.html"),
        styles: [__webpack_require__(/*! ./custom-components.page.scss */ "./src/app/showcase/custom-components/custom-components.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CustomComponentsPage);



/***/ })

}]);
//# sourceMappingURL=custom-components-custom-components-module-es2015.js.map