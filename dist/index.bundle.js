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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/views/images/dot.svg */ "./src/views/images/dot.svg"), __webpack_require__.b);
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
    font-size: min(2vh, 2vw);
    --board-width: 0;
    --board-height: 0;
    --cell-size: min(5vh, 2vw);
}

html {
    font-family: Roboto;
}

.wrapper {
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    width: 100%;
    height: 100%;
    row-gap: min(2vh, 0.8vw);
    justify-items: center;
    width: min-content;
}

span {
    display: grid;
    padding: min(1vh, 0.4vw);
    height: min-content;
    min-width: max-content;
}

.header {
    display: grid;
    grid-template-columns: 1fr 1fr min-content;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: min-content;
    padding: min(2vh, 0.8vw);
}

.title {
    display: grid;
    font-size: 3rem;
}

.tips {
    display: grid;
    background-color: rgba(128, 128, 128, 0.2);
    align-items: center;
    padding: min(1vh, 1vw);
    border-radius: min(2vh, 0.8vw);
    height: min-content;
}

.exit {
    display: grid;
}

.main {
    display: grid;
    width: max-content;
    max-width: inherit;
    justify-items: center;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.shipyard {
    display: grid;
    align-content: center;
    grid-template-rows: repeat(4, min-content);
    row-gap: min(6vh, 2.4vw);
    padding: min(2vh, 0.8vw);
    width: min(40vh, 16vw);
    height: min(40vh, 16vw);
    max-width: min(50vh, 20vw);
    align-self: center;
}

.dock {
    display: flex;
    column-gap: min(4vh, 1.6vw);
    height: min-content;
}

.selected {
    opacity: 0.01 !important;
}

.board__axis-wrapper {
    display: grid;
    grid-template-rows: 1fr min-content;
    row-gap: min(2vh, 0.8vw);
    width: min-content;
    height: min-content;
    justify-items: center;
    padding: min(5vh, 2vw);
}

.axis-wrapper {
    display: grid;
    width: min-content;
    grid-template-rows: min-content 1fr;
}

.board-wrapper {
    display: grid;
    grid-template-areas:
        'axis-x axis-x axis-x'
        'shipyard axis-y board';
}

.x-axis {
    display: grid;
    grid-area: axis-x;
    width: min-content;
    height: min-content;
    justify-self: end;
    grid-template-columns: repeat(var(--board-width), max(var(--cell-size), 2vh));

}

.y-axis {
    display: grid;
    grid-area: axis-y;
    grid-template-rows: repeat(var(--board-height), 2fr);
    width: min-content;
}

.board {
    display: grid;
    grid-area: board;
    grid-template-columns: repeat(var(--board-width), 2fr);
    grid-template-rows: repeat(var(--board-height), 2fr);
    border: min(0.5vh, 0.2vw) rgba(0, 0, 255, 0.2) solid;

}

.play {
    display: grid;
    grid-area: board;
    justify-self: center;
    align-self: center;
    width: min(10vh, 10vw);
    height: min(10vh, 10vw);
    min-width: 2vh;
    min-height: 2vh;
    background-color: rgba(119, 202, 41, 0.726);
    border: min(1vh, 1vw) rgb(119, 202, 41) solid;
    z-index: 998;
}

.ai-mini-shipyard,
.player-mini-shipyard {
    display: grid;
    width: min-content;
    height: min-content;
    row-gap: min(2vh, 0.8vw);
    padding: min(3vh, 1.2vw);
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
    justify-self: right;
    width: min-content;
}

.cell {
    display: grid;
    width: var(--cell-size);
    height: var(--cell-size);
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    min-width: 2vh;
    min-height: 2vh;
}

.miss-hit {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: 100% 100%;
}

.destroyed {
    display: grid;
    border: 1px red solid;
}

.live {}

.x-cell,
.y-cell {
    justify-items: center;
    align-content: center;
    opacity: 0.5;
}

.marine-sector {
    display: grid;
    border: min(0.1vh, 0.1vw) rgba(0, 0, 255, 0.2) solid;
}

.ship {
    display: grid;
    align-content: center;
    justify-content: center;
    margin-left: -1px;
    margin-top: -1px;
    border: min(0.1vh, 0.1vw) rgba(0, 0, 255, 1) solid;
    width: min-content;
    height: min-content;
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

.deck>svg {
    display: grid;
    width: 100%;
    height: 100%;
}

.mini-ship {
    height: min-content !important;
    width: min-content !important;
}

.mini-cell {
    min-width: 1vh;
    min-height: 1vh;
    width: min(2vh, 0.8vw);
    height: min(2vh, 0.8vw);
    background-color: rgba(0, 255, 0, 0.1);
    border: min(0.1vh, 0.1vw) rgba(0, 255, 255, 1) solid;
}

.footer {
    display: grid;
    grid-template-columns: min-content min-content;
    width: 100%;
    justify-content: center;
    gap: min(4vh, 1.6vw);
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

.timer {
    display: grid;
    width: 100vw;
    height: min(2vh, 0.8vw);
    justify-self: start;
}

.timer>svg {
    display: grid;

    width: 100vw;
}

.hidden {
    display: none;
}

.null-opacity {
    opacity: 0;
}

.popup-win,
.popup-lose {
    position: fixed;
    display: grid;
    grid-template-rows: repeat(auto-fit, min-content);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    justify-items: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    padding: min(1vh, 1vw);
    z-index: 1000;
}

.text {
    display: grid;
    color: white;
    font-size: min(10vh, 10vw);
}

.win,
.lose {
    display: grid;
    grid-template-rows: repeat(3, min-content);
    height: min-content;
    justify-items: center;
    z-index: 2000;
}

.gif-container {
    display: flex;
    justify-self: center;
    width: min(100vh, 100vw);
    height: 0;
    padding-bottom: min(56vh, 22.4vw);
    position: relative;
    pointer-events: none;
}

@media screen and (max-aspect-ratio: 1.00001/1) {

    .main {
        grid-template-rows: min-content min-content;

    }

    .shipyard {
        justify-self: center;
        padding-bottom: 2vh;
    }
}

@media screen and (min-aspect-ratio: 1/1) {
    .main {
        grid-template-columns: min-content min-content;
    }

    .ai-board {
        align-self: start;
    }
}

.cross {
    border: 1px red solid
}`, "",{"version":3,"sources":["webpack://./src/views/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n}\n\n:root {\n    font-size: min(2vh, 2vw);\n    --board-width: 0;\n    --board-height: 0;\n    --cell-size: min(5vh, 2vw);\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr min-content;\n    width: 100%;\n    height: 100%;\n    row-gap: min(2vh, 0.8vw);\n    justify-items: center;\n    width: min-content;\n}\n\nspan {\n    display: grid;\n    padding: min(1vh, 0.4vw);\n    height: min-content;\n    min-width: max-content;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: 1fr 1fr min-content;\n    justify-items: center;\n    align-items: center;\n    width: 100%;\n    height: min-content;\n    padding: min(2vh, 0.8vw);\n}\n\n.title {\n    display: grid;\n    font-size: 3rem;\n}\n\n.tips {\n    display: grid;\n    background-color: rgba(128, 128, 128, 0.2);\n    align-items: center;\n    padding: min(1vh, 1vw);\n    border-radius: min(2vh, 0.8vw);\n    height: min-content;\n}\n\n.exit {\n    display: grid;\n}\n\n.main {\n    display: grid;\n    width: max-content;\n    max-width: inherit;\n    justify-items: center;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n}\n\n.shipyard {\n    display: grid;\n    align-content: center;\n    grid-template-rows: repeat(4, min-content);\n    row-gap: min(6vh, 2.4vw);\n    padding: min(2vh, 0.8vw);\n    width: min(40vh, 16vw);\n    height: min(40vh, 16vw);\n    max-width: min(50vh, 20vw);\n    align-self: center;\n}\n\n.dock {\n    display: flex;\n    column-gap: min(4vh, 1.6vw);\n    height: min-content;\n}\n\n.selected {\n    opacity: 0.01 !important;\n}\n\n.board__axis-wrapper {\n    display: grid;\n    grid-template-rows: 1fr min-content;\n    row-gap: min(2vh, 0.8vw);\n    width: min-content;\n    height: min-content;\n    justify-items: center;\n    padding: min(5vh, 2vw);\n}\n\n.axis-wrapper {\n    display: grid;\n    width: min-content;\n    grid-template-rows: min-content 1fr;\n}\n\n.board-wrapper {\n    display: grid;\n    grid-template-areas:\n        'axis-x axis-x axis-x'\n        'shipyard axis-y board';\n}\n\n.x-axis {\n    display: grid;\n    grid-area: axis-x;\n    width: min-content;\n    height: min-content;\n    justify-self: end;\n    grid-template-columns: repeat(var(--board-width), max(var(--cell-size), 2vh));\n\n}\n\n.y-axis {\n    display: grid;\n    grid-area: axis-y;\n    grid-template-rows: repeat(var(--board-height), 2fr);\n    width: min-content;\n}\n\n.board {\n    display: grid;\n    grid-area: board;\n    grid-template-columns: repeat(var(--board-width), 2fr);\n    grid-template-rows: repeat(var(--board-height), 2fr);\n    border: min(0.5vh, 0.2vw) rgba(0, 0, 255, 0.2) solid;\n\n}\n\n.play {\n    display: grid;\n    grid-area: board;\n    justify-self: center;\n    align-self: center;\n    width: min(10vh, 10vw);\n    height: min(10vh, 10vw);\n    min-width: 2vh;\n    min-height: 2vh;\n    background-color: rgba(119, 202, 41, 0.726);\n    border: min(1vh, 1vw) rgb(119, 202, 41) solid;\n    z-index: 998;\n}\n\n.ai-mini-shipyard,\n.player-mini-shipyard {\n    display: grid;\n    width: min-content;\n    height: min-content;\n    row-gap: min(2vh, 0.8vw);\n    padding: min(3vh, 1.2vw);\n}\n\n\n.low-opacity {\n    opacity: 0.4;\n}\n\n.block {\n    pointer-events: none;\n}\n\n.hidden {\n    display: none;\n}\n\n.marker {\n    display: grid;\n    justify-self: right;\n    width: min-content;\n}\n\n.cell {\n    display: grid;\n    width: var(--cell-size);\n    height: var(--cell-size);\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    min-width: 2vh;\n    min-height: 2vh;\n}\n\n.miss-hit {\n    background-image: url(/src/views/images/dot.svg);\n    background-size: 100% 100%;\n}\n\n.destroyed {\n    display: grid;\n    border: 1px red solid;\n}\n\n.live {}\n\n.x-cell,\n.y-cell {\n    justify-items: center;\n    align-content: center;\n    opacity: 0.5;\n}\n\n.marine-sector {\n    display: grid;\n    border: min(0.1vh, 0.1vw) rgba(0, 0, 255, 0.2) solid;\n}\n\n.ship {\n    display: grid;\n    align-content: center;\n    justify-content: center;\n    margin-left: -1px;\n    margin-top: -1px;\n    border: min(0.1vh, 0.1vw) rgba(0, 0, 255, 1) solid;\n    width: min-content;\n    height: min-content;\n}\n\n.horizontal {\n    grid-template-columns: repeat(4, 2fr);\n}\n\n.vertical {\n    grid-template-rows: repeat(4, 2fr);\n}\n\n.deck {\n    display: grid;\n    background-color: rgba(0, 0, 255, 0.1);\n    z-index: 999;\n}\n\n.deck>svg {\n    display: grid;\n    width: 100%;\n    height: 100%;\n}\n\n.mini-ship {\n    height: min-content !important;\n    width: min-content !important;\n}\n\n.mini-cell {\n    min-width: 1vh;\n    min-height: 1vh;\n    width: min(2vh, 0.8vw);\n    height: min(2vh, 0.8vw);\n    background-color: rgba(0, 255, 0, 0.1);\n    border: min(0.1vh, 0.1vw) rgba(0, 255, 255, 1) solid;\n}\n\n.footer {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    width: 100%;\n    justify-content: center;\n    gap: min(4vh, 1.6vw);\n}\n\n.random-mode,\n.manual-mode {\n    height: min-content;\n    display: grid;\n    border-bottom: 1px dotted blue;\n    color: blue;\n    cursor: pointer;\n\n}\n\n.random-mode:hover,\n.manual-mode:hover {\n    color: rgb(122, 231, 72);\n    border-bottom: 1px dotted rgb(122, 231, 72);\n}\n\n.timer {\n    display: grid;\n    width: 100vw;\n    height: min(2vh, 0.8vw);\n    justify-self: start;\n}\n\n.timer>svg {\n    display: grid;\n\n    width: 100vw;\n}\n\n.hidden {\n    display: none;\n}\n\n.null-opacity {\n    opacity: 0;\n}\n\n.popup-win,\n.popup-lose {\n    position: fixed;\n    display: grid;\n    grid-template-rows: repeat(auto-fit, min-content);\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    top: 0;\n    left: 0;\n    justify-items: center;\n    align-items: center;\n    visibility: hidden;\n    opacity: 0;\n    padding: min(1vh, 1vw);\n    z-index: 1000;\n}\n\n.text {\n    display: grid;\n    color: white;\n    font-size: min(10vh, 10vw);\n}\n\n.win,\n.lose {\n    display: grid;\n    grid-template-rows: repeat(3, min-content);\n    height: min-content;\n    justify-items: center;\n    z-index: 2000;\n}\n\n.gif-container {\n    display: flex;\n    justify-self: center;\n    width: min(100vh, 100vw);\n    height: 0;\n    padding-bottom: min(56vh, 22.4vw);\n    position: relative;\n    pointer-events: none;\n}\n\n@media screen and (max-aspect-ratio: 1.00001/1) {\n\n    .main {\n        grid-template-rows: min-content min-content;\n\n    }\n\n    .shipyard {\n        justify-self: center;\n        padding-bottom: 2vh;\n    }\n}\n\n@media screen and (min-aspect-ratio: 1/1) {\n    .main {\n        grid-template-columns: min-content min-content;\n    }\n\n    .ai-board {\n        align-self: start;\n    }\n}\n\n.cross {\n    border: 1px red solid\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/session */ "./src/models/session.js");
/* harmony import */ var _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/animations/changeVisible */ "./src/views/animations/changeVisible.js");
/* harmony import */ var _views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/nodes/shipyard */ "./src/views/nodes/shipyard.js");





const setListenersForLinks = () => {
    const manualModeLink = document.querySelector('.manual-mode');
    const randomModeLink = document.querySelector('.random-mode');
    const shipyard = document.querySelector('.shipyard');

    const openManualMode = manualModeLink.addEventListener('click', (e) => {
        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.manualMode = true;
        ___WEBPACK_IMPORTED_MODULE_0__.game.player.getGameboard().reset();
        (0,_views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_3__.viewShipyard)(___WEBPACK_IMPORTED_MODULE_0__.game.player.getShipyard());
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.setHidden)(___WEBPACK_IMPORTED_MODULE_0__.game.ai.getGameboard().getNode());
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.removeHidden)(shipyard);
    });

    const openRandomMode = randomModeLink.addEventListener('click', (e) => {
        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.manualMode = false;
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.removeHidden)(___WEBPACK_IMPORTED_MODULE_0__.game.ai.getGameboard().getNode());
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.setHidden)(shipyard);
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
/* harmony import */ var _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/elements/audioEffects */ "./src/models/elements/audioEffects.js");



const setListenersForPlayButton = () => {
    const button = document.querySelector('.play');
    const click = button.addEventListener('click', e => {
        _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_1__.clickEffect.play();
        ___WEBPACK_IMPORTED_MODULE_0__.game.play();
    })
}

const setListenersForExitButton = () => {
    const button = document.querySelector('.exit');

    const click = button.addEventListener('click', e => {
        _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_1__.clickEffect.play();
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

/***/ "./src/controllers/listeners/forPopups.js":
/*!************************************************!*\
  !*** ./src/controllers/listeners/forPopups.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setListenersforPopups: () => (/* binding */ setListenersforPopups)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _views_nodes_popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/nodes/popups */ "./src/views/nodes/popups.js");



const setListenersforPopups = () => {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        const click = popup.addEventListener('click', e => {
            (0,_views_nodes_popups__WEBPACK_IMPORTED_MODULE_1__.hiddenPopup)(popup);
            ___WEBPACK_IMPORTED_MODULE_0__.game.end();
        })
    });
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
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/session */ "./src/models/session.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ship */ "./src/controllers/ship.js");




const setListenersForShips = (ships) => {
    const border = document.querySelector('.player-board');
    ships.forEach((ship) => {
        const decks = ship.getBody();
        decks.forEach((deck) => {
            deck.getCellNode().addEventListener('mousedown', (evt) => {
                _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.index = deck.getNumber();
            });
        });

        ship.getContainer().addEventListener('click', (e) => {
            if (ship.getHead() !== null) {
                _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.activeShip = ship;
                _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.currentElement = ship.getHead().getCellNode();
                ship.orientationSwitch();
                let isView = (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_1__.viewShip)(ship, ship.getHead());

                if (isView) {
                    ship.setOrientation();
                } else {
                    ship.orientationSwitch();
                }

                (0,_models_session__WEBPACK_IMPORTED_MODULE_0__.resetSession)();
            }
        });

        ship.getContainer().addEventListener(`dragstart`, (evt) => {
            evt.target.classList.add(`selected`);
            _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.activeShip = ship;
        });

        ship.getContainer().addEventListener(`dragend`, (evt) => {
            evt.target.classList.remove(`selected`);
            (0,_ship__WEBPACK_IMPORTED_MODULE_2__.shipDragEnd)();
            (0,_models_session__WEBPACK_IMPORTED_MODULE_0__.resetSession)();
        });
    });

    border.addEventListener(`dragover`, (evt) => {
        _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.currentElement = evt.target;
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
/* harmony export */   addClasses: () => (/* binding */ addClasses),
/* harmony export */   appendChilds: () => (/* binding */ appendChilds),
/* harmony export */   randomIntFromInterval: () => (/* binding */ randomIntFromInterval),
/* harmony export */   removeChilds: () => (/* binding */ removeChilds),
/* harmony export */   setAttributes: () => (/* binding */ setAttributes)
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

const addClasses = (node, ...classes) => {
    for (let curClass of classes) {
        node.classList.add(curClass);
    }
}

const setAttributes = (e, atrs) => {
    for (let atr of atrs) {
        e.setAttribute(atr.name, atr.val);
    }
}

const appendChilds = (node, ...childs) => {
    for (let child of childs) {
        node.appendChild(child);
    }
}

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
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/game */ "./src/models/game.js");



const game = (0,_models_game__WEBPACK_IMPORTED_MODULE_1__.Game)();
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
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/animations/changeVisible */ "./src/views/animations/changeVisible.js");
/* harmony import */ var _views_nodes_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/factory */ "./src/views/nodes/factory.js");




const Cell = (x = -1, y = -1, name = 'cell') => {
    let hit = false;
    let parent = 'free';
    let node = (0,_views_nodes_factory__WEBPACK_IMPORTED_MODULE_2__.getNode)(name, 'cell');
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
        (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.removeChilds)(node);
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setNormalOpacity)(node);
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

    const getCellAroundArea = (x, y, parent) => {
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

    const getDiads = (x, y, parent) => {
        let cells = [];
        cells.push(getDiag1(x, y, parent));
        cells.push(getDiag2(x, y, parent));
        cells.push(getDiag3(x, y, parent));
        cells.push(getDiag4(x, y, parent));
        cells = cells.filter((cell) => cell !== undefined);
        return cells;
    }

    return { getCellAroundArea, getDiads };
};


/***/ }),

/***/ "./src/models/elements/attributes.js":
/*!*******************************************!*\
  !*** ./src/models/elements/attributes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrossAttributes: () => (/* binding */ CrossAttributes),
/* harmony export */   HorizontalLine: () => (/* binding */ HorizontalLine)
/* harmony export */ });
const CrossAttributes = (() => {
    const line = [
        { name: 'stroke', val: 'red' },
        { name: 'stroke-width', val: '5%' },
        { name: 'stroke-linecap', val: 'round' },
        { name: 'stroke-dasharray', val: '120%' },
        { name: 'stroke-dashoffset', val: '120%' }
    ];
    const leftDiag = [
        { name: 'x1', val: '10%' },
        { name: 'y1', val: '10%' },
        { name: 'x2', val: '90%' },
        { name: 'y2', val: '90%' },
    ];
    const rightDiag = [
        { name: 'x2', val: '10%' },
        { name: 'y2', val: '90%' },
        { name: 'x1', val: '90%' },
        { name: 'y1', val: '10%' },
    ];
    return { line, leftDiag, rightDiag };
})();

const HorizontalLine = (() => {
    const horizontal = [
        { name: 'stroke', val: 'red' },
        { name: 'stroke-width', val: 'min(3vh ,3vw)' },
        { name: 'stroke-linecap', val: 'round' },
        { name: 'stroke-dasharray', val: '100vw' },
        { name: 'stroke-dashoffset', val: '100vw' },
        { name: 'x1', val: '0vw' },
        { name: 'y1', val: '0vw' },
        { name: 'x2', val: '100vw' },
        { name: 'y2', val: '0vw' },
    ]
    return { horizontal };
})();

/***/ }),

/***/ "./src/models/elements/audioEffects.js":
/*!*********************************************!*\
  !*** ./src/models/elements/audioEffects.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clickEffect: () => (/* binding */ clickEffect),
/* harmony export */   drawCross: () => (/* binding */ drawCross),
/* harmony export */   killShipEffect: () => (/* binding */ killShipEffect),
/* harmony export */   lose: () => (/* binding */ lose),
/* harmony export */   missEffect: () => (/* binding */ missEffect),
/* harmony export */   timerEffect: () => (/* binding */ timerEffect),
/* harmony export */   win: () => (/* binding */ win)
/* harmony export */ });
/* harmony import */ var _views_audio_cross_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/audio/cross.mp3 */ "./src/views/audio/cross.mp3");
/* harmony import */ var _views_audio_shot_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/audio/shot.mp3 */ "./src/views/audio/shot.mp3");
/* harmony import */ var _views_audio_boom_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/audio/boom.mp3 */ "./src/views/audio/boom.mp3");
/* harmony import */ var _views_audio_clickPlay_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/audio/clickPlay.mp3 */ "./src/views/audio/clickPlay.mp3");
/* harmony import */ var _views_audio_timer_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/audio/timer.mp3 */ "./src/views/audio/timer.mp3");
/* harmony import */ var _views_audio_win_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../views/audio/win.mp3 */ "./src/views/audio/win.mp3");
/* harmony import */ var _views_audio_lose_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../views/audio/lose.mp3 */ "./src/views/audio/lose.mp3");








const drawCross = (() => {
    let audio = new Audio(_views_audio_cross_mp3__WEBPACK_IMPORTED_MODULE_0__)
    audio.playbackRate = 3;
    audio.volume = 0.5;
    return audio;
})();

const missEffect = (() => {
    let audio = new Audio(_views_audio_shot_mp3__WEBPACK_IMPORTED_MODULE_1__);
    audio.playbackRate = 2;
    audio.volume = 0.4;
    return audio;
})();

const killShipEffect = (() => {
    let audio = new Audio(_views_audio_boom_mp3__WEBPACK_IMPORTED_MODULE_2__);
    audio.volume = 0.2;
    return audio;
})();

const clickEffect = (() => {
    let audio = new Audio(_views_audio_clickPlay_mp3__WEBPACK_IMPORTED_MODULE_3__);
    audio.volume = 1;
    return audio;
})();

const timerEffect = (() => {
    let audio = new Audio(_views_audio_timer_mp3__WEBPACK_IMPORTED_MODULE_4__);
    audio.volume = 1;
    return audio;
})();

const win = (() => {
    let audio = new Audio(_views_audio_win_mp3__WEBPACK_IMPORTED_MODULE_5__);
    audio.volume = 1;
    return audio;
})();

const lose = (() => {
    let audio = new Audio(_views_audio_lose_mp3__WEBPACK_IMPORTED_MODULE_6__);
    audio.volume = 1;
    return audio;
})();

/***/ }),

/***/ "./src/models/elements/templates.js":
/*!******************************************!*\
  !*** ./src/models/elements/templates.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cross: () => (/* binding */ Cross),
/* harmony export */   Template: () => (/* binding */ Template),
/* harmony export */   Timer: () => (/* binding */ Timer)
/* harmony export */ });
/* harmony import */ var _views_nodes_markers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/nodes/markers */ "./src/views/nodes/markers.js");
/* harmony import */ var _views_nodes_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/nodes/timer */ "./src/views/nodes/timer.js");



const Template = (svg) => {
    let animations;
    const getSvg = () => {
        return svg;
    }

    const reset = () => {
        animations.forEach(animation => {
            animation.finish();
        })
    }

    const setAnimations = (val) => {
        animations = val;
    }

    return { setAnimations, getSvg, animations, reset };
}

const Cross = () => {
    const prototype = Template((0,_views_nodes_markers__WEBPACK_IMPORTED_MODULE_0__.createCrossSVG)());

    const view = () => {
        prototype.setAnimations((0,_views_nodes_markers__WEBPACK_IMPORTED_MODULE_0__.viewCross)(prototype.getSvg()));
    }

    return Object.assign(prototype, { view });
}

const Timer = () => {
    const prototype = Template((0,_views_nodes_timer__WEBPACK_IMPORTED_MODULE_1__.createTimerSVG)());

    const view = () => {
        prototype.setAnimations((0,_views_nodes_timer__WEBPACK_IMPORTED_MODULE_1__.viewTimer)(prototype.getSvg()));
    }

    return Object.assign(prototype, { view });
}

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
/* harmony import */ var _controllers_listeners_forPopups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/listeners/forPopups */ "./src/controllers/listeners/forPopups.js");
/* harmony import */ var _controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/listeners/forShips */ "./src/controllers/listeners/forShips.js");
/* harmony import */ var _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/animations/changeVisible */ "./src/views/animations/changeVisible.js");
/* harmony import */ var _views_nodes_hits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/nodes/hits */ "./src/views/nodes/hits.js");
/* harmony import */ var _views_nodes_popups__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/nodes/popups */ "./src/views/nodes/popups.js");
/* harmony import */ var _views_nodes_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/nodes/profile */ "./src/views/nodes/profile.js");
/* harmony import */ var _views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/nodes/shipyard */ "./src/views/nodes/shipyard.js");
/* harmony import */ var _views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/nodes/ui */ "./src/views/nodes/ui.js");
/* harmony import */ var _cellHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cellHandler */ "./src/models/cellHandler.js");
/* harmony import */ var _elements_audioEffects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./elements/audioEffects */ "./src/models/elements/audioEffects.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./player */ "./src/models/player.js");
/* harmony import */ var _timeManipulators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timeManipulators */ "./src/models/timeManipulators.js");















const Game = () => {
    let player = (0,_player__WEBPACK_IMPORTED_MODULE_12__.Profile)(1, 'Player', 'player-board', '.ai-mini-shipyard');
    let ai = (0,_player__WEBPACK_IMPORTED_MODULE_12__.Profile)(0, 'AI', 'ai-board', '.player-mini-shipyard');
    const timeManipulators = (0,_timeManipulators__WEBPACK_IMPORTED_MODULE_13__.TimeManipulators)();
    const gameHandler = GameHandler(ai, player, timeManipulators);

    const viewDefaulInterfaces = () => {
        (0,_views_nodes_profile__WEBPACK_IMPORTED_MODULE_7__.viewProfile)(player);
        (0,_views_nodes_profile__WEBPACK_IMPORTED_MODULE_7__.viewProfile)(ai);
        (0,_views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_8__.viewShipyard)(player.getShipyard());
        (0,_views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_8__.viewShipyard)(player.getMiniShipyard());
        (0,_views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_8__.viewShipyard)(ai.getMiniShipyard());
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setMiniShipyardDesign)(player.getMiniShipyard())
        ;(0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setMiniShipyardDesign)(ai.getMiniShipyard())
    }

    const setDefaultListeners = () => {
        ;(0,_controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_3__.setListenersForShips)(player.getShipyard().getAllShips());
        (0,_controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_0__.setListenersForLinks)();
        (0,_controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_1__.setListenersForPlayButton)();
        (0,_controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_1__.setListenersForExitButton)();
        (0,_controllers_listeners_forPopups__WEBPACK_IMPORTED_MODULE_2__.setListenersforPopups)();
    }

    const setGamePlayListeners = () => {
        ;(0,_controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_1__.setListenersForCells)();
    }

    const start = () => {
        setDefaultListeners();
        viewDefaulInterfaces();
        gameHandler.fillBoardsToRandomShips();
        ai.getGameboard().hiddenShips();
    }

    const play = () => {
        gameHandler.setDefaultSettings();
        setGamePlayListeners();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.hiddenInterfaceBeforeStartPlay)();
        playGameState();
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.removeHidden)(ai.getMiniShipyard().getNode())
        ;(0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.removeHidden)(player.getMiniShipyard().getNode())
        gameHandler.playerMove();
        timeManipulators.setTimeOfTheMove();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setMiniShipyardDesign)(player.getMiniShipyard())
        ;(0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setMiniShipyardDesign)(ai.getMiniShipyard())
    }

    const end = () => {
        ;(0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setHidden)(ai.getMiniShipyard().getNode())
        ;(0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setHidden)(player.getMiniShipyard().getNode())
        ai.getMiniShipyard().reset()
        player.getMiniShipyard().reset()
        timeManipulators.reset();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.viewInterfaceAfterEndGame)();
        endGameState();
    }

    const playGameState = () => {
        document.querySelector('.x-axis').classList.add('correct')
        player.getGameboard().blockShips();
    }

    const endGameState = () => {
        document.querySelector('.x-axis').classList.remove('correct')
        ai.getGameboard().block();
        ai.getGameboard().reset();
        player.getGameboard().unblockShips();
        player.getGameboard().reset();
        gameHandler.fillBoardsToRandomShips();
        ai.getGameboard().hiddenShips();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setAiMoveDesign)(ai, player)
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

    const getActivePlayer = () => {
        return move === 'ai' ? ai : player;
    }

    const switchMove = () => {
        timeManipulators.reset();
        if (isEndGame()) {
            openPopup();
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
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setPlayerMoveDesign)(ai, player);
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
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setAiMoveDesign)(ai, player);
        timeManipulators.setAiSpeedOfTought(playerCells);
    }

    const takeHit = (cell) => {
        const ship = cell.getOccupant();
        cell.setTheHit();
        if (ship === 'free') {
            (0,_views_nodes_hits__WEBPACK_IMPORTED_MODULE_5__.viewMissHit)(cell);
            _elements_audioEffects__WEBPACK_IMPORTED_MODULE_11__.missEffect.play();
        } else {
            (0,_views_nodes_hits__WEBPACK_IMPORTED_MODULE_5__.viewAccurateHit)(cell);
            setTimeout(() => {
                if (checkLiveShip(ship)) {
                    hitAllDiags(cell);
                }
                move = move === 'ai' ? 'player' : 'ai';
            }, 500);
        }
    }

    const checkLiveShip = (ship) => {
        if (!ship.isLive()) {
            _elements_audioEffects__WEBPACK_IMPORTED_MODULE_11__.killShipEffect.play();
            ship.kill();
            let miniShip = getMiniShip(ship);
            miniShip.kill();
            hitAllAreaAroundShip(ship)
        }
        return ship.isLive();
    }

    const hitAllAreaAroundShip = (ship) => {
        const area = ship.getWaterAreas().getAreaAroundTheShip();
        area.forEach(cell => {
            if (!cell.isHit()) {
                (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setLowOpacity)(cell.getCellNode());
            }
            (0,_views_nodes_hits__WEBPACK_IMPORTED_MODULE_5__.viewMissHit)(cell);
            removeCell(cell);
        });
    }

    const removeCell = (cell) => {
        let cells = move === 'ai' ? playerCells : aiCells;
        let index = cells.indexOf(cell);
        if (index > -1) {
            cells.splice(index, 1);
        }
    }

    const hitAllDiags = (hitCell) => {
        const handler = (0,_cellHandler__WEBPACK_IMPORTED_MODULE_10__.CellHandler)();
        const x = hitCell.getXY().x;
        const y = hitCell.getXY().y;
        const opponent = move === 'ai' ? player : ai;
        const parent = opponent.getGameboard().getStructedContainer();
        const cells = handler.getDiads(x, y, parent);
        cells.forEach(cell => {
            if (cell !== hitCell) {
                if (!cell.isHit()) {
                    (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setLowOpacity)(cell.getCellNode());
                }
                (0,_views_nodes_hits__WEBPACK_IMPORTED_MODULE_5__.viewMissHit)(cell);
                removeCell(cell);
            }
        });
    }

    const getMiniShip = (ship) => {
        const type = ship.getType();
        const activePlayer = getActivePlayer();
        const ships = activePlayer.getMiniShipyard().getShipsOfType(type);
        for (let i = 0; i < ships.length; i++) {
            if (ships[i].isLive()) {
                return ships[i];
            }
        }
    }

    const fillBoardsToRandomShips = () => {
        ai.getGameboard().randomFillingOfShips();
        player.getGameboard().randomFillingOfShips();
    }

    const openPopup = () => {
        move === 'player' ? (0,_views_nodes_popups__WEBPACK_IMPORTED_MODULE_6__.viewLosePopup)() : (0,_views_nodes_popups__WEBPACK_IMPORTED_MODULE_6__.viewWinPopup)()
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
/* harmony import */ var _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/animations/changeVisible */ "./src/views/animations/changeVisible.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameConfig */ "./src/models/gameConfig.js");





const Gameboard = (name, player) => {
    const width = _gameConfig__WEBPACK_IMPORTED_MODULE_3__.Config.Gameboard.width;
    const height = _gameConfig__WEBPACK_IMPORTED_MODULE_3__.Config.Gameboard.height;
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
            (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_1__.viewShipOnRandomCell)(ship, [...getUnstructedContainer()]);
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

    const hiddenShips = () => {
        const board = node.querySelector('.board');
        board.querySelectorAll('.ship').forEach(ship => {
            ship.style.border = '0px blue solid';
        });
        board.querySelectorAll('.deck').forEach(deck => {
            (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNullOpacity)(deck)
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
        hiddenShips,
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
            const cell = (0,_cell__WEBPACK_IMPORTED_MODULE_2__.MarineSector)(j, i);
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

const Profile = (id, name, nodeId, miniShipyardId) => {
    const prototype = Player(id, name);

    let gameboard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(nodeId, prototype);
    let shipyard = (0,_shipyard__WEBPACK_IMPORTED_MODULE_1__.Shipyard)(prototype);
    let miniShipyard = (0,_shipyard__WEBPACK_IMPORTED_MODULE_1__.Shipyard)(prototype, document.querySelector(miniShipyardId));

    const getGameboard = () => {
        return gameboard;
    };

    const getShipyard = () => {
        return shipyard;
    };

    const getMiniShipyard = () => {
        return miniShipyard;
    }

    return Object.assign(prototype, { getGameboard, getShipyard, getMiniShipyard });
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
    let manualMode = false;
    return { manualMode, activeShip, index, doubleIndex, currentElement, choisedCell };
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
/* harmony import */ var _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/animations/changeVisible */ "./src/views/animations/changeVisible.js");
/* harmony import */ var _views_nodes_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/factory */ "./src/views/nodes/factory.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _waterAreas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./waterAreas */ "./src/models/waterAreas.js");







const Ship = (length, player, type) => {
    const container = (0,_views_nodes_factory__WEBPACK_IMPORTED_MODULE_2__.getNode)('ship', 'horizontal');
    let body = [];
    let live = true;
    let horizontal = true;
    let head = null;
    let ship = {};
    let shipWaterAreas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_5__.ShipWaterAreas)(player, ship);

    const setYourself = (thisShip) => {
        ship = thisShip;
    }

    const getYourself = () => {
        return ship;
    }

    const fillContainer = () => {
        for (let i = 0; i < length; i++) {
            let deck = (0,_cell__WEBPACK_IMPORTED_MODULE_4__.Deck)(i);
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
        let areas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_5__.ShipWaterAreas)(player, ship);
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
        (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_3__.setStandartVerticalShipDesign)(container, length);
        horizontal = false;
    };

    const setHorizontal = () => {
        (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_3__.setStandartHorizontalShipDesign)(container, length);
        horizontal = true;
    };

    const setRandomOrientation = () => {
        (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.randomIntFromInterval)(0, 1) === 1 ? setHorizontal() : setVertical();
    };

    const getBoard = () => {
        return player.getGameboard();
    };

    const reset = () => {
        head = null;
        if (!container.classList.contains('mini-ship')) {
            setHorizontal();
        }
        resetBody();
        shipWaterAreas.clearAreas();
        shipWaterAreas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_5__.ShipWaterAreas)(player, ship);
    };

    const resetBody = () => {
        (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_3__.resetShipStyle)(container);
        body.forEach(deck => {
            deck.reset();
        })
    }

    const getType = () => {
        return type;
    }

    const kill = () => {
        body.forEach(deck => {
            ;(0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setLowOpacity)(deck.getCellNode());
            deck.setTheHit();
        })
        ;(0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_3__.setDeathStyleOnShip)(container);
        live = false;
    }

    const getWaterAreas = () => {
        return shipWaterAreas
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
        getYourself,
        getType,
        kill,
        getWaterAreas
    };
};

const Fregat = (marker) => {
    const prototype = Ship(4, marker, 'fregats');
    return Object.assign(prototype, marker);
};

const Caravel = (marker) => {
    const prototype = Ship(3, marker, 'caravels');
    return Object.assign(prototype);
};

const Drakkar = (marker) => {
    const prototype = Ship(2, marker, 'drakkars');
    return Object.assign(prototype);
};

const Boat = (marker) => {
    const prototype = Ship(1, marker, 'boats');
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



const Shipyard = (player, node = document.querySelector('.shipyard')) => {
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

    const getNode = () => {
        return node;
    }

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
        getNode
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
/* harmony import */ var _elements_audioEffects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/audioEffects */ "./src/models/elements/audioEffects.js");
/* harmony import */ var _elements_templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/templates */ "./src/models/elements/templates.js");






const TimeManipulators = () => {
    let timeOfTheMove;
    let aiSpeedOfTought;
    let timeBetweenMoves;
    let alarm;
    let timer = (0,_elements_templates__WEBPACK_IMPORTED_MODULE_3__.Timer)();
    document.querySelector('.timer').appendChild(timer.getSvg());

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
        timer.view();
        timeOfTheMove = setInterval(() => {
            ___WEBPACK_IMPORTED_MODULE_0__.game.gameHandler.switchMove();
        }, 15000);
        alarm = setTimeout(() => {
            _elements_audioEffects__WEBPACK_IMPORTED_MODULE_2__.timerEffect.play();
        }, 10000);
    }

    const reset = () => {
        timer.reset();
        clearTimeout(aiSpeedOfTought);
        clearTimeout(timeBetweenMoves);
        clearTimeout(alarm);
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

/***/ "./src/views/animations/animations.js":
/*!********************************************!*\
  !*** ./src/views/animations/animations.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animations: () => (/* binding */ Animations)
/* harmony export */ });
const Animations = (() => {
    const transform = (() => {
        const x = (e, x0, x1, dur, fill = 'none') => {
            return e.animate([{ left: `${x0}` }, { left: `${x1}` }], { duration: dur, fill: fill });
        }

        const y = (e, y0, y1, dur, fill = 'none') => {
            return e.animate([{ top: `${y0}` }, { top: `${y1}` }], { duration: dur, fill: fill });
        }

        const rotate = (e, rotate1, rotate2, dur, fill = 'none') => {
            return e.animate([{ transform: `rotate(${rotate1}deg)` }, { transform: `rotate(${rotate2}deg)` }], { duration: dur, fill: fill });
        }

        return { x, y, rotate };
    })();

    const background = (e, color1, color2, dur, fill = 'none') => {
        return e.animate([{ background: color1 }, { background: color2 }], { duration: dur, fill: fill });
    }

    const opacity = (e, opacity1, opacity2, dur, fill = 'none') => {
        return e.animate([{ opacity: opacity1 }, { opacity: opacity2 }], { duration: dur, fill: fill });
    }

    const custom = (e, dur, fill = 'none', ...keyFrames) => {
        return e.animate(...keyFrames, { duration: dur, fill: fill });
    }

    return { transform, background, opacity, custom };
})();


/***/ }),

/***/ "./src/views/animations/changeVisible.js":
/*!***********************************************!*\
  !*** ./src/views/animations/changeVisible.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeHidden: () => (/* binding */ removeHidden),
/* harmony export */   removeNullOpacity: () => (/* binding */ removeNullOpacity),
/* harmony export */   setHidden: () => (/* binding */ setHidden),
/* harmony export */   setLowOpacity: () => (/* binding */ setLowOpacity),
/* harmony export */   setNormalOpacity: () => (/* binding */ setNormalOpacity),
/* harmony export */   setNullOpacity: () => (/* binding */ setNullOpacity)
/* harmony export */ });
const setHidden = (node) => {
    node.classList.add('hidden');
};

const removeHidden = (node) => {
    node.classList.remove('hidden');
};

const setLowOpacity = (node) => {
    node.classList.add('low-opacity');
}

const setNormalOpacity = (node) => {
    node.classList.remove('low-opacity');
}

const removeNullOpacity = (node) => {
    node.classList.remove('null-opacity');
}

const setNullOpacity = (node) => {
    node.classList.add('null-opacity');
}

/***/ }),

/***/ "./src/views/animations/markers.js":
/*!*****************************************!*\
  !*** ./src/views/animations/markers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawCross: () => (/* binding */ drawCross)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations */ "./src/views/animations/animations.js");


const drawCross = (e, dur, fill, ...keyFrames) => {
    _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.custom(e.firstChild, dur, fill, ...keyFrames);
    setTimeout(() => {
        return _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.custom(e.lastChild, dur, fill, ...keyFrames);
    }, dur);
}


/***/ }),

/***/ "./src/views/animations/timer.js":
/*!***************************************!*\
  !*** ./src/views/animations/timer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorsTimer: () => (/* binding */ colorsTimer),
/* harmony export */   drawTimer: () => (/* binding */ drawTimer)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations */ "./src/views/animations/animations.js");


const colorsTimer = (e, dur, fill, ...keyFrames) => {
    return _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.custom(e, dur, fill, ...keyFrames);
}

const drawTimer = (e, dur, fill, ...keyFrames) => {
    return _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.custom(e, dur, fill, ...keyFrames);
}


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

/***/ "./src/views/nodes/hits.js":
/*!*********************************!*\
  !*** ./src/views/nodes/hits.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendCrossSvg: () => (/* binding */ appendCrossSvg),
/* harmony export */   viewAccurateHit: () => (/* binding */ viewAccurateHit),
/* harmony export */   viewMissHit: () => (/* binding */ viewMissHit)
/* harmony export */ });
/* harmony import */ var _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/elements/audioEffects */ "./src/models/elements/audioEffects.js");
/* harmony import */ var _models_elements_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/elements/templates */ "./src/models/elements/templates.js");
/* harmony import */ var _animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/changeVisible */ "./src/views/animations/changeVisible.js");




const viewMissHit = (cell) => {
    cell.getCellNode().classList.add('miss-hit');
}

const viewAccurateHit = (cell) => {
    const deck = cell.getLinkedDeck();
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.removeNullOpacity)(deck.getCellNode());
    deck.setTheHit();
    appendCrossSvg(deck);
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.drawCross.play();
}

const appendCrossSvg = (deck) => {
    let cross = (0,_models_elements_templates__WEBPACK_IMPORTED_MODULE_1__.Cross)();
    deck.getCellNode().classList.add('destroyed');
    deck.getCellNode().appendChild(cross.getSvg());
    cross.view();
}

/***/ }),

/***/ "./src/views/nodes/markers.js":
/*!************************************!*\
  !*** ./src/views/nodes/markers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCrossSVG: () => (/* binding */ createCrossSVG),
/* harmony export */   viewCross: () => (/* binding */ viewCross)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/elements/attributes */ "./src/models/elements/attributes.js");
/* harmony import */ var _animations_markers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/markers */ "./src/views/animations/markers.js");




const createCrossSVG = () => {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let leftLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    let rightLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.appendChilds)(svg, leftLine, rightLine);
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(leftLine, _models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.CrossAttributes.line.concat(_models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.CrossAttributes.leftDiag));
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(rightLine, _models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.CrossAttributes.line.concat(_models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.CrossAttributes.rightDiag));
    return svg;
}

const viewCross = (svg) => {
    const animations = [
        (0,_animations_markers__WEBPACK_IMPORTED_MODULE_2__.drawCross)(svg, 200, 'forwards', [{ strokeDashoffset: 'min(5vh ,2vw)' }, { strokeDashoffset: 'min(0vh ,0vw)' }])
    ]
    return animations;
}

/***/ }),

/***/ "./src/views/nodes/popups.js":
/*!***********************************!*\
  !*** ./src/views/nodes/popups.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hiddenPopup: () => (/* binding */ hiddenPopup),
/* harmony export */   viewLosePopup: () => (/* binding */ viewLosePopup),
/* harmony export */   viewWinPopup: () => (/* binding */ viewWinPopup)
/* harmony export */ });
/* harmony import */ var _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/elements/audioEffects */ "./src/models/elements/audioEffects.js");


const viewWinPopup = () => {
    const popup = document.querySelector('.popup-win');
    popup.style.opacity = 1;
    popup.style.visibility = 'visible';
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.win.play();
}

const viewLosePopup = () => {
    const popup = document.querySelector('.popup-lose');
    popup.style.opacity = 1;
    popup.style.visibility = 'visible';
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.lose.play();
}

const hiddenPopup = (popup) => {
    popup.style.opacity = 0;
    popup.style.visibility = 'hidden';
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.win.pause();
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.lose.pause();
}

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
/* harmony export */   resetShipStyle: () => (/* binding */ resetShipStyle),
/* harmony export */   setDeathStyleOnShip: () => (/* binding */ setDeathStyleOnShip),
/* harmony export */   setStandartHorizontalShipDesign: () => (/* binding */ setStandartHorizontalShipDesign),
/* harmony export */   setStandartVerticalShipDesign: () => (/* binding */ setStandartVerticalShipDesign),
/* harmony export */   viewShip: () => (/* binding */ viewShip),
/* harmony export */   viewShipOnRandomCell: () => (/* binding */ viewShipOnRandomCell)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/session */ "./src/models/session.js");
/* harmony import */ var _animations_changeVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/changeVisible */ "./src/views/animations/changeVisible.js");





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
    if (_models_session__WEBPACK_IMPORTED_MODULE_2__.Session.manualMode) {
        if (___WEBPACK_IMPORTED_MODULE_0__.game.player.getShipyard().isEmpty()) {
            setTimeout(() => {
                closeManualMenu();
            }, 500);
        }
    }
};

const closeManualMenu = () => {
    const shipyard = document.querySelector('.shipyard');
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_3__.removeHidden)(___WEBPACK_IMPORTED_MODULE_0__.game.ai.getGameboard().getNode());
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_3__.setHidden)(shipyard);
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

const setStandartHorizontalShipDesign = (container, length) => {
    container.classList.remove('vertical');
    container.classList.add('horizontal');
    container.style.width = `min(${length * 5}vh,${length * 2}vw)`;
    container.style.height = `min(5vh,2vw)`;
    container.style.minHeight = `2vh`;
    container.style.minWidth = `${length * 2}vh`;
}

const setStandartVerticalShipDesign = (container, length) => {
    container.classList.remove('horizontal');
    container.classList.add('vertical');
    container.style.height = `min(${length * 5}vh,${length * 2}vw)`;
    container.style.width = `min(5vh,2vw)`;
    container.style.minHeight = `${length * 2}vh`;
    container.style.minWidth = `2vh`;
}

const resetShipStyle = (container) => {
    container.style.opacity = '1';
    container.style.border = 'min(0.1vh, 0.1vw) rgba(0, 0, 255, 1) solid';
}

const setDeathStyleOnShip = (container) => {
    container.style.opacity = '0.3';
    container.style.border = 'min(0.1vh, 0.1vw) rgba(255, 0, 0, 1) solid';
}

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




const viewShipyard = (shipyard) => {
    fillShipyardNode(shipyard);
    (0,_dragAndDrop_ships__WEBPACK_IMPORTED_MODULE_2__.setDraggableForShips)();
};

const fillShipyardNode = (shipyard) => {
    _models_gameConfig__WEBPACK_IMPORTED_MODULE_1__.Config.Elements.shipTypes.forEach((type) => {
        addType(type, shipyard);
    });
};

const addType = (type, shipyard) => {
    const dock = shipyard.getNode().querySelector(`.${type}`);
    const ships = shipyard.getShipsOfType(type);
    ships.forEach((ship) => {
        dock.appendChild(ship.getContainer());
    });
};


/***/ }),

/***/ "./src/views/nodes/timer.js":
/*!**********************************!*\
  !*** ./src/views/nodes/timer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTimerSVG: () => (/* binding */ createTimerSVG),
/* harmony export */   viewTimer: () => (/* binding */ viewTimer)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/elements/attributes */ "./src/models/elements/attributes.js");
/* harmony import */ var _animations_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/timer */ "./src/views/animations/timer.js");




const createTimerSVG = () => {
    let timer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(line, _models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.HorizontalLine.horizontal);
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.appendChilds)(timer, line);
    return timer;
}

const viewTimer = (svg) => {
    const animations = [
        (0,_animations_timer__WEBPACK_IMPORTED_MODULE_2__.colorsTimer)(svg.lastChild, 15000, 'none', [{ stroke: 'green' }, { stroke: 'orange' }, { stroke: 'red' }]),
        (0,_animations_timer__WEBPACK_IMPORTED_MODULE_2__.drawTimer)(svg.lastChild, 15000, 'none', [{ strokeDashoffset: '99vw' }, { strokeDashoffset: '0vw' }])
    ]
    return animations;
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
/* harmony export */   setMiniShipyardDesign: () => (/* binding */ setMiniShipyardDesign),
/* harmony export */   setPlayerMoveDesign: () => (/* binding */ setPlayerMoveDesign),
/* harmony export */   viewInterfaceAfterEndGame: () => (/* binding */ viewInterfaceAfterEndGame)
/* harmony export */ });
/* harmony import */ var _animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/changeVisible */ "./src/views/animations/changeVisible.js");


const hiddenInterfaceBeforeStartPlay = () => {
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setHidden)(document.querySelector('.play'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setHidden)(document.querySelector('.footer'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setHidden)(document.querySelector('.tips'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.removeHidden)(document.querySelector('.exit'))
}

const viewInterfaceAfterEndGame = () => {
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.removeHidden)(document.querySelector('.play'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.removeHidden)(document.querySelector('.footer'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.removeHidden)(document.querySelector('.tips'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setHidden)(document.querySelector('.exit'))
}

const setPlayerMoveDesign = (ai, player) => {
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(ai.getGameboard().getNode().querySelector('.x-axis'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(ai.getGameboard().getNode().querySelector('.y-axis'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(ai.getGameboard().getNode().querySelector('.board'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(player.getGameboard().getNode().querySelector('.x-axis'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(player.getGameboard().getNode().querySelector('.y-axis'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(player.getGameboard().getNode().querySelector('.board'))
}

const setAiMoveDesign = (ai, player) => {
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(player.getGameboard().getNode().querySelector('.x-axis'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(player.getGameboard().getNode().querySelector('.y-axis'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(player.getGameboard().getNode().querySelector('.board'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(ai.getGameboard().getNode().querySelector('.x-axis'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(ai.getGameboard().getNode().querySelector('.y-axis'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(ai.getGameboard().getNode().querySelector('.board'))
}

const setMiniShipyardDesign = (shipyard) => {
    const decks = shipyard.getNode().querySelectorAll('.deck');
    const ships = shipyard.getNode().querySelectorAll('.ship');
    ships.forEach(ship => {
        ship.classList.add('mini-ship')
    })
    decks.forEach(deck => {
        deck.classList.add('mini-cell')
    })
}

/***/ }),

/***/ "./src/views/audio/boom.mp3":
/*!**********************************!*\
  !*** ./src/views/audio/boom.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0872139a5114016a2e5.mp3";

/***/ }),

/***/ "./src/views/audio/clickPlay.mp3":
/*!***************************************!*\
  !*** ./src/views/audio/clickPlay.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9bc49e833484732fba6b.mp3";

/***/ }),

/***/ "./src/views/audio/cross.mp3":
/*!***********************************!*\
  !*** ./src/views/audio/cross.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc6e954f0bccb598b2f8.mp3";

/***/ }),

/***/ "./src/views/audio/lose.mp3":
/*!**********************************!*\
  !*** ./src/views/audio/lose.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "990398abf79ff87e7edf.mp3";

/***/ }),

/***/ "./src/views/audio/shot.mp3":
/*!**********************************!*\
  !*** ./src/views/audio/shot.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18439e956c3c94658d36.mp3";

/***/ }),

/***/ "./src/views/audio/timer.mp3":
/*!***********************************!*\
  !*** ./src/views/audio/timer.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f44935c848c3f5feba0.mp3";

/***/ }),

/***/ "./src/views/audio/win.mp3":
/*!*********************************!*\
  !*** ./src/views/audio/win.mp3 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1445b6c74195bd5bbd8.mp3";

/***/ }),

/***/ "./src/views/images/dot.svg":
/*!**********************************!*\
  !*** ./src/views/images/dot.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "708f605515c5b85ba9df.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0Qyx1SUFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sOEZBQThGLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFh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NEVBQWdCO0FBQ3BCLElBQUksNEVBQWdCO0FBQ3BCLElBQUksNEVBQWdCO0FBQ3BCLElBQUkseUVBQWE7QUFDakIsSUFBSSx5RUFBYTtBQUNqQixJQUFJLHlFQUFhO0FBQ2pCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzcz84OWY2Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGlua3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yUGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JQb3B1cHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVyL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2FscGhhYmV0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9jZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2NlbGxIYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2VsZW1lbnRzL2F0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvZWxlbWVudHMvYXVkaW9FZmZlY3RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2VsZW1lbnRzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9nYW1lQ29uZmlnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9zZXNzaW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvc2hpcHlhcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvdGltZU1hbmlwdWxhdG9ycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy93YXRlckFyZWFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9tYXJrZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy90aW1lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2RyYWdBbmREcm9wL3NldERyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2RyYWdBbmREcm9wL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvYXhpcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9oaXRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvbWFya2Vycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3BvcHVwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvc2hpcHlhcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy90aW1lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL3ZpZXdzL2ltYWdlcy9kb3Quc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gICAgZm9udC1zaXplOiBtaW4oMnZoLCAydncpO1xuICAgIC0tYm9hcmQtd2lkdGg6IDA7XG4gICAgLS1ib2FyZC1oZWlnaHQ6IDA7XG4gICAgLS1jZWxsLXNpemU6IG1pbig1dmgsIDJ2dyk7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyIG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICByb3ctZ2FwOiBtaW4oMnZoLCAwLjh2dyk7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuc3BhbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAwLjR2dyk7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHBhZGRpbmc6IG1pbigydmgsIDAuOHZ3KTtcbn1cblxuLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLnRpcHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMnZoLCAwLjh2dyk7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLmV4aXQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uc2hpcHlhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcbiAgICByb3ctZ2FwOiBtaW4oNnZoLCAyLjR2dyk7XG4gICAgcGFkZGluZzogbWluKDJ2aCwgMC44dncpO1xuICAgIHdpZHRoOiBtaW4oNDB2aCwgMTZ2dyk7XG4gICAgaGVpZ2h0OiBtaW4oNDB2aCwgMTZ2dyk7XG4gICAgbWF4LXdpZHRoOiBtaW4oNTB2aCwgMjB2dyk7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2x1bW4tZ2FwOiBtaW4oNHZoLCAxLjZ2dyk7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgICBvcGFjaXR5OiAwLjAxICFpbXBvcnRhbnQ7XG59XG5cbi5ib2FyZF9fYXhpcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50O1xuICAgIHJvdy1nYXA6IG1pbigydmgsIDAuOHZ3KTtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogbWluKDV2aCwgMnZ3KTtcbn1cblxuLmF4aXMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG59XG5cbi5ib2FyZC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICdheGlzLXggYXhpcy14IGF4aXMteCdcbiAgICAgICAgJ3NoaXB5YXJkIGF4aXMteSBib2FyZCc7XG59XG5cbi54LWF4aXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBheGlzLXg7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtd2lkdGgpLCBtYXgodmFyKC0tY2VsbC1zaXplKSwgMnZoKSk7XG5cbn1cblxuLnktYXhpcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGF4aXMteTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCAyZnIpO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogYm9hcmQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtd2lkdGgpLCAyZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLWhlaWdodCksIDJmcik7XG4gICAgYm9yZGVyOiBtaW4oMC41dmgsIDAuMnZ3KSByZ2JhKDAsIDAsIDI1NSwgMC4yKSBzb2xpZDtcblxufVxuXG4ucGxheSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogbWluKDEwdmgsIDEwdncpO1xuICAgIGhlaWdodDogbWluKDEwdmgsIDEwdncpO1xuICAgIG1pbi13aWR0aDogMnZoO1xuICAgIG1pbi1oZWlnaHQ6IDJ2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExOSwgMjAyLCA0MSwgMC43MjYpO1xuICAgIGJvcmRlcjogbWluKDF2aCwgMXZ3KSByZ2IoMTE5LCAyMDIsIDQxKSBzb2xpZDtcbiAgICB6LWluZGV4OiA5OTg7XG59XG5cbi5haS1taW5pLXNoaXB5YXJkLFxuLnBsYXllci1taW5pLXNoaXB5YXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHJvdy1nYXA6IG1pbigydmgsIDAuOHZ3KTtcbiAgICBwYWRkaW5nOiBtaW4oM3ZoLCAxLjJ2dyk7XG59XG5cblxuLmxvdy1vcGFjaXR5IHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5ibG9jayB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYXJrZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi5jZWxsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIG1pbi13aWR0aDogMnZoO1xuICAgIG1pbi1oZWlnaHQ6IDJ2aDtcbn1cblxuLm1pc3MtaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5kZXN0cm95ZWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyOiAxcHggcmVkIHNvbGlkO1xufVxuXG4ubGl2ZSB7fVxuXG4ueC1jZWxsLFxuLnktY2VsbCB7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5tYXJpbmUtc2VjdG9yIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlcjogbWluKDAuMXZoLCAwLjF2dykgcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XG59XG5cbi5zaGlwIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIGJvcmRlcjogbWluKDAuMXZoLCAwLjF2dykgcmdiYSgwLCAwLCAyNTUsIDEpIHNvbGlkO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4uaG9yaXpvbnRhbCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMmZyKTtcbn1cblxuLnZlcnRpY2FsIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAyZnIpO1xufVxuXG4uZGVjayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5kZWNrPnN2ZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5taW5pLXNoaXAge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQgIWltcG9ydGFudDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQgIWltcG9ydGFudDtcbn1cblxuLm1pbmktY2VsbCB7XG4gICAgbWluLXdpZHRoOiAxdmg7XG4gICAgbWluLWhlaWdodDogMXZoO1xuICAgIHdpZHRoOiBtaW4oMnZoLCAwLjh2dyk7XG4gICAgaGVpZ2h0OiBtaW4oMnZoLCAwLjh2dyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMSk7XG4gICAgYm9yZGVyOiBtaW4oMC4xdmgsIDAuMXZ3KSByZ2JhKDAsIDI1NSwgMjU1LCAxKSBzb2xpZDtcbn1cblxuLmZvb3RlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogbWluKDR2aCwgMS42dncpO1xufVxuXG4ucmFuZG9tLW1vZGUsXG4ubWFudWFsLW1vZGUge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsdWU7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG5cbi5yYW5kb20tbW9kZTpob3Zlcixcbi5tYW51YWwtbW9kZTpob3ZlciB7XG4gICAgY29sb3I6IHJnYigxMjIsIDIzMSwgNzIpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgcmdiKDEyMiwgMjMxLCA3Mik7XG59XG5cbi50aW1lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiBtaW4oMnZoLCAwLjh2dyk7XG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcbn1cblxuLnRpbWVyPnN2ZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm51bGwtb3BhY2l0eSB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnBvcHVwLXdpbixcbi5wb3B1cC1sb3NlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWluLWNvbnRlbnQpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4udGV4dCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiBtaW4oMTB2aCwgMTB2dyk7XG59XG5cbi53aW4sXG4ubG9zZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMjAwMDtcbn1cblxuLmdpZi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IG1pbigxMDB2aCwgMTAwdncpO1xuICAgIGhlaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogbWluKDU2dmgsIDIyLjR2dyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzogMS4wMDAwMS8xKSB7XG5cbiAgICAubWFpbiB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG5cbiAgICB9XG5cbiAgICAuc2hpcHlhcmQge1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJ2aDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHtcbiAgICAubWFpbiB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgfVxuXG4gICAgLmFpLWJvYXJkIHtcbiAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgfVxufVxuXG4uY3Jvc3Mge1xuICAgIGJvcmRlcjogMXB4IHJlZCBzb2xpZFxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1QsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtDQUErQztJQUMvQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Is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RUE7SUFDSSxhQUFhOztJQUViLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBOztJQUVJLGVBQWU7SUFDZixhQUFhO0lBQ2IsaURBQWlEO0lBQ2pELFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLE1BQU07SUFDTixPQUFPO0lBQ1AscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUk7UUFDSSwyQ0FBMkM7O0lBRS9DOztJQUVBO1FBQ0ksb0JBQW9CO1FBQ3BCLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSw4Q0FBOEM7SUFDbEQ7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IG1pbigydmgsIDJ2dyk7XFxuICAgIC0tYm9hcmQtd2lkdGg6IDA7XFxuICAgIC0tYm9hcmQtaGVpZ2h0OiAwO1xcbiAgICAtLWNlbGwtc2l6ZTogbWluKDV2aCwgMnZ3KTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHJvdy1nYXA6IG1pbigydmgsIDAuOHZ3KTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbnNwYW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAwLjR2dyk7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IG1pbigydmgsIDAuOHZ3KTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4udGlwcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogbWluKDJ2aCwgMC44dncpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uZXhpdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXB5YXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XFxuICAgIHJvdy1nYXA6IG1pbig2dmgsIDIuNHZ3KTtcXG4gICAgcGFkZGluZzogbWluKDJ2aCwgMC44dncpO1xcbiAgICB3aWR0aDogbWluKDQwdmgsIDE2dncpO1xcbiAgICBoZWlnaHQ6IG1pbig0MHZoLCAxNnZ3KTtcXG4gICAgbWF4LXdpZHRoOiBtaW4oNTB2aCwgMjB2dyk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmRvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiBtaW4oNHZoLCAxLjZ2dyk7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIG9wYWNpdHk6IDAuMDEgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvYXJkX19heGlzLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudDtcXG4gICAgcm93LWdhcDogbWluKDJ2aCwgMC44dncpO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogbWluKDV2aCwgMnZ3KTtcXG59XFxuXFxuLmF4aXMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbi5ib2FyZC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICdheGlzLXggYXhpcy14IGF4aXMteCdcXG4gICAgICAgICdzaGlweWFyZCBheGlzLXkgYm9hcmQnO1xcbn1cXG5cXG4ueC1heGlzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBheGlzLXg7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgbWF4KHZhcigtLWNlbGwtc2l6ZSksIDJ2aCkpO1xcblxcbn1cXG5cXG4ueS1heGlzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBheGlzLXk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLWhlaWdodCksIDJmcik7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtd2lkdGgpLCAyZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCAyZnIpO1xcbiAgICBib3JkZXI6IG1pbigwLjV2aCwgMC4ydncpIHJnYmEoMCwgMCwgMjU1LCAwLjIpIHNvbGlkO1xcblxcbn1cXG5cXG4ucGxheSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogYm9hcmQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBtaW4oMTB2aCwgMTB2dyk7XFxuICAgIGhlaWdodDogbWluKDEwdmgsIDEwdncpO1xcbiAgICBtaW4td2lkdGg6IDJ2aDtcXG4gICAgbWluLWhlaWdodDogMnZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExOSwgMjAyLCA0MSwgMC43MjYpO1xcbiAgICBib3JkZXI6IG1pbigxdmgsIDF2dykgcmdiKDExOSwgMjAyLCA0MSkgc29saWQ7XFxuICAgIHotaW5kZXg6IDk5ODtcXG59XFxuXFxuLmFpLW1pbmktc2hpcHlhcmQsXFxuLnBsYXllci1taW5pLXNoaXB5YXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICByb3ctZ2FwOiBtaW4oMnZoLCAwLjh2dyk7XFxuICAgIHBhZGRpbmc6IG1pbigzdmgsIDEuMnZ3KTtcXG59XFxuXFxuXFxuLmxvdy1vcGFjaXR5IHtcXG4gICAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYXJrZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgbWluLXdpZHRoOiAydmg7XFxuICAgIG1pbi1oZWlnaHQ6IDJ2aDtcXG59XFxuXFxuLm1pc3MtaGl0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvdmlld3MvaW1hZ2VzL2RvdC5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuLmRlc3Ryb3llZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlcjogMXB4IHJlZCBzb2xpZDtcXG59XFxuXFxuLmxpdmUge31cXG5cXG4ueC1jZWxsLFxcbi55LWNlbGwge1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ubWFyaW5lLXNlY3RvciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlcjogbWluKDAuMXZoLCAwLjF2dykgcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxuICAgIG1hcmdpbi10b3A6IC0xcHg7XFxuICAgIGJvcmRlcjogbWluKDAuMXZoLCAwLjF2dykgcmdiYSgwLCAwLCAyNTUsIDEpIHNvbGlkO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5ob3Jpem9udGFsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMmZyKTtcXG59XFxuXFxuLnZlcnRpY2FsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMmZyKTtcXG59XFxuXFxuLmRlY2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4uZGVjaz5zdmcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWluaS1zaGlwIHtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQgIWltcG9ydGFudDtcXG59XFxuXFxuLm1pbmktY2VsbCB7XFxuICAgIG1pbi13aWR0aDogMXZoO1xcbiAgICBtaW4taGVpZ2h0OiAxdmg7XFxuICAgIHdpZHRoOiBtaW4oMnZoLCAwLjh2dyk7XFxuICAgIGhlaWdodDogbWluKDJ2aCwgMC44dncpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4xKTtcXG4gICAgYm9yZGVyOiBtaW4oMC4xdmgsIDAuMXZ3KSByZ2JhKDAsIDI1NSwgMjU1LCAxKSBzb2xpZDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiBtaW4oNHZoLCAxLjZ2dyk7XFxufVxcblxcbi5yYW5kb20tbW9kZSxcXG4ubWFudWFsLW1vZGUge1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsdWU7XFxuICAgIGNvbG9yOiBibHVlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufVxcblxcbi5yYW5kb20tbW9kZTpob3ZlcixcXG4ubWFudWFsLW1vZGU6aG92ZXIge1xcbiAgICBjb2xvcjogcmdiKDEyMiwgMjMxLCA3Mik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgcmdiKDEyMiwgMjMxLCA3Mik7XFxufVxcblxcbi50aW1lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiBtaW4oMnZoLCAwLjh2dyk7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbi50aW1lcj5zdmcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubnVsbC1vcGFjaXR5IHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnBvcHVwLXdpbixcXG4ucG9wdXAtbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbi1jb250ZW50KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAxdncpO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBtaW4oMTB2aCwgMTB2dyk7XFxufVxcblxcbi53aW4sXFxuLmxvc2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMjAwMDtcXG59XFxuXFxuLmdpZi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IG1pbigxMDB2aCwgMTAwdncpO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiBtaW4oNTZ2aCwgMjIuNHZ3KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDEuMDAwMDEvMSkge1xcblxcbiAgICAubWFpbiB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcblxcbiAgICB9XFxuXFxuICAgIC5zaGlweWFyZCB7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAydmg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDEvMSkge1xcbiAgICAubWFpbiB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICB9XFxuXFxuICAgIC5haS1ib2FyZCB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgfVxcbn1cXG5cXG4uY3Jvc3Mge1xcbiAgICBib3JkZXI6IDFweCByZWQgc29saWRcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvc2Vzc2lvbic7XG5pbXBvcnQgeyByZW1vdmVIaWRkZW4sIHNldEhpZGRlbiB9IGZyb20gJy4uLy4uL3ZpZXdzL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZSc7XG5pbXBvcnQgeyB2aWV3U2hpcHlhcmQgfSBmcm9tICcuLi8uLi92aWV3cy9ub2Rlcy9zaGlweWFyZCc7XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JMaW5rcyA9ICgpID0+IHtcbiAgICBjb25zdCBtYW51YWxNb2RlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW51YWwtbW9kZScpO1xuICAgIGNvbnN0IHJhbmRvbU1vZGVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbS1tb2RlJyk7XG4gICAgY29uc3Qgc2hpcHlhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHlhcmQnKTtcblxuICAgIGNvbnN0IG9wZW5NYW51YWxNb2RlID0gbWFudWFsTW9kZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBTZXNzaW9uLm1hbnVhbE1vZGUgPSB0cnVlO1xuICAgICAgICBnYW1lLnBsYXllci5nZXRHYW1lYm9hcmQoKS5yZXNldCgpO1xuICAgICAgICB2aWV3U2hpcHlhcmQoZ2FtZS5wbGF5ZXIuZ2V0U2hpcHlhcmQoKSk7XG4gICAgICAgIHNldEhpZGRlbihnYW1lLmFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKSk7XG4gICAgICAgIHJlbW92ZUhpZGRlbihzaGlweWFyZCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvcGVuUmFuZG9tTW9kZSA9IHJhbmRvbU1vZGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgU2Vzc2lvbi5tYW51YWxNb2RlID0gZmFsc2U7XG4gICAgICAgIHJlbW92ZUhpZGRlbihnYW1lLmFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKSk7XG4gICAgICAgIHNldEhpZGRlbihzaGlweWFyZCk7XG4gICAgICAgIGdhbWUucGxheWVyLmdldEdhbWVib2FyZCgpLnJhbmRvbUZpbGxpbmdPZlNoaXBzKCk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuLi8uLlwiO1xuaW1wb3J0IHsgY2xpY2tFZmZlY3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VsZW1lbnRzL2F1ZGlvRWZmZWN0c1wiO1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yUGxheUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheScpO1xuICAgIGNvbnN0IGNsaWNrID0gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGNsaWNrRWZmZWN0LnBsYXkoKTtcbiAgICAgICAgZ2FtZS5wbGF5KCk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckV4aXRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXQnKTtcblxuICAgIGNvbnN0IGNsaWNrID0gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGNsaWNrRWZmZWN0LnBsYXkoKTtcbiAgICAgICAgZ2FtZS5lbmQoKTtcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yQ2VsbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2VsbHMgPSBnYW1lLmFpLmdldEdhbWVib2FyZCgpLmdldFVuc3RydWN0ZWRDb250YWluZXIoKTtcbiAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gY2VsbC5nZXRDZWxsTm9kZSgpO1xuICAgICAgICBub2RlLnN0eWxlLnpJbmRleCA9IDEwMDA7XG4gICAgICAgIGNvbnN0IGNsaWNrID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZ2FtZS5nYW1lSGFuZGxlci5jaGVja0NlbGwoY2VsbCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn0iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4uLy4uXCI7XG5pbXBvcnQgeyBoaWRkZW5Qb3B1cCB9IGZyb20gXCIuLi8uLi92aWV3cy9ub2Rlcy9wb3B1cHNcIjtcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc2ZvclBvcHVwcyA9ICgpID0+IHtcbiAgICBjb25zdCBwb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICBwb3B1cHMuZm9yRWFjaChwb3B1cCA9PiB7XG4gICAgICAgIGNvbnN0IGNsaWNrID0gcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGhpZGRlblBvcHVwKHBvcHVwKTtcbiAgICAgICAgICAgIGdhbWUuZW5kKCk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59IiwiaW1wb3J0IHsgU2Vzc2lvbiwgcmVzZXRTZXNzaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Nlc3Npb24nO1xuaW1wb3J0IHsgdmlld1NoaXAgfSBmcm9tICcuLi8uLi92aWV3cy9ub2Rlcy9zaGlwJztcbmltcG9ydCB7IHNoaXBEcmFnRW5kIH0gZnJvbSAnLi4vc2hpcCc7XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JTaGlwcyA9IChzaGlwcykgPT4ge1xuICAgIGNvbnN0IGJvcmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlY2tzID0gc2hpcC5nZXRCb2R5KCk7XG4gICAgICAgIGRlY2tzLmZvckVhY2goKGRlY2spID0+IHtcbiAgICAgICAgICAgIGRlY2suZ2V0Q2VsbE5vZGUoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgU2Vzc2lvbi5pbmRleCA9IGRlY2suZ2V0TnVtYmVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2hpcC5nZXRDb250YWluZXIoKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5nZXRIZWFkKCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIFNlc3Npb24uY3VycmVudEVsZW1lbnQgPSBzaGlwLmdldEhlYWQoKS5nZXRDZWxsTm9kZSgpO1xuICAgICAgICAgICAgICAgIHNoaXAub3JpZW50YXRpb25Td2l0Y2goKTtcbiAgICAgICAgICAgICAgICBsZXQgaXNWaWV3ID0gdmlld1NoaXAoc2hpcCwgc2hpcC5nZXRIZWFkKCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzVmlldykge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLnNldE9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5vcmllbnRhdGlvblN3aXRjaCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc2V0U2Vzc2lvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoYGRyYWdzdGFydGAsIChldnQpID0+IHtcbiAgICAgICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmFkZChgc2VsZWN0ZWRgKTtcbiAgICAgICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcCA9IHNoaXA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXAuZ2V0Q29udGFpbmVyKCkuYWRkRXZlbnRMaXN0ZW5lcihgZHJhZ2VuZGAsIChldnQpID0+IHtcbiAgICAgICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShgc2VsZWN0ZWRgKTtcbiAgICAgICAgICAgIHNoaXBEcmFnRW5kKCk7XG4gICAgICAgICAgICByZXNldFNlc3Npb24oKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBib3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihgZHJhZ292ZXJgLCAoZXZ0KSA9PiB7XG4gICAgICAgIFNlc3Npb24uY3VycmVudEVsZW1lbnQgPSBldnQudGFyZ2V0O1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9nYW1lQ29uZmlnJztcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICcuLi9tb2RlbHMvc2Vzc2lvbic7XG5pbXBvcnQgeyB2aWV3U2hpcCB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL3NoaXAnO1xuXG5leHBvcnQgY29uc3Qgc2hpcERyYWdFbmQgPSAoKSA9PiB7XG4gICAgbGV0IGlzTW92ZWFibGUgPSBmYWxzZTtcbiAgICBsZXQgaXNBbHRlck1vdmFibGUgPSBmYWxzZTtcbiAgICBsZXQgYm9keSA9IFNlc3Npb24uYWN0aXZlU2hpcC5nZXRCb2R5KCk7XG4gICAgaWYgKFNlc3Npb24uY3VycmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgaXNNb3ZlYWJsZSA9IFNlc3Npb24uY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGBtYXJpbmUtc2VjdG9yYCk7XG4gICAgICAgIGlzQWx0ZXJNb3ZhYmxlID0gU2Vzc2lvbi5jdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoYGRlY2tgKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzTW92ZWFibGUgJiYgIWlzQWx0ZXJNb3ZhYmxlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNNb3ZlYWJsZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvbmZpZy5HYW1lYm9hcmQuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29uZmlnLkdhbWVib2FyZC53aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0U3RydWN0ZWRDb250YWluZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgW2pdW2ldLmdldENlbGxOb2RlKCkgPT09IFNlc3Npb24uY3VycmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFkZFNoaXBPbkJvYXJkKFNlc3Npb24uaW5kZXgsIGosIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNBbHRlck1vdmFibGUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2R5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYm9keVtpXS5nZXRDZWxsTm9kZSgpID09PSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgU2Vzc2lvbi5kb3VibGVJbmRleCA9IFNlc3Npb24uaW5kZXggLSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChTZXNzaW9uLmRvdWJsZUluZGV4ICE9PSAnc2hpcCcpIHtcbiAgICAgICAgICAgIGxldCBoZWFkID0gU2Vzc2lvbi5hY3RpdmVTaGlwLmdldEhlYWQoKS5nZXRDZWxsTm9kZSgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25maWcuR2FtZWJvYXJkLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBDb25maWcuR2FtZWJvYXJkLndpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0U3RydWN0ZWRDb250YWluZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtqXVtpXS5nZXRDZWxsTm9kZSgpID09PSBoZWFkXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFkZFNoaXBPbkJvYXJkKFNlc3Npb24uZG91YmxlSW5kZXgsIGosIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuY29uc3QgYWRkU2hpcE9uQm9hcmQgPSAoaW5kZXgsIHksIHgpID0+IHtcbiAgICBsZXQgZGF0YSA9IGdldERhdGEoaW5kZXgsIHksIHgpO1xuICAgIHJldHVybiB2aWV3U2hpcE9uQm9hcmQoZGF0YSk7XG59O1xuXG5jb25zdCBnZXREYXRhID0gKGluZGV4LCB4LCB5KSA9PiB7XG4gICAgcmV0dXJuIFNlc3Npb24uYWN0aXZlU2hpcC5pc0hvcml6b250YWwoKVxuICAgICAgICA/IHsgeDogeCwgeTogeSAtIGluZGV4IH1cbiAgICAgICAgOiB7IHg6IHggLSBpbmRleCwgeTogeSB9O1xufTtcblxuY29uc3Qgdmlld1NoaXBPbkJvYXJkID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4gdmlld1NoaXAoXG4gICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcCxcbiAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwLmdldEJvYXJkKCkuZ2V0U3RydWN0ZWRDb250YWluZXIoKVtkYXRhLnhdW2RhdGEueV0sXG4gICAgKTtcbn07XG4iLCJleHBvcnQgY29uc3QgcmFuZG9tSW50RnJvbUludGVydmFsID0gKG1pbiwgbWF4KSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2hpbGRzID0gKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRDbGFzc2VzID0gKG5vZGUsIC4uLmNsYXNzZXMpID0+IHtcbiAgICBmb3IgKGxldCBjdXJDbGFzcyBvZiBjbGFzc2VzKSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjdXJDbGFzcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0QXR0cmlidXRlcyA9IChlLCBhdHJzKSA9PiB7XG4gICAgZm9yIChsZXQgYXRyIG9mIGF0cnMpIHtcbiAgICAgICAgZS5zZXRBdHRyaWJ1dGUoYXRyLm5hbWUsIGF0ci52YWwpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFwcGVuZENoaWxkcyA9IChub2RlLCAuLi5jaGlsZHMpID0+IHtcbiAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHMpIHtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxufSIsImltcG9ydCAnLi92aWV3cy9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vbW9kZWxzL2dhbWUnO1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IEdhbWUoKTtcbmdhbWUuc3RhcnQoKTsiLCJjb25zdCBBbHBoYWJldCA9IChmaXJzdENoYXJDb2RlLCBsYXN0Q2hhckNvZGUpID0+IHtcbiAgICBjb25zdCBsb25nID0gbGFzdENoYXJDb2RlIC0gZmlyc3RDaGFyQ29kZSArIDE7XG4gICAgY29uc3QgY29kZXMgPSBBcnJheS5mcm9tKEFycmF5KGxvbmcpLmtleXMoKSwgKHgpID0+IHggKyBmaXJzdENoYXJDb2RlKTtcblxuICAgIGNvbnN0IGlzVGhpc0FscGhhYmV0ID0gKGNoYXJDb2RlKSA9PiB7XG4gICAgICAgIGlmIChjaGFyQ29kZSA+PSBmaXJzdENoYXJDb2RlICYmIGNoYXJDb2RlIDw9IGxhc3RDaGFyQ29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBmaXJzdENoYXJDb2RlLCBsYXN0Q2hhckNvZGUsIGxvbmcsIGlzVGhpc0FscGhhYmV0LCBjb2RlcyB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEFscGhhYmV0cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZW5nID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbHBoYWJldCA9IEFscGhhYmV0KDk3LCAxMjIpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhbHBoYWJldCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJ1cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSBBbHBoYWJldCgxMDcyLCAxMTAzKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWxwaGFiZXQpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBlbmcsIHJ1cyB9O1xufSkoKTtcbiIsImltcG9ydCB7IHJlbW92ZUNoaWxkcyB9IGZyb20gJy4uL2hlbHBlci9oZWxwZXInO1xuaW1wb3J0IHsgc2V0Tm9ybWFsT3BhY2l0eSB9IGZyb20gJy4uL3ZpZXdzL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZSc7XG5pbXBvcnQgeyBnZXROb2RlIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvZmFjdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBDZWxsID0gKHggPSAtMSwgeSA9IC0xLCBuYW1lID0gJ2NlbGwnKSA9PiB7XG4gICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgIGxldCBwYXJlbnQgPSAnZnJlZSc7XG4gICAgbGV0IG5vZGUgPSBnZXROb2RlKG5hbWUsICdjZWxsJyk7XG4gICAgbGV0IGxpbmtlZERlY2sgPSAnZnJlZSc7XG5cbiAgICBjb25zdCBzZXRMaW5rZWREZWNrID0gKGRlY2spID0+IHtcbiAgICAgICAgbGlua2VkRGVjayA9IGRlY2s7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGlua2VkRGVjayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxpbmtlZERlY2s7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGhlSGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0hpdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5QYXJlbnQpID0+IHtcbiAgICAgICAgcGFyZW50ID0gblBhcmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRDZWxsTm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFhZID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB4LCB5IH07XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFhZID0gKG54LCBueSkgPT4ge1xuICAgICAgICB4ID0gbng7XG4gICAgICAgIHkgPSBueTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdCA9IGZhbHNlO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ21pc3MtaGl0Jyk7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZGVzdHJveWVkJyk7XG4gICAgICAgIHJlbW92ZUNoaWxkcyhub2RlKTtcbiAgICAgICAgc2V0Tm9ybWFsT3BhY2l0eShub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRUaGVIaXQsXG4gICAgICAgIGlzSGl0LFxuICAgICAgICBzZXRQYXJlbnQsXG4gICAgICAgIGdldFBhcmVudCxcbiAgICAgICAgZ2V0Q2VsbE5vZGUsXG4gICAgICAgIGdldFhZLFxuICAgICAgICBzZXRYWSxcbiAgICAgICAgc2V0TGlua2VkRGVjayxcbiAgICAgICAgZ2V0TGlua2VkRGVjayxcbiAgICAgICAgcmVzZXRcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IERlY2sgPSAobnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gQ2VsbCgtMSwgLTEsICdkZWNrJyk7XG5cbiAgICBjb25zdCBnZXROdW1iZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyBnZXROdW1iZXIgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgTWFyaW5lU2VjdG9yID0gKHksIHgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBDZWxsKHksIHgsICdtYXJpbmUtc2VjdG9yJyk7XG4gICAgbGV0IG9jY3VwYW50ID0gJ2ZyZWUnO1xuXG4gICAgY29uc3Qgb2NjdXB5ID0gKG5PY2N1cGFudCkgPT4ge1xuICAgICAgICBvY2N1cGFudCA9IG5PY2N1cGFudDtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgICAgIG9jY3VwYW50ID0gJ2ZyZWUnO1xuICAgICAgICBwcm90b3R5cGUucmVzZXQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNGcmVlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb2NjdXBhbnQgPT09ICdmcmVlJztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0T2NjdXBhbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvY2N1cGFudDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IGlzRnJlZSwgY2xlYXIsIG9jY3VweSwgZ2V0T2NjdXBhbnQgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IENlbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGdldEJlZm9yZSA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbeV1bLS14XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbeV1bKyt4XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRBZnRlciA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbeV1bKyt4XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbeV1bLS14XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRPdmVyID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldW3hdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldW3hdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFVuZGVyID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldW3hdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldW3hdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERpYWcxID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldWy0teF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1bKyt4XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXREaWFnMiA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVsrK3hdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldWy0teF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RGlhZzMgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1bKyt4XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVstLXhdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERpYWc0ID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldWy0teF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1bKyt4XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRDZWxsQXJvdW5kQXJlYSA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgbGV0IGNlbGxzID0gW107XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0QmVmb3JlKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldEFmdGVyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldE92ZXIoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0VW5kZXIoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzEoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzIoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzMoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzQoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzID0gY2VsbHMuZmlsdGVyKChjZWxsKSA9PiBjZWxsICE9PSB1bmRlZmluZWQpO1xuICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERpYWRzID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnMSh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnMih4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnMyh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnNCh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMgPSBjZWxscy5maWx0ZXIoKGNlbGwpID0+IGNlbGwgIT09IHVuZGVmaW5lZCk7XG4gICAgICAgIHJldHVybiBjZWxscztcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRDZWxsQXJvdW5kQXJlYSwgZ2V0RGlhZHMgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgQ3Jvc3NBdHRyaWJ1dGVzID0gKCgpID0+IHtcbiAgICBjb25zdCBsaW5lID0gW1xuICAgICAgICB7IG5hbWU6ICdzdHJva2UnLCB2YWw6ICdyZWQnIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS13aWR0aCcsIHZhbDogJzUlJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2UtbGluZWNhcCcsIHZhbDogJ3JvdW5kJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2UtZGFzaGFycmF5JywgdmFsOiAnMTIwJScgfSxcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlLWRhc2hvZmZzZXQnLCB2YWw6ICcxMjAlJyB9XG4gICAgXTtcbiAgICBjb25zdCBsZWZ0RGlhZyA9IFtcbiAgICAgICAgeyBuYW1lOiAneDEnLCB2YWw6ICcxMCUnIH0sXG4gICAgICAgIHsgbmFtZTogJ3kxJywgdmFsOiAnMTAlJyB9LFxuICAgICAgICB7IG5hbWU6ICd4MicsIHZhbDogJzkwJScgfSxcbiAgICAgICAgeyBuYW1lOiAneTInLCB2YWw6ICc5MCUnIH0sXG4gICAgXTtcbiAgICBjb25zdCByaWdodERpYWcgPSBbXG4gICAgICAgIHsgbmFtZTogJ3gyJywgdmFsOiAnMTAlJyB9LFxuICAgICAgICB7IG5hbWU6ICd5MicsIHZhbDogJzkwJScgfSxcbiAgICAgICAgeyBuYW1lOiAneDEnLCB2YWw6ICc5MCUnIH0sXG4gICAgICAgIHsgbmFtZTogJ3kxJywgdmFsOiAnMTAlJyB9LFxuICAgIF07XG4gICAgcmV0dXJuIHsgbGluZSwgbGVmdERpYWcsIHJpZ2h0RGlhZyB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IEhvcml6b250YWxMaW5lID0gKCgpID0+IHtcbiAgICBjb25zdCBob3Jpem9udGFsID0gW1xuICAgICAgICB7IG5hbWU6ICdzdHJva2UnLCB2YWw6ICdyZWQnIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS13aWR0aCcsIHZhbDogJ21pbigzdmggLDN2dyknIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS1saW5lY2FwJywgdmFsOiAncm91bmQnIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS1kYXNoYXJyYXknLCB2YWw6ICcxMDB2dycgfSxcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlLWRhc2hvZmZzZXQnLCB2YWw6ICcxMDB2dycgfSxcbiAgICAgICAgeyBuYW1lOiAneDEnLCB2YWw6ICcwdncnIH0sXG4gICAgICAgIHsgbmFtZTogJ3kxJywgdmFsOiAnMHZ3JyB9LFxuICAgICAgICB7IG5hbWU6ICd4MicsIHZhbDogJzEwMHZ3JyB9LFxuICAgICAgICB7IG5hbWU6ICd5MicsIHZhbDogJzB2dycgfSxcbiAgICBdXG4gICAgcmV0dXJuIHsgaG9yaXpvbnRhbCB9O1xufSkoKTsiLCJpbXBvcnQgY3Jvc3NBdWRpbyBmcm9tICcuLi8uLi92aWV3cy9hdWRpby9jcm9zcy5tcDMnO1xuaW1wb3J0IG1pc3NIaXQgZnJvbSAnLi4vLi4vdmlld3MvYXVkaW8vc2hvdC5tcDMnO1xuaW1wb3J0IGJvb21TaGlwIGZyb20gJy4uLy4uL3ZpZXdzL2F1ZGlvL2Jvb20ubXAzJztcbmltcG9ydCBjbGljayBmcm9tICcuLi8uLi92aWV3cy9hdWRpby9jbGlja1BsYXkubXAzJztcbmltcG9ydCB0aW1lciBmcm9tICcuLi8uLi92aWV3cy9hdWRpby90aW1lci5tcDMnO1xuaW1wb3J0IHdpblNvdW5kIGZyb20gJy4uLy4uL3ZpZXdzL2F1ZGlvL3dpbi5tcDMnO1xuaW1wb3J0IGxvc2VTb3VuZCBmcm9tICcuLi8uLi92aWV3cy9hdWRpby9sb3NlLm1wMyc7XG5cbmV4cG9ydCBjb25zdCBkcmF3Q3Jvc3MgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhjcm9zc0F1ZGlvKVxuICAgIGF1ZGlvLnBsYXliYWNrUmF0ZSA9IDM7XG4gICAgYXVkaW8udm9sdW1lID0gMC41O1xuICAgIHJldHVybiBhdWRpbztcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBtaXNzRWZmZWN0ID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8obWlzc0hpdCk7XG4gICAgYXVkaW8ucGxheWJhY2tSYXRlID0gMjtcbiAgICBhdWRpby52b2x1bWUgPSAwLjQ7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGtpbGxTaGlwRWZmZWN0ID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oYm9vbVNoaXApO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDAuMjtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3QgY2xpY2tFZmZlY3QgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhjbGljayk7XG4gICAgYXVkaW8udm9sdW1lID0gMTtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3QgdGltZXJFZmZlY3QgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyh0aW1lcik7XG4gICAgYXVkaW8udm9sdW1lID0gMTtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3Qgd2luID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8od2luU291bmQpO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDE7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGxvc2UgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhsb3NlU291bmQpO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDE7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTsiLCJpbXBvcnQgeyBjcmVhdGVDcm9zc1NWRywgdmlld0Nyb3NzIH0gZnJvbSBcIi4uLy4uL3ZpZXdzL25vZGVzL21hcmtlcnNcIjtcbmltcG9ydCB7IGNyZWF0ZVRpbWVyU1ZHLCB2aWV3VGltZXIgfSBmcm9tIFwiLi4vLi4vdmlld3Mvbm9kZXMvdGltZXJcIjtcblxuZXhwb3J0IGNvbnN0IFRlbXBsYXRlID0gKHN2ZykgPT4ge1xuICAgIGxldCBhbmltYXRpb25zO1xuICAgIGNvbnN0IGdldFN2ZyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgYW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICAgICAgICBhbmltYXRpb24uZmluaXNoKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0QW5pbWF0aW9ucyA9ICh2YWwpID0+IHtcbiAgICAgICAgYW5pbWF0aW9ucyA9IHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZXRBbmltYXRpb25zLCBnZXRTdmcsIGFuaW1hdGlvbnMsIHJlc2V0IH07XG59XG5cbmV4cG9ydCBjb25zdCBDcm9zcyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBUZW1wbGF0ZShjcmVhdGVDcm9zc1NWRygpKTtcblxuICAgIGNvbnN0IHZpZXcgPSAoKSA9PiB7XG4gICAgICAgIHByb3RvdHlwZS5zZXRBbmltYXRpb25zKHZpZXdDcm9zcyhwcm90b3R5cGUuZ2V0U3ZnKCkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgdmlldyB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IFRpbWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFRlbXBsYXRlKGNyZWF0ZVRpbWVyU1ZHKCkpO1xuXG4gICAgY29uc3QgdmlldyA9ICgpID0+IHtcbiAgICAgICAgcHJvdG90eXBlLnNldEFuaW1hdGlvbnModmlld1RpbWVyKHByb3RvdHlwZS5nZXRTdmcoKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyB2aWV3IH0pO1xufSIsImltcG9ydCB7IHNldExpc3RlbmVyc0ZvckxpbmtzIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JMaW5rc1wiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yQ2VsbHMsIHNldExpc3RlbmVyc0ZvckV4aXRCdXR0b24sIHNldExpc3RlbmVyc0ZvclBsYXlCdXR0b24gfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclBsYXlcIjtcbmltcG9ydCB7IHNldExpc3RlbmVyc2ZvclBvcHVwcyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yUG9wdXBzXCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JTaGlwcyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yU2hpcHNcIjtcbmltcG9ydCB7IHJlbW92ZUhpZGRlbiwgc2V0SGlkZGVuLCBzZXRMb3dPcGFjaXR5IH0gZnJvbSBcIi4uL3ZpZXdzL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZVwiO1xuaW1wb3J0IHsgdmlld0FjY3VyYXRlSGl0LCB2aWV3TWlzc0hpdCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9oaXRzXCI7XG5pbXBvcnQgeyB2aWV3TG9zZVBvcHVwLCB2aWV3V2luUG9wdXAgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvcG9wdXBzXCI7XG5pbXBvcnQgeyB2aWV3UHJvZmlsZSB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9wcm9maWxlXCI7XG5pbXBvcnQgeyB2aWV3U2hpcHlhcmQgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvc2hpcHlhcmRcIjtcbmltcG9ydCB7IGhpZGRlbkludGVyZmFjZUJlZm9yZVN0YXJ0UGxheSwgc2V0QWlNb3ZlRGVzaWduLCBzZXRNaW5pU2hpcHlhcmREZXNpZ24sIHNldFBsYXllck1vdmVEZXNpZ24sIHZpZXdJbnRlcmZhY2VBZnRlckVuZEdhbWUgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvdWlcIjtcbmltcG9ydCB7IENlbGxIYW5kbGVyIH0gZnJvbSBcIi4vY2VsbEhhbmRsZXJcIjtcbmltcG9ydCB7IGtpbGxTaGlwRWZmZWN0LCBtaXNzRWZmZWN0IH0gZnJvbSBcIi4vZWxlbWVudHMvYXVkaW9FZmZlY3RzXCI7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBUaW1lTWFuaXB1bGF0b3JzIH0gZnJvbSBcIi4vdGltZU1hbmlwdWxhdG9yc1wiO1xuXG5leHBvcnQgY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgICBsZXQgcGxheWVyID0gUHJvZmlsZSgxLCAnUGxheWVyJywgJ3BsYXllci1ib2FyZCcsICcuYWktbWluaS1zaGlweWFyZCcpO1xuICAgIGxldCBhaSA9IFByb2ZpbGUoMCwgJ0FJJywgJ2FpLWJvYXJkJywgJy5wbGF5ZXItbWluaS1zaGlweWFyZCcpO1xuICAgIGNvbnN0IHRpbWVNYW5pcHVsYXRvcnMgPSBUaW1lTWFuaXB1bGF0b3JzKCk7XG4gICAgY29uc3QgZ2FtZUhhbmRsZXIgPSBHYW1lSGFuZGxlcihhaSwgcGxheWVyLCB0aW1lTWFuaXB1bGF0b3JzKTtcblxuICAgIGNvbnN0IHZpZXdEZWZhdWxJbnRlcmZhY2VzID0gKCkgPT4ge1xuICAgICAgICB2aWV3UHJvZmlsZShwbGF5ZXIpO1xuICAgICAgICB2aWV3UHJvZmlsZShhaSk7XG4gICAgICAgIHZpZXdTaGlweWFyZChwbGF5ZXIuZ2V0U2hpcHlhcmQoKSk7XG4gICAgICAgIHZpZXdTaGlweWFyZChwbGF5ZXIuZ2V0TWluaVNoaXB5YXJkKCkpO1xuICAgICAgICB2aWV3U2hpcHlhcmQoYWkuZ2V0TWluaVNoaXB5YXJkKCkpO1xuICAgICAgICBzZXRNaW5pU2hpcHlhcmREZXNpZ24ocGxheWVyLmdldE1pbmlTaGlweWFyZCgpKVxuICAgICAgICBzZXRNaW5pU2hpcHlhcmREZXNpZ24oYWkuZ2V0TWluaVNoaXB5YXJkKCkpXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVmYXVsdExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yU2hpcHMocGxheWVyLmdldFNoaXB5YXJkKCkuZ2V0QWxsU2hpcHMoKSk7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckxpbmtzKCk7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvclBsYXlCdXR0b24oKTtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yRXhpdEJ1dHRvbigpO1xuICAgICAgICBzZXRMaXN0ZW5lcnNmb3JQb3B1cHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRHYW1lUGxheUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yQ2VsbHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgc2V0RGVmYXVsdExpc3RlbmVycygpO1xuICAgICAgICB2aWV3RGVmYXVsSW50ZXJmYWNlcygpO1xuICAgICAgICBnYW1lSGFuZGxlci5maWxsQm9hcmRzVG9SYW5kb21TaGlwcygpO1xuICAgICAgICBhaS5nZXRHYW1lYm9hcmQoKS5oaWRkZW5TaGlwcygpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXkgPSAoKSA9PiB7XG4gICAgICAgIGdhbWVIYW5kbGVyLnNldERlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgICBzZXRHYW1lUGxheUxpc3RlbmVycygpO1xuICAgICAgICBoaWRkZW5JbnRlcmZhY2VCZWZvcmVTdGFydFBsYXkoKTtcbiAgICAgICAgcGxheUdhbWVTdGF0ZSgpO1xuICAgICAgICByZW1vdmVIaWRkZW4oYWkuZ2V0TWluaVNoaXB5YXJkKCkuZ2V0Tm9kZSgpKVxuICAgICAgICByZW1vdmVIaWRkZW4ocGxheWVyLmdldE1pbmlTaGlweWFyZCgpLmdldE5vZGUoKSlcbiAgICAgICAgZ2FtZUhhbmRsZXIucGxheWVyTW92ZSgpO1xuICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnNldFRpbWVPZlRoZU1vdmUoKTtcbiAgICAgICAgc2V0TWluaVNoaXB5YXJkRGVzaWduKHBsYXllci5nZXRNaW5pU2hpcHlhcmQoKSlcbiAgICAgICAgc2V0TWluaVNoaXB5YXJkRGVzaWduKGFpLmdldE1pbmlTaGlweWFyZCgpKVxuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9ICgpID0+IHtcbiAgICAgICAgc2V0SGlkZGVuKGFpLmdldE1pbmlTaGlweWFyZCgpLmdldE5vZGUoKSlcbiAgICAgICAgc2V0SGlkZGVuKHBsYXllci5nZXRNaW5pU2hpcHlhcmQoKS5nZXROb2RlKCkpXG4gICAgICAgIGFpLmdldE1pbmlTaGlweWFyZCgpLnJlc2V0KClcbiAgICAgICAgcGxheWVyLmdldE1pbmlTaGlweWFyZCgpLnJlc2V0KClcbiAgICAgICAgdGltZU1hbmlwdWxhdG9ycy5yZXNldCgpO1xuICAgICAgICB2aWV3SW50ZXJmYWNlQWZ0ZXJFbmRHYW1lKCk7XG4gICAgICAgIGVuZEdhbWVTdGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXlHYW1lU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKS5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0JylcbiAgICAgICAgcGxheWVyLmdldEdhbWVib2FyZCgpLmJsb2NrU2hpcHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbmRHYW1lU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKS5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JylcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkuYmxvY2soKTtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkucmVzZXQoKTtcbiAgICAgICAgcGxheWVyLmdldEdhbWVib2FyZCgpLnVuYmxvY2tTaGlwcygpO1xuICAgICAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucmVzZXQoKTtcbiAgICAgICAgZ2FtZUhhbmRsZXIuZmlsbEJvYXJkc1RvUmFuZG9tU2hpcHMoKTtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkuaGlkZGVuU2hpcHMoKTtcbiAgICAgICAgc2V0QWlNb3ZlRGVzaWduKGFpLCBwbGF5ZXIpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhcnQsIHBsYXksIGVuZCwgYWksIHBsYXllciwgZ2FtZUhhbmRsZXIgfVxufVxuXG5jb25zdCBHYW1lSGFuZGxlciA9IChhaSwgcGxheWVyLCB0aW1lTWFuaXB1bGF0b3JzKSA9PiB7XG4gICAgbGV0IG1vdmU7XG4gICAgbGV0IHBsYXllckNlbGxzID0gWy4uLnBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCldO1xuICAgIGxldCBhaUNlbGxzID0gWy4uLmFpLmdldEdhbWVib2FyZCgpLmdldFVuc3RydWN0ZWRDb250YWluZXIoKV07XG5cbiAgICBjb25zdCBzZXREZWZhdWx0U2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIG1vdmUgPSAncGxheWVyJztcbiAgICAgICAgcGxheWVyQ2VsbHMgPSBbLi4ucGxheWVyLmdldEdhbWVib2FyZCgpLmdldFVuc3RydWN0ZWRDb250YWluZXIoKV07XG4gICAgICAgIGFpQ2VsbHMgPSBbLi4uYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcigpXTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBtb3ZlID09PSAnYWknID8gYWkgOiBwbGF5ZXI7XG4gICAgfVxuXG4gICAgY29uc3Qgc3dpdGNoTW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGltZU1hbmlwdWxhdG9ycy5yZXNldCgpO1xuICAgICAgICBpZiAoaXNFbmRHYW1lKCkpIHtcbiAgICAgICAgICAgIG9wZW5Qb3B1cCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKG1vdmUgPT09ICdhaScpIHtcbiAgICAgICAgICAgIHRpbWVNYW5pcHVsYXRvcnMuc2V0VGltZU9mVGhlTW92ZSgpO1xuICAgICAgICAgICAgbW92ZSA9ICdwbGF5ZXInO1xuICAgICAgICAgICAgcGxheWVyTW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW92ZSA9ICdhaSc7XG4gICAgICAgICAgICBhaU1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzRW5kR2FtZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGlzRW5kID0gaXNQbGF5ZXJMb3NlKHBsYXllcikgfHwgaXNQbGF5ZXJMb3NlKGFpKTtcbiAgICAgICAgcmV0dXJuIGlzRW5kO1xuICAgIH1cblxuICAgIGNvbnN0IGlzUGxheWVyTG9zZSA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IGlzTG9zZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gcGxheWVyLmdldFNoaXB5YXJkKCkuZ2V0QWxsU2hpcHMoKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmlzTGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgaXNMb3NlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBpc0xvc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyTW92ZSA9ICgpID0+IHtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkudW5ibG9jaygpO1xuICAgICAgICBzZXRQbGF5ZXJNb3ZlRGVzaWduKGFpLCBwbGF5ZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrQ2VsbCA9IChjZWxsKSA9PiB7XG4gICAgICAgIGlmIChhaUNlbGxzLmluY2x1ZGVzKGNlbGwpKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGFpQ2VsbHMuaW5kZXhPZihjZWxsKTtcbiAgICAgICAgICAgIGFpLmdldEdhbWVib2FyZCgpLmJsb2NrKCk7XG4gICAgICAgICAgICB0YWtlSGl0KGFpQ2VsbHMuc3BsaWNlKGluZGV4LCAxKVswXSk7XG4gICAgICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnNldFRpbWVCZXR3ZWVuTW92ZXMoNTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFpTW92ZSA9ICgpID0+IHtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkuYmxvY2soKTtcbiAgICAgICAgc2V0QWlNb3ZlRGVzaWduKGFpLCBwbGF5ZXIpO1xuICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnNldEFpU3BlZWRPZlRvdWdodChwbGF5ZXJDZWxscyk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFrZUhpdCA9IChjZWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBjZWxsLmdldE9jY3VwYW50KCk7XG4gICAgICAgIGNlbGwuc2V0VGhlSGl0KCk7XG4gICAgICAgIGlmIChzaGlwID09PSAnZnJlZScpIHtcbiAgICAgICAgICAgIHZpZXdNaXNzSGl0KGNlbGwpO1xuICAgICAgICAgICAgbWlzc0VmZmVjdC5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3QWNjdXJhdGVIaXQoY2VsbCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tMaXZlU2hpcChzaGlwKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXRBbGxEaWFncyhjZWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW92ZSA9IG1vdmUgPT09ICdhaScgPyAncGxheWVyJyA6ICdhaSc7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tMaXZlU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGlmICghc2hpcC5pc0xpdmUoKSkge1xuICAgICAgICAgICAga2lsbFNoaXBFZmZlY3QucGxheSgpO1xuICAgICAgICAgICAgc2hpcC5raWxsKCk7XG4gICAgICAgICAgICBsZXQgbWluaVNoaXAgPSBnZXRNaW5pU2hpcChzaGlwKTtcbiAgICAgICAgICAgIG1pbmlTaGlwLmtpbGwoKTtcbiAgICAgICAgICAgIGhpdEFsbEFyZWFBcm91bmRTaGlwKHNoaXApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXAuaXNMaXZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGl0QWxsQXJlYUFyb3VuZFNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBhcmVhID0gc2hpcC5nZXRXYXRlckFyZWFzKCkuZ2V0QXJlYUFyb3VuZFRoZVNoaXAoKTtcbiAgICAgICAgYXJlYS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgaWYgKCFjZWxsLmlzSGl0KCkpIHtcbiAgICAgICAgICAgICAgICBzZXRMb3dPcGFjaXR5KGNlbGwuZ2V0Q2VsbE5vZGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2aWV3TWlzc0hpdChjZWxsKTtcbiAgICAgICAgICAgIHJlbW92ZUNlbGwoY2VsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNlbGwgPSAoY2VsbCkgPT4ge1xuICAgICAgICBsZXQgY2VsbHMgPSBtb3ZlID09PSAnYWknID8gcGxheWVyQ2VsbHMgOiBhaUNlbGxzO1xuICAgICAgICBsZXQgaW5kZXggPSBjZWxscy5pbmRleE9mKGNlbGwpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgY2VsbHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhpdEFsbERpYWdzID0gKGhpdENlbGwpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IENlbGxIYW5kbGVyKCk7XG4gICAgICAgIGNvbnN0IHggPSBoaXRDZWxsLmdldFhZKCkueDtcbiAgICAgICAgY29uc3QgeSA9IGhpdENlbGwuZ2V0WFkoKS55O1xuICAgICAgICBjb25zdCBvcHBvbmVudCA9IG1vdmUgPT09ICdhaScgPyBwbGF5ZXIgOiBhaTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gb3Bwb25lbnQuZ2V0R2FtZWJvYXJkKCkuZ2V0U3RydWN0ZWRDb250YWluZXIoKTtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBoYW5kbGVyLmdldERpYWRzKHgsIHksIHBhcmVudCk7XG4gICAgICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAoY2VsbCAhPT0gaGl0Q2VsbCkge1xuICAgICAgICAgICAgICAgIGlmICghY2VsbC5pc0hpdCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExvd09wYWNpdHkoY2VsbC5nZXRDZWxsTm9kZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmlld01pc3NIaXQoY2VsbCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2VsbChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TWluaVNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlID0gc2hpcC5nZXRUeXBlKCk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVBsYXllciA9IGdldEFjdGl2ZVBsYXllcigpO1xuICAgICAgICBjb25zdCBzaGlwcyA9IGFjdGl2ZVBsYXllci5nZXRNaW5pU2hpcHlhcmQoKS5nZXRTaGlwc09mVHlwZSh0eXBlKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNoaXBzW2ldLmlzTGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNoaXBzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmlsbEJvYXJkc1RvUmFuZG9tU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGFpLmdldEdhbWVib2FyZCgpLnJhbmRvbUZpbGxpbmdPZlNoaXBzKCk7XG4gICAgICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS5yYW5kb21GaWxsaW5nT2ZTaGlwcygpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wZW5Qb3B1cCA9ICgpID0+IHtcbiAgICAgICAgbW92ZSA9PT0gJ3BsYXllcicgPyB2aWV3TG9zZVBvcHVwKCkgOiB2aWV3V2luUG9wdXAoKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNoZWNrQ2VsbCwgcGxheWVyTW92ZSwgc2V0RGVmYXVsdFNldHRpbmdzLCBzd2l0Y2hNb3ZlLCB0YWtlSGl0LCBpc0VuZEdhbWUsIGZpbGxCb2FyZHNUb1JhbmRvbVNoaXBzIH07XG59IiwiaW1wb3J0IHsgc2V0TnVsbE9wYWNpdHkgfSBmcm9tICcuLi92aWV3cy9hbmltYXRpb25zL2NoYW5nZVZpc2libGUnO1xuaW1wb3J0IHsgdmlld1NoaXBPblJhbmRvbUNlbGwgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9zaGlwJztcbmltcG9ydCB7IE1hcmluZVNlY3RvciB9IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2dhbWVDb25maWcnO1xuXG5leHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKG5hbWUsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gQ29uZmlnLkdhbWVib2FyZC53aWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBDb25maWcuR2FtZWJvYXJkLmhlaWdodDtcbiAgICBjb25zdCBjb250YWluZXJzID0gZmlsbEJvYXJkKHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfWApO1xuXG4gICAgY29uc3QgZ2V0U3RydWN0ZWRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250YWluZXJzLmdldFN0cnVjdGVkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFVuc3RydWN0ZWRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250YWluZXJzLmdldFVuc3RydWN0ZWQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgY29udGFpbmVycy5nZXRVbnN0cnVjdGVkKCkuZm9yRWFjaCgoc2VjdG9yKSA9PiB7XG4gICAgICAgICAgICBzZWN0b3IuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBsYXllci5nZXRTaGlweWFyZCgpLnJlc2V0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRvbUZpbGxpbmdPZlNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBsZXQgc2hpcHMgPSBwbGF5ZXIuZ2V0U2hpcHlhcmQoKS5nZXRBbGxTaGlwcygpO1xuXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAuc2V0UmFuZG9tT3JpZW50YXRpb24oKTtcbiAgICAgICAgICAgIHZpZXdTaGlwT25SYW5kb21DZWxsKHNoaXAsIFsuLi5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCldKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGJsb2NrU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIG5vZGUucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdibG9jaycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB1bmJsb2NrU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIG5vZGUucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdibG9jaycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBoaWRkZW5TaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgICAgICBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBzaGlwLnN0eWxlLmJvcmRlciA9ICcwcHggYmx1ZSBzb2xpZCc7XG4gICAgICAgIH0pO1xuICAgICAgICBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVjaycpLmZvckVhY2goZGVjayA9PiB7XG4gICAgICAgICAgICBzZXROdWxsT3BhY2l0eShkZWNrKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBibG9jayA9ICgpID0+IHtcbiAgICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5jbGFzc0xpc3QuYWRkKCdibG9jaycpO1xuICAgIH1cblxuICAgIGNvbnN0IHVuYmxvY2sgPSAoKSA9PiB7XG4gICAgICAgIG5vZGUucXVlcnlTZWxlY3RvcignLmJvYXJkJykuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2snKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByYW5kb21GaWxsaW5nT2ZTaGlwcyxcbiAgICAgICAgcmVzZXQsXG4gICAgICAgIGdldFBsYXllcixcbiAgICAgICAgZ2V0U3RydWN0ZWRDb250YWluZXIsXG4gICAgICAgIGdldFVuc3RydWN0ZWRDb250YWluZXIsXG4gICAgICAgIGdldFNpemUsXG4gICAgICAgIGdldE5vZGUsXG4gICAgICAgIGJsb2NrU2hpcHMsXG4gICAgICAgIHVuYmxvY2tTaGlwcyxcbiAgICAgICAgaGlkZGVuU2hpcHMsXG4gICAgICAgIGJsb2NrLFxuICAgICAgICB1bmJsb2NrXG4gICAgfTtcbn07XG5cbmNvbnN0IGZpbGxCb2FyZCA9ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gICAgbGV0IHN0cnVjdGVkID0gW107XG4gICAgbGV0IHVuc3RydWN0ZWQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgbGV0IGxpbmUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gTWFyaW5lU2VjdG9yKGosIGkpO1xuICAgICAgICAgICAgbGluZVtqXSA9IGNlbGw7XG4gICAgICAgICAgICB1bnN0cnVjdGVkLnB1c2goY2VsbCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RydWN0ZWRbaV0gPSBsaW5lO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFN0cnVjdGVkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3RydWN0ZWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFVuc3RydWN0ZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB1bnN0cnVjdGVkO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRTdHJ1Y3RlZCwgZ2V0VW5zdHJ1Y3RlZCB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBDb25maWcgPSAoKCkgPT4ge1xuICAgIGNvbnN0IEdhbWVib2FyZCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gMTA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDEwO1xuICAgICAgICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IEVsZW1lbnRzID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcFR5cGVzID0gWydmcmVnYXRzJywgJ2NhcmF2ZWxzJywgJ2RyYWtrYXJzJywgJ2JvYXRzJ107XG4gICAgICAgIGNvbnN0IG51bWJlck9mID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyZWdhdGVzID0gMTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmF2ZWxzID0gMjtcbiAgICAgICAgICAgIGNvbnN0IGRyYWtrYXJzID0gMztcbiAgICAgICAgICAgIGNvbnN0IGJvYXRzID0gNDtcbiAgICAgICAgICAgIHJldHVybiB7IGZyZWdhdGVzLCBjYXJhdmVscywgZHJha2thcnMsIGJvYXRzIH07XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgcmV0dXJuIHsgbnVtYmVyT2YsIHNoaXBUeXBlcyB9O1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4geyBHYW1lYm9hcmQsIEVsZW1lbnRzIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IHsgU2hpcHlhcmQgfSBmcm9tICcuL3NoaXB5YXJkJztcblxuY29uc3QgUGxheWVyID0gKGlkLCBuYW1lKSA9PiB7XG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldElkLCBnZXROYW1lIH07XG59O1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZSA9IChpZCwgbmFtZSwgbm9kZUlkLCBtaW5pU2hpcHlhcmRJZCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFBsYXllcihpZCwgbmFtZSk7XG5cbiAgICBsZXQgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKG5vZGVJZCwgcHJvdG90eXBlKTtcbiAgICBsZXQgc2hpcHlhcmQgPSBTaGlweWFyZChwcm90b3R5cGUpO1xuICAgIGxldCBtaW5pU2hpcHlhcmQgPSBTaGlweWFyZChwcm90b3R5cGUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWluaVNoaXB5YXJkSWQpKTtcblxuICAgIGNvbnN0IGdldEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0U2hpcHlhcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlweWFyZDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0TWluaVNoaXB5YXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbWluaVNoaXB5YXJkO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyBnZXRHYW1lYm9hcmQsIGdldFNoaXB5YXJkLCBnZXRNaW5pU2hpcHlhcmQgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IFNlc3Npb24gPSAoKCkgPT4ge1xuICAgIGxldCBhY3RpdmVTaGlwID0gbnVsbDtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBkb3VibGVJbmRleCA9ICdzaGlwJztcbiAgICBsZXQgY3VycmVudEVsZW1lbnQgPSBudWxsO1xuICAgIGxldCBjaG9pc2VkQ2VsbCA9IG51bGw7XG4gICAgbGV0IG1hbnVhbE1vZGUgPSBmYWxzZTtcbiAgICByZXR1cm4geyBtYW51YWxNb2RlLCBhY3RpdmVTaGlwLCBpbmRleCwgZG91YmxlSW5kZXgsIGN1cnJlbnRFbGVtZW50LCBjaG9pc2VkQ2VsbCB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0U2Vzc2lvbiA9ICgpID0+IHtcbiAgICBTZXNzaW9uLmFjdGl2ZVNoaXAgPSBudWxsO1xuICAgIFNlc3Npb24uaW5kZXggPSAwO1xuICAgIFNlc3Npb24uZG91YmxlSW5kZXggPSAnc2hpcCc7XG4gICAgU2Vzc2lvbi5jdXJyZW50RWxlbWVudCA9IG51bGw7XG59O1xuIiwiaW1wb3J0IHsgcmFuZG9tSW50RnJvbUludGVydmFsIH0gZnJvbSAnLi4vaGVscGVyL2hlbHBlcic7XG5pbXBvcnQgeyBzZXRMb3dPcGFjaXR5IH0gZnJvbSAnLi4vdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlJztcbmltcG9ydCB7IGdldE5vZGUgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9mYWN0b3J5JztcbmltcG9ydCB7IHJlc2V0U2hpcFN0eWxlLCBzZXREZWF0aFN0eWxlT25TaGlwLCBzZXRTdGFuZGFydEhvcml6b250YWxTaGlwRGVzaWduLCBzZXRTdGFuZGFydFZlcnRpY2FsU2hpcERlc2lnbiB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL3NoaXAnO1xuaW1wb3J0IHsgRGVjayB9IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgeyBTaGlwV2F0ZXJBcmVhcyB9IGZyb20gJy4vd2F0ZXJBcmVhcyc7XG5cbmV4cG9ydCBjb25zdCBTaGlwID0gKGxlbmd0aCwgcGxheWVyLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Tm9kZSgnc2hpcCcsICdob3Jpem9udGFsJyk7XG4gICAgbGV0IGJvZHkgPSBbXTtcbiAgICBsZXQgbGl2ZSA9IHRydWU7XG4gICAgbGV0IGhvcml6b250YWwgPSB0cnVlO1xuICAgIGxldCBoZWFkID0gbnVsbDtcbiAgICBsZXQgc2hpcCA9IHt9O1xuICAgIGxldCBzaGlwV2F0ZXJBcmVhcyA9IFNoaXBXYXRlckFyZWFzKHBsYXllciwgc2hpcCk7XG5cbiAgICBjb25zdCBzZXRZb3Vyc2VsZiA9ICh0aGlzU2hpcCkgPT4ge1xuICAgICAgICBzaGlwID0gdGhpc1NoaXA7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0WW91cnNlbGYgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGxDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkZWNrID0gRGVjayhpKTtcbiAgICAgICAgICAgIGJvZHkucHVzaChkZWNrKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWNrLmdldENlbGxOb2RlKCkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldE9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgICAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpKSB7XG4gICAgICAgICAgICBzZXRWZXJ0aWNhbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgICAgICAgIHNldEhvcml6b250YWwoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0YWtlRG93bldhdGVyQXJlYXMgPSAoKSA9PiB7XG4gICAgICAgIHNoaXBXYXRlckFyZWFzLmNsZWFyQXJlYXMoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGF1bmNoU2hpcE9uV2F0ZXIgPSAobkhlYWQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB3YXRlckFyZWFzID0gZ2V0V2F0ZXJBcmVhKG5IZWFkKTtcbiAgICAgICAgICAgIGxldCBhY2Vzc2liaWxpdHkgPSB3YXRlckFyZWFzLmNoZWNrQXJlYSgpO1xuICAgICAgICAgICAgaWYgKGFjZXNzaWJpbGl0eSkge1xuICAgICAgICAgICAgICAgIHRha2VEb3duV2F0ZXJBcmVhcygpO1xuICAgICAgICAgICAgICAgIHNoaXBXYXRlckFyZWFzID0gd2F0ZXJBcmVhcztcbiAgICAgICAgICAgICAgICBsaW5rU2hpcFdpdGhGaWVsZCgpO1xuICAgICAgICAgICAgICAgIHNoaXBXYXRlckFyZWFzLm9jY3VweUFyZWFzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNlc3NpYmlsaXR5O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGxpbmtTaGlwV2l0aEZpZWxkID0gKCkgPT4ge1xuICAgICAgICBsZXQgYXJlYSA9IHNoaXBXYXRlckFyZWFzLmdldEFyZWFVbmRlclRoZVNoaXAoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgeHkgPSBhcmVhW2ldLmdldFhZKCk7XG4gICAgICAgICAgICBib2R5W2ldLnNldFhZKHh5LngsIHh5LnkpO1xuICAgICAgICAgICAgYXJlYVtpXS5zZXRMaW5rZWREZWNrKGJvZHlbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0V2F0ZXJBcmVhID0gKGhlYWQpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkID0gZ2V0Qm9hcmQoKS5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpO1xuICAgICAgICBsZXQgYXJlYXMgPSBTaGlwV2F0ZXJBcmVhcyhwbGF5ZXIsIHNoaXApO1xuICAgICAgICBsZXQgeCA9IGhlYWQuZ2V0WFkoKS54O1xuICAgICAgICBsZXQgeSA9IGhlYWQuZ2V0WFkoKS55O1xuICAgICAgICBsZXQgbmVjZXNzYXJ5U2VjdG9ycyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZWNlc3NhcnlTZWN0b3JzLnB1c2goYm9hcmRbeV1beF0pO1xuICAgICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICB4Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcmVhcy5zZXRBcmVhcyhuZWNlc3NhcnlTZWN0b3JzKTtcbiAgICAgICAgcmV0dXJuIGFyZWFzO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0xpdmUgPSAoKSA9PiB7XG4gICAgICAgIGxpdmUgPSBmYWxzZTtcblxuICAgICAgICBib2R5LmZvckVhY2goKGRlY2spID0+IHtcbiAgICAgICAgICAgIGlmICghZGVjay5pc0hpdCgpKSB7XG4gICAgICAgICAgICAgICAgbGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBsaXZlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRCb2R5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYm9keTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRIZWFkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaGVhZDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0SGVhZCA9IChuSGVhZCkgPT4ge1xuICAgICAgICBoZWFkID0gbkhlYWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhvcml6b250YWw7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yaWVudGF0aW9uU3dpdGNoID0gKCkgPT4ge1xuICAgICAgICBob3Jpem9udGFsID0gIWhvcml6b250YWw7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFZlcnRpY2FsID0gKCkgPT4ge1xuICAgICAgICBzZXRTdGFuZGFydFZlcnRpY2FsU2hpcERlc2lnbihjb250YWluZXIsIGxlbmd0aCk7XG4gICAgICAgIGhvcml6b250YWwgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0SG9yaXpvbnRhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhbmRhcnRIb3Jpem9udGFsU2hpcERlc2lnbihjb250YWluZXIsIGxlbmd0aCk7XG4gICAgICAgIGhvcml6b250YWwgPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRSYW5kb21PcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgcmFuZG9tSW50RnJvbUludGVydmFsKDAsIDEpID09PSAxID8gc2V0SG9yaXpvbnRhbCgpIDogc2V0VmVydGljYWwoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBoZWFkID0gbnVsbDtcbiAgICAgICAgaWYgKCFjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaW5pLXNoaXAnKSkge1xuICAgICAgICAgICAgc2V0SG9yaXpvbnRhbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlc2V0Qm9keSgpO1xuICAgICAgICBzaGlwV2F0ZXJBcmVhcy5jbGVhckFyZWFzKCk7XG4gICAgICAgIHNoaXBXYXRlckFyZWFzID0gU2hpcFdhdGVyQXJlYXMocGxheWVyLCBzaGlwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRCb2R5ID0gKCkgPT4ge1xuICAgICAgICByZXNldFNoaXBTdHlsZShjb250YWluZXIpO1xuICAgICAgICBib2R5LmZvckVhY2goZGVjayA9PiB7XG4gICAgICAgICAgICBkZWNrLnJlc2V0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuXG4gICAgY29uc3Qga2lsbCA9ICgpID0+IHtcbiAgICAgICAgYm9keS5mb3JFYWNoKGRlY2sgPT4ge1xuICAgICAgICAgICAgc2V0TG93T3BhY2l0eShkZWNrLmdldENlbGxOb2RlKCkpO1xuICAgICAgICAgICAgZGVjay5zZXRUaGVIaXQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgc2V0RGVhdGhTdHlsZU9uU2hpcChjb250YWluZXIpO1xuICAgICAgICBsaXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0V2F0ZXJBcmVhcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBXYXRlckFyZWFzXG4gICAgfVxuXG4gICAgZmlsbENvbnRhaW5lcigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0UmFuZG9tT3JpZW50YXRpb24sXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBzZXRIb3Jpem9udGFsLFxuICAgICAgICBzZXRWZXJ0aWNhbCxcbiAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgIHRha2VEb3duV2F0ZXJBcmVhcyxcbiAgICAgICAgbGF1bmNoU2hpcE9uV2F0ZXIsXG4gICAgICAgIG9yaWVudGF0aW9uU3dpdGNoLFxuICAgICAgICBzZXRPcmllbnRhdGlvbixcbiAgICAgICAgaXNMaXZlLFxuICAgICAgICBnZXRCb2R5LFxuICAgICAgICBnZXRDb250YWluZXIsXG4gICAgICAgIGdldEhlYWQsXG4gICAgICAgIHNldEhlYWQsXG4gICAgICAgIGlzSG9yaXpvbnRhbCxcbiAgICAgICAgc2V0WW91cnNlbGYsXG4gICAgICAgIGdldFlvdXJzZWxmLFxuICAgICAgICBnZXRUeXBlLFxuICAgICAgICBraWxsLFxuICAgICAgICBnZXRXYXRlckFyZWFzXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBGcmVnYXQgPSAobWFya2VyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCg0LCBtYXJrZXIsICdmcmVnYXRzJyk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCBtYXJrZXIpO1xufTtcblxuZXhwb3J0IGNvbnN0IENhcmF2ZWwgPSAobWFya2VyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgzLCBtYXJrZXIsICdjYXJhdmVscycpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgRHJha2thciA9IChtYXJrZXIpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDIsIG1hcmtlciwgJ2RyYWtrYXJzJyk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBCb2F0ID0gKG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFNoaXAoMSwgbWFya2VyLCAnYm9hdHMnKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBCb2F0LCBDYXJhdmVsLCBEcmFra2FyLCBGcmVnYXQgfSBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgY29uc3QgU2hpcHlhcmQgPSAocGxheWVyLCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXB5YXJkJykpID0+IHtcbiAgICBjb25zdCBmcmVnYXRzID0gRG9jayhDb25maWcuRWxlbWVudHMubnVtYmVyT2YuZnJlZ2F0ZXMsICdGcmVnYXQnLCBwbGF5ZXIpO1xuICAgIGNvbnN0IGNhcmF2ZWxzID0gRG9jayhDb25maWcuRWxlbWVudHMubnVtYmVyT2YuY2FyYXZlbHMsICdDYXJhdmVsJywgcGxheWVyKTtcbiAgICBjb25zdCBkcmFra2FycyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmRyYWtrYXJzLCAnRHJha2thcicsIHBsYXllcik7XG4gICAgY29uc3QgYm9hdHMgPSBEb2NrKENvbmZpZy5FbGVtZW50cy5udW1iZXJPZi5ib2F0cywgJ0JvYXQnLCBwbGF5ZXIpO1xuICAgIGNvbnN0IHNoaXBzID0gZnJlZ2F0c1xuICAgICAgICAuZ2V0U2hpcHMoKVxuICAgICAgICAuY29uY2F0KFxuICAgICAgICAgICAgY2FyYXZlbHNcbiAgICAgICAgICAgICAgICAuZ2V0U2hpcHMoKVxuICAgICAgICAgICAgICAgIC5jb25jYXQoZHJha2thcnMuZ2V0U2hpcHMoKS5jb25jYXQoYm9hdHMuZ2V0U2hpcHMoKSkpLFxuICAgICAgICApO1xuXG4gICAgY29uc3QgZ2V0U2hpcHNPZlR5cGUgPSAodHlwZSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2ZyZWdhdHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBmcmVnYXRzLmdldFNoaXBzKCk7XG4gICAgICAgICAgICBjYXNlICdjYXJhdmVscyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhcmF2ZWxzLmdldFNoaXBzKCk7XG4gICAgICAgICAgICBjYXNlICdkcmFra2Fycyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyYWtrYXJzLmdldFNoaXBzKCk7XG4gICAgICAgICAgICBjYXNlICdib2F0cyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvYXRzLmdldFNoaXBzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhGcmVnYXRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZnJlZ2F0cztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhDYXJhdmVscyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhcmF2ZWxzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREb2NrV2l0aERyYWtrYXJzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZHJha2thcnM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERvY2tXaXRoQm9hdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBib2F0cztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRBbGxTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0VtcHR5ID0gKCkgPT4ge1xuICAgICAgICBsZXQgbGF1bmNoZWRTaGlwcyA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcbiAgICAgICAgcmV0dXJuIGxhdW5jaGVkU2hpcHMubGVuZ3RoID09PSAwO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcC5yZXNldCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0U2hpcHNPZlR5cGUsXG4gICAgICAgIGlzRW1wdHksXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBnZXRBbGxTaGlwcyxcbiAgICAgICAgZ2V0UGxheWVyLFxuICAgICAgICBnZXREb2NrV2l0aEZyZWdhdHMsXG4gICAgICAgIGdldERvY2tXaXRoQ2FyYXZlbHMsXG4gICAgICAgIGdldERvY2tXaXRoRHJha2thcnMsXG4gICAgICAgIGdldERvY2tXaXRoQm9hdHMsXG4gICAgICAgIGdldE5vZGVcbiAgICB9O1xufTtcblxuY29uc3QgRG9jayA9IChjb3VudCwgc2hpcEJsdWVQcmludCwgcGxheWVyKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGNvbnN0IGZpbGxEb2NrID0gKGNvdW50LCBzaGlwQmx1ZVByaW50KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGJ1aWxkU2hpcChzaGlwQmx1ZVByaW50KTtcbiAgICAgICAgICAgIHNoaXAuc2V0WW91cnNlbGYoc2hpcCk7XG4gICAgICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGJ1aWxkU2hpcCA9IChibHVlUHJpbnQpID0+IHtcbiAgICAgICAgc3dpdGNoIChibHVlUHJpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ0ZyZWdhdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZyZWdhdChwbGF5ZXIpO1xuICAgICAgICAgICAgY2FzZSAnQ2FyYXZlbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhcmF2ZWwocGxheWVyKTtcbiAgICAgICAgICAgIGNhc2UgJ0RyYWtrYXInOlxuICAgICAgICAgICAgICAgIHJldHVybiBEcmFra2FyKHBsYXllcik7XG4gICAgICAgICAgICBjYXNlICdCb2F0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gQm9hdChwbGF5ZXIpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU29ycnksIGlsbGVnYWwgc2hpcCBibHVlcHJpbnQnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmaWxsRG9jayhjb3VudCwgc2hpcEJsdWVQcmludCk7XG5cbiAgICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRTaGlwcyB9O1xufTtcbiIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IGdldFJhbmRvbUNlbGwgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvc2hpcFwiO1xuaW1wb3J0IHsgdGltZXJFZmZlY3QgfSBmcm9tIFwiLi9lbGVtZW50cy9hdWRpb0VmZmVjdHNcIjtcbmltcG9ydCB7IFRpbWVyIH0gZnJvbSBcIi4vZWxlbWVudHMvdGVtcGxhdGVzXCI7XG5cblxuZXhwb3J0IGNvbnN0IFRpbWVNYW5pcHVsYXRvcnMgPSAoKSA9PiB7XG4gICAgbGV0IHRpbWVPZlRoZU1vdmU7XG4gICAgbGV0IGFpU3BlZWRPZlRvdWdodDtcbiAgICBsZXQgdGltZUJldHdlZW5Nb3ZlcztcbiAgICBsZXQgYWxhcm07XG4gICAgbGV0IHRpbWVyID0gVGltZXIoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZXInKS5hcHBlbmRDaGlsZCh0aW1lci5nZXRTdmcoKSk7XG5cbiAgICBjb25zdCBzZXRBaVNwZWVkT2ZUb3VnaHQgPSAoY2VsbHMpID0+IHtcbiAgICAgICAgYWlTcGVlZE9mVG91Z2h0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBnYW1lLmdhbWVIYW5kbGVyLnRha2VIaXQoZ2V0UmFuZG9tQ2VsbChjZWxscykpO1xuICAgICAgICAgICAgc2V0VGltZUJldHdlZW5Nb3ZlcygxMDAwKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGltZUJldHdlZW5Nb3ZlcyA9ICh0aW1lb3V0KSA9PiB7XG4gICAgICAgIHRpbWVCZXR3ZWVuTW92ZXMgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGdhbWUuZ2FtZUhhbmRsZXIuc3dpdGNoTW92ZSgpO1xuICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUaW1lT2ZUaGVNb3ZlID0gKCkgPT4ge1xuICAgICAgICB0aW1lci52aWV3KCk7XG4gICAgICAgIHRpbWVPZlRoZU1vdmUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBnYW1lLmdhbWVIYW5kbGVyLnN3aXRjaE1vdmUoKTtcbiAgICAgICAgfSwgMTUwMDApO1xuICAgICAgICBhbGFybSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGltZXJFZmZlY3QucGxheSgpO1xuICAgICAgICB9LCAxMDAwMCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHRpbWVyLnJlc2V0KCk7XG4gICAgICAgIGNsZWFyVGltZW91dChhaVNwZWVkT2ZUb3VnaHQpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZUJldHdlZW5Nb3Zlcyk7XG4gICAgICAgIGNsZWFyVGltZW91dChhbGFybSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZU9mVGhlTW92ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0QWlTcGVlZE9mVG91Z2h0LCBzZXRUaW1lQmV0d2Vlbk1vdmVzLCBzZXRUaW1lT2ZUaGVNb3ZlLCByZXNldCB9XG59IiwiaW1wb3J0IHsgQ2VsbEhhbmRsZXIgfSBmcm9tICcuL2NlbGxIYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IFNoaXBXYXRlckFyZWFzID0gKHBsYXllciwgc2hpcCkgPT4ge1xuICAgIGxldCB1bmRlclRoZVNoaXAgPSBbXTtcbiAgICBsZXQgYXJvdW5kVGhlU2hpcCA9IFtdO1xuXG4gICAgY29uc3QgZ2V0QXJlYVVuZGVyVGhlU2hpcCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHVuZGVyVGhlU2hpcDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0QXJlYUFyb3VuZFRoZVNoaXAgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhcm91bmRUaGVTaGlwO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRBcmVhcyA9IChhcmVhKSA9PiB7XG4gICAgICAgIHVuZGVyVGhlU2hpcCA9IGFyZWE7XG4gICAgICAgIGFyb3VuZFRoZVNoaXAgPSBzZXRBcmVhQXJvdW5kVGhlU2hpcCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRBcmVhQXJvdW5kVGhlU2hpcCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBDZWxsSGFuZGxlcigpO1xuICAgICAgICBsZXQgYXJlYXMgPSBbXTtcbiAgICAgICAgbGV0IHBhcmVudCA9IHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpO1xuICAgICAgICB1bmRlclRoZVNoaXAuZm9yRWFjaCgoc2VjdG9yKSA9PiB7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBzZWN0b3IuZ2V0WFkoKTtcbiAgICAgICAgICAgIGxldCBhcmVhID0gaGFuZGxlci5nZXRDZWxsQXJvdW5kQXJlYShcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy54LFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnksXG4gICAgICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYXJlYXMgPSBhcmVhcy5jb25jYXQoYXJlYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFyZWFzKSkuZmlsdGVyKFxuICAgICAgICAgICAgKHgpID0+ICF1bmRlclRoZVNoaXAuaW5jbHVkZXMoeCksXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9jY3VweUFyZWFzID0gKCkgPT4ge1xuICAgICAgICB1bmRlclRoZVNoaXAuZm9yRWFjaCgoc2VjdG9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VjdG9yLmlzRnJlZSgpKSB7XG4gICAgICAgICAgICAgICAgc2VjdG9yLm9jY3VweShzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrQXJlYSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFjZXNzaWJpbGl0eSA9IHRydWU7XG4gICAgICAgIGxldCBhcmVhcyA9IHVuZGVyVGhlU2hpcC5jb25jYXQoYXJvdW5kVGhlU2hpcCk7XG5cbiAgICAgICAgYXJlYXMuZm9yRWFjaCgoc2VjdG9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNlY3Rvci5pc0ZyZWUoKSAmJiBzZWN0b3IuZ2V0T2NjdXBhbnQoKSAhPT0gc2hpcCkge1xuICAgICAgICAgICAgICAgIGFjZXNzaWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYWNlc3NpYmlsaXR5O1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhckFyZWFzID0gKCkgPT4ge1xuICAgICAgICBsZXQgYXJlYXMgPSB1bmRlclRoZVNoaXAuY29uY2F0KGFyb3VuZFRoZVNoaXApO1xuICAgICAgICBhcmVhcy5mb3JFYWNoKChzZWN0b3IpID0+IHtcbiAgICAgICAgICAgIHNlY3Rvci5jbGVhcigpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xlYXJBcmVhcyxcbiAgICAgICAgY2hlY2tBcmVhLFxuICAgICAgICBnZXRBcmVhVW5kZXJUaGVTaGlwLFxuICAgICAgICBnZXRBcmVhQXJvdW5kVGhlU2hpcCxcbiAgICAgICAgc2V0QXJlYXMsXG4gICAgICAgIG9jY3VweUFyZWFzLFxuICAgIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IEFuaW1hdGlvbnMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSAoZSwgeDAsIHgxLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgbGVmdDogYCR7eDB9YCB9LCB7IGxlZnQ6IGAke3gxfWAgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHkgPSAoZSwgeTAsIHkxLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgdG9wOiBgJHt5MH1gIH0sIHsgdG9wOiBgJHt5MX1gIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb3RhdGUgPSAoZSwgcm90YXRlMSwgcm90YXRlMiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZTF9ZGVnKWAgfSwgeyB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGUyfWRlZylgIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyB4LCB5LCByb3RhdGUgfTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IChlLCBjb2xvcjEsIGNvbG9yMiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgYmFja2dyb3VuZDogY29sb3IxIH0sIHsgYmFja2dyb3VuZDogY29sb3IyIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3BhY2l0eSA9IChlLCBvcGFjaXR5MSwgb3BhY2l0eTIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IG9wYWNpdHk6IG9wYWNpdHkxIH0sIHsgb3BhY2l0eTogb3BhY2l0eTIgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXN0b20gPSAoZSwgZHVyLCBmaWxsID0gJ25vbmUnLCAuLi5rZXlGcmFtZXMpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZSguLi5rZXlGcmFtZXMsIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB0cmFuc2Zvcm0sIGJhY2tncm91bmQsIG9wYWNpdHksIGN1c3RvbSB9O1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCBzZXRIaWRkZW4gPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlSGlkZGVuID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldExvd09wYWNpdHkgPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnbG93LW9wYWNpdHknKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldE5vcm1hbE9wYWNpdHkgPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbG93LW9wYWNpdHknKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZU51bGxPcGFjaXR5ID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ251bGwtb3BhY2l0eScpO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0TnVsbE9wYWNpdHkgPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnbnVsbC1vcGFjaXR5Jyk7XG59IiwiaW1wb3J0IHsgQW5pbWF0aW9ucyB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IGRyYXdDcm9zcyA9IChlLCBkdXIsIGZpbGwsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgIEFuaW1hdGlvbnMuY3VzdG9tKGUuZmlyc3RDaGlsZCwgZHVyLCBmaWxsLCAuLi5rZXlGcmFtZXMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gQW5pbWF0aW9ucy5jdXN0b20oZS5sYXN0Q2hpbGQsIGR1ciwgZmlsbCwgLi4ua2V5RnJhbWVzKTtcbiAgICB9LCBkdXIpO1xufVxuIiwiaW1wb3J0IHsgQW5pbWF0aW9ucyB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbG9yc1RpbWVyID0gKGUsIGR1ciwgZmlsbCwgLi4ua2V5RnJhbWVzKSA9PiB7XG4gICAgcmV0dXJuIEFuaW1hdGlvbnMuY3VzdG9tKGUsIGR1ciwgZmlsbCwgLi4ua2V5RnJhbWVzKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdUaW1lciA9IChlLCBkdXIsIGZpbGwsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgIHJldHVybiBBbmltYXRpb25zLmN1c3RvbShlLCBkdXIsIGZpbGwsIC4uLmtleUZyYW1lcyk7XG59XG4iLCJleHBvcnQgY29uc3Qgc2V0RHJhZ2dhYmxlID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmRyYWdnYWJsZSA9IHRydWU7XG59O1xuIiwiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWVDb25maWcnO1xuaW1wb3J0IHsgc2V0RHJhZ2dhYmxlIH0gZnJvbSAnLi9zZXREcmFnZ2FibGUnO1xuXG5leHBvcnQgY29uc3Qgc2V0RHJhZ2dhYmxlRm9yU2hpcHMgPSAoKSA9PiB7XG4gICAgQ29uZmlnLkVsZW1lbnRzLnNoaXBUeXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGZvclR5cGUodHlwZSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBmb3JUeXBlID0gKHR5cGUpID0+IHtcbiAgICBjb25zdCBkb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dHlwZX1gKTtcbiAgICBjb25zdCBzaGlwcyA9IEFycmF5LmZyb20oZG9jay5jaGlsZHJlbik7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIHNldERyYWdnYWJsZShzaGlwKTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBBbHBoYWJldHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvYWxwaGFiZXRzJztcbmltcG9ydCB7IGdldE5vZGUgfSBmcm9tICcuL2ZhY3RvcnknO1xuXG5jb25zdCBhbHBoYWJldCA9IEFscGhhYmV0cy5ydXMoKS5jb2RlcztcblxuZXhwb3J0IGNvbnN0IHZpZXdBeGlzID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGJvYXJkLmdldE5vZGUoKTtcbiAgICBjb25zdCB4QXhpcyA9IG5vZGUucXVlcnlTZWxlY3RvcignLngtYXhpcycpO1xuICAgIGNvbnN0IHlBeGlzID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcueS1heGlzJyk7XG4gICAgY29uc3Qgc2l6ZSA9IGJvYXJkLmdldFNpemUoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZS53aWR0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBnZXROb2RlKCd4LWNlbGwnLCAnY2VsbCcpO1xuICAgICAgICBjb25zdCBsZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFscGhhYmV0W2ldKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gbGV0dGVyO1xuICAgICAgICB4QXhpcy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGdldE5vZGUoJ3ktY2VsbCcsICdjZWxsJyk7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBpO1xuICAgICAgICB5QXhpcy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldE5vZGUgPSAoLi4ubmFtZXMpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBpZiAobmFtZSAhPT0gJycpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChuYW1lKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBub2RlO1xufTtcbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lQ29uZmlnJztcblxuZXhwb3J0IGNvbnN0IHZpZXdCb2FyZCA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGJvYXJkLmdldFVuc3RydWN0ZWRDb250YWluZXIoKTtcbiAgICBjb25zdCBib2FyZHdyID0gYm9hcmQuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgIGNvbnRhaW5lci5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGJvYXJkd3IuYXBwZW5kQ2hpbGQoY2VsbC5nZXRDZWxsTm9kZSgpKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IFN0eWxlUHJlc2V0cyA9ICgoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS1ib2FyZC13aWR0aCcsXG4gICAgICAgIENvbmZpZy5HYW1lYm9hcmQud2lkdGgsXG4gICAgKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICctLWJvYXJkLWhlaWdodCcsXG4gICAgICAgIENvbmZpZy5HYW1lYm9hcmQuaGVpZ2h0LFxuICAgICk7XG59KSgpO1xuIiwiaW1wb3J0IHsgZHJhd0Nyb3NzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbGVtZW50cy9hdWRpb0VmZmVjdHNcIjtcbmltcG9ydCB7IENyb3NzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbGVtZW50cy90ZW1wbGF0ZXNcIjtcbmltcG9ydCB7IHJlbW92ZU51bGxPcGFjaXR5IH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZVwiO1xuXG5leHBvcnQgY29uc3Qgdmlld01pc3NIaXQgPSAoY2VsbCkgPT4ge1xuICAgIGNlbGwuZ2V0Q2VsbE5vZGUoKS5jbGFzc0xpc3QuYWRkKCdtaXNzLWhpdCcpO1xufVxuXG5leHBvcnQgY29uc3Qgdmlld0FjY3VyYXRlSGl0ID0gKGNlbGwpID0+IHtcbiAgICBjb25zdCBkZWNrID0gY2VsbC5nZXRMaW5rZWREZWNrKCk7XG4gICAgcmVtb3ZlTnVsbE9wYWNpdHkoZGVjay5nZXRDZWxsTm9kZSgpKTtcbiAgICBkZWNrLnNldFRoZUhpdCgpO1xuICAgIGFwcGVuZENyb3NzU3ZnKGRlY2spO1xuICAgIGRyYXdDcm9zcy5wbGF5KCk7XG59XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRDcm9zc1N2ZyA9IChkZWNrKSA9PiB7XG4gICAgbGV0IGNyb3NzID0gQ3Jvc3MoKTtcbiAgICBkZWNrLmdldENlbGxOb2RlKCkuY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVkJyk7XG4gICAgZGVjay5nZXRDZWxsTm9kZSgpLmFwcGVuZENoaWxkKGNyb3NzLmdldFN2ZygpKTtcbiAgICBjcm9zcy52aWV3KCk7XG59IiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRzLCBzZXRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci9oZWxwZXJcIjtcbmltcG9ydCB7IENyb3NzQXR0cmlidXRlcyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZWxlbWVudHMvYXR0cmlidXRlc1wiO1xuaW1wb3J0IHsgZHJhd0Nyb3NzIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvbWFya2Vyc1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ3Jvc3NTVkcgPSAoKSA9PiB7XG4gICAgbGV0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgbGV0IGxlZnRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdsaW5lJyk7XG4gICAgbGV0IHJpZ2h0TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnbGluZScpO1xuICAgIGFwcGVuZENoaWxkcyhzdmcsIGxlZnRMaW5lLCByaWdodExpbmUpO1xuICAgIHNldEF0dHJpYnV0ZXMobGVmdExpbmUsIENyb3NzQXR0cmlidXRlcy5saW5lLmNvbmNhdChDcm9zc0F0dHJpYnV0ZXMubGVmdERpYWcpKTtcbiAgICBzZXRBdHRyaWJ1dGVzKHJpZ2h0TGluZSwgQ3Jvc3NBdHRyaWJ1dGVzLmxpbmUuY29uY2F0KENyb3NzQXR0cmlidXRlcy5yaWdodERpYWcpKTtcbiAgICByZXR1cm4gc3ZnO1xufVxuXG5leHBvcnQgY29uc3Qgdmlld0Nyb3NzID0gKHN2ZykgPT4ge1xuICAgIGNvbnN0IGFuaW1hdGlvbnMgPSBbXG4gICAgICAgIGRyYXdDcm9zcyhzdmcsIDIwMCwgJ2ZvcndhcmRzJywgW3sgc3Ryb2tlRGFzaG9mZnNldDogJ21pbig1dmggLDJ2dyknIH0sIHsgc3Ryb2tlRGFzaG9mZnNldDogJ21pbigwdmggLDB2dyknIH1dKVxuICAgIF1cbiAgICByZXR1cm4gYW5pbWF0aW9ucztcbn0iLCJpbXBvcnQgeyBsb3NlLCB3aW4gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VsZW1lbnRzL2F1ZGlvRWZmZWN0c1wiO1xuXG5leHBvcnQgY29uc3Qgdmlld1dpblBvcHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXdpbicpO1xuICAgIHBvcHVwLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIHBvcHVwLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgd2luLnBsYXkoKTtcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdMb3NlUG9wdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtbG9zZScpO1xuICAgIHBvcHVwLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIHBvcHVwLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgbG9zZS5wbGF5KCk7XG59XG5cbmV4cG9ydCBjb25zdCBoaWRkZW5Qb3B1cCA9IChwb3B1cCkgPT4ge1xuICAgIHBvcHVwLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIHBvcHVwLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB3aW4ucGF1c2UoKTtcbiAgICBsb3NlLnBhdXNlKCk7XG59IiwiaW1wb3J0IHsgdmlld0F4aXMgfSBmcm9tICcuL2F4aXMnO1xuaW1wb3J0IHsgdmlld0JvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5leHBvcnQgY29uc3Qgdmlld1Byb2ZpbGUgPSAocHJvZmlsZSkgPT4ge1xuICAgIHZpZXdCb2FyZChwcm9maWxlLmdldEdhbWVib2FyZCgpKTtcbiAgICB2aWV3QXhpcyhwcm9maWxlLmdldEdhbWVib2FyZCgpKTtcbn07XG4iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgcmFuZG9tSW50RnJvbUludGVydmFsIH0gZnJvbSAnLi4vLi4vaGVscGVyL2hlbHBlcic7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Nlc3Npb24nO1xuaW1wb3J0IHsgcmVtb3ZlSGlkZGVuLCBzZXRIaWRkZW4gfSBmcm9tICcuLi9hbmltYXRpb25zL2NoYW5nZVZpc2libGUnO1xuXG5leHBvcnQgY29uc3Qgdmlld1NoaXAgPSAoc2hpcCwgaGVhZCkgPT4ge1xuICAgIGxldCBpc1ZpZXcgPSBzaGlwLmxhdW5jaFNoaXBPbldhdGVyKGhlYWQpO1xuICAgIGlmIChpc1ZpZXcpIHtcbiAgICAgICAgc2hpcC5zZXRIZWFkKGhlYWQpO1xuICAgICAgICBoZWFkLmdldENlbGxOb2RlKCkuYXBwZW5kQ2hpbGQoc2hpcC5nZXRDb250YWluZXIoKSk7XG4gICAgICAgIGNoZWNrU2hpcHlhcmQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmlldztcbn07XG5cbmNvbnN0IGNoZWNrU2hpcHlhcmQgPSAoKSA9PiB7XG4gICAgaWYgKFNlc3Npb24ubWFudWFsTW9kZSkge1xuICAgICAgICBpZiAoZ2FtZS5wbGF5ZXIuZ2V0U2hpcHlhcmQoKS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsb3NlTWFudWFsTWVudSgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IGNsb3NlTWFudWFsTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlweWFyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlweWFyZCcpO1xuICAgIHJlbW92ZUhpZGRlbihnYW1lLmFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKSk7XG4gICAgc2V0SGlkZGVuKHNoaXB5YXJkKTtcbn07XG5cbmV4cG9ydCBjb25zdCB2aWV3U2hpcE9uUmFuZG9tQ2VsbCA9IChzaGlwLCBjZWxscykgPT4ge1xuICAgIGxldCBjZWxsID0gZ2V0UmFuZG9tQ2VsbChjZWxscyk7XG4gICAgbGV0IGlzVmlldyA9IHZpZXdTaGlwKHNoaXAsIGNlbGwpO1xuICAgIHJldHVybiBpc1ZpZXcgPyB0cnVlIDogdmlld1NoaXBPblJhbmRvbUNlbGwoc2hpcCwgY2VsbHMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJhbmRvbUNlbGwgPSAoY2VsbHMpID0+IHtcbiAgICBsZXQgaW5kZXggPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMCwgY2VsbHMubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIGNlbGxzLnNwbGljZShpbmRleCwgMSlbMF07XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0U3RhbmRhcnRIb3Jpem9udGFsU2hpcERlc2lnbiA9IChjb250YWluZXIsIGxlbmd0aCkgPT4ge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG4gICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gYG1pbigke2xlbmd0aCAqIDV9dmgsJHtsZW5ndGggKiAyfXZ3KWA7XG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGBtaW4oNXZoLDJ2dylgO1xuICAgIGNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSBgMnZoYDtcbiAgICBjb250YWluZXIuc3R5bGUubWluV2lkdGggPSBgJHtsZW5ndGggKiAyfXZoYDtcbn1cblxuZXhwb3J0IGNvbnN0IHNldFN0YW5kYXJ0VmVydGljYWxTaGlwRGVzaWduID0gKGNvbnRhaW5lciwgbGVuZ3RoKSA9PiB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmVydGljYWwnKTtcbiAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYG1pbigke2xlbmd0aCAqIDV9dmgsJHtsZW5ndGggKiAyfXZ3KWA7XG4gICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gYG1pbig1dmgsMnZ3KWA7XG4gICAgY29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9IGAke2xlbmd0aCAqIDJ9dmhgO1xuICAgIGNvbnRhaW5lci5zdHlsZS5taW5XaWR0aCA9IGAydmhgO1xufVxuXG5leHBvcnQgY29uc3QgcmVzZXRTaGlwU3R5bGUgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgY29udGFpbmVyLnN0eWxlLmJvcmRlciA9ICdtaW4oMC4xdmgsIDAuMXZ3KSByZ2JhKDAsIDAsIDI1NSwgMSkgc29saWQnO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0RGVhdGhTdHlsZU9uU2hpcCA9IChjb250YWluZXIpID0+IHtcbiAgICBjb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICcwLjMnO1xuICAgIGNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSAnbWluKDAuMXZoLCAwLjF2dykgcmdiYSgyNTUsIDAsIDAsIDEpIHNvbGlkJztcbn0iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWVDb25maWcnO1xuaW1wb3J0IHsgc2V0RHJhZ2dhYmxlRm9yU2hpcHMgfSBmcm9tICcuLi9kcmFnQW5kRHJvcC9zaGlwcyc7XG5cbmV4cG9ydCBjb25zdCB2aWV3U2hpcHlhcmQgPSAoc2hpcHlhcmQpID0+IHtcbiAgICBmaWxsU2hpcHlhcmROb2RlKHNoaXB5YXJkKTtcbiAgICBzZXREcmFnZ2FibGVGb3JTaGlwcygpO1xufTtcblxuY29uc3QgZmlsbFNoaXB5YXJkTm9kZSA9IChzaGlweWFyZCkgPT4ge1xuICAgIENvbmZpZy5FbGVtZW50cy5zaGlwVHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBhZGRUeXBlKHR5cGUsIHNoaXB5YXJkKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGFkZFR5cGUgPSAodHlwZSwgc2hpcHlhcmQpID0+IHtcbiAgICBjb25zdCBkb2NrID0gc2hpcHlhcmQuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoYC4ke3R5cGV9YCk7XG4gICAgY29uc3Qgc2hpcHMgPSBzaGlweWFyZC5nZXRTaGlwc09mVHlwZSh0eXBlKTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGRvY2suYXBwZW5kQ2hpbGQoc2hpcC5nZXRDb250YWluZXIoKSk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRzLCBzZXRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci9oZWxwZXJcIjtcbmltcG9ydCB7IEhvcml6b250YWxMaW5lIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbGVtZW50cy9hdHRyaWJ1dGVzXCI7XG5pbXBvcnQgeyBjb2xvcnNUaW1lciwgZHJhd1RpbWVyIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvdGltZXJcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRpbWVyU1ZHID0gKCkgPT4ge1xuICAgIGxldCB0aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgbGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2xpbmUnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGxpbmUsIEhvcml6b250YWxMaW5lLmhvcml6b250YWwpO1xuICAgIGFwcGVuZENoaWxkcyh0aW1lciwgbGluZSk7XG4gICAgcmV0dXJuIHRpbWVyO1xufVxuXG5leHBvcnQgY29uc3Qgdmlld1RpbWVyID0gKHN2ZykgPT4ge1xuICAgIGNvbnN0IGFuaW1hdGlvbnMgPSBbXG4gICAgICAgIGNvbG9yc1RpbWVyKHN2Zy5sYXN0Q2hpbGQsIDE1MDAwLCAnbm9uZScsIFt7IHN0cm9rZTogJ2dyZWVuJyB9LCB7IHN0cm9rZTogJ29yYW5nZScgfSwgeyBzdHJva2U6ICdyZWQnIH1dKSxcbiAgICAgICAgZHJhd1RpbWVyKHN2Zy5sYXN0Q2hpbGQsIDE1MDAwLCAnbm9uZScsIFt7IHN0cm9rZURhc2hvZmZzZXQ6ICc5OXZ3JyB9LCB7IHN0cm9rZURhc2hvZmZzZXQ6ICcwdncnIH1dKVxuICAgIF1cbiAgICByZXR1cm4gYW5pbWF0aW9ucztcbn07IiwiaW1wb3J0IHsgcmVtb3ZlSGlkZGVuLCBzZXRIaWRkZW4sIHNldExvd09wYWNpdHksIHNldE5vcm1hbE9wYWNpdHkgfSBmcm9tIFwiLi4vYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlXCI7XG5cbmV4cG9ydCBjb25zdCBoaWRkZW5JbnRlcmZhY2VCZWZvcmVTdGFydFBsYXkgPSAoKSA9PiB7XG4gICAgc2V0SGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5JykpXG4gICAgc2V0SGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKSlcbiAgICBzZXRIaWRkZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpcHMnKSlcbiAgICByZW1vdmVIaWRkZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXQnKSlcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdJbnRlcmZhY2VBZnRlckVuZEdhbWUgPSAoKSA9PiB7XG4gICAgcmVtb3ZlSGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5JykpXG4gICAgcmVtb3ZlSGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKSlcbiAgICByZW1vdmVIaWRkZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpcHMnKSlcbiAgICBzZXRIaWRkZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXQnKSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldFBsYXllck1vdmVEZXNpZ24gPSAoYWksIHBsYXllcikgPT4ge1xuICAgIHNldE5vcm1hbE9wYWNpdHkoYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKSlcbiAgICBzZXROb3JtYWxPcGFjaXR5KGFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueS1heGlzJykpXG4gICAgc2V0Tm9ybWFsT3BhY2l0eShhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmJvYXJkJykpXG4gICAgc2V0TG93T3BhY2l0eShwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKSlcbiAgICBzZXRMb3dPcGFjaXR5KHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpKVxuICAgIHNldExvd09wYWNpdHkocGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldEFpTW92ZURlc2lnbiA9IChhaSwgcGxheWVyKSA9PiB7XG4gICAgc2V0Tm9ybWFsT3BhY2l0eShwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKSlcbiAgICBzZXROb3JtYWxPcGFjaXR5KHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpKVxuICAgIHNldE5vcm1hbE9wYWNpdHkocGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSlcbiAgICBzZXRMb3dPcGFjaXR5KGFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykpXG4gICAgc2V0TG93T3BhY2l0eShhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpKVxuICAgIHNldExvd09wYWNpdHkoYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpKVxufVxuXG5leHBvcnQgY29uc3Qgc2V0TWluaVNoaXB5YXJkRGVzaWduID0gKHNoaXB5YXJkKSA9PiB7XG4gICAgY29uc3QgZGVja3MgPSBzaGlweWFyZC5nZXROb2RlKCkucXVlcnlTZWxlY3RvckFsbCgnLmRlY2snKTtcbiAgICBjb25zdCBzaGlwcyA9IHNoaXB5YXJkLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnbWluaS1zaGlwJylcbiAgICB9KVxuICAgIGRlY2tzLmZvckVhY2goZGVjayA9PiB7XG4gICAgICAgIGRlY2suY2xhc3NMaXN0LmFkZCgnbWluaS1jZWxsJylcbiAgICB9KVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==