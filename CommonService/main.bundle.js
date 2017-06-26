webpackJsonp([2,4],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding:0\">\r\n  <header class=\"btn-danger clearfix\">\r\n    <h1 class=\"text-center\">Common Service</h1>\r\n  </header>\r\n  <div class=\"col-xs-12\">\r\n    <h3>Import the service in your app module to access throughout app</h3>\r\n    <code class=\"col-xs-12\" [innerHTML]='CodeModule'></code>\r\n  </div>\r\n  <div class=\"col-xs-12\">\r\n    <h3>To test the service we are using below sample data</h3>\r\n    <code class=\"col-xs-12\" [innerHTML]=\"sampleData\"></code>\r\n  </div>\r\n  <div class=\"col-xs-12\">\r\n    <h3>To read the complete code documentation and complete source code plase click below link</h3>\r\n    <a href=\"https://brpradeepprabhu.github.io/CommonService/documentation/injectables/CommonService.html\">Code documentation</a><br/>\r\n    <a href=\"https://github.com/brpradeepprabhu/commonServiceSample/archive/master.zip\">To download the Complete Source Code </a>\r\n  </div>\r\n  <div class=\"col-xs-12\">\r\n    <h3>To check sampleData is undefined</h3>\r\n    <code class=\"col-xs-12\">\r\n     this.undefinedData = this.cs.isUndefined(this.data);\r\n  </code>\r\n    <div class=\"alert alert-info\">\r\n      Sample Data is undefined = {{undefinedData}}\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-12\">\r\n    <h3>To check sampleData is defined</h3>\r\n    <code class=\"col-xs-12\">\r\n      this.definedData = this.cs.isDefined(this.data);\r\n    </code>\r\n    <div class=\"alert alert-info\">\r\n      Sample Data is defined = {{definedData}}\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-12\">\r\n    <h3>To check sampleData is object</h3>\r\n    <code class=\"col-xs-12\">\r\n      this.objectData = this.cs.isObject(this.data);\r\n  </code>\r\n    <div class=\"alert alert-info\">\r\n      Sample Data is Object = {{objectData}}\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-12\">\r\n    <h3>To loop the sampleData using forEach</h3>\r\n    <code class=\"col-xs-12\" [innerHTML]=\"forEachLoop\"></code>\r\n    <div class=\"alert alert-info\" role=\"alert\">\r\n      Sample Data values after join = {{valuesInArray}}\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-12\">\r\n    <h3>To copy the sample data</h3>\r\n    <code class=\"col-xs-12\" [innerHTML]=\"copyDataCode\"></code>\r\n    <div class=\"alert alert-info\" role=\"alert\">\r\n      Name in copy data= {{ this.copyData.name}}\r\n    </div>\r\n  </div>\r\n  <div>\r\n"

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Common functionalities of angular1
 */
var CommonService = (function () {
    /**
     * Initalize the common handler
     */
    function CommonService() {
        /**
         * To check whether object has own property
         * @type {(function(string): boolean)|(function(PropertyKey): boolean)}
         */
        this.hasOwnProperty = Object.prototype.hasOwnProperty;
        /**
         * To check whether the object has protoype
         * @type {function(any): any}
         */
        this.getPrototypeOf = Object.getPrototypeOf;
        /**
         * To check whether it is an array
         * @type {function(any): boolean}
         */
        this.isArray = Array.isArray;
    }
    /**
     * To add a class to the element
     * @param ele - Dom Element
     * @param className - adding the className
     */
    CommonService.prototype.addClass = function (ele, className) {
        ele.className = ele.className + " " + className;
    };
    /**
     * To remove a class from the element
     * @param ele
     * @param className
     */
    CommonService.prototype.removeClass = function (ele, className) {
        ele.className = ele.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    };
    /**
     * To check the object is blank
     * @param value
     * @returns {boolean}
     */
    CommonService.prototype.isBlankObject = function (value) {
        return value !== null && typeof value === 'object' && !this.getPrototypeOf(value);
    };
    /**
     * To check the value is defined
     * @param value
     * @returns {boolean}
     */
    CommonService.prototype.isDefined = function (value) {
        return typeof value !== 'undefined';
    };
    /**
     * To check the value is not defined
     * @param value
     * @returns {boolean}
     */
    CommonService.prototype.isUndefined = function (value) {
        return typeof value === 'undefined';
    };
    /**
     * To check the value is object
     * @param value
     * @returns {boolean}
     */
    CommonService.prototype.isObject = function (value) {
        // http://jsperf.com/isobject4
        return value !== null && typeof value === 'object';
    };
    /**
     * To check the value is string
     * @param value
     * @returns {boolean}
     */
    CommonService.prototype.isString = function (value) {
        return typeof value === 'string';
    };
    /**
     * To check the value is numberic
     * @param value
     * @returns {boolean}
     */
    CommonService.prototype.isNumber = function (value) {
        return typeof value === 'number';
    };
    /**
     * To check the value is Date
     * @param value
     * @returns {boolean}
     */
    CommonService.prototype.isDate = function (value) {
        return toString.call(value) === '[object Date]';
    };
    /**
     * To check the value is function
     * @param value
     * @returns {boolean}
     */
    CommonService.prototype.isFunction = function (value) {
        return typeof value === 'function';
    };
    /**
     * To check the value is window or not
     * @param obj
     * @returns {any|boolean}
     */
    CommonService.prototype.isWindow = function (obj) {
        return obj && obj.window === obj;
    };
    /**
     * To check whether the values is array like
     * @param obj
     * @returns {boolean}
     */
    CommonService.prototype.isArrayLike = function (obj) {
        if (obj == null || this.isWindow(obj))
            return false;
        // arrays, strings and jQuery/jqLite objects are array like
        // * jqLite is either the jQuery or jqLite constructor function
        // * we have to check the existence of jqLite first as this method is called
        //   via the forEach method when constructing the jqLite object in the first place
        if (this.isArray(obj) || this.isString(obj))
            return true;
        // Support: iOS 8.2 (not reproducible in simulator)
        // "length" in obj used to prevent JIT error (gh-11508)
        var length = 'length' in Object(obj) && obj.length;
        // NodeList objects (with `item` method) and
        // other objects with suitable length characteristics are array-like
        return this.isNumber(length) &&
            (length >= 0 && ((length - 1) in obj || obj instanceof Array) || typeof obj.item === 'function');
    };
    /**
     * To get each value of object/array
     * @param obj
     * @param iterator
     * @param context
     * @returns {any}
     */
    CommonService.prototype.forEach = function (obj, iterator, context) {
        var key, length;
        if (obj) {
            if (this.isFunction(obj)) {
                for (key in obj) {
                    if (key !== 'prototype' && key !== 'length' && key !== 'name' && obj.hasOwnProperty(key)) {
                        iterator.call(context, obj[key], key, obj);
                    }
                }
            }
            else if (this.isArray(obj) || this.isArrayLike(obj)) {
                var isPrimitive = typeof obj !== 'object';
                for (key = 0, length = obj.length; key < length; key++) {
                    if (isPrimitive || key in obj) {
                        iterator.call(context, obj[key], key, obj);
                    }
                }
            }
            else if (obj.forEach && obj.forEach !== this.forEach) {
                obj.forEach(iterator, context, obj);
            }
            else if (this.isBlankObject(obj)) {
                // createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
                for (key in obj) {
                    iterator.call(context, obj[key], key, obj);
                }
            }
            else if (typeof obj.hasOwnProperty === 'function') {
                // Slow path for objects inheriting Object.prototype, hasOwnProperty check needed
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        iterator.call(context, obj[key], key, obj);
                    }
                }
            }
            else {
                // Slow path for objects which do not have a method `hasOwnProperty`
                for (key in obj) {
                    if (this.hasOwnProperty.call(obj, key)) {
                        iterator.call(context, obj[key], key, obj);
                    }
                }
            }
        }
        return obj;
    };
    /**
     * To check the value is typedarray
     * @param value
     * @returns {any|boolean}
     */
    CommonService.prototype.isTypedArray = function (value) {
        var TYPED_ARRAY_REGEXP = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/;
        return value && this.isNumber(value.length) && TYPED_ARRAY_REGEXP.test(toString.call(value));
    };
    /**
     * To check the arraybuffer
     * @param obj
     * @returns {boolean}
     */
    CommonService.prototype.isArrayBuffer = function (obj) {
        return toString.call(obj) === '[object ArrayBuffer]';
    };
    /**
     * To check whether it is  valid max depth for the copy the element
     * @param maxDepth
     * @returns {boolean}
     */
    CommonService.prototype.isValidObjectMaxDepth = function (maxDepth) {
        return this.isNumber(maxDepth) && maxDepth > 0;
    };
    /**
     * To copy the element from destination to source
     * @param source
     * @param destination
     * @param maxDepth
     * @returns {any}
     */
    CommonService.prototype.copy = function (source, destination, maxDepth) {
        var stackSource = [];
        var stackDest = [];
        maxDepth = this.isValidObjectMaxDepth(maxDepth) ? maxDepth : NaN;
        if (destination) {
            if (this.isTypedArray(destination) || this.isArrayBuffer(destination)) {
                console.error('cpta', 'Can\'t copy! TypedArray destination cannot be mutated.');
                return;
            }
            if (source === destination) {
                console.error('Can\'t copy! Source and destination are identical.');
                return;
            }
            // Empty the destination object
            if (this.isArray(destination)) {
                destination.length = 0;
            }
            else {
                this.forEach(destination, function (value, key) {
                    if (key !== '$$hashKey') {
                        delete destination[key];
                    }
                }, this);
            }
            stackSource.push(source);
            stackDest.push(destination);
            return this.copyRecurse(source, destination, maxDepth, stackSource, stackDest);
        }
        return this.copyElement(source, maxDepth, stackSource, stackDest);
    };
    /**
     *  Inner function for the copy element
     * @param source
     * @param destination
     * @param maxDepth
     * @param stackSource
     * @param stackDest
     * @returns {any}
     */
    CommonService.prototype.copyRecurse = function (source, destination, maxDepth, stackSource, stackDest) {
        maxDepth--;
        if (maxDepth < 0) {
            return '...';
        }
        var h = destination.$$hashKey;
        var key;
        if (this.isArray(source)) {
            for (var i = 0, ii = source.length; i < ii; i++) {
                destination.push(this.copyElement(source[i], maxDepth, stackSource, stackDest));
            }
        }
        else if (this.isBlankObject(source)) {
            // createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
            for (key in source) {
                destination[key] = this.copyElement(source[key], maxDepth, stackSource, stackDest);
            }
        }
        else if (source && typeof source.hasOwnProperty === 'function') {
            // Slow path, which must rely on hasOwnProperty
            for (key in source) {
                if (source.hasOwnProperty(key)) {
                    destination[key] = this.copyElement(source[key], maxDepth, stackSource, stackDest);
                }
            }
        }
        else {
            // Slowest path --- hasOwnProperty can't be called as a method
            for (key in source) {
                if (this.hasOwnProperty.call(source, key)) {
                    destination[key] = this.copyElement(source[key], maxDepth, stackSource, stackDest);
                }
            }
        }
        this.setHashKey(destination, h);
        return destination;
    };
    /**
     * Set the hashkey for the object
     * @param obj
     * @param h
     */
    CommonService.prototype.setHashKey = function (obj, h) {
        if (h) {
            obj.$$hashKey = h;
        }
        else {
            delete obj.$$hashKey;
        }
    };
    /**
     * Inner function for the copy
     * @param source
     * @param maxDepth
     * @param stackSource
     * @param stackDest
     * @returns {any}
     */
    CommonService.prototype.copyElement = function (source, maxDepth, stackSource, stackDest) {
        // Simple values
        if (!this.isObject(source)) {
            return source;
        }
        // Already copied values
        var index = stackSource.indexOf(source);
        if (index !== -1) {
            return stackDest[index];
        }
        if (this.isWindow(source)) {
            console.error("cannot copy window object");
        }
        var needsRecurse = false;
        var destination = this.copyType(source, stackSource, stackDest);
        if (destination === undefined) {
            destination = this.isArray(source) ? [] : Object.create(this.getPrototypeOf(source));
            needsRecurse = true;
        }
        stackSource.push(source);
        stackDest.push(destination);
        return needsRecurse
            ? this.copyRecurse(source, destination, maxDepth, stackSource, stackDest)
            : destination;
    };
    /**
     * Inner function of the copy
     * @param source
     * @param stackSource
     * @param stackDest
     * @returns {any}
     */
    CommonService.prototype.copyType = function (source, stackSource, stackDest) {
        switch (toString.call(source)) {
            case '[object Int8Array]':
            case '[object Int16Array]':
            case '[object Int32Array]':
            case '[object Float32Array]':
            case '[object Float64Array]':
            case '[object Uint8Array]':
            case '[object Uint8ClampedArray]':
            case '[object Uint16Array]':
            case '[object Uint32Array]':
                return new source.constructor(this.copyElement(source.buffer, undefined, stackSource, stackDest), source.byteOffset, source.length);
            case '[object ArrayBuffer]':
                // Support: IE10
                if (!source.slice) {
                    // If we're in this case we know the environment supports ArrayBuffer
                    /* eslint-disable no-undef */
                    var copied = new ArrayBuffer(source.byteLength);
                    new Uint8Array(copied).set(new Uint8Array(source));
                    /* eslint-enable */
                    return copied;
                }
                return source.slice(0);
            case '[object Boolean]':
            case '[object Number]':
            case '[object String]':
            case '[object Date]':
                return new source.constructor(source.valueOf());
            case '[object RegExp]':
                var re = new RegExp(source.source, source.toString().match(/[^/]*$/)[0]);
                re.lastIndex = source.lastIndex;
                return re;
            case '[object Blob]':
                return new source.constructor([source], { type: source.type });
        }
        if (this.isFunction(source.cloneNode)) {
            return source.cloneNode(true);
        }
    };
    return CommonService;
}());
CommonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CommonService);

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 73;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(84);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(cs) {
        this.cs = cs;
        this.title = 'app works!';
        this.data = { name: "CommonService", type: "Angular Service" };
        this.CodeModule = "import { CommonService } from './common.service'; <br/> @NgModule({<br/> declarations: [AppComponent],<br/>  imports: [  BrowserModule, FormsModule,  HttpModule],<br/>  providers: [CommonService], <br/>  bootstrap: [AppComponent]<br/>})";
        this.sampleData = '   data = { name: "CommonService", type: "Angular Service" }';
        this.forEachLoop = 'this.cs.forEach(this.data, function (value, key) {<br/>      this.valueArray.push(value);<br/>      this.valuesInArray = this.valueArray.join(",");<br/>    }, this);<br/>';
        this.valueArray = [];
        this.undefinedData = this.cs.isUndefined(this.data);
        this.definedData = this.cs.isDefined(this.data);
        this.objectData = this.cs.isObject(this.data);
        this.cs.forEach(this.data, function (value, key) {
            this.valueArray.push(value);
            this.valuesInArray = this.valueArray.join(",");
            console.log(key);
        }, this);
        this.copyDataCode = 'this.copyData = this.cs.copy(this.data,this.copyData); <br/> this.copyData.name = "Common Service using angular copy";';
        this.copyData = this.cs.copy(this.data, this.copyData);
        this.copyData.name = "Common Service using angular copy";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(141),
        styles: [__webpack_require__(139)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_service__ = __webpack_require__(49);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 84:
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

/***/ })

},[169]);
//# sourceMappingURL=main.bundle.js.map