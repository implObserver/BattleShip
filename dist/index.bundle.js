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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0Qyx1SUFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sOEZBQThGLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLG1EQUFtRCxpQkFBaUIsZ0JBQWdCLGdCQUFnQixtQkFBbUIsNkJBQTZCLGtDQUFrQyxxQ0FBcUMsR0FBRyxXQUFXLCtCQUErQix1QkFBdUIsd0JBQXdCLGlDQUFpQyxHQUFHLFVBQVUsMEJBQTBCLEdBQUcsY0FBYyxvQkFBb0Isc0RBQXNELGtCQUFrQixtQkFBbUIsK0JBQStCLDRCQUE0Qix5QkFBeUIsR0FBRyxVQUFVLG9CQUFvQiwrQkFBK0IsMEJBQTBCLDZCQUE2QixHQUFHLGFBQWEsb0JBQW9CLGlEQUFpRCw0QkFBNEIsMEJBQTBCLGtCQUFrQiwwQkFBMEIsK0JBQStCLEdBQUcsWUFBWSxvQkFBb0Isc0JBQXNCLEdBQUcsV0FBVyxvQkFBb0IsaURBQWlELDBCQUEwQiw2QkFBNkIscUNBQXFDLDBCQUEwQixHQUFHLFdBQVcsb0JBQW9CLEdBQUcsV0FBVyxvQkFBb0IseUJBQXlCLHlCQUF5Qiw0QkFBNEIsOEJBQThCLDBCQUEwQiw0QkFBNEIsR0FBRyxlQUFlLG9CQUFvQiw0QkFBNEIsaURBQWlELCtCQUErQiwrQkFBK0IsNkJBQTZCLDhCQUE4QixpQ0FBaUMseUJBQXlCLEdBQUcsV0FBVyxvQkFBb0Isa0NBQWtDLDBCQUEwQixHQUFHLGVBQWUsK0JBQStCLEdBQUcsMEJBQTBCLG9CQUFvQiwwQ0FBMEMsK0JBQStCLHlCQUF5QiwwQkFBMEIsNEJBQTRCLDZCQUE2QixHQUFHLG1CQUFtQixvQkFBb0IseUJBQXlCLDBDQUEwQyxHQUFHLG9CQUFvQixvQkFBb0IsNEZBQTRGLEdBQUcsYUFBYSxvQkFBb0Isd0JBQXdCLHlCQUF5QiwwQkFBMEIsd0JBQXdCLG9GQUFvRixLQUFLLGFBQWEsb0JBQW9CLHdCQUF3QiwyREFBMkQseUJBQXlCLEdBQUcsWUFBWSxvQkFBb0IsdUJBQXVCLDZEQUE2RCwyREFBMkQsMkRBQTJELEtBQUssV0FBVyxvQkFBb0IsdUJBQXVCLDJCQUEyQix5QkFBeUIsNkJBQTZCLDhCQUE4QixxQkFBcUIsc0JBQXNCLGtEQUFrRCxvREFBb0QsbUJBQW1CLEdBQUcsK0NBQStDLG9CQUFvQix5QkFBeUIsMEJBQTBCLCtCQUErQiwrQkFBK0IsR0FBRyxvQkFBb0IsbUJBQW1CLEdBQUcsWUFBWSwyQkFBMkIsR0FBRyxhQUFhLG9CQUFvQixHQUFHLGFBQWEsb0JBQW9CLDBCQUEwQix5QkFBeUIsR0FBRyxXQUFXLG9CQUFvQiw4QkFBOEIsK0JBQStCLHdCQUF3QixnQ0FBZ0MsNkJBQTZCLDRCQUE0QixxQkFBcUIsc0JBQXNCLEdBQUcsZUFBZSx1REFBdUQsaUNBQWlDLEdBQUcsZ0JBQWdCLG9CQUFvQiw0QkFBNEIsR0FBRyxZQUFZLHVCQUF1Qiw0QkFBNEIsNEJBQTRCLG1CQUFtQixHQUFHLG9CQUFvQixvQkFBb0IsMkRBQTJELEdBQUcsV0FBVyxvQkFBb0IsNEJBQTRCLDhCQUE4Qix3QkFBd0IsdUJBQXVCLHlEQUF5RCx5QkFBeUIsMEJBQTBCLEdBQUcsaUJBQWlCLDRDQUE0QyxHQUFHLGVBQWUseUNBQXlDLEdBQUcsV0FBVyxvQkFBb0IsNkNBQTZDLG1CQUFtQixHQUFHLGVBQWUsb0JBQW9CLGtCQUFrQixtQkFBbUIsR0FBRyxnQkFBZ0IscUNBQXFDLG9DQUFvQyxHQUFHLGdCQUFnQixxQkFBcUIsc0JBQXNCLDZCQUE2Qiw4QkFBOEIsNkNBQTZDLDJEQUEyRCxHQUFHLGFBQWEsb0JBQW9CLHFEQUFxRCxrQkFBa0IsOEJBQThCLDJCQUEyQixHQUFHLGlDQUFpQywwQkFBMEIsb0JBQW9CLHFDQUFxQyxrQkFBa0Isc0JBQXNCLEtBQUssNkNBQTZDLCtCQUErQixrREFBa0QsR0FBRyxZQUFZLG9CQUFvQixtQkFBbUIsOEJBQThCLDBCQUEwQixHQUFHLGdCQUFnQixvQkFBb0IscUJBQXFCLEdBQUcsYUFBYSxvQkFBb0IsR0FBRyxtQkFBbUIsaUJBQWlCLEdBQUcsOEJBQThCLHNCQUFzQixvQkFBb0Isd0RBQXdELGtCQUFrQixtQkFBbUIsMkNBQTJDLGFBQWEsY0FBYyw0QkFBNEIsMEJBQTBCLHlCQUF5QixpQkFBaUIsNkJBQTZCLG9CQUFvQixHQUFHLFdBQVcsb0JBQW9CLG1CQUFtQixpQ0FBaUMsR0FBRyxrQkFBa0Isb0JBQW9CLGlEQUFpRCwwQkFBMEIsNEJBQTRCLG9CQUFvQixHQUFHLG9CQUFvQixvQkFBb0IsMkJBQTJCLCtCQUErQixnQkFBZ0Isd0NBQXdDLHlCQUF5QiwyQkFBMkIsR0FBRyxxREFBcUQsZUFBZSxzREFBc0QsU0FBUyxtQkFBbUIsK0JBQStCLDhCQUE4QixPQUFPLEdBQUcsK0NBQStDLGFBQWEseURBQXlELE9BQU8sbUJBQW1CLDRCQUE0QixPQUFPLEdBQUcsWUFBWSw4QkFBOEIsbUJBQW1CO0FBQ25tVTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzNZMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBd0c7QUFDeEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUlrRDtBQUMxRSxPQUFPLGlFQUFlLHFGQUFPLElBQUkscUZBQU8sVUFBVSxxRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjZCO0FBQ2tCO0FBQ2dDO0FBQ3JCOztBQUVuRDtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsb0RBQU87QUFDZixRQUFRLG1DQUFJO0FBQ1osUUFBUSxtRUFBWSxDQUFDLG1DQUFJO0FBQ3pCLFFBQVEsMEVBQVMsQ0FBQyxtQ0FBSTtBQUN0QixRQUFRLDZFQUFZO0FBQ3BCLEtBQUs7O0FBRUw7QUFDQSxRQUFRLG9EQUFPO0FBQ2YsUUFBUSw2RUFBWSxDQUFDLG1DQUFJO0FBQ3pCLFFBQVEsMEVBQVM7QUFDakIsUUFBUSxtQ0FBSTtBQUNaLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCNkI7QUFDb0M7O0FBRTFEO0FBQ1A7QUFDQTtBQUNBLFFBQVEsc0VBQVc7QUFDbkIsUUFBUSxtQ0FBSTtBQUNaLEtBQUs7QUFDTDs7QUFFTztBQUNQOztBQUVBO0FBQ0EsUUFBUSxzRUFBVztBQUNuQixRQUFRLG1DQUFJO0FBQ1osS0FBSztBQUNMOztBQUVPO0FBQ1Asa0JBQWtCLG1DQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQ0FBSTtBQUNoQixTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0I2QjtBQUMwQjs7QUFFaEQ7QUFDUDtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdFQUFXO0FBQ3ZCLFlBQVksbUNBQUk7QUFDaEIsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYNkQ7QUFDWDtBQUNaOztBQUUvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQU87QUFDdkIsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLGdCQUFnQixvREFBTztBQUN2QixnQkFBZ0Isb0RBQU87QUFDdkI7QUFDQSw2QkFBNkIsMkRBQVE7O0FBRXJDO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQSxnQkFBZ0IsNkRBQVk7QUFDNUI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxZQUFZLG9EQUFPO0FBQ25CLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFlBQVksa0RBQVc7QUFDdkIsWUFBWSw2REFBWTtBQUN4QixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBLFFBQVEsb0RBQU87QUFDZixLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDOEM7QUFDRjtBQUNHOztBQUV4QztBQUNQO0FBQ0E7QUFDQSxlQUFlLG9EQUFPO0FBQ3RCLFFBQVEsb0RBQU87QUFDZixxQkFBcUIsb0RBQU87QUFDNUIseUJBQXlCLG9EQUFPO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixJQUFJLHNEQUFNLG1CQUFtQjtBQUNyRCw0QkFBNEIsSUFBSSxzREFBTSxrQkFBa0I7QUFDeEQ7QUFDQSxvQkFBb0Isb0RBQU87QUFDM0I7QUFDQTtBQUNBLGlEQUFpRCxvREFBTztBQUN4RDtBQUNBLDBDQUEwQyxvREFBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLGlCQUFpQjtBQUN6QywwQ0FBMEMsb0RBQU87QUFDakQsZ0JBQWdCLG9EQUFPLGVBQWUsb0RBQU87QUFDN0M7QUFDQTtBQUNBLFlBQVksb0RBQU87QUFDbkIsdUJBQXVCLG9EQUFPO0FBQzlCLDRCQUE0QixJQUFJLHNEQUFNLG1CQUFtQjtBQUN6RCxnQ0FBZ0MsSUFBSSxzREFBTSxrQkFBa0I7QUFDNUQ7QUFDQSx3QkFBd0Isb0RBQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsb0RBQU87QUFDckQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxvREFBTztBQUNsQixZQUFZO0FBQ1osWUFBWTtBQUNaOztBQUVBO0FBQ0EsV0FBVywyREFBUTtBQUNuQixRQUFRLG9EQUFPO0FBQ2YsUUFBUSxvREFBTztBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJpQztBQUNJOztBQUU5QixhQUFhLGtEQUFJO0FBQ3hCOzs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUIrQztBQUNxQjtBQUNwQjs7QUFFMUM7QUFDUDtBQUNBO0FBQ0EsZUFBZSw2REFBTztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFZO0FBQ3BCLFFBQVEsaUZBQWdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyxXQUFXO0FBQ2pEOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0Msb0NBQW9DO0FBQzFFOzs7Ozs7Ozs7Ozs7Ozs7QUNyR087QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7OztBQzFGTztBQUNQO0FBQ0EsVUFBVSw0QkFBNEI7QUFDdEMsVUFBVSxpQ0FBaUM7QUFDM0MsVUFBVSxzQ0FBc0M7QUFDaEQsVUFBVSx1Q0FBdUM7QUFDakQsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVLHdCQUF3QjtBQUNsQyxVQUFVLHdCQUF3QjtBQUNsQyxVQUFVLHdCQUF3QjtBQUNsQyxVQUFVLHdCQUF3QjtBQUNsQztBQUNBO0FBQ0EsVUFBVSx3QkFBd0I7QUFDbEMsVUFBVSx3QkFBd0I7QUFDbEMsVUFBVSx3QkFBd0I7QUFDbEMsVUFBVSx3QkFBd0I7QUFDbEM7QUFDQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFTTtBQUNQO0FBQ0EsVUFBVSw0QkFBNEI7QUFDdEMsVUFBVSw0Q0FBNEM7QUFDdEQsVUFBVSxzQ0FBc0M7QUFDaEQsVUFBVSx3Q0FBd0M7QUFDbEQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx3QkFBd0I7QUFDbEMsVUFBVSx3QkFBd0I7QUFDbEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSx3QkFBd0I7QUFDbEM7QUFDQSxhQUFhO0FBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENvRDtBQUNKO0FBQ0M7QUFDRTtBQUNKO0FBQ0M7QUFDRTs7QUFFNUM7QUFDUCwwQkFBMEIsbURBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQLDBCQUEwQixrREFBTztBQUNqQztBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1AsMEJBQTBCLGtEQUFRO0FBQ2xDO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1AsMEJBQTBCLHVEQUFLO0FBQy9CO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1AsMEJBQTBCLG1EQUFLO0FBQy9CO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1AsMEJBQTBCLGlEQUFRO0FBQ2xDO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1AsMEJBQTBCLGtEQUFTO0FBQ25DO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRHFFO0FBQ0Y7O0FBRTdEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRU87QUFDUCwrQkFBK0Isb0VBQWM7O0FBRTdDO0FBQ0EsZ0NBQWdDLCtEQUFTO0FBQ3pDOztBQUVBLHNDQUFzQyxNQUFNO0FBQzVDOztBQUVPO0FBQ1AsK0JBQStCLGtFQUFjOztBQUU3QztBQUNBLGdDQUFnQyw2REFBUztBQUN6Qzs7QUFFQSxzQ0FBc0MsTUFBTTtBQUM1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDeUU7QUFDcUQ7QUFDbkQ7QUFDRjtBQUNrQjtBQUN4QjtBQUNDO0FBQ2Y7QUFDRTtBQUNvRztBQUMvRztBQUN5QjtBQUNsQztBQUNtQjs7QUFFL0M7QUFDUCxpQkFBaUIsaURBQU87QUFDeEIsYUFBYSxpREFBTztBQUNwQiw2QkFBNkIsb0VBQWdCO0FBQzdDOztBQUVBO0FBQ0EsUUFBUSxpRUFBVztBQUNuQixRQUFRLGlFQUFXO0FBQ25CLFFBQVEsbUVBQVk7QUFDcEIsUUFBUSxtRUFBWTtBQUNwQixRQUFRLG1FQUFZO0FBQ3BCLFFBQVEsc0VBQXFCO0FBQzdCLFFBQVEsdUVBQXFCO0FBQzdCOztBQUVBO0FBQ0EsUUFBUSxzRkFBb0I7QUFDNUIsUUFBUSxxRkFBb0I7QUFDNUIsUUFBUSx5RkFBeUI7QUFDakMsUUFBUSx5RkFBeUI7QUFDakMsUUFBUSx1RkFBcUI7QUFDN0I7O0FBRUE7QUFDQSxRQUFRLHFGQUFvQjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0VBQThCO0FBQ3RDO0FBQ0EsUUFBUSw2RUFBWTtBQUNwQixRQUFRLDhFQUFZO0FBQ3BCO0FBQ0E7QUFDQSxRQUFRLHNFQUFxQjtBQUM3QixRQUFRLHVFQUFxQjtBQUM3Qjs7QUFFQTtBQUNBLFFBQVEsMkVBQVM7QUFDakIsUUFBUSwyRUFBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUF5QjtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFlO0FBQ3ZCOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLG9FQUFtQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLGdFQUFlO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFXO0FBQ3ZCLFlBQVksK0RBQVU7QUFDdEIsVUFBVTtBQUNWLFlBQVksa0VBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG1FQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhFQUFhO0FBQzdCO0FBQ0EsWUFBWSw4REFBVztBQUN2QjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhFQUFhO0FBQ2pDO0FBQ0EsZ0JBQWdCLDhEQUFXO0FBQzNCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsa0VBQWEsS0FBSyxpRUFBWTtBQUMxRDs7QUFFQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25QbUU7QUFDUjtBQUNyQjtBQUNBOztBQUUvQjtBQUNQLGtCQUFrQiwrQ0FBTTtBQUN4QixtQkFBbUIsK0NBQU07QUFDekI7QUFDQSw0Q0FBNEMsS0FBSzs7QUFFakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx1RUFBb0I7QUFDaEMsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxZQUFZLCtFQUFjO0FBQzFCLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLFlBQVk7QUFDaEM7QUFDQSx3QkFBd0IsV0FBVztBQUNuQyx5QkFBeUIsbURBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7O0FDckhPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsU0FBUzs7QUFFVCxpQkFBaUI7QUFDakIsS0FBSzs7QUFFTCxhQUFhO0FBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnVDO0FBQ0Y7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRU87QUFDUDs7QUFFQSxvQkFBb0IscURBQVM7QUFDN0IsbUJBQW1CLG1EQUFRO0FBQzNCLHVCQUF1QixtREFBUTs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLDRDQUE0QztBQUNsRjs7Ozs7Ozs7Ozs7Ozs7OztBQ25DTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z5RDtBQUNTO0FBQ2pCO0FBQ3lGO0FBQzVHO0FBQ2dCOztBQUV2QztBQUNQLHNCQUFzQiw2REFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFjOztBQUV2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEMsdUJBQXVCLDJDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxnRkFBNkI7QUFDckM7QUFDQTs7QUFFQTtBQUNBLFFBQVEsa0ZBQStCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHFFQUFxQjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQWM7QUFDdkM7O0FBRUE7QUFDQSxRQUFRLGlFQUFjO0FBQ3RCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLCtFQUFhO0FBQ3pCO0FBQ0EsU0FBUztBQUNULFFBQVEsdUVBQW1CO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM05zQztBQUNrQjs7QUFFakQ7QUFDUCx5QkFBeUIsK0NBQU07QUFDL0IsMEJBQTBCLCtDQUFNO0FBQ2hDLDBCQUEwQiwrQ0FBTTtBQUNoQyx1QkFBdUIsK0NBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZDQUFNO0FBQzdCO0FBQ0EsdUJBQXVCLDhDQUFPO0FBQzlCO0FBQ0EsdUJBQXVCLDhDQUFPO0FBQzlCO0FBQ0EsdUJBQXVCLDJDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSDBCO0FBQzBCO0FBQ0U7QUFDVDs7O0FBR3RDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMERBQUs7QUFDckI7O0FBRUE7QUFDQTtBQUNBLFlBQVksbUNBQUkscUJBQXFCLGdFQUFhO0FBQ2xEO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG1DQUFJO0FBQ2hCLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFJO0FBQ2hCLFNBQVM7QUFDVDtBQUNBLFlBQVksK0RBQVc7QUFDdkIsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7O0FDOUM0Qzs7QUFFckM7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IseURBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFFTztBQUNQO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUyxHQUFHLEdBQUcsSUFBSSxTQUFTLEdBQUcsR0FBRyxLQUFLLDJCQUEyQjtBQUNsRzs7QUFFQTtBQUNBLGdDQUFnQyxRQUFRLEdBQUcsR0FBRyxJQUFJLFFBQVEsR0FBRyxHQUFHLEtBQUssMkJBQTJCO0FBQ2hHOztBQUVBO0FBQ0EsZ0NBQWdDLHFCQUFxQixRQUFRLE9BQU8sSUFBSSxxQkFBcUIsUUFBUSxPQUFPLEtBQUssMkJBQTJCO0FBQzVJOztBQUVBLGlCQUFpQjtBQUNqQixLQUFLOztBQUVMO0FBQ0EsNEJBQTRCLG9CQUFvQixJQUFJLG9CQUFvQixLQUFLLDJCQUEyQjtBQUN4Rzs7QUFFQTtBQUNBLDRCQUE0QixtQkFBbUIsSUFBSSxtQkFBbUIsS0FBSywyQkFBMkI7QUFDdEc7O0FBRUE7QUFDQSx5Q0FBeUMsMkJBQTJCO0FBQ3BFOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCTTtBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEIwQzs7QUFFbkM7QUFDUCxJQUFJLG1EQUFVO0FBQ2Q7QUFDQSxlQUFlLG1EQUFVO0FBQ3pCLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQMEM7O0FBRW5DO0FBQ1AsV0FBVyxtREFBVTtBQUNyQjs7QUFFTztBQUNQLFdBQVcsbURBQVU7QUFDckI7Ozs7Ozs7Ozs7Ozs7OztBQ1JPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGaUQ7QUFDSDs7QUFFdkM7QUFDUCxJQUFJLHNEQUFNO0FBQ1Y7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSw0Q0FBNEMsS0FBSztBQUNqRDs7QUFFQTtBQUNBLFFBQVEsMkRBQVk7QUFDcEIsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCbUQ7QUFDZjs7QUFFcEMsaUJBQWlCLHdEQUFTOztBQUVuQjtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixnQkFBZ0I7QUFDcEMscUJBQXFCLGlEQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixpQkFBaUI7QUFDckMscUJBQXFCLGlEQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSaUQ7O0FBRTFDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQU07QUFDZDtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkI4RDtBQUNQO0FBQ1E7O0FBRXpEO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0EsSUFBSSw0RUFBaUI7QUFDckI7QUFDQTtBQUNBLElBQUksb0VBQVM7QUFDYjs7QUFFTztBQUNQLGdCQUFnQixpRUFBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJrRTtBQUNDO0FBQ2pCOztBQUUzQztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQVk7QUFDaEIsSUFBSSw2REFBYSxXQUFXLHdFQUFlLGFBQWEsd0VBQWU7QUFDdkUsSUFBSSw2REFBYSxZQUFZLHdFQUFlLGFBQWEsd0VBQWU7QUFDeEU7QUFDQTs7QUFFTztBQUNQO0FBQ0EsUUFBUSw4REFBUywwQkFBMEIsbUNBQW1DLElBQUksbUNBQW1DO0FBQ3JIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQitEOztBQUV4RDtBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQUc7QUFDUDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQUk7QUFDUjs7QUFFTztBQUNQO0FBQ0E7QUFDQSxJQUFJLDhEQUFHO0FBQ1AsSUFBSSwrREFBSTtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJrQztBQUNNOztBQUVqQztBQUNQLElBQUkscURBQVM7QUFDYixJQUFJLCtDQUFRO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDK0I7QUFDYjtBQUN1Qjs7QUFFL0Q7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxvREFBTztBQUNmLFlBQVksbUNBQUk7QUFDaEI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksdUVBQVksQ0FBQyxtQ0FBSTtBQUNyQixJQUFJLG9FQUFTO0FBQ2I7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLGdCQUFnQixxRUFBcUI7QUFDckM7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxtQ0FBbUMsV0FBVyxLQUFLLFdBQVc7QUFDOUQ7QUFDQTtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDOztBQUVPO0FBQ1A7QUFDQTtBQUNBLG9DQUFvQyxXQUFXLEtBQUssV0FBVztBQUMvRDtBQUNBLG1DQUFtQyxXQUFXO0FBQzlDO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEU2QjtBQUNvQjtBQUNXOztBQUVyRDtBQUNQO0FBQ0EsSUFBSSx3RUFBb0I7QUFDeEI7O0FBRUE7QUFDQSxJQUFJLHNEQUFNO0FBQ1Y7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxzREFBc0QsS0FBSztBQUMzRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmtFO0FBQ0E7QUFDTDs7QUFFdEQ7QUFDUDtBQUNBO0FBQ0EsSUFBSSw2REFBYSxPQUFPLHVFQUFjO0FBQ3RDLElBQUksNERBQVk7QUFDaEI7QUFDQTs7QUFFTztBQUNQO0FBQ0EsUUFBUSw4REFBVyxrQ0FBa0MsaUJBQWlCLElBQUksa0JBQWtCLElBQUksZUFBZTtBQUMvRyxRQUFRLDREQUFTLGtDQUFrQywwQkFBMEIsSUFBSSx5QkFBeUI7QUFDMUc7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ1Rzs7QUFFaEc7QUFDUCxJQUFJLG9FQUFTO0FBQ2IsSUFBSSxxRUFBUztBQUNiLElBQUkscUVBQVM7QUFDYixJQUFJLHdFQUFZO0FBQ2hCOztBQUVPO0FBQ1AsSUFBSSx3RUFBWTtBQUNoQixJQUFJLHdFQUFZO0FBQ2hCLElBQUksd0VBQVk7QUFDaEIsSUFBSSxxRUFBUztBQUNiOztBQUVPO0FBQ1AsSUFBSSw0RUFBZ0I7QUFDcEIsSUFBSSw0RUFBZ0I7QUFDcEIsSUFBSSw0RUFBZ0I7QUFDcEIsSUFBSSx5RUFBYTtBQUNqQixJQUFJLHlFQUFhO0FBQ2pCLElBQUkseUVBQWE7QUFDakI7O0FBRU87QUFDUCxJQUFJLDRFQUFnQjtBQUNwQixJQUFJLDRFQUFnQjtBQUNwQixJQUFJLDRFQUFnQjtBQUNwQixJQUFJLHlFQUFhO0FBQ2pCLElBQUkseUVBQWE7QUFDakIsSUFBSSx5RUFBYTtBQUNqQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9zdHlsZXMvbWFpbi5jc3M/ODlmNiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckxpbmtzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclBsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yUG9wdXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlcnMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlbHBlci9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9hbHBoYWJldHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvY2VsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9jZWxsSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9lbGVtZW50cy9hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2VsZW1lbnRzL2F1ZGlvRWZmZWN0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9lbGVtZW50cy90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvZ2FtZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3NoaXB5YXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3RpbWVNYW5pcHVsYXRvcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvd2F0ZXJBcmVhcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvbWFya2Vycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9kcmFnQW5kRHJvcC9zZXREcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9kcmFnQW5kRHJvcC9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL2F4aXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9mYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvaGl0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL21hcmtlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9wb3B1cHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9wcm9maWxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3NoaXB5YXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy92aWV3cy9pbWFnZXMvZG90LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogbWluKDJ2aCwgMnZ3KTtcbiAgICAtLWJvYXJkLXdpZHRoOiAwO1xuICAgIC0tYm9hcmQtaGVpZ2h0OiAwO1xuICAgIC0tY2VsbC1zaXplOiBtaW4oNXZoLCAydncpO1xufVxuXG5odG1sIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG4ud3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcm93LWdhcDogbWluKDJ2aCwgMC44dncpO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbnNwYW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogbWluKDF2aCwgMC40dncpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgbWluLWNvbnRlbnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBwYWRkaW5nOiBtaW4oMnZoLCAwLjh2dyk7XG59XG5cbi50aXRsZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi50aXBzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDJ2aCwgMC44dncpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5leGl0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4ubWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNoaXB5YXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XG4gICAgcm93LWdhcDogbWluKDZ2aCwgMi40dncpO1xuICAgIHBhZGRpbmc6IG1pbigydmgsIDAuOHZ3KTtcbiAgICB3aWR0aDogbWluKDQwdmgsIDE2dncpO1xuICAgIGhlaWdodDogbWluKDQwdmgsIDE2dncpO1xuICAgIG1heC13aWR0aDogbWluKDUwdmgsIDIwdncpO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmRvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sdW1uLWdhcDogbWluKDR2aCwgMS42dncpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5zZWxlY3RlZCB7XG4gICAgb3BhY2l0eTogMC4wMSAhaW1wb3J0YW50O1xufVxuXG4uYm9hcmRfX2F4aXMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudDtcbiAgICByb3ctZ2FwOiBtaW4oMnZoLCAwLjh2dyk7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IG1pbig1dmgsIDJ2dyk7XG59XG5cbi5heGlzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xufVxuXG4uYm9hcmQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAnYXhpcy14IGF4aXMteCBheGlzLXgnXG4gICAgICAgICdzaGlweWFyZCBheGlzLXkgYm9hcmQnO1xufVxuXG4ueC1heGlzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogYXhpcy14O1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgbWF4KHZhcigtLWNlbGwtc2l6ZSksIDJ2aCkpO1xuXG59XG5cbi55LWF4aXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBheGlzLXk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgMmZyKTtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi5ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgMmZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCAyZnIpO1xuICAgIGJvcmRlcjogbWluKDAuNXZoLCAwLjJ2dykgcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XG5cbn1cblxuLnBsYXkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IG1pbigxMHZoLCAxMHZ3KTtcbiAgICBoZWlnaHQ6IG1pbigxMHZoLCAxMHZ3KTtcbiAgICBtaW4td2lkdGg6IDJ2aDtcbiAgICBtaW4taGVpZ2h0OiAydmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTksIDIwMiwgNDEsIDAuNzI2KTtcbiAgICBib3JkZXI6IG1pbigxdmgsIDF2dykgcmdiKDExOSwgMjAyLCA0MSkgc29saWQ7XG4gICAgei1pbmRleDogOTk4O1xufVxuXG4uYWktbWluaS1zaGlweWFyZCxcbi5wbGF5ZXItbWluaS1zaGlweWFyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICByb3ctZ2FwOiBtaW4oMnZoLCAwLjh2dyk7XG4gICAgcGFkZGluZzogbWluKDN2aCwgMS4ydncpO1xufVxuXG5cbi5sb3ctb3BhY2l0eSB7XG4gICAgb3BhY2l0eTogMC40O1xufVxuXG4uYmxvY2sge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWFya2VyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xufVxuXG4uY2VsbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICBtaW4td2lkdGg6IDJ2aDtcbiAgICBtaW4taGVpZ2h0OiAydmg7XG59XG5cbi5taXNzLWhpdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4uZGVzdHJveWVkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlcjogMXB4IHJlZCBzb2xpZDtcbn1cblxuLmxpdmUge31cblxuLngtY2VsbCxcbi55LWNlbGwge1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4ubWFyaW5lLXNlY3RvciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IG1pbigwLjF2aCwgMC4xdncpIHJnYmEoMCwgMCwgMjU1LCAwLjIpIHNvbGlkO1xufVxuXG4uc2hpcCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBib3JkZXI6IG1pbigwLjF2aCwgMC4xdncpIHJnYmEoMCwgMCwgMjU1LCAxKSBzb2xpZDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLmhvcml6b250YWwge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDJmcik7XG59XG5cbi52ZXJ0aWNhbCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMmZyKTtcbn1cblxuLmRlY2sge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4uZGVjaz5zdmcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWluaS1zaGlwIHtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5taW5pLWNlbGwge1xuICAgIG1pbi13aWR0aDogMXZoO1xuICAgIG1pbi1oZWlnaHQ6IDF2aDtcbiAgICB3aWR0aDogbWluKDJ2aCwgMC44dncpO1xuICAgIGhlaWdodDogbWluKDJ2aCwgMC44dncpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjEpO1xuICAgIGJvcmRlcjogbWluKDAuMXZoLCAwLjF2dykgcmdiYSgwLCAyNTUsIDI1NSwgMSkgc29saWQ7XG59XG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IG1pbig0dmgsIDEuNnZ3KTtcbn1cblxuLnJhbmRvbS1tb2RlLFxuLm1hbnVhbC1tb2RlIHtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibHVlO1xuICAgIGNvbG9yOiBibHVlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxufVxuXG4ucmFuZG9tLW1vZGU6aG92ZXIsXG4ubWFudWFsLW1vZGU6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMTIyLCAyMzEsIDcyKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYigxMjIsIDIzMSwgNzIpO1xufVxuXG4udGltZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogbWluKDJ2aCwgMC44dncpO1xuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG59XG5cbi50aW1lcj5zdmcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG5cbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5udWxsLW9wYWNpdHkge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5wb3B1cC13aW4sXG4ucG9wdXAtbG9zZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbi1jb250ZW50KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLnRleHQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogbWluKDEwdmgsIDEwdncpO1xufVxuXG4ud2luLFxuLmxvc2Uge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDIwMDA7XG59XG5cbi5naWYtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiBtaW4oMTAwdmgsIDEwMHZ3KTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IG1pbig1NnZoLCAyMi40dncpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDEuMDAwMDEvMSkge1xuXG4gICAgLm1haW4ge1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuXG4gICAgfVxuXG4gICAgLnNoaXB5YXJkIHtcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAydmg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMS8xKSB7XG4gICAgLm1haW4ge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIH1cblxuICAgIC5haS1ib2FyZCB7XG4gICAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgIH1cbn1cblxuLmNyb3NzIHtcbiAgICBib3JkZXI6IDFweCByZWQgc29saWRcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0MsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFx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Q0ksYUFBYTs7SUFFYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGlEQUFpRDtJQUNqRCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxNQUFNO0lBQ04sT0FBTztJQUNQLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsU0FBUztJQUNULGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJO1FBQ0ksMkNBQTJDOztJQUUvQzs7SUFFQTtRQUNJLG9CQUFvQjtRQUNwQixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksOENBQThDO0lBQ2xEOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiBtaW4oMnZoLCAydncpO1xcbiAgICAtLWJvYXJkLXdpZHRoOiAwO1xcbiAgICAtLWJvYXJkLWhlaWdodDogMDtcXG4gICAgLS1jZWxsLXNpemU6IG1pbig1dmgsIDJ2dyk7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyIG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICByb3ctZ2FwOiBtaW4oMnZoLCAwLjh2dyk7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogbWluKDF2aCwgMC40dncpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBwYWRkaW5nOiBtaW4oMnZoLCAwLjh2dyk7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnRpcHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IG1pbigydmgsIDAuOHZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLmV4aXQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaGlweWFyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWluLWNvbnRlbnQpO1xcbiAgICByb3ctZ2FwOiBtaW4oNnZoLCAyLjR2dyk7XFxuICAgIHBhZGRpbmc6IG1pbigydmgsIDAuOHZ3KTtcXG4gICAgd2lkdGg6IG1pbig0MHZoLCAxNnZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4oNDB2aCwgMTZ2dyk7XFxuICAgIG1heC13aWR0aDogbWluKDUwdmgsIDIwdncpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5kb2NrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogbWluKDR2aCwgMS42dncpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBvcGFjaXR5OiAwLjAxICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib2FyZF9fYXhpcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIHJvdy1nYXA6IG1pbigydmgsIDAuOHZ3KTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IG1pbig1dmgsIDJ2dyk7XFxufVxcblxcbi5heGlzLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5cXG4uYm9hcmQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnYXhpcy14IGF4aXMteCBheGlzLXgnXFxuICAgICAgICAnc2hpcHlhcmQgYXhpcy15IGJvYXJkJztcXG59XFxuXFxuLngtYXhpcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogYXhpcy14O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksIG1heCh2YXIoLS1jZWxsLXNpemUpLCAydmgpKTtcXG5cXG59XFxuXFxuLnktYXhpcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogYXhpcy15O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCAyZnIpO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogYm9hcmQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgMmZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgMmZyKTtcXG4gICAgYm9yZGVyOiBtaW4oMC41dmgsIDAuMnZ3KSByZ2JhKDAsIDAsIDI1NSwgMC4yKSBzb2xpZDtcXG5cXG59XFxuXFxuLnBsYXkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogbWluKDEwdmgsIDEwdncpO1xcbiAgICBoZWlnaHQ6IG1pbigxMHZoLCAxMHZ3KTtcXG4gICAgbWluLXdpZHRoOiAydmg7XFxuICAgIG1pbi1oZWlnaHQ6IDJ2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTksIDIwMiwgNDEsIDAuNzI2KTtcXG4gICAgYm9yZGVyOiBtaW4oMXZoLCAxdncpIHJnYigxMTksIDIwMiwgNDEpIHNvbGlkO1xcbiAgICB6LWluZGV4OiA5OTg7XFxufVxcblxcbi5haS1taW5pLXNoaXB5YXJkLFxcbi5wbGF5ZXItbWluaS1zaGlweWFyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgcm93LWdhcDogbWluKDJ2aCwgMC44dncpO1xcbiAgICBwYWRkaW5nOiBtaW4oM3ZoLCAxLjJ2dyk7XFxufVxcblxcblxcbi5sb3ctb3BhY2l0eSB7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmJsb2NrIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFya2VyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG1pbi13aWR0aDogMnZoO1xcbiAgICBtaW4taGVpZ2h0OiAydmg7XFxufVxcblxcbi5taXNzLWhpdCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL3ZpZXdzL2ltYWdlcy9kb3Quc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbi5kZXN0cm95ZWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IDFweCByZWQgc29saWQ7XFxufVxcblxcbi5saXZlIHt9XFxuXFxuLngtY2VsbCxcXG4ueS1jZWxsIHtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLm1hcmluZS1zZWN0b3Ige1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IG1pbigwLjF2aCwgMC4xdncpIHJnYmEoMCwgMCwgMjU1LCAwLjIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgICBib3JkZXI6IG1pbigwLjF2aCwgMC4xdncpIHJnYmEoMCwgMCwgMjU1LCAxKSBzb2xpZDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uaG9yaXpvbnRhbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDJmcik7XFxufVxcblxcbi52ZXJ0aWNhbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDJmcik7XFxufVxcblxcbi5kZWNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLmRlY2s+c3ZnIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1pbmktc2hpcCB7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQgIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5taW5pLWNlbGwge1xcbiAgICBtaW4td2lkdGg6IDF2aDtcXG4gICAgbWluLWhlaWdodDogMXZoO1xcbiAgICB3aWR0aDogbWluKDJ2aCwgMC44dncpO1xcbiAgICBoZWlnaHQ6IG1pbigydmgsIDAuOHZ3KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMSk7XFxuICAgIGJvcmRlcjogbWluKDAuMXZoLCAwLjF2dykgcmdiYSgwLCAyNTUsIDI1NSwgMSkgc29saWQ7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogbWluKDR2aCwgMS42dncpO1xcbn1cXG5cXG4ucmFuZG9tLW1vZGUsXFxuLm1hbnVhbC1tb2RlIHtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibHVlO1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4ucmFuZG9tLW1vZGU6aG92ZXIsXFxuLm1hbnVhbC1tb2RlOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigxMjIsIDIzMSwgNzIpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYigxMjIsIDIzMSwgNzIpO1xcbn1cXG5cXG4udGltZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogbWluKDJ2aCwgMC44dncpO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4udGltZXI+c3ZnIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm51bGwtb3BhY2l0eSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5wb3B1cC13aW4sXFxuLnBvcHVwLWxvc2Uge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW4tY29udGVudCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcXG4gICAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuLnRleHQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogbWluKDEwdmgsIDEwdncpO1xcbn1cXG5cXG4ud2luLFxcbi5sb3NlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDIwMDA7XFxufVxcblxcbi5naWYtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBtaW4oMTAwdmgsIDEwMHZ3KTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogbWluKDU2dmgsIDIyLjR2dyk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAxLjAwMDAxLzEpIHtcXG5cXG4gICAgLm1haW4ge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG5cXG4gICAgfVxcblxcbiAgICAuc2hpcHlhcmQge1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnZoO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHtcXG4gICAgLm1haW4ge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgfVxcblxcbiAgICAuYWktYm9hcmQge1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIH1cXG59XFxuXFxuLmNyb3NzIHtcXG4gICAgYm9yZGVyOiAxcHggcmVkIHNvbGlkXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdhbWUgfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Nlc3Npb24nO1xuaW1wb3J0IHsgcmVtb3ZlSGlkZGVuLCBzZXRIaWRkZW4gfSBmcm9tICcuLi8uLi92aWV3cy9hbmltYXRpb25zL2NoYW5nZVZpc2libGUnO1xuaW1wb3J0IHsgdmlld1NoaXB5YXJkIH0gZnJvbSAnLi4vLi4vdmlld3Mvbm9kZXMvc2hpcHlhcmQnO1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yTGlua3MgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFudWFsTW9kZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFudWFsLW1vZGUnKTtcbiAgICBjb25zdCByYW5kb21Nb2RlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb20tbW9kZScpO1xuICAgIGNvbnN0IHNoaXB5YXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXB5YXJkJyk7XG5cbiAgICBjb25zdCBvcGVuTWFudWFsTW9kZSA9IG1hbnVhbE1vZGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgU2Vzc2lvbi5tYW51YWxNb2RlID0gdHJ1ZTtcbiAgICAgICAgZ2FtZS5wbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucmVzZXQoKTtcbiAgICAgICAgdmlld1NoaXB5YXJkKGdhbWUucGxheWVyLmdldFNoaXB5YXJkKCkpO1xuICAgICAgICBzZXRIaWRkZW4oZ2FtZS5haS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkpO1xuICAgICAgICByZW1vdmVIaWRkZW4oc2hpcHlhcmQpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb3BlblJhbmRvbU1vZGUgPSByYW5kb21Nb2RlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIFNlc3Npb24ubWFudWFsTW9kZSA9IGZhbHNlO1xuICAgICAgICByZW1vdmVIaWRkZW4oZ2FtZS5haS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkpO1xuICAgICAgICBzZXRIaWRkZW4oc2hpcHlhcmQpO1xuICAgICAgICBnYW1lLnBsYXllci5nZXRHYW1lYm9hcmQoKS5yYW5kb21GaWxsaW5nT2ZTaGlwcygpO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi4vLi5cIjtcbmltcG9ydCB7IGNsaWNrRWZmZWN0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbGVtZW50cy9hdWRpb0VmZmVjdHNcIjtcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvclBsYXlCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKTtcbiAgICBjb25zdCBjbGljayA9IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjbGlja0VmZmVjdC5wbGF5KCk7XG4gICAgICAgIGdhbWUucGxheSgpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JFeGl0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0Jyk7XG5cbiAgICBjb25zdCBjbGljayA9IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjbGlja0VmZmVjdC5wbGF5KCk7XG4gICAgICAgIGdhbWUuZW5kKCk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckNlbGxzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNlbGxzID0gZ2FtZS5haS5nZXRHYW1lYm9hcmQoKS5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCk7XG4gICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGNlbGwuZ2V0Q2VsbE5vZGUoKTtcbiAgICAgICAgbm9kZS5zdHlsZS56SW5kZXggPSAxMDAwO1xuICAgICAgICBjb25zdCBjbGljayA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGdhbWUuZ2FtZUhhbmRsZXIuY2hlY2tDZWxsKGNlbGwpO1xuICAgICAgICB9KVxuICAgIH0pXG59IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuLi8uLlwiO1xuaW1wb3J0IHsgaGlkZGVuUG9wdXAgfSBmcm9tIFwiLi4vLi4vdmlld3Mvbm9kZXMvcG9wdXBzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNmb3JQb3B1cHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgcG9wdXBzLmZvckVhY2gocG9wdXAgPT4ge1xuICAgICAgICBjb25zdCBjbGljayA9IHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBoaWRkZW5Qb3B1cChwb3B1cCk7XG4gICAgICAgICAgICBnYW1lLmVuZCgpO1xuICAgICAgICB9KVxuICAgIH0pO1xufSIsImltcG9ydCB7IFNlc3Npb24sIHJlc2V0U2Vzc2lvbiB9IGZyb20gJy4uLy4uL21vZGVscy9zZXNzaW9uJztcbmltcG9ydCB7IHZpZXdTaGlwIH0gZnJvbSAnLi4vLi4vdmlld3Mvbm9kZXMvc2hpcCc7XG5pbXBvcnQgeyBzaGlwRHJhZ0VuZCB9IGZyb20gJy4uL3NoaXAnO1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yU2hpcHMgPSAoc2hpcHMpID0+IHtcbiAgICBjb25zdCBib3JkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBkZWNrcyA9IHNoaXAuZ2V0Qm9keSgpO1xuICAgICAgICBkZWNrcy5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICBkZWNrLmdldENlbGxOb2RlKCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgIFNlc3Npb24uaW5kZXggPSBkZWNrLmdldE51bWJlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXAuZ2V0Q29udGFpbmVyKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuZ2V0SGVhZCgpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwID0gc2hpcDtcbiAgICAgICAgICAgICAgICBTZXNzaW9uLmN1cnJlbnRFbGVtZW50ID0gc2hpcC5nZXRIZWFkKCkuZ2V0Q2VsbE5vZGUoKTtcbiAgICAgICAgICAgICAgICBzaGlwLm9yaWVudGF0aW9uU3dpdGNoKCk7XG4gICAgICAgICAgICAgICAgbGV0IGlzVmlldyA9IHZpZXdTaGlwKHNoaXAsIHNoaXAuZ2V0SGVhZCgpKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1ZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5zZXRPcmllbnRhdGlvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAub3JpZW50YXRpb25Td2l0Y2goKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNldFNlc3Npb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2hpcC5nZXRDb250YWluZXIoKS5hZGRFdmVudExpc3RlbmVyKGBkcmFnc3RhcnRgLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoYHNlbGVjdGVkYCk7XG4gICAgICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAgPSBzaGlwO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoYGRyYWdlbmRgLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoYHNlbGVjdGVkYCk7XG4gICAgICAgICAgICBzaGlwRHJhZ0VuZCgpO1xuICAgICAgICAgICAgcmVzZXRTZXNzaW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYm9yZGVyLmFkZEV2ZW50TGlzdGVuZXIoYGRyYWdvdmVyYCwgKGV2dCkgPT4ge1xuICAgICAgICBTZXNzaW9uLmN1cnJlbnRFbGVtZW50ID0gZXZ0LnRhcmdldDtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi4vbW9kZWxzL3Nlc3Npb24nO1xuaW1wb3J0IHsgdmlld1NoaXAgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9zaGlwJztcblxuZXhwb3J0IGNvbnN0IHNoaXBEcmFnRW5kID0gKCkgPT4ge1xuICAgIGxldCBpc01vdmVhYmxlID0gZmFsc2U7XG4gICAgbGV0IGlzQWx0ZXJNb3ZhYmxlID0gZmFsc2U7XG4gICAgbGV0IGJvZHkgPSBTZXNzaW9uLmFjdGl2ZVNoaXAuZ2V0Qm9keSgpO1xuICAgIGlmIChTZXNzaW9uLmN1cnJlbnRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGlzTW92ZWFibGUgPSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgbWFyaW5lLXNlY3RvcmApO1xuICAgICAgICBpc0FsdGVyTW92YWJsZSA9IFNlc3Npb24uY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGBkZWNrYCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc01vdmVhYmxlICYmICFpc0FsdGVyTW92YWJsZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzTW92ZWFibGUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25maWcuR2FtZWJvYXJkLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvbmZpZy5HYW1lYm9hcmQud2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldFN0cnVjdGVkQ29udGFpbmVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIFtqXVtpXS5nZXRDZWxsTm9kZSgpID09PSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhZGRTaGlwT25Cb2FyZChTZXNzaW9uLmluZGV4LCBqLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzQWx0ZXJNb3ZhYmxlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGJvZHlbaV0uZ2V0Q2VsbE5vZGUoKSA9PT0gU2Vzc2lvbi5jdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIFNlc3Npb24uZG91YmxlSW5kZXggPSBTZXNzaW9uLmluZGV4IC0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoU2Vzc2lvbi5kb3VibGVJbmRleCAhPT0gJ3NoaXAnKSB7XG4gICAgICAgICAgICBsZXQgaGVhZCA9IFNlc3Npb24uYWN0aXZlU2hpcC5nZXRIZWFkKCkuZ2V0Q2VsbE5vZGUoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29uZmlnLkdhbWVib2FyZC53aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldFN0cnVjdGVkQ29udGFpbmVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbal1baV0uZ2V0Q2VsbE5vZGUoKSA9PT0gaGVhZFxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhZGRTaGlwT25Cb2FyZChTZXNzaW9uLmRvdWJsZUluZGV4LCBqLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IGFkZFNoaXBPbkJvYXJkID0gKGluZGV4LCB5LCB4KSA9PiB7XG4gICAgbGV0IGRhdGEgPSBnZXREYXRhKGluZGV4LCB5LCB4KTtcbiAgICByZXR1cm4gdmlld1NoaXBPbkJvYXJkKGRhdGEpO1xufTtcblxuY29uc3QgZ2V0RGF0YSA9IChpbmRleCwgeCwgeSkgPT4ge1xuICAgIHJldHVybiBTZXNzaW9uLmFjdGl2ZVNoaXAuaXNIb3Jpem9udGFsKClcbiAgICAgICAgPyB7IHg6IHgsIHk6IHkgLSBpbmRleCB9XG4gICAgICAgIDogeyB4OiB4IC0gaW5kZXgsIHk6IHkgfTtcbn07XG5cbmNvbnN0IHZpZXdTaGlwT25Cb2FyZCA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHZpZXdTaGlwKFxuICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAsXG4gICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcC5nZXRCb2FyZCgpLmdldFN0cnVjdGVkQ29udGFpbmVyKClbZGF0YS54XVtkYXRhLnldLFxuICAgICk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHJhbmRvbUludEZyb21JbnRlcnZhbCA9IChtaW4sIG1heCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNoaWxkcyA9IChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgYWRkQ2xhc3NlcyA9IChub2RlLCAuLi5jbGFzc2VzKSA9PiB7XG4gICAgZm9yIChsZXQgY3VyQ2xhc3Mgb2YgY2xhc3Nlcykge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY3VyQ2xhc3MpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZSwgYXRycykgPT4ge1xuICAgIGZvciAobGV0IGF0ciBvZiBhdHJzKSB7XG4gICAgICAgIGUuc2V0QXR0cmlidXRlKGF0ci5uYW1lLCBhdHIudmFsKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRDaGlsZHMgPSAobm9kZSwgLi4uY2hpbGRzKSA9PiB7XG4gICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRzKSB7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cbn0iLCJpbXBvcnQgJy4vdmlld3Mvc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuL21vZGVscy9nYW1lJztcblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBHYW1lKCk7XG5nYW1lLnN0YXJ0KCk7IiwiY29uc3QgQWxwaGFiZXQgPSAoZmlyc3RDaGFyQ29kZSwgbGFzdENoYXJDb2RlKSA9PiB7XG4gICAgY29uc3QgbG9uZyA9IGxhc3RDaGFyQ29kZSAtIGZpcnN0Q2hhckNvZGUgKyAxO1xuICAgIGNvbnN0IGNvZGVzID0gQXJyYXkuZnJvbShBcnJheShsb25nKS5rZXlzKCksICh4KSA9PiB4ICsgZmlyc3RDaGFyQ29kZSk7XG5cbiAgICBjb25zdCBpc1RoaXNBbHBoYWJldCA9IChjaGFyQ29kZSkgPT4ge1xuICAgICAgICBpZiAoY2hhckNvZGUgPj0gZmlyc3RDaGFyQ29kZSAmJiBjaGFyQ29kZSA8PSBsYXN0Q2hhckNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZmlyc3RDaGFyQ29kZSwgbGFzdENoYXJDb2RlLCBsb25nLCBpc1RoaXNBbHBoYWJldCwgY29kZXMgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBBbHBoYWJldHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGVuZyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSBBbHBoYWJldCg5NywgMTIyKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWxwaGFiZXQpO1xuICAgIH07XG5cbiAgICBjb25zdCBydXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFscGhhYmV0ID0gQWxwaGFiZXQoMTA3MiwgMTEwMyk7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFscGhhYmV0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZW5nLCBydXMgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyByZW1vdmVDaGlsZHMgfSBmcm9tICcuLi9oZWxwZXIvaGVscGVyJztcbmltcG9ydCB7IHNldE5vcm1hbE9wYWNpdHkgfSBmcm9tICcuLi92aWV3cy9hbmltYXRpb25zL2NoYW5nZVZpc2libGUnO1xuaW1wb3J0IHsgZ2V0Tm9kZSB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL2ZhY3RvcnknO1xuXG5leHBvcnQgY29uc3QgQ2VsbCA9ICh4ID0gLTEsIHkgPSAtMSwgbmFtZSA9ICdjZWxsJykgPT4ge1xuICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICBsZXQgcGFyZW50ID0gJ2ZyZWUnO1xuICAgIGxldCBub2RlID0gZ2V0Tm9kZShuYW1lLCAnY2VsbCcpO1xuICAgIGxldCBsaW5rZWREZWNrID0gJ2ZyZWUnO1xuXG4gICAgY29uc3Qgc2V0TGlua2VkRGVjayA9IChkZWNrKSA9PiB7XG4gICAgICAgIGxpbmtlZERlY2sgPSBkZWNrO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExpbmtlZERlY2sgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsaW5rZWREZWNrO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRoZUhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNIaXQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoaXQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFBhcmVudCA9IChuUGFyZW50KSA9PiB7XG4gICAgICAgIHBhcmVudCA9IG5QYXJlbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBhcmVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q2VsbE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRYWSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgeCwgeSB9O1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRYWSA9IChueCwgbnkpID0+IHtcbiAgICAgICAgeCA9IG54O1xuICAgICAgICB5ID0gbnk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBoaXQgPSBmYWxzZTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdtaXNzLWhpdCcpO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rlc3Ryb3llZCcpO1xuICAgICAgICByZW1vdmVDaGlsZHMobm9kZSk7XG4gICAgICAgIHNldE5vcm1hbE9wYWNpdHkobm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0VGhlSGl0LFxuICAgICAgICBpc0hpdCxcbiAgICAgICAgc2V0UGFyZW50LFxuICAgICAgICBnZXRQYXJlbnQsXG4gICAgICAgIGdldENlbGxOb2RlLFxuICAgICAgICBnZXRYWSxcbiAgICAgICAgc2V0WFksXG4gICAgICAgIHNldExpbmtlZERlY2ssXG4gICAgICAgIGdldExpbmtlZERlY2ssXG4gICAgICAgIHJlc2V0XG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBEZWNrID0gKG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IENlbGwoLTEsIC0xLCAnZGVjaycpO1xuXG4gICAgY29uc3QgZ2V0TnVtYmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgZ2V0TnVtYmVyIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IE1hcmluZVNlY3RvciA9ICh5LCB4KSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gQ2VsbCh5LCB4LCAnbWFyaW5lLXNlY3RvcicpO1xuICAgIGxldCBvY2N1cGFudCA9ICdmcmVlJztcblxuICAgIGNvbnN0IG9jY3VweSA9IChuT2NjdXBhbnQpID0+IHtcbiAgICAgICAgb2NjdXBhbnQgPSBuT2NjdXBhbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgICAgICBvY2N1cGFudCA9ICdmcmVlJztcbiAgICAgICAgcHJvdG90eXBlLnJlc2V0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzRnJlZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9jY3VwYW50ID09PSAnZnJlZSc7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE9jY3VwYW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb2NjdXBhbnQ7XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyBpc0ZyZWUsIGNsZWFyLCBvY2N1cHksIGdldE9jY3VwYW50IH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCBDZWxsSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBnZXRCZWZvcmUgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50W3ldWy0teF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50W3ldWysreF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0QWZ0ZXIgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50W3ldWysreF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50W3ldWy0teF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0T3ZlciA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVt4XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVt4XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRVbmRlciA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVt4XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVt4XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXREaWFnMSA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVstLXhdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldWysreF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RGlhZzIgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1bKyt4XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVstLXhdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERpYWczID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldWysreF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1bLS14XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXREaWFnNCA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVstLXhdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldWysreF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q2VsbEFyb3VuZEFyZWEgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIGxldCBjZWxscyA9IFtdO1xuICAgICAgICBjZWxscy5wdXNoKGdldEJlZm9yZSh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXRBZnRlcih4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXRPdmVyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldFVuZGVyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWcxKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWcyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWczKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWc0KHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscyA9IGNlbGxzLmZpbHRlcigoY2VsbCkgPT4gY2VsbCAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREaWFkcyA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgbGV0IGNlbGxzID0gW107XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzEoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzIoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzMoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzQoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzID0gY2VsbHMuZmlsdGVyKChjZWxsKSA9PiBjZWxsICE9PSB1bmRlZmluZWQpO1xuICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0Q2VsbEFyb3VuZEFyZWEsIGdldERpYWRzIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IENyb3NzQXR0cmlidXRlcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgbGluZSA9IFtcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlJywgdmFsOiAncmVkJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2Utd2lkdGgnLCB2YWw6ICc1JScgfSxcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlLWxpbmVjYXAnLCB2YWw6ICdyb3VuZCcgfSxcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlLWRhc2hhcnJheScsIHZhbDogJzEyMCUnIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS1kYXNob2Zmc2V0JywgdmFsOiAnMTIwJScgfVxuICAgIF07XG4gICAgY29uc3QgbGVmdERpYWcgPSBbXG4gICAgICAgIHsgbmFtZTogJ3gxJywgdmFsOiAnMTAlJyB9LFxuICAgICAgICB7IG5hbWU6ICd5MScsIHZhbDogJzEwJScgfSxcbiAgICAgICAgeyBuYW1lOiAneDInLCB2YWw6ICc5MCUnIH0sXG4gICAgICAgIHsgbmFtZTogJ3kyJywgdmFsOiAnOTAlJyB9LFxuICAgIF07XG4gICAgY29uc3QgcmlnaHREaWFnID0gW1xuICAgICAgICB7IG5hbWU6ICd4MicsIHZhbDogJzEwJScgfSxcbiAgICAgICAgeyBuYW1lOiAneTInLCB2YWw6ICc5MCUnIH0sXG4gICAgICAgIHsgbmFtZTogJ3gxJywgdmFsOiAnOTAlJyB9LFxuICAgICAgICB7IG5hbWU6ICd5MScsIHZhbDogJzEwJScgfSxcbiAgICBdO1xuICAgIHJldHVybiB7IGxpbmUsIGxlZnREaWFnLCByaWdodERpYWcgfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBIb3Jpem9udGFsTGluZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgaG9yaXpvbnRhbCA9IFtcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlJywgdmFsOiAncmVkJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2Utd2lkdGgnLCB2YWw6ICdtaW4oM3ZoICwzdncpJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2UtbGluZWNhcCcsIHZhbDogJ3JvdW5kJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2UtZGFzaGFycmF5JywgdmFsOiAnMTAwdncnIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS1kYXNob2Zmc2V0JywgdmFsOiAnMTAwdncnIH0sXG4gICAgICAgIHsgbmFtZTogJ3gxJywgdmFsOiAnMHZ3JyB9LFxuICAgICAgICB7IG5hbWU6ICd5MScsIHZhbDogJzB2dycgfSxcbiAgICAgICAgeyBuYW1lOiAneDInLCB2YWw6ICcxMDB2dycgfSxcbiAgICAgICAgeyBuYW1lOiAneTInLCB2YWw6ICcwdncnIH0sXG4gICAgXVxuICAgIHJldHVybiB7IGhvcml6b250YWwgfTtcbn0pKCk7IiwiaW1wb3J0IGNyb3NzQXVkaW8gZnJvbSAnLi4vLi4vdmlld3MvYXVkaW8vY3Jvc3MubXAzJztcbmltcG9ydCBtaXNzSGl0IGZyb20gJy4uLy4uL3ZpZXdzL2F1ZGlvL3Nob3QubXAzJztcbmltcG9ydCBib29tU2hpcCBmcm9tICcuLi8uLi92aWV3cy9hdWRpby9ib29tLm1wMyc7XG5pbXBvcnQgY2xpY2sgZnJvbSAnLi4vLi4vdmlld3MvYXVkaW8vY2xpY2tQbGF5Lm1wMyc7XG5pbXBvcnQgdGltZXIgZnJvbSAnLi4vLi4vdmlld3MvYXVkaW8vdGltZXIubXAzJztcbmltcG9ydCB3aW5Tb3VuZCBmcm9tICcuLi8uLi92aWV3cy9hdWRpby93aW4ubXAzJztcbmltcG9ydCBsb3NlU291bmQgZnJvbSAnLi4vLi4vdmlld3MvYXVkaW8vbG9zZS5tcDMnO1xuXG5leHBvcnQgY29uc3QgZHJhd0Nyb3NzID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oY3Jvc3NBdWRpbylcbiAgICBhdWRpby5wbGF5YmFja1JhdGUgPSAzO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDAuNTtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3QgbWlzc0VmZmVjdCA9ICgoKSA9PiB7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKG1pc3NIaXQpO1xuICAgIGF1ZGlvLnBsYXliYWNrUmF0ZSA9IDI7XG4gICAgYXVkaW8udm9sdW1lID0gMC40O1xuICAgIHJldHVybiBhdWRpbztcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBraWxsU2hpcEVmZmVjdCA9ICgoKSA9PiB7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKGJvb21TaGlwKTtcbiAgICBhdWRpby52b2x1bWUgPSAwLjI7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGNsaWNrRWZmZWN0ID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oY2xpY2spO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDE7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IHRpbWVyRWZmZWN0ID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8odGltZXIpO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDE7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IHdpbiA9ICgoKSA9PiB7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKHdpblNvdW5kKTtcbiAgICBhdWRpby52b2x1bWUgPSAxO1xuICAgIHJldHVybiBhdWRpbztcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBsb3NlID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8obG9zZVNvdW5kKTtcbiAgICBhdWRpby52b2x1bWUgPSAxO1xuICAgIHJldHVybiBhdWRpbztcbn0pKCk7IiwiaW1wb3J0IHsgY3JlYXRlQ3Jvc3NTVkcsIHZpZXdDcm9zcyB9IGZyb20gXCIuLi8uLi92aWV3cy9ub2Rlcy9tYXJrZXJzXCI7XG5pbXBvcnQgeyBjcmVhdGVUaW1lclNWRywgdmlld1RpbWVyIH0gZnJvbSBcIi4uLy4uL3ZpZXdzL25vZGVzL3RpbWVyXCI7XG5cbmV4cG9ydCBjb25zdCBUZW1wbGF0ZSA9IChzdmcpID0+IHtcbiAgICBsZXQgYW5pbWF0aW9ucztcbiAgICBjb25zdCBnZXRTdmcgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIGFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgICAgICAgYW5pbWF0aW9uLmZpbmlzaCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNldEFuaW1hdGlvbnMgPSAodmFsKSA9PiB7XG4gICAgICAgIGFuaW1hdGlvbnMgPSB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0QW5pbWF0aW9ucywgZ2V0U3ZnLCBhbmltYXRpb25zLCByZXNldCB9O1xufVxuXG5leHBvcnQgY29uc3QgQ3Jvc3MgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gVGVtcGxhdGUoY3JlYXRlQ3Jvc3NTVkcoKSk7XG5cbiAgICBjb25zdCB2aWV3ID0gKCkgPT4ge1xuICAgICAgICBwcm90b3R5cGUuc2V0QW5pbWF0aW9ucyh2aWV3Q3Jvc3MocHJvdG90eXBlLmdldFN2ZygpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IHZpZXcgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBUaW1lciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBUZW1wbGF0ZShjcmVhdGVUaW1lclNWRygpKTtcblxuICAgIGNvbnN0IHZpZXcgPSAoKSA9PiB7XG4gICAgICAgIHByb3RvdHlwZS5zZXRBbmltYXRpb25zKHZpZXdUaW1lcihwcm90b3R5cGUuZ2V0U3ZnKCkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgdmlldyB9KTtcbn0iLCJpbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JMaW5rcyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGlua3NcIjtcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvckNlbGxzLCBzZXRMaXN0ZW5lcnNGb3JFeGl0QnV0dG9uLCBzZXRMaXN0ZW5lcnNGb3JQbGF5QnV0dG9uIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JQbGF5XCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNmb3JQb3B1cHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclBvcHVwc1wiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yU2hpcHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclNoaXBzXCI7XG5pbXBvcnQgeyByZW1vdmVIaWRkZW4sIHNldEhpZGRlbiwgc2V0TG93T3BhY2l0eSB9IGZyb20gXCIuLi92aWV3cy9hbmltYXRpb25zL2NoYW5nZVZpc2libGVcIjtcbmltcG9ydCB7IHZpZXdBY2N1cmF0ZUhpdCwgdmlld01pc3NIaXQgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvaGl0c1wiO1xuaW1wb3J0IHsgdmlld0xvc2VQb3B1cCwgdmlld1dpblBvcHVwIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL3BvcHVwc1wiO1xuaW1wb3J0IHsgdmlld1Byb2ZpbGUgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvcHJvZmlsZVwiO1xuaW1wb3J0IHsgdmlld1NoaXB5YXJkIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL3NoaXB5YXJkXCI7XG5pbXBvcnQgeyBoaWRkZW5JbnRlcmZhY2VCZWZvcmVTdGFydFBsYXksIHNldEFpTW92ZURlc2lnbiwgc2V0TWluaVNoaXB5YXJkRGVzaWduLCBzZXRQbGF5ZXJNb3ZlRGVzaWduLCB2aWV3SW50ZXJmYWNlQWZ0ZXJFbmRHYW1lIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL3VpXCI7XG5pbXBvcnQgeyBDZWxsSGFuZGxlciB9IGZyb20gXCIuL2NlbGxIYW5kbGVyXCI7XG5pbXBvcnQgeyBraWxsU2hpcEVmZmVjdCwgbWlzc0VmZmVjdCB9IGZyb20gXCIuL2VsZW1lbnRzL2F1ZGlvRWZmZWN0c1wiO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgVGltZU1hbmlwdWxhdG9ycyB9IGZyb20gXCIuL3RpbWVNYW5pcHVsYXRvcnNcIjtcblxuZXhwb3J0IGNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gICAgbGV0IHBsYXllciA9IFByb2ZpbGUoMSwgJ1BsYXllcicsICdwbGF5ZXItYm9hcmQnLCAnLmFpLW1pbmktc2hpcHlhcmQnKTtcbiAgICBsZXQgYWkgPSBQcm9maWxlKDAsICdBSScsICdhaS1ib2FyZCcsICcucGxheWVyLW1pbmktc2hpcHlhcmQnKTtcbiAgICBjb25zdCB0aW1lTWFuaXB1bGF0b3JzID0gVGltZU1hbmlwdWxhdG9ycygpO1xuICAgIGNvbnN0IGdhbWVIYW5kbGVyID0gR2FtZUhhbmRsZXIoYWksIHBsYXllciwgdGltZU1hbmlwdWxhdG9ycyk7XG5cbiAgICBjb25zdCB2aWV3RGVmYXVsSW50ZXJmYWNlcyA9ICgpID0+IHtcbiAgICAgICAgdmlld1Byb2ZpbGUocGxheWVyKTtcbiAgICAgICAgdmlld1Byb2ZpbGUoYWkpO1xuICAgICAgICB2aWV3U2hpcHlhcmQocGxheWVyLmdldFNoaXB5YXJkKCkpO1xuICAgICAgICB2aWV3U2hpcHlhcmQocGxheWVyLmdldE1pbmlTaGlweWFyZCgpKTtcbiAgICAgICAgdmlld1NoaXB5YXJkKGFpLmdldE1pbmlTaGlweWFyZCgpKTtcbiAgICAgICAgc2V0TWluaVNoaXB5YXJkRGVzaWduKHBsYXllci5nZXRNaW5pU2hpcHlhcmQoKSlcbiAgICAgICAgc2V0TWluaVNoaXB5YXJkRGVzaWduKGFpLmdldE1pbmlTaGlweWFyZCgpKVxuICAgIH1cblxuICAgIGNvbnN0IHNldERlZmF1bHRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvclNoaXBzKHBsYXllci5nZXRTaGlweWFyZCgpLmdldEFsbFNoaXBzKCkpO1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JMaW5rcygpO1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JQbGF5QnV0dG9uKCk7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckV4aXRCdXR0b24oKTtcbiAgICAgICAgc2V0TGlzdGVuZXJzZm9yUG9wdXBzKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0R2FtZVBsYXlMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckNlbGxzKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHNldERlZmF1bHRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdmlld0RlZmF1bEludGVyZmFjZXMoKTtcbiAgICAgICAgZ2FtZUhhbmRsZXIuZmlsbEJvYXJkc1RvUmFuZG9tU2hpcHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGF5ID0gKCkgPT4ge1xuICAgICAgICBnYW1lSGFuZGxlci5zZXREZWZhdWx0U2V0dGluZ3MoKTtcbiAgICAgICAgc2V0R2FtZVBsYXlMaXN0ZW5lcnMoKTtcbiAgICAgICAgaGlkZGVuSW50ZXJmYWNlQmVmb3JlU3RhcnRQbGF5KCk7XG4gICAgICAgIHBsYXlHYW1lU3RhdGUoKTtcbiAgICAgICAgcmVtb3ZlSGlkZGVuKGFpLmdldE1pbmlTaGlweWFyZCgpLmdldE5vZGUoKSlcbiAgICAgICAgcmVtb3ZlSGlkZGVuKHBsYXllci5nZXRNaW5pU2hpcHlhcmQoKS5nZXROb2RlKCkpXG4gICAgICAgIGdhbWVIYW5kbGVyLnBsYXllck1vdmUoKTtcbiAgICAgICAgdGltZU1hbmlwdWxhdG9ycy5zZXRUaW1lT2ZUaGVNb3ZlKCk7XG4gICAgICAgIHNldE1pbmlTaGlweWFyZERlc2lnbihwbGF5ZXIuZ2V0TWluaVNoaXB5YXJkKCkpXG4gICAgICAgIHNldE1pbmlTaGlweWFyZERlc2lnbihhaS5nZXRNaW5pU2hpcHlhcmQoKSlcbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSAoKSA9PiB7XG4gICAgICAgIHNldEhpZGRlbihhaS5nZXRNaW5pU2hpcHlhcmQoKS5nZXROb2RlKCkpXG4gICAgICAgIHNldEhpZGRlbihwbGF5ZXIuZ2V0TWluaVNoaXB5YXJkKCkuZ2V0Tm9kZSgpKVxuICAgICAgICBhaS5nZXRNaW5pU2hpcHlhcmQoKS5yZXNldCgpXG4gICAgICAgIHBsYXllci5nZXRNaW5pU2hpcHlhcmQoKS5yZXNldCgpXG4gICAgICAgIHRpbWVNYW5pcHVsYXRvcnMucmVzZXQoKTtcbiAgICAgICAgdmlld0ludGVyZmFjZUFmdGVyRW5kR2FtZSgpO1xuICAgICAgICBlbmRHYW1lU3RhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGF5R2FtZVN0YXRlID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpXG4gICAgICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS5ibG9ja1NoaXBzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kR2FtZVN0YXRlID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcpXG4gICAgICAgIGFpLmdldEdhbWVib2FyZCgpLmJsb2NrKCk7XG4gICAgICAgIGFpLmdldEdhbWVib2FyZCgpLnJlc2V0KCk7XG4gICAgICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS51bmJsb2NrU2hpcHMoKTtcbiAgICAgICAgcGxheWVyLmdldEdhbWVib2FyZCgpLnJlc2V0KCk7XG4gICAgICAgIGdhbWVIYW5kbGVyLmZpbGxCb2FyZHNUb1JhbmRvbVNoaXBzKCk7XG4gICAgICAgIGFpLmdldEdhbWVib2FyZCgpLmhpZGRlblNoaXBzKCk7XG4gICAgICAgIHNldEFpTW92ZURlc2lnbihhaSwgcGxheWVyKVxuICAgIH1cblxuICAgIHJldHVybiB7IHN0YXJ0LCBwbGF5LCBlbmQsIGFpLCBwbGF5ZXIsIGdhbWVIYW5kbGVyIH1cbn1cblxuY29uc3QgR2FtZUhhbmRsZXIgPSAoYWksIHBsYXllciwgdGltZU1hbmlwdWxhdG9ycykgPT4ge1xuICAgIGxldCBtb3ZlO1xuICAgIGxldCBwbGF5ZXJDZWxscyA9IFsuLi5wbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcigpXTtcbiAgICBsZXQgYWlDZWxscyA9IFsuLi5haS5nZXRHYW1lYm9hcmQoKS5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCldO1xuXG4gICAgY29uc3Qgc2V0RGVmYXVsdFNldHRpbmdzID0gKCkgPT4ge1xuICAgICAgICBtb3ZlID0gJ3BsYXllcic7XG4gICAgICAgIHBsYXllckNlbGxzID0gWy4uLnBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCldO1xuICAgICAgICBhaUNlbGxzID0gWy4uLmFpLmdldEdhbWVib2FyZCgpLmdldFVuc3RydWN0ZWRDb250YWluZXIoKV07XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbW92ZSA9PT0gJ2FpJyA/IGFpIDogcGxheWVyO1xuICAgIH1cblxuICAgIGNvbnN0IHN3aXRjaE1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHRpbWVNYW5pcHVsYXRvcnMucmVzZXQoKTtcbiAgICAgICAgaWYgKGlzRW5kR2FtZSgpKSB7XG4gICAgICAgICAgICBvcGVuUG9wdXAoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChtb3ZlID09PSAnYWknKSB7XG4gICAgICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnNldFRpbWVPZlRoZU1vdmUoKTtcbiAgICAgICAgICAgIG1vdmUgPSAncGxheWVyJztcbiAgICAgICAgICAgIHBsYXllck1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vdmUgPSAnYWknO1xuICAgICAgICAgICAgYWlNb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc0VuZEdhbWUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBpc0VuZCA9IGlzUGxheWVyTG9zZShwbGF5ZXIpIHx8IGlzUGxheWVyTG9zZShhaSk7XG4gICAgICAgIHJldHVybiBpc0VuZDtcbiAgICB9XG5cbiAgICBjb25zdCBpc1BsYXllckxvc2UgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIGxldCBpc0xvc2UgPSB0cnVlO1xuICAgICAgICBjb25zdCBzaGlwcyA9IHBsYXllci5nZXRTaGlweWFyZCgpLmdldEFsbFNoaXBzKCk7XG4gICAgICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5pc0xpdmUoKSkge1xuICAgICAgICAgICAgICAgIGlzTG9zZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaXNMb3NlO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXllck1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGFpLmdldEdhbWVib2FyZCgpLnVuYmxvY2soKTtcbiAgICAgICAgc2V0UGxheWVyTW92ZURlc2lnbihhaSwgcGxheWVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0NlbGwgPSAoY2VsbCkgPT4ge1xuICAgICAgICBpZiAoYWlDZWxscy5pbmNsdWRlcyhjZWxsKSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBhaUNlbGxzLmluZGV4T2YoY2VsbCk7XG4gICAgICAgICAgICBhaS5nZXRHYW1lYm9hcmQoKS5ibG9jaygpO1xuICAgICAgICAgICAgdGFrZUhpdChhaUNlbGxzLnNwbGljZShpbmRleCwgMSlbMF0pO1xuICAgICAgICAgICAgdGltZU1hbmlwdWxhdG9ycy5zZXRUaW1lQmV0d2Vlbk1vdmVzKDUwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhaU1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGFpLmdldEdhbWVib2FyZCgpLmJsb2NrKCk7XG4gICAgICAgIHNldEFpTW92ZURlc2lnbihhaSwgcGxheWVyKTtcbiAgICAgICAgdGltZU1hbmlwdWxhdG9ycy5zZXRBaVNwZWVkT2ZUb3VnaHQocGxheWVyQ2VsbHMpO1xuICAgIH1cblxuICAgIGNvbnN0IHRha2VIaXQgPSAoY2VsbCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gY2VsbC5nZXRPY2N1cGFudCgpO1xuICAgICAgICBjZWxsLnNldFRoZUhpdCgpO1xuICAgICAgICBpZiAoc2hpcCA9PT0gJ2ZyZWUnKSB7XG4gICAgICAgICAgICB2aWV3TWlzc0hpdChjZWxsKTtcbiAgICAgICAgICAgIG1pc3NFZmZlY3QucGxheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld0FjY3VyYXRlSGl0KGNlbGwpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrTGl2ZVNoaXAoc2hpcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGl0QWxsRGlhZ3MoY2VsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vdmUgPSBtb3ZlID09PSAnYWknID8gJ3BsYXllcicgOiAnYWknO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrTGl2ZVNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBpZiAoIXNoaXAuaXNMaXZlKCkpIHtcbiAgICAgICAgICAgIGtpbGxTaGlwRWZmZWN0LnBsYXkoKTtcbiAgICAgICAgICAgIHNoaXAua2lsbCgpO1xuICAgICAgICAgICAgbGV0IG1pbmlTaGlwID0gZ2V0TWluaVNoaXAoc2hpcCk7XG4gICAgICAgICAgICBtaW5pU2hpcC5raWxsKCk7XG4gICAgICAgICAgICBoaXRBbGxBcmVhQXJvdW5kU2hpcChzaGlwKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGlwLmlzTGl2ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGhpdEFsbEFyZWFBcm91bmRTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgYXJlYSA9IHNoaXAuZ2V0V2F0ZXJBcmVhcygpLmdldEFyZWFBcm91bmRUaGVTaGlwKCk7XG4gICAgICAgIGFyZWEuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGlmICghY2VsbC5pc0hpdCgpKSB7XG4gICAgICAgICAgICAgICAgc2V0TG93T3BhY2l0eShjZWxsLmdldENlbGxOb2RlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmlld01pc3NIaXQoY2VsbCk7XG4gICAgICAgICAgICByZW1vdmVDZWxsKGNlbGwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVDZWxsID0gKGNlbGwpID0+IHtcbiAgICAgICAgbGV0IGNlbGxzID0gbW92ZSA9PT0gJ2FpJyA/IHBsYXllckNlbGxzIDogYWlDZWxscztcbiAgICAgICAgbGV0IGluZGV4ID0gY2VsbHMuaW5kZXhPZihjZWxsKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGNlbGxzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoaXRBbGxEaWFncyA9IChoaXRDZWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBDZWxsSGFuZGxlcigpO1xuICAgICAgICBjb25zdCB4ID0gaGl0Q2VsbC5nZXRYWSgpLng7XG4gICAgICAgIGNvbnN0IHkgPSBoaXRDZWxsLmdldFhZKCkueTtcbiAgICAgICAgY29uc3Qgb3Bwb25lbnQgPSBtb3ZlID09PSAnYWknID8gcGxheWVyIDogYWk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IG9wcG9uZW50LmdldEdhbWVib2FyZCgpLmdldFN0cnVjdGVkQ29udGFpbmVyKCk7XG4gICAgICAgIGNvbnN0IGNlbGxzID0gaGFuZGxlci5nZXREaWFkcyh4LCB5LCBwYXJlbnQpO1xuICAgICAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgaWYgKGNlbGwgIT09IGhpdENlbGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNlbGwuaXNIaXQoKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRMb3dPcGFjaXR5KGNlbGwuZ2V0Q2VsbE5vZGUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZpZXdNaXNzSGl0KGNlbGwpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUNlbGwoY2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE1pbmlTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHNoaXAuZ2V0VHlwZSgpO1xuICAgICAgICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBnZXRBY3RpdmVQbGF5ZXIoKTtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBhY3RpdmVQbGF5ZXIuZ2V0TWluaVNoaXB5YXJkKCkuZ2V0U2hpcHNPZlR5cGUodHlwZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlwc1tpXS5pc0xpdmUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaGlwc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZpbGxCb2FyZHNUb1JhbmRvbVNoaXBzID0gKCkgPT4ge1xuICAgICAgICBhaS5nZXRHYW1lYm9hcmQoKS5yYW5kb21GaWxsaW5nT2ZTaGlwcygpO1xuICAgICAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucmFuZG9tRmlsbGluZ09mU2hpcHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcGVuUG9wdXAgPSAoKSA9PiB7XG4gICAgICAgIG1vdmUgPT09ICdwbGF5ZXInID8gdmlld0xvc2VQb3B1cCgpIDogdmlld1dpblBvcHVwKClcbiAgICB9XG5cbiAgICByZXR1cm4geyBjaGVja0NlbGwsIHBsYXllck1vdmUsIHNldERlZmF1bHRTZXR0aW5ncywgc3dpdGNoTW92ZSwgdGFrZUhpdCwgaXNFbmRHYW1lLCBmaWxsQm9hcmRzVG9SYW5kb21TaGlwcyB9O1xufSIsImltcG9ydCB7IHNldE51bGxPcGFjaXR5IH0gZnJvbSAnLi4vdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlJztcbmltcG9ydCB7IHZpZXdTaGlwT25SYW5kb21DZWxsIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvc2hpcCc7XG5pbXBvcnQgeyBNYXJpbmVTZWN0b3IgfSBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9nYW1lQ29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9IChuYW1lLCBwbGF5ZXIpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IENvbmZpZy5HYW1lYm9hcmQud2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0ID0gQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQ7XG4gICAgY29uc3QgY29udGFpbmVycyA9IGZpbGxCb2FyZCh3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX1gKTtcblxuICAgIGNvbnN0IGdldFN0cnVjdGVkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVycy5nZXRTdHJ1Y3RlZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRVbnN0cnVjdGVkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVycy5nZXRVbnN0cnVjdGVkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBsYXllciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lcnMuZ2V0VW5zdHJ1Y3RlZCgpLmZvckVhY2goKHNlY3RvcikgPT4ge1xuICAgICAgICAgICAgc2VjdG9yLmNsZWFyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwbGF5ZXIuZ2V0U2hpcHlhcmQoKS5yZXNldCgpO1xuICAgIH07XG5cbiAgICBjb25zdCByYW5kb21GaWxsaW5nT2ZTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgbGV0IHNoaXBzID0gcGxheWVyLmdldFNoaXB5YXJkKCkuZ2V0QWxsU2hpcHMoKTtcblxuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBzaGlwLnNldFJhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICB2aWV3U2hpcE9uUmFuZG9tQ2VsbChzaGlwLCBbLi4uZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcigpXSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBibG9ja1NoaXBzID0gKCkgPT4ge1xuICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5ibG9ja1NoaXBzID0gKCkgPT4ge1xuICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2snKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZGVuU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICAgICAgYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSAnMHB4IGJsdWUgc29saWQnO1xuICAgICAgICB9KTtcbiAgICAgICAgYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmRlY2snKS5mb3JFYWNoKGRlY2sgPT4ge1xuICAgICAgICAgICAgc2V0TnVsbE9wYWNpdHkoZGVjaylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2sgPSAoKSA9PiB7XG4gICAgICAgIG5vZGUucXVlcnlTZWxlY3RvcignLmJvYXJkJykuY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICB9XG5cbiAgICBjb25zdCB1bmJsb2NrID0gKCkgPT4ge1xuICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2NrJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmFuZG9tRmlsbGluZ09mU2hpcHMsXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBnZXRQbGF5ZXIsXG4gICAgICAgIGdldFN0cnVjdGVkQ29udGFpbmVyLFxuICAgICAgICBnZXRVbnN0cnVjdGVkQ29udGFpbmVyLFxuICAgICAgICBnZXRTaXplLFxuICAgICAgICBnZXROb2RlLFxuICAgICAgICBibG9ja1NoaXBzLFxuICAgICAgICB1bmJsb2NrU2hpcHMsXG4gICAgICAgIGhpZGRlblNoaXBzLFxuICAgICAgICBibG9jayxcbiAgICAgICAgdW5ibG9ja1xuICAgIH07XG59O1xuXG5jb25zdCBmaWxsQm9hcmQgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuICAgIGxldCBzdHJ1Y3RlZCA9IFtdO1xuICAgIGxldCB1bnN0cnVjdGVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgIGxldCBsaW5lID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IE1hcmluZVNlY3RvcihqLCBpKTtcbiAgICAgICAgICAgIGxpbmVbal0gPSBjZWxsO1xuICAgICAgICAgICAgdW5zdHJ1Y3RlZC5wdXNoKGNlbGwpO1xuICAgICAgICB9XG4gICAgICAgIHN0cnVjdGVkW2ldID0gbGluZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTdHJ1Y3RlZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN0cnVjdGVkO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRVbnN0cnVjdGVkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdW5zdHJ1Y3RlZDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0U3RydWN0ZWQsIGdldFVuc3RydWN0ZWQgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgQ29uZmlnID0gKCgpID0+IHtcbiAgICBjb25zdCBHYW1lYm9hcmQgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IDEwO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAxMDtcbiAgICAgICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBFbGVtZW50cyA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBUeXBlcyA9IFsnZnJlZ2F0cycsICdjYXJhdmVscycsICdkcmFra2FycycsICdib2F0cyddO1xuICAgICAgICBjb25zdCBudW1iZXJPZiA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmcmVnYXRlcyA9IDE7XG4gICAgICAgICAgICBjb25zdCBjYXJhdmVscyA9IDI7XG4gICAgICAgICAgICBjb25zdCBkcmFra2FycyA9IDM7XG4gICAgICAgICAgICBjb25zdCBib2F0cyA9IDQ7XG4gICAgICAgICAgICByZXR1cm4geyBmcmVnYXRlcywgY2FyYXZlbHMsIGRyYWtrYXJzLCBib2F0cyB9O1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHJldHVybiB7IG51bWJlck9mLCBzaGlwVHlwZXMgfTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgR2FtZWJvYXJkLCBFbGVtZW50cyB9O1xufSkoKTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZUJvYXJkJztcbmltcG9ydCB7IFNoaXB5YXJkIH0gZnJvbSAnLi9zaGlweWFyZCc7XG5cbmNvbnN0IFBsYXllciA9IChpZCwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IGdldElkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRJZCwgZ2V0TmFtZSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGUgPSAoaWQsIG5hbWUsIG5vZGVJZCwgbWluaVNoaXB5YXJkSWQpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBQbGF5ZXIoaWQsIG5hbWUpO1xuXG4gICAgbGV0IGdhbWVib2FyZCA9IEdhbWVib2FyZChub2RlSWQsIHByb3RvdHlwZSk7XG4gICAgbGV0IHNoaXB5YXJkID0gU2hpcHlhcmQocHJvdG90eXBlKTtcbiAgICBsZXQgbWluaVNoaXB5YXJkID0gU2hpcHlhcmQocHJvdG90eXBlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1pbmlTaGlweWFyZElkKSk7XG5cbiAgICBjb25zdCBnZXRHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFNoaXB5YXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHlhcmQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE1pbmlTaGlweWFyZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG1pbmlTaGlweWFyZDtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgZ2V0R2FtZWJvYXJkLCBnZXRTaGlweWFyZCwgZ2V0TWluaVNoaXB5YXJkIH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCBTZXNzaW9uID0gKCgpID0+IHtcbiAgICBsZXQgYWN0aXZlU2hpcCA9IG51bGw7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgZG91YmxlSW5kZXggPSAnc2hpcCc7XG4gICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gbnVsbDtcbiAgICBsZXQgY2hvaXNlZENlbGwgPSBudWxsO1xuICAgIGxldCBtYW51YWxNb2RlID0gZmFsc2U7XG4gICAgcmV0dXJuIHsgbWFudWFsTW9kZSwgYWN0aXZlU2hpcCwgaW5kZXgsIGRvdWJsZUluZGV4LCBjdXJyZW50RWxlbWVudCwgY2hvaXNlZENlbGwgfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCByZXNldFNlc3Npb24gPSAoKSA9PiB7XG4gICAgU2Vzc2lvbi5hY3RpdmVTaGlwID0gbnVsbDtcbiAgICBTZXNzaW9uLmluZGV4ID0gMDtcbiAgICBTZXNzaW9uLmRvdWJsZUluZGV4ID0gJ3NoaXAnO1xuICAgIFNlc3Npb24uY3VycmVudEVsZW1lbnQgPSBudWxsO1xufTtcbiIsImltcG9ydCB7IHJhbmRvbUludEZyb21JbnRlcnZhbCB9IGZyb20gJy4uL2hlbHBlci9oZWxwZXInO1xuaW1wb3J0IHsgc2V0TG93T3BhY2l0eSB9IGZyb20gJy4uL3ZpZXdzL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZSc7XG5pbXBvcnQgeyBnZXROb2RlIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvZmFjdG9yeSc7XG5pbXBvcnQgeyByZXNldFNoaXBTdHlsZSwgc2V0RGVhdGhTdHlsZU9uU2hpcCwgc2V0U3RhbmRhcnRIb3Jpem9udGFsU2hpcERlc2lnbiwgc2V0U3RhbmRhcnRWZXJ0aWNhbFNoaXBEZXNpZ24gfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9zaGlwJztcbmltcG9ydCB7IERlY2sgfSBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IHsgU2hpcFdhdGVyQXJlYXMgfSBmcm9tICcuL3dhdGVyQXJlYXMnO1xuXG5leHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgsIHBsYXllciwgdHlwZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldE5vZGUoJ3NoaXAnLCAnaG9yaXpvbnRhbCcpO1xuICAgIGxldCBib2R5ID0gW107XG4gICAgbGV0IGxpdmUgPSB0cnVlO1xuICAgIGxldCBob3Jpem9udGFsID0gdHJ1ZTtcbiAgICBsZXQgaGVhZCA9IG51bGw7XG4gICAgbGV0IHNoaXAgPSB7fTtcbiAgICBsZXQgc2hpcFdhdGVyQXJlYXMgPSBTaGlwV2F0ZXJBcmVhcyhwbGF5ZXIsIHNoaXApO1xuXG4gICAgY29uc3Qgc2V0WW91cnNlbGYgPSAodGhpc1NoaXApID0+IHtcbiAgICAgICAgc2hpcCA9IHRoaXNTaGlwO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFlvdXJzZWxmID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxsQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGVjayA9IERlY2soaSk7XG4gICAgICAgICAgICBib2R5LnB1c2goZGVjayk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVjay5nZXRDZWxsTm9kZSgpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZXRPcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgICAgICAgICAgc2V0VmVydGljYWwoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpKSB7XG4gICAgICAgICAgICBzZXRIb3Jpem9udGFsKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdGFrZURvd25XYXRlckFyZWFzID0gKCkgPT4ge1xuICAgICAgICBzaGlwV2F0ZXJBcmVhcy5jbGVhckFyZWFzKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxhdW5jaFNoaXBPbldhdGVyID0gKG5IZWFkKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgd2F0ZXJBcmVhcyA9IGdldFdhdGVyQXJlYShuSGVhZCk7XG4gICAgICAgICAgICBsZXQgYWNlc3NpYmlsaXR5ID0gd2F0ZXJBcmVhcy5jaGVja0FyZWEoKTtcbiAgICAgICAgICAgIGlmIChhY2Vzc2liaWxpdHkpIHtcbiAgICAgICAgICAgICAgICB0YWtlRG93bldhdGVyQXJlYXMoKTtcbiAgICAgICAgICAgICAgICBzaGlwV2F0ZXJBcmVhcyA9IHdhdGVyQXJlYXM7XG4gICAgICAgICAgICAgICAgbGlua1NoaXBXaXRoRmllbGQoKTtcbiAgICAgICAgICAgICAgICBzaGlwV2F0ZXJBcmVhcy5vY2N1cHlBcmVhcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjZXNzaWJpbGl0eTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBsaW5rU2hpcFdpdGhGaWVsZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFyZWEgPSBzaGlwV2F0ZXJBcmVhcy5nZXRBcmVhVW5kZXJUaGVTaGlwKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHh5ID0gYXJlYVtpXS5nZXRYWSgpO1xuICAgICAgICAgICAgYm9keVtpXS5zZXRYWSh4eS54LCB4eS55KTtcbiAgICAgICAgICAgIGFyZWFbaV0uc2V0TGlua2VkRGVjayhib2R5W2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFdhdGVyQXJlYSA9IChoZWFkKSA9PiB7XG4gICAgICAgIGxldCBib2FyZCA9IGdldEJvYXJkKCkuZ2V0U3RydWN0ZWRDb250YWluZXIoKTtcbiAgICAgICAgbGV0IGFyZWFzID0gU2hpcFdhdGVyQXJlYXMocGxheWVyLCBzaGlwKTtcbiAgICAgICAgbGV0IHggPSBoZWFkLmdldFhZKCkueDtcbiAgICAgICAgbGV0IHkgPSBoZWFkLmdldFhZKCkueTtcbiAgICAgICAgbGV0IG5lY2Vzc2FyeVNlY3RvcnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmVjZXNzYXJ5U2VjdG9ycy5wdXNoKGJvYXJkW3ldW3hdKTtcbiAgICAgICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJlYXMuc2V0QXJlYXMobmVjZXNzYXJ5U2VjdG9ycyk7XG4gICAgICAgIHJldHVybiBhcmVhcztcbiAgICB9O1xuXG4gICAgY29uc3QgaXNMaXZlID0gKCkgPT4ge1xuICAgICAgICBsaXZlID0gZmFsc2U7XG5cbiAgICAgICAgYm9keS5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRlY2suaXNIaXQoKSkge1xuICAgICAgICAgICAgICAgIGxpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbGl2ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Qm9keSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0SGVhZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhlYWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEhlYWQgPSAobkhlYWQpID0+IHtcbiAgICAgICAgaGVhZCA9IG5IZWFkO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0hvcml6b250YWwgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBob3Jpem9udGFsO1xuICAgIH07XG5cbiAgICBjb25zdCBvcmllbnRhdGlvblN3aXRjaCA9ICgpID0+IHtcbiAgICAgICAgaG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRWZXJ0aWNhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhbmRhcnRWZXJ0aWNhbFNoaXBEZXNpZ24oY29udGFpbmVyLCBsZW5ndGgpO1xuICAgICAgICBob3Jpem9udGFsID0gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEhvcml6b250YWwgPSAoKSA9PiB7XG4gICAgICAgIHNldFN0YW5kYXJ0SG9yaXpvbnRhbFNoaXBEZXNpZ24oY29udGFpbmVyLCBsZW5ndGgpO1xuICAgICAgICBob3Jpem9udGFsID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0UmFuZG9tT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHJhbmRvbUludEZyb21JbnRlcnZhbCgwLCAxKSA9PT0gMSA/IHNldEhvcml6b250YWwoKSA6IHNldFZlcnRpY2FsKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyLmdldEdhbWVib2FyZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgaGVhZCA9IG51bGw7XG4gICAgICAgIGlmICghY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnbWluaS1zaGlwJykpIHtcbiAgICAgICAgICAgIHNldEhvcml6b250YWwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXNldEJvZHkoKTtcbiAgICAgICAgc2hpcFdhdGVyQXJlYXMuY2xlYXJBcmVhcygpO1xuICAgICAgICBzaGlwV2F0ZXJBcmVhcyA9IFNoaXBXYXRlckFyZWFzKHBsYXllciwgc2hpcCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0Qm9keSA9ICgpID0+IHtcbiAgICAgICAgcmVzZXRTaGlwU3R5bGUoY29udGFpbmVyKTtcbiAgICAgICAgYm9keS5mb3JFYWNoKGRlY2sgPT4ge1xuICAgICAgICAgICAgZGVjay5yZXNldCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cblxuICAgIGNvbnN0IGtpbGwgPSAoKSA9PiB7XG4gICAgICAgIGJvZHkuZm9yRWFjaChkZWNrID0+IHtcbiAgICAgICAgICAgIHNldExvd09wYWNpdHkoZGVjay5nZXRDZWxsTm9kZSgpKTtcbiAgICAgICAgICAgIGRlY2suc2V0VGhlSGl0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIHNldERlYXRoU3R5bGVPblNoaXAoY29udGFpbmVyKTtcbiAgICAgICAgbGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFdhdGVyQXJlYXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwV2F0ZXJBcmVhc1xuICAgIH1cblxuICAgIGZpbGxDb250YWluZXIoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFJhbmRvbU9yaWVudGF0aW9uLFxuICAgICAgICByZXNldCxcbiAgICAgICAgc2V0SG9yaXpvbnRhbCxcbiAgICAgICAgc2V0VmVydGljYWwsXG4gICAgICAgIGdldEJvYXJkLFxuICAgICAgICB0YWtlRG93bldhdGVyQXJlYXMsXG4gICAgICAgIGxhdW5jaFNoaXBPbldhdGVyLFxuICAgICAgICBvcmllbnRhdGlvblN3aXRjaCxcbiAgICAgICAgc2V0T3JpZW50YXRpb24sXG4gICAgICAgIGlzTGl2ZSxcbiAgICAgICAgZ2V0Qm9keSxcbiAgICAgICAgZ2V0Q29udGFpbmVyLFxuICAgICAgICBnZXRIZWFkLFxuICAgICAgICBzZXRIZWFkLFxuICAgICAgICBpc0hvcml6b250YWwsXG4gICAgICAgIHNldFlvdXJzZWxmLFxuICAgICAgICBnZXRZb3Vyc2VsZixcbiAgICAgICAgZ2V0VHlwZSxcbiAgICAgICAga2lsbCxcbiAgICAgICAgZ2V0V2F0ZXJBcmVhc1xuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgRnJlZ2F0ID0gKG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFNoaXAoNCwgbWFya2VyLCAnZnJlZ2F0cycpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgbWFya2VyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBDYXJhdmVsID0gKG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFNoaXAoMywgbWFya2VyLCAnY2FyYXZlbHMnKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IERyYWtrYXIgPSAobWFya2VyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgyLCBtYXJrZXIsICdkcmFra2FycycpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgQm9hdCA9IChtYXJrZXIpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDEsIG1hcmtlciwgJ2JvYXRzJyk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlKTtcbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2dhbWVDb25maWcnO1xuaW1wb3J0IHsgQm9hdCwgQ2FyYXZlbCwgRHJha2thciwgRnJlZ2F0IH0gZnJvbSAnLi9zaGlwJztcblxuZXhwb3J0IGNvbnN0IFNoaXB5YXJkID0gKHBsYXllciwgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlweWFyZCcpKSA9PiB7XG4gICAgY29uc3QgZnJlZ2F0cyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmZyZWdhdGVzLCAnRnJlZ2F0JywgcGxheWVyKTtcbiAgICBjb25zdCBjYXJhdmVscyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmNhcmF2ZWxzLCAnQ2FyYXZlbCcsIHBsYXllcik7XG4gICAgY29uc3QgZHJha2thcnMgPSBEb2NrKENvbmZpZy5FbGVtZW50cy5udW1iZXJPZi5kcmFra2FycywgJ0RyYWtrYXInLCBwbGF5ZXIpO1xuICAgIGNvbnN0IGJvYXRzID0gRG9jayhDb25maWcuRWxlbWVudHMubnVtYmVyT2YuYm9hdHMsICdCb2F0JywgcGxheWVyKTtcbiAgICBjb25zdCBzaGlwcyA9IGZyZWdhdHNcbiAgICAgICAgLmdldFNoaXBzKClcbiAgICAgICAgLmNvbmNhdChcbiAgICAgICAgICAgIGNhcmF2ZWxzXG4gICAgICAgICAgICAgICAgLmdldFNoaXBzKClcbiAgICAgICAgICAgICAgICAuY29uY2F0KGRyYWtrYXJzLmdldFNoaXBzKCkuY29uY2F0KGJvYXRzLmdldFNoaXBzKCkpKSxcbiAgICAgICAgKTtcblxuICAgIGNvbnN0IGdldFNoaXBzT2ZUeXBlID0gKHR5cGUpID0+IHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdmcmVnYXRzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJlZ2F0cy5nZXRTaGlwcygpO1xuICAgICAgICAgICAgY2FzZSAnY2FyYXZlbHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBjYXJhdmVscy5nZXRTaGlwcygpO1xuICAgICAgICAgICAgY2FzZSAnZHJha2thcnMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBkcmFra2Fycy5nZXRTaGlwcygpO1xuICAgICAgICAgICAgY2FzZSAnYm9hdHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBib2F0cy5nZXRTaGlwcygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERvY2tXaXRoRnJlZ2F0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZyZWdhdHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERvY2tXaXRoQ2FyYXZlbHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjYXJhdmVscztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhEcmFra2FycyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWtrYXJzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREb2NrV2l0aEJvYXRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYm9hdHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBsYXllciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0QWxsU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgaXNFbXB0eSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGxhdW5jaGVkU2hpcHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJyk7XG4gICAgICAgIHJldHVybiBsYXVuY2hlZFNoaXBzLmxlbmd0aCA9PT0gMDtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAucmVzZXQoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFNoaXBzT2ZUeXBlLFxuICAgICAgICBpc0VtcHR5LFxuICAgICAgICByZXNldCxcbiAgICAgICAgZ2V0QWxsU2hpcHMsXG4gICAgICAgIGdldFBsYXllcixcbiAgICAgICAgZ2V0RG9ja1dpdGhGcmVnYXRzLFxuICAgICAgICBnZXREb2NrV2l0aENhcmF2ZWxzLFxuICAgICAgICBnZXREb2NrV2l0aERyYWtrYXJzLFxuICAgICAgICBnZXREb2NrV2l0aEJvYXRzLFxuICAgICAgICBnZXROb2RlXG4gICAgfTtcbn07XG5cbmNvbnN0IERvY2sgPSAoY291bnQsIHNoaXBCbHVlUHJpbnQsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gW107XG5cbiAgICBjb25zdCBmaWxsRG9jayA9IChjb3VudCwgc2hpcEJsdWVQcmludCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBidWlsZFNoaXAoc2hpcEJsdWVQcmludCk7XG4gICAgICAgICAgICBzaGlwLnNldFlvdXJzZWxmKHNoaXApO1xuICAgICAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBidWlsZFNoaXAgPSAoYmx1ZVByaW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYmx1ZVByaW50KSB7XG4gICAgICAgICAgICBjYXNlICdGcmVnYXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBGcmVnYXQocGxheWVyKTtcbiAgICAgICAgICAgIGNhc2UgJ0NhcmF2ZWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiBDYXJhdmVsKHBsYXllcik7XG4gICAgICAgICAgICBjYXNlICdEcmFra2FyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gRHJha2thcihwbGF5ZXIpO1xuICAgICAgICAgICAgY2FzZSAnQm9hdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvYXQocGxheWVyKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NvcnJ5LCBpbGxlZ2FsIHNoaXAgYmx1ZXByaW50Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZmlsbERvY2soY291bnQsIHNoaXBCbHVlUHJpbnQpO1xuXG4gICAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0U2hpcHMgfTtcbn07XG4iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBnZXRSYW5kb21DZWxsIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL3NoaXBcIjtcbmltcG9ydCB7IHRpbWVyRWZmZWN0IH0gZnJvbSBcIi4vZWxlbWVudHMvYXVkaW9FZmZlY3RzXCI7XG5pbXBvcnQgeyBUaW1lciB9IGZyb20gXCIuL2VsZW1lbnRzL3RlbXBsYXRlc1wiO1xuXG5cbmV4cG9ydCBjb25zdCBUaW1lTWFuaXB1bGF0b3JzID0gKCkgPT4ge1xuICAgIGxldCB0aW1lT2ZUaGVNb3ZlO1xuICAgIGxldCBhaVNwZWVkT2ZUb3VnaHQ7XG4gICAgbGV0IHRpbWVCZXR3ZWVuTW92ZXM7XG4gICAgbGV0IGFsYXJtO1xuICAgIGxldCB0aW1lciA9IFRpbWVyKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVyJykuYXBwZW5kQ2hpbGQodGltZXIuZ2V0U3ZnKCkpO1xuXG4gICAgY29uc3Qgc2V0QWlTcGVlZE9mVG91Z2h0ID0gKGNlbGxzKSA9PiB7XG4gICAgICAgIGFpU3BlZWRPZlRvdWdodCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZS5nYW1lSGFuZGxlci50YWtlSGl0KGdldFJhbmRvbUNlbGwoY2VsbHMpKTtcbiAgICAgICAgICAgIHNldFRpbWVCZXR3ZWVuTW92ZXMoMTAwMCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRpbWVCZXR3ZWVuTW92ZXMgPSAodGltZW91dCkgPT4ge1xuICAgICAgICB0aW1lQmV0d2Vlbk1vdmVzID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBnYW1lLmdhbWVIYW5kbGVyLnN3aXRjaE1vdmUoKTtcbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGltZU9mVGhlTW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGltZXIudmlldygpO1xuICAgICAgICB0aW1lT2ZUaGVNb3ZlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZS5nYW1lSGFuZGxlci5zd2l0Y2hNb3ZlKCk7XG4gICAgICAgIH0sIDE1MDAwKTtcbiAgICAgICAgYWxhcm0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRpbWVyRWZmZWN0LnBsYXkoKTtcbiAgICAgICAgfSwgMTAwMDApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICB0aW1lci5yZXNldCgpO1xuICAgICAgICBjbGVhclRpbWVvdXQoYWlTcGVlZE9mVG91Z2h0KTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVCZXR3ZWVuTW92ZXMpO1xuICAgICAgICBjbGVhclRpbWVvdXQoYWxhcm0pO1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVPZlRoZU1vdmUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNldEFpU3BlZWRPZlRvdWdodCwgc2V0VGltZUJldHdlZW5Nb3Zlcywgc2V0VGltZU9mVGhlTW92ZSwgcmVzZXQgfVxufSIsImltcG9ydCB7IENlbGxIYW5kbGVyIH0gZnJvbSAnLi9jZWxsSGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBTaGlwV2F0ZXJBcmVhcyA9IChwbGF5ZXIsIHNoaXApID0+IHtcbiAgICBsZXQgdW5kZXJUaGVTaGlwID0gW107XG4gICAgbGV0IGFyb3VuZFRoZVNoaXAgPSBbXTtcblxuICAgIGNvbnN0IGdldEFyZWFVbmRlclRoZVNoaXAgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB1bmRlclRoZVNoaXA7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEFyZWFBcm91bmRUaGVTaGlwID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXJvdW5kVGhlU2hpcDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0QXJlYXMgPSAoYXJlYSkgPT4ge1xuICAgICAgICB1bmRlclRoZVNoaXAgPSBhcmVhO1xuICAgICAgICBhcm91bmRUaGVTaGlwID0gc2V0QXJlYUFyb3VuZFRoZVNoaXAoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0QXJlYUFyb3VuZFRoZVNoaXAgPSAoKSA9PiB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gQ2VsbEhhbmRsZXIoKTtcbiAgICAgICAgbGV0IGFyZWFzID0gW107XG4gICAgICAgIGxldCBwYXJlbnQgPSBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0U3RydWN0ZWRDb250YWluZXIoKTtcbiAgICAgICAgdW5kZXJUaGVTaGlwLmZvckVhY2goKHNlY3RvcikgPT4ge1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gc2VjdG9yLmdldFhZKCk7XG4gICAgICAgICAgICBsZXQgYXJlYSA9IGhhbmRsZXIuZ2V0Q2VsbEFyb3VuZEFyZWEoXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMueCxcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy55LFxuICAgICAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGFyZWFzID0gYXJlYXMuY29uY2F0KGFyZWEpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcmVhcykpLmZpbHRlcihcbiAgICAgICAgICAgICh4KSA9PiAhdW5kZXJUaGVTaGlwLmluY2x1ZGVzKHgpLFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBvY2N1cHlBcmVhcyA9ICgpID0+IHtcbiAgICAgICAgdW5kZXJUaGVTaGlwLmZvckVhY2goKHNlY3RvcikgPT4ge1xuICAgICAgICAgICAgaWYgKHNlY3Rvci5pc0ZyZWUoKSkge1xuICAgICAgICAgICAgICAgIHNlY3Rvci5vY2N1cHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja0FyZWEgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhY2Vzc2liaWxpdHkgPSB0cnVlO1xuICAgICAgICBsZXQgYXJlYXMgPSB1bmRlclRoZVNoaXAuY29uY2F0KGFyb3VuZFRoZVNoaXApO1xuXG4gICAgICAgIGFyZWFzLmZvckVhY2goKHNlY3RvcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFzZWN0b3IuaXNGcmVlKCkgJiYgc2VjdG9yLmdldE9jY3VwYW50KCkgIT09IHNoaXApIHtcbiAgICAgICAgICAgICAgICBhY2Vzc2liaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFjZXNzaWJpbGl0eTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJBcmVhcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFyZWFzID0gdW5kZXJUaGVTaGlwLmNvbmNhdChhcm91bmRUaGVTaGlwKTtcbiAgICAgICAgYXJlYXMuZm9yRWFjaCgoc2VjdG9yKSA9PiB7XG4gICAgICAgICAgICBzZWN0b3IuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNsZWFyQXJlYXMsXG4gICAgICAgIGNoZWNrQXJlYSxcbiAgICAgICAgZ2V0QXJlYVVuZGVyVGhlU2hpcCxcbiAgICAgICAgZ2V0QXJlYUFyb3VuZFRoZVNoaXAsXG4gICAgICAgIHNldEFyZWFzLFxuICAgICAgICBvY2N1cHlBcmVhcyxcbiAgICB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBBbmltYXRpb25zID0gKCgpID0+IHtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB4ID0gKGUsIHgwLCB4MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGxlZnQ6IGAke3gwfWAgfSwgeyBsZWZ0OiBgJHt4MX1gIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB5ID0gKGUsIHkwLCB5MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IHRvcDogYCR7eTB9YCB9LCB7IHRvcDogYCR7eTF9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm90YXRlID0gKGUsIHJvdGF0ZTEsIHJvdGF0ZTIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGUxfWRlZylgIH0sIHsgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlMn1kZWcpYCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgcm90YXRlIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGJhY2tncm91bmQgPSAoZSwgY29sb3IxLCBjb2xvcjIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGJhY2tncm91bmQ6IGNvbG9yMSB9LCB7IGJhY2tncm91bmQ6IGNvbG9yMiB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9wYWNpdHkgPSAoZSwgb3BhY2l0eTEsIG9wYWNpdHkyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBvcGFjaXR5OiBvcGFjaXR5MSB9LCB7IG9wYWNpdHk6IG9wYWNpdHkyIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tID0gKGUsIGR1ciwgZmlsbCA9ICdub25lJywgLi4ua2V5RnJhbWVzKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoLi4ua2V5RnJhbWVzLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdHJhbnNmb3JtLCBiYWNrZ3JvdW5kLCBvcGFjaXR5LCBjdXN0b20gfTtcbn0pKCk7XG4iLCJleHBvcnQgY29uc3Qgc2V0SGlkZGVuID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUhpZGRlbiA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRMb3dPcGFjaXR5ID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2xvdy1vcGFjaXR5Jyk7XG59XG5cbmV4cG9ydCBjb25zdCBzZXROb3JtYWxPcGFjaXR5ID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2xvdy1vcGFjaXR5Jyk7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVOdWxsT3BhY2l0eSA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdudWxsLW9wYWNpdHknKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldE51bGxPcGFjaXR5ID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ251bGwtb3BhY2l0eScpO1xufSIsImltcG9ydCB7IEFuaW1hdGlvbnMgfSBmcm9tIFwiLi9hbmltYXRpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBkcmF3Q3Jvc3MgPSAoZSwgZHVyLCBmaWxsLCAuLi5rZXlGcmFtZXMpID0+IHtcbiAgICBBbmltYXRpb25zLmN1c3RvbShlLmZpcnN0Q2hpbGQsIGR1ciwgZmlsbCwgLi4ua2V5RnJhbWVzKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuIEFuaW1hdGlvbnMuY3VzdG9tKGUubGFzdENoaWxkLCBkdXIsIGZpbGwsIC4uLmtleUZyYW1lcyk7XG4gICAgfSwgZHVyKTtcbn1cbiIsImltcG9ydCB7IEFuaW1hdGlvbnMgfSBmcm9tIFwiLi9hbmltYXRpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBjb2xvcnNUaW1lciA9IChlLCBkdXIsIGZpbGwsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgIHJldHVybiBBbmltYXRpb25zLmN1c3RvbShlLCBkdXIsIGZpbGwsIC4uLmtleUZyYW1lcyk7XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3VGltZXIgPSAoZSwgZHVyLCBmaWxsLCAuLi5rZXlGcmFtZXMpID0+IHtcbiAgICByZXR1cm4gQW5pbWF0aW9ucy5jdXN0b20oZSwgZHVyLCBmaWxsLCAuLi5rZXlGcmFtZXMpO1xufVxuIiwiZXhwb3J0IGNvbnN0IHNldERyYWdnYWJsZSA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5kcmFnZ2FibGUgPSB0cnVlO1xufTtcbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lQ29uZmlnJztcbmltcG9ydCB7IHNldERyYWdnYWJsZSB9IGZyb20gJy4vc2V0RHJhZ2dhYmxlJztcblxuZXhwb3J0IGNvbnN0IHNldERyYWdnYWJsZUZvclNoaXBzID0gKCkgPT4ge1xuICAgIENvbmZpZy5FbGVtZW50cy5zaGlwVHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBmb3JUeXBlKHR5cGUpO1xuICAgIH0pO1xufTtcblxuY29uc3QgZm9yVHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgY29uc3QgZG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3R5cGV9YCk7XG4gICAgY29uc3Qgc2hpcHMgPSBBcnJheS5mcm9tKGRvY2suY2hpbGRyZW4pO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBzZXREcmFnZ2FibGUoc2hpcCk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgQWxwaGFiZXRzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FscGhhYmV0cyc7XG5pbXBvcnQgeyBnZXROb2RlIH0gZnJvbSAnLi9mYWN0b3J5JztcblxuY29uc3QgYWxwaGFiZXQgPSBBbHBoYWJldHMucnVzKCkuY29kZXM7XG5cbmV4cG9ydCBjb25zdCB2aWV3QXhpcyA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBib2FyZC5nZXROb2RlKCk7XG4gICAgY29uc3QgeEF4aXMgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKTtcbiAgICBjb25zdCB5QXhpcyA9IG5vZGUucXVlcnlTZWxlY3RvcignLnktYXhpcycpO1xuICAgIGNvbnN0IHNpemUgPSBib2FyZC5nZXRTaXplKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUud2lkdGg7IGkrKykge1xuICAgICAgICBjb25zdCBjZWxsID0gZ2V0Tm9kZSgneC1jZWxsJywgJ2NlbGwnKTtcbiAgICAgICAgY29uc3QgbGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShhbHBoYWJldFtpXSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGxldHRlcjtcbiAgICAgICAgeEF4aXMuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplLmhlaWdodDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBnZXROb2RlKCd5LWNlbGwnLCAnY2VsbCcpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgeUF4aXMuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBnZXROb2RlID0gKC4uLm5hbWVzKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUgIT09ICcnKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbm9kZTtcbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2FtZUNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCB2aWV3Qm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBib2FyZC5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCk7XG4gICAgY29uc3QgYm9hcmR3ciA9IGJvYXJkLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBjb250YWluZXIuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBib2FyZHdyLmFwcGVuZENoaWxkKGNlbGwuZ2V0Q2VsbE5vZGUoKSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBTdHlsZVByZXNldHMgPSAoKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJy0tYm9hcmQtd2lkdGgnLFxuICAgICAgICBDb25maWcuR2FtZWJvYXJkLndpZHRoLFxuICAgICk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS1ib2FyZC1oZWlnaHQnLFxuICAgICAgICBDb25maWcuR2FtZWJvYXJkLmhlaWdodCxcbiAgICApO1xufSkoKTtcbiIsImltcG9ydCB7IGRyYXdDcm9zcyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZWxlbWVudHMvYXVkaW9FZmZlY3RzXCI7XG5pbXBvcnQgeyBDcm9zcyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZWxlbWVudHMvdGVtcGxhdGVzXCI7XG5pbXBvcnQgeyByZW1vdmVOdWxsT3BhY2l0eSB9IGZyb20gXCIuLi9hbmltYXRpb25zL2NoYW5nZVZpc2libGVcIjtcblxuZXhwb3J0IGNvbnN0IHZpZXdNaXNzSGl0ID0gKGNlbGwpID0+IHtcbiAgICBjZWxsLmdldENlbGxOb2RlKCkuY2xhc3NMaXN0LmFkZCgnbWlzcy1oaXQnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdBY2N1cmF0ZUhpdCA9IChjZWxsKSA9PiB7XG4gICAgY29uc3QgZGVjayA9IGNlbGwuZ2V0TGlua2VkRGVjaygpO1xuICAgIHJlbW92ZU51bGxPcGFjaXR5KGRlY2suZ2V0Q2VsbE5vZGUoKSk7XG4gICAgZGVjay5zZXRUaGVIaXQoKTtcbiAgICBhcHBlbmRDcm9zc1N2ZyhkZWNrKTtcbiAgICBkcmF3Q3Jvc3MucGxheSgpO1xufVxuXG5leHBvcnQgY29uc3QgYXBwZW5kQ3Jvc3NTdmcgPSAoZGVjaykgPT4ge1xuICAgIGxldCBjcm9zcyA9IENyb3NzKCk7XG4gICAgZGVjay5nZXRDZWxsTm9kZSgpLmNsYXNzTGlzdC5hZGQoJ2Rlc3Ryb3llZCcpO1xuICAgIGRlY2suZ2V0Q2VsbE5vZGUoKS5hcHBlbmRDaGlsZChjcm9zcy5nZXRTdmcoKSk7XG4gICAgY3Jvc3MudmlldygpO1xufSIsImltcG9ydCB7IGFwcGVuZENoaWxkcywgc2V0QXR0cmlidXRlcyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvaGVscGVyXCI7XG5pbXBvcnQgeyBDcm9zc0F0dHJpYnV0ZXMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VsZW1lbnRzL2F0dHJpYnV0ZXNcIjtcbmltcG9ydCB7IGRyYXdDcm9zcyB9IGZyb20gXCIuLi9hbmltYXRpb25zL21hcmtlcnNcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNyb3NzU1ZHID0gKCkgPT4ge1xuICAgIGxldCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGxldCBsZWZ0TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnbGluZScpO1xuICAgIGxldCByaWdodExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2xpbmUnKTtcbiAgICBhcHBlbmRDaGlsZHMoc3ZnLCBsZWZ0TGluZSwgcmlnaHRMaW5lKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGxlZnRMaW5lLCBDcm9zc0F0dHJpYnV0ZXMubGluZS5jb25jYXQoQ3Jvc3NBdHRyaWJ1dGVzLmxlZnREaWFnKSk7XG4gICAgc2V0QXR0cmlidXRlcyhyaWdodExpbmUsIENyb3NzQXR0cmlidXRlcy5saW5lLmNvbmNhdChDcm9zc0F0dHJpYnV0ZXMucmlnaHREaWFnKSk7XG4gICAgcmV0dXJuIHN2Zztcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdDcm9zcyA9IChzdmcpID0+IHtcbiAgICBjb25zdCBhbmltYXRpb25zID0gW1xuICAgICAgICBkcmF3Q3Jvc3Moc3ZnLCAyMDAsICdmb3J3YXJkcycsIFt7IHN0cm9rZURhc2hvZmZzZXQ6ICdtaW4oNXZoICwydncpJyB9LCB7IHN0cm9rZURhc2hvZmZzZXQ6ICdtaW4oMHZoICwwdncpJyB9XSlcbiAgICBdXG4gICAgcmV0dXJuIGFuaW1hdGlvbnM7XG59IiwiaW1wb3J0IHsgbG9zZSwgd2luIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbGVtZW50cy9hdWRpb0VmZmVjdHNcIjtcblxuZXhwb3J0IGNvbnN0IHZpZXdXaW5Qb3B1cCA9ICgpID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13aW4nKTtcbiAgICBwb3B1cC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBwb3B1cC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIHdpbi5wbGF5KCk7XG59XG5cbmV4cG9ydCBjb25zdCB2aWV3TG9zZVBvcHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWxvc2UnKTtcbiAgICBwb3B1cC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBwb3B1cC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGxvc2UucGxheSgpO1xufVxuXG5leHBvcnQgY29uc3QgaGlkZGVuUG9wdXAgPSAocG9wdXApID0+IHtcbiAgICBwb3B1cC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBwb3B1cC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgd2luLnBhdXNlKCk7XG4gICAgbG9zZS5wYXVzZSgpO1xufSIsImltcG9ydCB7IHZpZXdBeGlzIH0gZnJvbSAnLi9heGlzJztcbmltcG9ydCB7IHZpZXdCb2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcblxuZXhwb3J0IGNvbnN0IHZpZXdQcm9maWxlID0gKHByb2ZpbGUpID0+IHtcbiAgICB2aWV3Qm9hcmQocHJvZmlsZS5nZXRHYW1lYm9hcmQoKSk7XG4gICAgdmlld0F4aXMocHJvZmlsZS5nZXRHYW1lYm9hcmQoKSk7XG59O1xuIiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IHJhbmRvbUludEZyb21JbnRlcnZhbCB9IGZyb20gJy4uLy4uL2hlbHBlci9oZWxwZXInO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJy4uLy4uL21vZGVscy9zZXNzaW9uJztcbmltcG9ydCB7IHJlbW92ZUhpZGRlbiwgc2V0SGlkZGVuIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlJztcblxuZXhwb3J0IGNvbnN0IHZpZXdTaGlwID0gKHNoaXAsIGhlYWQpID0+IHtcbiAgICBsZXQgaXNWaWV3ID0gc2hpcC5sYXVuY2hTaGlwT25XYXRlcihoZWFkKTtcbiAgICBpZiAoaXNWaWV3KSB7XG4gICAgICAgIHNoaXAuc2V0SGVhZChoZWFkKTtcbiAgICAgICAgaGVhZC5nZXRDZWxsTm9kZSgpLmFwcGVuZENoaWxkKHNoaXAuZ2V0Q29udGFpbmVyKCkpO1xuICAgICAgICBjaGVja1NoaXB5YXJkKCk7XG4gICAgfVxuICAgIHJldHVybiBpc1ZpZXc7XG59O1xuXG5jb25zdCBjaGVja1NoaXB5YXJkID0gKCkgPT4ge1xuICAgIGlmIChTZXNzaW9uLm1hbnVhbE1vZGUpIHtcbiAgICAgICAgaWYgKGdhbWUucGxheWVyLmdldFNoaXB5YXJkKCkuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9zZU1hbnVhbE1lbnUoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5jb25zdCBjbG9zZU1hbnVhbE1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHlhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHlhcmQnKTtcbiAgICByZW1vdmVIaWRkZW4oZ2FtZS5haS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkpO1xuICAgIHNldEhpZGRlbihzaGlweWFyZCk7XG59O1xuXG5leHBvcnQgY29uc3Qgdmlld1NoaXBPblJhbmRvbUNlbGwgPSAoc2hpcCwgY2VsbHMpID0+IHtcbiAgICBsZXQgY2VsbCA9IGdldFJhbmRvbUNlbGwoY2VsbHMpO1xuICAgIGxldCBpc1ZpZXcgPSB2aWV3U2hpcChzaGlwLCBjZWxsKTtcbiAgICByZXR1cm4gaXNWaWV3ID8gdHJ1ZSA6IHZpZXdTaGlwT25SYW5kb21DZWxsKHNoaXAsIGNlbGxzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21DZWxsID0gKGNlbGxzKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gcmFuZG9tSW50RnJvbUludGVydmFsKDAsIGNlbGxzLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBjZWxscy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFN0YW5kYXJ0SG9yaXpvbnRhbFNoaXBEZXNpZ24gPSAoY29udGFpbmVyLCBsZW5ndGgpID0+IHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGBtaW4oJHtsZW5ndGggKiA1fXZoLCR7bGVuZ3RoICogMn12dylgO1xuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgbWluKDV2aCwydncpYDtcbiAgICBjb250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gYDJ2aGA7XG4gICAgY29udGFpbmVyLnN0eWxlLm1pbldpZHRoID0gYCR7bGVuZ3RoICogMn12aGA7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRTdGFuZGFydFZlcnRpY2FsU2hpcERlc2lnbiA9IChjb250YWluZXIsIGxlbmd0aCkgPT4ge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGBtaW4oJHtsZW5ndGggKiA1fXZoLCR7bGVuZ3RoICogMn12dylgO1xuICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGBtaW4oNXZoLDJ2dylgO1xuICAgIGNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSBgJHtsZW5ndGggKiAyfXZoYDtcbiAgICBjb250YWluZXIuc3R5bGUubWluV2lkdGggPSBgMnZoYDtcbn1cblxuZXhwb3J0IGNvbnN0IHJlc2V0U2hpcFN0eWxlID0gKGNvbnRhaW5lcikgPT4ge1xuICAgIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIGNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSAnbWluKDAuMXZoLCAwLjF2dykgcmdiYSgwLCAwLCAyNTUsIDEpIHNvbGlkJztcbn1cblxuZXhwb3J0IGNvbnN0IHNldERlYXRoU3R5bGVPblNoaXAgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAnMC4zJztcbiAgICBjb250YWluZXIuc3R5bGUuYm9yZGVyID0gJ21pbigwLjF2aCwgMC4xdncpIHJnYmEoMjU1LCAwLCAwLCAxKSBzb2xpZCc7XG59IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lQ29uZmlnJztcbmltcG9ydCB7IHNldERyYWdnYWJsZUZvclNoaXBzIH0gZnJvbSAnLi4vZHJhZ0FuZERyb3Avc2hpcHMnO1xuXG5leHBvcnQgY29uc3Qgdmlld1NoaXB5YXJkID0gKHNoaXB5YXJkKSA9PiB7XG4gICAgZmlsbFNoaXB5YXJkTm9kZShzaGlweWFyZCk7XG4gICAgc2V0RHJhZ2dhYmxlRm9yU2hpcHMoKTtcbn07XG5cbmNvbnN0IGZpbGxTaGlweWFyZE5vZGUgPSAoc2hpcHlhcmQpID0+IHtcbiAgICBDb25maWcuRWxlbWVudHMuc2hpcFR5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgYWRkVHlwZSh0eXBlLCBzaGlweWFyZCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBhZGRUeXBlID0gKHR5cGUsIHNoaXB5YXJkKSA9PiB7XG4gICAgY29uc3QgZG9jayA9IHNoaXB5YXJkLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKGAuJHt0eXBlfWApO1xuICAgIGNvbnN0IHNoaXBzID0gc2hpcHlhcmQuZ2V0U2hpcHNPZlR5cGUodHlwZSk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBkb2NrLmFwcGVuZENoaWxkKHNoaXAuZ2V0Q29udGFpbmVyKCkpO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IGFwcGVuZENoaWxkcywgc2V0QXR0cmlidXRlcyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvaGVscGVyXCI7XG5pbXBvcnQgeyBIb3Jpem9udGFsTGluZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZWxlbWVudHMvYXR0cmlidXRlc1wiO1xuaW1wb3J0IHsgY29sb3JzVGltZXIsIGRyYXdUaW1lciB9IGZyb20gXCIuLi9hbmltYXRpb25zL3RpbWVyXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUaW1lclNWRyA9ICgpID0+IHtcbiAgICBsZXQgdGltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdsaW5lJyk7XG4gICAgc2V0QXR0cmlidXRlcyhsaW5lLCBIb3Jpem9udGFsTGluZS5ob3Jpem9udGFsKTtcbiAgICBhcHBlbmRDaGlsZHModGltZXIsIGxpbmUpO1xuICAgIHJldHVybiB0aW1lcjtcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdUaW1lciA9IChzdmcpID0+IHtcbiAgICBjb25zdCBhbmltYXRpb25zID0gW1xuICAgICAgICBjb2xvcnNUaW1lcihzdmcubGFzdENoaWxkLCAxNTAwMCwgJ25vbmUnLCBbeyBzdHJva2U6ICdncmVlbicgfSwgeyBzdHJva2U6ICdvcmFuZ2UnIH0sIHsgc3Ryb2tlOiAncmVkJyB9XSksXG4gICAgICAgIGRyYXdUaW1lcihzdmcubGFzdENoaWxkLCAxNTAwMCwgJ25vbmUnLCBbeyBzdHJva2VEYXNob2Zmc2V0OiAnOTl2dycgfSwgeyBzdHJva2VEYXNob2Zmc2V0OiAnMHZ3JyB9XSlcbiAgICBdXG4gICAgcmV0dXJuIGFuaW1hdGlvbnM7XG59OyIsImltcG9ydCB7IHJlbW92ZUhpZGRlbiwgc2V0SGlkZGVuLCBzZXRMb3dPcGFjaXR5LCBzZXROb3JtYWxPcGFjaXR5IH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZVwiO1xuXG5leHBvcnQgY29uc3QgaGlkZGVuSW50ZXJmYWNlQmVmb3JlU3RhcnRQbGF5ID0gKCkgPT4ge1xuICAgIHNldEhpZGRlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheScpKVxuICAgIHNldEhpZGRlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykpXG4gICAgc2V0SGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXBzJykpXG4gICAgcmVtb3ZlSGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0JykpXG59XG5cbmV4cG9ydCBjb25zdCB2aWV3SW50ZXJmYWNlQWZ0ZXJFbmRHYW1lID0gKCkgPT4ge1xuICAgIHJlbW92ZUhpZGRlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheScpKVxuICAgIHJlbW92ZUhpZGRlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykpXG4gICAgcmVtb3ZlSGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXBzJykpXG4gICAgc2V0SGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0JykpXG59XG5cbmV4cG9ydCBjb25zdCBzZXRQbGF5ZXJNb3ZlRGVzaWduID0gKGFpLCBwbGF5ZXIpID0+IHtcbiAgICBzZXROb3JtYWxPcGFjaXR5KGFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykpXG4gICAgc2V0Tm9ybWFsT3BhY2l0eShhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpKVxuICAgIHNldE5vcm1hbE9wYWNpdHkoYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpKVxuICAgIHNldExvd09wYWNpdHkocGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykpXG4gICAgc2V0TG93T3BhY2l0eShwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy55LWF4aXMnKSlcbiAgICBzZXRMb3dPcGFjaXR5KHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmJvYXJkJykpXG59XG5cbmV4cG9ydCBjb25zdCBzZXRBaU1vdmVEZXNpZ24gPSAoYWksIHBsYXllcikgPT4ge1xuICAgIHNldE5vcm1hbE9wYWNpdHkocGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykpXG4gICAgc2V0Tm9ybWFsT3BhY2l0eShwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy55LWF4aXMnKSlcbiAgICBzZXROb3JtYWxPcGFjaXR5KHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmJvYXJkJykpXG4gICAgc2V0TG93T3BhY2l0eShhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLngtYXhpcycpKVxuICAgIHNldExvd09wYWNpdHkoYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy55LWF4aXMnKSlcbiAgICBzZXRMb3dPcGFjaXR5KGFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldE1pbmlTaGlweWFyZERlc2lnbiA9IChzaGlweWFyZCkgPT4ge1xuICAgIGNvbnN0IGRlY2tzID0gc2hpcHlhcmQuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWNrJyk7XG4gICAgY29uc3Qgc2hpcHMgPSBzaGlweWFyZC5nZXROb2RlKCkucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcbiAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ21pbmktc2hpcCcpXG4gICAgfSlcbiAgICBkZWNrcy5mb3JFYWNoKGRlY2sgPT4ge1xuICAgICAgICBkZWNrLmNsYXNzTGlzdC5hZGQoJ21pbmktY2VsbCcpXG4gICAgfSlcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=