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
/* harmony import */ var _models_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/gameBoard */ "./src/models/gameBoard.js");
/* harmony import */ var _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/animations/changeVisible */ "./src/views/animations/changeVisible.js");



const setListenersForLinks = () => {
    const manualModeLink = document.querySelector('.manual-mode');
    const randomModeLink = document.querySelector('.random-mode');
    const shipyard = document.querySelector('.shipyard');

    const openManualMode = manualModeLink.addEventListener('click', (e) => {
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setHidden)(_models_gameBoard__WEBPACK_IMPORTED_MODULE_0__.aiGameboard.getNode());
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.removeHidden)(shipyard);
    });

    const openRandomMode = randomModeLink.addEventListener('click', (e) => {
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.removeHidden)(_models_gameBoard__WEBPACK_IMPORTED_MODULE_0__.aiGameboard.getNode());
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
/* harmony import */ var _views_styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/styles/main.css */ "./src/views/styles/main.css");
/* harmony import */ var _views_nodes_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/nodes/gameboard */ "./src/views/nodes/gameboard.js");
/* harmony import */ var _views_nodes_axis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/nodes/axis */ "./src/views/nodes/axis.js");
/* harmony import */ var _controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/listeners/forLinks */ "./src/controllers/listeners/forLinks.js");
/* harmony import */ var _views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/nodes/shipyard */ "./src/views/nodes/shipyard.js");
/* harmony import */ var _controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/listeners/forShips */ "./src/controllers/listeners/forShips.js");
/* harmony import */ var _models_shipyard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/shipyard */ "./src/models/shipyard.js");








(0,_controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_3__.setListenersForLinks)();
(0,_views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_4__.viewShipyard)();
(0,_controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_5__.setListenersForShips)(_models_shipyard__WEBPACK_IMPORTED_MODULE_6__.playerShipyardModel.getDockWithFregats().getShips());


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
const Alphabet = (fCharCode, lCharCode) => {
    const firstCharCode = fCharCode;
    const lastCharCode = lCharCode;
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


const Cell = (cx = -1, cy = -1, name = 'cell') => {
    let hit = false;
    let parent = 'free';
    let node = (0,_views_nodes_factory__WEBPACK_IMPORTED_MODULE_0__.getNode)(name);
    let x = cx;
    let y = cy;

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

    const setXY = (cx, cy) => {
        x = cx;
        y = cy;
    }

    return { setTheHit, isHit, setParent, getParent, getCellNode, getXY, setXY };
};

const Deck = (num) => {
    const prototype = Cell(-1, -1, 'deck');
    const number = num;

    const getNumber = () => {
        return number;
    }

    return Object.assign(prototype, { getNumber });
}

const MarineSector = (y, x) => {
    const prototype = Cell(y, x, 'marine-sector');

    const isFree = () => {
        return prototype.getParent() === 'free';
    }

    return Object.assign(prototype, { isFree });
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
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/models/gameBoard.js");


const CellHandler = () => {
    const getBefore = (x, y) => {
        try {
            return _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer()[y][--x]
        } catch (error) {
            return _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer()[y][++x]
        }
    }

    const getAfter = (x, y) => {
        try {
            return _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer()[y][++x]
        } catch (error) {
            return _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer()[y][--x]
        }
    }

    const getOver = (x, y) => {
        try {
            return _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer()[--y][x]
        } catch (error) {
            return _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer()[++y][x]
        }
    }

    const getUnder = (x, y) => {
        try {
            return _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer()[++y][x]
        } catch (error) {
            return _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer()[--y][x]
        }
    }

    const getDiag1 = (x, y) => {
        try {
            return _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer()[--y][--x]
        } catch (error) {
            return _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer()[++y][++x]
        }
    }

    const getDiag2 = (x, y) => {
        try {
            return _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer()[--y][++x]
        } catch (error) {
            return _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer()[++y][--x]
        }
    }

    const getDiag3 = (x, y) => {
        try {
            return _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer()[++y][++x]
        } catch (error) {
            return _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer()[--y][--x]
        }
    }

    const getDiag4 = (x, y) => {
        try {
            return _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer()[++y][--x]
        } catch (error) {
            return _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer()[--y][++x]
        }
    }

    const getCellAroundArea = (x, y) => {
        console.log(x, y)
        let cells = [];
        cells.push(getBefore(x, y));
        cells.push(getAfter(x, y));
        cells.push(getOver(x, y));
        cells.push(getUnder(x, y));
        cells.push(getDiag1(x, y));
        cells.push(getDiag2(x, y));
        cells.push(getDiag3(x, y));
        cells.push(getDiag4(x, y));
        console.log(cells)
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
/* harmony export */   aiGameboard: () => (/* binding */ aiGameboard),
/* harmony export */   isFitOnGameboardAxis: () => (/* binding */ isFitOnGameboardAxis),
/* harmony export */   playerGameboard: () => (/* binding */ playerGameboard)
/* harmony export */ });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameConfig */ "./src/models/gameConfig.js");



const Gameboard = (name) => {
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

    return { getStructedContainer, getUnstructedContainer, getSize, getNode };
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

const playerGameboard = Gameboard('player-board');
const aiGameboard = Gameboard('ai-board');


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
    let playerGameBoardCells = _gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.getStructedContainer();
    return { activeShip, index, doubleIndex, currentElement, playerGameBoardCells }
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
/* harmony export */   shipDragEnd: () => (/* binding */ shipDragEnd),
/* harmony export */   shipTravers: () => (/* binding */ shipTravers)
/* harmony export */ });
/* harmony import */ var _views_nodes_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/nodes/factory */ "./src/views/nodes/factory.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameBoard */ "./src/models/gameBoard.js");
/* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameConfig */ "./src/models/gameConfig.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session */ "./src/models/session.js");
/* harmony import */ var _waterAreas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./waterAreas */ "./src/models/waterAreas.js");








const Ship = (numberOfDecks) => {
    const container = (0,_views_nodes_factory__WEBPACK_IMPORTED_MODULE_0__.getNode)('ship', 'horizontal');
    let length = numberOfDecks;
    let body = [];
    let live = true;
    let horizontal = true;
    let head = null;
    let legal = true;
    let shipWaterAreas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_6__.ShipWaterAreas)();
    let occupiedMarineSectors = [];

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

    const getWaterArea = (head, board) => {
        let areas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_6__.ShipWaterAreas)();
        let x = head.getXY().x;
        let y = head.getXY().y;
        let necessarySectors = [];
        for (let i = 0; i < length; i++) {
            necessarySectors.push(_gameBoard__WEBPACK_IMPORTED_MODULE_3__.playerGameboard.getStructedContainer()[y][x]);
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

    const getSectors = () => {
        return occupiedMarineSectors;
    }

    fillContainer();

    return { getSectors, takeDownWaterAreas, launchShipOnWater, orientationSwitch, setOrientation, isLive, getBody, getContainer, getHead, setHead, isHorizontal, isLegal, setLegal };
};

const Fregat = () => {
    const prototype = Ship(4);
    return Object.assign(prototype);
};

const Caravel = () => {
    const prototype = Ship(3);
    return Object.assign(prototype);
};

const Drakkar = () => {
    const prototype = Ship(2);
    return Object.assign(prototype);
};

const Boat = () => {
    const prototype = Ship(1);
    return Object.assign(prototype);
};

