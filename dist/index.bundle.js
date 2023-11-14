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
    grid-template-columns: 1fr 1fr min-content;
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

.exit {
    display: grid;
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
    z-index: 998;
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

.destroyed {
    background-color: rgba(248, 7, 7, 0.541) !important;
}

.live {}

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
}`, "",{"version":3,"sources":["webpack://./src/views/styles/main.css"],"names":[],"mappings":"AAAA;;;IAGI,UAAU;IACV,SAAS;IACT,SAAS;IACT,YAAY;IACZ,sBAAsB;IACtB,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,qBAAqB;IACrB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,mBAAmB;IACnB,YAAY;IACZ,4BAA4B;IAC5B,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,8CAA8C;IAC9C,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,0CAA0C;IAC1C,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,2CAA2C;IAC3C,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,8BAA8B;IAC9B,sDAAsD;AAC1D;;AAEA;IACI,aAAa;IACb,8CAA8C;IAC9C,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,oDAAoD;AACxD;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,sDAAsD;IACtD,oDAAoD;IACpD,wCAAwC;AAC5C;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,2CAA2C;IAC3C,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,yDAAkD;IAClD,0BAA0B;AAC9B;;AAEA;IACI,mDAAmD;AACvD;;AAEA,OAAO;;AAEP;;IAEI,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;;IAEb,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,iBAAiB;IACjB,gBAAgB;IAChB,sCAAsC;AAC1C;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8CAA8C;IAC9C,WAAW;IACX,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;;IAEI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,eAAe;AACnB;;AAEA;;IAEI,wBAAwB;IACxB,2CAA2C;AAC/C;;AAEA;IACI,aAAa;AACjB","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n}\n\n:root {\n    font-size: 2vh;\n    --board-width: 0;\n    --board-height: 0;\n    --cell-size: 5vh;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    justify-items: center;\n    align-content: center;\n    max-width: 100%;\n    max-height: 100%;\n    row-gap: 2vh;\n}\n\nspan {\n    padding: 1vh;\n    height: min-content;\n    min-width: max-content;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: 1fr 1fr min-content;\n    justify-items: center;\n    width: 100%;\n    padding: 2vh;\n}\n\n.title {\n    display: grid;\n    font-size: 3rem;\n}\n\n.tips {\n    display: grid;\n    background-color: rgba(128, 128, 128, 0.2);\n    align-items: center;\n    padding: 1vh;\n    border-radius: min(2vh, 2vw);\n    height: min-content;\n}\n\n.exit {\n    display: grid;\n}\n\n.main {\n    display: grid;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    grid-template-columns: min-content min-content;\n    height: min-content;\n}\n\n.shipyard {\n    display: grid;\n    align-content: center;\n    grid-template-rows: repeat(4, min-content);\n    row-gap: 6vh;\n    padding: 2vh;\n    width: 40vh;\n    height: 40vh;\n}\n\n.dock {\n    display: flex;\n    column-gap: 4vh;\n}\n\n.selected {\n    opacity: 0.01;\n}\n\n.board__axis-wrapper {\n    display: grid;\n    grid-template-rows: min-content min-content;\n    row-gap: 2vh;\n    width: min-content;\n    height: 100%;\n    padding: 5vh;\n}\n\n.axis-wrapper {\n    display: grid;\n    width: min-content;\n    grid-template-rows: min-content 1fr;\n}\n\n.x-axis {\n    display: grid;\n    width: min-content;\n    padding-left: var(--cell-size);\n    grid-template-columns: repeat(var(--board-width), 2fr);\n}\n\n.board-wrapper {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    grid-template-areas: 'axis-y board';\n}\n\n.y-axis {\n    display: grid;\n    grid-area: axis-y;\n    grid-template-rows: repeat(var(--board-height), 2fr);\n}\n\n.board {\n    grid-area: board;\n    display: inline-grid;\n    grid-template-columns: repeat(var(--board-width), 2fr);\n    grid-template-rows: repeat(var(--board-height), 2fr);\n    border: 0.5vh rgba(0, 0, 255, 0.2) solid;\n}\n\n.play {\n    grid-area: board;\n    display: grid;\n    justify-self: center;\n    align-self: center;\n    width: 10vh;\n    height: 10vh;\n    background-color: rgba(119, 202, 41, 0.726);\n    border: 1vh rgb(119, 202, 41) solid;\n    z-index: 998;\n}\n\n.low-opacity {\n    opacity: 0.4;\n}\n\n.block {\n    pointer-events: none;\n}\n\n.hidden {\n    display: none;\n}\n\n.marker {\n    display: grid;\n    justify-content: center;\n    padding-left: 5vh;\n}\n\n.cell {\n    display: grid;\n    width: var(--cell-size);\n    height: var(--cell-size);\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n\n.miss-hit {\n    background-image: url(/src/views/images/crack.png);\n    background-size: 100% 100%;\n}\n\n.destroyed {\n    background-color: rgba(248, 7, 7, 0.541) !important;\n}\n\n.live {}\n\n.x-cell,\n.y-cell {\n    justify-content: center;\n    align-items: center;\n    opacity: 0.5;\n}\n\n.marine-sector {\n    display: grid;\n\n    border: 0.1vh rgba(0, 0, 255, 0.2) solid;\n}\n\n.ship {\n    display: grid;\n    align-content: center;\n    justify-content: center;\n    margin-left: -1px;\n    margin-top: -1px;\n    border: 0.3vh rgba(0, 0, 255, 1) solid;\n}\n\n.horizontal {\n    grid-template-columns: repeat(4, 2fr);\n}\n\n.vertical {\n    grid-template-rows: repeat(4, 2fr);\n}\n\n.deck {\n    display: grid;\n    background-color: rgba(0, 0, 255, 0.1);\n    z-index: 999;\n}\n\n.footer {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    width: 100%;\n    justify-content: center;\n    gap: 4vh;\n}\n\n.random-mode,\n.manual-mode {\n    height: min-content;\n    display: grid;\n    border-bottom: 1px dotted blue;\n    color: blue;\n    cursor: pointer;\n}\n\n.random-mode:hover,\n.manual-mode:hover {\n    color: rgb(122, 231, 72);\n    border-bottom: 1px dotted rgb(122, 231, 72);\n}\n\n.hidden {\n    display: none;\n}"],"sourceRoot":""}]);
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
/* harmony export */   setListenersForCells: () => (/* binding */ setListenersForCells),
/* harmony export */   setListenersForExitButton: () => (/* binding */ setListenersForExitButton),
/* harmony export */   setListenersForPlayButton: () => (/* binding */ setListenersForPlayButton)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");


const setListenersForPlayButton = () => {
    const button = document.querySelector('.play');

    const click = button.addEventListener('click', e => {
        ___WEBPACK_IMPORTED_MODULE_0__.game.play();
    })
}

const setListenersForExitButton = () => {
    const button = document.querySelector('.exit');

    const click = button.addEventListener('click', e => {
        ___WEBPACK_IMPORTED_MODULE_0__.game.end();
    })
}

const setListenersForCells = () => {
    const cells = ___WEBPACK_IMPORTED_MODULE_0__.game.ai.getGameboard().getUnstructedContainer();
    cells.forEach(cell => {
        const node = cell.getCellNode();
        node.style.zIndex = 1000;
        const click = node.addEventListener('click', e => {
            ___WEBPACK_IMPORTED_MODULE_0__.game.gameHandler.checkCell(cell);
        })
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
    let linkedDeck = 'free';

    const setLinkedDeck = (deck) => {
        linkedDeck = deck;
    }

    const getLinkedDeck = () => {
        return linkedDeck;
    }

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

    const reset = () => {
        hit = false;
        node.classList.remove('miss-hit');
        node.classList.remove('destroyed');
    }

    return {
        setTheHit,
        isHit,
        setParent,
        getParent,
        getCellNode,
        getXY,
        setXY,
        setLinkedDeck,
        getLinkedDeck,
        reset
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
        prototype.reset();
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/listeners/forLinks */ "./src/controllers/listeners/forLinks.js");
/* harmony import */ var _controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/listeners/forPlay */ "./src/controllers/listeners/forPlay.js");
/* harmony import */ var _controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/listeners/forShips */ "./src/controllers/listeners/forShips.js");
/* harmony import */ var _views_dragAndDrop_ships__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/dragAndDrop/ships */ "./src/views/dragAndDrop/ships.js");
/* harmony import */ var _views_nodes_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/nodes/profile */ "./src/views/nodes/profile.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/nodes/shipyard */ "./src/views/nodes/shipyard.js");
/* harmony import */ var _views_nodes_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/nodes/ui */ "./src/views/nodes/ui.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./player */ "./src/models/player.js");
/* harmony import */ var _timeManipulators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timeManipulators */ "./src/models/timeManipulators.js");












const Game = () => {
    let player = (0,_player__WEBPACK_IMPORTED_MODULE_9__.Profile)(1, 'Player', 'player-board');
    let ai = (0,_player__WEBPACK_IMPORTED_MODULE_9__.Profile)(0, 'AI', 'ai-board');
    const timeManipulators = (0,_timeManipulators__WEBPACK_IMPORTED_MODULE_10__.TimeManipulators)();
    const gameHandler = GameHandler(ai, player, timeManipulators);

    const viewDefaulInterfaces = () => {
        (0,_views_nodes_profile__WEBPACK_IMPORTED_MODULE_5__.viewProfile)(player);
        (0,_views_nodes_profile__WEBPACK_IMPORTED_MODULE_5__.viewProfile)(ai);
        (0,_views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_7__.viewShipyard)(player);
    }

    const setDefaultListeners = () => {
        ;(0,_controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_3__.setListenersForShips)(player.getShipyard().getAllShips());
        (0,_controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_1__.setListenersForLinks)();
        (0,_controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_2__.setListenersForPlayButton)();
        (0,_controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_2__.setListenersForExitButton)();
    }

    const setGamePlayListeners = () => {
        ;(0,_controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_2__.setListenersForCells)();
    }

    const start = () => {
        setDefaultListeners();
        viewDefaulInterfaces();
        gameHandler.fillBoardsToRandomShips();
    }

    const play = () => {
        gameHandler.setDefaultSettings();
        setGamePlayListeners();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_8__.hiddenInterfaceBeforeStartPlay)();
        playGameState();
        gameHandler.playerMove();
        timeManipulators.setTimeOfTheMove();
    }

    const end = () => {
        timeManipulators.reset();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_8__.viewInterfaceAfterEndGame)();
        endGameState();
    }

    const playGameState = () => {
        player.getGameboard().blockShips();
    }

    const endGameState = () => {
        ai.getGameboard().block();
        ai.getGameboard().reset();
        player.getGameboard().reset();
        player.getGameboard().unblockShips();
        gameHandler.fillBoardsToRandomShips();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_8__.setAiMoveDesign)(ai, player)
    }

    return { start, play, end, ai, player, gameHandler }
}

const GameHandler = (ai, player, timeManipulators) => {
    let move;
    let playerCells = [...player.getGameboard().getUnstructedContainer()];
    let aiCells = [...ai.getGameboard().getUnstructedContainer()];

    const setDefaultSettings = () => {
        move = 'player';
        playerCells = [...player.getGameboard().getUnstructedContainer()];
        aiCells = [...ai.getGameboard().getUnstructedContainer()];
    }

    const switchMove = () => {
        timeManipulators.reset();
        if (isEndGame()) {
            return false;
        } else if (move === 'ai') {
            timeManipulators.setTimeOfTheMove();
            move = 'player';
            playerMove();
        } else {
            move = 'ai';
            aiMove();
        }
    }

    const isEndGame = () => {
        let isEnd = isPlayerLose(player) || isPlayerLose(ai);
        return isEnd;
    }

    const isPlayerLose = (player) => {
        let isLose = true;
        const ships = player.getShipyard().getAllShips();
        ships.forEach(ship => {
            if (ship.isLive()) {
                isLose = false;
            }
        })
        return isLose;
    }

    const playerMove = () => {
        ai.getGameboard().unblock();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_8__.setPlayerMoveDesign)(ai, player);
    }

    const checkCell = (cell) => {
        if (aiCells.includes(cell)) {
            const index = aiCells.indexOf(cell);
            ai.getGameboard().block();
            takeHit(aiCells.splice(index, 1)[0]);
            timeManipulators.setTimeBetweenMoves(500);
        }
    }

    const aiMove = () => {
        ai.getGameboard().block();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_8__.setAiMoveDesign)(ai, player);
        timeManipulators.setAiSpeedOfTought(playerCells);
    }

    const takeHit = (cell) => {
        const ship = cell.getOccupant();
        if (ship === 'free') {
            cell.getCellNode().classList.add('miss-hit');
        } else {
            const deck = cell.getLinkedDeck();
            deck.setTheHit();
            deck.getCellNode().classList.add('destroyed');
            if (!ship.isLive()) {
                ship.getContainer().style.opacity = '0.3';
            }
        }
    }

    const fillBoardsToRandomShips = () => {
        ai.getGameboard().randomFillingOfShips();
        player.getGameboard().randomFillingOfShips();
    }

    return { checkCell, playerMove, setDefaultSettings, switchMove, takeHit, isEndGame, fillBoardsToRandomShips };
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

    const unblockShips = () => {
        node.querySelectorAll('.ship').forEach(ship => {
            ship.classList.remove('block');
        });
    }

    const block = () => {
        node.querySelector('.board').classList.add('block');
    }

    const unblock = () => {
        node.querySelector('.board').classList.remove('block');
    }

    return {
        randomFillingOfShips,
        reset,
        getPlayer,
        getStructedContainer,
        getUnstructedContainer,
        getSize,
        getNode,
        blockShips,
        unblockShips,
        block,
        unblock
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
    let choisedCell = null;
    return { activeShip, index, doubleIndex, currentElement, choisedCell };
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
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _waterAreas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./waterAreas */ "./src/models/waterAreas.js");





const Ship = (length, player) => {
    const container = (0,_views_nodes_factory__WEBPACK_IMPORTED_MODULE_1__.getNode)('ship', 'horizontal');
    let body = [];
    let live = true;
    let horizontal = true;
    let head = null;
    let ship = {};
    let shipWaterAreas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_3__.ShipWaterAreas)(player, ship);

    const setYourself = (thisShip) => {
        ship = thisShip;
    }

    const getYourself = () => {
        return ship;
    }

    const fillContainer = () => {
        for (let i = 0; i < length; i++) {
            let deck = (0,_cell__WEBPACK_IMPORTED_MODULE_2__.Deck)(i);
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
                linkShipWithField();
                shipWaterAreas.occupyAreas();
            }
            return acessibility;
        } catch (error) {
            return false;
        }
    };

    const linkShipWithField = () => {
        let area = shipWaterAreas.getAreaUnderTheShip();
        for (let i = 0; i < length; i++) {
            const xy = area[i].getXY();
            body[i].setXY(xy.x, xy.y);
            area[i].setLinkedDeck(body[i]);
        }
    }

    const getWaterArea = (head) => {
        let board = getBoard().getStructedContainer();
        let areas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_3__.ShipWaterAreas)(player, ship);
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
        resetBody();
        shipWaterAreas.clearAreas();
        shipWaterAreas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_3__.ShipWaterAreas)(player, ship);
    };

    const resetBody = () => {
        body.forEach(deck => {
            deck.reset();
        })
    }

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
        setYourself,
        getYourself
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
            ship.setYourself(ship);
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

/***/ "./src/models/timeManipulators.js":
/*!****************************************!*\
  !*** ./src/models/timeManipulators.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeManipulators: () => (/* binding */ TimeManipulators)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");




const TimeManipulators = () => {
    let timeOfTheMove;
    let aiSpeedOfTought;
    let timeBetweenMoves;

    const setAiSpeedOfTought = (cells) => {
        aiSpeedOfTought = setTimeout(() => {
            ___WEBPACK_IMPORTED_MODULE_0__.game.gameHandler.takeHit((0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_1__.getRandomCell)(cells));
            setTimeBetweenMoves(1000);
        }, 1000);
    }

    const setTimeBetweenMoves = (timeout) => {
        timeBetweenMoves = setTimeout(() => {
            ___WEBPACK_IMPORTED_MODULE_0__.game.gameHandler.switchMove();
        }, timeout);
    }

    const setTimeOfTheMove = () => {
        timeOfTheMove = setInterval(() => {
            console.log('dwdwd')
            ___WEBPACK_IMPORTED_MODULE_0__.game.gameHandler.switchMove();
        }, 3000);
    }

    const reset = () => {
        clearTimeout(aiSpeedOfTought);
        clearTimeout(timeBetweenMoves);
        clearInterval(timeOfTheMove);
    }

    return { setAiSpeedOfTought, setTimeBetweenMoves, setTimeOfTheMove, reset }
}

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



const ShipWaterAreas = (player, ship) => {
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
                ship,
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
                sector.occupy(ship);
            }
        });
    };

    const checkArea = () => {
        let acessibility = true;
        let areas = underTheShip.concat(aroundTheShip);

        areas.forEach((sector) => {
            if (!sector.isFree() && sector.getOccupant() !== ship) {
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

/***/ "./src/views/nodes/ui.js":
/*!*******************************!*\
  !*** ./src/views/nodes/ui.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hiddenInterfaceBeforeStartPlay: () => (/* binding */ hiddenInterfaceBeforeStartPlay),
/* harmony export */   setAiMoveDesign: () => (/* binding */ setAiMoveDesign),
/* harmony export */   setPlayerMoveDesign: () => (/* binding */ setPlayerMoveDesign),
/* harmony export */   viewInterfaceAfterEndGame: () => (/* binding */ viewInterfaceAfterEndGame)
/* harmony export */ });
const hiddenInterfaceBeforeStartPlay = () => {
    document.querySelector('.play').classList.add('hidden');
    document.querySelector('.footer').classList.add('hidden');
    document.querySelector('.tips').classList.add('hidden');
    document.querySelector('.exit').classList.remove('hidden');
}

const viewInterfaceAfterEndGame = () => {
    document.querySelector('.play').classList.remove('hidden');
    document.querySelector('.footer').classList.remove('hidden');
    document.querySelector('.tips').classList.remove('hidden');
    document.querySelector('.exit').classList.add('hidden');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9zdHlsZXMvbWFpbi5jc3M/ODlmNiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckxpbmtzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclBsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVyL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2FscGhhYmV0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9jZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2NlbGxIYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2dhbWVDb25maWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9zaGlweWFyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy90aW1lTWFuaXB1bGF0b3JzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3dhdGVyQXJlYXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9hbmltYXRpb25zL2NoYW5nZVZpc2libGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9kcmFnQW5kRHJvcC9zZXREcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9kcmFnQW5kRHJvcC9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL2F4aXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9mYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9zaGlweWFyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL3ZpZXdzL2ltYWdlcy9jcmFjay5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcbiAgICBmb250LXNpemU6IDJ2aDtcbiAgICAtLWJvYXJkLXdpZHRoOiAwO1xuICAgIC0tYm9hcmQtaGVpZ2h0OiAwO1xuICAgIC0tY2VsbC1zaXplOiA1dmg7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgcm93LWdhcDogMnZoO1xufVxuXG5zcGFuIHtcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMnZoO1xufVxuXG4udGl0bGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4udGlwcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDJ2aCwgMnZ3KTtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4uZXhpdCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLm1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5zaGlweWFyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWluLWNvbnRlbnQpO1xuICAgIHJvdy1nYXA6IDZ2aDtcbiAgICBwYWRkaW5nOiAydmg7XG4gICAgd2lkdGg6IDQwdmg7XG4gICAgaGVpZ2h0OiA0MHZoO1xufVxuXG4uZG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2x1bW4tZ2FwOiA0dmg7XG59XG5cbi5zZWxlY3RlZCB7XG4gICAgb3BhY2l0eTogMC4wMTtcbn1cblxuLmJvYXJkX19heGlzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICByb3ctZ2FwOiAydmg7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA1dmg7XG59XG5cbi5heGlzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xufVxuXG4ueC1heGlzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWNlbGwtc2l6ZSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtd2lkdGgpLCAyZnIpO1xufVxuXG4uYm9hcmQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdheGlzLXkgYm9hcmQnO1xufVxuXG4ueS1heGlzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogYXhpcy15O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLWhlaWdodCksIDJmcik7XG59XG5cbi5ib2FyZCB7XG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksIDJmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgMmZyKTtcbiAgICBib3JkZXI6IDAuNXZoIHJnYmEoMCwgMCwgMjU1LCAwLjIpIHNvbGlkO1xufVxuXG4ucGxheSB7XG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogMTB2aDtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTksIDIwMiwgNDEsIDAuNzI2KTtcbiAgICBib3JkZXI6IDF2aCByZ2IoMTE5LCAyMDIsIDQxKSBzb2xpZDtcbiAgICB6LWluZGV4OiA5OTg7XG59XG5cbi5sb3ctb3BhY2l0eSB7XG4gICAgb3BhY2l0eTogMC40O1xufVxuXG4uYmxvY2sge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWFya2VyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogNXZoO1xufVxuXG4uY2VsbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm1pc3MtaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5kZXN0cm95ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCA3LCA3LCAwLjU0MSkgIWltcG9ydGFudDtcbn1cblxuLmxpdmUge31cblxuLngtY2VsbCxcbi55LWNlbGwge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4ubWFyaW5lLXNlY3RvciB7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGJvcmRlcjogMC4xdmggcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XG59XG5cbi5zaGlwIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIGJvcmRlcjogMC4zdmggcmdiYSgwLCAwLCAyNTUsIDEpIHNvbGlkO1xufVxuXG4uaG9yaXpvbnRhbCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMmZyKTtcbn1cblxuLnZlcnRpY2FsIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAyZnIpO1xufVxuXG4uZGVjayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDR2aDtcbn1cblxuLnJhbmRvbS1tb2RlLFxuLm1hbnVhbC1tb2RlIHtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibHVlO1xuICAgIGNvbG9yOiBibHVlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJhbmRvbS1tb2RlOmhvdmVyLFxuLm1hbnVhbC1tb2RlOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDEyMiwgMjMxLCA3Mik7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZ2IoMTIyLCAyMzEsIDcyKTtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHNEQUFzRDtJQUN0RCxvREFBb0Q7SUFDcEQsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLG1DQUFtQztJQUNuQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlEQUFrRDtJQUNsRCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxtREFBbUQ7QUFDdkQ7O0FBRUEsT0FBTzs7QUFFUDs7SUFFSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhOztJQUViLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFFBQVE7QUFDWjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSx3QkFBd0I7SUFDeEIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICAtLWJvYXJkLXdpZHRoOiAwO1xcbiAgICAtLWJvYXJkLWhlaWdodDogMDtcXG4gICAgLS1jZWxsLXNpemU6IDV2aDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIHJvdy1nYXA6IDJ2aDtcXG59XFxuXFxuc3BhbiB7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciBtaW4tY29udGVudDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMnZoO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi50aXBzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IG1pbigydmgsIDJ2dyk7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5leGl0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5zaGlweWFyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWluLWNvbnRlbnQpO1xcbiAgICByb3ctZ2FwOiA2dmg7XFxuICAgIHBhZGRpbmc6IDJ2aDtcXG4gICAgd2lkdGg6IDQwdmg7XFxuICAgIGhlaWdodDogNDB2aDtcXG59XFxuXFxuLmRvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiA0dmg7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIG9wYWNpdHk6IDAuMDE7XFxufVxcblxcbi5ib2FyZF9fYXhpcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgcm93LWdhcDogMnZoO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogNXZoO1xcbn1cXG5cXG4uYXhpcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLngtYXhpcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksIDJmcik7XFxufVxcblxcbi5ib2FyZC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2F4aXMteSBib2FyZCc7XFxufVxcblxcbi55LWF4aXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IGF4aXMteTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgMmZyKTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgMmZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgMmZyKTtcXG4gICAgYm9yZGVyOiAwLjV2aCByZ2JhKDAsIDAsIDI1NSwgMC4yKSBzb2xpZDtcXG59XFxuXFxuLnBsYXkge1xcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTB2aDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExOSwgMjAyLCA0MSwgMC43MjYpO1xcbiAgICBib3JkZXI6IDF2aCByZ2IoMTE5LCAyMDIsIDQxKSBzb2xpZDtcXG4gICAgei1pbmRleDogOTk4O1xcbn1cXG5cXG4ubG93LW9wYWNpdHkge1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi5ibG9jayB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1hcmtlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDV2aDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWlzcy1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy92aWV3cy9pbWFnZXMvY3JhY2sucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbi5kZXN0cm95ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgNywgNywgMC41NDEpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5saXZlIHt9XFxuXFxuLngtY2VsbCxcXG4ueS1jZWxsIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLm1hcmluZS1zZWN0b3Ige1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBib3JkZXI6IDAuMXZoIHJnYmEoMCwgMCwgMjU1LCAwLjIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgICBib3JkZXI6IDAuM3ZoIHJnYmEoMCwgMCwgMjU1LCAxKSBzb2xpZDtcXG59XFxuXFxuLmhvcml6b250YWwge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAyZnIpO1xcbn1cXG5cXG4udmVydGljYWwge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAyZnIpO1xcbn1cXG5cXG4uZGVjayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNHZoO1xcbn1cXG5cXG4ucmFuZG9tLW1vZGUsXFxuLm1hbnVhbC1tb2RlIHtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibHVlO1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmFuZG9tLW1vZGU6aG92ZXIsXFxuLm1hbnVhbC1tb2RlOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigxMjIsIDIzMSwgNzIpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYigxMjIsIDIzMSwgNzIpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IHJlbW92ZUhpZGRlbiwgc2V0SGlkZGVuIH0gZnJvbSAnLi4vLi4vdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlJztcbmltcG9ydCB7IHZpZXdTaGlweWFyZCB9IGZyb20gJy4uLy4uL3ZpZXdzL25vZGVzL3NoaXB5YXJkJztcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckxpbmtzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1hbnVhbE1vZGVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbnVhbC1tb2RlJyk7XG4gICAgY29uc3QgcmFuZG9tTW9kZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tLW1vZGUnKTtcbiAgICBjb25zdCBzaGlweWFyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlweWFyZCcpO1xuXG4gICAgY29uc3Qgb3Blbk1hbnVhbE1vZGUgPSBtYW51YWxNb2RlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGdhbWUucGxheWVyLmdldEdhbWVib2FyZCgpLnJlc2V0KCk7XG4gICAgICAgIHZpZXdTaGlweWFyZChnYW1lLnBsYXllci5nZXRTaGlweWFyZCgpKTtcbiAgICAgICAgc2V0SGlkZGVuKGdhbWUuYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgcmVtb3ZlSGlkZGVuKHNoaXB5YXJkKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG9wZW5SYW5kb21Nb2RlID0gcmFuZG9tTW9kZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICByZW1vdmVIaWRkZW4oZ2FtZS5haS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkpO1xuICAgICAgICBzZXRIaWRkZW4oc2hpcHlhcmQpO1xuICAgICAgICBnYW1lLnBsYXllci5nZXRHYW1lYm9hcmQoKS5yYW5kb21GaWxsaW5nT2ZTaGlwcygpO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi4vLi5cIjtcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvclBsYXlCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKTtcblxuICAgIGNvbnN0IGNsaWNrID0gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGdhbWUucGxheSgpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JFeGl0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0Jyk7XG5cbiAgICBjb25zdCBjbGljayA9IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBnYW1lLmVuZCgpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JDZWxscyA9ICgpID0+IHtcbiAgICBjb25zdCBjZWxscyA9IGdhbWUuYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcigpO1xuICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBjZWxsLmdldENlbGxOb2RlKCk7XG4gICAgICAgIG5vZGUuc3R5bGUuekluZGV4ID0gMTAwMDtcbiAgICAgICAgY29uc3QgY2xpY2sgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBnYW1lLmdhbWVIYW5kbGVyLmNoZWNrQ2VsbChjZWxsKTtcbiAgICAgICAgfSlcbiAgICB9KVxufSIsImltcG9ydCB7IGdhbWUgfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyBTZXNzaW9uLCByZXNldFNlc3Npb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvc2Vzc2lvbic7XG5pbXBvcnQgeyB2aWV3U2hpcCB9IGZyb20gJy4uLy4uL3ZpZXdzL25vZGVzL3NoaXAnO1xuaW1wb3J0IHsgc2hpcERyYWdFbmQgfSBmcm9tICcuLi9zaGlwJztcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvclNoaXBzID0gKHNoaXBzKSA9PiB7XG4gICAgY29uc3QgYm9yZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgZGVja3MgPSBzaGlwLmdldEJvZHkoKTtcbiAgICAgICAgZGVja3MuZm9yRWFjaCgoZGVjaykgPT4ge1xuICAgICAgICAgICAgZGVjay5nZXRDZWxsTm9kZSgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldnQpID0+IHtcbiAgICAgICAgICAgICAgICBTZXNzaW9uLmluZGV4ID0gZGVjay5nZXROdW1iZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmdldEhlYWQoKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgU2Vzc2lvbi5jdXJyZW50RWxlbWVudCA9IHNoaXAuZ2V0SGVhZCgpLmdldENlbGxOb2RlKCk7XG4gICAgICAgICAgICAgICAgc2hpcC5vcmllbnRhdGlvblN3aXRjaCgpO1xuICAgICAgICAgICAgICAgIGxldCBpc1ZpZXcgPSB2aWV3U2hpcChzaGlwLCBzaGlwLmdldEhlYWQoKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNWaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuc2V0T3JpZW50YXRpb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLm9yaWVudGF0aW9uU3dpdGNoKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzZXRTZXNzaW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXAuZ2V0Q29udGFpbmVyKCkuYWRkRXZlbnRMaXN0ZW5lcihgZHJhZ3N0YXJ0YCwgKGV2dCkgPT4ge1xuICAgICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuYWRkKGBzZWxlY3RlZGApO1xuICAgICAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwID0gc2hpcDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2hpcC5nZXRDb250YWluZXIoKS5hZGRFdmVudExpc3RlbmVyKGBkcmFnZW5kYCwgKGV2dCkgPT4ge1xuICAgICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGBzZWxlY3RlZGApO1xuICAgICAgICAgICAgc2hpcERyYWdFbmQoKTtcbiAgICAgICAgICAgIHJlc2V0U2Vzc2lvbigpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGJvcmRlci5hZGRFdmVudExpc3RlbmVyKGBkcmFnb3ZlcmAsIChldnQpID0+IHtcbiAgICAgICAgU2Vzc2lvbi5jdXJyZW50RWxlbWVudCA9IGV2dC50YXJnZXQ7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2dhbWVDb25maWcnO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJy4uL21vZGVscy9zZXNzaW9uJztcbmltcG9ydCB7IHZpZXdTaGlwIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvc2hpcCc7XG5cbmV4cG9ydCBjb25zdCBzaGlwRHJhZ0VuZCA9ICgpID0+IHtcbiAgICBsZXQgaXNNb3ZlYWJsZSA9IGZhbHNlO1xuICAgIGxldCBpc0FsdGVyTW92YWJsZSA9IGZhbHNlO1xuICAgIGxldCBib2R5ID0gU2Vzc2lvbi5hY3RpdmVTaGlwLmdldEJvZHkoKTtcbiAgICBpZiAoU2Vzc2lvbi5jdXJyZW50RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBpc01vdmVhYmxlID0gU2Vzc2lvbi5jdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoYG1hcmluZS1zZWN0b3JgKTtcbiAgICAgICAgaXNBbHRlck1vdmFibGUgPSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgZGVja2ApO1xuICAgIH1cblxuICAgIGlmICghaXNNb3ZlYWJsZSAmJiAhaXNBbHRlck1vdmFibGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc01vdmVhYmxlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBDb25maWcuR2FtZWJvYXJkLndpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldEJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpXG4gICAgICAgICAgICAgICAgICAgICAgICBbal1baV0uZ2V0Q2VsbE5vZGUoKSA9PT0gU2Vzc2lvbi5jdXJyZW50RWxlbWVudFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWRkU2hpcE9uQm9hcmQoU2Vzc2lvbi5pbmRleCwgaiwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0FsdGVyTW92YWJsZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChib2R5W2ldLmdldENlbGxOb2RlKCkgPT09IFNlc3Npb24uY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBTZXNzaW9uLmRvdWJsZUluZGV4ID0gU2Vzc2lvbi5pbmRleCAtIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFNlc3Npb24uZG91YmxlSW5kZXggIT09ICdzaGlwJykge1xuICAgICAgICAgICAgbGV0IGhlYWQgPSBTZXNzaW9uLmFjdGl2ZVNoaXAuZ2V0SGVhZCgpLmdldENlbGxOb2RlKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvbmZpZy5HYW1lYm9hcmQuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvbmZpZy5HYW1lYm9hcmQud2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2pdW2ldLmdldENlbGxOb2RlKCkgPT09IGhlYWRcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWRkU2hpcE9uQm9hcmQoU2Vzc2lvbi5kb3VibGVJbmRleCwgaiwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5jb25zdCBhZGRTaGlwT25Cb2FyZCA9IChpbmRleCwgeSwgeCkgPT4ge1xuICAgIGxldCBkYXRhID0gZ2V0RGF0YShpbmRleCwgeSwgeCk7XG4gICAgcmV0dXJuIHZpZXdTaGlwT25Cb2FyZChkYXRhKTtcbn07XG5cbmNvbnN0IGdldERhdGEgPSAoaW5kZXgsIHgsIHkpID0+IHtcbiAgICByZXR1cm4gU2Vzc2lvbi5hY3RpdmVTaGlwLmlzSG9yaXpvbnRhbCgpXG4gICAgICAgID8geyB4OiB4LCB5OiB5IC0gaW5kZXggfVxuICAgICAgICA6IHsgeDogeCAtIGluZGV4LCB5OiB5IH07XG59O1xuXG5jb25zdCB2aWV3U2hpcE9uQm9hcmQgPSAoZGF0YSkgPT4ge1xuICAgIHJldHVybiB2aWV3U2hpcChcbiAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwLFxuICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAuZ2V0Qm9hcmQoKS5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpW2RhdGEueF1bZGF0YS55XSxcbiAgICApO1xufTtcbiIsImV4cG9ydCBjb25zdCByYW5kb21JbnRGcm9tSW50ZXJ2YWwgPSAobWluLCBtYXgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDaGlsZHMgPSAobm9kZSkgPT4ge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsImltcG9ydCAnLi92aWV3cy9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4vbW9kZWxzL3BsYXllcic7XG5pbXBvcnQgeyB2aWV3UHJvZmlsZSB9IGZyb20gJy4vdmlld3Mvbm9kZXMvcHJvZmlsZSc7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JMaW5rcyB9IGZyb20gJy4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckxpbmtzJztcbmltcG9ydCB7IHZpZXdTaGlweWFyZCB9IGZyb20gJy4vdmlld3Mvbm9kZXMvc2hpcHlhcmQnO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yU2hpcHMgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JTaGlwcyc7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9tb2RlbHMvZ2FtZSc7XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gR2FtZSgpO1xuZ2FtZS5zdGFydCgpOyIsImNvbnN0IEFscGhhYmV0ID0gKGZpcnN0Q2hhckNvZGUsIGxhc3RDaGFyQ29kZSkgPT4ge1xuICAgIGNvbnN0IGxvbmcgPSBsYXN0Q2hhckNvZGUgLSBmaXJzdENoYXJDb2RlICsgMTtcbiAgICBjb25zdCBjb2RlcyA9IEFycmF5LmZyb20oQXJyYXkobG9uZykua2V5cygpLCAoeCkgPT4geCArIGZpcnN0Q2hhckNvZGUpO1xuXG4gICAgY29uc3QgaXNUaGlzQWxwaGFiZXQgPSAoY2hhckNvZGUpID0+IHtcbiAgICAgICAgaWYgKGNoYXJDb2RlID49IGZpcnN0Q2hhckNvZGUgJiYgY2hhckNvZGUgPD0gbGFzdENoYXJDb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGZpcnN0Q2hhckNvZGUsIGxhc3RDaGFyQ29kZSwgbG9uZywgaXNUaGlzQWxwaGFiZXQsIGNvZGVzIH07XG59O1xuXG5leHBvcnQgY29uc3QgQWxwaGFiZXRzID0gKCgpID0+IHtcbiAgICBjb25zdCBlbmcgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFscGhhYmV0ID0gQWxwaGFiZXQoOTcsIDEyMik7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFscGhhYmV0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcnVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbHBoYWJldCA9IEFscGhhYmV0KDEwNzIsIDExMDMpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhbHBoYWJldCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGVuZywgcnVzIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgZ2V0Tm9kZSB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL2ZhY3RvcnknO1xuXG5leHBvcnQgY29uc3QgQ2VsbCA9ICh4ID0gLTEsIHkgPSAtMSwgbmFtZSA9ICdjZWxsJykgPT4ge1xuICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICBsZXQgcGFyZW50ID0gJ2ZyZWUnO1xuICAgIGxldCBub2RlID0gZ2V0Tm9kZShuYW1lLCAnY2VsbCcpO1xuICAgIGxldCBsaW5rZWREZWNrID0gJ2ZyZWUnO1xuXG4gICAgY29uc3Qgc2V0TGlua2VkRGVjayA9IChkZWNrKSA9PiB7XG4gICAgICAgIGxpbmtlZERlY2sgPSBkZWNrO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExpbmtlZERlY2sgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsaW5rZWREZWNrO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRoZUhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNIaXQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoaXQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFBhcmVudCA9IChuUGFyZW50KSA9PiB7XG4gICAgICAgIHBhcmVudCA9IG5QYXJlbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBhcmVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q2VsbE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRYWSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgeCwgeSB9O1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRYWSA9IChueCwgbnkpID0+IHtcbiAgICAgICAgeCA9IG54O1xuICAgICAgICB5ID0gbnk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBoaXQgPSBmYWxzZTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdtaXNzLWhpdCcpO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rlc3Ryb3llZCcpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFRoZUhpdCxcbiAgICAgICAgaXNIaXQsXG4gICAgICAgIHNldFBhcmVudCxcbiAgICAgICAgZ2V0UGFyZW50LFxuICAgICAgICBnZXRDZWxsTm9kZSxcbiAgICAgICAgZ2V0WFksXG4gICAgICAgIHNldFhZLFxuICAgICAgICBzZXRMaW5rZWREZWNrLFxuICAgICAgICBnZXRMaW5rZWREZWNrLFxuICAgICAgICByZXNldFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgRGVjayA9IChudW1iZXIpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBDZWxsKC0xLCAtMSwgJ2RlY2snKTtcblxuICAgIGNvbnN0IGdldE51bWJlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IGdldE51bWJlciB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBNYXJpbmVTZWN0b3IgPSAoeSwgeCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IENlbGwoeSwgeCwgJ21hcmluZS1zZWN0b3InKTtcbiAgICBsZXQgb2NjdXBhbnQgPSAnZnJlZSc7XG5cbiAgICBjb25zdCBvY2N1cHkgPSAobk9jY3VwYW50KSA9PiB7XG4gICAgICAgIG9jY3VwYW50ID0gbk9jY3VwYW50O1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICAgICAgb2NjdXBhbnQgPSAnZnJlZSc7XG4gICAgICAgIHByb3RvdHlwZS5yZXNldCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0ZyZWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvY2N1cGFudCA9PT0gJ2ZyZWUnO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRPY2N1cGFudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9jY3VwYW50O1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgaXNGcmVlLCBjbGVhciwgb2NjdXB5LCBnZXRPY2N1cGFudCB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgQ2VsbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2V0QmVmb3JlID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFt5XVstLXhdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFt5XVsrK3hdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEFmdGVyID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFt5XVsrK3hdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFt5XVstLXhdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE92ZXIgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1beF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1beF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VW5kZXIgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1beF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1beF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RGlhZzEgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1bLS14XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVsrK3hdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERpYWcyID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldWysreF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1bLS14XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXREaWFnMyA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVsrK3hdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldWy0teF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RGlhZzQgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1bLS14XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVsrK3hdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENlbGxBcm91bmRBcmVhID0gKHgsIHksIHBhcmVudCwgY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGxldCBjZWxscyA9IFtdO1xuICAgICAgICBjZWxscy5wdXNoKGdldEJlZm9yZSh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXRBZnRlcih4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXRPdmVyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldFVuZGVyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWcxKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWcyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWczKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWc0KHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscyA9IGNlbGxzLmZpbHRlcigoY2VsbCkgPT4gY2VsbCAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRDZWxsQXJvdW5kQXJlYSB9O1xufTtcbiIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvckxpbmtzIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JMaW5rc1wiO1xuaW1wb3J0IHsgcmVtb3ZlTGlzdGVuZXJzRm9yQ2VsbHMsIHNldExpc3RlbmVyc0ZvckNlbGxzLCBzZXRMaXN0ZW5lcnNGb3JFeGl0QnV0dG9uLCBzZXRMaXN0ZW5lcnNGb3JQbGF5QnV0dG9uIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JQbGF5XCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JTaGlwcyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yU2hpcHNcIjtcbmltcG9ydCB7IHNldERyYWdnYWJsZUZvclNoaXBzIH0gZnJvbSBcIi4uL3ZpZXdzL2RyYWdBbmREcm9wL3NoaXBzXCI7XG5pbXBvcnQgeyB2aWV3UHJvZmlsZSB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9wcm9maWxlXCI7XG5pbXBvcnQgeyBnZXRSYW5kb21DZWxsIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL3NoaXBcIjtcbmltcG9ydCB7IHZpZXdTaGlweWFyZCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9zaGlweWFyZFwiO1xuaW1wb3J0IHsgaGlkZGVuSW50ZXJmYWNlQmVmb3JlU3RhcnRQbGF5LCBzZXRBaU1vdmVEZXNpZ24sIHNldFBsYXllck1vdmVEZXNpZ24sIHZpZXdJbnRlcmZhY2VBZnRlckVuZEdhbWUgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvdWlcIjtcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IFRpbWVNYW5pcHVsYXRvcnMgfSBmcm9tIFwiLi90aW1lTWFuaXB1bGF0b3JzXCI7XG5cbmV4cG9ydCBjb25zdCBHYW1lID0gKCkgPT4ge1xuICAgIGxldCBwbGF5ZXIgPSBQcm9maWxlKDEsICdQbGF5ZXInLCAncGxheWVyLWJvYXJkJyk7XG4gICAgbGV0IGFpID0gUHJvZmlsZSgwLCAnQUknLCAnYWktYm9hcmQnKTtcbiAgICBjb25zdCB0aW1lTWFuaXB1bGF0b3JzID0gVGltZU1hbmlwdWxhdG9ycygpO1xuICAgIGNvbnN0IGdhbWVIYW5kbGVyID0gR2FtZUhhbmRsZXIoYWksIHBsYXllciwgdGltZU1hbmlwdWxhdG9ycyk7XG5cbiAgICBjb25zdCB2aWV3RGVmYXVsSW50ZXJmYWNlcyA9ICgpID0+IHtcbiAgICAgICAgdmlld1Byb2ZpbGUocGxheWVyKTtcbiAgICAgICAgdmlld1Byb2ZpbGUoYWkpO1xuICAgICAgICB2aWV3U2hpcHlhcmQocGxheWVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXREZWZhdWx0TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JTaGlwcyhwbGF5ZXIuZ2V0U2hpcHlhcmQoKS5nZXRBbGxTaGlwcygpKTtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yTGlua3MoKTtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yUGxheUJ1dHRvbigpO1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JFeGl0QnV0dG9uKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0R2FtZVBsYXlMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckNlbGxzKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHNldERlZmF1bHRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdmlld0RlZmF1bEludGVyZmFjZXMoKTtcbiAgICAgICAgZ2FtZUhhbmRsZXIuZmlsbEJvYXJkc1RvUmFuZG9tU2hpcHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGF5ID0gKCkgPT4ge1xuICAgICAgICBnYW1lSGFuZGxlci5zZXREZWZhdWx0U2V0dGluZ3MoKTtcbiAgICAgICAgc2V0R2FtZVBsYXlMaXN0ZW5lcnMoKTtcbiAgICAgICAgaGlkZGVuSW50ZXJmYWNlQmVmb3JlU3RhcnRQbGF5KCk7XG4gICAgICAgIHBsYXlHYW1lU3RhdGUoKTtcbiAgICAgICAgZ2FtZUhhbmRsZXIucGxheWVyTW92ZSgpO1xuICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnNldFRpbWVPZlRoZU1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSAoKSA9PiB7XG4gICAgICAgIHRpbWVNYW5pcHVsYXRvcnMucmVzZXQoKTtcbiAgICAgICAgdmlld0ludGVyZmFjZUFmdGVyRW5kR2FtZSgpO1xuICAgICAgICBlbmRHYW1lU3RhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGF5R2FtZVN0YXRlID0gKCkgPT4ge1xuICAgICAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuYmxvY2tTaGlwcygpO1xuICAgIH1cblxuICAgIGNvbnN0IGVuZEdhbWVTdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkuYmxvY2soKTtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkucmVzZXQoKTtcbiAgICAgICAgcGxheWVyLmdldEdhbWVib2FyZCgpLnJlc2V0KCk7XG4gICAgICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS51bmJsb2NrU2hpcHMoKTtcbiAgICAgICAgZ2FtZUhhbmRsZXIuZmlsbEJvYXJkc1RvUmFuZG9tU2hpcHMoKTtcbiAgICAgICAgc2V0QWlNb3ZlRGVzaWduKGFpLCBwbGF5ZXIpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhcnQsIHBsYXksIGVuZCwgYWksIHBsYXllciwgZ2FtZUhhbmRsZXIgfVxufVxuXG5jb25zdCBHYW1lSGFuZGxlciA9IChhaSwgcGxheWVyLCB0aW1lTWFuaXB1bGF0b3JzKSA9PiB7XG4gICAgbGV0IG1vdmU7XG4gICAgbGV0IHBsYXllckNlbGxzID0gWy4uLnBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCldO1xuICAgIGxldCBhaUNlbGxzID0gWy4uLmFpLmdldEdhbWVib2FyZCgpLmdldFVuc3RydWN0ZWRDb250YWluZXIoKV07XG5cbiAgICBjb25zdCBzZXREZWZhdWx0U2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIG1vdmUgPSAncGxheWVyJztcbiAgICAgICAgcGxheWVyQ2VsbHMgPSBbLi4ucGxheWVyLmdldEdhbWVib2FyZCgpLmdldFVuc3RydWN0ZWRDb250YWluZXIoKV07XG4gICAgICAgIGFpQ2VsbHMgPSBbLi4uYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcigpXTtcbiAgICB9XG5cbiAgICBjb25zdCBzd2l0Y2hNb3ZlID0gKCkgPT4ge1xuICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnJlc2V0KCk7XG4gICAgICAgIGlmIChpc0VuZEdhbWUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKG1vdmUgPT09ICdhaScpIHtcbiAgICAgICAgICAgIHRpbWVNYW5pcHVsYXRvcnMuc2V0VGltZU9mVGhlTW92ZSgpO1xuICAgICAgICAgICAgbW92ZSA9ICdwbGF5ZXInO1xuICAgICAgICAgICAgcGxheWVyTW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW92ZSA9ICdhaSc7XG4gICAgICAgICAgICBhaU1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzRW5kR2FtZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGlzRW5kID0gaXNQbGF5ZXJMb3NlKHBsYXllcikgfHwgaXNQbGF5ZXJMb3NlKGFpKTtcbiAgICAgICAgcmV0dXJuIGlzRW5kO1xuICAgIH1cblxuICAgIGNvbnN0IGlzUGxheWVyTG9zZSA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IGlzTG9zZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gcGxheWVyLmdldFNoaXB5YXJkKCkuZ2V0QWxsU2hpcHMoKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmlzTGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgaXNMb3NlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBpc0xvc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyTW92ZSA9ICgpID0+IHtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkudW5ibG9jaygpO1xuICAgICAgICBzZXRQbGF5ZXJNb3ZlRGVzaWduKGFpLCBwbGF5ZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrQ2VsbCA9IChjZWxsKSA9PiB7XG4gICAgICAgIGlmIChhaUNlbGxzLmluY2x1ZGVzKGNlbGwpKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGFpQ2VsbHMuaW5kZXhPZihjZWxsKTtcbiAgICAgICAgICAgIGFpLmdldEdhbWVib2FyZCgpLmJsb2NrKCk7XG4gICAgICAgICAgICB0YWtlSGl0KGFpQ2VsbHMuc3BsaWNlKGluZGV4LCAxKVswXSk7XG4gICAgICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnNldFRpbWVCZXR3ZWVuTW92ZXMoNTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFpTW92ZSA9ICgpID0+IHtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkuYmxvY2soKTtcbiAgICAgICAgc2V0QWlNb3ZlRGVzaWduKGFpLCBwbGF5ZXIpO1xuICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnNldEFpU3BlZWRPZlRvdWdodChwbGF5ZXJDZWxscyk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFrZUhpdCA9IChjZWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBjZWxsLmdldE9jY3VwYW50KCk7XG4gICAgICAgIGlmIChzaGlwID09PSAnZnJlZScpIHtcbiAgICAgICAgICAgIGNlbGwuZ2V0Q2VsbE5vZGUoKS5jbGFzc0xpc3QuYWRkKCdtaXNzLWhpdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGVjayA9IGNlbGwuZ2V0TGlua2VkRGVjaygpO1xuICAgICAgICAgICAgZGVjay5zZXRUaGVIaXQoKTtcbiAgICAgICAgICAgIGRlY2suZ2V0Q2VsbE5vZGUoKS5jbGFzc0xpc3QuYWRkKCdkZXN0cm95ZWQnKTtcbiAgICAgICAgICAgIGlmICghc2hpcC5pc0xpdmUoKSkge1xuICAgICAgICAgICAgICAgIHNoaXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUub3BhY2l0eSA9ICcwLjMnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmlsbEJvYXJkc1RvUmFuZG9tU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGFpLmdldEdhbWVib2FyZCgpLnJhbmRvbUZpbGxpbmdPZlNoaXBzKCk7XG4gICAgICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS5yYW5kb21GaWxsaW5nT2ZTaGlwcygpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNoZWNrQ2VsbCwgcGxheWVyTW92ZSwgc2V0RGVmYXVsdFNldHRpbmdzLCBzd2l0Y2hNb3ZlLCB0YWtlSGl0LCBpc0VuZEdhbWUsIGZpbGxCb2FyZHNUb1JhbmRvbVNoaXBzIH07XG59IiwiaW1wb3J0IHsgcGxheWVyMSB9IGZyb20gJy4uJztcbmltcG9ydCB7IHJhbmRvbUludEZyb21JbnRlcnZhbCB9IGZyb20gJy4uL2hlbHBlci9oZWxwZXInO1xuaW1wb3J0IHsgdmlld1NoaXAsIHZpZXdTaGlwT25SYW5kb21DZWxsIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvc2hpcCc7XG5pbXBvcnQgeyBNYXJpbmVTZWN0b3IgfSBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9nYW1lQ29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9IChuYW1lLCBwbGF5ZXIpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IENvbmZpZy5HYW1lYm9hcmQud2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0ID0gQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQ7XG4gICAgY29uc3QgY29udGFpbmVycyA9IGZpbGxCb2FyZCh3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX1gKTtcblxuICAgIGNvbnN0IGdldFN0cnVjdGVkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVycy5nZXRTdHJ1Y3RlZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRVbnN0cnVjdGVkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVycy5nZXRVbnN0cnVjdGVkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBsYXllciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lcnMuZ2V0VW5zdHJ1Y3RlZCgpLmZvckVhY2goKHNlY3RvcikgPT4ge1xuICAgICAgICAgICAgc2VjdG9yLmNsZWFyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwbGF5ZXIuZ2V0U2hpcHlhcmQoKS5yZXNldCgpO1xuICAgIH07XG5cbiAgICBjb25zdCByYW5kb21GaWxsaW5nT2ZTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgbGV0IHNoaXBzID0gcGxheWVyLmdldFNoaXB5YXJkKCkuZ2V0QWxsU2hpcHMoKTtcblxuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBzaGlwLnNldFJhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICB2aWV3U2hpcE9uUmFuZG9tQ2VsbChzaGlwLCBbLi4uZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcigpXSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBibG9ja1NoaXBzID0gKCkgPT4ge1xuICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5ibG9ja1NoaXBzID0gKCkgPT4ge1xuICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2snKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2sgPSAoKSA9PiB7XG4gICAgICAgIG5vZGUucXVlcnlTZWxlY3RvcignLmJvYXJkJykuY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICB9XG5cbiAgICBjb25zdCB1bmJsb2NrID0gKCkgPT4ge1xuICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2NrJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmFuZG9tRmlsbGluZ09mU2hpcHMsXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBnZXRQbGF5ZXIsXG4gICAgICAgIGdldFN0cnVjdGVkQ29udGFpbmVyLFxuICAgICAgICBnZXRVbnN0cnVjdGVkQ29udGFpbmVyLFxuICAgICAgICBnZXRTaXplLFxuICAgICAgICBnZXROb2RlLFxuICAgICAgICBibG9ja1NoaXBzLFxuICAgICAgICB1bmJsb2NrU2hpcHMsXG4gICAgICAgIGJsb2NrLFxuICAgICAgICB1bmJsb2NrXG4gICAgfTtcbn07XG5cbmNvbnN0IGZpbGxCb2FyZCA9ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gICAgbGV0IHN0cnVjdGVkID0gW107XG4gICAgbGV0IHVuc3RydWN0ZWQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgbGV0IGxpbmUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gTWFyaW5lU2VjdG9yKGosIGkpO1xuICAgICAgICAgICAgbGluZVtqXSA9IGNlbGw7XG4gICAgICAgICAgICB1bnN0cnVjdGVkLnB1c2goY2VsbCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RydWN0ZWRbaV0gPSBsaW5lO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFN0cnVjdGVkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3RydWN0ZWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFVuc3RydWN0ZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB1bnN0cnVjdGVkO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRTdHJ1Y3RlZCwgZ2V0VW5zdHJ1Y3RlZCB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBDb25maWcgPSAoKCkgPT4ge1xuICAgIGNvbnN0IEdhbWVib2FyZCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gMTA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDEwO1xuICAgICAgICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IEVsZW1lbnRzID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcFR5cGVzID0gWydmcmVnYXRzJywgJ2NhcmF2ZWxzJywgJ2RyYWtrYXJzJywgJ2JvYXRzJ107XG4gICAgICAgIGNvbnN0IG51bWJlck9mID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyZWdhdGVzID0gMTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmF2ZWxzID0gMjtcbiAgICAgICAgICAgIGNvbnN0IGRyYWtrYXJzID0gMztcbiAgICAgICAgICAgIGNvbnN0IGJvYXRzID0gNDtcbiAgICAgICAgICAgIHJldHVybiB7IGZyZWdhdGVzLCBjYXJhdmVscywgZHJha2thcnMsIGJvYXRzIH07XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgcmV0dXJuIHsgbnVtYmVyT2YsIHNoaXBUeXBlcyB9O1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4geyBHYW1lYm9hcmQsIEVsZW1lbnRzIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IHsgU2hpcHlhcmQgfSBmcm9tICcuL3NoaXB5YXJkJztcblxuY29uc3QgUGxheWVyID0gKGlkLCBuYW1lKSA9PiB7XG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldElkLCBnZXROYW1lIH07XG59O1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZSA9IChpZCwgbmFtZSwgbm9kZUlkKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gUGxheWVyKGlkLCBuYW1lKTtcblxuICAgIGxldCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQobm9kZUlkLCBwcm90b3R5cGUpO1xuICAgIGxldCBzaGlweWFyZCA9IFNoaXB5YXJkKHByb3RvdHlwZSk7XG5cbiAgICBjb25zdCBnZXRHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFNoaXB5YXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHlhcmQ7XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyBnZXRHYW1lYm9hcmQsIGdldFNoaXB5YXJkIH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCBTZXNzaW9uID0gKCgpID0+IHtcbiAgICBsZXQgYWN0aXZlU2hpcCA9IG51bGw7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgZG91YmxlSW5kZXggPSAnc2hpcCc7XG4gICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gbnVsbDtcbiAgICBsZXQgY2hvaXNlZENlbGwgPSBudWxsO1xuICAgIHJldHVybiB7IGFjdGl2ZVNoaXAsIGluZGV4LCBkb3VibGVJbmRleCwgY3VycmVudEVsZW1lbnQsIGNob2lzZWRDZWxsIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgcmVzZXRTZXNzaW9uID0gKCkgPT4ge1xuICAgIFNlc3Npb24uYWN0aXZlU2hpcCA9IG51bGw7XG4gICAgU2Vzc2lvbi5pbmRleCA9IDA7XG4gICAgU2Vzc2lvbi5kb3VibGVJbmRleCA9ICdzaGlwJztcbiAgICBTZXNzaW9uLmN1cnJlbnRFbGVtZW50ID0gbnVsbDtcbn07XG4iLCJpbXBvcnQgeyByYW5kb21JbnRGcm9tSW50ZXJ2YWwgfSBmcm9tICcuLi9oZWxwZXIvaGVscGVyJztcbmltcG9ydCB7IGdldE5vZGUgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9mYWN0b3J5JztcbmltcG9ydCB7IERlY2sgfSBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IHsgU2hpcFdhdGVyQXJlYXMgfSBmcm9tICcuL3dhdGVyQXJlYXMnO1xuXG5leHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldE5vZGUoJ3NoaXAnLCAnaG9yaXpvbnRhbCcpO1xuICAgIGxldCBib2R5ID0gW107XG4gICAgbGV0IGxpdmUgPSB0cnVlO1xuICAgIGxldCBob3Jpem9udGFsID0gdHJ1ZTtcbiAgICBsZXQgaGVhZCA9IG51bGw7XG4gICAgbGV0IHNoaXAgPSB7fTtcbiAgICBsZXQgc2hpcFdhdGVyQXJlYXMgPSBTaGlwV2F0ZXJBcmVhcyhwbGF5ZXIsIHNoaXApO1xuXG4gICAgY29uc3Qgc2V0WW91cnNlbGYgPSAodGhpc1NoaXApID0+IHtcbiAgICAgICAgc2hpcCA9IHRoaXNTaGlwO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFlvdXJzZWxmID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxsQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGVjayA9IERlY2soaSk7XG4gICAgICAgICAgICBib2R5LnB1c2goZGVjayk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVjay5nZXRDZWxsTm9kZSgpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZXRPcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgICAgICAgICAgc2V0VmVydGljYWwoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpKSB7XG4gICAgICAgICAgICBzZXRIb3Jpem9udGFsKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdGFrZURvd25XYXRlckFyZWFzID0gKCkgPT4ge1xuICAgICAgICBzaGlwV2F0ZXJBcmVhcy5jbGVhckFyZWFzKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxhdW5jaFNoaXBPbldhdGVyID0gKG5IZWFkKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgd2F0ZXJBcmVhcyA9IGdldFdhdGVyQXJlYShuSGVhZCk7XG4gICAgICAgICAgICBsZXQgYWNlc3NpYmlsaXR5ID0gd2F0ZXJBcmVhcy5jaGVja0FyZWEoKTtcbiAgICAgICAgICAgIGlmIChhY2Vzc2liaWxpdHkpIHtcbiAgICAgICAgICAgICAgICB0YWtlRG93bldhdGVyQXJlYXMoKTtcbiAgICAgICAgICAgICAgICBzaGlwV2F0ZXJBcmVhcyA9IHdhdGVyQXJlYXM7XG4gICAgICAgICAgICAgICAgbGlua1NoaXBXaXRoRmllbGQoKTtcbiAgICAgICAgICAgICAgICBzaGlwV2F0ZXJBcmVhcy5vY2N1cHlBcmVhcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjZXNzaWJpbGl0eTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBsaW5rU2hpcFdpdGhGaWVsZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFyZWEgPSBzaGlwV2F0ZXJBcmVhcy5nZXRBcmVhVW5kZXJUaGVTaGlwKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHh5ID0gYXJlYVtpXS5nZXRYWSgpO1xuICAgICAgICAgICAgYm9keVtpXS5zZXRYWSh4eS54LCB4eS55KTtcbiAgICAgICAgICAgIGFyZWFbaV0uc2V0TGlua2VkRGVjayhib2R5W2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFdhdGVyQXJlYSA9IChoZWFkKSA9PiB7XG4gICAgICAgIGxldCBib2FyZCA9IGdldEJvYXJkKCkuZ2V0U3RydWN0ZWRDb250YWluZXIoKTtcbiAgICAgICAgbGV0IGFyZWFzID0gU2hpcFdhdGVyQXJlYXMocGxheWVyLCBzaGlwKTtcbiAgICAgICAgbGV0IHggPSBoZWFkLmdldFhZKCkueDtcbiAgICAgICAgbGV0IHkgPSBoZWFkLmdldFhZKCkueTtcbiAgICAgICAgbGV0IG5lY2Vzc2FyeVNlY3RvcnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmVjZXNzYXJ5U2VjdG9ycy5wdXNoKGJvYXJkW3ldW3hdKTtcbiAgICAgICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJlYXMuc2V0QXJlYXMobmVjZXNzYXJ5U2VjdG9ycyk7XG4gICAgICAgIHJldHVybiBhcmVhcztcbiAgICB9O1xuXG4gICAgY29uc3QgaXNMaXZlID0gKCkgPT4ge1xuICAgICAgICBsaXZlID0gZmFsc2U7XG5cbiAgICAgICAgYm9keS5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRlY2suaXNIaXQoKSkge1xuICAgICAgICAgICAgICAgIGxpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbGl2ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Qm9keSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0SGVhZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhlYWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEhlYWQgPSAobkhlYWQpID0+IHtcbiAgICAgICAgaGVhZCA9IG5IZWFkO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0hvcml6b250YWwgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBob3Jpem9udGFsO1xuICAgIH07XG5cbiAgICBjb25zdCBvcmllbnRhdGlvblN3aXRjaCA9ICgpID0+IHtcbiAgICAgICAgaG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRWZXJ0aWNhbCA9ICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHtsZW5ndGggKiA1fXZoYDtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gYDV2aGA7XG4gICAgICAgIGhvcml6b250YWwgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0SG9yaXpvbnRhbCA9ICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAke2xlbmd0aCAqIDV9dmhgO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYDV2aGA7XG4gICAgICAgIGhvcml6b250YWwgPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRSYW5kb21PcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgcmFuZG9tSW50RnJvbUludGVydmFsKDAsIDEpID09PSAxID8gc2V0SG9yaXpvbnRhbCgpIDogc2V0VmVydGljYWwoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBzZXRIb3Jpem9udGFsKCk7XG4gICAgICAgIGlmIChoZWFkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBoZWFkLmdldENlbGxOb2RlKCkucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIGhlYWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJlc2V0Qm9keSgpO1xuICAgICAgICBzaGlwV2F0ZXJBcmVhcy5jbGVhckFyZWFzKCk7XG4gICAgICAgIHNoaXBXYXRlckFyZWFzID0gU2hpcFdhdGVyQXJlYXMocGxheWVyLCBzaGlwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRCb2R5ID0gKCkgPT4ge1xuICAgICAgICBib2R5LmZvckVhY2goZGVjayA9PiB7XG4gICAgICAgICAgICBkZWNrLnJlc2V0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsbENvbnRhaW5lcigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0UmFuZG9tT3JpZW50YXRpb24sXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBzZXRIb3Jpem9udGFsLFxuICAgICAgICBzZXRWZXJ0aWNhbCxcbiAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgIHRha2VEb3duV2F0ZXJBcmVhcyxcbiAgICAgICAgbGF1bmNoU2hpcE9uV2F0ZXIsXG4gICAgICAgIG9yaWVudGF0aW9uU3dpdGNoLFxuICAgICAgICBzZXRPcmllbnRhdGlvbixcbiAgICAgICAgaXNMaXZlLFxuICAgICAgICBnZXRCb2R5LFxuICAgICAgICBnZXRDb250YWluZXIsXG4gICAgICAgIGdldEhlYWQsXG4gICAgICAgIHNldEhlYWQsXG4gICAgICAgIGlzSG9yaXpvbnRhbCxcbiAgICAgICAgc2V0WW91cnNlbGYsXG4gICAgICAgIGdldFlvdXJzZWxmXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBGcmVnYXQgPSAobWFya2VyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCg0LCBtYXJrZXIpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgbWFya2VyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBDYXJhdmVsID0gKG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFNoaXAoMywgbWFya2VyKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IERyYWtrYXIgPSAobWFya2VyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgyLCBtYXJrZXIpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgQm9hdCA9IChtYXJrZXIpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDEsIG1hcmtlcik7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlKTtcbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2dhbWVDb25maWcnO1xuaW1wb3J0IHsgQm9hdCwgQ2FyYXZlbCwgRHJha2thciwgRnJlZ2F0IH0gZnJvbSAnLi9zaGlwJztcblxuZXhwb3J0IGNvbnN0IFNoaXB5YXJkID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGZyZWdhdHMgPSBEb2NrKENvbmZpZy5FbGVtZW50cy5udW1iZXJPZi5mcmVnYXRlcywgJ0ZyZWdhdCcsIHBsYXllcik7XG4gICAgY29uc3QgY2FyYXZlbHMgPSBEb2NrKENvbmZpZy5FbGVtZW50cy5udW1iZXJPZi5jYXJhdmVscywgJ0NhcmF2ZWwnLCBwbGF5ZXIpO1xuICAgIGNvbnN0IGRyYWtrYXJzID0gRG9jayhDb25maWcuRWxlbWVudHMubnVtYmVyT2YuZHJha2thcnMsICdEcmFra2FyJywgcGxheWVyKTtcbiAgICBjb25zdCBib2F0cyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmJvYXRzLCAnQm9hdCcsIHBsYXllcik7XG4gICAgY29uc3Qgc2hpcHMgPSBmcmVnYXRzXG4gICAgICAgIC5nZXRTaGlwcygpXG4gICAgICAgIC5jb25jYXQoXG4gICAgICAgICAgICBjYXJhdmVsc1xuICAgICAgICAgICAgICAgIC5nZXRTaGlwcygpXG4gICAgICAgICAgICAgICAgLmNvbmNhdChkcmFra2Fycy5nZXRTaGlwcygpLmNvbmNhdChib2F0cy5nZXRTaGlwcygpKSksXG4gICAgICAgICk7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlweWFyZCcpO1xuXG4gICAgY29uc3QgZ2V0U2hpcHNPZlR5cGUgPSAodHlwZSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2ZyZWdhdHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBmcmVnYXRzLmdldFNoaXBzKCk7XG4gICAgICAgICAgICBjYXNlICdjYXJhdmVscyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhcmF2ZWxzLmdldFNoaXBzKCk7XG4gICAgICAgICAgICBjYXNlICdkcmFra2Fycyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyYWtrYXJzLmdldFNoaXBzKCk7XG4gICAgICAgICAgICBjYXNlICdib2F0cyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvYXRzLmdldFNoaXBzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhGcmVnYXRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZnJlZ2F0cztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhDYXJhdmVscyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhcmF2ZWxzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREb2NrV2l0aERyYWtrYXJzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZHJha2thcnM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERvY2tXaXRoQm9hdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBib2F0cztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRBbGxTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0VtcHR5ID0gKCkgPT4ge1xuICAgICAgICBsZXQgbGF1bmNoZWRTaGlwcyA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcbiAgICAgICAgcmV0dXJuIGxhdW5jaGVkU2hpcHMubGVuZ3RoID09PSAwO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcC5yZXNldCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0U2hpcHNPZlR5cGUsXG4gICAgICAgIGlzRW1wdHksXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBnZXRBbGxTaGlwcyxcbiAgICAgICAgZ2V0UGxheWVyLFxuICAgICAgICBnZXREb2NrV2l0aEZyZWdhdHMsXG4gICAgICAgIGdldERvY2tXaXRoQ2FyYXZlbHMsXG4gICAgICAgIGdldERvY2tXaXRoRHJha2thcnMsXG4gICAgICAgIGdldERvY2tXaXRoQm9hdHMsXG4gICAgfTtcbn07XG5cbmNvbnN0IERvY2sgPSAoY291bnQsIHNoaXBCbHVlUHJpbnQsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gW107XG5cbiAgICBjb25zdCBmaWxsRG9jayA9IChjb3VudCwgc2hpcEJsdWVQcmludCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBidWlsZFNoaXAoc2hpcEJsdWVQcmludCk7XG4gICAgICAgICAgICBzaGlwLnNldFlvdXJzZWxmKHNoaXApO1xuICAgICAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBidWlsZFNoaXAgPSAoYmx1ZVByaW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYmx1ZVByaW50KSB7XG4gICAgICAgICAgICBjYXNlICdGcmVnYXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBGcmVnYXQocGxheWVyKTtcbiAgICAgICAgICAgIGNhc2UgJ0NhcmF2ZWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiBDYXJhdmVsKHBsYXllcik7XG4gICAgICAgICAgICBjYXNlICdEcmFra2FyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gRHJha2thcihwbGF5ZXIpO1xuICAgICAgICAgICAgY2FzZSAnQm9hdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvYXQocGxheWVyKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NvcnJ5LCBpbGxlZ2FsIHNoaXAgYmx1ZXByaW50Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZmlsbERvY2soY291bnQsIHNoaXBCbHVlUHJpbnQpO1xuXG4gICAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0U2hpcHMgfTtcbn07XG4iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBnZXRSYW5kb21DZWxsIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL3NoaXBcIjtcblxuXG5leHBvcnQgY29uc3QgVGltZU1hbmlwdWxhdG9ycyA9ICgpID0+IHtcbiAgICBsZXQgdGltZU9mVGhlTW92ZTtcbiAgICBsZXQgYWlTcGVlZE9mVG91Z2h0O1xuICAgIGxldCB0aW1lQmV0d2Vlbk1vdmVzO1xuXG4gICAgY29uc3Qgc2V0QWlTcGVlZE9mVG91Z2h0ID0gKGNlbGxzKSA9PiB7XG4gICAgICAgIGFpU3BlZWRPZlRvdWdodCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZS5nYW1lSGFuZGxlci50YWtlSGl0KGdldFJhbmRvbUNlbGwoY2VsbHMpKTtcbiAgICAgICAgICAgIHNldFRpbWVCZXR3ZWVuTW92ZXMoMTAwMCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRpbWVCZXR3ZWVuTW92ZXMgPSAodGltZW91dCkgPT4ge1xuICAgICAgICB0aW1lQmV0d2Vlbk1vdmVzID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBnYW1lLmdhbWVIYW5kbGVyLnN3aXRjaE1vdmUoKTtcbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGltZU9mVGhlTW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGltZU9mVGhlTW92ZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkd2R3ZCcpXG4gICAgICAgICAgICBnYW1lLmdhbWVIYW5kbGVyLnN3aXRjaE1vdmUoKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dChhaVNwZWVkT2ZUb3VnaHQpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZUJldHdlZW5Nb3Zlcyk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZU9mVGhlTW92ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0QWlTcGVlZE9mVG91Z2h0LCBzZXRUaW1lQmV0d2Vlbk1vdmVzLCBzZXRUaW1lT2ZUaGVNb3ZlLCByZXNldCB9XG59IiwiaW1wb3J0IHsgQ2VsbEhhbmRsZXIgfSBmcm9tICcuL2NlbGxIYW5kbGVyJztcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICcuL3Nlc3Npb24nO1xuXG5leHBvcnQgY29uc3QgU2hpcFdhdGVyQXJlYXMgPSAocGxheWVyLCBzaGlwKSA9PiB7XG4gICAgbGV0IHVuZGVyVGhlU2hpcCA9IFtdO1xuICAgIGxldCBhcm91bmRUaGVTaGlwID0gW107XG5cbiAgICBjb25zdCBnZXRBcmVhVW5kZXJUaGVTaGlwID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdW5kZXJUaGVTaGlwO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRBcmVhQXJvdW5kVGhlU2hpcCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFyb3VuZFRoZVNoaXA7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEFyZWFzID0gKGFyZWEpID0+IHtcbiAgICAgICAgdW5kZXJUaGVTaGlwID0gYXJlYTtcbiAgICAgICAgYXJvdW5kVGhlU2hpcCA9IHNldEFyZWFBcm91bmRUaGVTaGlwKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEFyZWFBcm91bmRUaGVTaGlwID0gKCkgPT4ge1xuICAgICAgICBsZXQgaGFuZGxlciA9IENlbGxIYW5kbGVyKCk7XG4gICAgICAgIGxldCBhcmVhcyA9IFtdO1xuICAgICAgICBsZXQgcGFyZW50ID0gcGxheWVyLmdldEdhbWVib2FyZCgpLmdldFN0cnVjdGVkQ29udGFpbmVyKCk7XG4gICAgICAgIHVuZGVyVGhlU2hpcC5mb3JFYWNoKChzZWN0b3IpID0+IHtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHNlY3Rvci5nZXRYWSgpO1xuICAgICAgICAgICAgbGV0IGFyZWEgPSBoYW5kbGVyLmdldENlbGxBcm91bmRBcmVhKFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLngsXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMueSxcbiAgICAgICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBhcmVhcyA9IGFyZWFzLmNvbmNhdChhcmVhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJlYXMpKS5maWx0ZXIoXG4gICAgICAgICAgICAoeCkgPT4gIXVuZGVyVGhlU2hpcC5pbmNsdWRlcyh4KSxcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb2NjdXB5QXJlYXMgPSAoKSA9PiB7XG4gICAgICAgIHVuZGVyVGhlU2hpcC5mb3JFYWNoKChzZWN0b3IpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWN0b3IuaXNGcmVlKCkpIHtcbiAgICAgICAgICAgICAgICBzZWN0b3Iub2NjdXB5KHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tBcmVhID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWNlc3NpYmlsaXR5ID0gdHJ1ZTtcbiAgICAgICAgbGV0IGFyZWFzID0gdW5kZXJUaGVTaGlwLmNvbmNhdChhcm91bmRUaGVTaGlwKTtcblxuICAgICAgICBhcmVhcy5mb3JFYWNoKChzZWN0b3IpID0+IHtcbiAgICAgICAgICAgIGlmICghc2VjdG9yLmlzRnJlZSgpICYmIHNlY3Rvci5nZXRPY2N1cGFudCgpICE9PSBzaGlwKSB7XG4gICAgICAgICAgICAgICAgYWNlc3NpYmlsaXR5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhY2Vzc2liaWxpdHk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyQXJlYXMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhcmVhcyA9IHVuZGVyVGhlU2hpcC5jb25jYXQoYXJvdW5kVGhlU2hpcCk7XG4gICAgICAgIGFyZWFzLmZvckVhY2goKHNlY3RvcikgPT4ge1xuICAgICAgICAgICAgc2VjdG9yLmNsZWFyKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjbGVhckFyZWFzLFxuICAgICAgICBjaGVja0FyZWEsXG4gICAgICAgIGdldEFyZWFVbmRlclRoZVNoaXAsXG4gICAgICAgIGdldEFyZWFBcm91bmRUaGVTaGlwLFxuICAgICAgICBzZXRBcmVhcyxcbiAgICAgICAgb2NjdXB5QXJlYXMsXG4gICAgfTtcbn07XG4iLCJleHBvcnQgY29uc3Qgc2V0SGlkZGVuID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUhpZGRlbiA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn07XG4iLCJleHBvcnQgY29uc3Qgc2V0RHJhZ2dhYmxlID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmRyYWdnYWJsZSA9IHRydWU7XG59O1xuIiwiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWVDb25maWcnO1xuaW1wb3J0IHsgc2V0RHJhZ2dhYmxlIH0gZnJvbSAnLi9zZXREcmFnZ2FibGUnO1xuXG5leHBvcnQgY29uc3Qgc2V0RHJhZ2dhYmxlRm9yU2hpcHMgPSAoKSA9PiB7XG4gICAgQ29uZmlnLkVsZW1lbnRzLnNoaXBUeXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGZvclR5cGUodHlwZSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBmb3JUeXBlID0gKHR5cGUpID0+IHtcbiAgICBjb25zdCBkb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dHlwZX1gKTtcbiAgICBjb25zdCBzaGlwcyA9IEFycmF5LmZyb20oZG9jay5jaGlsZHJlbik7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIHNldERyYWdnYWJsZShzaGlwKTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBBbHBoYWJldHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvYWxwaGFiZXRzJztcbmltcG9ydCB7IGdldE5vZGUgfSBmcm9tICcuL2ZhY3RvcnknO1xuXG5jb25zdCBhbHBoYWJldCA9IEFscGhhYmV0cy5ydXMoKS5jb2RlcztcblxuZXhwb3J0IGNvbnN0IHZpZXdBeGlzID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGJvYXJkLmdldE5vZGUoKTtcbiAgICBjb25zdCB4QXhpcyA9IG5vZGUucXVlcnlTZWxlY3RvcignLngtYXhpcycpO1xuICAgIGNvbnN0IHlBeGlzID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcueS1heGlzJyk7XG4gICAgY29uc3Qgc2l6ZSA9IGJvYXJkLmdldFNpemUoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZS53aWR0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBnZXROb2RlKCd4LWNlbGwnLCAnY2VsbCcpO1xuICAgICAgICBjb25zdCBsZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFscGhhYmV0W2ldKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gbGV0dGVyO1xuICAgICAgICB4QXhpcy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGdldE5vZGUoJ3ktY2VsbCcsICdjZWxsJyk7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBpO1xuICAgICAgICB5QXhpcy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldE5vZGUgPSAoLi4ubmFtZXMpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBpZiAobmFtZSAhPT0gJycpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChuYW1lKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBub2RlO1xufTtcbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lQ29uZmlnJztcblxuZXhwb3J0IGNvbnN0IHZpZXdCb2FyZCA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGJvYXJkLmdldFVuc3RydWN0ZWRDb250YWluZXIoKTtcbiAgICBjb25zdCBib2FyZHdyID0gYm9hcmQuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgIGNvbnRhaW5lci5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGJvYXJkd3IuYXBwZW5kQ2hpbGQoY2VsbC5nZXRDZWxsTm9kZSgpKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IFN0eWxlUHJlc2V0cyA9ICgoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS1ib2FyZC13aWR0aCcsXG4gICAgICAgIENvbmZpZy5HYW1lYm9hcmQud2lkdGgsXG4gICAgKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICctLWJvYXJkLWhlaWdodCcsXG4gICAgICAgIENvbmZpZy5HYW1lYm9hcmQuaGVpZ2h0LFxuICAgICk7XG59KSgpO1xuIiwiaW1wb3J0IHsgdmlld0F4aXMgfSBmcm9tICcuL2F4aXMnO1xuaW1wb3J0IHsgdmlld0JvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5leHBvcnQgY29uc3Qgdmlld1Byb2ZpbGUgPSAocHJvZmlsZSkgPT4ge1xuICAgIHZpZXdCb2FyZChwcm9maWxlLmdldEdhbWVib2FyZCgpKTtcbiAgICB2aWV3QXhpcyhwcm9maWxlLmdldEdhbWVib2FyZCgpKTtcbn07XG4iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgcmFuZG9tSW50RnJvbUludGVydmFsIH0gZnJvbSAnLi4vLi4vaGVscGVyL2hlbHBlcic7XG5pbXBvcnQgeyByZW1vdmVIaWRkZW4sIHNldEhpZGRlbiB9IGZyb20gJy4uL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZSc7XG5cbmV4cG9ydCBjb25zdCB2aWV3U2hpcCA9IChzaGlwLCBoZWFkKSA9PiB7XG4gICAgbGV0IGlzVmlldyA9IHNoaXAubGF1bmNoU2hpcE9uV2F0ZXIoaGVhZCk7XG4gICAgaWYgKGlzVmlldykge1xuICAgICAgICBzaGlwLnNldEhlYWQoaGVhZCk7XG4gICAgICAgIGhlYWQuZ2V0Q2VsbE5vZGUoKS5hcHBlbmRDaGlsZChzaGlwLmdldENvbnRhaW5lcigpKTtcbiAgICAgICAgY2hlY2tTaGlweWFyZCgpO1xuICAgIH1cbiAgICByZXR1cm4gaXNWaWV3O1xufTtcblxuY29uc3QgY2hlY2tTaGlweWFyZCA9ICgpID0+IHtcbiAgICBpZiAoZ2FtZS5wbGF5ZXIuZ2V0U2hpcHlhcmQoKS5pc0VtcHR5KCkpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjbG9zZU1hbnVhbE1lbnUoKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG59O1xuXG5jb25zdCBjbG9zZU1hbnVhbE1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHlhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHlhcmQnKTtcbiAgICByZW1vdmVIaWRkZW4oZ2FtZS5haS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkpO1xuICAgIHNldEhpZGRlbihzaGlweWFyZCk7XG59O1xuXG5leHBvcnQgY29uc3Qgdmlld1NoaXBPblJhbmRvbUNlbGwgPSAoc2hpcCwgY2VsbHMpID0+IHtcbiAgICBsZXQgY2VsbCA9IGdldFJhbmRvbUNlbGwoY2VsbHMpO1xuICAgIGxldCBpc1ZpZXcgPSB2aWV3U2hpcChzaGlwLCBjZWxsKTtcbiAgICByZXR1cm4gaXNWaWV3ID8gdHJ1ZSA6IHZpZXdTaGlwT25SYW5kb21DZWxsKHNoaXAsIGNlbGxzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21DZWxsID0gKGNlbGxzKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gcmFuZG9tSW50RnJvbUludGVydmFsKDAsIGNlbGxzLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBjZWxscy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xufTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWVDb25maWcnO1xuaW1wb3J0IHsgc2V0RHJhZ2dhYmxlRm9yU2hpcHMgfSBmcm9tICcuLi9kcmFnQW5kRHJvcC9zaGlwcyc7XG5cbmV4cG9ydCBjb25zdCB2aWV3U2hpcHlhcmQgPSAoKSA9PiB7XG4gICAgZmlsbFNoaXB5YXJkTm9kZSgpO1xuICAgIHNldERyYWdnYWJsZUZvclNoaXBzKCk7XG59O1xuXG5jb25zdCBmaWxsU2hpcHlhcmROb2RlID0gKCkgPT4ge1xuICAgIENvbmZpZy5FbGVtZW50cy5zaGlwVHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBhZGRUeXBlKHR5cGUpO1xuICAgIH0pO1xufTtcblxuY29uc3QgYWRkVHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgY29uc3QgZG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3R5cGV9YCk7XG4gICAgY29uc3Qgc2hpcHMgPSBnYW1lLnBsYXllci5nZXRTaGlweWFyZCgpLmdldFNoaXBzT2ZUeXBlKHR5cGUpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgZG9jay5hcHBlbmRDaGlsZChzaGlwLmdldENvbnRhaW5lcigpKTtcbiAgICB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgaGlkZGVuSW50ZXJmYWNlQmVmb3JlU3RhcnRQbGF5ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5JykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXBzJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdJbnRlcmZhY2VBZnRlckVuZEdhbWUgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpcHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhpdCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0UGxheWVyTW92ZURlc2lnbiA9IChhaSwgcGxheWVyKSA9PiB7XG4gICAgYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKS5jbGFzc0xpc3QucmVtb3ZlKCdsb3ctb3BhY2l0eScpO1xuICAgIGFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueS1heGlzJykuY2xhc3NMaXN0LnJlbW92ZSgnbG93LW9wYWNpdHknKTtcbiAgICBhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmJvYXJkJykuY2xhc3NMaXN0LnJlbW92ZSgnbG93LW9wYWNpdHknKTtcbiAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKS5jbGFzc0xpc3QuYWRkKCdsb3ctb3BhY2l0eScpO1xuICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpLmNsYXNzTGlzdC5hZGQoJ2xvdy1vcGFjaXR5Jyk7XG4gICAgcGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5jbGFzc0xpc3QuYWRkKCdsb3ctb3BhY2l0eScpO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0QWlNb3ZlRGVzaWduID0gKGFpLCBwbGF5ZXIpID0+IHtcbiAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKS5jbGFzc0xpc3QucmVtb3ZlKCdsb3ctb3BhY2l0eScpO1xuICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2xvdy1vcGFjaXR5Jyk7XG4gICAgcGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdsb3ctb3BhY2l0eScpO1xuICAgIGFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykuY2xhc3NMaXN0LmFkZCgnbG93LW9wYWNpdHknKTtcbiAgICBhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpLmNsYXNzTGlzdC5hZGQoJ2xvdy1vcGFjaXR5Jyk7XG4gICAgYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLmNsYXNzTGlzdC5hZGQoJ2xvdy1vcGFjaXR5Jyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9