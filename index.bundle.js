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
.deck {
    display: grid;
    width: 5vh;
    height: 5vh;
}

.ai-board {}

.cell {
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
}`, "",{"version":3,"sources":["webpack://./src/views/styles/main.css"],"names":[],"mappings":"AAAA;;;IAGI,UAAU;IACV,SAAS;IACT,SAAS;IACT,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,mBAAmB;IACnB,YAAY;IACZ,4BAA4B;IAC5B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,8CAA8C;IAC9C,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,0CAA0C;IAC1C,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,2CAA2C;IAC3C,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,sBAAsB;IACtB,8DAA8D;AAClE;;AAEA;IACI,aAAa;IACb,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,eAAe;IACf,4DAA4D;AAChE;;AAEA;IACI,aAAa;IACb,8DAA8D;IAC9D,4DAA4D;IAC5D,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;IACR,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;;;;IAII,aAAa;IACb,UAAU;IACV,WAAW;AACf;;AAEA,WAAW;;AAEX;IACI,gDAAgD;AACpD;;AAEA;;IAEI,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,sCAAsC;IACtC,QAAQ;AACZ;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8CAA8C;IAC9C,WAAW;IACX,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;;IAEI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,eAAe;AACnB;;AAEA;;IAEI,wBAAwB;IACxB,2CAA2C;AAC/C;;AAEA;IACI,aAAa;AACjB","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 2vh;\n    --board-width: 0;\n    --board-height: 0;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    justify-items: center;\n    align-content: center;\n    max-width: 100%;\n    max-height: 100%;\n    row-gap: 2vh;\n}\n\nspan {\n    padding: 1vh;\n    height: min-content;\n    min-width: max-content;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    width: 100%;\n    padding: 2vh;\n}\n\n.title {\n    display: grid;\n    font-size: 3rem;\n}\n\n.tips {\n    display: grid;\n    background-color: rgba(128, 128, 128, 0.2);\n    align-items: center;\n    padding: 1vh;\n    border-radius: min(2vh, 2vw);\n    height: min-content;\n}\n\n.main {\n    display: grid;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    grid-template-columns: min-content min-content;\n    height: min-content;\n}\n\n.shipyard {\n    display: grid;\n    align-content: center;\n    grid-template-rows: repeat(4, min-content);\n    row-gap: 6vh;\n    padding: 2vh;\n}\n\n.dock {\n    display: flex;\n    column-gap: 4vh;\n}\n\n.ship {\n    display: flex;\n    cursor: pointer;\n}\n\n.selected {\n    opacity: 0.1;\n    z-index: 0;\n}\n\n.board__axis-wrapper {\n    display: grid;\n    grid-template-rows: min-content min-content;\n    row-gap: 2vh;\n    width: min-content;\n    height: 100%;\n    padding: 5vh;\n}\n\n.axis-wrapper {\n    display: grid;\n    width: min-content;\n    grid-template-rows: min-content 1fr;\n}\n\n.x-axis {\n    display: grid;\n    grid-gap: 0.1vh;\n    justify-content: right;\n    grid-template-columns: repeat(var(--board-width), min-content);\n}\n\n.board-wrapper {\n    display: grid;\n    grid-template-columns: min-content min-content;\n}\n\n.y-axis {\n    display: grid;\n    grid-gap: 0.1vh;\n    grid-template-rows: repeat(var(--board-height), min-content);\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(var(--board-width), min-content);\n    grid-template-rows: repeat(var(--board-height), min-content);\n    height: min-content;\n    width: min-content;\n    gap: 1px;\n    box-sizing: border-box;\n}\n\n.marker {\n    display: grid;\n    justify-content: center;\n    padding-left: 5vh;\n}\n\n.cell,\n.x-cell,\n.y-cell,\n.deck {\n    display: grid;\n    width: 5vh;\n    height: 5vh;\n}\n\n.ai-board {}\n\n.cell {\n    box-shadow: 0px 0px 0px 1px rgba(0, 0, 255, 0.3);\n}\n\n.x-cell,\n.y-cell {\n    justify-content: center;\n    align-items: center;\n    opacity: 0.5;\n}\n\n.ship {\n    display: grid;\n    border: 1px rgba(0, 0, 255, 1) solid;\n    background-color: rgba(0, 0, 255, 0.1);\n    gap: 1px;\n}\n\n.horizontal {\n    grid-template-columns: repeat(4, min-content);\n}\n\n.vertical {\n    grid-template-rows: repeat(4, min-content);\n}\n\n.deck {\n    z-index: 999;\n}\n\n.footer {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    width: 100%;\n    justify-content: center;\n    gap: 4vh;\n}\n\n.random-mode,\n.manual-mode {\n    height: min-content;\n    display: grid;\n    border-bottom: 1px dotted blue;\n    color: blue;\n    cursor: pointer;\n}\n\n.random-mode:hover,\n.manual-mode:hover {\n    color: rgb(122, 231, 72);\n    border-bottom: 1px dotted rgb(122, 231, 72);\n}\n\n.hidden {\n    display: none;\n}"],"sourceRoot":""}]);
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
            if (ship.getParent() !== null) {
                _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.activeShip = ship;
                _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.currentElement = ship.getParent().getCellNode();
                ship.setVertical();
                (0,_models_ship__WEBPACK_IMPORTED_MODULE_1__.shipTravers)(_models_session__WEBPACK_IMPORTED_MODULE_0__.Session.activeShip.clearCells, _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.activeShip, _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.activeShip.getParent());
                (0,_models_ship__WEBPACK_IMPORTED_MODULE_1__.shipTravers)(ship.checkCells, ship, ship.getParent());
                if (ship.isLegal()) {
                    (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__.viewShip)(ship, ship.getParent());
                    ship.setOrientation();
                } else {
                    ship.setHorizontal();
                }
                (0,_models_session__WEBPACK_IMPORTED_MODULE_0__.resetSession)();
            }
        })

        ship.getContainer().addEventListener(`dragstart`, (evt) => {
            evt.target.classList.add(`selected`);
            _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.activeShip = ship;
            (0,_models_ship__WEBPACK_IMPORTED_MODULE_1__.shipTravers)(_models_session__WEBPACK_IMPORTED_MODULE_0__.Session.activeShip.clearCells, _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.activeShip, _models_session__WEBPACK_IMPORTED_MODULE_0__.Session.activeShip.getParent());
        });

        ship.getContainer().addEventListener(`dragend`, (evt) => {
            evt.target.classList.remove(`selected`);
            (0,_models_ship__WEBPACK_IMPORTED_MODULE_1__.dragEnd)();
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
/* harmony export */   Deck: () => (/* binding */ Deck)
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
/* harmony export */   isFitOnGameboardAxe: () => (/* binding */ isFitOnGameboardAxe),
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
            const cell = (0,_cell__WEBPACK_IMPORTED_MODULE_0__.Cell)(j, i);
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

const isFitOnGameboardAxe = (coordinate, objLenght, axeLenght) => {
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
    let currentElement;
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
/* harmony export */   dragEnd: () => (/* binding */ dragEnd),
/* harmony export */   removeChilds: () => (/* binding */ removeChilds),
/* harmony export */   shipTravers: () => (/* binding */ shipTravers)
/* harmony export */ });
/* harmony import */ var _views_nodes_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/nodes/factory */ "./src/views/nodes/factory.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameBoard */ "./src/models/gameBoard.js");
/* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameConfig */ "./src/models/gameConfig.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session */ "./src/models/session.js");







const Ship = (numberOfDecks) => {
    const container = (0,_views_nodes_factory__WEBPACK_IMPORTED_MODULE_0__.getNode)('ship', 'horizontal');
    let length = numberOfDecks;
    let body = [];
    let live = true;
    let horizontal = true;
    let parent = null;
    let legal = true;

    const setDefaultContainer = () => {
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
            container.classList.add('horizontal')
            container.classList.remove('vertical')
            horizontal = true
        }
    }

    const setCoordinates = (i, x, y) => {
        body[i].setXY(x, y);
    }

    const occupyCells = (i, x, y) => {
        _gameBoard__WEBPACK_IMPORTED_MODULE_3__.playerGameboard.getStructedContainer()[y][x].setParent(container);
    }

    const clearCells = (i, x, y) => {
        _gameBoard__WEBPACK_IMPORTED_MODULE_3__.playerGameboard.getStructedContainer()[y][x].setParent('free');
    }

    const checkCells = (i, x, y) => {
        console.log(_gameBoard__WEBPACK_IMPORTED_MODULE_3__.playerGameboard.getStructedContainer()[y][x].getParent())
        let isLegal = _gameBoard__WEBPACK_IMPORTED_MODULE_3__.playerGameboard.getStructedContainer()[y][x].getParent() === 'free';
        if (!isLegal) {
            legal = false;
        }
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

    const getParent = () => {
        return parent;
    }

    const setParent = (nParent) => {
        parent = nParent;
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

    const setVertical = () => {
        horizontal = false;
    }

    const setHorizontal = () => {
        horizontal = true;
    }

    setDefaultContainer();

    return { setVertical, setHorizontal, setOrientation, isLive, getBody, getContainer, getParent, setParent, isHorizontal, setCoordinates, occupyCells, clearCells, checkCells, isLegal, setLegal };
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

const dragEnd = () => {
    let isMoveable = false;
    let isAlterMovable = false;
    let body = _session__WEBPACK_IMPORTED_MODULE_5__.Session.activeShip.getBody();

    if (_session__WEBPACK_IMPORTED_MODULE_5__.Session.currentElement !== undefined) {
        isMoveable = _session__WEBPACK_IMPORTED_MODULE_5__.Session.currentElement.classList.contains(`cell`);
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
            let head = _session__WEBPACK_IMPORTED_MODULE_5__.Session.activeShip.getParent().getCellNode();
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
    if ((0,_gameBoard__WEBPACK_IMPORTED_MODULE_3__.isFitOnGameboardAxe)(coordinate, shipLenght, axeLenght)) {
        return;
    } else {
        console.log(_session__WEBPACK_IMPORTED_MODULE_5__.Session.playerGameBoardCells[x][y].getParent())
        if (_session__WEBPACK_IMPORTED_MODULE_5__.Session.playerGameBoardCells[x][y].getParent() === 'free'
        ) {
            (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_1__.viewShip)(_session__WEBPACK_IMPORTED_MODULE_5__.Session.activeShip, _session__WEBPACK_IMPORTED_MODULE_5__.Session.playerGameBoardCells[x][y]);
        }
    }
}

const shipTravers = (func, ship, head) => {
    ship.setLegal();
    if (head !== null) {
        let x = head.getXY().x;
        let y = head.getXY().y;
        let length = ship.getBody().length;

        for (let i = 0; i < length; i++) {
            func(i, x, y);
            if ((ship.isHorizontal())) {
                x++;
            } else {
                y++;
            }
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
/* harmony import */ var _models_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/ship */ "./src/models/ship.js");


const viewShip = (ship, head) => {
    (0,_models_ship__WEBPACK_IMPORTED_MODULE_0__.shipTravers)(ship.checkCells, ship, head);
    if (ship.isLegal()) {
        let parent = ship.getParent();

        if (parent !== null) {
            (0,_models_ship__WEBPACK_IMPORTED_MODULE_0__.removeChilds)(parent.getCellNode());
        }

        ship.setParent(head);
        head.getCellNode().appendChild(ship.getContainer());
        (0,_models_ship__WEBPACK_IMPORTED_MODULE_0__.shipTravers)(ship.setCoordinates, ship, head);
        (0,_models_ship__WEBPACK_IMPORTED_MODULE_0__.shipTravers)(ship.occupyCells, ship, head);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sOEZBQThGLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxRQUFRLFVBQVUsVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcs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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsaUVBQW1CO0FBQ3JDLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsaUVBQW1CO0FBQ3JDLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsaUVBQW1CO0FBQ3JDLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsaUVBQW1CO0FBQ3JDLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvc3R5bGVzL21haW4uY3NzPzg5ZjYiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JMaW5rcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JTaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2FscGhhYmV0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9jZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9nYW1lQ29uZmlnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9zaGlweWFyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2RyYWdBbmREcm9wL3NldERyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2RyYWdBbmREcm9wL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvYXhpcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvc2hpcHlhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gICAgZm9udC1zaXplOiAydmg7XG4gICAgLS1ib2FyZC13aWR0aDogMDtcbiAgICAtLWJvYXJkLWhlaWdodDogMDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICByb3ctZ2FwOiAydmg7XG59XG5cbnNwYW4ge1xuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAydmg7XG59XG5cbi50aXRsZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi50aXBzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMnZoLCAydncpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4uc2hpcHlhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcbiAgICByb3ctZ2FwOiA2dmg7XG4gICAgcGFkZGluZzogMnZoO1xufVxuXG4uZG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2x1bW4tZ2FwOiA0dmg7XG59XG5cbi5zaGlwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlbGVjdGVkIHtcbiAgICBvcGFjaXR5OiAwLjE7XG4gICAgei1pbmRleDogMDtcbn1cblxuLmJvYXJkX19heGlzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICByb3ctZ2FwOiAydmg7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA1dmg7XG59XG5cbi5heGlzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xufVxuXG4ueC1heGlzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAwLjF2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgbWluLWNvbnRlbnQpO1xufVxuXG4uYm9hcmQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xufVxuXG4ueS1heGlzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAwLjF2aDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCBtaW4tY29udGVudCk7XG59XG5cbi5ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksIG1pbi1jb250ZW50KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCBtaW4tY29udGVudCk7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgZ2FwOiAxcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1hcmtlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDV2aDtcbn1cblxuLmNlbGwsXG4ueC1jZWxsLFxuLnktY2VsbCxcbi5kZWNrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiA1dmg7XG4gICAgaGVpZ2h0OiA1dmg7XG59XG5cbi5haS1ib2FyZCB7fVxuXG4uY2VsbCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMjU1LCAwLjMpO1xufVxuXG4ueC1jZWxsLFxuLnktY2VsbCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5zaGlwIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlcjogMXB4IHJnYmEoMCwgMCwgMjU1LCAxKSBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbiAgICBnYXA6IDFweDtcbn1cblxuLmhvcml6b250YWwge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcbn1cblxuLnZlcnRpY2FsIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XG59XG5cbi5kZWNrIHtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDR2aDtcbn1cblxuLnJhbmRvbS1tb2RlLFxuLm1hbnVhbC1tb2RlIHtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibHVlO1xuICAgIGNvbG9yOiBibHVlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJhbmRvbS1tb2RlOmhvdmVyLFxuLm1hbnVhbC1tb2RlOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDEyMiwgMjMxLCA3Mik7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZ2IoMTIyLCAyMzEsIDcyKTtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiwwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsOERBQThEO0FBQ2xFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsNERBQTREO0FBQ2hFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhEQUE4RDtJQUM5RCw0REFBNEQ7SUFDNUQsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7Ozs7SUFJSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksZ0RBQWdEO0FBQ3BEOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsc0NBQXNDO0lBQ3RDLFFBQVE7QUFDWjs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsUUFBUTtBQUNaOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgLS1ib2FyZC13aWR0aDogMDtcXG4gICAgLS1ib2FyZC1oZWlnaHQ6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICByb3ctZ2FwOiAydmg7XFxufVxcblxcbnNwYW4ge1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDJ2aDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4udGlwcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMnZoLCAydncpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLnNoaXB5YXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XFxuICAgIHJvdy1nYXA6IDZ2aDtcXG4gICAgcGFkZGluZzogMnZoO1xcbn1cXG5cXG4uZG9jayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDR2aDtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIG9wYWNpdHk6IDAuMTtcXG4gICAgei1pbmRleDogMDtcXG59XFxuXFxuLmJvYXJkX19heGlzLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICByb3ctZ2FwOiAydmg7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1dmg7XFxufVxcblxcbi5heGlzLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5cXG4ueC1heGlzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDAuMXZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksIG1pbi1jb250ZW50KTtcXG59XFxuXFxuLmJvYXJkLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbn1cXG5cXG4ueS1heGlzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDAuMXZoO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCBtaW4tY29udGVudCk7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgbWluLWNvbnRlbnQpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCBtaW4tY29udGVudCk7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tYXJrZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1dmg7XFxufVxcblxcbi5jZWxsLFxcbi54LWNlbGwsXFxuLnktY2VsbCxcXG4uZGVjayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiA1dmg7XFxuICAgIGhlaWdodDogNXZoO1xcbn1cXG5cXG4uYWktYm9hcmQge31cXG5cXG4uY2VsbCB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDI1NSwgMC4zKTtcXG59XFxuXFxuLngtY2VsbCxcXG4ueS1jZWxsIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IDFweCByZ2JhKDAsIDAsIDI1NSwgMSkgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xcbiAgICBnYXA6IDFweDtcXG59XFxuXFxuLmhvcml6b250YWwge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XFxufVxcblxcbi52ZXJ0aWNhbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcXG59XFxuXFxuLmRlY2sge1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNHZoO1xcbn1cXG5cXG4ucmFuZG9tLW1vZGUsXFxuLm1hbnVhbC1tb2RlIHtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibHVlO1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmFuZG9tLW1vZGU6aG92ZXIsXFxuLm1hbnVhbC1tb2RlOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigxMjIsIDIzMSwgNzIpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYigxMjIsIDIzMSwgNzIpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhaUdhbWVib2FyZCB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lQm9hcmQnO1xuaW1wb3J0IHsgcmVtb3ZlSGlkZGVuLCBzZXRIaWRkZW4gfSBmcm9tICcuLi8uLi92aWV3cy9hbmltYXRpb25zL2NoYW5nZVZpc2libGUnO1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yTGlua3MgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFudWFsTW9kZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFudWFsLW1vZGUnKTtcbiAgICBjb25zdCByYW5kb21Nb2RlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb20tbW9kZScpO1xuICAgIGNvbnN0IHNoaXB5YXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXB5YXJkJyk7XG5cbiAgICBjb25zdCBvcGVuTWFudWFsTW9kZSA9IG1hbnVhbE1vZGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgc2V0SGlkZGVuKGFpR2FtZWJvYXJkLmdldE5vZGUoKSk7XG4gICAgICAgIHJlbW92ZUhpZGRlbihzaGlweWFyZCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvcGVuUmFuZG9tTW9kZSA9IHJhbmRvbU1vZGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgcmVtb3ZlSGlkZGVuKGFpR2FtZWJvYXJkLmdldE5vZGUoKSk7XG4gICAgICAgIHNldEhpZGRlbihzaGlweWFyZCk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgU2Vzc2lvbiwgcmVzZXRTZXNzaW9uIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zZXNzaW9uXCI7XG5pbXBvcnQgeyBkcmFnRW5kLCBzaGlwVHJhdmVycyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc2hpcFwiO1xuaW1wb3J0IHsgdmlld1NoaXAgfSBmcm9tIFwiLi4vLi4vdmlld3Mvbm9kZXMvc2hpcFwiO1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yU2hpcHMgPSAoc2hpcHMpID0+IHtcbiAgICBjb25zdCBib3JkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlY2tzID0gc2hpcC5nZXRCb2R5KCk7XG4gICAgICAgIGRlY2tzLmZvckVhY2goZGVjayA9PiB7XG4gICAgICAgICAgICBkZWNrLmdldENlbGxOb2RlKCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICBTZXNzaW9uLmluZGV4ID0gZGVjay5nZXROdW1iZXIoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2hpcC5nZXRDb250YWluZXIoKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuZ2V0UGFyZW50KCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIFNlc3Npb24uY3VycmVudEVsZW1lbnQgPSBzaGlwLmdldFBhcmVudCgpLmdldENlbGxOb2RlKCk7XG4gICAgICAgICAgICAgICAgc2hpcC5zZXRWZXJ0aWNhbCgpO1xuICAgICAgICAgICAgICAgIHNoaXBUcmF2ZXJzKFNlc3Npb24uYWN0aXZlU2hpcC5jbGVhckNlbGxzLCBTZXNzaW9uLmFjdGl2ZVNoaXAsIFNlc3Npb24uYWN0aXZlU2hpcC5nZXRQYXJlbnQoKSk7XG4gICAgICAgICAgICAgICAgc2hpcFRyYXZlcnMoc2hpcC5jaGVja0NlbGxzLCBzaGlwLCBzaGlwLmdldFBhcmVudCgpKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcC5pc0xlZ2FsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlld1NoaXAoc2hpcCwgc2hpcC5nZXRQYXJlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuc2V0T3JpZW50YXRpb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLnNldEhvcml6b250YWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzZXRTZXNzaW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgc2hpcC5nZXRDb250YWluZXIoKS5hZGRFdmVudExpc3RlbmVyKGBkcmFnc3RhcnRgLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoYHNlbGVjdGVkYCk7XG4gICAgICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgc2hpcFRyYXZlcnMoU2Vzc2lvbi5hY3RpdmVTaGlwLmNsZWFyQ2VsbHMsIFNlc3Npb24uYWN0aXZlU2hpcCwgU2Vzc2lvbi5hY3RpdmVTaGlwLmdldFBhcmVudCgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2hpcC5nZXRDb250YWluZXIoKS5hZGRFdmVudExpc3RlbmVyKGBkcmFnZW5kYCwgKGV2dCkgPT4ge1xuICAgICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGBzZWxlY3RlZGApO1xuICAgICAgICAgICAgZHJhZ0VuZCgpO1xuICAgICAgICAgICAgcmVzZXRTZXNzaW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYm9yZGVyLmFkZEV2ZW50TGlzdGVuZXIoYGRyYWdvdmVyYCwgKGV2dCkgPT4ge1xuICAgICAgICBTZXNzaW9uLmN1cnJlbnRFbGVtZW50ID0gZXZ0LnRhcmdldDtcbiAgICB9KVxufSIsImltcG9ydCAnLi92aWV3cy9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0ICcuL3ZpZXdzL25vZGVzL2dhbWVib2FyZCc7XG5pbXBvcnQgJy4vdmlld3Mvbm9kZXMvYXhpcyc7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JMaW5rcyB9IGZyb20gJy4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckxpbmtzJztcbmltcG9ydCB7IGZpbGxTaGlweWFyZCwgdmlld1NoaXB5YXJkIH0gZnJvbSAnLi92aWV3cy9ub2Rlcy9zaGlweWFyZCc7XG5pbXBvcnQge1xuICAgIGZvckZyZWdhdHMsXG4gICAgc2V0TGlzdGVuZXJzRm9yRnJlZ2F0cyxcbiAgICBzZXRMaXN0ZW5lcnNGb3JTaGlwcyxcbn0gZnJvbSAnLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yU2hpcHMnO1xuaW1wb3J0IHsgcGxheWVyU2hpcHlhcmRNb2RlbCB9IGZyb20gJy4vbW9kZWxzL3NoaXB5YXJkJztcblxuc2V0TGlzdGVuZXJzRm9yTGlua3MoKTtcbnZpZXdTaGlweWFyZCgpO1xuc2V0TGlzdGVuZXJzRm9yU2hpcHMocGxheWVyU2hpcHlhcmRNb2RlbC5nZXREb2NrV2l0aEZyZWdhdHMoKS5nZXRTaGlwcygpKTtcbiIsImNvbnN0IEFscGhhYmV0ID0gKGZDaGFyQ29kZSwgbENoYXJDb2RlKSA9PiB7XG4gICAgY29uc3QgZmlyc3RDaGFyQ29kZSA9IGZDaGFyQ29kZTtcbiAgICBjb25zdCBsYXN0Q2hhckNvZGUgPSBsQ2hhckNvZGU7XG4gICAgY29uc3QgbG9uZyA9IGxhc3RDaGFyQ29kZSAtIGZpcnN0Q2hhckNvZGUgKyAxO1xuICAgIGNvbnN0IGNvZGVzID0gQXJyYXkuZnJvbShBcnJheShsb25nKS5rZXlzKCksICh4KSA9PiB4ICsgZmlyc3RDaGFyQ29kZSk7XG5cbiAgICBjb25zdCBpc1RoaXNBbHBoYWJldCA9IChjaGFyQ29kZSkgPT4ge1xuICAgICAgICBpZiAoY2hhckNvZGUgPj0gZmlyc3RDaGFyQ29kZSAmJiBjaGFyQ29kZSA8PSBsYXN0Q2hhckNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZmlyc3RDaGFyQ29kZSwgbGFzdENoYXJDb2RlLCBsb25nLCBpc1RoaXNBbHBoYWJldCwgY29kZXMgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBBbHBoYWJldHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGVuZyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSBBbHBoYWJldCg5NywgMTIyKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWxwaGFiZXQpO1xuICAgIH07XG5cbiAgICBjb25zdCBydXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFscGhhYmV0ID0gQWxwaGFiZXQoMTA3MiwgMTEwMyk7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFscGhhYmV0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZW5nLCBydXMgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBnZXROb2RlIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvZmFjdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBDZWxsID0gKGN4ID0gLTEsIGN5ID0gLTEsIG5hbWUgPSAnY2VsbCcpID0+IHtcbiAgICBsZXQgaGl0ID0gZmFsc2U7XG4gICAgbGV0IHBhcmVudCA9ICdmcmVlJztcbiAgICBsZXQgbm9kZSA9IGdldE5vZGUobmFtZSk7XG4gICAgbGV0IHggPSBjeDtcbiAgICBsZXQgeSA9IGN5O1xuXG4gICAgY29uc3Qgc2V0VGhlSGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0hpdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5QYXJlbnQpID0+IHtcbiAgICAgICAgcGFyZW50ID0gblBhcmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRDZWxsTm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFhZID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB4LCB5IH07XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFhZID0gKGN4LCBjeSkgPT4ge1xuICAgICAgICB4ID0gY3g7XG4gICAgICAgIHkgPSBjeTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZXRUaGVIaXQsIGlzSGl0LCBzZXRQYXJlbnQsIGdldFBhcmVudCwgZ2V0Q2VsbE5vZGUsIGdldFhZLCBzZXRYWSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IERlY2sgPSAobnVtKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gQ2VsbCgtMSwgLTEsICdkZWNrJyk7XG4gICAgY29uc3QgbnVtYmVyID0gbnVtO1xuXG4gICAgY29uc3QgZ2V0TnVtYmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyBnZXROdW1iZXIgfSk7XG59IiwiaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2dhbWVDb25maWcnO1xuXG5leHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IENvbmZpZy5HYW1lYm9hcmQud2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0ID0gQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQ7XG4gICAgY29uc3QgY29udGFpbmVycyA9IGZpbGxCb2FyZCh3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX1gKTtcblxuICAgIGNvbnN0IGdldFN0cnVjdGVkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVycy5nZXRTdHJ1Y3RlZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRVbnN0cnVjdGVkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVycy5nZXRVbnN0cnVjdGVkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldFN0cnVjdGVkQ29udGFpbmVyLCBnZXRVbnN0cnVjdGVkQ29udGFpbmVyLCBnZXRTaXplLCBnZXROb2RlIH07XG59O1xuXG5jb25zdCBmaWxsQm9hcmQgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuICAgIGxldCBzdHJ1Y3RlZCA9IFtdO1xuICAgIGxldCB1bnN0cnVjdGVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgIGxldCBsaW5lID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IENlbGwoaiwgaSk7XG4gICAgICAgICAgICBsaW5lW2pdID0gY2VsbDtcbiAgICAgICAgICAgIHVuc3RydWN0ZWQucHVzaChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICBzdHJ1Y3RlZFtpXSA9IGxpbmU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U3RydWN0ZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdHJ1Y3RlZDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRVbnN0cnVjdGVkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdW5zdHJ1Y3RlZDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRTdHJ1Y3RlZCwgZ2V0VW5zdHJ1Y3RlZCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGlzRml0T25HYW1lYm9hcmRBeGUgPSAoY29vcmRpbmF0ZSwgb2JqTGVuZ2h0LCBheGVMZW5naHQpID0+IHtcbiAgICByZXR1cm4gY29vcmRpbmF0ZSArIG9iakxlbmdodCA+IGF4ZUxlbmdodFxuICAgICAgICB8fCBjb29yZGluYXRlIDwgMDtcbn1cblxuZXhwb3J0IGNvbnN0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCgncGxheWVyLWJvYXJkJyk7XG5leHBvcnQgY29uc3QgYWlHYW1lYm9hcmQgPSBHYW1lYm9hcmQoJ2FpLWJvYXJkJyk7XG4iLCJleHBvcnQgY29uc3QgQ29uZmlnID0gKCgpID0+IHtcbiAgICBjb25zdCBHYW1lYm9hcmQgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IDEwO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAxMDtcbiAgICAgICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBFbGVtZW50cyA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG51bWJlck9mID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyZWdhdGVzID0gMjtcbiAgICAgICAgICAgIGNvbnN0IGNhcmF2ZWxzID0gMjtcbiAgICAgICAgICAgIGNvbnN0IGRyYWtrYXJzID0gMztcbiAgICAgICAgICAgIGNvbnN0IGJvYXRzID0gNDtcbiAgICAgICAgICAgIHJldHVybiB7IGZyZWdhdGVzLCBjYXJhdmVscywgZHJha2thcnMsIGJvYXRzIH07XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgcmV0dXJuIHsgbnVtYmVyT2YgfTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgR2FtZWJvYXJkLCBFbGVtZW50cyB9O1xufSkoKTtcbiIsImltcG9ydCB7IHBsYXllckdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuXG5leHBvcnQgY29uc3QgU2Vzc2lvbiA9ICgoKSA9PiB7XG4gICAgbGV0IGFjdGl2ZVNoaXAgPSBudWxsO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IGRvdWJsZUluZGV4ID0gJ3NoaXAnO1xuICAgIGxldCBjdXJyZW50RWxlbWVudDtcbiAgICBsZXQgcGxheWVyR2FtZUJvYXJkQ2VsbHMgPSBwbGF5ZXJHYW1lYm9hcmQuZ2V0U3RydWN0ZWRDb250YWluZXIoKTtcbiAgICByZXR1cm4geyBhY3RpdmVTaGlwLCBpbmRleCwgZG91YmxlSW5kZXgsIGN1cnJlbnRFbGVtZW50LCBwbGF5ZXJHYW1lQm9hcmRDZWxscyB9XG59KSgpXG5cbmV4cG9ydCBjb25zdCByZXNldFNlc3Npb24gPSAoKSA9PiB7XG4gICAgU2Vzc2lvbi5hY3RpdmVTaGlwID0gbnVsbDtcbiAgICBTZXNzaW9uLmluZGV4ID0gMDtcbiAgICBTZXNzaW9uLmRvdWJsZUluZGV4ID0gJ3NoaXAnO1xuICAgIFNlc3Npb24uY3VycmVudEVsZW1lbnQgPSBudWxsO1xufSIsImltcG9ydCB7IGdldE5vZGUgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9mYWN0b3J5JztcbmltcG9ydCB7IHZpZXdTaGlwIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvc2hpcCc7XG5pbXBvcnQgeyBDZWxsLCBEZWNrIH0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7IEdhbWVib2FyZCwgaXNGaXRPbkdhbWVib2FyZEF4ZSwgcGxheWVyR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9nYW1lQ29uZmlnJztcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICcuL3Nlc3Npb24nO1xuXG5leHBvcnQgY29uc3QgU2hpcCA9IChudW1iZXJPZkRlY2tzKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Tm9kZSgnc2hpcCcsICdob3Jpem9udGFsJyk7XG4gICAgbGV0IGxlbmd0aCA9IG51bWJlck9mRGVja3M7XG4gICAgbGV0IGJvZHkgPSBbXTtcbiAgICBsZXQgbGl2ZSA9IHRydWU7XG4gICAgbGV0IGhvcml6b250YWwgPSB0cnVlO1xuICAgIGxldCBwYXJlbnQgPSBudWxsO1xuICAgIGxldCBsZWdhbCA9IHRydWU7XG5cbiAgICBjb25zdCBzZXREZWZhdWx0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGVjayA9IERlY2soaSk7XG4gICAgICAgICAgICBib2R5LnB1c2goZGVjayk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVjay5nZXRDZWxsTm9kZSgpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZXRPcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKVxuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgIGhvcml6b250YWwgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpKSB7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpXG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKVxuICAgICAgICAgICAgaG9yaXpvbnRhbCA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldENvb3JkaW5hdGVzID0gKGksIHgsIHkpID0+IHtcbiAgICAgICAgYm9keVtpXS5zZXRYWSh4LCB5KTtcbiAgICB9XG5cbiAgICBjb25zdCBvY2N1cHlDZWxscyA9IChpLCB4LCB5KSA9PiB7XG4gICAgICAgIHBsYXllckdhbWVib2FyZC5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpW3ldW3hdLnNldFBhcmVudChjb250YWluZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyQ2VsbHMgPSAoaSwgeCwgeSkgPT4ge1xuICAgICAgICBwbGF5ZXJHYW1lYm9hcmQuZ2V0U3RydWN0ZWRDb250YWluZXIoKVt5XVt4XS5zZXRQYXJlbnQoJ2ZyZWUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0NlbGxzID0gKGksIHgsIHkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyR2FtZWJvYXJkLmdldFN0cnVjdGVkQ29udGFpbmVyKClbeV1beF0uZ2V0UGFyZW50KCkpXG4gICAgICAgIGxldCBpc0xlZ2FsID0gcGxheWVyR2FtZWJvYXJkLmdldFN0cnVjdGVkQ29udGFpbmVyKClbeV1beF0uZ2V0UGFyZW50KCkgPT09ICdmcmVlJztcbiAgICAgICAgaWYgKCFpc0xlZ2FsKSB7XG4gICAgICAgICAgICBsZWdhbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaXNMaXZlID0gKCkgPT4ge1xuICAgICAgICBsaXZlID0gZmFsc2U7XG5cbiAgICAgICAgYm9keS5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRlY2suaXNIaXQoKSkge1xuICAgICAgICAgICAgICAgIGxpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbGl2ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Qm9keSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFBhcmVudCA9IChuUGFyZW50KSA9PiB7XG4gICAgICAgIHBhcmVudCA9IG5QYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaG9yaXpvbnRhbDtcbiAgICB9XG5cbiAgICBjb25zdCBpc0xlZ2FsID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGVnYWw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TGVnYWwgPSAoKSA9PiB7XG4gICAgICAgIGxlZ2FsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRWZXJ0aWNhbCA9ICgpID0+IHtcbiAgICAgICAgaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEhvcml6b250YWwgPSAoKSA9PiB7XG4gICAgICAgIGhvcml6b250YWwgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldERlZmF1bHRDb250YWluZXIoKTtcblxuICAgIHJldHVybiB7IHNldFZlcnRpY2FsLCBzZXRIb3Jpem9udGFsLCBzZXRPcmllbnRhdGlvbiwgaXNMaXZlLCBnZXRCb2R5LCBnZXRDb250YWluZXIsIGdldFBhcmVudCwgc2V0UGFyZW50LCBpc0hvcml6b250YWwsIHNldENvb3JkaW5hdGVzLCBvY2N1cHlDZWxscywgY2xlYXJDZWxscywgY2hlY2tDZWxscywgaXNMZWdhbCwgc2V0TGVnYWwgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBGcmVnYXQgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCg0KTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IENhcmF2ZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgzKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IERyYWtrYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgyKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IEJvYXQgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgxKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRyYWdFbmQgPSAoKSA9PiB7XG4gICAgbGV0IGlzTW92ZWFibGUgPSBmYWxzZTtcbiAgICBsZXQgaXNBbHRlck1vdmFibGUgPSBmYWxzZTtcbiAgICBsZXQgYm9keSA9IFNlc3Npb24uYWN0aXZlU2hpcC5nZXRCb2R5KCk7XG5cbiAgICBpZiAoU2Vzc2lvbi5jdXJyZW50RWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlzTW92ZWFibGUgPSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgY2VsbGApO1xuICAgICAgICBpc0FsdGVyTW92YWJsZSA9IFNlc3Npb24uY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGBkZWNrYCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc01vdmVhYmxlICYmICFpc0FsdGVyTW92YWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzTW92ZWFibGUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25maWcuR2FtZWJvYXJkLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvbmZpZy5HYW1lYm9hcmQud2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChTZXNzaW9uLnBsYXllckdhbWVCb2FyZENlbGxzW2pdW2ldLmdldENlbGxOb2RlKCkgPT09IFNlc3Npb24uY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkU2hpcE9uQm9hcmQoU2Vzc2lvbi5pbmRleCwgaiwgaSwgYm9keS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNBbHRlck1vdmFibGUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2R5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYm9keVtpXS5nZXRDZWxsTm9kZSgpID09PSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgU2Vzc2lvbi5kb3VibGVJbmRleCA9IFNlc3Npb24uaW5kZXggLSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChTZXNzaW9uLmRvdWJsZUluZGV4ICE9PSAnc2hpcCcpIHtcbiAgICAgICAgICAgIGxldCBoZWFkID0gU2Vzc2lvbi5hY3RpdmVTaGlwLmdldFBhcmVudCgpLmdldENlbGxOb2RlKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvbmZpZy5HYW1lYm9hcmQuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvbmZpZy5HYW1lYm9hcmQud2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoU2Vzc2lvbi5wbGF5ZXJHYW1lQm9hcmRDZWxsc1tqXVtpXS5nZXRDZWxsTm9kZSgpID09PSBoZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRTaGlwT25Cb2FyZChTZXNzaW9uLmRvdWJsZUluZGV4LCBqLCBpLCBib2R5Lmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgYWRkU2hpcE9uQm9hcmQgPSAoaW5kZXgsIHksIHgsIHNoaXBMZW5naHQpID0+IHtcbiAgICBsZXQgZGF0YSA9IGdldERhdGEoaW5kZXgsIHksIHgpO1xuICAgIHZpZXdTaGlwT25Cb2FyZChkYXRhLmNvb3JkaW5hdGUsIGRhdGEueCwgZGF0YS55LCBzaGlwTGVuZ2h0LCBkYXRhLmF4ZUxlbmdodClcbn1cblxuY29uc3QgZ2V0RGF0YSA9IChpbmRleCwgeCwgeSkgPT4ge1xuICAgIHJldHVybiBTZXNzaW9uLmFjdGl2ZVNoaXAuaXNIb3Jpem9udGFsKClcbiAgICAgICAgPyB7IGNvb3JkaW5hdGU6IHkgLSBpbmRleCwgeDogeCwgeTogeSAtIGluZGV4LCBheGVMZW5naHQ6IENvbmZpZy5HYW1lYm9hcmQud2lkdGggfVxuICAgICAgICA6IHsgY29vcmRpbmF0ZTogeCAtIGluZGV4LCB4OiB4IC0gaW5kZXgsIHk6IHksIGF4ZUxlbmdodDogQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQgfVxufVxuXG5jb25zdCB2aWV3U2hpcE9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgeCwgeSwgc2hpcExlbmdodCwgYXhlTGVuZ2h0KSA9PiB7XG4gICAgaWYgKGlzRml0T25HYW1lYm9hcmRBeGUoY29vcmRpbmF0ZSwgc2hpcExlbmdodCwgYXhlTGVuZ2h0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coU2Vzc2lvbi5wbGF5ZXJHYW1lQm9hcmRDZWxsc1t4XVt5XS5nZXRQYXJlbnQoKSlcbiAgICAgICAgaWYgKFNlc3Npb24ucGxheWVyR2FtZUJvYXJkQ2VsbHNbeF1beV0uZ2V0UGFyZW50KCkgPT09ICdmcmVlJ1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHZpZXdTaGlwKFNlc3Npb24uYWN0aXZlU2hpcCwgU2Vzc2lvbi5wbGF5ZXJHYW1lQm9hcmRDZWxsc1t4XVt5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzaGlwVHJhdmVycyA9IChmdW5jLCBzaGlwLCBoZWFkKSA9PiB7XG4gICAgc2hpcC5zZXRMZWdhbCgpO1xuICAgIGlmIChoZWFkICE9PSBudWxsKSB7XG4gICAgICAgIGxldCB4ID0gaGVhZC5nZXRYWSgpLng7XG4gICAgICAgIGxldCB5ID0gaGVhZC5nZXRYWSgpLnk7XG4gICAgICAgIGxldCBsZW5ndGggPSBzaGlwLmdldEJvZHkoKS5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZnVuYyhpLCB4LCB5KTtcbiAgICAgICAgICAgIGlmICgoc2hpcC5pc0hvcml6b250YWwoKSkpIHtcbiAgICAgICAgICAgICAgICB4Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNoaWxkcyA9IChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2dhbWVDb25maWcnO1xuaW1wb3J0IHsgQm9hdCwgQ2FyYXZlbCwgRHJha2thciwgRnJlZ2F0IH0gZnJvbSAnLi9zaGlwJztcblxuZXhwb3J0IGNvbnN0IFNoaXB5YXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGZyZWdhdHMgPSBEb2NrKENvbmZpZy5FbGVtZW50cy5udW1iZXJPZi5mcmVnYXRlcywgJ0ZyZWdhdCcpO1xuICAgIGNvbnN0IGNhcmF2ZWxzID0gRG9jayhDb25maWcuRWxlbWVudHMubnVtYmVyT2YuY2FyYXZlbHMsICdDYXJhdmVsJyk7XG4gICAgY29uc3QgZHJha2thcnMgPSBEb2NrKENvbmZpZy5FbGVtZW50cy5udW1iZXJPZi5kcmFra2FycywgJ0RyYWtrYXInKTtcbiAgICBjb25zdCBib2F0cyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmJvYXRzLCAnQm9hdCcpO1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhGcmVnYXRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZnJlZ2F0cztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhDYXJhdmVscyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhcmF2ZWxzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREb2NrV2l0aERyYWtrYXJzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZHJha2thcnM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERvY2tXaXRoQm9hdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBib2F0cztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0RG9ja1dpdGhGcmVnYXRzLCBnZXREb2NrV2l0aENhcmF2ZWxzLCBnZXREb2NrV2l0aERyYWtrYXJzLCBnZXREb2NrV2l0aEJvYXRzIH07XG59O1xuXG5jb25zdCBEb2NrID0gKGNvdW50LCBzaGlwQmx1ZVByaW50KSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGNvbnN0IGZpbGxEb2NrID0gKGNvdW50LCBzaGlwQmx1ZVByaW50KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGJ1aWxkU2hpcChzaGlwQmx1ZVByaW50KTtcbiAgICAgICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYnVpbGRTaGlwID0gKGJsdWVQcmludCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGJsdWVQcmludCkge1xuICAgICAgICAgICAgY2FzZSAnRnJlZ2F0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gRnJlZ2F0KCk7XG4gICAgICAgICAgICBjYXNlICdDYXJhdmVsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FyYXZlbCgpO1xuICAgICAgICAgICAgY2FzZSAnRHJha2thcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIERyYWtrYXIoKTtcbiAgICAgICAgICAgIGNhc2UgJ0JvYXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBCb2F0KCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTb3JyeSwgaWxsZWdhbCBzaGlwIGJsdWVwcmludCcpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZpbGxEb2NrKGNvdW50LCBzaGlwQmx1ZVByaW50KTtcblxuICAgIGNvbnN0IGdldFNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0U2hpcHMgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHBsYXllclNoaXB5YXJkTW9kZWwgPSBTaGlweWFyZCgpOyIsImV4cG9ydCBjb25zdCBzZXRIaWRkZW4gPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlSGlkZGVuID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufTtcbiIsImV4cG9ydCBjb25zdCBzZXREcmFnZ2FibGUgPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuZHJhZ2dhYmxlID0gdHJ1ZTtcbn07XG4iLCJpbXBvcnQgeyBzZXREcmFnZ2FibGUgfSBmcm9tICcuL3NldERyYWdnYWJsZSc7XG5cbmV4cG9ydCBjb25zdCBzZXREcmFnZ2FibGVGb3JTaGlwcyA9ICgpID0+IHtcbiAgICBmb3JGcmVnYXRzKCk7XG59O1xuXG5jb25zdCBmb3JGcmVnYXRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJlZ2F0cycpO1xuICAgIGNvbnN0IGZyZWdhdHMgPSBBcnJheS5mcm9tKGRvY2suY2hpbGRyZW4pO1xuXG4gICAgZnJlZ2F0cy5mb3JFYWNoKChmcmVnYXQpID0+IHtcbiAgICAgICAgc2V0RHJhZ2dhYmxlKGZyZWdhdCk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgQWxwaGFiZXRzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FscGhhYmV0cyc7XG5pbXBvcnQgeyBhaUdhbWVib2FyZCwgcGxheWVyR2FtZWJvYXJkIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWVCb2FyZCc7XG5pbXBvcnQgeyBnZXROb2RlIH0gZnJvbSAnLi9mYWN0b3J5JztcblxuY29uc3QgYWxwaGFiZXQgPSBBbHBoYWJldHMucnVzKCkuY29kZXM7XG5cbmNvbnN0IHZpZXdBeGlzID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGJvYXJkLmdldE5vZGUoKTtcbiAgICBjb25zdCB4QXhpcyA9IG5vZGUucXVlcnlTZWxlY3RvcignLngtYXhpcycpO1xuICAgIGNvbnN0IHlBeGlzID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcueS1heGlzJyk7XG4gICAgY29uc3Qgc2l6ZSA9IGJvYXJkLmdldFNpemUoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZS53aWR0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBnZXROb2RlKCd4LWNlbGwnKTtcbiAgICAgICAgY29uc3QgbGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShhbHBoYWJldFtpXSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGxldHRlcjtcbiAgICAgICAgeEF4aXMuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplLmhlaWdodDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBnZXROb2RlKCd5LWNlbGwnKTtcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGk7XG4gICAgICAgIHlBeGlzLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbn07XG5cbnZpZXdBeGlzKHBsYXllckdhbWVib2FyZCk7XG52aWV3QXhpcyhhaUdhbWVib2FyZCk7XG4iLCJleHBvcnQgY29uc3QgZ2V0Tm9kZSA9ICguLi5uYW1lcykgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGlmIChuYW1lICE9PSAnJykge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vZGU7XG59O1xuIiwiaW1wb3J0IHsgYWlHYW1lYm9hcmQsIHBsYXllckdhbWVib2FyZCB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lQm9hcmQnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWVDb25maWcnO1xuXG5jb25zdCB2aWV3Qm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBib2FyZC5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpO1xuICAgIGNvbnN0IGJvYXJkd3IgPSBib2FyZC5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XG4gICAgY29udGFpbmVyLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICAgICAgbGluZS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBib2FyZHdyLmFwcGVuZENoaWxkKGNlbGwuZ2V0Q2VsbE5vZGUoKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuY29uc3QgU3R5bGVQcmVzZXRzID0gKCgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYm9hcmQtd2lkdGgnLCBDb25maWcuR2FtZWJvYXJkLndpZHRoKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYm9hcmQtaGVpZ2h0JywgQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQpO1xufSkoKVxuXG52aWV3Qm9hcmQocGxheWVyR2FtZWJvYXJkKTtcbnZpZXdCb2FyZChhaUdhbWVib2FyZCk7XG4iLCJpbXBvcnQgeyByZW1vdmVDaGlsZHMsIHNoaXBUcmF2ZXJzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zaGlwXCI7XG5cbmV4cG9ydCBjb25zdCB2aWV3U2hpcCA9IChzaGlwLCBoZWFkKSA9PiB7XG4gICAgc2hpcFRyYXZlcnMoc2hpcC5jaGVja0NlbGxzLCBzaGlwLCBoZWFkKTtcbiAgICBpZiAoc2hpcC5pc0xlZ2FsKCkpIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IHNoaXAuZ2V0UGFyZW50KCk7XG5cbiAgICAgICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmVtb3ZlQ2hpbGRzKHBhcmVudC5nZXRDZWxsTm9kZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNoaXAuc2V0UGFyZW50KGhlYWQpO1xuICAgICAgICBoZWFkLmdldENlbGxOb2RlKCkuYXBwZW5kQ2hpbGQoc2hpcC5nZXRDb250YWluZXIoKSk7XG4gICAgICAgIHNoaXBUcmF2ZXJzKHNoaXAuc2V0Q29vcmRpbmF0ZXMsIHNoaXAsIGhlYWQpO1xuICAgICAgICBzaGlwVHJhdmVycyhzaGlwLm9jY3VweUNlbGxzLCBzaGlwLCBoZWFkKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWVDb25maWcnO1xuaW1wb3J0IHsgQm9hdCwgQ2FyYXZlbCwgRHJha2thciwgRnJlZ2F0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NoaXAnO1xuaW1wb3J0IHsgU2hpcHlhcmQsIHBsYXllclNoaXB5YXJkTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2hpcHlhcmQnO1xuaW1wb3J0IHsgc2V0RHJhZ2dhYmxlRm9yU2hpcHMgfSBmcm9tICcuLi9kcmFnQW5kRHJvcC9zaGlwcyc7XG5cbmV4cG9ydCBjb25zdCB2aWV3U2hpcHlhcmQgPSAoKSA9PiB7XG4gICAgZmlsbFNoaXB5YXJkTm9kZSgpO1xuICAgIHNldERyYWdnYWJsZUZvclNoaXBzKCk7XG59O1xuXG5jb25zdCBmaWxsU2hpcHlhcmROb2RlID0gKCkgPT4ge1xuICAgIGFkZEZyZWdhdGVzKCk7XG4gICAgYWRkQ2FyYXZlbHMoKTtcbiAgICBhZGREcmFra2FycygpO1xuICAgIGFkZEJvYXRzKCk7XG59O1xuXG5jb25zdCBhZGRGcmVnYXRlcyA9ICgpID0+IHtcbiAgICBjb25zdCBkb2NrTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mcmVnYXRzJyk7XG4gICAgY29uc3Qgc2hpcHMgPSBwbGF5ZXJTaGlweWFyZE1vZGVsLmdldERvY2tXaXRoRnJlZ2F0cygpLmdldFNoaXBzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkb2NrTm9kZS5hcHBlbmRDaGlsZChzaGlwc1tpXS5nZXRDb250YWluZXIoKSk7XG4gICAgfVxufTtcblxuY29uc3QgYWRkQ2FyYXZlbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZG9ja05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyYXZlbHMnKTtcbiAgICBjb25zdCBzaGlwcyA9IHBsYXllclNoaXB5YXJkTW9kZWwuZ2V0RG9ja1dpdGhDYXJhdmVscygpLmdldFNoaXBzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkb2NrTm9kZS5hcHBlbmRDaGlsZChzaGlwc1tpXS5nZXRDb250YWluZXIoKSk7XG4gICAgfVxufTtcblxuY29uc3QgYWRkRHJha2thcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZG9ja05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJha2thcnMnKTtcbiAgICBjb25zdCBzaGlwcyA9IHBsYXllclNoaXB5YXJkTW9kZWwuZ2V0RG9ja1dpdGhEcmFra2FycygpLmdldFNoaXBzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkb2NrTm9kZS5hcHBlbmRDaGlsZChzaGlwc1tpXS5nZXRDb250YWluZXIoKSk7XG4gICAgfVxufTtcblxuY29uc3QgYWRkQm9hdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZG9ja05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hdHMnKTtcbiAgICBjb25zdCBzaGlwcyA9IHBsYXllclNoaXB5YXJkTW9kZWwuZ2V0RG9ja1dpdGhCb2F0cygpLmdldFNoaXBzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkb2NrTm9kZS5hcHBlbmRDaGlsZChzaGlwc1tpXS5nZXRDb250YWluZXIoKSk7XG4gICAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==