const shipDragEnd = () => {
    let isMoveable = false;
    let isAlterMovable = false;
    let body = _session__WEBPACK_IMPORTED_MODULE_5__.Session.activeShip.getBody();

    if (_session__WEBPACK_IMPORTED_MODULE_5__.Session.currentElement !== undefined) {
        isMoveable = _session__WEBPACK_IMPORTED_MODULE_5__.Session.currentElement.classList.contains(`marine-sector`);
        isAlterMovable = _session__WEBPACK_IMPORTED_MODULE_5__.Session.currentElement.classList.contains(`deck`);
    }

    if (!isMoveable && !isAlterMovable) {
        return;
    }

    if (isMoveable) {
        for (let i = 0; i < _gameConfig__WEBPACK_IMPORTED_MODULE_4__.Config.Gameboard.height; i++) {
            for (let j = 0; j < _gameConfig__WEBPACK_IMPORTED_MODULE_4__.Config.Gameboard.width; j++) {
                if (_session__WEBPACK_IMPORTED_MODULE_5__.Session.playerGameBoardCells[j][i].getCellNode() === _session__WEBPACK_IMPORTED_MODULE_5__.Session.currentElement) {
                    addShipOnBoard(_session__WEBPACK_IMPORTED_MODULE_5__.Session.index, j, i, body.length);
                }
            }
        }
    } else if (isAlterMovable) {
        for (let i = 0; i < body.length; i++) {
            if (body[i].getCellNode() === _session__WEBPACK_IMPORTED_MODULE_5__.Session.currentElement) {
                _session__WEBPACK_IMPORTED_MODULE_5__.Session.doubleIndex = _session__WEBPACK_IMPORTED_MODULE_5__.Session.index - i;
            }
        }
        if (_session__WEBPACK_IMPORTED_MODULE_5__.Session.doubleIndex !== 'ship') {
            let head = _session__WEBPACK_IMPORTED_MODULE_5__.Session.activeShip.getHead().getCellNode();
            for (let i = 0; i < _gameConfig__WEBPACK_IMPORTED_MODULE_4__.Config.Gameboard.height; i++) {
                for (let j = 0; j < _gameConfig__WEBPACK_IMPORTED_MODULE_4__.Config.Gameboard.width; j++) {
                    if (_session__WEBPACK_IMPORTED_MODULE_5__.Session.playerGameBoardCells[j][i].getCellNode() === head) {
                        addShipOnBoard(_session__WEBPACK_IMPORTED_MODULE_5__.Session.doubleIndex, j, i, body.length)
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
    return _session__WEBPACK_IMPORTED_MODULE_5__.Session.activeShip.isHorizontal()
        ? { coordinate: y - index, x: x, y: y - index, axeLenght: _gameConfig__WEBPACK_IMPORTED_MODULE_4__.Config.Gameboard.width }
        : { coordinate: x - index, x: x - index, y: y, axeLenght: _gameConfig__WEBPACK_IMPORTED_MODULE_4__.Config.Gameboard.height }
}

const viewShipOnBoard = (coordinate, x, y, shipLenght, axeLenght) => {
    console.log(`${coordinate} ${shipLenght} ${axeLenght}`)
    if ((0,_gameBoard__WEBPACK_IMPORTED_MODULE_3__.isFitOnGameboardAxis)(coordinate, shipLenght, axeLenght)) {
        return;
    } else {
        if (_session__WEBPACK_IMPORTED_MODULE_5__.Session.playerGameBoardCells[x][y].getParent() === 'free'
            || _session__WEBPACK_IMPORTED_MODULE_5__.Session.playerGameBoardCells[x][y].getParent() == _session__WEBPACK_IMPORTED_MODULE_5__.Session.activeShip.getContainer()
        ) {
            (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_1__.viewShip)(_session__WEBPACK_IMPORTED_MODULE_5__.Session.activeShip, _session__WEBPACK_IMPORTED_MODULE_5__.Session.playerGameBoardCells[x][y]);
        }
    }
}

const shipTravers = (func, ship, head) => {

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
/* harmony export */   Shipyard: () => (/* binding */ Shipyard),
/* harmony export */   playerShipyardModel: () => (/* binding */ playerShipyardModel)
/* harmony export */ });
/* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameConfig */ "./src/models/gameConfig.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/models/ship.js");



const Shipyard = () => {
    const fregats = Dock(_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements.numberOf.fregates, 'Fregat');
    const caravels = Dock(_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements.numberOf.caravels, 'Caravel');
    const drakkars = Dock(_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements.numberOf.drakkars, 'Drakkar');
    const boats = Dock(_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements.numberOf.boats, 'Boat');

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

    return { getDockWithFregats, getDockWithCaravels, getDockWithDrakkars, getDockWithBoats };
};

const Dock = (count, shipBluePrint) => {
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
                return (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Fregat)();
            case 'Caravel':
                return (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Caravel)();
            case 'Drakkar':
                return (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Drakkar)();
            case 'Boat':
                return (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Boat)();
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

const playerShipyardModel = Shipyard();

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



const ShipWaterAreas = () => {
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
        underTheShip.forEach(sector => {
            let coordinates = sector.getXY();
            let area = handler.getCellAroundArea(coordinates.x, coordinates.y)
            areas = areas.concat(area);
        })
        return Array.from(new Set(areas)).filter(x => !underTheShip.includes(x) && x !== undefined);
    }

    const occupyArea = (area, occupant) => {
        area.forEach(sector => {
            sector.setParent(occupant);
        })
    }

    const checkArea = () => {
        let acessibility = true;
        let areas = underTheShip.concat(aroundTheShip);
        areas.forEach(sector => {
            if (!sector.isFree() && sector.getParent() !== _session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip.getContainer()) {
                acessibility = false;
            }
        })
        return acessibility;
    }

    const clearAreas = () => {
        let areas = underTheShip.concat(aroundTheShip);
        areas.forEach(sector => {
            sector.setParent('free');
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

viewAxis(_models_gameBoard__WEBPACK_IMPORTED_MODULE_1__.playerGameboard);
viewAxis(_models_gameBoard__WEBPACK_IMPORTED_MODULE_1__.aiGameboard);


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
/* harmony import */ var _models_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/gameBoard */ "./src/models/gameBoard.js");
/* harmony import */ var _models_gameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/gameConfig */ "./src/models/gameConfig.js");



const viewBoard = (board) => {
    const container = board.getStructedContainer();
    const boardwr = board.getNode().querySelector('.board');
    container.forEach((line) => {
        line.forEach((cell) => {
            boardwr.appendChild(cell.getCellNode());
        });
    });
};

const StylePresets = (() => {
    document.documentElement.style.setProperty('--board-width', _models_gameConfig__WEBPACK_IMPORTED_MODULE_1__.Config.Gameboard.width);
    document.documentElement.style.setProperty('--board-height', _models_gameConfig__WEBPACK_IMPORTED_MODULE_1__.Config.Gameboard.height);
})()

viewBoard(_models_gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard);
viewBoard(_models_gameBoard__WEBPACK_IMPORTED_MODULE_0__.aiGameboard);


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
/* harmony import */ var _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/gameConfig */ "./src/models/gameConfig.js");
/* harmony import */ var _models_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/ship */ "./src/models/ship.js");
/* harmony import */ var _models_shipyard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/shipyard */ "./src/models/shipyard.js");
/* harmony import */ var _dragAndDrop_ships__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dragAndDrop/ships */ "./src/views/dragAndDrop/ships.js");





const viewShipyard = () => {
    fillShipyardNode();
    (0,_dragAndDrop_ships__WEBPACK_IMPORTED_MODULE_3__.setDraggableForShips)();
};

const fillShipyardNode = () => {
    addFregates();
    addCaravels();
    addDrakkars();
    addBoats();
};

const addFregates = () => {
    const dockNode = document.querySelector('.fregats');
    const ships = _models_shipyard__WEBPACK_IMPORTED_MODULE_2__.playerShipyardModel.getDockWithFregats().getShips();
    for (let i = 0; i < ships.length; i++) {
        dockNode.appendChild(ships[i].getContainer());
    }
};

const addCaravels = () => {
    const dockNode = document.querySelector('.caravels');
    const ships = _models_shipyard__WEBPACK_IMPORTED_MODULE_2__.playerShipyardModel.getDockWithCaravels().getShips();
    for (let i = 0; i < ships.length; i++) {
        dockNode.appendChild(ships[i].getContainer());
    }
};

const addDrakkars = () => {
    const dockNode = document.querySelector('.drakkars');
    const ships = _models_shipyard__WEBPACK_IMPORTED_MODULE_2__.playerShipyardModel.getDockWithDrakkars().getShips();
    for (let i = 0; i < ships.length; i++) {
        dockNode.appendChild(ships[i].getContainer());
    }
};

const addBoats = () => {
    const dockNode = document.querySelector('.boats');
    const ships = _models_shipyard__WEBPACK_IMPORTED_MODULE_2__.playerShipyardModel.getDockWithBoats().getShips();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sOEZBQThGLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxTQUFTLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxXQUFXLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVks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QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZpRDtBQUNrQjtBQUNHO0FBQ1Y7O0FBRXJEO0FBQ1A7QUFDQSxJQUFJLHdFQUFvQjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixpRUFBbUI7QUFDckMsb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixpRUFBbUI7QUFDckMsb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixpRUFBbUI7QUFDckMsb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixpRUFBbUI7QUFDckMsb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9zdHlsZXMvbWFpbi5jc3M/ODlmNiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckxpbmtzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvYWxwaGFiZXRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2NlbGwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvY2VsbEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2dhbWVDb25maWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3NoaXB5YXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3dhdGVyQXJlYXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9hbmltYXRpb25zL2NoYW5nZVZpc2libGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9kcmFnQW5kRHJvcC9zZXREcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9kcmFnQW5kRHJvcC9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL2F4aXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9mYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3NoaXB5YXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgIC0tYm9hcmQtd2lkdGg6IDA7XG4gICAgLS1ib2FyZC1oZWlnaHQ6IDA7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgcm93LWdhcDogMnZoO1xufVxuXG5zcGFuIHtcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMnZoO1xufVxuXG4udGl0bGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4udGlwcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDJ2aCwgMnZ3KTtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4ubWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLnNoaXB5YXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XG4gICAgcm93LWdhcDogNnZoO1xuICAgIHBhZGRpbmc6IDJ2aDtcbn1cblxuLmRvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sdW1uLWdhcDogNHZoO1xufVxuXG4uc2hpcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWxlY3RlZCB7XG4gICAgb3BhY2l0eTogMC4xO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi5ib2FyZF9fYXhpcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgcm93LWdhcDogMnZoO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogNXZoO1xufVxuXG4uYXhpcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbn1cblxuLngtYXhpcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMC4xdmg7XG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksIG1pbi1jb250ZW50KTtcbn1cblxuLmJvYXJkLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbn1cblxuLnktYXhpcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMC4xdmg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgbWluLWNvbnRlbnQpO1xufVxuXG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtd2lkdGgpLCBtaW4tY29udGVudCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgbWluLWNvbnRlbnQpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGdhcDogMXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tYXJrZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiA1dmg7XG59XG5cbi5jZWxsLFxuLngtY2VsbCxcbi55LWNlbGwsXG4uZGVjayxcbi5tYXJpbmUtc2VjdG9yIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiA1dmg7XG4gICAgaGVpZ2h0OiA1dmg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmFpLWJvYXJkIHt9XG5cbi5jZWxsLFxuLm1hcmluZS1zZWN0b3Ige1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDI1NSwgMC4zKTtcbn1cblxuLngtY2VsbCxcbi55LWNlbGwge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4uc2hpcCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDFweCByZ2JhKDAsIDAsIDI1NSwgMSkgc29saWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XG4gICAgZ2FwOiAxcHg7XG59XG5cbi5ob3Jpem9udGFsIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XG59XG5cbi52ZXJ0aWNhbCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWluLWNvbnRlbnQpO1xufVxuXG4uZGVjayB7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4uZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA0dmg7XG59XG5cbi5yYW5kb20tbW9kZSxcbi5tYW51YWwtbW9kZSB7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmx1ZTtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yYW5kb20tbW9kZTpob3Zlcixcbi5tYW51YWwtbW9kZTpob3ZlciB7XG4gICAgY29sb3I6IHJnYigxMjIsIDIzMSwgNzIpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgcmdiKDEyMiwgMjMxLCA3Mik7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3Mvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDhEQUE4RDtBQUNsRTs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4REFBOEQ7SUFDOUQsNERBQTREO0lBQzVELG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBOzs7OztJQUtJLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQSxXQUFXOztBQUVYOztJQUVJLGdEQUFnRDtBQUNwRDs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHNDQUFzQztJQUN0QyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFFBQVE7QUFDWjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSx3QkFBd0I7SUFDeEIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIC0tYm9hcmQtd2lkdGg6IDA7XFxuICAgIC0tYm9hcmQtaGVpZ2h0OiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgcm93LWdhcDogMnZoO1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAydmg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnRpcHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogbWluKDJ2aCwgMnZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5zaGlweWFyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWluLWNvbnRlbnQpO1xcbiAgICByb3ctZ2FwOiA2dmg7XFxuICAgIHBhZGRpbmc6IDJ2aDtcXG59XFxuXFxuLmRvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiA0dmg7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBvcGFjaXR5OiAwLjE7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcblxcbi5ib2FyZF9fYXhpcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgcm93LWdhcDogMnZoO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogNXZoO1xcbn1cXG5cXG4uYXhpcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLngtYXhpcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAwLjF2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtd2lkdGgpLCBtaW4tY29udGVudCk7XFxufVxcblxcbi5ib2FyZC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG59XFxuXFxuLnktYXhpcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAwLjF2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgbWluLWNvbnRlbnQpO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksIG1pbi1jb250ZW50KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgbWluLWNvbnRlbnQpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogMXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWFya2VyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNXZoO1xcbn1cXG5cXG4uY2VsbCxcXG4ueC1jZWxsLFxcbi55LWNlbGwsXFxuLmRlY2ssXFxuLm1hcmluZS1zZWN0b3Ige1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNXZoO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmFpLWJvYXJkIHt9XFxuXFxuLmNlbGwsXFxuLm1hcmluZS1zZWN0b3Ige1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggcmdiYSgwLCAwLCAyNTUsIDAuMyk7XFxufVxcblxcbi54LWNlbGwsXFxuLnktY2VsbCB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiAxcHggcmdiYSgwLCAwLCAyNTUsIDEpIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbi5ob3Jpem9udGFsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWluLWNvbnRlbnQpO1xcbn1cXG5cXG4udmVydGljYWwge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XFxufVxcblxcbi5kZWNrIHtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDR2aDtcXG59XFxuXFxuLnJhbmRvbS1tb2RlLFxcbi5tYW51YWwtbW9kZSB7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmx1ZTtcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJhbmRvbS1tb2RlOmhvdmVyLFxcbi5tYW51YWwtbW9kZTpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMTIyLCAyMzEsIDcyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZ2IoMTIyLCAyMzEsIDcyKTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWlHYW1lYm9hcmQgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2FtZUJvYXJkJztcbmltcG9ydCB7IHJlbW92ZUhpZGRlbiwgc2V0SGlkZGVuIH0gZnJvbSAnLi4vLi4vdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlJztcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckxpbmtzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1hbnVhbE1vZGVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbnVhbC1tb2RlJyk7XG4gICAgY29uc3QgcmFuZG9tTW9kZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tLW1vZGUnKTtcbiAgICBjb25zdCBzaGlweWFyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlweWFyZCcpO1xuXG4gICAgY29uc3Qgb3Blbk1hbnVhbE1vZGUgPSBtYW51YWxNb2RlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHNldEhpZGRlbihhaUdhbWVib2FyZC5nZXROb2RlKCkpO1xuICAgICAgICByZW1vdmVIaWRkZW4oc2hpcHlhcmQpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb3BlblJhbmRvbU1vZGUgPSByYW5kb21Nb2RlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHJlbW92ZUhpZGRlbihhaUdhbWVib2FyZC5nZXROb2RlKCkpO1xuICAgICAgICBzZXRIaWRkZW4oc2hpcHlhcmQpO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IFNlc3Npb24sIHJlc2V0U2Vzc2lvbiB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc2Vzc2lvblwiO1xuaW1wb3J0IHsgc2hpcERyYWdFbmQsIHNoaXBUcmF2ZXJzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zaGlwXCI7XG5pbXBvcnQgeyB2aWV3U2hpcCB9IGZyb20gXCIuLi8uLi92aWV3cy9ub2Rlcy9zaGlwXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JTaGlwcyA9IChzaGlwcykgPT4ge1xuICAgIGNvbnN0IGJvcmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgZGVja3MgPSBzaGlwLmdldEJvZHkoKTtcbiAgICAgICAgZGVja3MuZm9yRWFjaChkZWNrID0+IHtcbiAgICAgICAgICAgIGRlY2suZ2V0Q2VsbE5vZGUoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldnQgPT4ge1xuICAgICAgICAgICAgICAgIFNlc3Npb24uaW5kZXggPSBkZWNrLmdldE51bWJlcigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5nZXRIZWFkKCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIFNlc3Npb24uY3VycmVudEVsZW1lbnQgPSBzaGlwLmdldEhlYWQoKS5nZXRDZWxsTm9kZSgpO1xuICAgICAgICAgICAgICAgIHNoaXAub3JpZW50YXRpb25Td2l0Y2goKTtcbiAgICAgICAgICAgICAgICBsZXQgaXNWaWV3ID0gdmlld1NoaXAoc2hpcCwgc2hpcC5nZXRIZWFkKCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzVmlldykge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLnNldE9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0U2Vzc2lvbigpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5vcmllbnRhdGlvblN3aXRjaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoYGRyYWdzdGFydGAsIChldnQpID0+IHtcbiAgICAgICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmFkZChgc2VsZWN0ZWRgKTtcbiAgICAgICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcCA9IHNoaXA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXAuZ2V0Q29udGFpbmVyKCkuYWRkRXZlbnRMaXN0ZW5lcihgZHJhZ2VuZGAsIChldnQpID0+IHtcbiAgICAgICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShgc2VsZWN0ZWRgKTtcbiAgICAgICAgICAgIHNoaXBEcmFnRW5kKCk7XG4gICAgICAgICAgICByZXNldFNlc3Npb24oKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBib3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihgZHJhZ292ZXJgLCAoZXZ0KSA9PiB7XG4gICAgICAgIFNlc3Npb24uY3VycmVudEVsZW1lbnQgPSBldnQudGFyZ2V0O1xuICAgIH0pXG59IiwiaW1wb3J0ICcuL3ZpZXdzL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4vdmlld3Mvbm9kZXMvZ2FtZWJvYXJkJztcbmltcG9ydCAnLi92aWV3cy9ub2Rlcy9heGlzJztcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvckxpbmtzIH0gZnJvbSAnLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGlua3MnO1xuaW1wb3J0IHsgZmlsbFNoaXB5YXJkLCB2aWV3U2hpcHlhcmQgfSBmcm9tICcuL3ZpZXdzL25vZGVzL3NoaXB5YXJkJztcbmltcG9ydCB7XG4gICAgZm9yRnJlZ2F0cyxcbiAgICBzZXRMaXN0ZW5lcnNGb3JGcmVnYXRzLFxuICAgIHNldExpc3RlbmVyc0ZvclNoaXBzLFxufSBmcm9tICcuL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JTaGlwcyc7XG5pbXBvcnQgeyBwbGF5ZXJTaGlweWFyZE1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvc2hpcHlhcmQnO1xuXG5zZXRMaXN0ZW5lcnNGb3JMaW5rcygpO1xudmlld1NoaXB5YXJkKCk7XG5zZXRMaXN0ZW5lcnNGb3JTaGlwcyhwbGF5ZXJTaGlweWFyZE1vZGVsLmdldERvY2tXaXRoRnJlZ2F0cygpLmdldFNoaXBzKCkpO1xuIiwiY29uc3QgQWxwaGFiZXQgPSAoZkNoYXJDb2RlLCBsQ2hhckNvZGUpID0+IHtcbiAgICBjb25zdCBmaXJzdENoYXJDb2RlID0gZkNoYXJDb2RlO1xuICAgIGNvbnN0IGxhc3RDaGFyQ29kZSA9IGxDaGFyQ29kZTtcbiAgICBjb25zdCBsb25nID0gbGFzdENoYXJDb2RlIC0gZmlyc3RDaGFyQ29kZSArIDE7XG4gICAgY29uc3QgY29kZXMgPSBBcnJheS5mcm9tKEFycmF5KGxvbmcpLmtleXMoKSwgKHgpID0+IHggKyBmaXJzdENoYXJDb2RlKTtcblxuICAgIGNvbnN0IGlzVGhpc0FscGhhYmV0ID0gKGNoYXJDb2RlKSA9PiB7XG4gICAgICAgIGlmIChjaGFyQ29kZSA+PSBmaXJzdENoYXJDb2RlICYmIGNoYXJDb2RlIDw9IGxhc3RDaGFyQ29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBmaXJzdENoYXJDb2RlLCBsYXN0Q2hhckNvZGUsIGxvbmcsIGlzVGhpc0FscGhhYmV0LCBjb2RlcyB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEFscGhhYmV0cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZW5nID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbHBoYWJldCA9IEFscGhhYmV0KDk3LCAxMjIpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhbHBoYWJldCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJ1cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSBBbHBoYWJldCgxMDcyLCAxMTAzKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWxwaGFiZXQpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBlbmcsIHJ1cyB9O1xufSkoKTtcbiIsImltcG9ydCB7IGdldE5vZGUgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9mYWN0b3J5JztcblxuZXhwb3J0IGNvbnN0IENlbGwgPSAoY3ggPSAtMSwgY3kgPSAtMSwgbmFtZSA9ICdjZWxsJykgPT4ge1xuICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICBsZXQgcGFyZW50ID0gJ2ZyZWUnO1xuICAgIGxldCBub2RlID0gZ2V0Tm9kZShuYW1lKTtcbiAgICBsZXQgeCA9IGN4O1xuICAgIGxldCB5ID0gY3k7XG5cbiAgICBjb25zdCBzZXRUaGVIaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdCA9IHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzSGl0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaGl0O1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRQYXJlbnQgPSAoblBhcmVudCkgPT4ge1xuICAgICAgICBwYXJlbnQgPSBuUGFyZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENlbGxOb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0WFkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHgsIHkgfTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0WFkgPSAoY3gsIGN5KSA9PiB7XG4gICAgICAgIHggPSBjeDtcbiAgICAgICAgeSA9IGN5O1xuICAgIH1cblxuICAgIHJldHVybiB7IHNldFRoZUhpdCwgaXNIaXQsIHNldFBhcmVudCwgZ2V0UGFyZW50LCBnZXRDZWxsTm9kZSwgZ2V0WFksIHNldFhZIH07XG59O1xuXG5leHBvcnQgY29uc3QgRGVjayA9IChudW0pID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBDZWxsKC0xLCAtMSwgJ2RlY2snKTtcbiAgICBjb25zdCBudW1iZXIgPSBudW07XG5cbiAgICBjb25zdCBnZXROdW1iZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IGdldE51bWJlciB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IE1hcmluZVNlY3RvciA9ICh5LCB4KSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gQ2VsbCh5LCB4LCAnbWFyaW5lLXNlY3RvcicpO1xuXG4gICAgY29uc3QgaXNGcmVlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvdG90eXBlLmdldFBhcmVudCgpID09PSAnZnJlZSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IGlzRnJlZSB9KTtcbn0iLCJpbXBvcnQgeyBwbGF5ZXJHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIlxuXG5leHBvcnQgY29uc3QgQ2VsbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2V0QmVmb3JlID0gKHgsIHkpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJHYW1lYm9hcmQuZ2V0U3RydWN0ZWRDb250YWluZXIoKVt5XVstLXhdXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyR2FtZWJvYXJkLmdldFN0cnVjdGVkQ29udGFpbmVyKClbeV1bKyt4XVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QWZ0ZXIgPSAoeCwgeSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllckdhbWVib2FyZC5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpW3ldWysreF1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJHYW1lYm9hcmQuZ2V0U3RydWN0ZWRDb250YWluZXIoKVt5XVstLXhdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRPdmVyID0gKHgsIHkpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJHYW1lYm9hcmQuZ2V0U3RydWN0ZWRDb250YWluZXIoKVstLXldW3hdXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyR2FtZWJvYXJkLmdldFN0cnVjdGVkQ29udGFpbmVyKClbKyt5XVt4XVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VW5kZXIgPSAoeCwgeSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllckdhbWVib2FyZC5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpWysreV1beF1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJHYW1lYm9hcmQuZ2V0U3RydWN0ZWRDb250YWluZXIoKVstLXldW3hdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXREaWFnMSA9ICh4LCB5KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyR2FtZWJvYXJkLmdldFN0cnVjdGVkQ29udGFpbmVyKClbLS15XVstLXhdXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyR2FtZWJvYXJkLmdldFN0cnVjdGVkQ29udGFpbmVyKClbKyt5XVsrK3hdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXREaWFnMiA9ICh4LCB5KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyR2FtZWJvYXJkLmdldFN0cnVjdGVkQ29udGFpbmVyKClbLS15XVsrK3hdXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyR2FtZWJvYXJkLmdldFN0cnVjdGVkQ29udGFpbmVyKClbKyt5XVstLXhdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXREaWFnMyA9ICh4LCB5KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyR2FtZWJvYXJkLmdldFN0cnVjdGVkQ29udGFpbmVyKClbKyt5XVsrK3hdXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyR2FtZWJvYXJkLmdldFN0cnVjdGVkQ29udGFpbmVyKClbLS15XVstLXhdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXREaWFnNCA9ICh4LCB5KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyR2FtZWJvYXJkLmdldFN0cnVjdGVkQ29udGFpbmVyKClbKyt5XVstLXhdXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyR2FtZWJvYXJkLmdldFN0cnVjdGVkQ29udGFpbmVyKClbLS15XVsrK3hdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRDZWxsQXJvdW5kQXJlYSA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHgsIHkpXG4gICAgICAgIGxldCBjZWxscyA9IFtdO1xuICAgICAgICBjZWxscy5wdXNoKGdldEJlZm9yZSh4LCB5KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0QWZ0ZXIoeCwgeSkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldE92ZXIoeCwgeSkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldFVuZGVyKHgsIHkpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnMSh4LCB5KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzIoeCwgeSkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWczKHgsIHkpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnNCh4LCB5KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNlbGxzKVxuICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0Q2VsbEFyb3VuZEFyZWEgfVxufSIsImltcG9ydCB7IENlbGwsIE1hcmluZVNlY3RvciB9IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2dhbWVDb25maWcnO1xuXG5leHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IENvbmZpZy5HYW1lYm9hcmQud2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0ID0gQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQ7XG4gICAgY29uc3QgY29udGFpbmVycyA9IGZpbGxCb2FyZCh3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX1gKTtcblxuICAgIGNvbnN0IGdldFN0cnVjdGVkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVycy5nZXRTdHJ1Y3RlZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRVbnN0cnVjdGVkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVycy5nZXRVbnN0cnVjdGVkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldFN0cnVjdGVkQ29udGFpbmVyLCBnZXRVbnN0cnVjdGVkQ29udGFpbmVyLCBnZXRTaXplLCBnZXROb2RlIH07XG59O1xuXG5jb25zdCBmaWxsQm9hcmQgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuICAgIGxldCBzdHJ1Y3RlZCA9IFtdO1xuICAgIGxldCB1bnN0cnVjdGVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgIGxldCBsaW5lID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IE1hcmluZVNlY3RvcihqLCBpKTtcbiAgICAgICAgICAgIGxpbmVbal0gPSBjZWxsO1xuICAgICAgICAgICAgdW5zdHJ1Y3RlZC5wdXNoKGNlbGwpO1xuICAgICAgICB9XG4gICAgICAgIHN0cnVjdGVkW2ldID0gbGluZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTdHJ1Y3RlZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN0cnVjdGVkO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFVuc3RydWN0ZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB1bnN0cnVjdGVkO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldFN0cnVjdGVkLCBnZXRVbnN0cnVjdGVkIH07XG59O1xuXG5leHBvcnQgY29uc3QgaXNGaXRPbkdhbWVib2FyZEF4aXMgPSAoY29vcmRpbmF0ZSwgb2JqTGVuZ2h0LCBheGVMZW5naHQpID0+IHtcbiAgICByZXR1cm4gY29vcmRpbmF0ZSArIG9iakxlbmdodCA+IGF4ZUxlbmdodFxuICAgICAgICB8fCBjb29yZGluYXRlIDwgMDtcbn1cblxuZXhwb3J0IGNvbnN0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCgncGxheWVyLWJvYXJkJyk7XG5leHBvcnQgY29uc3QgYWlHYW1lYm9hcmQgPSBHYW1lYm9hcmQoJ2FpLWJvYXJkJyk7XG4iLCJleHBvcnQgY29uc3QgQ29uZmlnID0gKCgpID0+IHtcbiAgICBjb25zdCBHYW1lYm9hcmQgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IDEwO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAxMDtcbiAgICAgICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBFbGVtZW50cyA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG51bWJlck9mID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyZWdhdGVzID0gMjtcbiAgICAgICAgICAgIGNvbnN0IGNhcmF2ZWxzID0gMjtcbiAgICAgICAgICAgIGNvbnN0IGRyYWtrYXJzID0gMztcbiAgICAgICAgICAgIGNvbnN0IGJvYXRzID0gNDtcbiAgICAgICAgICAgIHJldHVybiB7IGZyZWdhdGVzLCBjYXJhdmVscywgZHJha2thcnMsIGJvYXRzIH07XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgcmV0dXJuIHsgbnVtYmVyT2YgfTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgR2FtZWJvYXJkLCBFbGVtZW50cyB9O1xufSkoKTtcbiIsImltcG9ydCB7IHBsYXllckdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuXG5leHBvcnQgY29uc3QgU2Vzc2lvbiA9ICgoKSA9PiB7XG4gICAgbGV0IGFjdGl2ZVNoaXAgPSBudWxsO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IGRvdWJsZUluZGV4ID0gJ3NoaXAnO1xuICAgIGxldCBjdXJyZW50RWxlbWVudCA9IG51bGw7XG4gICAgbGV0IHBsYXllckdhbWVCb2FyZENlbGxzID0gcGxheWVyR2FtZWJvYXJkLmdldFN0cnVjdGVkQ29udGFpbmVyKCk7XG4gICAgcmV0dXJuIHsgYWN0aXZlU2hpcCwgaW5kZXgsIGRvdWJsZUluZGV4LCBjdXJyZW50RWxlbWVudCwgcGxheWVyR2FtZUJvYXJkQ2VsbHMgfVxufSkoKVxuXG5leHBvcnQgY29uc3QgcmVzZXRTZXNzaW9uID0gKCkgPT4ge1xuICAgIFNlc3Npb24uYWN0aXZlU2hpcCA9IG51bGw7XG4gICAgU2Vzc2lvbi5pbmRleCA9IDA7XG4gICAgU2Vzc2lvbi5kb3VibGVJbmRleCA9ICdzaGlwJztcbiAgICBTZXNzaW9uLmN1cnJlbnRFbGVtZW50ID0gbnVsbDtcbn0iLCJpbXBvcnQgeyBnZXROb2RlIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvZmFjdG9yeSc7XG5pbXBvcnQgeyB2aWV3U2hpcCB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL3NoaXAnO1xuaW1wb3J0IHsgQ2VsbCwgRGVjayB9IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgeyBHYW1lYm9hcmQsIGlzRml0T25HYW1lYm9hcmRBeGlzLCBwbGF5ZXJHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVCb2FyZCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2dhbWVDb25maWcnO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJy4vc2Vzc2lvbic7XG5pbXBvcnQgeyBTaGlwV2F0ZXJBcmVhcyB9IGZyb20gJy4vd2F0ZXJBcmVhcyc7XG5cbmV4cG9ydCBjb25zdCBTaGlwID0gKG51bWJlck9mRGVja3MpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXROb2RlKCdzaGlwJywgJ2hvcml6b250YWwnKTtcbiAgICBsZXQgbGVuZ3RoID0gbnVtYmVyT2ZEZWNrcztcbiAgICBsZXQgYm9keSA9IFtdO1xuICAgIGxldCBsaXZlID0gdHJ1ZTtcbiAgICBsZXQgaG9yaXpvbnRhbCA9IHRydWU7XG4gICAgbGV0IGhlYWQgPSBudWxsO1xuICAgIGxldCBsZWdhbCA9IHRydWU7XG4gICAgbGV0IHNoaXBXYXRlckFyZWFzID0gU2hpcFdhdGVyQXJlYXMoKTtcbiAgICBsZXQgb2NjdXBpZWRNYXJpbmVTZWN0b3JzID0gW107XG5cbiAgICBjb25zdCBmaWxsQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGVjayA9IERlY2soaSk7XG4gICAgICAgICAgICBib2R5LnB1c2goZGVjayk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVjay5nZXRDZWxsTm9kZSgpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZXRPcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKVxuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgIGhvcml6b250YWwgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpKSB7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKVxuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKVxuICAgICAgICAgICAgaG9yaXpvbnRhbCA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRha2VEb3duV2F0ZXJBcmVhcyA9ICgpID0+IHtcbiAgICAgICAgc2hpcFdhdGVyQXJlYXMuY2xlYXJBcmVhcygpO1xuICAgIH1cblxuICAgIGNvbnN0IGxhdW5jaFNoaXBPbldhdGVyID0gKG5IZWFkKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgd2F0ZXJBcmVhcyA9IGdldFdhdGVyQXJlYShuSGVhZCk7XG4gICAgICAgICAgICBsZXQgYWNlc3NpYmlsaXR5ID0gd2F0ZXJBcmVhcy5jaGVja0FyZWEoKTtcbiAgICAgICAgICAgIGlmIChhY2Vzc2liaWxpdHkpIHtcbiAgICAgICAgICAgICAgICB0YWtlRG93bldhdGVyQXJlYXMoKTtcbiAgICAgICAgICAgICAgICBzaGlwV2F0ZXJBcmVhcyA9IHdhdGVyQXJlYXM7XG4gICAgICAgICAgICAgICAgc2hpcFdhdGVyQXJlYXMub2NjdXB5QXJlYShzaGlwV2F0ZXJBcmVhcy5nZXRBcmVhVW5kZXJUaGVTaGlwKCksIGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgc2hpcFdhdGVyQXJlYXMub2NjdXB5QXJlYShzaGlwV2F0ZXJBcmVhcy5nZXRBcmVhVW5kZXJUaGVTaGlwKCksIGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhY2Vzc2liaWxpdHk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFdhdGVyQXJlYSA9IChoZWFkLCBib2FyZCkgPT4ge1xuICAgICAgICBsZXQgYXJlYXMgPSBTaGlwV2F0ZXJBcmVhcygpO1xuICAgICAgICBsZXQgeCA9IGhlYWQuZ2V0WFkoKS54O1xuICAgICAgICBsZXQgeSA9IGhlYWQuZ2V0WFkoKS55O1xuICAgICAgICBsZXQgbmVjZXNzYXJ5U2VjdG9ycyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZWNlc3NhcnlTZWN0b3JzLnB1c2gocGxheWVyR2FtZWJvYXJkLmdldFN0cnVjdGVkQ29udGFpbmVyKClbeV1beF0pO1xuICAgICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICB4Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcmVhcy5zZXRBcmVhcyhuZWNlc3NhcnlTZWN0b3JzKTtcbiAgICAgICAgcmV0dXJuIGFyZWFzO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTGl2ZSA9ICgpID0+IHtcbiAgICAgICAgbGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGJvZHkuZm9yRWFjaCgoZGVjaykgPT4ge1xuICAgICAgICAgICAgaWYgKCFkZWNrLmlzSGl0KCkpIHtcbiAgICAgICAgICAgICAgICBsaXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGxpdmU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEJvZHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBib2R5O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEhlYWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoZWFkO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEhlYWQgPSAobkhlYWQpID0+IHtcbiAgICAgICAgaGVhZCA9IG5IZWFkO1xuICAgIH1cblxuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhvcml6b250YWw7XG4gICAgfVxuXG4gICAgY29uc3QgaXNMZWdhbCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxlZ2FsO1xuICAgIH1cblxuICAgIGNvbnN0IHNldExlZ2FsID0gKCkgPT4ge1xuICAgICAgICBsZWdhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgb3JpZW50YXRpb25Td2l0Y2ggPSAoKSA9PiB7XG4gICAgICAgIGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTZWN0b3JzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb2NjdXBpZWRNYXJpbmVTZWN0b3JzO1xuICAgIH1cblxuICAgIGZpbGxDb250YWluZXIoKTtcblxuICAgIHJldHVybiB7IGdldFNlY3RvcnMsIHRha2VEb3duV2F0ZXJBcmVhcywgbGF1bmNoU2hpcE9uV2F0ZXIsIG9yaWVudGF0aW9uU3dpdGNoLCBzZXRPcmllbnRhdGlvbiwgaXNMaXZlLCBnZXRCb2R5LCBnZXRDb250YWluZXIsIGdldEhlYWQsIHNldEhlYWQsIGlzSG9yaXpvbnRhbCwgaXNMZWdhbCwgc2V0TGVnYWwgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBGcmVnYXQgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCg0KTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IENhcmF2ZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgzKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IERyYWtrYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgyKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IEJvYXQgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgxKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNoaXBEcmFnRW5kID0gKCkgPT4ge1xuICAgIGxldCBpc01vdmVhYmxlID0gZmFsc2U7XG4gICAgbGV0IGlzQWx0ZXJNb3ZhYmxlID0gZmFsc2U7XG4gICAgbGV0IGJvZHkgPSBTZXNzaW9uLmFjdGl2ZVNoaXAuZ2V0Qm9keSgpO1xuXG4gICAgaWYgKFNlc3Npb24uY3VycmVudEVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpc01vdmVhYmxlID0gU2Vzc2lvbi5jdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoYG1hcmluZS1zZWN0b3JgKTtcbiAgICAgICAgaXNBbHRlck1vdmFibGUgPSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgZGVja2ApO1xuICAgIH1cblxuICAgIGlmICghaXNNb3ZlYWJsZSAmJiAhaXNBbHRlck1vdmFibGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc01vdmVhYmxlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBDb25maWcuR2FtZWJvYXJkLndpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoU2Vzc2lvbi5wbGF5ZXJHYW1lQm9hcmRDZWxsc1tqXVtpXS5nZXRDZWxsTm9kZSgpID09PSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFNoaXBPbkJvYXJkKFNlc3Npb24uaW5kZXgsIGosIGksIGJvZHkubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzQWx0ZXJNb3ZhYmxlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGJvZHlbaV0uZ2V0Q2VsbE5vZGUoKSA9PT0gU2Vzc2lvbi5jdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIFNlc3Npb24uZG91YmxlSW5kZXggPSBTZXNzaW9uLmluZGV4IC0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoU2Vzc2lvbi5kb3VibGVJbmRleCAhPT0gJ3NoaXAnKSB7XG4gICAgICAgICAgICBsZXQgaGVhZCA9IFNlc3Npb24uYWN0aXZlU2hpcC5nZXRIZWFkKCkuZ2V0Q2VsbE5vZGUoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29uZmlnLkdhbWVib2FyZC53aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChTZXNzaW9uLnBsYXllckdhbWVCb2FyZENlbGxzW2pdW2ldLmdldENlbGxOb2RlKCkgPT09IGhlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFNoaXBPbkJvYXJkKFNlc3Npb24uZG91YmxlSW5kZXgsIGosIGksIGJvZHkubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBhZGRTaGlwT25Cb2FyZCA9IChpbmRleCwgeSwgeCwgc2hpcExlbmdodCkgPT4ge1xuICAgIGxldCBkYXRhID0gZ2V0RGF0YShpbmRleCwgeSwgeCk7XG4gICAgdmlld1NoaXBPbkJvYXJkKGRhdGEuY29vcmRpbmF0ZSwgZGF0YS54LCBkYXRhLnksIHNoaXBMZW5naHQsIGRhdGEuYXhlTGVuZ2h0KVxufVxuXG5jb25zdCBnZXREYXRhID0gKGluZGV4LCB4LCB5KSA9PiB7XG4gICAgcmV0dXJuIFNlc3Npb24uYWN0aXZlU2hpcC5pc0hvcml6b250YWwoKVxuICAgICAgICA/IHsgY29vcmRpbmF0ZTogeSAtIGluZGV4LCB4OiB4LCB5OiB5IC0gaW5kZXgsIGF4ZUxlbmdodDogQ29uZmlnLkdhbWVib2FyZC53aWR0aCB9XG4gICAgICAgIDogeyBjb29yZGluYXRlOiB4IC0gaW5kZXgsIHg6IHggLSBpbmRleCwgeTogeSwgYXhlTGVuZ2h0OiBDb25maWcuR2FtZWJvYXJkLmhlaWdodCB9XG59XG5cbmNvbnN0IHZpZXdTaGlwT25Cb2FyZCA9IChjb29yZGluYXRlLCB4LCB5LCBzaGlwTGVuZ2h0LCBheGVMZW5naHQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgJHtjb29yZGluYXRlfSAke3NoaXBMZW5naHR9ICR7YXhlTGVuZ2h0fWApXG4gICAgaWYgKGlzRml0T25HYW1lYm9hcmRBeGlzKGNvb3JkaW5hdGUsIHNoaXBMZW5naHQsIGF4ZUxlbmdodCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChTZXNzaW9uLnBsYXllckdhbWVCb2FyZENlbGxzW3hdW3ldLmdldFBhcmVudCgpID09PSAnZnJlZSdcbiAgICAgICAgICAgIHx8IFNlc3Npb24ucGxheWVyR2FtZUJvYXJkQ2VsbHNbeF1beV0uZ2V0UGFyZW50KCkgPT0gU2Vzc2lvbi5hY3RpdmVTaGlwLmdldENvbnRhaW5lcigpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdmlld1NoaXAoU2Vzc2lvbi5hY3RpdmVTaGlwLCBTZXNzaW9uLnBsYXllckdhbWVCb2FyZENlbGxzW3hdW3ldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNoaXBUcmF2ZXJzID0gKGZ1bmMsIHNoaXAsIGhlYWQpID0+IHtcblxufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2hpbGRzID0gKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBCb2F0LCBDYXJhdmVsLCBEcmFra2FyLCBGcmVnYXQgfSBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgY29uc3QgU2hpcHlhcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgZnJlZ2F0cyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmZyZWdhdGVzLCAnRnJlZ2F0Jyk7XG4gICAgY29uc3QgY2FyYXZlbHMgPSBEb2NrKENvbmZpZy5FbGVtZW50cy5udW1iZXJPZi5jYXJhdmVscywgJ0NhcmF2ZWwnKTtcbiAgICBjb25zdCBkcmFra2FycyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmRyYWtrYXJzLCAnRHJha2thcicpO1xuICAgIGNvbnN0IGJvYXRzID0gRG9jayhDb25maWcuRWxlbWVudHMubnVtYmVyT2YuYm9hdHMsICdCb2F0Jyk7XG5cbiAgICBjb25zdCBnZXREb2NrV2l0aEZyZWdhdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBmcmVnYXRzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREb2NrV2l0aENhcmF2ZWxzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY2FyYXZlbHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERvY2tXaXRoRHJha2thcnMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFra2FycztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhCb2F0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGJvYXRzO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXREb2NrV2l0aEZyZWdhdHMsIGdldERvY2tXaXRoQ2FyYXZlbHMsIGdldERvY2tXaXRoRHJha2thcnMsIGdldERvY2tXaXRoQm9hdHMgfTtcbn07XG5cbmNvbnN0IERvY2sgPSAoY291bnQsIHNoaXBCbHVlUHJpbnQpID0+IHtcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gICAgY29uc3QgZmlsbERvY2sgPSAoY291bnQsIHNoaXBCbHVlUHJpbnQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gYnVpbGRTaGlwKHNoaXBCbHVlUHJpbnQpO1xuICAgICAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBidWlsZFNoaXAgPSAoYmx1ZVByaW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYmx1ZVByaW50KSB7XG4gICAgICAgICAgICBjYXNlICdGcmVnYXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBGcmVnYXQoKTtcbiAgICAgICAgICAgIGNhc2UgJ0NhcmF2ZWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiBDYXJhdmVsKCk7XG4gICAgICAgICAgICBjYXNlICdEcmFra2FyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gRHJha2thcigpO1xuICAgICAgICAgICAgY2FzZSAnQm9hdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvYXQoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NvcnJ5LCBpbGxlZ2FsIHNoaXAgYmx1ZXByaW50Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZmlsbERvY2soY291bnQsIHNoaXBCbHVlUHJpbnQpO1xuXG4gICAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRTaGlwcyB9O1xufVxuXG5leHBvcnQgY29uc3QgcGxheWVyU2hpcHlhcmRNb2RlbCA9IFNoaXB5YXJkKCk7IiwiaW1wb3J0IHsgQ2VsbEhhbmRsZXIgfSBmcm9tIFwiLi9jZWxsSGFuZGxlclwiO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gXCIuL3Nlc3Npb25cIjtcblxuZXhwb3J0IGNvbnN0IFNoaXBXYXRlckFyZWFzID0gKCkgPT4ge1xuICAgIGxldCB1bmRlclRoZVNoaXAgPSBbXTtcbiAgICBsZXQgYXJvdW5kVGhlU2hpcCA9IFtdO1xuXG4gICAgY29uc3QgZ2V0QXJlYVVuZGVyVGhlU2hpcCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHVuZGVyVGhlU2hpcDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRBcmVhQXJvdW5kVGhlU2hpcCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFyb3VuZFRoZVNoaXBcbiAgICB9XG5cbiAgICBjb25zdCBzZXRBcmVhcyA9IChhcmVhKSA9PiB7XG4gICAgICAgIHVuZGVyVGhlU2hpcCA9IGFyZWE7XG4gICAgICAgIGFyb3VuZFRoZVNoaXAgPSBzZXRBcmVhQXJvdW5kVGhlU2hpcCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEFyZWFBcm91bmRUaGVTaGlwID0gKCkgPT4ge1xuICAgICAgICBsZXQgaGFuZGxlciA9IENlbGxIYW5kbGVyKCk7XG4gICAgICAgIGxldCBhcmVhcyA9IFtdO1xuICAgICAgICB1bmRlclRoZVNoaXAuZm9yRWFjaChzZWN0b3IgPT4ge1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gc2VjdG9yLmdldFhZKCk7XG4gICAgICAgICAgICBsZXQgYXJlYSA9IGhhbmRsZXIuZ2V0Q2VsbEFyb3VuZEFyZWEoY29vcmRpbmF0ZXMueCwgY29vcmRpbmF0ZXMueSlcbiAgICAgICAgICAgIGFyZWFzID0gYXJlYXMuY29uY2F0KGFyZWEpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFyZWFzKSkuZmlsdGVyKHggPT4gIXVuZGVyVGhlU2hpcC5pbmNsdWRlcyh4KSAmJiB4ICE9PSB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIGNvbnN0IG9jY3VweUFyZWEgPSAoYXJlYSwgb2NjdXBhbnQpID0+IHtcbiAgICAgICAgYXJlYS5mb3JFYWNoKHNlY3RvciA9PiB7XG4gICAgICAgICAgICBzZWN0b3Iuc2V0UGFyZW50KG9jY3VwYW50KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0FyZWEgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhY2Vzc2liaWxpdHkgPSB0cnVlO1xuICAgICAgICBsZXQgYXJlYXMgPSB1bmRlclRoZVNoaXAuY29uY2F0KGFyb3VuZFRoZVNoaXApO1xuICAgICAgICBhcmVhcy5mb3JFYWNoKHNlY3RvciA9PiB7XG4gICAgICAgICAgICBpZiAoIXNlY3Rvci5pc0ZyZWUoKSAmJiBzZWN0b3IuZ2V0UGFyZW50KCkgIT09IFNlc3Npb24uYWN0aXZlU2hpcC5nZXRDb250YWluZXIoKSkge1xuICAgICAgICAgICAgICAgIGFjZXNzaWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYWNlc3NpYmlsaXR5O1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyQXJlYXMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhcmVhcyA9IHVuZGVyVGhlU2hpcC5jb25jYXQoYXJvdW5kVGhlU2hpcCk7XG4gICAgICAgIGFyZWFzLmZvckVhY2goc2VjdG9yID0+IHtcbiAgICAgICAgICAgIHNlY3Rvci5zZXRQYXJlbnQoJ2ZyZWUnKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4geyBjbGVhckFyZWFzLCBjaGVja0FyZWEsIGdldEFyZWFVbmRlclRoZVNoaXAsIGdldEFyZWFBcm91bmRUaGVTaGlwLCBzZXRBcmVhcywgb2NjdXB5QXJlYSB9XG59IiwiZXhwb3J0IGNvbnN0IHNldEhpZGRlbiA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVIaWRkZW4gPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHNldERyYWdnYWJsZSA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5kcmFnZ2FibGUgPSB0cnVlO1xufTtcbiIsImltcG9ydCB7IHNldERyYWdnYWJsZSB9IGZyb20gJy4vc2V0RHJhZ2dhYmxlJztcblxuZXhwb3J0IGNvbnN0IHNldERyYWdnYWJsZUZvclNoaXBzID0gKCkgPT4ge1xuICAgIGZvckZyZWdhdHMoKTtcbn07XG5cbmNvbnN0IGZvckZyZWdhdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mcmVnYXRzJyk7XG4gICAgY29uc3QgZnJlZ2F0cyA9IEFycmF5LmZyb20oZG9jay5jaGlsZHJlbik7XG5cbiAgICBmcmVnYXRzLmZvckVhY2goKGZyZWdhdCkgPT4ge1xuICAgICAgICBzZXREcmFnZ2FibGUoZnJlZ2F0KTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBBbHBoYWJldHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvYWxwaGFiZXRzJztcbmltcG9ydCB7IGFpR2FtZWJvYXJkLCBwbGF5ZXJHYW1lYm9hcmQgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2FtZUJvYXJkJztcbmltcG9ydCB7IGdldE5vZGUgfSBmcm9tICcuL2ZhY3RvcnknO1xuXG5jb25zdCBhbHBoYWJldCA9IEFscGhhYmV0cy5ydXMoKS5jb2RlcztcblxuY29uc3Qgdmlld0F4aXMgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBub2RlID0gYm9hcmQuZ2V0Tm9kZSgpO1xuICAgIGNvbnN0IHhBeGlzID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJyk7XG4gICAgY29uc3QgeUF4aXMgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy55LWF4aXMnKTtcbiAgICBjb25zdCBzaXplID0gYm9hcmQuZ2V0U2l6ZSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplLndpZHRoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGdldE5vZGUoJ3gtY2VsbCcpO1xuICAgICAgICBjb25zdCBsZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFscGhhYmV0W2ldKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gbGV0dGVyO1xuICAgICAgICB4QXhpcy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGdldE5vZGUoJ3ktY2VsbCcpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgeUF4aXMuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxufTtcblxudmlld0F4aXMocGxheWVyR2FtZWJvYXJkKTtcbnZpZXdBeGlzKGFpR2FtZWJvYXJkKTtcbiIsImV4cG9ydCBjb25zdCBnZXROb2RlID0gKC4uLm5hbWVzKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUgIT09ICcnKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbm9kZTtcbn07XG4iLCJpbXBvcnQgeyBhaUdhbWVib2FyZCwgcGxheWVyR2FtZWJvYXJkIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWVCb2FyZCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2FtZUNvbmZpZyc7XG5cbmNvbnN0IHZpZXdCb2FyZCA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGJvYXJkLmdldFN0cnVjdGVkQ29udGFpbmVyKCk7XG4gICAgY29uc3QgYm9hcmR3ciA9IGJvYXJkLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBjb250YWluZXIuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICBsaW5lLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGJvYXJkd3IuYXBwZW5kQ2hpbGQoY2VsbC5nZXRDZWxsTm9kZSgpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBTdHlsZVByZXNldHMgPSAoKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ib2FyZC13aWR0aCcsIENvbmZpZy5HYW1lYm9hcmQud2lkdGgpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ib2FyZC1oZWlnaHQnLCBDb25maWcuR2FtZWJvYXJkLmhlaWdodCk7XG59KSgpXG5cbnZpZXdCb2FyZChwbGF5ZXJHYW1lYm9hcmQpO1xudmlld0JvYXJkKGFpR2FtZWJvYXJkKTtcbiIsImltcG9ydCB7IHBsYXllckdhbWVib2FyZCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZ2FtZUJvYXJkXCI7XG5pbXBvcnQgeyByZW1vdmVDaGlsZHMsIHNoaXBUcmF2ZXJzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zaGlwXCI7XG5cbmV4cG9ydCBjb25zdCB2aWV3U2hpcCA9IChzaGlwLCBoZWFkKSA9PiB7XG4gICAgbGV0IGlzVmlldyA9IHNoaXAubGF1bmNoU2hpcE9uV2F0ZXIoaGVhZCk7XG4gICAgaWYgKGlzVmlldykge1xuICAgICAgICBzaGlwLnNldEhlYWQoaGVhZCk7XG4gICAgICAgIGhlYWQuZ2V0Q2VsbE5vZGUoKS5hcHBlbmRDaGlsZChzaGlwLmdldENvbnRhaW5lcigpKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmlldztcbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBCb2F0LCBDYXJhdmVsLCBEcmFra2FyLCBGcmVnYXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2hpcCc7XG5pbXBvcnQgeyBTaGlweWFyZCwgcGxheWVyU2hpcHlhcmRNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9zaGlweWFyZCc7XG5pbXBvcnQgeyBzZXREcmFnZ2FibGVGb3JTaGlwcyB9IGZyb20gJy4uL2RyYWdBbmREcm9wL3NoaXBzJztcblxuZXhwb3J0IGNvbnN0IHZpZXdTaGlweWFyZCA9ICgpID0+IHtcbiAgICBmaWxsU2hpcHlhcmROb2RlKCk7XG4gICAgc2V0RHJhZ2dhYmxlRm9yU2hpcHMoKTtcbn07XG5cbmNvbnN0IGZpbGxTaGlweWFyZE5vZGUgPSAoKSA9PiB7XG4gICAgYWRkRnJlZ2F0ZXMoKTtcbiAgICBhZGRDYXJhdmVscygpO1xuICAgIGFkZERyYWtrYXJzKCk7XG4gICAgYWRkQm9hdHMoKTtcbn07XG5cbmNvbnN0IGFkZEZyZWdhdGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRvY2tOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZyZWdhdHMnKTtcbiAgICBjb25zdCBzaGlwcyA9IHBsYXllclNoaXB5YXJkTW9kZWwuZ2V0RG9ja1dpdGhGcmVnYXRzKCkuZ2V0U2hpcHMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRvY2tOb2RlLmFwcGVuZENoaWxkKHNoaXBzW2ldLmdldENvbnRhaW5lcigpKTtcbiAgICB9XG59O1xuXG5jb25zdCBhZGRDYXJhdmVscyA9ICgpID0+IHtcbiAgICBjb25zdCBkb2NrTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJhdmVscycpO1xuICAgIGNvbnN0IHNoaXBzID0gcGxheWVyU2hpcHlhcmRNb2RlbC5nZXREb2NrV2l0aENhcmF2ZWxzKCkuZ2V0U2hpcHMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRvY2tOb2RlLmFwcGVuZENoaWxkKHNoaXBzW2ldLmdldENvbnRhaW5lcigpKTtcbiAgICB9XG59O1xuXG5jb25zdCBhZGREcmFra2FycyA9ICgpID0+IHtcbiAgICBjb25zdCBkb2NrTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFra2FycycpO1xuICAgIGNvbnN0IHNoaXBzID0gcGxheWVyU2hpcHlhcmRNb2RlbC5nZXREb2NrV2l0aERyYWtrYXJzKCkuZ2V0U2hpcHMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRvY2tOb2RlLmFwcGVuZENoaWxkKHNoaXBzW2ldLmdldENvbnRhaW5lcigpKTtcbiAgICB9XG59O1xuXG5jb25zdCBhZGRCb2F0cyA9ICgpID0+IHtcbiAgICBjb25zdCBkb2NrTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2F0cycpO1xuICAgIGNvbnN0IHNoaXBzID0gcGxheWVyU2hpcHlhcmRNb2RlbC5nZXREb2NrV2l0aEJvYXRzKCkuZ2V0U2hpcHMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRvY2tOb2RlLmFwcGVuZENoaWxkKHNoaXBzW2ldLmdldENvbnRhaW5lcigpKTtcbiAgICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9