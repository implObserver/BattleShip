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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    border: 0;
    height: 100%;
    box-sizing: border-box;
}

:root {
    font-size: 2vh;
    --board-width: 0;
    --board-height: 0;
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
}

.dock {
    display: flex;
    column-gap: 4vh;
}

.ship {
    display: flex;
    cursor: pointer;
}

.selected {
    opacity: 0.1;
    z-index: 0;
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
    grid-gap: 0.1vh;
    justify-content: right;
    grid-template-columns: repeat(var(--board-width), min-content);
}

.board-wrapper {
    display: grid;
    grid-template-columns: min-content min-content;
}

.y-axis {
    display: grid;
    grid-gap: 0.1vh;
    grid-template-rows: repeat(var(--board-height), min-content);
}

.board {
    display: grid;
    grid-template-columns: repeat(var(--board-width), min-content);
    grid-template-rows: repeat(var(--board-height), min-content);
    height: min-content;
    width: min-content;
    gap: 1px;
    box-sizing: border-box;
}

.marker {
    display: grid;
    justify-content: center;
    padding-left: 5vh;
}

.cell,
.x-cell,
.y-cell,
.deck,
.marine-sector {
    display: grid;
    width: 5vh;
    height: 5vh;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.ai-board {}

.cell,
.marine-sector {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 255, 0.3);
}

.x-cell,
.y-cell {
    justify-content: center;
    align-items: center;
    opacity: 0.5;
}

.ship {
    display: grid;
    border: 1px rgba(0, 0, 255, 1) solid;
    background-color: rgba(0, 0, 255, 0.1);
    gap: 1px;
}

.horizontal {
    grid-template-columns: repeat(4, min-content);
}

.vertical {
    grid-template-rows: repeat(4, min-content);
}

