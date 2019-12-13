(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Log In</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"login-content\">\n  <h2 class=\"auth-title\">\n    Welcome!\n    <br/>\n    Discover the new Ionic 4\n  </h2>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-item class=\"input-item\">\n        <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validation_messages.email\">\n          <div class=\"error-message\" *ngIf=\"loginForm.get('email').hasError(validation.type) && (loginForm.get('email').dirty || loginForm.get('email').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item class=\"input-item\">\n        <app-show-hide-password>\n          <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n        </app-show-hide-password>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validation_messages.password\">\n          <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </ion-list>\n\n    <ion-button class=\"login-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!loginForm.valid\">Log In</ion-button>\n    <ion-row class=\"other-auth-options-row\">\n      <ion-button class=\"forgot-btn\" fill=\"clear\" [routerLink]=\"['/auth/forgot-password']\">\n        Forgot Password?\n      </ion-button>\n      <ion-button class=\"signup-btn\" fill=\"clear\" [routerLink]=\"['/auth/signup']\">\n        Sign Up!\n      </ion-button>\n    </ion-row>\n  </form>\n\n  <div class=\"social-auth-options\">\n    <p class=\"options-divider\">Or</p>\n    <ion-button class=\"social-auth-btn facebook-auth-btn\" expand=\"block\" color=\"facebook\" (click)=\"doFacebookLogin()\">Log In with Facebook</ion-button>\n    <ion-button class=\"social-auth-btn google-auth-btn\" expand=\"block\" color=\"google\" (click)=\"doGoogleLogin()\">Log In with Google</ion-button>\n    <ion-button class=\"social-auth-btn twitter-auth-btn\" expand=\"block\" color=\"twitter\" (click)=\"doTwitterLogin()\">Log In with Twitter</ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var LoginPage = /** @class */ (function () {
    function LoginPage(router, menu) {
        this.router = router;
        this.menu = menu;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('test@test.com', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        this.menu.enable(false);
    };
    LoginPage.prototype.doLogin = function () {
        console.log('do Log In');
        this.router.navigate(['app/categories']);
    };
    LoginPage.prototype.goToForgotPassword = function () {
        console.log('redirect to forgot-password page');
    };
    LoginPage.prototype.doFacebookLogin = function () {
        console.log('facebook login');
        this.router.navigate(['app/categories']);
    };
    LoginPage.prototype.doGoogleLogin = function () {
        console.log('google login');
        this.router.navigate(['app/categories']);
    };
    LoginPage.prototype.doTwitterLogin = function () {
        console.log('twitter login');
        this.router.navigate(['app/categories']);
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./styles/login.page.scss */ "./src/app/login/styles/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/login/styles/login.page.scss":
/*!**********************************************!*\
  !*** ./src/app/login/styles/login.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.login-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.login-content .auth-title {\n  color: var(--ion-color-dark);\n  font-weight: bold;\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: calc(var(--page-margin) * (3/2));\n  letter-spacing: 0.6px;\n}\n\n.login-content .inputs-list {\n  --ion-item-background: var(--page-background);\n}\n\n.login-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.login-content .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.login-content .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n\n.login-content .login-btn {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.login-content .other-auth-options-row {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.login-content .other-auth-options-row .forgot-btn {\n  --color: var(--ion-color-medium);\n  margin: 0px;\n}\n\n.login-content .other-auth-options-row .signup-btn {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n.login-content .social-auth-options .options-divider {\n  color: var(--ion-color-medium);\n  margin: var(--page-margin) 0px;\n  text-align: center;\n}\n\n.login-content .social-auth-options .social-auth-btn {\n  margin: 0px;\n}\n\n.login-content .social-auth-options .social-auth-btn:not(:first-child) {\n  margin-top: var(--page-margin);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vc3R5bGVzL0Q6XFxzaGl0XFxwb2QtY3JlYXRvci9zcmNcXGFwcFxcbG9naW5cXHN0eWxlc1xcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9zdHlsZXMvbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0NBQUE7RUFDQSw4Q0FBQTtBQ0RGOztBREtBO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQ0ZGOztBRElFO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsK0NBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBREtFO0VBQ0UsNkNBQUE7QUNISjs7QURLSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0hOOztBRE9NO0VBQ0Usd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNMUjs7QURPUTtFQUNFLGlEQUFBO1VBQUEsZ0RBQUE7QUNMVjs7QURXRTtFQUNFLHdDQUFBO0FDVEo7O0FEWUU7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDVko7O0FEWUk7RUFDRSxnQ0FBQTtFQUVBLFdBQUE7QUNYTjs7QURjSTtFQUNFLG1DQUFBO0VBRUEsV0FBQTtBQ2JOOztBRGtCSTtFQUNFLDhCQUFBO0VBQ0YsOEJBQUE7RUFDQSxrQkFBQTtBQ2hCSjs7QURtQkk7RUFDRSxXQUFBO0FDakJOOztBRG1CTTtFQUNFLDhCQUFBO0FDakJSIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vc3R5bGVzL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4ubG9naW4tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgLmF1dGgtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqICgzLzIpKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gIH1cblxuICAuaW5wdXRzLWxpc3Qge1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAgIC5pbnB1dC1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIH1cblxuICAgIC5lcnJvci1jb250YWluZXIge1xuICAgICAgLmVycm9yLW1lc3NhZ2Uge1xuICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxvZ2luLWJ0biB7XG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgfVxuXG4gIC5vdGhlci1hdXRoLW9wdGlvbnMtcm93IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5mb3Jnb3QtYnRuIHtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuXG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG5cbiAgICAuc2lnbnVwLWJ0biB7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcblxuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICB9XG5cbiAgLnNvY2lhbC1hdXRoLW9wdGlvbnMge1xuICAgIC5vcHRpb25zLWRpdmlkZXIge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBcdFx0bWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICBcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5zb2NpYWwtYXV0aC1idG4ge1xuICAgICAgbWFyZ2luOiAwcHg7XG5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuXG4ubG9naW4tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ubG9naW4tY29udGVudCAuYXV0aC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqICgzLzIpKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xufVxuLmxvZ2luLWNvbnRlbnQgLmlucHV0cy1saXN0IHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmxvZ2luLWNvbnRlbnQgLmlucHV0cy1saXN0IC5pbnB1dC1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuLmxvZ2luLWNvbnRlbnQgLmlucHV0cy1saXN0IC5lcnJvci1jb250YWluZXIgLmVycm9yLW1lc3NhZ2Uge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5sb2dpbi1jb250ZW50IC5pbnB1dHMtbGlzdCAuZXJyb3ItY29udGFpbmVyIC5lcnJvci1tZXNzYWdlIGlvbi1pY29uIHtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmxvZ2luLWNvbnRlbnQgLmxvZ2luLWJ0biB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG59XG4ubG9naW4tY29udGVudCAub3RoZXItYXV0aC1vcHRpb25zLXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2dpbi1jb250ZW50IC5vdGhlci1hdXRoLW9wdGlvbnMtcm93IC5mb3Jnb3QtYnRuIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIG1hcmdpbjogMHB4O1xufVxuLmxvZ2luLWNvbnRlbnQgLm90aGVyLWF1dGgtb3B0aW9ucy1yb3cgLnNpZ251cC1idG4ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWFyZ2luOiAwcHg7XG59XG4ubG9naW4tY29udGVudCAuc29jaWFsLWF1dGgtb3B0aW9ucyAub3B0aW9ucy1kaXZpZGVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbi1jb250ZW50IC5zb2NpYWwtYXV0aC1vcHRpb25zIC5zb2NpYWwtYXV0aC1idG4ge1xuICBtYXJnaW46IDBweDtcbn1cbi5sb2dpbi1jb250ZW50IC5zb2NpYWwtYXV0aC1vcHRpb25zIC5zb2NpYWwtYXV0aC1idG46bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59Il19 */"

/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map