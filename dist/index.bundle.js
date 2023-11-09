"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/styles/main.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/styles/main.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/views/images/crack.png */ "./src/views/images/crack.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    border: 0;
    height: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

:root {
    font-size: 2vh;
    --board-width: 0;
    --board-height: 0;
    --cell-size: 5vh;
}

html {
    font-family: Roboto;
}

.wrapper {
    display: grid;
    grid-template-rows: min-content 1fr;
    justify-items: center;
    align-content: center;
    max-width: 100%;
    max-height: 100%;
    row-gap: 2vh;
}

span {
    padding: 1vh;
    height: min-content;
    min-width: max-content;
}

.header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    width: 100%;
    padding: 2vh;
}

.title {
    display: grid;
    font-size: 3rem;
}

.tips {
    display: grid;
    background-color: rgba(128, 128, 128, 0.2);
    align-items: center;
    padding: 1vh;
    border-radius: min(2vh, 2vw);
    height: min-content;
}

.main {
    display: grid;
    width: 100%;
    justify-content: center;
    align-items: center;
    grid-template-columns: min-content min-content;
    height: min-content;
}

.shipyard {
    display: grid;
    align-content: center;
    grid-template-rows: repeat(4, min-content);
    row-gap: 6vh;
    padding: 2vh;
    width: 40vh;
    height: 40vh;
}

.dock {
    display: flex;
    column-gap: 4vh;
}

.selected {
    opacity: 0.01;
}

.board__axis-wrapper {
    display: grid;
    grid-template-rows: min-content min-content;
    row-gap: 2vh;
    width: min-content;
    height: 100%;
    padding: 5vh;
}

.axis-wrapper {
    display: grid;
    width: min-content;
    grid-template-rows: min-content 1fr;
}

.x-axis {
    display: grid;
    width: min-content;
    padding-left: var(--cell-size);
    grid-template-columns: repeat(var(--board-width), 2fr);
}

.board-wrapper {
    display: grid;
    grid-template-columns: min-content min-content;
    grid-template-areas: 'axis-y board';
}

.y-axis {
    display: grid;
    grid-area: axis-y;
    grid-template-rows: repeat(var(--board-height), 2fr);
}

.board {
    grid-area: board;
    display: inline-grid;
    grid-template-columns: repeat(var(--board-width), 2fr);
    grid-template-rows: repeat(var(--board-height), 2fr);
    border: 0.5vh rgba(0, 0, 255, 0.2) solid;
}

.play {
    grid-area: board;
    display: grid;
    justify-self: center;
    align-self: center;
    width: 10vh;
    height: 10vh;
    background-color: rgba(119, 202, 41, 0.726);
    border: 1vh rgb(119, 202, 41) solid;
    z-index: 1000;
}

.low-opacity {
    opacity: 0.4;
}

.block {
    pointer-events: none;
}

.hidden {
    display: none;
}

.marker {
    display: grid;
    justify-content: center;
    padding-left: 5vh;
}

