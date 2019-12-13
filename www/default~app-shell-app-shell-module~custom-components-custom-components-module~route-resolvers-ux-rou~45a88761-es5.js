(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-shell-app-shell-module~custom-components-custom-components-module~route-resolvers-ux-rou~45a88761"],{

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



/***/ }),

/***/ "./src/app/showcase/showcase-shell.model.ts":
/*!**************************************************!*\
  !*** ./src/app/showcase/showcase-shell.model.ts ***!
  \**************************************************/
/*! exports provided: ShowcaseShellModel, ShowcaseShellUserModel, ShowcaseCommentModel, ShowcasePostModel, ShowcaseTaskModel, ShowcaseUser2Model, ShowcaseCompanyModel, ShowcaseCombinedTaskUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseShellModel", function() { return ShowcaseShellModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseShellUserModel", function() { return ShowcaseShellUserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseCommentModel", function() { return ShowcaseCommentModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcasePostModel", function() { return ShowcasePostModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseTaskModel", function() { return ShowcaseTaskModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseUser2Model", function() { return ShowcaseUser2Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseCompanyModel", function() { return ShowcaseCompanyModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseCombinedTaskUserModel", function() { return ShowcaseCombinedTaskUserModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");


var ShowcaseShellModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcaseShellModel, _super);
    function ShowcaseShellModel() {
        return _super.call(this) || this;
    }
    return ShowcaseShellModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var ShowcaseShellUserModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcaseShellUserModel, _super);
    function ShowcaseShellUserModel() {
        return _super.call(this) || this;
    }
    return ShowcaseShellUserModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var ShowcaseCommentModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcaseCommentModel, _super);
    function ShowcaseCommentModel() {
        return _super.call(this) || this;
    }
    return ShowcaseCommentModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var ShowcasePostModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcasePostModel, _super);
    function ShowcasePostModel() {
        return _super.call(this) || this;
    }
    return ShowcasePostModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var ShowcaseTaskModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcaseTaskModel, _super);
    function ShowcaseTaskModel() {
        return _super.call(this) || this;
    }
    return ShowcaseTaskModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var ShowcaseUser2Model = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcaseUser2Model, _super);
    function ShowcaseUser2Model() {
        return _super.call(this) || this;
    }
    return ShowcaseUser2Model;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var ShowcaseCompanyModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcaseCompanyModel, _super);
    function ShowcaseCompanyModel() {
        return _super.call(this) || this;
    }
    return ShowcaseCompanyModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var ShowcaseCombinedTaskUserModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcaseCombinedTaskUserModel, _super);
    function ShowcaseCombinedTaskUserModel() {
        return _super.call(this) || this;
    }
    return ShowcaseCombinedTaskUserModel;
}(ShowcaseTaskModel));



/***/ }),

/***/ "./src/app/showcase/showcase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/showcase/showcase.service.ts ***!
  \**********************************************/
/*! exports provided: ShowcaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseService", function() { return ShowcaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");





// tslint:disable-next-line:max-line-length


var ShowcaseService = /** @class */ (function () {
    function ShowcaseService(http) {
        this.http = http;
        this.openDataStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
    }
    ShowcaseService.prototype.getDataSourceWithDelay = function () {
        return this.http.get('./assets/sample-data/showcase/shell.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (val) {
            console.log('getData STARTED');
            // tslint:disable-next-line:no-console
            console.time('getData Roundtrip');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            console.log('getData COMPLETED');
            // tslint:disable-next-line:no-console
            console.timeEnd('getData Roundtrip');
        }));
    };
    ShowcaseService.prototype.getSimpleDataSource = function () {
        return this.http.get('./assets/sample-data/showcase/shell.json');
    };
    ShowcaseService.prototype.getSimpleDataStore = function (dataSource) {
        // Use cache if available
        if (!this.showcaseDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_5__["ShowcaseShellModel"]();
            this.showcaseDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.showcaseDataStore.load(dataSource);
        }
        return this.showcaseDataStore;
    };
    ShowcaseService.prototype.getListDataSource = function () {
        return this.http.get('https://reqres.in/api/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result['data']; }));
    };
    ShowcaseService.prototype.getPaginationDataSource = function (page) {
        return this.http.get('https://reqres.in/api/users?page=' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result['data']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (results) { return results.length > 0; }));
    };
    ShowcaseService.prototype.getMultipleDataSourceA = function () {
        return this.http.get('./assets/sample-data/travel/listing.json');
    };
    ShowcaseService.prototype.getMultipleDataSourceB = function () {
        return this.http.get('./assets/sample-data/fashion/listing.json');
    };
    ShowcaseService.prototype.getDependantDataSourcePost = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    };
    // tslint:disable-next-line:max-line-length
    ShowcaseService.prototype.getDependantDataSourcePostComments = function (dependantDataSource) {
        var _this = this;
        return dependantDataSource.pipe(
        // Filter user values that are not shells. We need to add this filter if using the combinedUserDataStore timeline
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (post) { return !post.isShell; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (post) {
            return _this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + post.id);
        }));
    };
    ShowcaseService.prototype.getUser = function (userId) {
        return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
    };
    // get the company details, a subset of the user data
    ShowcaseService.prototype.getUserSubsetData = function (userId) {
        var dataObservable = this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
        return dataObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (jsonResponse) {
            var filteredData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, jsonResponse.company);
            return filteredData;
        }));
    };
    ShowcaseService.prototype.getTasks = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/todos');
    };
    // Concat the task with the details of the user
    ShowcaseService.prototype.getCombinedTasksUserDataSource = function () {
        var _this = this;
        return this.getTasks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (tasks) {
            var completeTaskData = tasks.map(function (task) {
                // for each task retrun a new observable with the ShowcaseCombinedTaskUserModel
                var taskUser = _this.getUser(task.userId);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(task),
                    taskUser
                ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
                    var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), taskData = _b[0], user = _b[1];
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, taskData, { user: user });
                }));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(completeTaskData);
        }));
    };
    ShowcaseService.prototype.getOpenDataStream = function () {
        var firstLoadData = this.getPaginationDataSource(1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.openDataStream.asObservable(), firstLoadData);
    };
    ShowcaseService.prototype.pushValuesToOpenStream = function () {
        var stackedValues = this.getStackedValues();
        this.openDataStream.next(stackedValues);
    };
    ShowcaseService.prototype.getStackedValuesDataSource = function () {
        var stackedValues = this.getStackedValues();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(stackedValues).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(3000));
    };
    ShowcaseService.prototype.getStackedValues = function () {
        var newUser = {
            first_name: 'Agustin',
            last_name: 'Nitsuga',
            avatar: './assets/sample-images/user/person_1.jpg'
        };
        // Get a random integer between 1 (and only 1) and 'max'
        var getRand = function (max, min) {
            if (min === void 0) { min = 1; }
            return Math.floor(Math.random() * max) + min;
        };
        // Randomly send one, two or three users
        return Array(getRand(3)).fill(newUser);
    };
    ShowcaseService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ShowcaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ShowcaseService);
    return ShowcaseService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-shell-app-shell-module~custom-components-custom-components-module~route-resolvers-ux-rou~45a88761-es5.js.map