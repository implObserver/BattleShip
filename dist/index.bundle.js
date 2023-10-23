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

.header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    width: 100%;
    padding: 2vh;
}

.title {
    display: flex;
    font-size: 3rem;
}

.tips {
    display: flex;
    background-color: rgba(128, 128, 128, 0.2);
    align-items: center;
    padding: 1vh;
    border-radius: min(2vh, 2vw);
}

.main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    column-gap: 20vh;
}

.board__axis-wrapper {
    display: grid;
    width: min-content;
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

.cell,
.x-cell,
.y-cell,
.ship-cell {
    display: grid;
    width: 5vh;
    height: 5vh;
}

.cell {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 255, 0.3);
}

.x-cell,
.y-cell {
    justify-content: center;
    align-items: center;
    opacity: 0.5;
}

.ship-cell {
    display: grid;
    border: 0.1vh green solid;
}

span {
    padding-left: 1vh;
    padding-right: 1vh;
    height: min-content;
    width: min-content;
}`, "",{"version":3,"sources":["webpack://./src/views/styles/main.css"],"names":[],"mappings":"AAAA;;;IAGI,UAAU;IACV,SAAS;IACT,SAAS;IACT,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,mBAAmB;IACnB,YAAY;IACZ,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,sBAAsB;IACtB,8DAA8D;AAClE;;AAEA;IACI,aAAa;IACb,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,eAAe;IACf,4DAA4D;AAChE;;AAEA;IACI,aAAa;IACb,8DAA8D;IAC9D,4DAA4D;IAC5D,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;IACR,sBAAsB;AAC1B;;AAEA;;;;IAII,aAAa;IACb,UAAU;IACV,WAAW;AACf;;AAEA;IACI,gDAAgD;AACpD;;AAEA;;IAEI,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 2vh;\n    --board-width: 0;\n    --board-height: 0;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    justify-items: center;\n    align-content: center;\n    max-width: 100%;\n    max-height: 100%;\n    row-gap: 2vh;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    width: 100%;\n    padding: 2vh;\n}\n\n.title {\n    display: flex;\n    font-size: 3rem;\n}\n\n.tips {\n    display: flex;\n    background-color: rgba(128, 128, 128, 0.2);\n    align-items: center;\n    padding: 1vh;\n    border-radius: min(2vh, 2vw);\n}\n\n.main {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-content: center;\n    column-gap: 20vh;\n}\n\n.board__axis-wrapper {\n    display: grid;\n    width: min-content;\n}\n\n.axis-wrapper {\n    display: grid;\n    width: min-content;\n    grid-template-rows: min-content 1fr;\n}\n\n.x-axis {\n    display: grid;\n    grid-gap: 0.1vh;\n    justify-content: right;\n    grid-template-columns: repeat(var(--board-width), min-content);\n}\n\n.board-wrapper {\n    display: grid;\n    grid-template-columns: min-content min-content;\n}\n\n.y-axis {\n    display: grid;\n    grid-gap: 0.1vh;\n    grid-template-rows: repeat(var(--board-height), min-content);\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(var(--board-width), min-content);\n    grid-template-rows: repeat(var(--board-height), min-content);\n    height: min-content;\n    width: min-content;\n    gap: 1px;\n    box-sizing: border-box;\n}\n\n.cell,\n.x-cell,\n.y-cell,\n.ship-cell {\n    display: grid;\n    width: 5vh;\n    height: 5vh;\n}\n\n.cell {\n    box-shadow: 0px 0px 0px 1px rgba(0, 0, 255, 0.3);\n}\n\n.x-cell,\n.y-cell {\n    justify-content: center;\n    align-items: center;\n    opacity: 0.5;\n}\n\n.ship-cell {\n    display: grid;\n    border: 0.1vh green solid;\n}\n\nspan {\n    padding-left: 1vh;\n    padding-right: 1vh;\n    height: min-content;\n    width: min-content;\n}"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/styles/main.css */ "./src/views/styles/main.css");
/* harmony import */ var _views_nodes_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/nodes/gameboard */ "./src/views/nodes/gameboard.js");
/* harmony import */ var _views_nodes_axis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/nodes/axis */ "./src/views/nodes/axis.js");





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
/* harmony export */   Cell: () => (/* binding */ Cell)
/* harmony export */ });
/* harmony import */ var _views_nodes_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/nodes/factory */ "./src/views/nodes/factory.js");


const Cell = (cx = -1, cy = -1, name = 'cell') => {
    let hit = false;
    let parent;
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
    }

    return { setTheHit, isHit, setParent, getParent, getCellNode, getXY };
};


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
/* harmony export */   playerGameboard: () => (/* binding */ playerGameboard)
/* harmony export */ });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameConfig */ "./src/models/gameConfig.js");



const Gameboard = () => {
    const width = _gameConfig__WEBPACK_IMPORTED_MODULE_1__.Config.Gameboard.width;
    const height = _gameConfig__WEBPACK_IMPORTED_MODULE_1__.Config.Gameboard.height;
    const containers = fillBoard(width, height);

    const getStructedContainer = () => {
        return containers.structed;
    };

    const getUnstructedContainer = () => {
        return containers.unstructed;
    };

    const getSize = () => {
        return { width, height };
    };

    return { getStructedContainer, getUnstructedContainer, getSize };
};

const fillBoard = (width, height) => {
    let structed = [];
    let unstructed = [];
    for (let i = 0; i < height; i++) {
        let line = [];
        for (let j = 0; j < width; j++) {
            const cell = (0,_cell__WEBPACK_IMPORTED_MODULE_0__.Cell)(i, j);
            line[j] = cell;
            unstructed.push(cell);
        }
        structed[i] = line;
    }

    return { structed: structed, unstructed: unstructed };
};

const playerGameboard = Gameboard();
const aiGameboard = Gameboard();


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

        document.documentElement.style.setProperty('--board-width', width);
        document.documentElement.style.setProperty('--board-height', height);

        return { width, height };
    })();

    return { Gameboard };
})();


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
/* harmony import */ var _views_nodes_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/nodes/factory */ "./src/views/nodes/factory.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoard */ "./src/models/gameBoard.js");




const Ship = (l) => {
    const container = (0,_views_nodes_factory__WEBPACK_IMPORTED_MODULE_0__.getNode)('ship');
    let length = l;
    let body = [];
    let live = true;
    let orientation = 'horizontal';

    const setDefaultContainer = () => {
        for (let i = 0; i < length; i++) {
            let cell = (0,_cell__WEBPACK_IMPORTED_MODULE_1__.Cell)(-1, -1, 'ship-cell');
            body.push(cell);
            container.appendChild(cell.getCellNode());
        }
    };

    const fillContainer = (head) => {
        let x = head.getXY().x;
        let y = head.getXY().y;

        for (let i = 0; i < length; i++) {
            let cell = _gameBoard__WEBPACK_IMPORTED_MODULE_2__.playerGameboard.getStructedContainer[x][y].getCellNode();
            cell.classList.add('ship-cell')
            container[i] = cell;

            if (orientation = 'horizontal') {
                x++;
            } else {
                y++;
            }
        }
    }

    const removeContainer = () => {
        setDefaultContainer();
    }

    const isLive = () => {
        live = false;

        body.forEach((cell) => {
            if (!cell.isHit()) {
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
    }

    setDefaultContainer();

    return { isLive, getBody, getContainer };
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
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard */ "./src/views/nodes/gameboard.js");





const alphabet = _models_alphabets__WEBPACK_IMPORTED_MODULE_0__.Alphabets.rus().codes;

const viewAxis = (board, node) => {
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

viewAxis(_models_gameBoard__WEBPACK_IMPORTED_MODULE_1__.playerGameboard, _gameboard__WEBPACK_IMPORTED_MODULE_3__.playerBoardNode);
viewAxis(_models_gameBoard__WEBPACK_IMPORTED_MODULE_1__.aiGameboard, _gameboard__WEBPACK_IMPORTED_MODULE_3__.aiBoardNode);


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
    const cell = document.createElement('div');
    names.forEach(name => {
        if (name !== '') {
            cell.classList.add(name);
        }
    })
    return cell;
};


/***/ }),

/***/ "./src/views/nodes/gameboard.js":
/*!**************************************!*\
  !*** ./src/views/nodes/gameboard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aiBoardNode: () => (/* binding */ aiBoardNode),
/* harmony export */   playerBoardNode: () => (/* binding */ playerBoardNode)
/* harmony export */ });
/* harmony import */ var _models_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/gameBoard */ "./src/models/gameBoard.js");
/* harmony import */ var _models_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/ship */ "./src/models/ship.js");



const playerBoardNode = document.querySelector('.player-board');
const aiBoardNode = document.querySelector('.ai-board');

const viewBoard = (board, node) => {
    const container = board.getStructedContainer();
    const boardwr = node.querySelector('.board');
    container.forEach((line) => {
        line.forEach((cell) => {
            boardwr.appendChild(cell.getCellNode());
        });
    });
};

viewBoard(_models_gameBoard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard, playerBoardNode);
viewBoard(_models_gameBoard__WEBPACK_IMPORTED_MODULE_0__.aiGameboard, aiBoardNode);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNsQztBQUN1Qjs7QUFFM0QsaUJBQWlCLHdEQUFTOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDLHFCQUFxQixpREFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsaUJBQWlCO0FBQ3JDLHFCQUFxQixpREFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLDhEQUFlLEVBQUUsdURBQWU7QUFDekMsU0FBUywwREFBVyxFQUFFLG1EQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUMzQjFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSc0U7QUFDSDs7QUFFNUQ7QUFDQTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBLFVBQVUsOERBQWU7QUFDekIsVUFBVSwwREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzcz84OWY2Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9hbHBoYWJldHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvY2VsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvZ2FtZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvYXhpcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9nYW1lYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gICAgZm9udC1zaXplOiAydmg7XG4gICAgLS1ib2FyZC13aWR0aDogMDtcbiAgICAtLWJvYXJkLWhlaWdodDogMDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICByb3ctZ2FwOiAydmg7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAydmg7XG59XG5cbi50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi50aXBzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMnZoLCAydncpO1xufVxuXG4ubWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGNvbHVtbi1nYXA6IDIwdmg7XG59XG5cbi5ib2FyZF9fYXhpcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLmF4aXMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG59XG5cbi54LWF4aXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDAuMXZoO1xuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtd2lkdGgpLCBtaW4tY29udGVudCk7XG59XG5cbi5ib2FyZC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG59XG5cbi55LWF4aXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDAuMXZoO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLWhlaWdodCksIG1pbi1jb250ZW50KTtcbn1cblxuLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgbWluLWNvbnRlbnQpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLWhlaWdodCksIG1pbi1jb250ZW50KTtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBnYXA6IDFweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2VsbCxcbi54LWNlbGwsXG4ueS1jZWxsLFxuLnNoaXAtY2VsbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogNXZoO1xuICAgIGhlaWdodDogNXZoO1xufVxuXG4uY2VsbCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMjU1LCAwLjMpO1xufVxuXG4ueC1jZWxsLFxuLnktY2VsbCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5zaGlwLWNlbGwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyOiAwLjF2aCBncmVlbiBzb2xpZDtcbn1cblxuc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxdmg7XG4gICAgcGFkZGluZy1yaWdodDogMXZoO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1QsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsOERBQThEO0FBQ2xFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsNERBQTREO0FBQ2hFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhEQUE4RDtJQUM5RCw0REFBNEQ7SUFDNUQsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1Isc0JBQXNCO0FBQzFCOztBQUVBOzs7O0lBSUksYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnREFBZ0Q7QUFDcEQ7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIC0tYm9hcmQtd2lkdGg6IDA7XFxuICAgIC0tYm9hcmQtaGVpZ2h0OiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgcm93LWdhcDogMnZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAydmg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnRpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogbWluKDJ2aCwgMnZ3KTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMjB2aDtcXG59XFxuXFxuLmJvYXJkX19heGlzLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5heGlzLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5cXG4ueC1heGlzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDAuMXZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksIG1pbi1jb250ZW50KTtcXG59XFxuXFxuLmJvYXJkLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbn1cXG5cXG4ueS1heGlzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDAuMXZoO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCBtaW4tY29udGVudCk7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgbWluLWNvbnRlbnQpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCBtaW4tY29udGVudCk7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jZWxsLFxcbi54LWNlbGwsXFxuLnktY2VsbCxcXG4uc2hpcC1jZWxsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDV2aDtcXG4gICAgaGVpZ2h0OiA1dmg7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMjU1LCAwLjMpO1xcbn1cXG5cXG4ueC1jZWxsLFxcbi55LWNlbGwge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uc2hpcC1jZWxsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiAwLjF2aCBncmVlbiBzb2xpZDtcXG59XFxuXFxuc3BhbiB7XFxuICAgIHBhZGRpbmctbGVmdDogMXZoO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vdmlld3Mvc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCAnLi92aWV3cy9ub2Rlcy9nYW1lYm9hcmQnO1xuaW1wb3J0ICcuL3ZpZXdzL25vZGVzL2F4aXMnO1xuIiwiY29uc3QgQWxwaGFiZXQgPSAoZkNoYXJDb2RlLCBsQ2hhckNvZGUpID0+IHtcbiAgICBjb25zdCBmaXJzdENoYXJDb2RlID0gZkNoYXJDb2RlO1xuICAgIGNvbnN0IGxhc3RDaGFyQ29kZSA9IGxDaGFyQ29kZTtcbiAgICBjb25zdCBsb25nID0gbGFzdENoYXJDb2RlIC0gZmlyc3RDaGFyQ29kZSArIDE7XG4gICAgY29uc3QgY29kZXMgPSBBcnJheS5mcm9tKEFycmF5KGxvbmcpLmtleXMoKSwgKHgpID0+IHggKyBmaXJzdENoYXJDb2RlKTtcblxuICAgIGNvbnN0IGlzVGhpc0FscGhhYmV0ID0gKGNoYXJDb2RlKSA9PiB7XG4gICAgICAgIGlmIChjaGFyQ29kZSA+PSBmaXJzdENoYXJDb2RlICYmIGNoYXJDb2RlIDw9IGxhc3RDaGFyQ29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBmaXJzdENoYXJDb2RlLCBsYXN0Q2hhckNvZGUsIGxvbmcsIGlzVGhpc0FscGhhYmV0LCBjb2RlcyB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEFscGhhYmV0cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZW5nID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbHBoYWJldCA9IEFscGhhYmV0KDk3LCAxMjIpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhbHBoYWJldCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJ1cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSBBbHBoYWJldCgxMDcyLCAxMTAzKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWxwaGFiZXQpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBlbmcsIHJ1cyB9O1xufSkoKTtcbiIsImltcG9ydCB7IGdldE5vZGUgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9mYWN0b3J5JztcblxuZXhwb3J0IGNvbnN0IENlbGwgPSAoY3ggPSAtMSwgY3kgPSAtMSwgbmFtZSA9ICdjZWxsJykgPT4ge1xuICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICBsZXQgcGFyZW50O1xuICAgIGxldCBub2RlID0gZ2V0Tm9kZShuYW1lKTtcbiAgICBsZXQgeCA9IGN4O1xuICAgIGxldCB5ID0gY3k7XG5cbiAgICBjb25zdCBzZXRUaGVIaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdCA9IHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzSGl0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaGl0O1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRQYXJlbnQgPSAoblBhcmVudCkgPT4ge1xuICAgICAgICBwYXJlbnQgPSBuUGFyZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENlbGxOb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0WFkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHgsIHkgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZXRUaGVIaXQsIGlzSGl0LCBzZXRQYXJlbnQsIGdldFBhcmVudCwgZ2V0Q2VsbE5vZGUsIGdldFhZIH07XG59O1xuIiwiaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2dhbWVDb25maWcnO1xuXG5leHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gQ29uZmlnLkdhbWVib2FyZC53aWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBDb25maWcuR2FtZWJvYXJkLmhlaWdodDtcbiAgICBjb25zdCBjb250YWluZXJzID0gZmlsbEJvYXJkKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgY29uc3QgZ2V0U3RydWN0ZWRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250YWluZXJzLnN0cnVjdGVkO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRVbnN0cnVjdGVkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVycy51bnN0cnVjdGVkO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRTaXplID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldFN0cnVjdGVkQ29udGFpbmVyLCBnZXRVbnN0cnVjdGVkQ29udGFpbmVyLCBnZXRTaXplIH07XG59O1xuXG5jb25zdCBmaWxsQm9hcmQgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuICAgIGxldCBzdHJ1Y3RlZCA9IFtdO1xuICAgIGxldCB1bnN0cnVjdGVkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICBsZXQgbGluZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBDZWxsKGksIGopO1xuICAgICAgICAgICAgbGluZVtqXSA9IGNlbGw7XG4gICAgICAgICAgICB1bnN0cnVjdGVkLnB1c2goY2VsbCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RydWN0ZWRbaV0gPSBsaW5lO1xuICAgIH1cblxuICAgIHJldHVybiB7IHN0cnVjdGVkOiBzdHJ1Y3RlZCwgdW5zdHJ1Y3RlZDogdW5zdHJ1Y3RlZCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuZXhwb3J0IGNvbnN0IGFpR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4iLCJleHBvcnQgY29uc3QgQ29uZmlnID0gKCgpID0+IHtcbiAgICBjb25zdCBHYW1lYm9hcmQgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IDEwO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAxMDtcblxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYm9hcmQtd2lkdGgnLCB3aWR0aCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ib2FyZC1oZWlnaHQnLCBoZWlnaHQpO1xuXG4gICAgICAgIHJldHVybiB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgR2FtZWJvYXJkIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgZ2V0Tm9kZSB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL2ZhY3RvcnknO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgeyBwbGF5ZXJHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVCb2FyZCc7XG5cbmV4cG9ydCBjb25zdCBTaGlwID0gKGwpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXROb2RlKCdzaGlwJyk7XG4gICAgbGV0IGxlbmd0aCA9IGw7XG4gICAgbGV0IGJvZHkgPSBbXTtcbiAgICBsZXQgbGl2ZSA9IHRydWU7XG4gICAgbGV0IG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuXG4gICAgY29uc3Qgc2V0RGVmYXVsdENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBDZWxsKC0xLCAtMSwgJ3NoaXAtY2VsbCcpO1xuICAgICAgICAgICAgYm9keS5wdXNoKGNlbGwpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwuZ2V0Q2VsbE5vZGUoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZmlsbENvbnRhaW5lciA9IChoZWFkKSA9PiB7XG4gICAgICAgIGxldCB4ID0gaGVhZC5nZXRYWSgpLng7XG4gICAgICAgIGxldCB5ID0gaGVhZC5nZXRYWSgpLnk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBwbGF5ZXJHYW1lYm9hcmQuZ2V0U3RydWN0ZWRDb250YWluZXJbeF1beV0uZ2V0Q2VsbE5vZGUoKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1jZWxsJylcbiAgICAgICAgICAgIGNvbnRhaW5lcltpXSA9IGNlbGw7XG5cbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICBzZXREZWZhdWx0Q29udGFpbmVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNMaXZlID0gKCkgPT4ge1xuICAgICAgICBsaXZlID0gZmFsc2U7XG5cbiAgICAgICAgYm9keS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNlbGwuaXNIaXQoKSkge1xuICAgICAgICAgICAgICAgIGxpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbGl2ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Qm9keSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBzZXREZWZhdWx0Q29udGFpbmVyKCk7XG5cbiAgICByZXR1cm4geyBpc0xpdmUsIGdldEJvZHksIGdldENvbnRhaW5lciB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEZyZWdhdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDQpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgQ2FyYXZlbCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDMpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgRHJha2thciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDIpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgQm9hdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDEpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuIiwiaW1wb3J0IHsgQWxwaGFiZXRzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FscGhhYmV0cyc7XG5pbXBvcnQgeyBhaUdhbWVib2FyZCwgcGxheWVyR2FtZWJvYXJkIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWVCb2FyZCc7XG5pbXBvcnQgeyBnZXROb2RlIH0gZnJvbSAnLi9mYWN0b3J5JztcbmltcG9ydCB7IGFpQm9hcmROb2RlLCBwbGF5ZXJCb2FyZE5vZGUgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmNvbnN0IGFscGhhYmV0ID0gQWxwaGFiZXRzLnJ1cygpLmNvZGVzO1xuXG5jb25zdCB2aWV3QXhpcyA9IChib2FyZCwgbm9kZSkgPT4ge1xuICAgIGNvbnN0IHhBeGlzID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJyk7XG4gICAgY29uc3QgeUF4aXMgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy55LWF4aXMnKTtcbiAgICBjb25zdCBzaXplID0gYm9hcmQuZ2V0U2l6ZSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplLndpZHRoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGdldE5vZGUoJ3gtY2VsbCcpO1xuICAgICAgICBjb25zdCBsZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFscGhhYmV0W2ldKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gbGV0dGVyO1xuICAgICAgICB4QXhpcy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGdldE5vZGUoJ3ktY2VsbCcpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgeUF4aXMuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxufTtcblxudmlld0F4aXMocGxheWVyR2FtZWJvYXJkLCBwbGF5ZXJCb2FyZE5vZGUpO1xudmlld0F4aXMoYWlHYW1lYm9hcmQsIGFpQm9hcmROb2RlKTtcbiIsImV4cG9ydCBjb25zdCBnZXROb2RlID0gKC4uLm5hbWVzKSA9PiB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGlmIChuYW1lICE9PSAnJykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gY2VsbDtcbn07XG4iLCJpbXBvcnQgeyBhaUdhbWVib2FyZCwgcGxheWVyR2FtZWJvYXJkIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWVCb2FyZCc7XG5pbXBvcnQgeyBCb2F0LCBDYXJhdmVsLCBEcmFra2FyLCBGcmVnYXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2hpcCc7XG5cbmV4cG9ydCBjb25zdCBwbGF5ZXJCb2FyZE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG5leHBvcnQgY29uc3QgYWlCb2FyZE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWktYm9hcmQnKTtcblxuY29uc3Qgdmlld0JvYXJkID0gKGJvYXJkLCBub2RlKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gYm9hcmQuZ2V0U3RydWN0ZWRDb250YWluZXIoKTtcbiAgICBjb25zdCBib2FyZHdyID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBjb250YWluZXIuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICBsaW5lLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGJvYXJkd3IuYXBwZW5kQ2hpbGQoY2VsbC5nZXRDZWxsTm9kZSgpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG52aWV3Qm9hcmQocGxheWVyR2FtZWJvYXJkLCBwbGF5ZXJCb2FyZE5vZGUpO1xudmlld0JvYXJkKGFpR2FtZWJvYXJkLCBhaUJvYXJkTm9kZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=