.deck {
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
}`, "",{"version":3,"sources":["webpack://./src/views/styles/main.css"],"names":[],"mappings":"AAAA;;;IAGI,UAAU;IACV,SAAS;IACT,SAAS;IACT,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,mBAAmB;IACnB,YAAY;IACZ,4BAA4B;IAC5B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,8CAA8C;IAC9C,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,0CAA0C;IAC1C,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,2CAA2C;IAC3C,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,sBAAsB;IACtB,8DAA8D;AAClE;;AAEA;IACI,aAAa;IACb,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,eAAe;IACf,4DAA4D;AAChE;;AAEA;IACI,aAAa;IACb,8DAA8D;IAC9D,4DAA4D;IAC5D,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;IACR,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;;;;;IAKI,aAAa;IACb,UAAU;IACV,WAAW;IACX,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA,WAAW;;AAEX;;IAEI,gDAAgD;AACpD;;AAEA;;IAEI,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,sCAAsC;IACtC,QAAQ;AACZ;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8CAA8C;IAC9C,WAAW;IACX,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;;IAEI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,eAAe;AACnB;;AAEA;;IAEI,wBAAwB;IACxB,2CAA2C;AAC/C;;AAEA;IACI,aAAa;AACjB","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 2vh;\n    --board-width: 0;\n    --board-height: 0;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    justify-items: center;\n    align-content: center;\n    max-width: 100%;\n    max-height: 100%;\n    row-gap: 2vh;\n}\n\nspan {\n    padding: 1vh;\n    height: min-content;\n    min-width: max-content;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    width: 100%;\n    padding: 2vh;\n}\n\n.title {\n    display: grid;\n    font-size: 3rem;\n}\n\n.tips {\n    display: grid;\n    background-color: rgba(128, 128, 128, 0.2);\n    align-items: center;\n    padding: 1vh;\n    border-radius: min(2vh, 2vw);\n    height: min-content;\n}\n\n.main {\n    display: grid;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    grid-template-columns: min-content min-content;\n    height: min-content;\n}\n\n.shipyard {\n    display: grid;\n    align-content: center;\n    grid-template-rows: repeat(4, min-content);\n    row-gap: 6vh;\n    padding: 2vh;\n}\n\n.dock {\n    display: flex;\n    column-gap: 4vh;\n}\n\n.ship {\n    display: flex;\n    cursor: pointer;\n}\n\n.selected {\n    opacity: 0.1;\n    z-index: 0;\n}\n\n.board__axis-wrapper {\n    display: grid;\n    grid-template-rows: min-content min-content;\n    row-gap: 2vh;\n    width: min-content;\n    height: 100%;\n    padding: 5vh;\n}\n\n.axis-wrapper {\n    display: grid;\n    width: min-content;\n    grid-template-rows: min-content 1fr;\n}\n\n.x-axis {\n    display: grid;\n    grid-gap: 0.1vh;\n    justify-content: right;\n    grid-template-columns: repeat(var(--board-width), min-content);\n}\n\n.board-wrapper {\n    display: grid;\n    grid-template-columns: min-content min-content;\n}\n\n.y-axis {\n    display: grid;\n    grid-gap: 0.1vh;\n    grid-template-rows: repeat(var(--board-height), min-content);\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(var(--board-width), min-content);\n    grid-template-rows: repeat(var(--board-height), min-content);\n    height: min-content;\n    width: min-content;\n    gap: 1px;\n    box-sizing: border-box;\n}\n\n.marker {\n    display: grid;\n    justify-content: center;\n    padding-left: 5vh;\n}\n\n.cell,\n.x-cell,\n.y-cell,\n.deck,\n.marine-sector {\n    display: grid;\n    width: 5vh;\n    height: 5vh;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n\n.ai-board {}\n\n.cell,\n.marine-sector {\n    box-shadow: 0px 0px 0px 1px rgba(0, 0, 255, 0.3);\n}\n\n.x-cell,\n.y-cell {\n    justify-content: center;\n    align-items: center;\n    opacity: 0.5;\n}\n\n.ship {\n    display: grid;\n    border: 1px rgba(0, 0, 255, 1) solid;\n    background-color: rgba(0, 0, 255, 0.1);\n    gap: 1px;\n}\n\n.horizontal {\n    grid-template-columns: repeat(4, min-content);\n}\n\n.vertical {\n    grid-template-rows: repeat(4, min-content);\n}\n\n.deck {\n    z-index: 999;\n}\n\n.footer {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    width: 100%;\n    justify-content: center;\n    gap: 4vh;\n}\n\n.random-mode,\n.manual-mode {\n    height: min-content;\n    display: grid;\n    border-bottom: 1px dotted blue;\n    color: blue;\n    cursor: pointer;\n}\n\n.random-mode:hover,\n.manual-mode:hover {\n    color: rgb(122, 231, 72);\n    border-bottom: 1px dotted rgb(122, 231, 72);\n}\n\n.hidden {\n    display: none;\n}"],"sourceRoot":""}]);
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



const setListenersForLinks = () => {
    const manualModeLink = document.querySelector('.manual-mode');
    const randomModeLink = document.querySelector('.random-mode');
    const shipyard = document.querySelector('.shipyard');

    const openManualMode = manualModeLink.addEventListener('click', (e) => {
        console.log(___WEBPACK_IMPORTED_MODULE_0__.ai.getGameboard().getNode())
        ;(0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setHidden)(___WEBPACK_IMPORTED_MODULE_0__.ai.getGameboard().getNode());
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.removeHidden)(shipyard);
    });

    const openRandomMode = randomModeLink.addEventListener('click', (e) => {
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.removeHidden)(___WEBPACK_IMPORTED_MODULE_0__.ai.getGameboard().getNode());
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setHidden)(shipyard);
    });
};


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
/* harmony import */ var _models_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/ship */ "./src/models/ship.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/nodes/ship */ "./src/views/nodes/ship.js");




const setListenersForShips = (ships) => {
    const border = document.querySelector('.player-board');

    ships.forEach((ship) => {
        const decks = ship.getBody();
        decks.forEach(deck => {
            deck.getCellNode().addEventListener('mousedown', evt => {
                _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.index = deck.getNumber();
            })
        })

        ship.getContainer().addEventListener('click', e => {
            if (ship.getHead() !== null) {
                _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.activeShip = ship;
                _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.currentElement = ship.getHead().getCellNode();
                ship.orientationSwitch();
                let isView = (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__.viewShip)(ship, ship.getHead());

                if (isView) {
                    ship.setOrientation();
                    (0,_models_session__WEBPACK_IMPORTED_MODULE_0__.resetSession)()
                } else {
                    ship.orientationSwitch();
                }
            }
        })

        ship.getContainer().addEventListener(`dragstart`, (evt) => {
            evt.target.classList.add(`selected`);
            _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.activeShip = ship;
        });

        ship.getContainer().addEventListener(`dragend`, (evt) => {
            evt.target.classList.remove(`selected`);
            (0,_models_ship__WEBPACK_IMPORTED_MODULE_1__.shipDragEnd)();
            (0,_models_session__WEBPACK_IMPORTED_MODULE_0__.resetSession)();
        });
    });

    border.addEventListener(`dragover`, (evt) => {
        _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.currentElement = evt.target;
    })
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ai: () => (/* binding */ ai),
/* harmony export */   player1: () => (/* binding */ player1)
/* harmony export */ });
/* harmony import */ var _views_styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/styles/main.css */ "./src/views/styles/main.css");
/* harmony import */ var _models_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/player */ "./src/models/player.js");
/* harmony import */ var _views_nodes_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/nodes/profile */ "./src/views/nodes/profile.js");
/* harmony import */ var _controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/listeners/forLinks */ "./src/controllers/listeners/forLinks.js");
/* harmony import */ var _views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/nodes/shipyard */ "./src/views/nodes/shipyard.js");
/* harmony import */ var _controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/listeners/forShips */ "./src/controllers/listeners/forShips.js");






const player1 = (0,_models_player__WEBPACK_IMPORTED_MODULE_1__.Profile)(1, 'Player1', 'player-board');
const ai = (0,_models_player__WEBPACK_IMPORTED_MODULE_1__.Profile)(0, 'AI', 'ai-board');
(0,_views_nodes_profile__WEBPACK_IMPORTED_MODULE_2__.viewProfile)(player1);
(0,_views_nodes_profile__WEBPACK_IMPORTED_MODULE_2__.viewProfile)(ai);
(0,_views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_4__.viewShipyard)(player1.getShipyard())
;(0,_controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_3__.setListenersForLinks)();
(0,_controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_5__.setListenersForShips)(player1.getShipyard().getDockWithFregats().getShips());

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
    }

    return { setTheHit, isHit, setParent, getParent, getCellNode, getXY, setXY };
};

const Deck = (number) => {
    const prototype = Cell(-1, -1, 'deck');

    const getNumber = () => {
        return number;
    }

    return Object.assign(prototype, { getNumber });
}

const MarineSector = (y, x) => {
    const prototype = Cell(y, x, 'marine-sector');
    let occupant = 'free';

    const occupy = (nOccupant) => {
        occupant = nOccupant;
    }

    const clear = () => {
        occupant = 'free';
    }

    const isFree = () => {
        return occupant === 'free';
    }

    const getOccupant = () => {
        return occupant;
    }

    return Object.assign(prototype, { isFree, clear, occupy, getOccupant });
}

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
            return parent[y][--x]
        } catch (error) {
            return parent[y][++x]
        }
    }

    const getAfter = (x, y, parent) => {
        try {
            return parent[y][++x]
        } catch (error) {
            return parent[y][--x]
        }
    }

    const getOver = (x, y, parent) => {
        try {
            return parent[--y][x]
        } catch (error) {
            return parent[++y][x]
        }
    }

    const getUnder = (x, y, parent) => {
        try {
            return parent[++y][x]
        } catch (error) {
            return parent[--y][x]
        }
    }

    const getDiag1 = (x, y, parent) => {
        try {
            return parent[--y][--x]
        } catch (error) {
            return parent[++y][++x]
        }
    }

    const getDiag2 = (x, y, parent) => {
        try {
            return parent[--y][++x]
        } catch (error) {
            return parent[++y][--x]
        }
    }

    const getDiag3 = (x, y, parent) => {
        try {
            return parent[++y][++x]
        } catch (error) {
            return parent[--y][--x]
        }
    }

    const getDiag4 = (x, y, parent) => {
        try {
            return parent[++y][--x]
        } catch (error) {
            return parent[--y][++x]
        }
    }

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
        return cells;
    }

    return { getCellAroundArea }
}

/***/ }),

/***/ "./src/models/gameBoard.js":
/*!*********************************!*\
  !*** ./src/models/gameBoard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   isFitOnGameboardAxis: () => (/* binding */ isFitOnGameboardAxis)
/* harmony export */ });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameConfig */ "./src/models/gameConfig.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/models/player.js");




const Gameboard = (name, player) => {
    const width = _gameConfig__WEBPACK_IMPORTED_MODULE_1__.Config.Gameboard.width;
    const height = _gameConfig__WEBPACK_IMPORTED_MODULE_1__.Config.Gameboard.height;
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
    }

    return { getPlayer, getStructedContainer, getUnstructedContainer, getSize, getNode };
};

const fillBoard = (width, height) => {
    let structed = [];
    let unstructed = [];

    for (let i = 0; i < height; i++) {
        let line = [];
        for (let j = 0; j < width; j++) {
            const cell = (0,_cell__WEBPACK_IMPORTED_MODULE_0__.MarineSector)(j, i);
            line[j] = cell;
            unstructed.push(cell);
        }
        structed[i] = line;
    }

    const getStructed = () => {
        return structed;
    }

    const getUnstructed = () => {
        return unstructed;
    }

    return { getStructed, getUnstructed };
};

const isFitOnGameboardAxis = (coordinate, objLenght, axeLenght) => {
    return coordinate + objLenght > axeLenght
        || coordinate < 0;
}


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
        const numberOf = (() => {
            const fregates = 2;
            const caravels = 2;
            const drakkars = 3;
            const boats = 4;
            return { fregates, caravels, drakkars, boats };
        })();

        return { numberOf };
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
    }

    const getName = () => {
        return name;
    }

    return { getId, getName }
}

const Profile = (id, name, nodeId) => {
    const prototype = Player(id, name);

    let gameboard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(nodeId, prototype);
    let shipyard = (0,_shipyard__WEBPACK_IMPORTED_MODULE_1__.Shipyard)(prototype);

    const getGameboard = () => {
        return gameboard
    }

    const getShipyard = () => {
        return shipyard;
    }

    return Object.assign(prototype, { getGameboard, getShipyard });
}

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
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/models/gameBoard.js");


const Session = (() => {
    let activeShip = null;
    let index = 0;
    let doubleIndex = 'ship';
    let currentElement = null;

    return { activeShip, index, doubleIndex, currentElement }
})()

const resetSession = () => {
    Session.activeShip = null;
    Session.index = 0;
    Session.doubleIndex = 'ship';
    Session.currentElement = null;
}

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
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   removeChilds: () => (/* binding */ removeChilds),
/* harmony export */   shipDragEnd: () => (/* binding */ shipDragEnd)
/* harmony export */ });
/* harmony import */ var _views_nodes_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/nodes/factory */ "./src/views/nodes/factory.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameBoard */ "./src/models/gameBoard.js");
/* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameConfig */ "./src/models/gameConfig.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player */ "./src/models/player.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session */ "./src/models/session.js");
/* harmony import */ var _waterAreas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./waterAreas */ "./src/models/waterAreas.js");









const Ship = (length, player) => {
    
    const container = (0,_views_nodes_factory__WEBPACK_IMPORTED_MODULE_0__.getNode)('ship', 'horizontal');
    let body = [];
    let live = true;
    let horizontal = true;
    let head = null;
    let legal = true;
    let shipWaterAreas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_7__.ShipWaterAreas)();

    const fillContainer = () => {
        for (let i = 0; i < length; i++) {
            let deck = (0,_cell__WEBPACK_IMPORTED_MODULE_2__.Deck)(i);
            body.push(deck);
            container.appendChild(deck.getCellNode());
        }
    };

    const setOrientation = () => {
        if (container.classList.contains('horizontal')) {
            container.classList.remove('horizontal')
            container.classList.add('vertical')
            horizontal = false;
        } else if (container.classList.contains('vertical')) {
            container.classList.remove('vertical')
            container.classList.add('horizontal')
            horizontal = true
        }
    }

    const takeDownWaterAreas = () => {
        shipWaterAreas.clearAreas();
    }

    const launchShipOnWater = (nHead) => {
        try {
            let waterAreas = getWaterArea(nHead);
            let acessibility = waterAreas.checkArea();
            if (acessibility) {
                takeDownWaterAreas();
                shipWaterAreas = waterAreas;
                shipWaterAreas.occupyArea(shipWaterAreas.getAreaUnderTheShip(), container);
                shipWaterAreas.occupyArea(shipWaterAreas.getAreaUnderTheShip(), container);
            }

            return acessibility;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    const getWaterArea = (head) => {
        let board = getBoard();
        let areas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_7__.ShipWaterAreas)(player);
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
    }

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
    }

    const setHead = (nHead) => {
        head = nHead;
    }

    const isHorizontal = () => {
        return horizontal;
    }

    const isLegal = () => {
        return legal;
    }

    const setLegal = () => {
        legal = true;
    }

    const orientationSwitch = () => {
        horizontal = !horizontal;
    }

    const getBoard = () => {
        return player.getGameboard().getStructedContainer();
    }

    fillContainer();

    return { getBoard, takeDownWaterAreas, launchShipOnWater, orientationSwitch, setOrientation, isLive, getBody, getContainer, getHead, setHead, isHorizontal, isLegal, setLegal };
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

const shipDragEnd = () => {
    let isMoveable = false;
    let isAlterMovable = false;
    let body = _session__WEBPACK_IMPORTED_MODULE_6__.Session.activeShip.getBody();

    if (_session__WEBPACK_IMPORTED_MODULE_6__.Session.currentElement !== undefined) {
        isMoveable = _session__WEBPACK_IMPORTED_MODULE_6__.Session.currentElement.classList.contains(`marine-sector`);
        isAlterMovable = _session__WEBPACK_IMPORTED_MODULE_6__.Session.currentElement.classList.contains(`deck`);
    }

    if (!isMoveable && !isAlterMovable) {
        return;
    }

    if (isMoveable) {
        for (let i = 0; i < _gameConfig__WEBPACK_IMPORTED_MODULE_4__.Config.Gameboard.height; i++) {
            for (let j = 0; j < _gameConfig__WEBPACK_IMPORTED_MODULE_4__.Config.Gameboard.width; j++) {
                if (_session__WEBPACK_IMPORTED_MODULE_6__.Session.activeShip.getBoard()[j][i].getCellNode() === _session__WEBPACK_IMPORTED_MODULE_6__.Session.currentElement) {
                    addShipOnBoard(_session__WEBPACK_IMPORTED_MODULE_6__.Session.index, j, i, body.length);
                }
            }
        }
    } else if (isAlterMovable) {
        for (let i = 0; i < body.length; i++) {
            if (body[i].getCellNode() === _session__WEBPACK_IMPORTED_MODULE_6__.Session.currentElement) {
                _session__WEBPACK_IMPORTED_MODULE_6__.Session.doubleIndex = _session__WEBPACK_IMPORTED_MODULE_6__.Session.index - i;
            }
        }
        if (_session__WEBPACK_IMPORTED_MODULE_6__.Session.doubleIndex !== 'ship') {
            let head = _session__WEBPACK_IMPORTED_MODULE_6__.Session.activeShip.getHead().getCellNode();
            for (let i = 0; i < _gameConfig__WEBPACK_IMPORTED_MODULE_4__.Config.Gameboard.height; i++) {
                for (let j = 0; j < _gameConfig__WEBPACK_IMPORTED_MODULE_4__.Config.Gameboard.width; j++) {
                    if (_session__WEBPACK_IMPORTED_MODULE_6__.Session.activeShip.getBoard()[j][i].getCellNode() === head) {
                        addShipOnBoard(_session__WEBPACK_IMPORTED_MODULE_6__.Session.doubleIndex, j, i, body.length)
                    }
                }
            }
        } else {
            return;
        }
    }
}

const addShipOnBoard = (index, y, x, shipLenght) => {
    let data = getData(index, y, x);
    viewShipOnBoard(data.coordinate, data.x, data.y, shipLenght, data.axeLenght)
}

const getData = (index, x, y) => {
    return _session__WEBPACK_IMPORTED_MODULE_6__.Session.activeShip.isHorizontal()
        ? { coordinate: y - index, x: x, y: y - index, axeLenght: _gameConfig__WEBPACK_IMPORTED_MODULE_4__.Config.Gameboard.width }
        : { coordinate: x - index, x: x - index, y: y, axeLenght: _gameConfig__WEBPACK_IMPORTED_MODULE_4__.Config.Gameboard.height }
}

const viewShipOnBoard = (coordinate, x, y, shipLenght, axeLenght) => {
    if ((0,_gameBoard__WEBPACK_IMPORTED_MODULE_3__.isFitOnGameboardAxis)(coordinate, shipLenght, axeLenght)) {
        return;
    } else {
        if (_session__WEBPACK_IMPORTED_MODULE_6__.Session.activeShip.getBoard()[x][y].getOccupant() === 'free'
            || _session__WEBPACK_IMPORTED_MODULE_6__.Session.activeShip.getBoard()[x][y].getOccupant() == _session__WEBPACK_IMPORTED_MODULE_6__.Session.activeShip.getContainer()
        ) {
            (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_1__.viewShip)(_session__WEBPACK_IMPORTED_MODULE_6__.Session.activeShip, _session__WEBPACK_IMPORTED_MODULE_6__.Session.activeShip.getBoard()[x][y]);
        }
    }
}

const removeChilds = (node) => {
    if (node !== null) {
        while (node.firstChild) {
            node.removeChild(node.lastChild);
        }
    }
}


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
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/models/gameBoard.js");
/* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameConfig */ "./src/models/gameConfig.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/models/player.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/models/ship.js");





const Shipyard = (player) => {
    const fregats = Dock(_gameConfig__WEBPACK_IMPORTED_MODULE_1__.Config.Elements.numberOf.fregates, 'Fregat', player);
    const caravels = Dock(_gameConfig__WEBPACK_IMPORTED_MODULE_1__.Config.Elements.numberOf.caravels, 'Caravel', player);
    const drakkars = Dock(_gameConfig__WEBPACK_IMPORTED_MODULE_1__.Config.Elements.numberOf.drakkars, 'Drakkar', player);
    const boats = Dock(_gameConfig__WEBPACK_IMPORTED_MODULE_1__.Config.Elements.numberOf.boats, 'Boat', player);

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
    }

    return { getPlayer, getDockWithFregats, getDockWithCaravels, getDockWithDrakkars, getDockWithBoats };
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
                return (0,_ship__WEBPACK_IMPORTED_MODULE_3__.Fregat)(player);
            case 'Caravel':
                return (0,_ship__WEBPACK_IMPORTED_MODULE_3__.Caravel)(player);
            case 'Drakkar':
                return (0,_ship__WEBPACK_IMPORTED_MODULE_3__.Drakkar)(player);
            case 'Boat':
                return (0,_ship__WEBPACK_IMPORTED_MODULE_3__.Boat)(player);
            default:
                console.log('Sorry, illegal ship blueprint');
        }
    };

    fillDock(count, shipBluePrint);

    const getShips = () => {
        return ships;
    }

    return { getShips };
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



const ShipWaterAreas = (player) => {
    let underTheShip = [];
    let aroundTheShip = [];

    const getAreaUnderTheShip = () => {
        return underTheShip;
    }

    const getAreaAroundTheShip = () => {
        return aroundTheShip
    }

    const setAreas = (area) => {
        underTheShip = area;
        aroundTheShip = setAreaAroundTheShip();
    }

    const setAreaAroundTheShip = () => {
        let handler = (0,_cellHandler__WEBPACK_IMPORTED_MODULE_0__.CellHandler)();
        let areas = [];
        let parent = player.getGameboard().getStructedContainer()
        underTheShip.forEach(sector => {
            let coordinates = sector.getXY();
            let area = handler.getCellAroundArea(coordinates.x, coordinates.y, parent);
            areas = areas.concat(area);
        })
        return Array.from(new Set(areas)).filter(x => !underTheShip.includes(x) && x !== undefined);
    }

    const occupyArea = (area, occupant) => {
        area.forEach(sector => {
            sector.occupy(occupant);
        })
    }

    const checkArea = () => {
        let acessibility = true;
        let areas = underTheShip.concat(aroundTheShip);
        areas.forEach(sector => {
            if (!sector.isFree() && sector.getOccupant() !== _session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip.getContainer()) {
                acessibility = false;
            }
        })
        return acessibility;
    }

    const clearAreas = () => {
        let areas = underTheShip.concat(aroundTheShip);
        areas.forEach(sector => {
            sector.occupy('free');
        })
    }

    return { clearAreas, checkArea, getAreaUnderTheShip, getAreaAroundTheShip, setAreas, occupyArea }
}

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
/* harmony import */ var _setDraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setDraggable */ "./src/views/dragAndDrop/setDraggable.js");


const setDraggableForShips = () => {
    forFregats();
};

const forFregats = () => {
    const dock = document.querySelector('.fregats');
    const fregats = Array.from(dock.children);

    fregats.forEach((fregat) => {
        (0,_setDraggable__WEBPACK_IMPORTED_MODULE_0__.setDraggable)(fregat);
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
/* harmony import */ var _models_gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/gameBoard */ "./src/models/gameBoard.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory */ "./src/views/nodes/factory.js");




const alphabet = _models_alphabets__WEBPACK_IMPORTED_MODULE_0__.Alphabets.rus().codes;

const viewAxis = (board) => {
    const node = board.getNode();
    const xAxis = node.querySelector('.x-axis');
    const yAxis = node.querySelector('.y-axis');
    const size = board.getSize();

    for (let i = 0; i < size.width; i++) {
        const cell = (0,_factory__WEBPACK_IMPORTED_MODULE_2__.getNode)('x-cell');
        const letter = String.fromCharCode(alphabet[i]).toUpperCase();
        cell.textContent = letter;
        xAxis.appendChild(cell);
    }

    for (let i = 0; i < size.height; i++) {
        const cell = (0,_factory__WEBPACK_IMPORTED_MODULE_2__.getNode)('y-cell');
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
    console.log(board.getNode())
    const container = board.getStructedContainer();
    const boardwr = board.getNode().querySelector('.board');
    container.forEach((line) => {
        line.forEach((cell) => {
            boardwr.appendChild(cell.getCellNode());
        });
    });
};

const StylePresets = (() => {
    document.documentElement.style.setProperty('--board-width', _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Gameboard.width);
    document.documentElement.style.setProperty('--board-height', _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Gameboard.height);
})()


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
/* harmony import */ var _shipyard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipyard */ "./src/views/nodes/shipyard.js");




const viewProfile = (profile) => {
    (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.viewBoard)(profile.getGameboard());
    (0,_axis__WEBPACK_IMPORTED_MODULE_0__.viewAxis)(profile.getGameboard());
    //viewShipyard(profile.getShipyard());
}

/***/ }),

/***/ "./src/views/nodes/ship.js":
/*!*********************************!*\
  !*** ./src/views/nodes/ship.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewShip: () => (/* binding */ viewShip)
/* harmony export */ });
/* harmony import */ var _models_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/gameBoard */ "./src/models/gameBoard.js");
/* harmony import */ var _models_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/ship */ "./src/models/ship.js");



const viewShip = (ship, head) => {
    let isView = ship.launchShipOnWater(head);
    if (isView) {
        ship.setHead(head);
        head.getCellNode().appendChild(ship.getContainer());
    }
    return isView;
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
/* harmony import */ var _dragAndDrop_ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dragAndDrop/ships */ "./src/views/dragAndDrop/ships.js");


const viewShipyard = (shipyard) => {
    fillShipyardNode(shipyard);
    (0,_dragAndDrop_ships__WEBPACK_IMPORTED_MODULE_0__.setDraggableForShips)();
};

const fillShipyardNode = (shipyard) => {
    addFregates(shipyard);
    addCaravels(shipyard);
    addDrakkars(shipyard);
    addBoats(shipyard);
};

const addFregates = (shipyard) => {
    const dockNode = document.querySelector('.fregats');
    const ships = shipyard.getDockWithFregats().getShips();
    for (let i = 0; i < ships.length; i++) {
        dockNode.appendChild(ships[i].getContainer());
    }
};

const addCaravels = (shipyard) => {
    const dockNode = document.querySelector('.caravels');
    const ships = shipyard.getDockWithCaravels().getShips();
    for (let i = 0; i < ships.length; i++) {
        dockNode.appendChild(ships[i].getContainer());
    }
};

const addDrakkars = (shipyard) => {
    const dockNode = document.querySelector('.drakkars');
    const ships = shipyard.getDockWithDrakkars().getShips();
    for (let i = 0; i < ships.length; i++) {
        dockNode.appendChild(ships[i].getContainer());
    }
};

const addBoats = (shipyard) => {
    const dockNode = document.querySelector('.boats');
    const ships = shipyard.getDockWithBoats().getShips();
    for (let i = 0; i < ships.length; i++) {
        dockNode.appendChild(ships[i].getContainer());
    }
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sOEZBQThGLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxTQUFTLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxXQUFXLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVks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RDtBQUNLOztBQUV2RDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVjREOztBQUVyRDtBQUNQO0FBQ0EsSUFBSSx3RUFBb0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvc3R5bGVzL21haW4uY3NzPzg5ZjYiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JMaW5rcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JTaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2FscGhhYmV0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9jZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2NlbGxIYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9nYW1lQ29uZmlnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9zZXNzaW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvc2hpcHlhcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvd2F0ZXJBcmVhcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2RyYWdBbmREcm9wL3NldERyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2RyYWdBbmREcm9wL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvYXhpcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9wcm9maWxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3NoaXB5YXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgIC0tYm9hcmQtd2lkdGg6IDA7XG4gICAgLS1ib2FyZC1oZWlnaHQ6IDA7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgcm93LWdhcDogMnZoO1xufVxuXG5zcGFuIHtcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMnZoO1xufVxuXG4udGl0bGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4udGlwcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDJ2aCwgMnZ3KTtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4ubWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLnNoaXB5YXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XG4gICAgcm93LWdhcDogNnZoO1xuICAgIHBhZGRpbmc6IDJ2aDtcbn1cblxuLmRvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sdW1uLWdhcDogNHZoO1xufVxuXG4uc2hpcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWxlY3RlZCB7XG4gICAgb3BhY2l0eTogMC4xO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi5ib2FyZF9fYXhpcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgcm93LWdhcDogMnZoO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogNXZoO1xufVxuXG4uYXhpcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbn1cblxuLngtYXhpcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMC4xdmg7XG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksIG1pbi1jb250ZW50KTtcbn1cblxuLmJvYXJkLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbn1cblxuLnktYXhpcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMC4xdmg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgbWluLWNvbnRlbnQpO1xufVxuXG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtd2lkdGgpLCBtaW4tY29udGVudCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgbWluLWNvbnRlbnQpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGdhcDogMXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tYXJrZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiA1dmg7XG59XG5cbi5jZWxsLFxuLngtY2VsbCxcbi55LWNlbGwsXG4uZGVjayxcbi5tYXJpbmUtc2VjdG9yIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiA1dmg7XG4gICAgaGVpZ2h0OiA1dmg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmFpLWJvYXJkIHt9XG5cbi5jZWxsLFxuLm1hcmluZS1zZWN0b3Ige1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDI1NSwgMC4zKTtcbn1cblxuLngtY2VsbCxcbi55LWNlbGwge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4uc2hpcCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDFweCByZ2JhKDAsIDAsIDI1NSwgMSkgc29saWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XG4gICAgZ2FwOiAxcHg7XG59XG5cbi5ob3Jpem9udGFsIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XG59XG5cbi52ZXJ0aWNhbCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWluLWNvbnRlbnQpO1xufVxuXG4uZGVjayB7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4uZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA0dmg7XG59XG5cbi5yYW5kb20tbW9kZSxcbi5tYW51YWwtbW9kZSB7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmx1ZTtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yYW5kb20tbW9kZTpob3Zlcixcbi5tYW51YWwtbW9kZTpob3ZlciB7XG4gICAgY29sb3I6IHJnYigxMjIsIDIzMSwgNzIpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgcmdiKDEyMiwgMjMxLCA3Mik7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3Mvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDhEQUE4RDtBQUNsRTs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4REFBOEQ7SUFDOUQsNERBQTREO0lBQzVELG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBOzs7OztJQUtJLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQSxXQUFXOztBQUVYOztJQUVJLGdEQUFnRDtBQUNwRDs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHNDQUFzQztJQUN0QyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFFBQVE7QUFDWjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSx3QkFBd0I7SUFDeEIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIC0tYm9hcmQtd2lkdGg6IDA7XFxuICAgIC0tYm9hcmQtaGVpZ2h0OiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgcm93LWdhcDogMnZoO1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAydmg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnRpcHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogbWluKDJ2aCwgMnZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5zaGlweWFyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWluLWNvbnRlbnQpO1xcbiAgICByb3ctZ2FwOiA2dmg7XFxuICAgIHBhZGRpbmc6IDJ2aDtcXG59XFxuXFxuLmRvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiA0dmg7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBvcGFjaXR5OiAwLjE7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcblxcbi5ib2FyZF9fYXhpcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgcm93LWdhcDogMnZoO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogNXZoO1xcbn1cXG5cXG4uYXhpcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLngtYXhpcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAwLjF2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtd2lkdGgpLCBtaW4tY29udGVudCk7XFxufVxcblxcbi5ib2FyZC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG59XFxuXFxuLnktYXhpcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAwLjF2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgbWluLWNvbnRlbnQpO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksIG1pbi1jb250ZW50KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgbWluLWNvbnRlbnQpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogMXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWFya2VyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNXZoO1xcbn1cXG5cXG4uY2VsbCxcXG4ueC1jZWxsLFxcbi55LWNlbGwsXFxuLmRlY2ssXFxuLm1hcmluZS1zZWN0b3Ige1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNXZoO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmFpLWJvYXJkIHt9XFxuXFxuLmNlbGwsXFxuLm1hcmluZS1zZWN0b3Ige1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggcmdiYSgwLCAwLCAyNTUsIDAuMyk7XFxufVxcblxcbi54LWNlbGwsXFxuLnktY2VsbCB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiAxcHggcmdiYSgwLCAwLCAyNTUsIDEpIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbi5ob3Jpem9udGFsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWluLWNvbnRlbnQpO1xcbn1cXG5cXG4udmVydGljYWwge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XFxufVxcblxcbi5kZWNrIHtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDR2aDtcXG59XFxuXFxuLnJhbmRvbS1tb2RlLFxcbi5tYW51YWwtbW9kZSB7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmx1ZTtcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJhbmRvbS1tb2RlOmhvdmVyLFxcbi5tYW51YWwtbW9kZTpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMTIyLCAyMzEsIDcyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZ2IoMTIyLCAyMzEsIDcyKTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWkgfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyByZW1vdmVIaWRkZW4sIHNldEhpZGRlbiB9IGZyb20gJy4uLy4uL3ZpZXdzL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZSc7XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JMaW5rcyA9ICgpID0+IHtcbiAgICBjb25zdCBtYW51YWxNb2RlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW51YWwtbW9kZScpO1xuICAgIGNvbnN0IHJhbmRvbU1vZGVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbS1tb2RlJyk7XG4gICAgY29uc3Qgc2hpcHlhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHlhcmQnKTtcblxuICAgIGNvbnN0IG9wZW5NYW51YWxNb2RlID0gbWFudWFsTW9kZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkpXG4gICAgICAgIHNldEhpZGRlbihhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkpO1xuICAgICAgICByZW1vdmVIaWRkZW4oc2hpcHlhcmQpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb3BlblJhbmRvbU1vZGUgPSByYW5kb21Nb2RlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHJlbW92ZUhpZGRlbihhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkpO1xuICAgICAgICBzZXRIaWRkZW4oc2hpcHlhcmQpO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IFNlc3Npb24sIHJlc2V0U2Vzc2lvbiB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc2Vzc2lvblwiO1xuaW1wb3J0IHsgc2hpcERyYWdFbmQsIHNoaXBUcmF2ZXJzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zaGlwXCI7XG5pbXBvcnQgeyB2aWV3U2hpcCB9IGZyb20gXCIuLi8uLi92aWV3cy9ub2Rlcy9zaGlwXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JTaGlwcyA9IChzaGlwcykgPT4ge1xuICAgIGNvbnN0IGJvcmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgZGVja3MgPSBzaGlwLmdldEJvZHkoKTtcbiAgICAgICAgZGVja3MuZm9yRWFjaChkZWNrID0+IHtcbiAgICAgICAgICAgIGRlY2suZ2V0Q2VsbE5vZGUoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldnQgPT4ge1xuICAgICAgICAgICAgICAgIFNlc3Npb24uaW5kZXggPSBkZWNrLmdldE51bWJlcigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5nZXRIZWFkKCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIFNlc3Npb24uY3VycmVudEVsZW1lbnQgPSBzaGlwLmdldEhlYWQoKS5nZXRDZWxsTm9kZSgpO1xuICAgICAgICAgICAgICAgIHNoaXAub3JpZW50YXRpb25Td2l0Y2goKTtcbiAgICAgICAgICAgICAgICBsZXQgaXNWaWV3ID0gdmlld1NoaXAoc2hpcCwgc2hpcC5nZXRIZWFkKCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzVmlldykge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLnNldE9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0U2Vzc2lvbigpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5vcmllbnRhdGlvblN3aXRjaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoYGRyYWdzdGFydGAsIChldnQpID0+IHtcbiAgICAgICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmFkZChgc2VsZWN0ZWRgKTtcbiAgICAgICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcCA9IHNoaXA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXAuZ2V0Q29udGFpbmVyKCkuYWRkRXZlbnRMaXN0ZW5lcihgZHJhZ2VuZGAsIChldnQpID0+IHtcbiAgICAgICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShgc2VsZWN0ZWRgKTtcbiAgICAgICAgICAgIHNoaXBEcmFnRW5kKCk7XG4gICAgICAgICAgICByZXNldFNlc3Npb24oKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBib3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihgZHJhZ292ZXJgLCAoZXZ0KSA9PiB7XG4gICAgICAgIFNlc3Npb24uY3VycmVudEVsZW1lbnQgPSBldnQudGFyZ2V0O1xuICAgIH0pXG59IiwiaW1wb3J0ICcuL3ZpZXdzL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi9tb2RlbHMvcGxheWVyJztcbmltcG9ydCB7IHZpZXdQcm9maWxlIH0gZnJvbSAnLi92aWV3cy9ub2Rlcy9wcm9maWxlJztcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvckxpbmtzIH0gZnJvbSAnLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGlua3MnO1xuaW1wb3J0IHsgdmlld1NoaXB5YXJkIH0gZnJvbSAnLi92aWV3cy9ub2Rlcy9zaGlweWFyZCc7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JTaGlwcyB9IGZyb20gJy4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclNoaXBzJztcbmV4cG9ydCBjb25zdCBwbGF5ZXIxID0gUHJvZmlsZSgxLCAnUGxheWVyMScsICdwbGF5ZXItYm9hcmQnKTtcbmV4cG9ydCBjb25zdCBhaSA9IFByb2ZpbGUoMCwgJ0FJJywgJ2FpLWJvYXJkJyk7XG52aWV3UHJvZmlsZShwbGF5ZXIxKTtcbnZpZXdQcm9maWxlKGFpKTtcbnZpZXdTaGlweWFyZChwbGF5ZXIxLmdldFNoaXB5YXJkKCkpXG5zZXRMaXN0ZW5lcnNGb3JMaW5rcygpO1xuc2V0TGlzdGVuZXJzRm9yU2hpcHMocGxheWVyMS5nZXRTaGlweWFyZCgpLmdldERvY2tXaXRoRnJlZ2F0cygpLmdldFNoaXBzKCkpOyIsImNvbnN0IEFscGhhYmV0ID0gKGZpcnN0Q2hhckNvZGUsIGxhc3RDaGFyQ29kZSkgPT4ge1xuICAgIGNvbnN0IGxvbmcgPSBsYXN0Q2hhckNvZGUgLSBmaXJzdENoYXJDb2RlICsgMTtcbiAgICBjb25zdCBjb2RlcyA9IEFycmF5LmZyb20oQXJyYXkobG9uZykua2V5cygpLCAoeCkgPT4geCArIGZpcnN0Q2hhckNvZGUpO1xuXG4gICAgY29uc3QgaXNUaGlzQWxwaGFiZXQgPSAoY2hhckNvZGUpID0+IHtcbiAgICAgICAgaWYgKGNoYXJDb2RlID49IGZpcnN0Q2hhckNvZGUgJiYgY2hhckNvZGUgPD0gbGFzdENoYXJDb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGZpcnN0Q2hhckNvZGUsIGxhc3RDaGFyQ29kZSwgbG9uZywgaXNUaGlzQWxwaGFiZXQsIGNvZGVzIH07XG59O1xuXG5leHBvcnQgY29uc3QgQWxwaGFiZXRzID0gKCgpID0+IHtcbiAgICBjb25zdCBlbmcgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFscGhhYmV0ID0gQWxwaGFiZXQoOTcsIDEyMik7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFscGhhYmV0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcnVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbHBoYWJldCA9IEFscGhhYmV0KDEwNzIsIDExMDMpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhbHBoYWJldCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGVuZywgcnVzIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgZ2V0Tm9kZSB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL2ZhY3RvcnknO1xuXG5leHBvcnQgY29uc3QgQ2VsbCA9ICh4ID0gLTEsIHkgPSAtMSwgbmFtZSA9ICdjZWxsJykgPT4ge1xuICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICBsZXQgcGFyZW50ID0gJ2ZyZWUnO1xuICAgIGxldCBub2RlID0gZ2V0Tm9kZShuYW1lLCAnY2VsbCcpO1xuXG4gICAgY29uc3Qgc2V0VGhlSGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0hpdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5QYXJlbnQpID0+IHtcbiAgICAgICAgcGFyZW50ID0gblBhcmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRDZWxsTm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFhZID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB4LCB5IH07XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFhZID0gKG54LCBueSkgPT4ge1xuICAgICAgICB4ID0gbng7XG4gICAgICAgIHkgPSBueTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZXRUaGVIaXQsIGlzSGl0LCBzZXRQYXJlbnQsIGdldFBhcmVudCwgZ2V0Q2VsbE5vZGUsIGdldFhZLCBzZXRYWSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IERlY2sgPSAobnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gQ2VsbCgtMSwgLTEsICdkZWNrJyk7XG5cbiAgICBjb25zdCBnZXROdW1iZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IGdldE51bWJlciB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IE1hcmluZVNlY3RvciA9ICh5LCB4KSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gQ2VsbCh5LCB4LCAnbWFyaW5lLXNlY3RvcicpO1xuICAgIGxldCBvY2N1cGFudCA9ICdmcmVlJztcblxuICAgIGNvbnN0IG9jY3VweSA9IChuT2NjdXBhbnQpID0+IHtcbiAgICAgICAgb2NjdXBhbnQgPSBuT2NjdXBhbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgICAgIG9jY3VwYW50ID0gJ2ZyZWUnO1xuICAgIH1cblxuICAgIGNvbnN0IGlzRnJlZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9jY3VwYW50ID09PSAnZnJlZSc7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0T2NjdXBhbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvY2N1cGFudDtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgaXNGcmVlLCBjbGVhciwgb2NjdXB5LCBnZXRPY2N1cGFudCB9KTtcbn0iLCJleHBvcnQgY29uc3QgQ2VsbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2V0QmVmb3JlID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFt5XVstLXhdXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50W3ldWysreF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldEFmdGVyID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFt5XVsrK3hdXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50W3ldWy0teF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldE92ZXIgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1beF1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVt4XVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VW5kZXIgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1beF1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVt4XVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGlhZzEgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1bLS14XVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldWysreF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldERpYWcyID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldWysreF1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVstLXhdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXREaWFnMyA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVsrK3hdXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1bLS14XVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGlhZzQgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1bLS14XVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldWysreF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldENlbGxBcm91bmRBcmVhID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICAgICAgY2VsbHMucHVzaChnZXRCZWZvcmUoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0QWZ0ZXIoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0T3Zlcih4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXRVbmRlcih4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnMSh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnMih4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnMyh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnNCh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldENlbGxBcm91bmRBcmVhIH1cbn0iLCJpbXBvcnQgeyBDZWxsLCBNYXJpbmVTZWN0b3IgfSBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9nYW1lQ29uZmlnJztcbmltcG9ydCB7IE1hcmtlciB9IGZyb20gJy4vcGxheWVyJztcblxuZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9IChuYW1lLCBwbGF5ZXIpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IENvbmZpZy5HYW1lYm9hcmQud2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0ID0gQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQ7XG4gICAgY29uc3QgY29udGFpbmVycyA9IGZpbGxCb2FyZCh3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX1gKTtcblxuICAgIGNvbnN0IGdldFN0cnVjdGVkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVycy5nZXRTdHJ1Y3RlZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRVbnN0cnVjdGVkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVycy5nZXRVbnN0cnVjdGVkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBsYXllciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRQbGF5ZXIsIGdldFN0cnVjdGVkQ29udGFpbmVyLCBnZXRVbnN0cnVjdGVkQ29udGFpbmVyLCBnZXRTaXplLCBnZXROb2RlIH07XG59O1xuXG5jb25zdCBmaWxsQm9hcmQgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuICAgIGxldCBzdHJ1Y3RlZCA9IFtdO1xuICAgIGxldCB1bnN0cnVjdGVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgIGxldCBsaW5lID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IE1hcmluZVNlY3RvcihqLCBpKTtcbiAgICAgICAgICAgIGxpbmVbal0gPSBjZWxsO1xuICAgICAgICAgICAgdW5zdHJ1Y3RlZC5wdXNoKGNlbGwpO1xuICAgICAgICB9XG4gICAgICAgIHN0cnVjdGVkW2ldID0gbGluZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTdHJ1Y3RlZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN0cnVjdGVkO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFVuc3RydWN0ZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB1bnN0cnVjdGVkO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldFN0cnVjdGVkLCBnZXRVbnN0cnVjdGVkIH07XG59O1xuXG5leHBvcnQgY29uc3QgaXNGaXRPbkdhbWVib2FyZEF4aXMgPSAoY29vcmRpbmF0ZSwgb2JqTGVuZ2h0LCBheGVMZW5naHQpID0+IHtcbiAgICByZXR1cm4gY29vcmRpbmF0ZSArIG9iakxlbmdodCA+IGF4ZUxlbmdodFxuICAgICAgICB8fCBjb29yZGluYXRlIDwgMDtcbn1cbiIsImV4cG9ydCBjb25zdCBDb25maWcgPSAoKCkgPT4ge1xuICAgIGNvbnN0IEdhbWVib2FyZCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gMTA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDEwO1xuICAgICAgICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IEVsZW1lbnRzID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgbnVtYmVyT2YgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnJlZ2F0ZXMgPSAyO1xuICAgICAgICAgICAgY29uc3QgY2FyYXZlbHMgPSAyO1xuICAgICAgICAgICAgY29uc3QgZHJha2thcnMgPSAzO1xuICAgICAgICAgICAgY29uc3QgYm9hdHMgPSA0O1xuICAgICAgICAgICAgcmV0dXJuIHsgZnJlZ2F0ZXMsIGNhcmF2ZWxzLCBkcmFra2FycywgYm9hdHMgfTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICByZXR1cm4geyBudW1iZXJPZiB9O1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4geyBHYW1lYm9hcmQsIEVsZW1lbnRzIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBTaGlweWFyZCB9IGZyb20gXCIuL3NoaXB5YXJkXCI7XG5cbmNvbnN0IFBsYXllciA9IChpZCwgbmFtZSkgPT4ge1xuXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRJZCwgZ2V0TmFtZSB9XG59XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlID0gKGlkLCBuYW1lLCBub2RlSWQpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBQbGF5ZXIoaWQsIG5hbWUpO1xuXG4gICAgbGV0IGdhbWVib2FyZCA9IEdhbWVib2FyZChub2RlSWQsIHByb3RvdHlwZSk7XG4gICAgbGV0IHNoaXB5YXJkID0gU2hpcHlhcmQocHJvdG90eXBlKTtcblxuICAgIGNvbnN0IGdldEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZFxuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXB5YXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHlhcmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IGdldEdhbWVib2FyZCwgZ2V0U2hpcHlhcmQgfSk7XG59IiwiaW1wb3J0IHsgcGxheWVyR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBTZXNzaW9uID0gKCgpID0+IHtcbiAgICBsZXQgYWN0aXZlU2hpcCA9IG51bGw7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgZG91YmxlSW5kZXggPSAnc2hpcCc7XG4gICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gbnVsbDtcblxuICAgIHJldHVybiB7IGFjdGl2ZVNoaXAsIGluZGV4LCBkb3VibGVJbmRleCwgY3VycmVudEVsZW1lbnQgfVxufSkoKVxuXG5leHBvcnQgY29uc3QgcmVzZXRTZXNzaW9uID0gKCkgPT4ge1xuICAgIFNlc3Npb24uYWN0aXZlU2hpcCA9IG51bGw7XG4gICAgU2Vzc2lvbi5pbmRleCA9IDA7XG4gICAgU2Vzc2lvbi5kb3VibGVJbmRleCA9ICdzaGlwJztcbiAgICBTZXNzaW9uLmN1cnJlbnRFbGVtZW50ID0gbnVsbDtcbn0iLCJpbXBvcnQgeyBnZXROb2RlIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvZmFjdG9yeSc7XG5pbXBvcnQgeyB2aWV3U2hpcCB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL3NoaXAnO1xuaW1wb3J0IHsgRGVjayB9IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgeyBpc0ZpdE9uR2FtZWJvYXJkQXhpcyB9IGZyb20gJy4vZ2FtZUJvYXJkJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBNYXJrZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi9zZXNzaW9uJztcbmltcG9ydCB7IFNoaXBXYXRlckFyZWFzIH0gZnJvbSAnLi93YXRlckFyZWFzJztcblxuZXhwb3J0IGNvbnN0IFNoaXAgPSAobGVuZ3RoLCBwbGF5ZXIpID0+IHtcbiAgICBcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXROb2RlKCdzaGlwJywgJ2hvcml6b250YWwnKTtcbiAgICBsZXQgYm9keSA9IFtdO1xuICAgIGxldCBsaXZlID0gdHJ1ZTtcbiAgICBsZXQgaG9yaXpvbnRhbCA9IHRydWU7XG4gICAgbGV0IGhlYWQgPSBudWxsO1xuICAgIGxldCBsZWdhbCA9IHRydWU7XG4gICAgbGV0IHNoaXBXYXRlckFyZWFzID0gU2hpcFdhdGVyQXJlYXMoKTtcblxuICAgIGNvbnN0IGZpbGxDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkZWNrID0gRGVjayhpKTtcbiAgICAgICAgICAgIGJvZHkucHVzaChkZWNrKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWNrLmdldENlbGxOb2RlKCkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldE9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgICAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpKSB7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbCcpXG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmVydGljYWwnKVxuICAgICAgICAgICAgaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpXG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpXG4gICAgICAgICAgICBob3Jpem9udGFsID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdGFrZURvd25XYXRlckFyZWFzID0gKCkgPT4ge1xuICAgICAgICBzaGlwV2F0ZXJBcmVhcy5jbGVhckFyZWFzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGF1bmNoU2hpcE9uV2F0ZXIgPSAobkhlYWQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB3YXRlckFyZWFzID0gZ2V0V2F0ZXJBcmVhKG5IZWFkKTtcbiAgICAgICAgICAgIGxldCBhY2Vzc2liaWxpdHkgPSB3YXRlckFyZWFzLmNoZWNrQXJlYSgpO1xuICAgICAgICAgICAgaWYgKGFjZXNzaWJpbGl0eSkge1xuICAgICAgICAgICAgICAgIHRha2VEb3duV2F0ZXJBcmVhcygpO1xuICAgICAgICAgICAgICAgIHNoaXBXYXRlckFyZWFzID0gd2F0ZXJBcmVhcztcbiAgICAgICAgICAgICAgICBzaGlwV2F0ZXJBcmVhcy5vY2N1cHlBcmVhKHNoaXBXYXRlckFyZWFzLmdldEFyZWFVbmRlclRoZVNoaXAoKSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBzaGlwV2F0ZXJBcmVhcy5vY2N1cHlBcmVhKHNoaXBXYXRlckFyZWFzLmdldEFyZWFVbmRlclRoZVNoaXAoKSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFjZXNzaWJpbGl0eTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0V2F0ZXJBcmVhID0gKGhlYWQpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkID0gZ2V0Qm9hcmQoKTtcbiAgICAgICAgbGV0IGFyZWFzID0gU2hpcFdhdGVyQXJlYXMocGxheWVyKTtcbiAgICAgICAgbGV0IHggPSBoZWFkLmdldFhZKCkueDtcbiAgICAgICAgbGV0IHkgPSBoZWFkLmdldFhZKCkueTtcbiAgICAgICAgbGV0IG5lY2Vzc2FyeVNlY3RvcnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmVjZXNzYXJ5U2VjdG9ycy5wdXNoKGJvYXJkW3ldW3hdKTtcbiAgICAgICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJlYXMuc2V0QXJlYXMobmVjZXNzYXJ5U2VjdG9ycyk7XG4gICAgICAgIHJldHVybiBhcmVhcztcbiAgICB9XG5cbiAgICBjb25zdCBpc0xpdmUgPSAoKSA9PiB7XG4gICAgICAgIGxpdmUgPSBmYWxzZTtcblxuICAgICAgICBib2R5LmZvckVhY2goKGRlY2spID0+IHtcbiAgICAgICAgICAgIGlmICghZGVjay5pc0hpdCgpKSB7XG4gICAgICAgICAgICAgICAgbGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBsaXZlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRCb2R5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYm9keTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRIZWFkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaGVhZDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRIZWFkID0gKG5IZWFkKSA9PiB7XG4gICAgICAgIGhlYWQgPSBuSGVhZDtcbiAgICB9XG5cbiAgICBjb25zdCBpc0hvcml6b250YWwgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBob3Jpem9udGFsO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTGVnYWwgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsZWdhbDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRMZWdhbCA9ICgpID0+IHtcbiAgICAgICAgbGVnYWwgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IG9yaWVudGF0aW9uU3dpdGNoID0gKCkgPT4ge1xuICAgICAgICBob3Jpem9udGFsID0gIWhvcml6b250YWw7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0U3RydWN0ZWRDb250YWluZXIoKTtcbiAgICB9XG5cbiAgICBmaWxsQ29udGFpbmVyKCk7XG5cbiAgICByZXR1cm4geyBnZXRCb2FyZCwgdGFrZURvd25XYXRlckFyZWFzLCBsYXVuY2hTaGlwT25XYXRlciwgb3JpZW50YXRpb25Td2l0Y2gsIHNldE9yaWVudGF0aW9uLCBpc0xpdmUsIGdldEJvZHksIGdldENvbnRhaW5lciwgZ2V0SGVhZCwgc2V0SGVhZCwgaXNIb3Jpem9udGFsLCBpc0xlZ2FsLCBzZXRMZWdhbCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEZyZWdhdCA9IChtYXJrZXIpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDQsIG1hcmtlcik7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCBtYXJrZXIpO1xufTtcblxuZXhwb3J0IGNvbnN0IENhcmF2ZWwgPSAobWFya2VyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgzLCBtYXJrZXIpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgRHJha2thciA9IChtYXJrZXIpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDIsIG1hcmtlcik7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBCb2F0ID0gKG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFNoaXAoMSwgbWFya2VyKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNoaXBEcmFnRW5kID0gKCkgPT4ge1xuICAgIGxldCBpc01vdmVhYmxlID0gZmFsc2U7XG4gICAgbGV0IGlzQWx0ZXJNb3ZhYmxlID0gZmFsc2U7XG4gICAgbGV0IGJvZHkgPSBTZXNzaW9uLmFjdGl2ZVNoaXAuZ2V0Qm9keSgpO1xuXG4gICAgaWYgKFNlc3Npb24uY3VycmVudEVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpc01vdmVhYmxlID0gU2Vzc2lvbi5jdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoYG1hcmluZS1zZWN0b3JgKTtcbiAgICAgICAgaXNBbHRlck1vdmFibGUgPSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgZGVja2ApO1xuICAgIH1cblxuICAgIGlmICghaXNNb3ZlYWJsZSAmJiAhaXNBbHRlck1vdmFibGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc01vdmVhYmxlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBDb25maWcuR2FtZWJvYXJkLndpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoU2Vzc2lvbi5hY3RpdmVTaGlwLmdldEJvYXJkKClbal1baV0uZ2V0Q2VsbE5vZGUoKSA9PT0gU2Vzc2lvbi5jdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRTaGlwT25Cb2FyZChTZXNzaW9uLmluZGV4LCBqLCBpLCBib2R5Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0FsdGVyTW92YWJsZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChib2R5W2ldLmdldENlbGxOb2RlKCkgPT09IFNlc3Npb24uY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBTZXNzaW9uLmRvdWJsZUluZGV4ID0gU2Vzc2lvbi5pbmRleCAtIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFNlc3Npb24uZG91YmxlSW5kZXggIT09ICdzaGlwJykge1xuICAgICAgICAgICAgbGV0IGhlYWQgPSBTZXNzaW9uLmFjdGl2ZVNoaXAuZ2V0SGVhZCgpLmdldENlbGxOb2RlKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvbmZpZy5HYW1lYm9hcmQuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvbmZpZy5HYW1lYm9hcmQud2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoU2Vzc2lvbi5hY3RpdmVTaGlwLmdldEJvYXJkKClbal1baV0uZ2V0Q2VsbE5vZGUoKSA9PT0gaGVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkU2hpcE9uQm9hcmQoU2Vzc2lvbi5kb3VibGVJbmRleCwgaiwgaSwgYm9keS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGFkZFNoaXBPbkJvYXJkID0gKGluZGV4LCB5LCB4LCBzaGlwTGVuZ2h0KSA9PiB7XG4gICAgbGV0IGRhdGEgPSBnZXREYXRhKGluZGV4LCB5LCB4KTtcbiAgICB2aWV3U2hpcE9uQm9hcmQoZGF0YS5jb29yZGluYXRlLCBkYXRhLngsIGRhdGEueSwgc2hpcExlbmdodCwgZGF0YS5heGVMZW5naHQpXG59XG5cbmNvbnN0IGdldERhdGEgPSAoaW5kZXgsIHgsIHkpID0+IHtcbiAgICByZXR1cm4gU2Vzc2lvbi5hY3RpdmVTaGlwLmlzSG9yaXpvbnRhbCgpXG4gICAgICAgID8geyBjb29yZGluYXRlOiB5IC0gaW5kZXgsIHg6IHgsIHk6IHkgLSBpbmRleCwgYXhlTGVuZ2h0OiBDb25maWcuR2FtZWJvYXJkLndpZHRoIH1cbiAgICAgICAgOiB7IGNvb3JkaW5hdGU6IHggLSBpbmRleCwgeDogeCAtIGluZGV4LCB5OiB5LCBheGVMZW5naHQ6IENvbmZpZy5HYW1lYm9hcmQuaGVpZ2h0IH1cbn1cblxuY29uc3Qgdmlld1NoaXBPbkJvYXJkID0gKGNvb3JkaW5hdGUsIHgsIHksIHNoaXBMZW5naHQsIGF4ZUxlbmdodCkgPT4ge1xuICAgIGlmIChpc0ZpdE9uR2FtZWJvYXJkQXhpcyhjb29yZGluYXRlLCBzaGlwTGVuZ2h0LCBheGVMZW5naHQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoU2Vzc2lvbi5hY3RpdmVTaGlwLmdldEJvYXJkKClbeF1beV0uZ2V0T2NjdXBhbnQoKSA9PT0gJ2ZyZWUnXG4gICAgICAgICAgICB8fCBTZXNzaW9uLmFjdGl2ZVNoaXAuZ2V0Qm9hcmQoKVt4XVt5XS5nZXRPY2N1cGFudCgpID09IFNlc3Npb24uYWN0aXZlU2hpcC5nZXRDb250YWluZXIoKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHZpZXdTaGlwKFNlc3Npb24uYWN0aXZlU2hpcCwgU2Vzc2lvbi5hY3RpdmVTaGlwLmdldEJvYXJkKClbeF1beV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2hpbGRzID0gKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHBsYXllckdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZUJvYXJkJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBNYXJrZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBCb2F0LCBDYXJhdmVsLCBEcmFra2FyLCBGcmVnYXQgfSBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgY29uc3QgU2hpcHlhcmQgPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3QgZnJlZ2F0cyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmZyZWdhdGVzLCAnRnJlZ2F0JywgcGxheWVyKTtcbiAgICBjb25zdCBjYXJhdmVscyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmNhcmF2ZWxzLCAnQ2FyYXZlbCcsIHBsYXllcik7XG4gICAgY29uc3QgZHJha2thcnMgPSBEb2NrKENvbmZpZy5FbGVtZW50cy5udW1iZXJPZi5kcmFra2FycywgJ0RyYWtrYXInLCBwbGF5ZXIpO1xuICAgIGNvbnN0IGJvYXRzID0gRG9jayhDb25maWcuRWxlbWVudHMubnVtYmVyT2YuYm9hdHMsICdCb2F0JywgcGxheWVyKTtcblxuICAgIGNvbnN0IGdldERvY2tXaXRoRnJlZ2F0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZyZWdhdHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERvY2tXaXRoQ2FyYXZlbHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjYXJhdmVscztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhEcmFra2FycyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWtrYXJzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREb2NrV2l0aEJvYXRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYm9hdHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBsYXllciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRQbGF5ZXIsIGdldERvY2tXaXRoRnJlZ2F0cywgZ2V0RG9ja1dpdGhDYXJhdmVscywgZ2V0RG9ja1dpdGhEcmFra2FycywgZ2V0RG9ja1dpdGhCb2F0cyB9O1xufTtcblxuY29uc3QgRG9jayA9IChjb3VudCwgc2hpcEJsdWVQcmludCwgcGxheWVyKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGNvbnN0IGZpbGxEb2NrID0gKGNvdW50LCBzaGlwQmx1ZVByaW50KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGJ1aWxkU2hpcChzaGlwQmx1ZVByaW50KTtcbiAgICAgICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYnVpbGRTaGlwID0gKGJsdWVQcmludCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGJsdWVQcmludCkge1xuICAgICAgICAgICAgY2FzZSAnRnJlZ2F0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gRnJlZ2F0KHBsYXllcik7XG4gICAgICAgICAgICBjYXNlICdDYXJhdmVsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FyYXZlbChwbGF5ZXIpO1xuICAgICAgICAgICAgY2FzZSAnRHJha2thcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIERyYWtrYXIocGxheWVyKTtcbiAgICAgICAgICAgIGNhc2UgJ0JvYXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBCb2F0KHBsYXllcik7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTb3JyeSwgaWxsZWdhbCBzaGlwIGJsdWVwcmludCcpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZpbGxEb2NrKGNvdW50LCBzaGlwQmx1ZVByaW50KTtcblxuICAgIGNvbnN0IGdldFNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0U2hpcHMgfTtcbn0iLCJpbXBvcnQgeyBDZWxsSGFuZGxlciB9IGZyb20gXCIuL2NlbGxIYW5kbGVyXCI7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSBcIi4vc2Vzc2lvblwiO1xuXG5leHBvcnQgY29uc3QgU2hpcFdhdGVyQXJlYXMgPSAocGxheWVyKSA9PiB7XG4gICAgbGV0IHVuZGVyVGhlU2hpcCA9IFtdO1xuICAgIGxldCBhcm91bmRUaGVTaGlwID0gW107XG5cbiAgICBjb25zdCBnZXRBcmVhVW5kZXJUaGVTaGlwID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdW5kZXJUaGVTaGlwO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEFyZWFBcm91bmRUaGVTaGlwID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXJvdW5kVGhlU2hpcFxuICAgIH1cblxuICAgIGNvbnN0IHNldEFyZWFzID0gKGFyZWEpID0+IHtcbiAgICAgICAgdW5kZXJUaGVTaGlwID0gYXJlYTtcbiAgICAgICAgYXJvdW5kVGhlU2hpcCA9IHNldEFyZWFBcm91bmRUaGVTaGlwKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0QXJlYUFyb3VuZFRoZVNoaXAgPSAoKSA9PiB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gQ2VsbEhhbmRsZXIoKTtcbiAgICAgICAgbGV0IGFyZWFzID0gW107XG4gICAgICAgIGxldCBwYXJlbnQgPSBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0U3RydWN0ZWRDb250YWluZXIoKVxuICAgICAgICB1bmRlclRoZVNoaXAuZm9yRWFjaChzZWN0b3IgPT4ge1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gc2VjdG9yLmdldFhZKCk7XG4gICAgICAgICAgICBsZXQgYXJlYSA9IGhhbmRsZXIuZ2V0Q2VsbEFyb3VuZEFyZWEoY29vcmRpbmF0ZXMueCwgY29vcmRpbmF0ZXMueSwgcGFyZW50KTtcbiAgICAgICAgICAgIGFyZWFzID0gYXJlYXMuY29uY2F0KGFyZWEpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFyZWFzKSkuZmlsdGVyKHggPT4gIXVuZGVyVGhlU2hpcC5pbmNsdWRlcyh4KSAmJiB4ICE9PSB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIGNvbnN0IG9jY3VweUFyZWEgPSAoYXJlYSwgb2NjdXBhbnQpID0+IHtcbiAgICAgICAgYXJlYS5mb3JFYWNoKHNlY3RvciA9PiB7XG4gICAgICAgICAgICBzZWN0b3Iub2NjdXB5KG9jY3VwYW50KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0FyZWEgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhY2Vzc2liaWxpdHkgPSB0cnVlO1xuICAgICAgICBsZXQgYXJlYXMgPSB1bmRlclRoZVNoaXAuY29uY2F0KGFyb3VuZFRoZVNoaXApO1xuICAgICAgICBhcmVhcy5mb3JFYWNoKHNlY3RvciA9PiB7XG4gICAgICAgICAgICBpZiAoIXNlY3Rvci5pc0ZyZWUoKSAmJiBzZWN0b3IuZ2V0T2NjdXBhbnQoKSAhPT0gU2Vzc2lvbi5hY3RpdmVTaGlwLmdldENvbnRhaW5lcigpKSB7XG4gICAgICAgICAgICAgICAgYWNlc3NpYmlsaXR5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhY2Vzc2liaWxpdHk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJBcmVhcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFyZWFzID0gdW5kZXJUaGVTaGlwLmNvbmNhdChhcm91bmRUaGVTaGlwKTtcbiAgICAgICAgYXJlYXMuZm9yRWFjaChzZWN0b3IgPT4ge1xuICAgICAgICAgICAgc2VjdG9yLm9jY3VweSgnZnJlZScpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7IGNsZWFyQXJlYXMsIGNoZWNrQXJlYSwgZ2V0QXJlYVVuZGVyVGhlU2hpcCwgZ2V0QXJlYUFyb3VuZFRoZVNoaXAsIHNldEFyZWFzLCBvY2N1cHlBcmVhIH1cbn0iLCJleHBvcnQgY29uc3Qgc2V0SGlkZGVuID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUhpZGRlbiA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn07XG4iLCJleHBvcnQgY29uc3Qgc2V0RHJhZ2dhYmxlID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmRyYWdnYWJsZSA9IHRydWU7XG59O1xuIiwiaW1wb3J0IHsgc2V0RHJhZ2dhYmxlIH0gZnJvbSAnLi9zZXREcmFnZ2FibGUnO1xuXG5leHBvcnQgY29uc3Qgc2V0RHJhZ2dhYmxlRm9yU2hpcHMgPSAoKSA9PiB7XG4gICAgZm9yRnJlZ2F0cygpO1xufTtcblxuY29uc3QgZm9yRnJlZ2F0cyA9ICgpID0+IHtcbiAgICBjb25zdCBkb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZyZWdhdHMnKTtcbiAgICBjb25zdCBmcmVnYXRzID0gQXJyYXkuZnJvbShkb2NrLmNoaWxkcmVuKTtcblxuICAgIGZyZWdhdHMuZm9yRWFjaCgoZnJlZ2F0KSA9PiB7XG4gICAgICAgIHNldERyYWdnYWJsZShmcmVnYXQpO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IEFscGhhYmV0cyB9IGZyb20gJy4uLy4uL21vZGVscy9hbHBoYWJldHMnO1xuaW1wb3J0IHsgYWlHYW1lYm9hcmQsIHBsYXllckdhbWVib2FyZCB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lQm9hcmQnO1xuaW1wb3J0IHsgZ2V0Tm9kZSB9IGZyb20gJy4vZmFjdG9yeSc7XG5cbmNvbnN0IGFscGhhYmV0ID0gQWxwaGFiZXRzLnJ1cygpLmNvZGVzO1xuXG5leHBvcnQgY29uc3Qgdmlld0F4aXMgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBub2RlID0gYm9hcmQuZ2V0Tm9kZSgpO1xuICAgIGNvbnN0IHhBeGlzID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJyk7XG4gICAgY29uc3QgeUF4aXMgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy55LWF4aXMnKTtcbiAgICBjb25zdCBzaXplID0gYm9hcmQuZ2V0U2l6ZSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplLndpZHRoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGdldE5vZGUoJ3gtY2VsbCcpO1xuICAgICAgICBjb25zdCBsZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFscGhhYmV0W2ldKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gbGV0dGVyO1xuICAgICAgICB4QXhpcy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGdldE5vZGUoJ3ktY2VsbCcpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgeUF4aXMuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBnZXROb2RlID0gKC4uLm5hbWVzKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUgIT09ICcnKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbm9kZTtcbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2FtZUNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCB2aWV3Qm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhib2FyZC5nZXROb2RlKCkpXG4gICAgY29uc3QgY29udGFpbmVyID0gYm9hcmQuZ2V0U3RydWN0ZWRDb250YWluZXIoKTtcbiAgICBjb25zdCBib2FyZHdyID0gYm9hcmQuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgIGNvbnRhaW5lci5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICAgIGxpbmUuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgYm9hcmR3ci5hcHBlbmRDaGlsZChjZWxsLmdldENlbGxOb2RlKCkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IFN0eWxlUHJlc2V0cyA9ICgoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJvYXJkLXdpZHRoJywgQ29uZmlnLkdhbWVib2FyZC53aWR0aCk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJvYXJkLWhlaWdodCcsIENvbmZpZy5HYW1lYm9hcmQuaGVpZ2h0KTtcbn0pKClcbiIsImltcG9ydCB7IHZpZXdBeGlzIH0gZnJvbSBcIi4vYXhpc1wiO1xuaW1wb3J0IHsgdmlld0JvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcbmltcG9ydCB7IHZpZXdTaGlweWFyZCB9IGZyb20gXCIuL3NoaXB5YXJkXCI7XG5cbmV4cG9ydCBjb25zdCB2aWV3UHJvZmlsZSA9IChwcm9maWxlKSA9PiB7XG4gICAgdmlld0JvYXJkKHByb2ZpbGUuZ2V0R2FtZWJvYXJkKCkpO1xuICAgIHZpZXdBeGlzKHByb2ZpbGUuZ2V0R2FtZWJvYXJkKCkpO1xuICAgIC8vdmlld1NoaXB5YXJkKHByb2ZpbGUuZ2V0U2hpcHlhcmQoKSk7XG59IiwiaW1wb3J0IHsgcGxheWVyR2FtZWJvYXJkIH0gZnJvbSBcIi4uLy4uL21vZGVscy9nYW1lQm9hcmRcIjtcbmltcG9ydCB7IHJlbW92ZUNoaWxkcywgc2hpcFRyYXZlcnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NoaXBcIjtcblxuZXhwb3J0IGNvbnN0IHZpZXdTaGlwID0gKHNoaXAsIGhlYWQpID0+IHtcbiAgICBsZXQgaXNWaWV3ID0gc2hpcC5sYXVuY2hTaGlwT25XYXRlcihoZWFkKTtcbiAgICBpZiAoaXNWaWV3KSB7XG4gICAgICAgIHNoaXAuc2V0SGVhZChoZWFkKTtcbiAgICAgICAgaGVhZC5nZXRDZWxsTm9kZSgpLmFwcGVuZENoaWxkKHNoaXAuZ2V0Q29udGFpbmVyKCkpO1xuICAgIH1cbiAgICByZXR1cm4gaXNWaWV3O1xufTtcbiIsImltcG9ydCB7IHNldERyYWdnYWJsZUZvclNoaXBzIH0gZnJvbSAnLi4vZHJhZ0FuZERyb3Avc2hpcHMnO1xuXG5leHBvcnQgY29uc3Qgdmlld1NoaXB5YXJkID0gKHNoaXB5YXJkKSA9PiB7XG4gICAgZmlsbFNoaXB5YXJkTm9kZShzaGlweWFyZCk7XG4gICAgc2V0RHJhZ2dhYmxlRm9yU2hpcHMoKTtcbn07XG5cbmNvbnN0IGZpbGxTaGlweWFyZE5vZGUgPSAoc2hpcHlhcmQpID0+IHtcbiAgICBhZGRGcmVnYXRlcyhzaGlweWFyZCk7XG4gICAgYWRkQ2FyYXZlbHMoc2hpcHlhcmQpO1xuICAgIGFkZERyYWtrYXJzKHNoaXB5YXJkKTtcbiAgICBhZGRCb2F0cyhzaGlweWFyZCk7XG59O1xuXG5jb25zdCBhZGRGcmVnYXRlcyA9IChzaGlweWFyZCkgPT4ge1xuICAgIGNvbnN0IGRvY2tOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZyZWdhdHMnKTtcbiAgICBjb25zdCBzaGlwcyA9IHNoaXB5YXJkLmdldERvY2tXaXRoRnJlZ2F0cygpLmdldFNoaXBzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkb2NrTm9kZS5hcHBlbmRDaGlsZChzaGlwc1tpXS5nZXRDb250YWluZXIoKSk7XG4gICAgfVxufTtcblxuY29uc3QgYWRkQ2FyYXZlbHMgPSAoc2hpcHlhcmQpID0+IHtcbiAgICBjb25zdCBkb2NrTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJhdmVscycpO1xuICAgIGNvbnN0IHNoaXBzID0gc2hpcHlhcmQuZ2V0RG9ja1dpdGhDYXJhdmVscygpLmdldFNoaXBzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkb2NrTm9kZS5hcHBlbmRDaGlsZChzaGlwc1tpXS5nZXRDb250YWluZXIoKSk7XG4gICAgfVxufTtcblxuY29uc3QgYWRkRHJha2thcnMgPSAoc2hpcHlhcmQpID0+IHtcbiAgICBjb25zdCBkb2NrTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFra2FycycpO1xuICAgIGNvbnN0IHNoaXBzID0gc2hpcHlhcmQuZ2V0RG9ja1dpdGhEcmFra2FycygpLmdldFNoaXBzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkb2NrTm9kZS5hcHBlbmRDaGlsZChzaGlwc1tpXS5nZXRDb250YWluZXIoKSk7XG4gICAgfVxufTtcblxuY29uc3QgYWRkQm9hdHMgPSAoc2hpcHlhcmQpID0+IHtcbiAgICBjb25zdCBkb2NrTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2F0cycpO1xuICAgIGNvbnN0IHNoaXBzID0gc2hpcHlhcmQuZ2V0RG9ja1dpdGhCb2F0cygpLmdldFNoaXBzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkb2NrTm9kZS5hcHBlbmRDaGlsZChzaGlwc1tpXS5nZXRDb250YWluZXIoKSk7XG4gICAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==