.cell {
    display: grid;
    width: var(--cell-size);
    height: var(--cell-size);
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.miss-hit {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: 100% 100%;
}

.x-cell,
.y-cell {
    justify-content: center;
    align-items: center;
    opacity: 0.5;
}

.marine-sector {
    display: grid;

    border: 0.1vh rgba(0, 0, 255, 0.2) solid;
}

.ship {
    display: grid;
    align-content: center;
    justify-content: center;
    margin-left: -1px;
    margin-top: -1px;
    border: 0.3vh rgba(0, 0, 255, 1) solid;
}

.horizontal {
    grid-template-columns: repeat(4, 2fr);
}

.vertical {
    grid-template-rows: repeat(4, 2fr);
}

.deck {
    display: grid;
    background-color: rgba(0, 0, 255, 0.1);
    z-index: 999;
}

.footer {
    display: grid;
    grid-template-columns: min-content min-content;
    width: 100%;
    justify-content: center;
    gap: 4vh;
}

.random-mode,
.manual-mode {
    height: min-content;
    display: grid;
    border-bottom: 1px dotted blue;
    color: blue;
    cursor: pointer;
}

.random-mode:hover,
.manual-mode:hover {
    color: rgb(122, 231, 72);
    border-bottom: 1px dotted rgb(122, 231, 72);
}

.hidden {
    display: none;
}`, "",{"version":3,"sources":["webpack://./src/views/styles/main.css"],"names":[],"mappings":"AAAA;;;IAGI,UAAU;IACV,SAAS;IACT,SAAS;IACT,YAAY;IACZ,sBAAsB;IACtB,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,mBAAmB;IACnB,YAAY;IACZ,4BAA4B;IAC5B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,8CAA8C;IAC9C,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,0CAA0C;IAC1C,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,2CAA2C;IAC3C,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,8BAA8B;IAC9B,sDAAsD;AAC1D;;AAEA;IACI,aAAa;IACb,8CAA8C;IAC9C,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,oDAAoD;AACxD;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,sDAAsD;IACtD,oDAAoD;IACpD,wCAAwC;AAC5C;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,2CAA2C;IAC3C,mCAAmC;IACnC,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,yDAAkD;IAClD,0BAA0B;AAC9B;;AAEA;;IAEI,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;;IAEb,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,iBAAiB;IACjB,gBAAgB;IAChB,sCAAsC;AAC1C;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8CAA8C;IAC9C,WAAW;IACX,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;;IAEI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,eAAe;AACnB;;AAEA;;IAEI,wBAAwB;IACxB,2CAA2C;AAC/C;;AAEA;IACI,aAAa;AACjB","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n}\n\n:root {\n    font-size: 2vh;\n    --board-width: 0;\n    --board-height: 0;\n    --cell-size: 5vh;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    justify-items: center;\n    align-content: center;\n    max-width: 100%;\n    max-height: 100%;\n    row-gap: 2vh;\n}\n\nspan {\n    padding: 1vh;\n    height: min-content;\n    min-width: max-content;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    width: 100%;\n    padding: 2vh;\n}\n\n.title {\n    display: grid;\n    font-size: 3rem;\n}\n\n.tips {\n    display: grid;\n    background-color: rgba(128, 128, 128, 0.2);\n    align-items: center;\n    padding: 1vh;\n    border-radius: min(2vh, 2vw);\n    height: min-content;\n}\n\n.main {\n    display: grid;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    grid-template-columns: min-content min-content;\n    height: min-content;\n}\n\n.shipyard {\n    display: grid;\n    align-content: center;\n    grid-template-rows: repeat(4, min-content);\n    row-gap: 6vh;\n    padding: 2vh;\n    width: 40vh;\n    height: 40vh;\n}\n\n.dock {\n    display: flex;\n    column-gap: 4vh;\n}\n\n.selected {\n    opacity: 0.01;\n}\n\n.board__axis-wrapper {\n    display: grid;\n    grid-template-rows: min-content min-content;\n    row-gap: 2vh;\n    width: min-content;\n    height: 100%;\n    padding: 5vh;\n}\n\n.axis-wrapper {\n    display: grid;\n    width: min-content;\n    grid-template-rows: min-content 1fr;\n}\n\n.x-axis {\n    display: grid;\n    width: min-content;\n    padding-left: var(--cell-size);\n    grid-template-columns: repeat(var(--board-width), 2fr);\n}\n\n.board-wrapper {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    grid-template-areas: 'axis-y board';\n}\n\n.y-axis {\n    display: grid;\n    grid-area: axis-y;\n    grid-template-rows: repeat(var(--board-height), 2fr);\n}\n\n.board {\n    grid-area: board;\n    display: inline-grid;\n    grid-template-columns: repeat(var(--board-width), 2fr);\n    grid-template-rows: repeat(var(--board-height), 2fr);\n    border: 0.5vh rgba(0, 0, 255, 0.2) solid;\n}\n\n.play {\n    grid-area: board;\n    display: grid;\n    justify-self: center;\n    align-self: center;\n    width: 10vh;\n    height: 10vh;\n    background-color: rgba(119, 202, 41, 0.726);\n    border: 1vh rgb(119, 202, 41) solid;\n    z-index: 1000;\n}\n\n.low-opacity {\n    opacity: 0.4;\n}\n\n.block {\n    pointer-events: none;\n}\n\n.hidden {\n    display: none;\n}\n\n.marker {\n    display: grid;\n    justify-content: center;\n    padding-left: 5vh;\n}\n\n.cell {\n    display: grid;\n    width: var(--cell-size);\n    height: var(--cell-size);\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n\n.miss-hit {\n    background-image: url(/src/views/images/crack.png);\n    background-size: 100% 100%;\n}\n\n.x-cell,\n.y-cell {\n    justify-content: center;\n    align-items: center;\n    opacity: 0.5;\n}\n\n.marine-sector {\n    display: grid;\n\n    border: 0.1vh rgba(0, 0, 255, 0.2) solid;\n}\n\n.ship {\n    display: grid;\n    align-content: center;\n    justify-content: center;\n    margin-left: -1px;\n    margin-top: -1px;\n    border: 0.3vh rgba(0, 0, 255, 1) solid;\n}\n\n.horizontal {\n    grid-template-columns: repeat(4, 2fr);\n}\n\n.vertical {\n    grid-template-rows: repeat(4, 2fr);\n}\n\n.deck {\n    display: grid;\n    background-color: rgba(0, 0, 255, 0.1);\n    z-index: 999;\n}\n\n.footer {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    width: 100%;\n    justify-content: center;\n    gap: 4vh;\n}\n\n.random-mode,\n.manual-mode {\n    height: min-content;\n    display: grid;\n    border-bottom: 1px dotted blue;\n    color: blue;\n    cursor: pointer;\n}\n\n.random-mode:hover,\n.manual-mode:hover {\n    color: rgb(122, 231, 72);\n    border-bottom: 1px dotted rgb(122, 231, 72);\n}\n\n.hidden {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/views/styles/main.css":
/*!***********************************!*\
  !*** ./src/views/styles/main.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controllers/listeners/forLinks.js":
/*!***********************************************!*\
  !*** ./src/controllers/listeners/forLinks.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setListenersForLinks: () => (/* binding */ setListenersForLinks)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/animations/changeVisible */ "./src/views/animations/changeVisible.js");
/* harmony import */ var _views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/nodes/shipyard */ "./src/views/nodes/shipyard.js");




const setListenersForLinks = () => {
    const manualModeLink = document.querySelector('.manual-mode');
    const randomModeLink = document.querySelector('.random-mode');
    const shipyard = document.querySelector('.shipyard');

    const openManualMode = manualModeLink.addEventListener('click', (e) => {
        ___WEBPACK_IMPORTED_MODULE_0__.game.player.getGameboard().reset();
        (0,_views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_2__.viewShipyard)(___WEBPACK_IMPORTED_MODULE_0__.game.player.getShipyard());
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setHidden)(___WEBPACK_IMPORTED_MODULE_0__.game.ai.getGameboard().getNode());
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.removeHidden)(shipyard);
    });

    const openRandomMode = randomModeLink.addEventListener('click', (e) => {
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.removeHidden)(___WEBPACK_IMPORTED_MODULE_0__.game.ai.getGameboard().getNode());
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setHidden)(shipyard);
        ___WEBPACK_IMPORTED_MODULE_0__.game.player.getGameboard().randomFillingOfShips();
    });
};


/***/ }),

/***/ "./src/controllers/listeners/forPlay.js":
/*!**********************************************!*\
  !*** ./src/controllers/listeners/forPlay.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setListenersForPlayButton: () => (/* binding */ setListenersForPlayButton)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");


const setListenersForPlayButton = () => {
    const button = document.querySelector('.play');

    const click = button.addEventListener('click', e => {
        ___WEBPACK_IMPORTED_MODULE_0__.game.play();
    })
}

/***/ }),

/***/ "./src/controllers/listeners/forShips.js":
/*!***********************************************!*\
  !*** ./src/controllers/listeners/forShips.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setListenersForShips: () => (/* binding */ setListenersForShips)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/session */ "./src/models/session.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ship */ "./src/controllers/ship.js");





const setListenersForShips = (ships) => {
    const border = document.querySelector('.player-board');
    ships.forEach((ship) => {
        const decks = ship.getBody();
        decks.forEach((deck) => {
            deck.getCellNode().addEventListener('mousedown', (evt) => {
                _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.index = deck.getNumber();
            });
        });

        ship.getContainer().addEventListener('click', (e) => {
            if (ship.getHead() !== null) {
                _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip = ship;
                _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement = ship.getHead().getCellNode();
                ship.orientationSwitch();
                let isView = (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__.viewShip)(ship, ship.getHead());

                if (isView) {
                    ship.setOrientation();
                } else {
                    ship.orientationSwitch();
                }

                (0,_models_session__WEBPACK_IMPORTED_MODULE_1__.resetSession)();
            }
        });

        ship.getContainer().addEventListener(`dragstart`, (evt) => {
            evt.target.classList.add(`selected`);
            ___WEBPACK_IMPORTED_MODULE_0__.game.player
                .getGameboard()
                .getUnstructedContainer()
                .forEach((cell) => {
                    cell.getCellNode().style.border = '';
                });
            _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip = ship;
        });

        ship.getContainer().addEventListener(`dragend`, (evt) => {
            evt.target.classList.remove(`selected`);
            (0,_ship__WEBPACK_IMPORTED_MODULE_3__.shipDragEnd)();
            (0,_models_session__WEBPACK_IMPORTED_MODULE_1__.resetSession)();
        });
    });

    border.addEventListener(`dragover`, (evt) => {
        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement = evt.target;
    });
};


/***/ }),

/***/ "./src/controllers/ship.js":
/*!*********************************!*\
  !*** ./src/controllers/ship.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shipDragEnd: () => (/* binding */ shipDragEnd)
/* harmony export */ });
/* harmony import */ var _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/gameConfig */ "./src/models/gameConfig.js");
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/session */ "./src/models/session.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");




const shipDragEnd = () => {
    let isMoveable = false;
    let isAlterMovable = false;
    let body = _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip.getBody();
    if (_models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement !== null) {
        isMoveable = _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement.classList.contains(`marine-sector`);
        isAlterMovable = _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement.classList.contains(`deck`);
    }

    if (!isMoveable && !isAlterMovable) {
        return false;
    }

    if (isMoveable) {
        for (let i = 0; i < _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Gameboard.height; i++) {
            for (let j = 0; j < _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Gameboard.width; j++) {
                if (
                    _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip
                        .getBoard()
                        .getStructedContainer()
                        [j][i].getCellNode() === _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement
                ) {
                    return addShipOnBoard(_models_session__WEBPACK_IMPORTED_MODULE_1__.Session.index, j, i);
                }
            }
        }
    } else if (isAlterMovable) {
        for (let i = 0; i < body.length; i++) {
            if (body[i].getCellNode() === _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement) {
                _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.doubleIndex = _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.index - i;
            }
        }
        if (_models_session__WEBPACK_IMPORTED_MODULE_1__.Session.doubleIndex !== 'ship') {
            let head = _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip.getHead().getCellNode();
            for (let i = 0; i < _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Gameboard.height; i++) {
                for (let j = 0; j < _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Gameboard.width; j++) {
                    if (
                        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip
                            .getBoard()
                            .getStructedContainer()
                            [j][i].getCellNode() === head
                    ) {
                        return addShipOnBoard(_models_session__WEBPACK_IMPORTED_MODULE_1__.Session.doubleIndex, j, i);
                    }
                }
            }
        } else {
            return false;
        }
    }
};

const addShipOnBoard = (index, y, x) => {
    let data = getData(index, y, x);
    return viewShipOnBoard(data);
};

const getData = (index, x, y) => {
    return _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip.isHorizontal()
        ? { x: x, y: y - index }
        : { x: x - index, y: y };
};

const viewShipOnBoard = (data) => {
    return (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__.viewShip)(
        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip,
        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip.getBoard().getStructedContainer()[data.x][data.y],
    );
};


/***/ }),

/***/ "./src/helper/helper.js":
/*!******************************!*\
  !*** ./src/helper/helper.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randomIntFromInterval: () => (/* binding */ randomIntFromInterval),
/* harmony export */   removeChilds: () => (/* binding */ removeChilds)
/* harmony export */ });
const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const removeChilds = (node) => {
    if (node !== null) {
        while (node.firstChild) {
            node.removeChild(node.lastChild);
        }
    }
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   game: () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _views_styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/styles/main.css */ "./src/views/styles/main.css");
/* harmony import */ var _models_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/player */ "./src/models/player.js");
/* harmony import */ var _views_nodes_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/nodes/profile */ "./src/views/nodes/profile.js");
/* harmony import */ var _controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/listeners/forLinks */ "./src/controllers/listeners/forLinks.js");
/* harmony import */ var _views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/nodes/shipyard */ "./src/views/nodes/shipyard.js");
/* harmony import */ var _controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/listeners/forShips */ "./src/controllers/listeners/forShips.js");
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/game */ "./src/models/game.js");








const game = (0,_models_game__WEBPACK_IMPORTED_MODULE_6__.Game)();
game.start();
game.player.getGameboard().randomFillingOfShips();

/***/ }),

/***/ "./src/models/alphabets.js":
/*!*********************************!*\
  !*** ./src/models/alphabets.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alphabets: () => (/* binding */ Alphabets)
/* harmony export */ });
const Alphabet = (firstCharCode, lastCharCode) => {
    const long = lastCharCode - firstCharCode + 1;
    const codes = Array.from(Array(long).keys(), (x) => x + firstCharCode);

    const isThisAlphabet = (charCode) => {
        if (charCode >= firstCharCode && charCode <= lastCharCode) {
            return true;
        }
        return false;
    };

    return { firstCharCode, lastCharCode, long, isThisAlphabet, codes };
};

const Alphabets = (() => {
    const eng = () => {
        const alphabet = Alphabet(97, 122);
        return Object.assign(alphabet);
    };

    const rus = () => {
        const alphabet = Alphabet(1072, 1103);
        return Object.assign(alphabet);
    };

    return { eng, rus };
})();


/***/ }),

/***/ "./src/models/cell.js":
/*!****************************!*\
  !*** ./src/models/cell.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cell: () => (/* binding */ Cell),
/* harmony export */   Deck: () => (/* binding */ Deck),
/* harmony export */   MarineSector: () => (/* binding */ MarineSector)
/* harmony export */ });
/* harmony import */ var _views_nodes_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/nodes/factory */ "./src/views/nodes/factory.js");


const Cell = (x = -1, y = -1, name = 'cell') => {
    let hit = false;
    let parent = 'free';
    let node = (0,_views_nodes_factory__WEBPACK_IMPORTED_MODULE_0__.getNode)(name, 'cell');

    const setTheHit = () => {
        hit = true;
    };

    const isHit = () => {
        return hit;
    };

    const setParent = (nParent) => {
        parent = nParent;
    };

    const getParent = () => {
        return parent;
    };

    const getCellNode = () => {
        return node;
    };

    const getXY = () => {
        return { x, y };
    };

    const setXY = (nx, ny) => {
        x = nx;
        y = ny;
    };

    return {
        setTheHit,
        isHit,
        setParent,
        getParent,
        getCellNode,
        getXY,
        setXY
    };
};

const Deck = (number) => {
    const prototype = Cell(-1, -1, 'deck');

    const getNumber = () => {
        return number;
    };

    return Object.assign(prototype, { getNumber });
};

const MarineSector = (y, x) => {
    const prototype = Cell(y, x, 'marine-sector');
    let occupant = 'free';

    const occupy = (nOccupant) => {
        occupant = nOccupant;
    };

    const clear = () => {
        occupant = 'free';
    };

    const isFree = () => {
        return occupant === 'free';
    };

    const getOccupant = () => {
        return occupant;
    };

    return Object.assign(prototype, { isFree, clear, occupy, getOccupant });
};


/***/ }),

/***/ "./src/models/cellHandler.js":
/*!***********************************!*\
  !*** ./src/models/cellHandler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CellHandler: () => (/* binding */ CellHandler)
/* harmony export */ });
const CellHandler = () => {
    const getBefore = (x, y, parent) => {
        try {
            return parent[y][--x];
        } catch (error) {
            return parent[y][++x];
        }
    };

    const getAfter = (x, y, parent) => {
        try {
            return parent[y][++x];
        } catch (error) {
            return parent[y][--x];
        }
    };

    const getOver = (x, y, parent) => {
        try {
            return parent[--y][x];
        } catch (error) {
            return parent[++y][x];
        }
    };

    const getUnder = (x, y, parent) => {
        try {
            return parent[++y][x];
        } catch (error) {
            return parent[--y][x];
        }
    };

    const getDiag1 = (x, y, parent) => {
        try {
            return parent[--y][--x];
        } catch (error) {
            return parent[++y][++x];
        }
    };

    const getDiag2 = (x, y, parent) => {
        try {
            return parent[--y][++x];
        } catch (error) {
            return parent[++y][--x];
        }
    };

    const getDiag3 = (x, y, parent) => {
        try {
            return parent[++y][++x];
        } catch (error) {
            return parent[--y][--x];
        }
    };

    const getDiag4 = (x, y, parent) => {
        try {
            return parent[++y][--x];
        } catch (error) {
            return parent[--y][++x];
        }
    };

    const getCellAroundArea = (x, y, parent, container) => {
        let cells = [];
        cells.push(getBefore(x, y, parent));
        cells.push(getAfter(x, y, parent));
        cells.push(getOver(x, y, parent));
        cells.push(getUnder(x, y, parent));
        cells.push(getDiag1(x, y, parent));
        cells.push(getDiag2(x, y, parent));
        cells.push(getDiag3(x, y, parent));
        cells.push(getDiag4(x, y, parent));
        cells = cells.filter((cell) => cell !== undefined);
        return cells;
    };

    return { getCellAroundArea };
};


/***/ }),

/***/ "./src/models/game.js":
/*!****************************!*\
  !*** ./src/models/game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/listeners/forLinks */ "./src/controllers/listeners/forLinks.js");
/* harmony import */ var _controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/listeners/forPlay */ "./src/controllers/listeners/forPlay.js");
/* harmony import */ var _controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/listeners/forShips */ "./src/controllers/listeners/forShips.js");
/* harmony import */ var _views_dragAndDrop_ships__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/dragAndDrop/ships */ "./src/views/dragAndDrop/ships.js");
/* harmony import */ var _views_nodes_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/nodes/profile */ "./src/views/nodes/profile.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/nodes/shipyard */ "./src/views/nodes/shipyard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player */ "./src/models/player.js");









const Game = () => {
    let player = (0,_player__WEBPACK_IMPORTED_MODULE_7__.Profile)(1, 'Player', 'player-board');
    let ai = (0,_player__WEBPACK_IMPORTED_MODULE_7__.Profile)(0, 'AI', 'ai-board');
    let move = 'player';
    let playerCells = [...player.getGameboard().getUnstructedContainer()];
    let aiCells = [...ai.getGameboard().getStructedContainer()];

    const viewInterfaces = () => {
        (0,_views_nodes_profile__WEBPACK_IMPORTED_MODULE_4__.viewProfile)(player);
        (0,_views_nodes_profile__WEBPACK_IMPORTED_MODULE_4__.viewProfile)(ai);
        (0,_views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_6__.viewShipyard)(player);
    }

    const setListeners = () => {
        ;(0,_controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_2__.setListenersForShips)(player.getShipyard().getAllShips());
        (0,_controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_0__.setListenersForLinks)();
        (0,_controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_1__.setListenersForPlayButton)();
    }

    const start = () => {
        setListeners();
        viewInterfaces();
    }

    const play = () => {
        document.querySelector('.play').classList.add('hidden');
        document.querySelector('.footer').classList.add('hidden');
        document.querySelector('.tips').classList.add('hidden');

        player.getGameboard().blockShips();
        playerMove()
        setInterval(() => {
            switchMove();
        }, 5000);
    }

    const switchMove = () => {
        if (move === 'ai') {
            move = 'player';
            playerMove();
        } else {
            move = 'ai';
            aiMove();
        }
    }

    const playerMove = () => {
        setPlayerMoveDesign(ai, player);
    }

    const aiMove = () => {
        setAiMoveDesign(ai, player);
        randomAiHit(playerCells)
    }

    return { start, play, ai, player }
}

const setPlayerMoveDesign = (ai, player) => {
    ai.getGameboard().getNode().querySelector('.x-axis').classList.remove('low-opacity');
    ai.getGameboard().getNode().querySelector('.y-axis').classList.remove('low-opacity');
    ai.getGameboard().getNode().querySelector('.board').classList.remove('low-opacity');
    player.getGameboard().getNode().querySelector('.x-axis').classList.add('low-opacity');
    player.getGameboard().getNode().querySelector('.y-axis').classList.add('low-opacity');
    player.getGameboard().getNode().querySelector('.board').classList.add('low-opacity');
}

const setAiMoveDesign = (ai, player) => {
    player.getGameboard().getNode().querySelector('.x-axis').classList.remove('low-opacity');
    player.getGameboard().getNode().querySelector('.y-axis').classList.remove('low-opacity');
    player.getGameboard().getNode().querySelector('.board').classList.remove('low-opacity');
    ai.getGameboard().getNode().querySelector('.x-axis').classList.add('low-opacity');
    ai.getGameboard().getNode().querySelector('.y-axis').classList.add('low-opacity');
    ai.getGameboard().getNode().querySelector('.board').classList.add('low-opacity');
}

const randomAiHit = (playerCells) => {
    if (playerCells.length > 0) {
        let cell = (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_5__.getRandomCell)(playerCells);
        console.log(cell)
        cell.getCellNode().classList.add('miss-hit');
    }
}

/***/ }),

/***/ "./src/models/gameBoard.js":
/*!*********************************!*\
  !*** ./src/models/gameBoard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameConfig */ "./src/models/gameConfig.js");






const Gameboard = (name, player) => {
    const width = _gameConfig__WEBPACK_IMPORTED_MODULE_4__.Config.Gameboard.width;
    const height = _gameConfig__WEBPACK_IMPORTED_MODULE_4__.Config.Gameboard.height;
    const containers = fillBoard(width, height);
    const node = document.querySelector(`.${name}`);

    const getStructedContainer = () => {
        return containers.getStructed();
    };

    const getUnstructedContainer = () => {
        return containers.getUnstructed();
    };

    const getSize = () => {
        return { width, height };
    };

    const getNode = () => {
        return node;
    };

    const getPlayer = () => {
        return player;
    };

    const reset = () => {
        containers.getUnstructed().forEach((sector) => {
            sector.clear();
        });
        player.getShipyard().reset();
    };

    const randomFillingOfShips = () => {
        reset();
        let ships = player.getShipyard().getAllShips();

        ships.forEach((ship) => {
            ship.setRandomOrientation();
            (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__.viewShipOnRandomCell)(ship, [...getUnstructedContainer()]);
        });
    };

    const blockShips = () => {
        node.querySelectorAll('.ship').forEach(ship => {
            ship.classList.add('block');
        });
    }

    return {
        randomFillingOfShips,
        reset,
        getPlayer,
        getStructedContainer,
        getUnstructedContainer,
        getSize,
        getNode,
        blockShips
    };
};

const fillBoard = (width, height) => {
    let structed = [];
    let unstructed = [];

    for (let i = 0; i < height; i++) {
        let line = [];
        for (let j = 0; j < width; j++) {
            const cell = (0,_cell__WEBPACK_IMPORTED_MODULE_3__.MarineSector)(j, i);
            line[j] = cell;
            unstructed.push(cell);
        }
        structed[i] = line;
    }

    const getStructed = () => {
        return structed;
    };

    const getUnstructed = () => {
        return unstructed;
    };

    return { getStructed, getUnstructed };
};


/***/ }),

/***/ "./src/models/gameConfig.js":
/*!**********************************!*\
  !*** ./src/models/gameConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Config: () => (/* binding */ Config)
/* harmony export */ });
const Config = (() => {
    const Gameboard = (() => {
        const width = 10;
        const height = 10;
        return { width, height };
    })();

    const Elements = (() => {
        const shipTypes = ['fregats', 'caravels', 'drakkars', 'boats'];
        const numberOf = (() => {
            const fregates = 1;
            const caravels = 2;
            const drakkars = 3;
            const boats = 4;
            return { fregates, caravels, drakkars, boats };
        })();

        return { numberOf, shipTypes };
    })();

    return { Gameboard, Elements };
})();


/***/ }),

/***/ "./src/models/player.js":
/*!******************************!*\
  !*** ./src/models/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Profile: () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/models/gameBoard.js");
/* harmony import */ var _shipyard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipyard */ "./src/models/shipyard.js");



const Player = (id, name) => {
    const getId = () => {
        return id;
    };

    const getName = () => {
        return name;
    };

    return { getId, getName };
};

const Profile = (id, name, nodeId) => {
    const prototype = Player(id, name);

    let gameboard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(nodeId, prototype);
    let shipyard = (0,_shipyard__WEBPACK_IMPORTED_MODULE_1__.Shipyard)(prototype);

    const getGameboard = () => {
        return gameboard;
    };

    const getShipyard = () => {
        return shipyard;
    };

    return Object.assign(prototype, { getGameboard, getShipyard });
};


/***/ }),

/***/ "./src/models/session.js":
/*!*******************************!*\
  !*** ./src/models/session.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Session: () => (/* binding */ Session),
/* harmony export */   resetSession: () => (/* binding */ resetSession)
/* harmony export */ });
const Session = (() => {
    let activeShip = null;
    let index = 0;
    let doubleIndex = 'ship';
    let currentElement = null;

    return { activeShip, index, doubleIndex, currentElement };
})();

const resetSession = () => {
    Session.activeShip = null;
    Session.index = 0;
    Session.doubleIndex = 'ship';
    Session.currentElement = null;
};


/***/ }),

/***/ "./src/models/ship.js":
/*!****************************!*\
  !*** ./src/models/ship.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Boat: () => (/* binding */ Boat),
/* harmony export */   Caravel: () => (/* binding */ Caravel),
/* harmony export */   Drakkar: () => (/* binding */ Drakkar),
/* harmony export */   Fregat: () => (/* binding */ Fregat),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _views_nodes_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/nodes/factory */ "./src/views/nodes/factory.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameBoard */ "./src/models/gameBoard.js");
/* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameConfig */ "./src/models/gameConfig.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session */ "./src/models/session.js");
/* harmony import */ var _waterAreas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./waterAreas */ "./src/models/waterAreas.js");









const Ship = (length, player) => {
    const container = (0,_views_nodes_factory__WEBPACK_IMPORTED_MODULE_1__.getNode)('ship', 'horizontal');
    let body = [];
    let live = true;
    let horizontal = true;
    let head = null;
    let shipWaterAreas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_7__.ShipWaterAreas)(player, container);

    const fillContainer = () => {
        for (let i = 0; i < length; i++) {
            let deck = (0,_cell__WEBPACK_IMPORTED_MODULE_3__.Deck)(i);
            body.push(deck);
            container.appendChild(deck.getCellNode());
        }
    };

    const setOrientation = () => {
        if (container.classList.contains('horizontal')) {
            setVertical();
        } else if (container.classList.contains('vertical')) {
            setHorizontal();
        }
    };

    const takeDownWaterAreas = () => {
        shipWaterAreas.clearAreas();
    };

    const launchShipOnWater = (nHead) => {
        try {
            let waterAreas = getWaterArea(nHead);
            let acessibility = waterAreas.checkArea();
            if (acessibility) {
                takeDownWaterAreas();
                shipWaterAreas = waterAreas;
                shipWaterAreas.occupyAreas();
            }

            return acessibility;
        } catch (error) {
            return false;
        }
    };

    const getWaterArea = (head) => {
        let board = getBoard().getStructedContainer();
        let areas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_7__.ShipWaterAreas)(player, container);
        let x = head.getXY().x;
        let y = head.getXY().y;
        let necessarySectors = [];
        for (let i = 0; i < length; i++) {
            necessarySectors.push(board[y][x]);
            if (horizontal) {
                x++;
            } else {
                y++;
            }
        }
        areas.setAreas(necessarySectors);
        return areas;
    };

    const isLive = () => {
        live = false;

        body.forEach((deck) => {
            if (!deck.isHit()) {
                live = true;
            }
        });

        return live;
    };

    const getBody = () => {
        return body;
    };

    const getContainer = () => {
        return container;
    };

    const getHead = () => {
        return head;
    };

    const setHead = (nHead) => {
        head = nHead;
    };

    const isHorizontal = () => {
        return horizontal;
    };

    const orientationSwitch = () => {
        horizontal = !horizontal;
    };

    const setVertical = () => {
        container.classList.remove('horizontal');
        container.classList.add('vertical');
        container.style.height = `${length * 5}vh`;
        container.style.width = `5vh`;
        horizontal = false;
    };

    const setHorizontal = () => {
        container.classList.remove('vertical');
        container.classList.add('horizontal');
        container.style.width = `${length * 5}vh`;
        container.style.height = `5vh`;
        horizontal = true;
    };

    const setRandomOrientation = () => {
        (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.randomIntFromInterval)(0, 1) === 1 ? setHorizontal() : setVertical();
    };

    const getBoard = () => {
        return player.getGameboard();
    };

    const reset = () => {
        setHorizontal();
        if (head !== null) {
            head.getCellNode().removeChild(container);
            head = null;
        }
        shipWaterAreas.clearAreas();
        shipWaterAreas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_7__.ShipWaterAreas)(player, container);
    };

    fillContainer();

    return {
        setRandomOrientation,
        reset,
        setHorizontal,
        setVertical,
        getBoard,
        takeDownWaterAreas,
        launchShipOnWater,
        orientationSwitch,
        setOrientation,
        isLive,
        getBody,
        getContainer,
        getHead,
        setHead,
        isHorizontal,
    };
};

const Fregat = (marker) => {
    const prototype = Ship(4, marker);
    return Object.assign(prototype, marker);
};

const Caravel = (marker) => {
    const prototype = Ship(3, marker);
    return Object.assign(prototype);
};

const Drakkar = (marker) => {
    const prototype = Ship(2, marker);
    return Object.assign(prototype);
};

const Boat = (marker) => {
    const prototype = Ship(1, marker);
    return Object.assign(prototype);
};


/***/ }),

/***/ "./src/models/shipyard.js":
/*!********************************!*\
  !*** ./src/models/shipyard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Shipyard: () => (/* binding */ Shipyard)
/* harmony export */ });
/* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameConfig */ "./src/models/gameConfig.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/models/ship.js");



const Shipyard = (player) => {
    const fregats = Dock(_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements.numberOf.fregates, 'Fregat', player);
    const caravels = Dock(_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements.numberOf.caravels, 'Caravel', player);
    const drakkars = Dock(_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements.numberOf.drakkars, 'Drakkar', player);
    const boats = Dock(_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements.numberOf.boats, 'Boat', player);
    const ships = fregats
        .getShips()
        .concat(
            caravels
                .getShips()
                .concat(drakkars.getShips().concat(boats.getShips())),
        );
    const node = document.querySelector('.shipyard');

    const getShipsOfType = (type) => {
        switch (type) {
            case 'fregats':
                return fregats.getShips();
            case 'caravels':
                return caravels.getShips();
            case 'drakkars':
                return drakkars.getShips();
            case 'boats':
                return boats.getShips();
        }
    };

    const getDockWithFregats = () => {
        return fregats;
    };

    const getDockWithCaravels = () => {
        return caravels;
    };

    const getDockWithDrakkars = () => {
        return drakkars;
    };

    const getDockWithBoats = () => {
        return boats;
    };

    const getPlayer = () => {
        return player;
    };

    const getAllShips = () => {
        return ships;
    };

    const isEmpty = () => {
        let launchedShips = node.querySelectorAll('.ship');
        return launchedShips.length === 0;
    };

    const reset = () => {
        ships.forEach((ship) => {
            ship.reset();
        });
    };

    return {
        getShipsOfType,
        isEmpty,
        reset,
        getAllShips,
        getPlayer,
        getDockWithFregats,
        getDockWithCaravels,
        getDockWithDrakkars,
        getDockWithBoats,
    };
};

const Dock = (count, shipBluePrint, player) => {
    const ships = [];

    const fillDock = (count, shipBluePrint) => {
        for (let i = 0; i < count; i++) {
            const ship = buildShip(shipBluePrint);
            ships.push(ship);
        }
    };

    const buildShip = (bluePrint) => {
        switch (bluePrint) {
            case 'Fregat':
                return (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Fregat)(player);
            case 'Caravel':
                return (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Caravel)(player);
            case 'Drakkar':
                return (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Drakkar)(player);
            case 'Boat':
                return (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Boat)(player);
            default:
                console.log('Sorry, illegal ship blueprint');
        }
    };

    fillDock(count, shipBluePrint);

    const getShips = () => {
        return ships;
    };

    return { getShips };
};


/***/ }),

/***/ "./src/models/waterAreas.js":
/*!**********************************!*\
  !*** ./src/models/waterAreas.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShipWaterAreas: () => (/* binding */ ShipWaterAreas)
/* harmony export */ });
/* harmony import */ var _cellHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cellHandler */ "./src/models/cellHandler.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session */ "./src/models/session.js");



const ShipWaterAreas = (player, container) => {
    let underTheShip = [];
    let aroundTheShip = [];

    const getAreaUnderTheShip = () => {
        return underTheShip;
    };

    const getAreaAroundTheShip = () => {
        return aroundTheShip;
    };

    const setAreas = (area) => {
        underTheShip = area;
        aroundTheShip = setAreaAroundTheShip();
    };

    const setAreaAroundTheShip = () => {
        let handler = (0,_cellHandler__WEBPACK_IMPORTED_MODULE_0__.CellHandler)();
        let areas = [];
        let parent = player.getGameboard().getStructedContainer();
        underTheShip.forEach((sector) => {
            let coordinates = sector.getXY();
            let area = handler.getCellAroundArea(
                coordinates.x,
                coordinates.y,
                parent,
                container,
            );
            areas = areas.concat(area);
        });
        return Array.from(new Set(areas)).filter(
            (x) => !underTheShip.includes(x),
        );
    };

    const occupyAreas = () => {
        underTheShip.forEach((sector) => {
            if (sector.isFree()) {
                sector.occupy(container);
            }
        });
    };

    const checkArea = () => {
        let acessibility = true;
        let areas = underTheShip.concat(aroundTheShip);

        areas.forEach((sector) => {
            if (!sector.isFree() && sector.getOccupant() !== container) {
                acessibility = false;
            }
        });

        return acessibility;
    };

    const clearAreas = () => {
        let areas = underTheShip.concat(aroundTheShip);
        areas.forEach((sector) => {
            sector.clear();
        });
    };

    return {
        clearAreas,
        checkArea,
        getAreaUnderTheShip,
        getAreaAroundTheShip,
        setAreas,
        occupyAreas,
    };
};


/***/ }),

/***/ "./src/views/animations/changeVisible.js":
/*!***********************************************!*\
  !*** ./src/views/animations/changeVisible.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeHidden: () => (/* binding */ removeHidden),
/* harmony export */   setHidden: () => (/* binding */ setHidden)
/* harmony export */ });
const setHidden = (node) => {
    node.classList.add('hidden');
};

const removeHidden = (node) => {
    node.classList.remove('hidden');
};


/***/ }),

/***/ "./src/views/dragAndDrop/setDraggable.js":
/*!***********************************************!*\
  !*** ./src/views/dragAndDrop/setDraggable.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setDraggable: () => (/* binding */ setDraggable)
/* harmony export */ });
const setDraggable = (node) => {
    node.draggable = true;
};


/***/ }),

/***/ "./src/views/dragAndDrop/ships.js":
/*!****************************************!*\
  !*** ./src/views/dragAndDrop/ships.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setDraggableForShips: () => (/* binding */ setDraggableForShips)
/* harmony export */ });
/* harmony import */ var _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/gameConfig */ "./src/models/gameConfig.js");
/* harmony import */ var _setDraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setDraggable */ "./src/views/dragAndDrop/setDraggable.js");



const setDraggableForShips = () => {
    _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements.shipTypes.forEach((type) => {
        forType(type);
    });
};

const forType = (type) => {
    const dock = document.querySelector(`.${type}`);
    const ships = Array.from(dock.children);

    ships.forEach((ship) => {
        (0,_setDraggable__WEBPACK_IMPORTED_MODULE_1__.setDraggable)(ship);
    });
};


/***/ }),

/***/ "./src/views/nodes/axis.js":
/*!*********************************!*\
  !*** ./src/views/nodes/axis.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewAxis: () => (/* binding */ viewAxis)
/* harmony export */ });
/* harmony import */ var _models_alphabets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/alphabets */ "./src/models/alphabets.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory */ "./src/views/nodes/factory.js");



const alphabet = _models_alphabets__WEBPACK_IMPORTED_MODULE_0__.Alphabets.rus().codes;

const viewAxis = (board) => {
    const node = board.getNode();
    const xAxis = node.querySelector('.x-axis');
    const yAxis = node.querySelector('.y-axis');
    const size = board.getSize();

    for (let i = 0; i < size.width; i++) {
        const cell = (0,_factory__WEBPACK_IMPORTED_MODULE_1__.getNode)('x-cell', 'cell');
        const letter = String.fromCharCode(alphabet[i]).toUpperCase();
        cell.textContent = letter;
        xAxis.appendChild(cell);
    }

    for (let i = 0; i < size.height; i++) {
        const cell = (0,_factory__WEBPACK_IMPORTED_MODULE_1__.getNode)('y-cell', 'cell');
        cell.textContent = i;
        yAxis.appendChild(cell);
    }
};


/***/ }),

/***/ "./src/views/nodes/factory.js":
/*!************************************!*\
  !*** ./src/views/nodes/factory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNode: () => (/* binding */ getNode)
/* harmony export */ });
const getNode = (...names) => {
    const node = document.createElement('div');
    names.forEach((name) => {
        if (name !== '') {
            node.classList.add(name);
        }
    });
    return node;
};


/***/ }),

/***/ "./src/views/nodes/gameboard.js":
/*!**************************************!*\
  !*** ./src/views/nodes/gameboard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewBoard: () => (/* binding */ viewBoard)
/* harmony export */ });
/* harmony import */ var _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/gameConfig */ "./src/models/gameConfig.js");


const viewBoard = (board) => {
    const container = board.getUnstructedContainer();
    const boardwr = board.getNode().querySelector('.board');
    container.forEach((cell) => {
        boardwr.appendChild(cell.getCellNode());
    });
};

const StylePresets = (() => {
    document.documentElement.style.setProperty(
        '--board-width',
        _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Gameboard.width,
    );
    document.documentElement.style.setProperty(
        '--board-height',
        _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Gameboard.height,
    );
})();


/***/ }),

/***/ "./src/views/nodes/profile.js":
/*!************************************!*\
  !*** ./src/views/nodes/profile.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewProfile: () => (/* binding */ viewProfile)
/* harmony export */ });
/* harmony import */ var _axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axis */ "./src/views/nodes/axis.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/views/nodes/gameboard.js");



const viewProfile = (profile) => {
    (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.viewBoard)(profile.getGameboard());
    (0,_axis__WEBPACK_IMPORTED_MODULE_0__.viewAxis)(profile.getGameboard());
};


/***/ }),

/***/ "./src/views/nodes/ship.js":
/*!*********************************!*\
  !*** ./src/views/nodes/ship.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomCell: () => (/* binding */ getRandomCell),
/* harmony export */   viewShip: () => (/* binding */ viewShip),
/* harmony export */   viewShipOnRandomCell: () => (/* binding */ viewShipOnRandomCell)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/changeVisible */ "./src/views/animations/changeVisible.js");




const viewShip = (ship, head) => {
    let isView = ship.launchShipOnWater(head);
    if (isView) {
        ship.setHead(head);
        head.getCellNode().appendChild(ship.getContainer());
        checkShipyard();
    }
    return isView;
};

const checkShipyard = () => {
    if (___WEBPACK_IMPORTED_MODULE_0__.game.player.getShipyard().isEmpty()) {
        setTimeout(() => {
            closeManualMenu();
        }, 500);
    }
};

const closeManualMenu = () => {
    const shipyard = document.querySelector('.shipyard');
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.removeHidden)(___WEBPACK_IMPORTED_MODULE_0__.game.ai.getGameboard().getNode());
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.setHidden)(shipyard);
};

const viewShipOnRandomCell = (ship, cells) => {
    let cell = getRandomCell(cells);
    let isView = viewShip(ship, cell);
    return isView ? true : viewShipOnRandomCell(ship, cells);
};

const getRandomCell = (cells) => {
    let index = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.randomIntFromInterval)(0, cells.length - 1);
    return cells.splice(index, 1)[0];
};

/***/ }),

/***/ "./src/views/nodes/shipyard.js":
/*!*************************************!*\
  !*** ./src/views/nodes/shipyard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewShipyard: () => (/* binding */ viewShipyard)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _models_gameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/gameConfig */ "./src/models/gameConfig.js");
/* harmony import */ var _dragAndDrop_ships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dragAndDrop/ships */ "./src/views/dragAndDrop/ships.js");




const viewShipyard = () => {
    fillShipyardNode();
    (0,_dragAndDrop_ships__WEBPACK_IMPORTED_MODULE_2__.setDraggableForShips)();
};

const fillShipyardNode = () => {
    _models_gameConfig__WEBPACK_IMPORTED_MODULE_1__.Config.Elements.shipTypes.forEach((type) => {
        addType(type);
    });
};

const addType = (type) => {
    const dock = document.querySelector(`.${type}`);
    const ships = ___WEBPACK_IMPORTED_MODULE_0__.game.player.getShipyard().getShipsOfType(type);
    ships.forEach((ship) => {
        dock.appendChild(ship.getContainer());
    });
};


/***/ }),

/***/ "./src/views/images/crack.png":
/*!************************************!*\
  !*** ./src/views/images/crack.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae0fded20a3a24bed36e.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywySUFBOEM7QUFDMUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyw4RkFBOEYsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFP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QUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBTTtBQUNkO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmlDO0FBQ007O0FBRWpDO0FBQ1AsSUFBSSxxREFBUztBQUNiLElBQUksK0NBQVE7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDK0I7QUFDVTs7QUFFL0Q7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxtQ0FBSTtBQUNaO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx1RUFBWSxDQUFDLG1DQUFJO0FBQ3JCLElBQUksb0VBQVM7QUFDYjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsZ0JBQWdCLHFFQUFxQjtBQUNyQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDNkI7QUFDb0I7QUFDVzs7QUFFckQ7QUFDUDtBQUNBLElBQUksd0VBQW9CO0FBQ3hCOztBQUVBO0FBQ0EsSUFBSSxzREFBTTtBQUNWO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsNENBQTRDLEtBQUs7QUFDakQsa0JBQWtCLG1DQUFJO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9zdHlsZXMvbWFpbi5jc3M/ODlmNiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckxpbmtzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclBsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVyL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2FscGhhYmV0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9jZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2NlbGxIYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2dhbWVDb25maWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9zaGlweWFyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy93YXRlckFyZWFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvZHJhZ0FuZERyb3Avc2V0RHJhZ2dhYmxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvZHJhZ0FuZERyb3Avc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9heGlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvc2hpcHlhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvdmlld3MvaW1hZ2VzL2NyYWNrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgIC0tYm9hcmQtd2lkdGg6IDA7XG4gICAgLS1ib2FyZC1oZWlnaHQ6IDA7XG4gICAgLS1jZWxsLXNpemU6IDV2aDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICByb3ctZ2FwOiAydmg7XG59XG5cbnNwYW4ge1xuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAydmg7XG59XG5cbi50aXRsZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi50aXBzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMnZoLCAydncpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4uc2hpcHlhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcbiAgICByb3ctZ2FwOiA2dmg7XG4gICAgcGFkZGluZzogMnZoO1xuICAgIHdpZHRoOiA0MHZoO1xuICAgIGhlaWdodDogNDB2aDtcbn1cblxuLmRvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sdW1uLWdhcDogNHZoO1xufVxuXG4uc2VsZWN0ZWQge1xuICAgIG9wYWNpdHk6IDAuMDE7XG59XG5cbi5ib2FyZF9fYXhpcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgcm93LWdhcDogMnZoO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogNXZoO1xufVxuXG4uYXhpcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbn1cblxuLngtYXhpcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1jZWxsLXNpemUpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgMmZyKTtcbn1cblxuLmJvYXJkLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYXhpcy15IGJvYXJkJztcbn1cblxuLnktYXhpcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGF4aXMteTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCAyZnIpO1xufVxuXG4uYm9hcmQge1xuICAgIGdyaWQtYXJlYTogYm9hcmQ7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtd2lkdGgpLCAyZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLWhlaWdodCksIDJmcik7XG4gICAgYm9yZGVyOiAwLjV2aCByZ2JhKDAsIDAsIDI1NSwgMC4yKSBzb2xpZDtcbn1cblxuLnBsYXkge1xuICAgIGdyaWQtYXJlYTogYm9hcmQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwdmg7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE5LCAyMDIsIDQxLCAwLjcyNik7XG4gICAgYm9yZGVyOiAxdmggcmdiKDExOSwgMjAyLCA0MSkgc29saWQ7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLmxvdy1vcGFjaXR5IHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5ibG9jayB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYXJrZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiA1dmg7XG59XG5cbi5jZWxsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubWlzcy1oaXQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLngtY2VsbCxcbi55LWNlbGwge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4ubWFyaW5lLXNlY3RvciB7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGJvcmRlcjogMC4xdmggcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XG59XG5cbi5zaGlwIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIGJvcmRlcjogMC4zdmggcmdiYSgwLCAwLCAyNTUsIDEpIHNvbGlkO1xufVxuXG4uaG9yaXpvbnRhbCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMmZyKTtcbn1cblxuLnZlcnRpY2FsIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAyZnIpO1xufVxuXG4uZGVjayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDR2aDtcbn1cblxuLnJhbmRvbS1tb2RlLFxuLm1hbnVhbC1tb2RlIHtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibHVlO1xuICAgIGNvbG9yOiBibHVlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJhbmRvbS1tb2RlOmhvdmVyLFxuLm1hbnVhbC1tb2RlOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDEyMiwgMjMxLCA3Mik7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZ2IoMTIyLCAyMzEsIDcyKTtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiwwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsc0RBQXNEO0lBQ3RELG9EQUFvRDtJQUNwRCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsbUNBQW1DO0lBQ25DLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseURBQWtEO0lBQ2xELDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhOztJQUViLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFFBQVE7QUFDWjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSx3QkFBd0I7SUFDeEIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICAtLWJvYXJkLXdpZHRoOiAwO1xcbiAgICAtLWJvYXJkLWhlaWdodDogMDtcXG4gICAgLS1jZWxsLXNpemU6IDV2aDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIHJvdy1nYXA6IDJ2aDtcXG59XFxuXFxuc3BhbiB7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMnZoO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi50aXBzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IG1pbigydmgsIDJ2dyk7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uc2hpcHlhcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcXG4gICAgcm93LWdhcDogNnZoO1xcbiAgICBwYWRkaW5nOiAydmg7XFxuICAgIHdpZHRoOiA0MHZoO1xcbiAgICBoZWlnaHQ6IDQwdmg7XFxufVxcblxcbi5kb2NrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNHZoO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBvcGFjaXR5OiAwLjAxO1xcbn1cXG5cXG4uYm9hcmRfX2F4aXMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIHJvdy1nYXA6IDJ2aDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDV2aDtcXG59XFxuXFxuLmF4aXMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbi54LWF4aXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtd2lkdGgpLCAyZnIpO1xcbn1cXG5cXG4uYm9hcmQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdheGlzLXkgYm9hcmQnO1xcbn1cXG5cXG4ueS1heGlzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBheGlzLXk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLWhlaWdodCksIDJmcik7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGdyaWQtYXJlYTogYm9hcmQ7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksIDJmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLWhlaWdodCksIDJmcik7XFxuICAgIGJvcmRlcjogMC41dmggcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XFxufVxcblxcbi5wbGF5IHtcXG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwdmg7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTksIDIwMiwgNDEsIDAuNzI2KTtcXG4gICAgYm9yZGVyOiAxdmggcmdiKDExOSwgMjAyLCA0MSkgc29saWQ7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbi5sb3ctb3BhY2l0eSB7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmJsb2NrIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFya2VyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNXZoO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5taXNzLWhpdCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL3ZpZXdzL2ltYWdlcy9jcmFjay5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuLngtY2VsbCxcXG4ueS1jZWxsIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLm1hcmluZS1zZWN0b3Ige1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBib3JkZXI6IDAuMXZoIHJnYmEoMCwgMCwgMjU1LCAwLjIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgICBib3JkZXI6IDAuM3ZoIHJnYmEoMCwgMCwgMjU1LCAxKSBzb2xpZDtcXG59XFxuXFxuLmhvcml6b250YWwge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAyZnIpO1xcbn1cXG5cXG4udmVydGljYWwge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAyZnIpO1xcbn1cXG5cXG4uZGVjayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNHZoO1xcbn1cXG5cXG4ucmFuZG9tLW1vZGUsXFxuLm1hbnVhbC1tb2RlIHtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibHVlO1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmFuZG9tLW1vZGU6aG92ZXIsXFxuLm1hbnVhbC1tb2RlOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigxMjIsIDIzMSwgNzIpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYigxMjIsIDIzMSwgNzIpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IHJlbW92ZUhpZGRlbiwgc2V0SGlkZGVuIH0gZnJvbSAnLi4vLi4vdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlJztcbmltcG9ydCB7IHZpZXdTaGlweWFyZCB9IGZyb20gJy4uLy4uL3ZpZXdzL25vZGVzL3NoaXB5YXJkJztcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckxpbmtzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1hbnVhbE1vZGVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbnVhbC1tb2RlJyk7XG4gICAgY29uc3QgcmFuZG9tTW9kZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tLW1vZGUnKTtcbiAgICBjb25zdCBzaGlweWFyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlweWFyZCcpO1xuXG4gICAgY29uc3Qgb3Blbk1hbnVhbE1vZGUgPSBtYW51YWxNb2RlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGdhbWUucGxheWVyLmdldEdhbWVib2FyZCgpLnJlc2V0KCk7XG4gICAgICAgIHZpZXdTaGlweWFyZChnYW1lLnBsYXllci5nZXRTaGlweWFyZCgpKTtcbiAgICAgICAgc2V0SGlkZGVuKGdhbWUuYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgcmVtb3ZlSGlkZGVuKHNoaXB5YXJkKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG9wZW5SYW5kb21Nb2RlID0gcmFuZG9tTW9kZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICByZW1vdmVIaWRkZW4oZ2FtZS5haS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkpO1xuICAgICAgICBzZXRIaWRkZW4oc2hpcHlhcmQpO1xuICAgICAgICBnYW1lLnBsYXllci5nZXRHYW1lYm9hcmQoKS5yYW5kb21GaWxsaW5nT2ZTaGlwcygpO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi4vLi5cIjtcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvclBsYXlCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKTtcblxuICAgIGNvbnN0IGNsaWNrID0gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGdhbWUucGxheSgpO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IFNlc3Npb24sIHJlc2V0U2Vzc2lvbiB9IGZyb20gJy4uLy4uL21vZGVscy9zZXNzaW9uJztcbmltcG9ydCB7IHZpZXdTaGlwIH0gZnJvbSAnLi4vLi4vdmlld3Mvbm9kZXMvc2hpcCc7XG5pbXBvcnQgeyBzaGlwRHJhZ0VuZCB9IGZyb20gJy4uL3NoaXAnO1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yU2hpcHMgPSAoc2hpcHMpID0+IHtcbiAgICBjb25zdCBib3JkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBkZWNrcyA9IHNoaXAuZ2V0Qm9keSgpO1xuICAgICAgICBkZWNrcy5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICBkZWNrLmdldENlbGxOb2RlKCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgIFNlc3Npb24uaW5kZXggPSBkZWNrLmdldE51bWJlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXAuZ2V0Q29udGFpbmVyKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuZ2V0SGVhZCgpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwID0gc2hpcDtcbiAgICAgICAgICAgICAgICBTZXNzaW9uLmN1cnJlbnRFbGVtZW50ID0gc2hpcC5nZXRIZWFkKCkuZ2V0Q2VsbE5vZGUoKTtcbiAgICAgICAgICAgICAgICBzaGlwLm9yaWVudGF0aW9uU3dpdGNoKCk7XG4gICAgICAgICAgICAgICAgbGV0IGlzVmlldyA9IHZpZXdTaGlwKHNoaXAsIHNoaXAuZ2V0SGVhZCgpKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1ZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5zZXRPcmllbnRhdGlvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAub3JpZW50YXRpb25Td2l0Y2goKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNldFNlc3Npb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2hpcC5nZXRDb250YWluZXIoKS5hZGRFdmVudExpc3RlbmVyKGBkcmFnc3RhcnRgLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoYHNlbGVjdGVkYCk7XG4gICAgICAgICAgICBnYW1lLnBsYXllclxuICAgICAgICAgICAgICAgIC5nZXRHYW1lYm9hcmQoKVxuICAgICAgICAgICAgICAgIC5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKClcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmdldENlbGxOb2RlKCkuc3R5bGUuYm9yZGVyID0gJyc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAgPSBzaGlwO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoYGRyYWdlbmRgLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoYHNlbGVjdGVkYCk7XG4gICAgICAgICAgICBzaGlwRHJhZ0VuZCgpO1xuICAgICAgICAgICAgcmVzZXRTZXNzaW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYm9yZGVyLmFkZEV2ZW50TGlzdGVuZXIoYGRyYWdvdmVyYCwgKGV2dCkgPT4ge1xuICAgICAgICBTZXNzaW9uLmN1cnJlbnRFbGVtZW50ID0gZXZ0LnRhcmdldDtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi4vbW9kZWxzL3Nlc3Npb24nO1xuaW1wb3J0IHsgdmlld1NoaXAgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9zaGlwJztcblxuZXhwb3J0IGNvbnN0IHNoaXBEcmFnRW5kID0gKCkgPT4ge1xuICAgIGxldCBpc01vdmVhYmxlID0gZmFsc2U7XG4gICAgbGV0IGlzQWx0ZXJNb3ZhYmxlID0gZmFsc2U7XG4gICAgbGV0IGJvZHkgPSBTZXNzaW9uLmFjdGl2ZVNoaXAuZ2V0Qm9keSgpO1xuICAgIGlmIChTZXNzaW9uLmN1cnJlbnRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGlzTW92ZWFibGUgPSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgbWFyaW5lLXNlY3RvcmApO1xuICAgICAgICBpc0FsdGVyTW92YWJsZSA9IFNlc3Npb24uY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGBkZWNrYCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc01vdmVhYmxlICYmICFpc0FsdGVyTW92YWJsZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzTW92ZWFibGUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25maWcuR2FtZWJvYXJkLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvbmZpZy5HYW1lYm9hcmQud2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldFN0cnVjdGVkQ29udGFpbmVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIFtqXVtpXS5nZXRDZWxsTm9kZSgpID09PSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhZGRTaGlwT25Cb2FyZChTZXNzaW9uLmluZGV4LCBqLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzQWx0ZXJNb3ZhYmxlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGJvZHlbaV0uZ2V0Q2VsbE5vZGUoKSA9PT0gU2Vzc2lvbi5jdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIFNlc3Npb24uZG91YmxlSW5kZXggPSBTZXNzaW9uLmluZGV4IC0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoU2Vzc2lvbi5kb3VibGVJbmRleCAhPT0gJ3NoaXAnKSB7XG4gICAgICAgICAgICBsZXQgaGVhZCA9IFNlc3Npb24uYWN0aXZlU2hpcC5nZXRIZWFkKCkuZ2V0Q2VsbE5vZGUoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29uZmlnLkdhbWVib2FyZC53aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldFN0cnVjdGVkQ29udGFpbmVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbal1baV0uZ2V0Q2VsbE5vZGUoKSA9PT0gaGVhZFxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhZGRTaGlwT25Cb2FyZChTZXNzaW9uLmRvdWJsZUluZGV4LCBqLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IGFkZFNoaXBPbkJvYXJkID0gKGluZGV4LCB5LCB4KSA9PiB7XG4gICAgbGV0IGRhdGEgPSBnZXREYXRhKGluZGV4LCB5LCB4KTtcbiAgICByZXR1cm4gdmlld1NoaXBPbkJvYXJkKGRhdGEpO1xufTtcblxuY29uc3QgZ2V0RGF0YSA9IChpbmRleCwgeCwgeSkgPT4ge1xuICAgIHJldHVybiBTZXNzaW9uLmFjdGl2ZVNoaXAuaXNIb3Jpem9udGFsKClcbiAgICAgICAgPyB7IHg6IHgsIHk6IHkgLSBpbmRleCB9XG4gICAgICAgIDogeyB4OiB4IC0gaW5kZXgsIHk6IHkgfTtcbn07XG5cbmNvbnN0IHZpZXdTaGlwT25Cb2FyZCA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHZpZXdTaGlwKFxuICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAsXG4gICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcC5nZXRCb2FyZCgpLmdldFN0cnVjdGVkQ29udGFpbmVyKClbZGF0YS54XVtkYXRhLnldLFxuICAgICk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHJhbmRvbUludEZyb21JbnRlcnZhbCA9IChtaW4sIG1heCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNoaWxkcyA9IChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiaW1wb3J0ICcuL3ZpZXdzL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi9tb2RlbHMvcGxheWVyJztcbmltcG9ydCB7IHZpZXdQcm9maWxlIH0gZnJvbSAnLi92aWV3cy9ub2Rlcy9wcm9maWxlJztcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvckxpbmtzIH0gZnJvbSAnLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGlua3MnO1xuaW1wb3J0IHsgdmlld1NoaXB5YXJkIH0gZnJvbSAnLi92aWV3cy9ub2Rlcy9zaGlweWFyZCc7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JTaGlwcyB9IGZyb20gJy4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclNoaXBzJztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuL21vZGVscy9nYW1lJztcblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBHYW1lKCk7XG5nYW1lLnN0YXJ0KCk7XG5nYW1lLnBsYXllci5nZXRHYW1lYm9hcmQoKS5yYW5kb21GaWxsaW5nT2ZTaGlwcygpOyIsImNvbnN0IEFscGhhYmV0ID0gKGZpcnN0Q2hhckNvZGUsIGxhc3RDaGFyQ29kZSkgPT4ge1xuICAgIGNvbnN0IGxvbmcgPSBsYXN0Q2hhckNvZGUgLSBmaXJzdENoYXJDb2RlICsgMTtcbiAgICBjb25zdCBjb2RlcyA9IEFycmF5LmZyb20oQXJyYXkobG9uZykua2V5cygpLCAoeCkgPT4geCArIGZpcnN0Q2hhckNvZGUpO1xuXG4gICAgY29uc3QgaXNUaGlzQWxwaGFiZXQgPSAoY2hhckNvZGUpID0+IHtcbiAgICAgICAgaWYgKGNoYXJDb2RlID49IGZpcnN0Q2hhckNvZGUgJiYgY2hhckNvZGUgPD0gbGFzdENoYXJDb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGZpcnN0Q2hhckNvZGUsIGxhc3RDaGFyQ29kZSwgbG9uZywgaXNUaGlzQWxwaGFiZXQsIGNvZGVzIH07XG59O1xuXG5leHBvcnQgY29uc3QgQWxwaGFiZXRzID0gKCgpID0+IHtcbiAgICBjb25zdCBlbmcgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFscGhhYmV0ID0gQWxwaGFiZXQoOTcsIDEyMik7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFscGhhYmV0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcnVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbHBoYWJldCA9IEFscGhhYmV0KDEwNzIsIDExMDMpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhbHBoYWJldCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGVuZywgcnVzIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgZ2V0Tm9kZSB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL2ZhY3RvcnknO1xuXG5leHBvcnQgY29uc3QgQ2VsbCA9ICh4ID0gLTEsIHkgPSAtMSwgbmFtZSA9ICdjZWxsJykgPT4ge1xuICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICBsZXQgcGFyZW50ID0gJ2ZyZWUnO1xuICAgIGxldCBub2RlID0gZ2V0Tm9kZShuYW1lLCAnY2VsbCcpO1xuXG4gICAgY29uc3Qgc2V0VGhlSGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0hpdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5QYXJlbnQpID0+IHtcbiAgICAgICAgcGFyZW50ID0gblBhcmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRDZWxsTm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFhZID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB4LCB5IH07XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFhZID0gKG54LCBueSkgPT4ge1xuICAgICAgICB4ID0gbng7XG4gICAgICAgIHkgPSBueTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0VGhlSGl0LFxuICAgICAgICBpc0hpdCxcbiAgICAgICAgc2V0UGFyZW50LFxuICAgICAgICBnZXRQYXJlbnQsXG4gICAgICAgIGdldENlbGxOb2RlLFxuICAgICAgICBnZXRYWSxcbiAgICAgICAgc2V0WFlcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IERlY2sgPSAobnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gQ2VsbCgtMSwgLTEsICdkZWNrJyk7XG5cbiAgICBjb25zdCBnZXROdW1iZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyBnZXROdW1iZXIgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgTWFyaW5lU2VjdG9yID0gKHksIHgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBDZWxsKHksIHgsICdtYXJpbmUtc2VjdG9yJyk7XG4gICAgbGV0IG9jY3VwYW50ID0gJ2ZyZWUnO1xuXG4gICAgY29uc3Qgb2NjdXB5ID0gKG5PY2N1cGFudCkgPT4ge1xuICAgICAgICBvY2N1cGFudCA9IG5PY2N1cGFudDtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgICAgIG9jY3VwYW50ID0gJ2ZyZWUnO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0ZyZWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvY2N1cGFudCA9PT0gJ2ZyZWUnO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRPY2N1cGFudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9jY3VwYW50O1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgaXNGcmVlLCBjbGVhciwgb2NjdXB5LCBnZXRPY2N1cGFudCB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgQ2VsbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2V0QmVmb3JlID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFt5XVstLXhdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFt5XVsrK3hdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEFmdGVyID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFt5XVsrK3hdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFt5XVstLXhdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE92ZXIgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1beF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1beF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VW5kZXIgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1beF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1beF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RGlhZzEgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1bLS14XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVsrK3hdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERpYWcyID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldWysreF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1bLS14XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXREaWFnMyA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVsrK3hdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldWy0teF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RGlhZzQgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1bLS14XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVsrK3hdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENlbGxBcm91bmRBcmVhID0gKHgsIHksIHBhcmVudCwgY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGxldCBjZWxscyA9IFtdO1xuICAgICAgICBjZWxscy5wdXNoKGdldEJlZm9yZSh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXRBZnRlcih4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXRPdmVyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldFVuZGVyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWcxKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWcyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWczKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWc0KHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscyA9IGNlbGxzLmZpbHRlcigoY2VsbCkgPT4gY2VsbCAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRDZWxsQXJvdW5kQXJlYSB9O1xufTtcbiIsImltcG9ydCB7IHNldExpc3RlbmVyc0ZvckxpbmtzIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JMaW5rc1wiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yUGxheUJ1dHRvbiB9IGZyb20gXCIuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yUGxheVwiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yU2hpcHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclNoaXBzXCI7XG5pbXBvcnQgeyBzZXREcmFnZ2FibGVGb3JTaGlwcyB9IGZyb20gXCIuLi92aWV3cy9kcmFnQW5kRHJvcC9zaGlwc1wiO1xuaW1wb3J0IHsgdmlld1Byb2ZpbGUgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvcHJvZmlsZVwiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tQ2VsbCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9zaGlwXCI7XG5pbXBvcnQgeyB2aWV3U2hpcHlhcmQgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvc2hpcHlhcmRcIjtcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gICAgbGV0IHBsYXllciA9IFByb2ZpbGUoMSwgJ1BsYXllcicsICdwbGF5ZXItYm9hcmQnKTtcbiAgICBsZXQgYWkgPSBQcm9maWxlKDAsICdBSScsICdhaS1ib2FyZCcpO1xuICAgIGxldCBtb3ZlID0gJ3BsYXllcic7XG4gICAgbGV0IHBsYXllckNlbGxzID0gWy4uLnBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCldO1xuICAgIGxldCBhaUNlbGxzID0gWy4uLmFpLmdldEdhbWVib2FyZCgpLmdldFN0cnVjdGVkQ29udGFpbmVyKCldO1xuXG4gICAgY29uc3Qgdmlld0ludGVyZmFjZXMgPSAoKSA9PiB7XG4gICAgICAgIHZpZXdQcm9maWxlKHBsYXllcik7XG4gICAgICAgIHZpZXdQcm9maWxlKGFpKTtcbiAgICAgICAgdmlld1NoaXB5YXJkKHBsYXllcik7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JTaGlwcyhwbGF5ZXIuZ2V0U2hpcHlhcmQoKS5nZXRBbGxTaGlwcygpKTtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yTGlua3MoKTtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yUGxheUJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBzZXRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdmlld0ludGVyZmFjZXMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGF5ID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXBzJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cbiAgICAgICAgcGxheWVyLmdldEdhbWVib2FyZCgpLmJsb2NrU2hpcHMoKTtcbiAgICAgICAgcGxheWVyTW92ZSgpXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaE1vdmUoKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3dpdGNoTW92ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKG1vdmUgPT09ICdhaScpIHtcbiAgICAgICAgICAgIG1vdmUgPSAncGxheWVyJztcbiAgICAgICAgICAgIHBsYXllck1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vdmUgPSAnYWknO1xuICAgICAgICAgICAgYWlNb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGF5ZXJNb3ZlID0gKCkgPT4ge1xuICAgICAgICBzZXRQbGF5ZXJNb3ZlRGVzaWduKGFpLCBwbGF5ZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFpTW92ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0QWlNb3ZlRGVzaWduKGFpLCBwbGF5ZXIpO1xuICAgICAgICByYW5kb21BaUhpdChwbGF5ZXJDZWxscylcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdGFydCwgcGxheSwgYWksIHBsYXllciB9XG59XG5cbmNvbnN0IHNldFBsYXllck1vdmVEZXNpZ24gPSAoYWksIHBsYXllcikgPT4ge1xuICAgIGFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykuY2xhc3NMaXN0LnJlbW92ZSgnbG93LW9wYWNpdHknKTtcbiAgICBhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2xvdy1vcGFjaXR5Jyk7XG4gICAgYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2xvdy1vcGFjaXR5Jyk7XG4gICAgcGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykuY2xhc3NMaXN0LmFkZCgnbG93LW9wYWNpdHknKTtcbiAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy55LWF4aXMnKS5jbGFzc0xpc3QuYWRkKCdsb3ctb3BhY2l0eScpO1xuICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmJvYXJkJykuY2xhc3NMaXN0LmFkZCgnbG93LW9wYWNpdHknKTtcbn1cblxuY29uc3Qgc2V0QWlNb3ZlRGVzaWduID0gKGFpLCBwbGF5ZXIpID0+IHtcbiAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKS5jbGFzc0xpc3QucmVtb3ZlKCdsb3ctb3BhY2l0eScpO1xuICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2xvdy1vcGFjaXR5Jyk7XG4gICAgcGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdsb3ctb3BhY2l0eScpO1xuICAgIGFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykuY2xhc3NMaXN0LmFkZCgnbG93LW9wYWNpdHknKTtcbiAgICBhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpLmNsYXNzTGlzdC5hZGQoJ2xvdy1vcGFjaXR5Jyk7XG4gICAgYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLmNsYXNzTGlzdC5hZGQoJ2xvdy1vcGFjaXR5Jyk7XG59XG5cbmNvbnN0IHJhbmRvbUFpSGl0ID0gKHBsYXllckNlbGxzKSA9PiB7XG4gICAgaWYgKHBsYXllckNlbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGNlbGwgPSBnZXRSYW5kb21DZWxsKHBsYXllckNlbGxzKTtcbiAgICAgICAgY29uc29sZS5sb2coY2VsbClcbiAgICAgICAgY2VsbC5nZXRDZWxsTm9kZSgpLmNsYXNzTGlzdC5hZGQoJ21pc3MtaGl0Jyk7XG4gICAgfVxufSIsImltcG9ydCB7IHBsYXllcjEgfSBmcm9tICcuLic7XG5pbXBvcnQgeyByYW5kb21JbnRGcm9tSW50ZXJ2YWwgfSBmcm9tICcuLi9oZWxwZXIvaGVscGVyJztcbmltcG9ydCB7IHZpZXdTaGlwLCB2aWV3U2hpcE9uUmFuZG9tQ2VsbCB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL3NoaXAnO1xuaW1wb3J0IHsgTWFyaW5lU2VjdG9yIH0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vZ2FtZUNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAobmFtZSwgcGxheWVyKSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSBDb25maWcuR2FtZWJvYXJkLndpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9IENvbmZpZy5HYW1lYm9hcmQuaGVpZ2h0O1xuICAgIGNvbnN0IGNvbnRhaW5lcnMgPSBmaWxsQm9hcmQod2lkdGgsIGhlaWdodCk7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9YCk7XG5cbiAgICBjb25zdCBnZXRTdHJ1Y3RlZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcnMuZ2V0U3RydWN0ZWQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcnMuZ2V0VW5zdHJ1Y3RlZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRTaXplID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBjb250YWluZXJzLmdldFVuc3RydWN0ZWQoKS5mb3JFYWNoKChzZWN0b3IpID0+IHtcbiAgICAgICAgICAgIHNlY3Rvci5jbGVhcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgcGxheWVyLmdldFNoaXB5YXJkKCkucmVzZXQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmFuZG9tRmlsbGluZ09mU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIGxldCBzaGlwcyA9IHBsYXllci5nZXRTaGlweWFyZCgpLmdldEFsbFNoaXBzKCk7XG5cbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcC5zZXRSYW5kb21PcmllbnRhdGlvbigpO1xuICAgICAgICAgICAgdmlld1NoaXBPblJhbmRvbUNlbGwoc2hpcCwgWy4uLmdldFVuc3RydWN0ZWRDb250YWluZXIoKV0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgYmxvY2tTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJhbmRvbUZpbGxpbmdPZlNoaXBzLFxuICAgICAgICByZXNldCxcbiAgICAgICAgZ2V0UGxheWVyLFxuICAgICAgICBnZXRTdHJ1Y3RlZENvbnRhaW5lcixcbiAgICAgICAgZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcixcbiAgICAgICAgZ2V0U2l6ZSxcbiAgICAgICAgZ2V0Tm9kZSxcbiAgICAgICAgYmxvY2tTaGlwc1xuICAgIH07XG59O1xuXG5jb25zdCBmaWxsQm9hcmQgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuICAgIGxldCBzdHJ1Y3RlZCA9IFtdO1xuICAgIGxldCB1bnN0cnVjdGVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgIGxldCBsaW5lID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IE1hcmluZVNlY3RvcihqLCBpKTtcbiAgICAgICAgICAgIGxpbmVbal0gPSBjZWxsO1xuICAgICAgICAgICAgdW5zdHJ1Y3RlZC5wdXNoKGNlbGwpO1xuICAgICAgICB9XG4gICAgICAgIHN0cnVjdGVkW2ldID0gbGluZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTdHJ1Y3RlZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN0cnVjdGVkO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRVbnN0cnVjdGVkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdW5zdHJ1Y3RlZDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0U3RydWN0ZWQsIGdldFVuc3RydWN0ZWQgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgQ29uZmlnID0gKCgpID0+IHtcbiAgICBjb25zdCBHYW1lYm9hcmQgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IDEwO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAxMDtcbiAgICAgICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBFbGVtZW50cyA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBUeXBlcyA9IFsnZnJlZ2F0cycsICdjYXJhdmVscycsICdkcmFra2FycycsICdib2F0cyddO1xuICAgICAgICBjb25zdCBudW1iZXJPZiA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmcmVnYXRlcyA9IDE7XG4gICAgICAgICAgICBjb25zdCBjYXJhdmVscyA9IDI7XG4gICAgICAgICAgICBjb25zdCBkcmFra2FycyA9IDM7XG4gICAgICAgICAgICBjb25zdCBib2F0cyA9IDQ7XG4gICAgICAgICAgICByZXR1cm4geyBmcmVnYXRlcywgY2FyYXZlbHMsIGRyYWtrYXJzLCBib2F0cyB9O1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHJldHVybiB7IG51bWJlck9mLCBzaGlwVHlwZXMgfTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgR2FtZWJvYXJkLCBFbGVtZW50cyB9O1xufSkoKTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZUJvYXJkJztcbmltcG9ydCB7IFNoaXB5YXJkIH0gZnJvbSAnLi9zaGlweWFyZCc7XG5cbmNvbnN0IFBsYXllciA9IChpZCwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IGdldElkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRJZCwgZ2V0TmFtZSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGUgPSAoaWQsIG5hbWUsIG5vZGVJZCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFBsYXllcihpZCwgbmFtZSk7XG5cbiAgICBsZXQgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKG5vZGVJZCwgcHJvdG90eXBlKTtcbiAgICBsZXQgc2hpcHlhcmQgPSBTaGlweWFyZChwcm90b3R5cGUpO1xuXG4gICAgY29uc3QgZ2V0R2FtZWJvYXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRTaGlweWFyZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXB5YXJkO1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgZ2V0R2FtZWJvYXJkLCBnZXRTaGlweWFyZCB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgU2Vzc2lvbiA9ICgoKSA9PiB7XG4gICAgbGV0IGFjdGl2ZVNoaXAgPSBudWxsO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IGRvdWJsZUluZGV4ID0gJ3NoaXAnO1xuICAgIGxldCBjdXJyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICByZXR1cm4geyBhY3RpdmVTaGlwLCBpbmRleCwgZG91YmxlSW5kZXgsIGN1cnJlbnRFbGVtZW50IH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgcmVzZXRTZXNzaW9uID0gKCkgPT4ge1xuICAgIFNlc3Npb24uYWN0aXZlU2hpcCA9IG51bGw7XG4gICAgU2Vzc2lvbi5pbmRleCA9IDA7XG4gICAgU2Vzc2lvbi5kb3VibGVJbmRleCA9ICdzaGlwJztcbiAgICBTZXNzaW9uLmN1cnJlbnRFbGVtZW50ID0gbnVsbDtcbn07XG4iLCJpbXBvcnQgeyByYW5kb21JbnRGcm9tSW50ZXJ2YWwgfSBmcm9tICcuLi9oZWxwZXIvaGVscGVyJztcbmltcG9ydCB7IGdldE5vZGUgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9mYWN0b3J5JztcbmltcG9ydCB7IHZpZXdTaGlwIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvc2hpcCc7XG5pbXBvcnQgeyBEZWNrIH0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7IGlzRml0T25HYW1lYm9hcmRBeGlzIH0gZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9nYW1lQ29uZmlnJztcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICcuL3Nlc3Npb24nO1xuaW1wb3J0IHsgU2hpcFdhdGVyQXJlYXMgfSBmcm9tICcuL3dhdGVyQXJlYXMnO1xuXG5leHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldE5vZGUoJ3NoaXAnLCAnaG9yaXpvbnRhbCcpO1xuICAgIGxldCBib2R5ID0gW107XG4gICAgbGV0IGxpdmUgPSB0cnVlO1xuICAgIGxldCBob3Jpem9udGFsID0gdHJ1ZTtcbiAgICBsZXQgaGVhZCA9IG51bGw7XG4gICAgbGV0IHNoaXBXYXRlckFyZWFzID0gU2hpcFdhdGVyQXJlYXMocGxheWVyLCBjb250YWluZXIpO1xuXG4gICAgY29uc3QgZmlsbENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRlY2sgPSBEZWNrKGkpO1xuICAgICAgICAgICAgYm9keS5wdXNoKGRlY2spO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2suZ2V0Q2VsbE5vZGUoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0T3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICAgICAgICAgIHNldFZlcnRpY2FsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSkge1xuICAgICAgICAgICAgc2V0SG9yaXpvbnRhbCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRha2VEb3duV2F0ZXJBcmVhcyA9ICgpID0+IHtcbiAgICAgICAgc2hpcFdhdGVyQXJlYXMuY2xlYXJBcmVhcygpO1xuICAgIH07XG5cbiAgICBjb25zdCBsYXVuY2hTaGlwT25XYXRlciA9IChuSGVhZCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHdhdGVyQXJlYXMgPSBnZXRXYXRlckFyZWEobkhlYWQpO1xuICAgICAgICAgICAgbGV0IGFjZXNzaWJpbGl0eSA9IHdhdGVyQXJlYXMuY2hlY2tBcmVhKCk7XG4gICAgICAgICAgICBpZiAoYWNlc3NpYmlsaXR5KSB7XG4gICAgICAgICAgICAgICAgdGFrZURvd25XYXRlckFyZWFzKCk7XG4gICAgICAgICAgICAgICAgc2hpcFdhdGVyQXJlYXMgPSB3YXRlckFyZWFzO1xuICAgICAgICAgICAgICAgIHNoaXBXYXRlckFyZWFzLm9jY3VweUFyZWFzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhY2Vzc2liaWxpdHk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0V2F0ZXJBcmVhID0gKGhlYWQpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkID0gZ2V0Qm9hcmQoKS5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpO1xuICAgICAgICBsZXQgYXJlYXMgPSBTaGlwV2F0ZXJBcmVhcyhwbGF5ZXIsIGNvbnRhaW5lcik7XG4gICAgICAgIGxldCB4ID0gaGVhZC5nZXRYWSgpLng7XG4gICAgICAgIGxldCB5ID0gaGVhZC5nZXRYWSgpLnk7XG4gICAgICAgIGxldCBuZWNlc3NhcnlTZWN0b3JzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5lY2Vzc2FyeVNlY3RvcnMucHVzaChib2FyZFt5XVt4XSk7XG4gICAgICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyZWFzLnNldEFyZWFzKG5lY2Vzc2FyeVNlY3RvcnMpO1xuICAgICAgICByZXR1cm4gYXJlYXM7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzTGl2ZSA9ICgpID0+IHtcbiAgICAgICAgbGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGJvZHkuZm9yRWFjaCgoZGVjaykgPT4ge1xuICAgICAgICAgICAgaWYgKCFkZWNrLmlzSGl0KCkpIHtcbiAgICAgICAgICAgICAgICBsaXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGxpdmU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEJvZHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBib2R5O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEhlYWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoZWFkO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRIZWFkID0gKG5IZWFkKSA9PiB7XG4gICAgICAgIGhlYWQgPSBuSGVhZDtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaG9yaXpvbnRhbDtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3JpZW50YXRpb25Td2l0Y2ggPSAoKSA9PiB7XG4gICAgICAgIGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0VmVydGljYWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYCR7bGVuZ3RoICogNX12aGA7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGA1dmhgO1xuICAgICAgICBob3Jpem9udGFsID0gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEhvcml6b250YWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSBgJHtsZW5ndGggKiA1fXZoYDtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGA1dmhgO1xuICAgICAgICBob3Jpem9udGFsID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0UmFuZG9tT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHJhbmRvbUludEZyb21JbnRlcnZhbCgwLCAxKSA9PT0gMSA/IHNldEhvcml6b250YWwoKSA6IHNldFZlcnRpY2FsKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyLmdldEdhbWVib2FyZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgc2V0SG9yaXpvbnRhbCgpO1xuICAgICAgICBpZiAoaGVhZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaGVhZC5nZXRDZWxsTm9kZSgpLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICBoZWFkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzaGlwV2F0ZXJBcmVhcy5jbGVhckFyZWFzKCk7XG4gICAgICAgIHNoaXBXYXRlckFyZWFzID0gU2hpcFdhdGVyQXJlYXMocGxheWVyLCBjb250YWluZXIpO1xuICAgIH07XG5cbiAgICBmaWxsQ29udGFpbmVyKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRSYW5kb21PcmllbnRhdGlvbixcbiAgICAgICAgcmVzZXQsXG4gICAgICAgIHNldEhvcml6b250YWwsXG4gICAgICAgIHNldFZlcnRpY2FsLFxuICAgICAgICBnZXRCb2FyZCxcbiAgICAgICAgdGFrZURvd25XYXRlckFyZWFzLFxuICAgICAgICBsYXVuY2hTaGlwT25XYXRlcixcbiAgICAgICAgb3JpZW50YXRpb25Td2l0Y2gsXG4gICAgICAgIHNldE9yaWVudGF0aW9uLFxuICAgICAgICBpc0xpdmUsXG4gICAgICAgIGdldEJvZHksXG4gICAgICAgIGdldENvbnRhaW5lcixcbiAgICAgICAgZ2V0SGVhZCxcbiAgICAgICAgc2V0SGVhZCxcbiAgICAgICAgaXNIb3Jpem9udGFsLFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgRnJlZ2F0ID0gKG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFNoaXAoNCwgbWFya2VyKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIG1hcmtlcik7XG59O1xuXG5leHBvcnQgY29uc3QgQ2FyYXZlbCA9IChtYXJrZXIpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDMsIG1hcmtlcik7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBEcmFra2FyID0gKG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFNoaXAoMiwgbWFya2VyKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IEJvYXQgPSAobWFya2VyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgxLCBtYXJrZXIpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuIiwiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9nYW1lQ29uZmlnJztcbmltcG9ydCB7IEJvYXQsIENhcmF2ZWwsIERyYWtrYXIsIEZyZWdhdCB9IGZyb20gJy4vc2hpcCc7XG5cbmV4cG9ydCBjb25zdCBTaGlweWFyZCA9IChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBmcmVnYXRzID0gRG9jayhDb25maWcuRWxlbWVudHMubnVtYmVyT2YuZnJlZ2F0ZXMsICdGcmVnYXQnLCBwbGF5ZXIpO1xuICAgIGNvbnN0IGNhcmF2ZWxzID0gRG9jayhDb25maWcuRWxlbWVudHMubnVtYmVyT2YuY2FyYXZlbHMsICdDYXJhdmVsJywgcGxheWVyKTtcbiAgICBjb25zdCBkcmFra2FycyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmRyYWtrYXJzLCAnRHJha2thcicsIHBsYXllcik7XG4gICAgY29uc3QgYm9hdHMgPSBEb2NrKENvbmZpZy5FbGVtZW50cy5udW1iZXJPZi5ib2F0cywgJ0JvYXQnLCBwbGF5ZXIpO1xuICAgIGNvbnN0IHNoaXBzID0gZnJlZ2F0c1xuICAgICAgICAuZ2V0U2hpcHMoKVxuICAgICAgICAuY29uY2F0KFxuICAgICAgICAgICAgY2FyYXZlbHNcbiAgICAgICAgICAgICAgICAuZ2V0U2hpcHMoKVxuICAgICAgICAgICAgICAgIC5jb25jYXQoZHJha2thcnMuZ2V0U2hpcHMoKS5jb25jYXQoYm9hdHMuZ2V0U2hpcHMoKSkpLFxuICAgICAgICApO1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHlhcmQnKTtcblxuICAgIGNvbnN0IGdldFNoaXBzT2ZUeXBlID0gKHR5cGUpID0+IHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdmcmVnYXRzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJlZ2F0cy5nZXRTaGlwcygpO1xuICAgICAgICAgICAgY2FzZSAnY2FyYXZlbHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBjYXJhdmVscy5nZXRTaGlwcygpO1xuICAgICAgICAgICAgY2FzZSAnZHJha2thcnMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBkcmFra2Fycy5nZXRTaGlwcygpO1xuICAgICAgICAgICAgY2FzZSAnYm9hdHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBib2F0cy5nZXRTaGlwcygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERvY2tXaXRoRnJlZ2F0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZyZWdhdHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERvY2tXaXRoQ2FyYXZlbHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjYXJhdmVscztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhEcmFra2FycyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWtrYXJzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREb2NrV2l0aEJvYXRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYm9hdHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBsYXllciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0QWxsU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9O1xuXG4gICAgY29uc3QgaXNFbXB0eSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGxhdW5jaGVkU2hpcHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJyk7XG4gICAgICAgIHJldHVybiBsYXVuY2hlZFNoaXBzLmxlbmd0aCA9PT0gMDtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAucmVzZXQoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFNoaXBzT2ZUeXBlLFxuICAgICAgICBpc0VtcHR5LFxuICAgICAgICByZXNldCxcbiAgICAgICAgZ2V0QWxsU2hpcHMsXG4gICAgICAgIGdldFBsYXllcixcbiAgICAgICAgZ2V0RG9ja1dpdGhGcmVnYXRzLFxuICAgICAgICBnZXREb2NrV2l0aENhcmF2ZWxzLFxuICAgICAgICBnZXREb2NrV2l0aERyYWtrYXJzLFxuICAgICAgICBnZXREb2NrV2l0aEJvYXRzLFxuICAgIH07XG59O1xuXG5jb25zdCBEb2NrID0gKGNvdW50LCBzaGlwQmx1ZVByaW50LCBwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gICAgY29uc3QgZmlsbERvY2sgPSAoY291bnQsIHNoaXBCbHVlUHJpbnQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gYnVpbGRTaGlwKHNoaXBCbHVlUHJpbnQpO1xuICAgICAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBidWlsZFNoaXAgPSAoYmx1ZVByaW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYmx1ZVByaW50KSB7XG4gICAgICAgICAgICBjYXNlICdGcmVnYXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBGcmVnYXQocGxheWVyKTtcbiAgICAgICAgICAgIGNhc2UgJ0NhcmF2ZWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiBDYXJhdmVsKHBsYXllcik7XG4gICAgICAgICAgICBjYXNlICdEcmFra2FyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gRHJha2thcihwbGF5ZXIpO1xuICAgICAgICAgICAgY2FzZSAnQm9hdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvYXQocGxheWVyKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NvcnJ5LCBpbGxlZ2FsIHNoaXAgYmx1ZXByaW50Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZmlsbERvY2soY291bnQsIHNoaXBCbHVlUHJpbnQpO1xuXG4gICAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0U2hpcHMgfTtcbn07XG4iLCJpbXBvcnQgeyBDZWxsSGFuZGxlciB9IGZyb20gJy4vY2VsbEhhbmRsZXInO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJy4vc2Vzc2lvbic7XG5cbmV4cG9ydCBjb25zdCBTaGlwV2F0ZXJBcmVhcyA9IChwbGF5ZXIsIGNvbnRhaW5lcikgPT4ge1xuICAgIGxldCB1bmRlclRoZVNoaXAgPSBbXTtcbiAgICBsZXQgYXJvdW5kVGhlU2hpcCA9IFtdO1xuXG4gICAgY29uc3QgZ2V0QXJlYVVuZGVyVGhlU2hpcCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHVuZGVyVGhlU2hpcDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0QXJlYUFyb3VuZFRoZVNoaXAgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhcm91bmRUaGVTaGlwO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRBcmVhcyA9IChhcmVhKSA9PiB7XG4gICAgICAgIHVuZGVyVGhlU2hpcCA9IGFyZWE7XG4gICAgICAgIGFyb3VuZFRoZVNoaXAgPSBzZXRBcmVhQXJvdW5kVGhlU2hpcCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRBcmVhQXJvdW5kVGhlU2hpcCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBDZWxsSGFuZGxlcigpO1xuICAgICAgICBsZXQgYXJlYXMgPSBbXTtcbiAgICAgICAgbGV0IHBhcmVudCA9IHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpO1xuICAgICAgICB1bmRlclRoZVNoaXAuZm9yRWFjaCgoc2VjdG9yKSA9PiB7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBzZWN0b3IuZ2V0WFkoKTtcbiAgICAgICAgICAgIGxldCBhcmVhID0gaGFuZGxlci5nZXRDZWxsQXJvdW5kQXJlYShcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy54LFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnksXG4gICAgICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBhcmVhcyA9IGFyZWFzLmNvbmNhdChhcmVhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJlYXMpKS5maWx0ZXIoXG4gICAgICAgICAgICAoeCkgPT4gIXVuZGVyVGhlU2hpcC5pbmNsdWRlcyh4KSxcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb2NjdXB5QXJlYXMgPSAoKSA9PiB7XG4gICAgICAgIHVuZGVyVGhlU2hpcC5mb3JFYWNoKChzZWN0b3IpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWN0b3IuaXNGcmVlKCkpIHtcbiAgICAgICAgICAgICAgICBzZWN0b3Iub2NjdXB5KGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja0FyZWEgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhY2Vzc2liaWxpdHkgPSB0cnVlO1xuICAgICAgICBsZXQgYXJlYXMgPSB1bmRlclRoZVNoaXAuY29uY2F0KGFyb3VuZFRoZVNoaXApO1xuXG4gICAgICAgIGFyZWFzLmZvckVhY2goKHNlY3RvcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFzZWN0b3IuaXNGcmVlKCkgJiYgc2VjdG9yLmdldE9jY3VwYW50KCkgIT09IGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGFjZXNzaWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYWNlc3NpYmlsaXR5O1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhckFyZWFzID0gKCkgPT4ge1xuICAgICAgICBsZXQgYXJlYXMgPSB1bmRlclRoZVNoaXAuY29uY2F0KGFyb3VuZFRoZVNoaXApO1xuICAgICAgICBhcmVhcy5mb3JFYWNoKChzZWN0b3IpID0+IHtcbiAgICAgICAgICAgIHNlY3Rvci5jbGVhcigpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xlYXJBcmVhcyxcbiAgICAgICAgY2hlY2tBcmVhLFxuICAgICAgICBnZXRBcmVhVW5kZXJUaGVTaGlwLFxuICAgICAgICBnZXRBcmVhQXJvdW5kVGhlU2hpcCxcbiAgICAgICAgc2V0QXJlYXMsXG4gICAgICAgIG9jY3VweUFyZWFzLFxuICAgIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IHNldEhpZGRlbiA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVIaWRkZW4gPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHNldERyYWdnYWJsZSA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5kcmFnZ2FibGUgPSB0cnVlO1xufTtcbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lQ29uZmlnJztcbmltcG9ydCB7IHNldERyYWdnYWJsZSB9IGZyb20gJy4vc2V0RHJhZ2dhYmxlJztcblxuZXhwb3J0IGNvbnN0IHNldERyYWdnYWJsZUZvclNoaXBzID0gKCkgPT4ge1xuICAgIENvbmZpZy5FbGVtZW50cy5zaGlwVHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBmb3JUeXBlKHR5cGUpO1xuICAgIH0pO1xufTtcblxuY29uc3QgZm9yVHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgY29uc3QgZG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3R5cGV9YCk7XG4gICAgY29uc3Qgc2hpcHMgPSBBcnJheS5mcm9tKGRvY2suY2hpbGRyZW4pO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBzZXREcmFnZ2FibGUoc2hpcCk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgQWxwaGFiZXRzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FscGhhYmV0cyc7XG5pbXBvcnQgeyBnZXROb2RlIH0gZnJvbSAnLi9mYWN0b3J5JztcblxuY29uc3QgYWxwaGFiZXQgPSBBbHBoYWJldHMucnVzKCkuY29kZXM7XG5cbmV4cG9ydCBjb25zdCB2aWV3QXhpcyA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBib2FyZC5nZXROb2RlKCk7XG4gICAgY29uc3QgeEF4aXMgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKTtcbiAgICBjb25zdCB5QXhpcyA9IG5vZGUucXVlcnlTZWxlY3RvcignLnktYXhpcycpO1xuICAgIGNvbnN0IHNpemUgPSBib2FyZC5nZXRTaXplKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUud2lkdGg7IGkrKykge1xuICAgICAgICBjb25zdCBjZWxsID0gZ2V0Tm9kZSgneC1jZWxsJywgJ2NlbGwnKTtcbiAgICAgICAgY29uc3QgbGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShhbHBoYWJldFtpXSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGxldHRlcjtcbiAgICAgICAgeEF4aXMuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplLmhlaWdodDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBnZXROb2RlKCd5LWNlbGwnLCAnY2VsbCcpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgeUF4aXMuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBnZXROb2RlID0gKC4uLm5hbWVzKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUgIT09ICcnKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbm9kZTtcbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2FtZUNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCB2aWV3Qm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBib2FyZC5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCk7XG4gICAgY29uc3QgYm9hcmR3ciA9IGJvYXJkLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBjb250YWluZXIuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBib2FyZHdyLmFwcGVuZENoaWxkKGNlbGwuZ2V0Q2VsbE5vZGUoKSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBTdHlsZVByZXNldHMgPSAoKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJy0tYm9hcmQtd2lkdGgnLFxuICAgICAgICBDb25maWcuR2FtZWJvYXJkLndpZHRoLFxuICAgICk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS1ib2FyZC1oZWlnaHQnLFxuICAgICAgICBDb25maWcuR2FtZWJvYXJkLmhlaWdodCxcbiAgICApO1xufSkoKTtcbiIsImltcG9ydCB7IHZpZXdBeGlzIH0gZnJvbSAnLi9heGlzJztcbmltcG9ydCB7IHZpZXdCb2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcblxuZXhwb3J0IGNvbnN0IHZpZXdQcm9maWxlID0gKHByb2ZpbGUpID0+IHtcbiAgICB2aWV3Qm9hcmQocHJvZmlsZS5nZXRHYW1lYm9hcmQoKSk7XG4gICAgdmlld0F4aXMocHJvZmlsZS5nZXRHYW1lYm9hcmQoKSk7XG59O1xuIiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IHJhbmRvbUludEZyb21JbnRlcnZhbCB9IGZyb20gJy4uLy4uL2hlbHBlci9oZWxwZXInO1xuaW1wb3J0IHsgcmVtb3ZlSGlkZGVuLCBzZXRIaWRkZW4gfSBmcm9tICcuLi9hbmltYXRpb25zL2NoYW5nZVZpc2libGUnO1xuXG5leHBvcnQgY29uc3Qgdmlld1NoaXAgPSAoc2hpcCwgaGVhZCkgPT4ge1xuICAgIGxldCBpc1ZpZXcgPSBzaGlwLmxhdW5jaFNoaXBPbldhdGVyKGhlYWQpO1xuICAgIGlmIChpc1ZpZXcpIHtcbiAgICAgICAgc2hpcC5zZXRIZWFkKGhlYWQpO1xuICAgICAgICBoZWFkLmdldENlbGxOb2RlKCkuYXBwZW5kQ2hpbGQoc2hpcC5nZXRDb250YWluZXIoKSk7XG4gICAgICAgIGNoZWNrU2hpcHlhcmQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmlldztcbn07XG5cbmNvbnN0IGNoZWNrU2hpcHlhcmQgPSAoKSA9PiB7XG4gICAgaWYgKGdhbWUucGxheWVyLmdldFNoaXB5YXJkKCkuaXNFbXB0eSgpKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY2xvc2VNYW51YWxNZW51KCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxufTtcblxuY29uc3QgY2xvc2VNYW51YWxNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXB5YXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXB5YXJkJyk7XG4gICAgcmVtb3ZlSGlkZGVuKGdhbWUuYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpKTtcbiAgICBzZXRIaWRkZW4oc2hpcHlhcmQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHZpZXdTaGlwT25SYW5kb21DZWxsID0gKHNoaXAsIGNlbGxzKSA9PiB7XG4gICAgbGV0IGNlbGwgPSBnZXRSYW5kb21DZWxsKGNlbGxzKTtcbiAgICBsZXQgaXNWaWV3ID0gdmlld1NoaXAoc2hpcCwgY2VsbCk7XG4gICAgcmV0dXJuIGlzVmlldyA/IHRydWUgOiB2aWV3U2hpcE9uUmFuZG9tQ2VsbChzaGlwLCBjZWxscyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tQ2VsbCA9IChjZWxscykgPT4ge1xuICAgIGxldCBpbmRleCA9IHJhbmRvbUludEZyb21JbnRlcnZhbCgwLCBjZWxscy5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gY2VsbHMuc3BsaWNlKGluZGV4LCAxKVswXTtcbn07IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lQ29uZmlnJztcbmltcG9ydCB7IHNldERyYWdnYWJsZUZvclNoaXBzIH0gZnJvbSAnLi4vZHJhZ0FuZERyb3Avc2hpcHMnO1xuXG5leHBvcnQgY29uc3Qgdmlld1NoaXB5YXJkID0gKCkgPT4ge1xuICAgIGZpbGxTaGlweWFyZE5vZGUoKTtcbiAgICBzZXREcmFnZ2FibGVGb3JTaGlwcygpO1xufTtcblxuY29uc3QgZmlsbFNoaXB5YXJkTm9kZSA9ICgpID0+IHtcbiAgICBDb25maWcuRWxlbWVudHMuc2hpcFR5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgYWRkVHlwZSh0eXBlKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGFkZFR5cGUgPSAodHlwZSkgPT4ge1xuICAgIGNvbnN0IGRvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0eXBlfWApO1xuICAgIGNvbnN0IHNoaXBzID0gZ2FtZS5wbGF5ZXIuZ2V0U2hpcHlhcmQoKS5nZXRTaGlwc09mVHlwZSh0eXBlKTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGRvY2suYXBwZW5kQ2hpbGQoc2hpcC5nZXRDb250YWluZXIoKSk7XG4gICAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9