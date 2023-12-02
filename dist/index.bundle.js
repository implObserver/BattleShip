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
    grid-template-columns: repeat(var(--board-width),
            max(var(--cell-size), 2vh));
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
    --x: 0px;
    --y: 0px;
    transform: translate(var(--x), var(--y));
    display: grid;
    align-content: center;
    justify-content: center;
    margin-left: -1px;
    margin-top: -1px;
    border: min(0.1vh, 0.1vw) rgba(0, 0, 255, 1) solid;
    width: min-content;
    height: min-content;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.draggable {}

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

.selected {
    opacity: 0.01 !important;
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
    border: 1px red solid;
}`, "",{"version":3,"sources":["webpack://./src/views/styles/main.css"],"names":[],"mappings":"AAAA;;;IAGI,UAAU;IACV,SAAS;IACT,SAAS;IACT,YAAY;IACZ,sBAAsB;IACtB,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,+CAA+C;IAC/C,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,mBAAmB;IACnB,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,0CAA0C;IAC1C,wBAAwB;IACxB,wBAAwB;IACxB,sBAAsB;IACtB,uBAAuB;IACvB,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,wBAAwB;IACxB,kBAAkB;IAClB,mBAAmB;IACnB,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb;;+BAE2B;AAC/B;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB;uCACmC;AACvC;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,oDAAoD;IACpD,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,sDAAsD;IACtD,oDAAoD;IACpD,oDAAoD;AACxD;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;IACvB,cAAc;IACd,eAAe;IACf,2CAA2C;IAC3C,6CAA6C;IAC7C,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,wBAAwB;IACxB,wBAAwB;AAC5B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,yDAAgD;IAChD,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA,OAAO;;AAEP;;IAEI,qBAAqB;IACrB,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,oDAAoD;AACxD;;AAEA;IACI,QAAQ;IACR,QAAQ;IACR,wCAAwC;IACxC,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,iBAAiB;IACjB,gBAAgB;IAChB,kDAAkD;IAClD,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA,YAAY;;AAEZ;IACI,qCAAqC;AACzC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,eAAe;IACf,sBAAsB;IACtB,uBAAuB;IACvB,sCAAsC;IACtC,oDAAoD;AACxD;;AAEA;IACI,aAAa;IACb,8CAA8C;IAC9C,WAAW;IACX,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;;IAEI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,eAAe;AACnB;;AAEA;;IAEI,wBAAwB;IACxB,2CAA2C;AAC/C;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;;IAEb,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;AACd;;AAEA;;IAEI,eAAe;IACf,aAAa;IACb,iDAAiD;IACjD,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,MAAM;IACN,OAAO;IACP,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,0BAA0B;AAC9B;;AAEA;;IAEI,aAAa;IACb,0CAA0C;IAC1C,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,wBAAwB;IACxB,SAAS;IACT,iCAAiC;IACjC,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI;QACI,2CAA2C;IAC/C;;IAEA;QACI,oBAAoB;QACpB,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,8CAA8C;IAClD;;IAEA;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n}\n\n:root {\n    font-size: min(2vh, 2vw);\n    --board-width: 0;\n    --board-height: 0;\n    --cell-size: min(5vh, 2vw);\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr min-content;\n    width: 100%;\n    height: 100%;\n    row-gap: min(2vh, 0.8vw);\n    justify-items: center;\n    width: min-content;\n}\n\nspan {\n    display: grid;\n    padding: min(1vh, 0.4vw);\n    height: min-content;\n    min-width: max-content;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: 1fr 1fr min-content;\n    justify-items: center;\n    align-items: center;\n    width: 100%;\n    height: min-content;\n    padding: min(2vh, 0.8vw);\n}\n\n.title {\n    display: grid;\n    font-size: 3rem;\n}\n\n.tips {\n    display: grid;\n    background-color: rgba(128, 128, 128, 0.2);\n    align-items: center;\n    padding: min(1vh, 1vw);\n    border-radius: min(2vh, 0.8vw);\n    height: min-content;\n}\n\n.exit {\n    display: grid;\n}\n\n.main {\n    display: grid;\n    width: max-content;\n    max-width: inherit;\n    justify-items: center;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n}\n\n.shipyard {\n    display: grid;\n    align-content: center;\n    grid-template-rows: repeat(4, min-content);\n    row-gap: min(6vh, 2.4vw);\n    padding: min(2vh, 0.8vw);\n    width: min(40vh, 16vw);\n    height: min(40vh, 16vw);\n    max-width: min(50vh, 20vw);\n    align-self: center;\n}\n\n.dock {\n    display: flex;\n    column-gap: min(4vh, 1.6vw);\n    height: min-content;\n}\n\n.board__axis-wrapper {\n    display: grid;\n    grid-template-rows: 1fr min-content;\n    row-gap: min(2vh, 0.8vw);\n    width: min-content;\n    height: min-content;\n    justify-items: center;\n    padding: min(5vh, 2vw);\n}\n\n.axis-wrapper {\n    display: grid;\n    width: min-content;\n    grid-template-rows: min-content 1fr;\n}\n\n.board-wrapper {\n    display: grid;\n    grid-template-areas:\n        'axis-x axis-x axis-x'\n        'shipyard axis-y board';\n}\n\n.x-axis {\n    display: grid;\n    grid-area: axis-x;\n    width: min-content;\n    height: min-content;\n    justify-self: end;\n    grid-template-columns: repeat(var(--board-width),\n            max(var(--cell-size), 2vh));\n}\n\n.y-axis {\n    display: grid;\n    grid-area: axis-y;\n    grid-template-rows: repeat(var(--board-height), 2fr);\n    width: min-content;\n}\n\n.board {\n    display: grid;\n    grid-area: board;\n    grid-template-columns: repeat(var(--board-width), 2fr);\n    grid-template-rows: repeat(var(--board-height), 2fr);\n    border: min(0.5vh, 0.2vw) rgba(0, 0, 255, 0.2) solid;\n}\n\n.play {\n    display: grid;\n    grid-area: board;\n    justify-self: center;\n    align-self: center;\n    width: min(10vh, 10vw);\n    height: min(10vh, 10vw);\n    min-width: 2vh;\n    min-height: 2vh;\n    background-color: rgba(119, 202, 41, 0.726);\n    border: min(1vh, 1vw) rgb(119, 202, 41) solid;\n    z-index: 998;\n}\n\n.ai-mini-shipyard,\n.player-mini-shipyard {\n    display: grid;\n    width: min-content;\n    height: min-content;\n    row-gap: min(2vh, 0.8vw);\n    padding: min(3vh, 1.2vw);\n}\n\n.low-opacity {\n    opacity: 0.4;\n}\n\n.block {\n    pointer-events: none;\n}\n\n.hidden {\n    display: none;\n}\n\n.marker {\n    display: grid;\n    justify-self: right;\n    width: min-content;\n}\n\n.cell {\n    display: grid;\n    width: var(--cell-size);\n    height: var(--cell-size);\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    min-width: 2vh;\n    min-height: 2vh;\n}\n\n.miss-hit {\n    background-image: url(/src/views/images/dot.svg);\n    background-size: 100% 100%;\n}\n\n.destroyed {\n    display: grid;\n    border: 1px red solid;\n}\n\n.live {}\n\n.x-cell,\n.y-cell {\n    justify-items: center;\n    align-content: center;\n    opacity: 0.5;\n}\n\n.marine-sector {\n    display: grid;\n    border: min(0.1vh, 0.1vw) rgba(0, 0, 255, 0.2) solid;\n}\n\n.ship {\n    --x: 0px;\n    --y: 0px;\n    transform: translate(var(--x), var(--y));\n    display: grid;\n    align-content: center;\n    justify-content: center;\n    margin-left: -1px;\n    margin-top: -1px;\n    border: min(0.1vh, 0.1vw) rgba(0, 0, 255, 1) solid;\n    width: min-content;\n    height: min-content;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n\n.draggable {}\n\n.horizontal {\n    grid-template-columns: repeat(4, 2fr);\n}\n\n.vertical {\n    grid-template-rows: repeat(4, 2fr);\n}\n\n.deck {\n    display: grid;\n    background-color: rgba(0, 0, 255, 0.1);\n    z-index: 999;\n}\n\n.deck>svg {\n    display: grid;\n    width: 100%;\n    height: 100%;\n}\n\n.mini-ship {\n    height: min-content !important;\n    width: min-content !important;\n}\n\n.mini-cell {\n    min-width: 1vh;\n    min-height: 1vh;\n    width: min(2vh, 0.8vw);\n    height: min(2vh, 0.8vw);\n    background-color: rgba(0, 255, 0, 0.1);\n    border: min(0.1vh, 0.1vw) rgba(0, 255, 255, 1) solid;\n}\n\n.footer {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    width: 100%;\n    justify-content: center;\n    gap: min(4vh, 1.6vw);\n}\n\n.random-mode,\n.manual-mode {\n    height: min-content;\n    display: grid;\n    border-bottom: 1px dotted blue;\n    color: blue;\n    cursor: pointer;\n}\n\n.random-mode:hover,\n.manual-mode:hover {\n    color: rgb(122, 231, 72);\n    border-bottom: 1px dotted rgb(122, 231, 72);\n}\n\n.timer {\n    display: grid;\n    width: 100vw;\n    height: min(2vh, 0.8vw);\n    justify-self: start;\n}\n\n.timer>svg {\n    display: grid;\n\n    width: 100vw;\n}\n\n.hidden {\n    display: none;\n}\n\n.null-opacity {\n    opacity: 0;\n}\n\n.popup-win,\n.popup-lose {\n    position: fixed;\n    display: grid;\n    grid-template-rows: repeat(auto-fit, min-content);\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    top: 0;\n    left: 0;\n    justify-items: center;\n    align-items: center;\n    visibility: hidden;\n    opacity: 0;\n    padding: min(1vh, 1vw);\n    z-index: 1000;\n}\n\n.text {\n    display: grid;\n    color: white;\n    font-size: min(10vh, 10vw);\n}\n\n.win,\n.lose {\n    display: grid;\n    grid-template-rows: repeat(3, min-content);\n    height: min-content;\n    justify-items: center;\n    z-index: 2000;\n}\n\n.gif-container {\n    display: flex;\n    justify-self: center;\n    width: min(100vh, 100vw);\n    height: 0;\n    padding-bottom: min(56vh, 22.4vw);\n    position: relative;\n    pointer-events: none;\n}\n\n.selected {\n    opacity: 0.01 !important;\n}\n\n@media screen and (max-aspect-ratio: 1.00001/1) {\n    .main {\n        grid-template-rows: min-content min-content;\n    }\n\n    .shipyard {\n        justify-self: center;\n        padding-bottom: 2vh;\n    }\n}\n\n@media screen and (min-aspect-ratio: 1/1) {\n    .main {\n        grid-template-columns: min-content min-content;\n    }\n\n    .ai-board {\n        align-self: start;\n    }\n}\n\n.cross {\n    border: 1px red solid;\n}"],"sourceRoot":""}]);
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
    const click = button.addEventListener('click', (e) => {
        _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_1__.clickEffect.play();
        ___WEBPACK_IMPORTED_MODULE_0__.game.play();
    });
};

const setListenersForExitButton = () => {
    const button = document.querySelector('.exit');

    const click = button.addEventListener('click', (e) => {
        _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_1__.clickEffect.play();
        ___WEBPACK_IMPORTED_MODULE_0__.game.end();
    });
};

const setListenersForCells = () => {
    const cells = ___WEBPACK_IMPORTED_MODULE_0__.game.ai.getGameboard().getUnstructedContainer();
    cells.forEach((cell) => {
        const node = cell.getCellNode();
        node.style.zIndex = 1000;
        const click = node.addEventListener('click', (e) => {
            ___WEBPACK_IMPORTED_MODULE_0__.game.gameHandler.checkCell(cell);
        });
    });
};


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
    popups.forEach((popup) => {
        const click = popup.addEventListener('click', (e) => {
            (0,_views_nodes_popups__WEBPACK_IMPORTED_MODULE_1__.hiddenPopup)(popup);
            ___WEBPACK_IMPORTED_MODULE_0__.game.end();
        });
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
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/game */ "./src/models/game.js");
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

            deck.getCellNode().addEventListener('touchstart', (evt) => {
                const { left, top, width, height } = deck.getCellNode().getBoundingClientRect()
                const centerX = left + width / 2
                const centerY = top + height / 2
                _models_game__WEBPACK_IMPORTED_MODULE_0__.Coordinates.setCoordinates(centerX, centerY);
            });

            deck.getCellNode().addEventListener('touchend', (evt) => {
                let event = new Event('mousedown');
                deck.getCellNode().dispatchEvent(event);
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
            _models_game__WEBPACK_IMPORTED_MODULE_0__.Coordinates.reset();
            evt.target.classList.remove(`selected`);
            ship.getContainer().style.setProperty('--y', `0px`);
            ship.getContainer().style.setProperty('--x', `0px`);
            (0,_ship__WEBPACK_IMPORTED_MODULE_3__.shipDragEnd)();
            (0,_models_session__WEBPACK_IMPORTED_MODULE_1__.resetSession)();
        });

        ship.getContainer().addEventListener(`touchstart`, (evt) => {
            _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip = ship;
        });

        ship.getContainer().addEventListener(`touchend`, (evt) => {
            let event = new DragEvent('dragend');
            ship.getContainer().dispatchEvent(event);
        });

        ship.getContainer().addEventListener(`touchmove`, (e) => {
            let cursorX = e.touches[0].clientX;
            let cursorY = e.touches[0].clientY;
            setCurrentElementForMobileDrag(cursorX, cursorY);
            (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__.viewDragShipForMobile)(cursorX, cursorY, ship.getContainer());
        });
    });

    border.addEventListener(`dragover`, (evt) => {
        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement = evt.target;
    });

    const setCurrentElementForMobileDrag = (cursorX, cursorY) => {
        const elements = document.elementsFromPoint(cursorX, cursorY);
        elements.forEach(element => {
            if (element.classList.contains('marine-sector')) {
                _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement = element;
            }
        })
    }
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
    console.log('bbbcxvxcxcx')
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
};

const setAttributes = (e, atrs) => {
    for (let atr of atrs) {
        e.setAttribute(atr.name, atr.val);
    }
};

const appendChilds = (node, ...childs) => {
    for (let child of childs) {
        node.appendChild(child);
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
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/game */ "./src/models/game.js");
/* harmony import */ var _views_styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/styles/main.css */ "./src/views/styles/main.css");



const game = (0,_models_game__WEBPACK_IMPORTED_MODULE_0__.Game)();
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
    };

    const getLinkedDeck = () => {
        return linkedDeck;
    };

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
    };

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
        reset,
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
    };

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
        { name: 'stroke-dashoffset', val: '120%' },
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
    ];
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
    let audio = new Audio(_views_audio_cross_mp3__WEBPACK_IMPORTED_MODULE_0__);
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
    };

    const reset = () => {
        animations.forEach((animation) => {
            animation.finish();
        });
    };

    const setAnimations = (val) => {
        animations = val;
    };

    return { setAnimations, getSvg, animations, reset };
};

const Cross = () => {
    const prototype = Template((0,_views_nodes_markers__WEBPACK_IMPORTED_MODULE_0__.createCrossSVG)());

    const view = () => {
        prototype.setAnimations((0,_views_nodes_markers__WEBPACK_IMPORTED_MODULE_0__.viewCross)(prototype.getSvg()));
    };

    return Object.assign(prototype, { view });
};

const Timer = () => {
    const prototype = Template((0,_views_nodes_timer__WEBPACK_IMPORTED_MODULE_1__.createTimerSVG)());

    const view = () => {
        prototype.setAnimations((0,_views_nodes_timer__WEBPACK_IMPORTED_MODULE_1__.viewTimer)(prototype.getSvg()));
    };

    return Object.assign(prototype, { view });
};


/***/ }),

/***/ "./src/models/game.js":
/*!****************************!*\
  !*** ./src/models/game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Coordinates: () => (/* binding */ Coordinates),
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
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setMiniShipyardDesign)(player.getMiniShipyard());
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setMiniShipyardDesign)(ai.getMiniShipyard());
    };

    const setDefaultListeners = () => {
        (0,_controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_3__.setListenersForShips)(player.getShipyard().getAllShips());
        (0,_controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_0__.setListenersForLinks)();
        (0,_controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_1__.setListenersForPlayButton)();
        (0,_controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_1__.setListenersForExitButton)();
        (0,_controllers_listeners_forPopups__WEBPACK_IMPORTED_MODULE_2__.setListenersforPopups)();
    };

    const setGamePlayListeners = () => {
        (0,_controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_1__.setListenersForCells)();
    };

    const start = () => {
        setDefaultListeners();
        viewDefaulInterfaces();
        gameHandler.fillBoardsToRandomShips();
        ai.getGameboard().hiddenShips();
    };

    const play = () => {
        gameHandler.setDefaultSettings();
        setGamePlayListeners();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.hiddenInterfaceBeforeStartPlay)();
        playGameState();
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.removeHidden)(ai.getMiniShipyard().getNode());
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.removeHidden)(player.getMiniShipyard().getNode());
        gameHandler.playerMove();
        timeManipulators.setTimeOfTheMove();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setMiniShipyardDesign)(player.getMiniShipyard());
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setMiniShipyardDesign)(ai.getMiniShipyard());
    };

    const end = () => {
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setHidden)(ai.getMiniShipyard().getNode());
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setHidden)(player.getMiniShipyard().getNode());
        ai.getMiniShipyard().reset();
        player.getMiniShipyard().reset();
        timeManipulators.reset();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.viewInterfaceAfterEndGame)();
        endGameState();
    };

    const playGameState = () => {
        document.querySelector('.x-axis').classList.add('correct');
        player.getGameboard().blockShips();
    };

    const endGameState = () => {
        document.querySelector('.x-axis').classList.remove('correct');
        ai.getGameboard().block();
        ai.getGameboard().reset();
        player.getGameboard().unblockShips();
        player.getGameboard().reset();
        gameHandler.fillBoardsToRandomShips();
        ai.getGameboard().hiddenShips();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setAiMoveDesign)(ai, player);
    };

    return { start, play, end, ai, player, gameHandler };
};

const GameHandler = (ai, player, timeManipulators) => {
    let move;
    let playerCells = [...player.getGameboard().getUnstructedContainer()];
    let aiCells = [...ai.getGameboard().getUnstructedContainer()];

    const setDefaultSettings = () => {
        move = 'player';
        playerCells = [...player.getGameboard().getUnstructedContainer()];
        aiCells = [...ai.getGameboard().getUnstructedContainer()];
    };

    const getActivePlayer = () => {
        return move === 'ai' ? ai : player;
    };

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
    };

    const isEndGame = () => {
        let isEnd = isPlayerLose(player) || isPlayerLose(ai);
        return isEnd;
    };

    const isPlayerLose = (player) => {
        let isLose = true;
        const ships = player.getShipyard().getAllShips();
        ships.forEach((ship) => {
            if (ship.isLive()) {
                isLose = false;
            }
        });
        return isLose;
    };

    const playerMove = () => {
        ai.getGameboard().unblock();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setPlayerMoveDesign)(ai, player);
    };

    const checkCell = (cell) => {
        if (aiCells.includes(cell)) {
            const index = aiCells.indexOf(cell);
            ai.getGameboard().block();
            takeHit(aiCells.splice(index, 1)[0]);
            timeManipulators.setTimeBetweenMoves(500);
        }
    };

    const aiMove = () => {
        ai.getGameboard().block();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setAiMoveDesign)(ai, player);
        timeManipulators.setAiSpeedOfTought(playerCells);
    };

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
    };

    const checkLiveShip = (ship) => {
        if (!ship.isLive()) {
            _elements_audioEffects__WEBPACK_IMPORTED_MODULE_11__.killShipEffect.play();
            ship.kill();
            let miniShip = getMiniShip(ship);
            miniShip.kill();
            hitAllAreaAroundShip(ship);
        }
        return ship.isLive();
    };

    const hitAllAreaAroundShip = (ship) => {
        const area = ship.getWaterAreas().getAreaAroundTheShip();
        area.forEach((cell) => {
            if (!cell.isHit()) {
                (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setLowOpacity)(cell.getCellNode());
            }
            (0,_views_nodes_hits__WEBPACK_IMPORTED_MODULE_5__.viewMissHit)(cell);
            removeCell(cell);
        });
    };

    const removeCell = (cell) => {
        let cells = move === 'ai' ? playerCells : aiCells;
        let index = cells.indexOf(cell);
        if (index > -1) {
            cells.splice(index, 1);
        }
    };

    const hitAllDiags = (hitCell) => {
        const handler = (0,_cellHandler__WEBPACK_IMPORTED_MODULE_10__.CellHandler)();
        const x = hitCell.getXY().x;
        const y = hitCell.getXY().y;
        const opponent = move === 'ai' ? player : ai;
        const parent = opponent.getGameboard().getStructedContainer();
        const cells = handler.getDiads(x, y, parent);
        cells.forEach((cell) => {
            if (cell !== hitCell) {
                if (!cell.isHit()) {
                    (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setLowOpacity)(cell.getCellNode());
                }
                (0,_views_nodes_hits__WEBPACK_IMPORTED_MODULE_5__.viewMissHit)(cell);
                removeCell(cell);
            }
        });
    };

    const getMiniShip = (ship) => {
        const type = ship.getType();
        const activePlayer = getActivePlayer();
        const ships = activePlayer.getMiniShipyard().getShipsOfType(type);
        for (let i = 0; i < ships.length; i++) {
            if (ships[i].isLive()) {
                return ships[i];
            }
        }
    };

    const fillBoardsToRandomShips = () => {
        ai.getGameboard().randomFillingOfShips();
        player.getGameboard().randomFillingOfShips();
    };

    const openPopup = () => {
        move === 'player' ? (0,_views_nodes_popups__WEBPACK_IMPORTED_MODULE_6__.viewLosePopup)() : (0,_views_nodes_popups__WEBPACK_IMPORTED_MODULE_6__.viewWinPopup)();
    };

    return {
        checkCell,
        playerMove,
        setDefaultSettings,
        switchMove,
        takeHit,
        isEndGame,
        fillBoardsToRandomShips,
    };
};


const Coordinates = (() => {
    let singleTone = 0;
    let x = 0;
    let y = 0;

    const setCoordinates = (nx, ny) => {
        if (singleTone === 0) {
            singleTone = 1;
            x = nx;
            y = ny;
        }
    }

    const reset = () => {
        singleTone = 0;
    }

    const getXY = () => {
        return { x, y };
    }

    return { setCoordinates, getXY, reset };
})();

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
        node.querySelectorAll('.ship').forEach((ship) => {
            ship.classList.add('block');
        });
    };

    const unblockShips = () => {
        node.querySelectorAll('.ship').forEach((ship) => {
            ship.classList.remove('block');
        });
    };

    const hiddenShips = () => {
        const board = node.querySelector('.board');
        board.querySelectorAll('.ship').forEach((ship) => {
            ship.style.border = '0px blue solid';
        });
        board.querySelectorAll('.deck').forEach((deck) => {
            (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNullOpacity)(deck);
        });
    };

    const block = () => {
        node.querySelector('.board').classList.add('block');
    };

    const unblock = () => {
        node.querySelector('.board').classList.remove('block');
    };

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
        unblock,
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
    let miniShipyard = (0,_shipyard__WEBPACK_IMPORTED_MODULE_1__.Shipyard)(
        prototype,
        document.querySelector(miniShipyardId),
    );

    const getGameboard = () => {
        return gameboard;
    };

    const getShipyard = () => {
        return shipyard;
    };

    const getMiniShipyard = () => {
        return miniShipyard;
    };

    return Object.assign(prototype, {
        getGameboard,
        getShipyard,
        getMiniShipyard,
    });
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
    return {
        manualMode,
        activeShip,
        index,
        doubleIndex,
        currentElement,
        choisedCell,
    };
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
    };

    const getYourself = () => {
        return ship;
    };

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
    };

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
        body.forEach((deck) => {
            deck.reset();
        });
    };

    const getType = () => {
        return type;
    };

    const kill = () => {
        body.forEach((deck) => {
            (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setLowOpacity)(deck.getCellNode());
            deck.setTheHit();
        });
        (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_3__.setDeathStyleOnShip)(container);
        live = false;
    };

    const getWaterAreas = () => {
        return shipWaterAreas;
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
        setYourself,
        getYourself,
        getType,
        kill,
        getWaterAreas,
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



const Shipyard = (
    player,
    node = document.querySelector('.shipyard'),
) => {
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
        getNode,
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
    };

    const setTimeBetweenMoves = (timeout) => {
        timeBetweenMoves = setTimeout(() => {
            ___WEBPACK_IMPORTED_MODULE_0__.game.gameHandler.switchMove();
        }, timeout);
    };

    const setTimeOfTheMove = () => {
        timer.view();
        timeOfTheMove = setInterval(() => {
            ___WEBPACK_IMPORTED_MODULE_0__.game.gameHandler.switchMove();
        }, 15000);
        alarm = setTimeout(() => {
            _elements_audioEffects__WEBPACK_IMPORTED_MODULE_2__.timerEffect.play();
        }, 10000);
    };

    const reset = () => {
        timer.reset();
        clearTimeout(aiSpeedOfTought);
        clearTimeout(timeBetweenMoves);
        clearTimeout(alarm);
        clearInterval(timeOfTheMove);
    };

    return { setAiSpeedOfTought, setTimeBetweenMoves, setTimeOfTheMove, reset };
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
            return e.animate([{ left: `${x0}` }, { left: `${x1}` }], {
                duration: dur,
                fill: fill,
            });
        };

        const y = (e, y0, y1, dur, fill = 'none') => {
            return e.animate([{ top: `${y0}` }, { top: `${y1}` }], {
                duration: dur,
                fill: fill,
            });
        };

        const rotate = (e, rotate1, rotate2, dur, fill = 'none') => {
            return e.animate(
                [
                    { transform: `rotate(${rotate1}deg)` },
                    { transform: `rotate(${rotate2}deg)` },
                ],
                { duration: dur, fill: fill },
            );
        };

        return { x, y, rotate };
    })();

    const background = (e, color1, color2, dur, fill = 'none') => {
        return e.animate([{ background: color1 }, { background: color2 }], {
            duration: dur,
            fill: fill,
        });
    };

    const opacity = (e, opacity1, opacity2, dur, fill = 'none') => {
        return e.animate([{ opacity: opacity1 }, { opacity: opacity2 }], {
            duration: dur,
            fill: fill,
        });
    };

    const custom = (e, dur, fill = 'none', ...keyFrames) => {
        return e.animate(...keyFrames, { duration: dur, fill: fill });
    };

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
};

const setNormalOpacity = (node) => {
    node.classList.remove('low-opacity');
};

const removeNullOpacity = (node) => {
    node.classList.remove('null-opacity');
};

const setNullOpacity = (node) => {
    node.classList.add('null-opacity');
};


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
};


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
};

const drawTimer = (e, dur, fill, ...keyFrames) => {
    return _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.custom(e, dur, fill, ...keyFrames);
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
};

const viewAccurateHit = (cell) => {
    const deck = cell.getLinkedDeck();
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.removeNullOpacity)(deck.getCellNode());
    deck.setTheHit();
    appendCrossSvg(deck);
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.drawCross.play();
};

const appendCrossSvg = (deck) => {
    let cross = (0,_models_elements_templates__WEBPACK_IMPORTED_MODULE_1__.Cross)();
    deck.getCellNode().classList.add('destroyed');
    deck.getCellNode().appendChild(cross.getSvg());
    cross.view();
};


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
    let leftLine = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line',
    );
    let rightLine = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line',
    );
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.appendChilds)(svg, leftLine, rightLine);
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(
        leftLine,
        _models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.CrossAttributes.line.concat(_models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.CrossAttributes.leftDiag),
    );
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(
        rightLine,
        _models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.CrossAttributes.line.concat(_models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.CrossAttributes.rightDiag),
    );
    return svg;
};

const viewCross = (svg) => {
    const animations = [
        (0,_animations_markers__WEBPACK_IMPORTED_MODULE_2__.drawCross)(svg, 200, 'forwards', [
            { strokeDashoffset: 'min(5vh ,2vw)' },
            { strokeDashoffset: 'min(0vh ,0vw)' },
        ]),
    ];
    return animations;
};


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
};

const viewLosePopup = () => {
    const popup = document.querySelector('.popup-lose');
    popup.style.opacity = 1;
    popup.style.visibility = 'visible';
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.lose.play();
};

const hiddenPopup = (popup) => {
    popup.style.opacity = 0;
    popup.style.visibility = 'hidden';
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.win.pause();
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.lose.pause();
};


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
/* harmony export */   viewDragShipForMobile: () => (/* binding */ viewDragShipForMobile),
/* harmony export */   viewShip: () => (/* binding */ viewShip),
/* harmony export */   viewShipOnRandomCell: () => (/* binding */ viewShipOnRandomCell)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/game */ "./src/models/game.js");
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/session */ "./src/models/session.js");
/* harmony import */ var _animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/changeVisible */ "./src/views/animations/changeVisible.js");






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
    if (_models_session__WEBPACK_IMPORTED_MODULE_3__.Session.manualMode) {
        if (___WEBPACK_IMPORTED_MODULE_0__.game.player.getShipyard().isEmpty()) {
            setTimeout(() => {
                closeManualMenu();
            }, 500);
        }
    }
};

const closeManualMenu = () => {
    const shipyard = document.querySelector('.shipyard');
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.removeHidden)(___WEBPACK_IMPORTED_MODULE_0__.game.ai.getGameboard().getNode());
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setHidden)(shipyard);
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
};

const setStandartVerticalShipDesign = (container, length) => {
    container.classList.remove('horizontal');
    container.classList.add('vertical');
    container.style.height = `min(${length * 5}vh,${length * 2}vw)`;
    container.style.width = `min(5vh,2vw)`;
    container.style.minHeight = `${length * 2}vh`;
    container.style.minWidth = `2vh`;
};

const resetShipStyle = (container) => {
    container.style.opacity = '1';
    container.style.border = 'min(0.1vh, 0.1vw) rgba(0, 0, 255, 1) solid';
};

const setDeathStyleOnShip = (container) => {
    container.style.opacity = '0.3';
    container.style.border = 'min(0.1vh, 0.1vw) rgba(255, 0, 0, 1) solid';
};


const viewDragShipForMobile = (cursorX, cursorY, container) => {
    let x = cursorX - _models_game__WEBPACK_IMPORTED_MODULE_2__.Coordinates.getXY().x;
    let y = cursorY - _models_game__WEBPACK_IMPORTED_MODULE_2__.Coordinates.getXY().y;
    container.style.setProperty('--y', `${y}px`);
    container.style.setProperty('--x', `${x}px`);
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
};

const viewTimer = (svg) => {
    const animations = [
        (0,_animations_timer__WEBPACK_IMPORTED_MODULE_2__.colorsTimer)(svg.lastChild, 15000, 'none', [
            { stroke: 'green' },
            { stroke: 'orange' },
            { stroke: 'red' },
        ]),
        (0,_animations_timer__WEBPACK_IMPORTED_MODULE_2__.drawTimer)(svg.lastChild, 15000, 'none', [
            { strokeDashoffset: '99vw' },
            { strokeDashoffset: '0vw' },
        ]),
    ];
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
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setHidden)(document.querySelector('.play'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setHidden)(document.querySelector('.footer'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setHidden)(document.querySelector('.tips'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.removeHidden)(document.querySelector('.exit'));
};

const viewInterfaceAfterEndGame = () => {
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.removeHidden)(document.querySelector('.play'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.removeHidden)(document.querySelector('.footer'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.removeHidden)(document.querySelector('.tips'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setHidden)(document.querySelector('.exit'));
};

const setPlayerMoveDesign = (ai, player) => {
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(ai.getGameboard().getNode().querySelector('.x-axis'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(ai.getGameboard().getNode().querySelector('.y-axis'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(ai.getGameboard().getNode().querySelector('.board'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(player.getGameboard().getNode().querySelector('.x-axis'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(player.getGameboard().getNode().querySelector('.y-axis'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(player.getGameboard().getNode().querySelector('.board'));
};

const setAiMoveDesign = (ai, player) => {
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(player.getGameboard().getNode().querySelector('.x-axis'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(player.getGameboard().getNode().querySelector('.y-axis'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(player.getGameboard().getNode().querySelector('.board'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(ai.getGameboard().getNode().querySelector('.x-axis'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(ai.getGameboard().getNode().querySelector('.y-axis'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(ai.getGameboard().getNode().querySelector('.board'));
};

const setMiniShipyardDesign = (shipyard) => {
    const decks = shipyard.getNode().querySelectorAll('.deck');
    const ships = shipyard.getNode().querySelectorAll('.ship');
    ships.forEach((ship) => {
        ship.classList.add('mini-ship');
    });
    decks.forEach((deck) => {
        deck.classList.add('mini-cell');
    });
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0Qyx1SUFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDhGQUE4RixVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZ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QUFhO0FBQ2pCLElBQUksd0VBQWE7QUFDakIsSUFBSSx3RUFBYTtBQUNqQjs7QUFFTztBQUNQLElBQUksMkVBQWdCO0FBQ3BCLElBQUksMkVBQWdCO0FBQ3BCLElBQUksMkVBQWdCO0FBQ3BCLElBQUksd0VBQWE7QUFDakIsSUFBSSx3RUFBYTtBQUNqQixJQUFJLHdFQUFhO0FBQ2pCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzcz84OWY2Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGlua3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yUGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JQb3B1cHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVyL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2FscGhhYmV0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9jZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2NlbGxIYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2VsZW1lbnRzL2F0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvZWxlbWVudHMvYXVkaW9FZmZlY3RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2VsZW1lbnRzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9nYW1lQ29uZmlnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9zZXNzaW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvc2hpcHlhcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvdGltZU1hbmlwdWxhdG9ycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy93YXRlckFyZWFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9tYXJrZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy90aW1lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2RyYWdBbmREcm9wL3NldERyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2RyYWdBbmREcm9wL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvYXhpcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9oaXRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvbWFya2Vycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3BvcHVwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvc2hpcHlhcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy90aW1lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL3ZpZXdzL2ltYWdlcy9kb3Quc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gICAgZm9udC1zaXplOiBtaW4oMnZoLCAydncpO1xuICAgIC0tYm9hcmQtd2lkdGg6IDA7XG4gICAgLS1ib2FyZC1oZWlnaHQ6IDA7XG4gICAgLS1jZWxsLXNpemU6IG1pbig1dmgsIDJ2dyk7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyIG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICByb3ctZ2FwOiBtaW4oMnZoLCAwLjh2dyk7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuc3BhbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAwLjR2dyk7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHBhZGRpbmc6IG1pbigydmgsIDAuOHZ3KTtcbn1cblxuLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLnRpcHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMnZoLCAwLjh2dyk7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLmV4aXQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uc2hpcHlhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcbiAgICByb3ctZ2FwOiBtaW4oNnZoLCAyLjR2dyk7XG4gICAgcGFkZGluZzogbWluKDJ2aCwgMC44dncpO1xuICAgIHdpZHRoOiBtaW4oNDB2aCwgMTZ2dyk7XG4gICAgaGVpZ2h0OiBtaW4oNDB2aCwgMTZ2dyk7XG4gICAgbWF4LXdpZHRoOiBtaW4oNTB2aCwgMjB2dyk7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2x1bW4tZ2FwOiBtaW4oNHZoLCAxLjZ2dyk7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLmJvYXJkX19heGlzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQ7XG4gICAgcm93LWdhcDogbWluKDJ2aCwgMC44dncpO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiBtaW4oNXZoLCAydncpO1xufVxuXG4uYXhpcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbn1cblxuLmJvYXJkLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ2F4aXMteCBheGlzLXggYXhpcy14J1xuICAgICAgICAnc2hpcHlhcmQgYXhpcy15IGJvYXJkJztcbn1cblxuLngtYXhpcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGF4aXMteDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksXG4gICAgICAgICAgICBtYXgodmFyKC0tY2VsbC1zaXplKSwgMnZoKSk7XG59XG5cbi55LWF4aXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBheGlzLXk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgMmZyKTtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi5ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgMmZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCAyZnIpO1xuICAgIGJvcmRlcjogbWluKDAuNXZoLCAwLjJ2dykgcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XG59XG5cbi5wbGF5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogYm9hcmQ7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiBtaW4oMTB2aCwgMTB2dyk7XG4gICAgaGVpZ2h0OiBtaW4oMTB2aCwgMTB2dyk7XG4gICAgbWluLXdpZHRoOiAydmg7XG4gICAgbWluLWhlaWdodDogMnZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE5LCAyMDIsIDQxLCAwLjcyNik7XG4gICAgYm9yZGVyOiBtaW4oMXZoLCAxdncpIHJnYigxMTksIDIwMiwgNDEpIHNvbGlkO1xuICAgIHotaW5kZXg6IDk5ODtcbn1cblxuLmFpLW1pbmktc2hpcHlhcmQsXG4ucGxheWVyLW1pbmktc2hpcHlhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgcm93LWdhcDogbWluKDJ2aCwgMC44dncpO1xuICAgIHBhZGRpbmc6IG1pbigzdmgsIDEuMnZ3KTtcbn1cblxuLmxvdy1vcGFjaXR5IHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5ibG9jayB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYXJrZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi5jZWxsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIG1pbi13aWR0aDogMnZoO1xuICAgIG1pbi1oZWlnaHQ6IDJ2aDtcbn1cblxuLm1pc3MtaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5kZXN0cm95ZWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyOiAxcHggcmVkIHNvbGlkO1xufVxuXG4ubGl2ZSB7fVxuXG4ueC1jZWxsLFxuLnktY2VsbCB7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5tYXJpbmUtc2VjdG9yIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlcjogbWluKDAuMXZoLCAwLjF2dykgcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XG59XG5cbi5zaGlwIHtcbiAgICAtLXg6IDBweDtcbiAgICAtLXk6IDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS14KSwgdmFyKC0teSkpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgYm9yZGVyOiBtaW4oMC4xdmgsIDAuMXZ3KSByZ2JhKDAsIDAsIDI1NSwgMSkgc29saWQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmRyYWdnYWJsZSB7fVxuXG4uaG9yaXpvbnRhbCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMmZyKTtcbn1cblxuLnZlcnRpY2FsIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAyZnIpO1xufVxuXG4uZGVjayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5kZWNrPnN2ZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5taW5pLXNoaXAge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQgIWltcG9ydGFudDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQgIWltcG9ydGFudDtcbn1cblxuLm1pbmktY2VsbCB7XG4gICAgbWluLXdpZHRoOiAxdmg7XG4gICAgbWluLWhlaWdodDogMXZoO1xuICAgIHdpZHRoOiBtaW4oMnZoLCAwLjh2dyk7XG4gICAgaGVpZ2h0OiBtaW4oMnZoLCAwLjh2dyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMSk7XG4gICAgYm9yZGVyOiBtaW4oMC4xdmgsIDAuMXZ3KSByZ2JhKDAsIDI1NSwgMjU1LCAxKSBzb2xpZDtcbn1cblxuLmZvb3RlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogbWluKDR2aCwgMS42dncpO1xufVxuXG4ucmFuZG9tLW1vZGUsXG4ubWFudWFsLW1vZGUge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsdWU7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmFuZG9tLW1vZGU6aG92ZXIsXG4ubWFudWFsLW1vZGU6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMTIyLCAyMzEsIDcyKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYigxMjIsIDIzMSwgNzIpO1xufVxuXG4udGltZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogbWluKDJ2aCwgMC44dncpO1xuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG59XG5cbi50aW1lcj5zdmcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG5cbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5udWxsLW9wYWNpdHkge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5wb3B1cC13aW4sXG4ucG9wdXAtbG9zZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbi1jb250ZW50KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLnRleHQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogbWluKDEwdmgsIDEwdncpO1xufVxuXG4ud2luLFxuLmxvc2Uge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDIwMDA7XG59XG5cbi5naWYtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiBtaW4oMTAwdmgsIDEwMHZ3KTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IG1pbig1NnZoLCAyMi40dncpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgICBvcGFjaXR5OiAwLjAxICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAxLjAwMDAxLzEpIHtcbiAgICAubWFpbiB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgfVxuXG4gICAgLnNoaXB5YXJkIHtcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAydmg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMS8xKSB7XG4gICAgLm1haW4ge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIH1cblxuICAgIC5haS1ib2FyZCB7XG4gICAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgIH1cbn1cblxuLmNyb3NzIHtcbiAgICBib3JkZXI6IDFweCByZWQgc29saWQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3Mvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix3QkFB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QUNJLDhDQUE4QztJQUNsRDs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiBtaW4oMnZoLCAydncpO1xcbiAgICAtLWJvYXJkLXdpZHRoOiAwO1xcbiAgICAtLWJvYXJkLWhlaWdodDogMDtcXG4gICAgLS1jZWxsLXNpemU6IG1pbig1dmgsIDJ2dyk7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyIG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICByb3ctZ2FwOiBtaW4oMnZoLCAwLjh2dyk7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogbWluKDF2aCwgMC40dncpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBwYWRkaW5nOiBtaW4oMnZoLCAwLjh2dyk7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnRpcHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IG1pbigydmgsIDAuOHZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLmV4aXQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaGlweWFyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWluLWNvbnRlbnQpO1xcbiAgICByb3ctZ2FwOiBtaW4oNnZoLCAyLjR2dyk7XFxuICAgIHBhZGRpbmc6IG1pbigydmgsIDAuOHZ3KTtcXG4gICAgd2lkdGg6IG1pbig0MHZoLCAxNnZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4oNDB2aCwgMTZ2dyk7XFxuICAgIG1heC13aWR0aDogbWluKDUwdmgsIDIwdncpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5kb2NrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogbWluKDR2aCwgMS42dncpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uYm9hcmRfX2F4aXMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50O1xcbiAgICByb3ctZ2FwOiBtaW4oMnZoLCAwLjh2dyk7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiBtaW4oNXZoLCAydncpO1xcbn1cXG5cXG4uYXhpcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLmJvYXJkLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ2F4aXMteCBheGlzLXggYXhpcy14J1xcbiAgICAgICAgJ3NoaXB5YXJkIGF4aXMteSBib2FyZCc7XFxufVxcblxcbi54LWF4aXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IGF4aXMteDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtd2lkdGgpLFxcbiAgICAgICAgICAgIG1heCh2YXIoLS1jZWxsLXNpemUpLCAydmgpKTtcXG59XFxuXFxuLnktYXhpcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogYXhpcy15O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCAyZnIpO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogYm9hcmQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgMmZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgMmZyKTtcXG4gICAgYm9yZGVyOiBtaW4oMC41dmgsIDAuMnZ3KSByZ2JhKDAsIDAsIDI1NSwgMC4yKSBzb2xpZDtcXG59XFxuXFxuLnBsYXkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogbWluKDEwdmgsIDEwdncpO1xcbiAgICBoZWlnaHQ6IG1pbigxMHZoLCAxMHZ3KTtcXG4gICAgbWluLXdpZHRoOiAydmg7XFxuICAgIG1pbi1oZWlnaHQ6IDJ2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTksIDIwMiwgNDEsIDAuNzI2KTtcXG4gICAgYm9yZGVyOiBtaW4oMXZoLCAxdncpIHJnYigxMTksIDIwMiwgNDEpIHNvbGlkO1xcbiAgICB6LWluZGV4OiA5OTg7XFxufVxcblxcbi5haS1taW5pLXNoaXB5YXJkLFxcbi5wbGF5ZXItbWluaS1zaGlweWFyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgcm93LWdhcDogbWluKDJ2aCwgMC44dncpO1xcbiAgICBwYWRkaW5nOiBtaW4oM3ZoLCAxLjJ2dyk7XFxufVxcblxcbi5sb3ctb3BhY2l0eSB7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmJsb2NrIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFya2VyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG1pbi13aWR0aDogMnZoO1xcbiAgICBtaW4taGVpZ2h0OiAydmg7XFxufVxcblxcbi5taXNzLWhpdCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL3ZpZXdzL2ltYWdlcy9kb3Quc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcblxcbi5kZXN0cm95ZWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IDFweCByZWQgc29saWQ7XFxufVxcblxcbi5saXZlIHt9XFxuXFxuLngtY2VsbCxcXG4ueS1jZWxsIHtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLm1hcmluZS1zZWN0b3Ige1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IG1pbigwLjF2aCwgMC4xdncpIHJnYmEoMCwgMCwgMjU1LCAwLjIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIC0teDogMHB4O1xcbiAgICAtLXk6IDBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0teCksIHZhcigtLXkpKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxuICAgIG1hcmdpbi10b3A6IC0xcHg7XFxuICAgIGJvcmRlcjogbWluKDAuMXZoLCAwLjF2dykgcmdiYSgwLCAwLCAyNTUsIDEpIHNvbGlkO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5kcmFnZ2FibGUge31cXG5cXG4uaG9yaXpvbnRhbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDJmcik7XFxufVxcblxcbi52ZXJ0aWNhbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDJmcik7XFxufVxcblxcbi5kZWNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLmRlY2s+c3ZnIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1pbmktc2hpcCB7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQgIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5taW5pLWNlbGwge1xcbiAgICBtaW4td2lkdGg6IDF2aDtcXG4gICAgbWluLWhlaWdodDogMXZoO1xcbiAgICB3aWR0aDogbWluKDJ2aCwgMC44dncpO1xcbiAgICBoZWlnaHQ6IG1pbigydmgsIDAuOHZ3KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMSk7XFxuICAgIGJvcmRlcjogbWluKDAuMXZoLCAwLjF2dykgcmdiYSgwLCAyNTUsIDI1NSwgMSkgc29saWQ7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogbWluKDR2aCwgMS42dncpO1xcbn1cXG5cXG4ucmFuZG9tLW1vZGUsXFxuLm1hbnVhbC1tb2RlIHtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibHVlO1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmFuZG9tLW1vZGU6aG92ZXIsXFxuLm1hbnVhbC1tb2RlOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigxMjIsIDIzMSwgNzIpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYigxMjIsIDIzMSwgNzIpO1xcbn1cXG5cXG4udGltZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogbWluKDJ2aCwgMC44dncpO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4udGltZXI+c3ZnIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm51bGwtb3BhY2l0eSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5wb3B1cC13aW4sXFxuLnBvcHVwLWxvc2Uge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW4tY29udGVudCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcXG4gICAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuLnRleHQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogbWluKDEwdmgsIDEwdncpO1xcbn1cXG5cXG4ud2luLFxcbi5sb3NlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDIwMDA7XFxufVxcblxcbi5naWYtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBtaW4oMTAwdmgsIDEwMHZ3KTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogbWluKDU2dmgsIDIyLjR2dyk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIG9wYWNpdHk6IDAuMDEgIWltcG9ydGFudDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDEuMDAwMDEvMSkge1xcbiAgICAubWFpbiB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICB9XFxuXFxuICAgIC5zaGlweWFyZCB7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAydmg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDEvMSkge1xcbiAgICAubWFpbiB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICB9XFxuXFxuICAgIC5haS1ib2FyZCB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgfVxcbn1cXG5cXG4uY3Jvc3Mge1xcbiAgICBib3JkZXI6IDFweCByZWQgc29saWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdhbWUgfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Nlc3Npb24nO1xuaW1wb3J0IHsgcmVtb3ZlSGlkZGVuLCBzZXRIaWRkZW4gfSBmcm9tICcuLi8uLi92aWV3cy9hbmltYXRpb25zL2NoYW5nZVZpc2libGUnO1xuaW1wb3J0IHsgdmlld1NoaXB5YXJkIH0gZnJvbSAnLi4vLi4vdmlld3Mvbm9kZXMvc2hpcHlhcmQnO1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yTGlua3MgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFudWFsTW9kZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFudWFsLW1vZGUnKTtcbiAgICBjb25zdCByYW5kb21Nb2RlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb20tbW9kZScpO1xuICAgIGNvbnN0IHNoaXB5YXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXB5YXJkJyk7XG5cbiAgICBjb25zdCBvcGVuTWFudWFsTW9kZSA9IG1hbnVhbE1vZGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgU2Vzc2lvbi5tYW51YWxNb2RlID0gdHJ1ZTtcbiAgICAgICAgZ2FtZS5wbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucmVzZXQoKTtcbiAgICAgICAgdmlld1NoaXB5YXJkKGdhbWUucGxheWVyLmdldFNoaXB5YXJkKCkpO1xuICAgICAgICBzZXRIaWRkZW4oZ2FtZS5haS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkpO1xuICAgICAgICByZW1vdmVIaWRkZW4oc2hpcHlhcmQpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb3BlblJhbmRvbU1vZGUgPSByYW5kb21Nb2RlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIFNlc3Npb24ubWFudWFsTW9kZSA9IGZhbHNlO1xuICAgICAgICByZW1vdmVIaWRkZW4oZ2FtZS5haS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkpO1xuICAgICAgICBzZXRIaWRkZW4oc2hpcHlhcmQpO1xuICAgICAgICBnYW1lLnBsYXllci5nZXRHYW1lYm9hcmQoKS5yYW5kb21GaWxsaW5nT2ZTaGlwcygpO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IGdhbWUgfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyBjbGlja0VmZmVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9lbGVtZW50cy9hdWRpb0VmZmVjdHMnO1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yUGxheUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheScpO1xuICAgIGNvbnN0IGNsaWNrID0gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY2xpY2tFZmZlY3QucGxheSgpO1xuICAgICAgICBnYW1lLnBsYXkoKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JFeGl0QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0Jyk7XG5cbiAgICBjb25zdCBjbGljayA9IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNsaWNrRWZmZWN0LnBsYXkoKTtcbiAgICAgICAgZ2FtZS5lbmQoKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JDZWxscyA9ICgpID0+IHtcbiAgICBjb25zdCBjZWxscyA9IGdhbWUuYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcigpO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGNlbGwuZ2V0Q2VsbE5vZGUoKTtcbiAgICAgICAgbm9kZS5zdHlsZS56SW5kZXggPSAxMDAwO1xuICAgICAgICBjb25zdCBjbGljayA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZ2FtZS5nYW1lSGFuZGxlci5jaGVja0NlbGwoY2VsbCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IGdhbWUgfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyBoaWRkZW5Qb3B1cCB9IGZyb20gJy4uLy4uL3ZpZXdzL25vZGVzL3BvcHVwcyc7XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNmb3JQb3B1cHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgcG9wdXBzLmZvckVhY2goKHBvcHVwKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsaWNrID0gcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaGlkZGVuUG9wdXAocG9wdXApO1xuICAgICAgICAgICAgZ2FtZS5lbmQoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgQ29vcmRpbmF0ZXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2FtZSc7XG5pbXBvcnQgeyBTZXNzaW9uLCByZXNldFNlc3Npb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvc2Vzc2lvbic7XG5pbXBvcnQgeyB2aWV3RHJhZ1NoaXBGb3JNb2JpbGUsIHZpZXdTaGlwIH0gZnJvbSAnLi4vLi4vdmlld3Mvbm9kZXMvc2hpcCc7XG5pbXBvcnQgeyBzaGlwRHJhZ0VuZCB9IGZyb20gJy4uL3NoaXAnO1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yU2hpcHMgPSAoc2hpcHMpID0+IHtcbiAgICBjb25zdCBib3JkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlY2tzID0gc2hpcC5nZXRCb2R5KCk7XG4gICAgICAgIGRlY2tzLmZvckVhY2goKGRlY2spID0+IHtcbiAgICAgICAgICAgIGRlY2suZ2V0Q2VsbE5vZGUoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgU2Vzc2lvbi5pbmRleCA9IGRlY2suZ2V0TnVtYmVyKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZGVjay5nZXRDZWxsTm9kZSgpLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQgfSA9IGRlY2suZ2V0Q2VsbE5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlclggPSBsZWZ0ICsgd2lkdGggLyAyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VudGVyWSA9IHRvcCArIGhlaWdodCAvIDJcbiAgICAgICAgICAgICAgICBDb29yZGluYXRlcy5zZXRDb29yZGluYXRlcyhjZW50ZXJYLCBjZW50ZXJZKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkZWNrLmdldENlbGxOb2RlKCkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEV2ZW50KCdtb3VzZWRvd24nKTtcbiAgICAgICAgICAgICAgICBkZWNrLmdldENlbGxOb2RlKCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2hpcC5nZXRDb250YWluZXIoKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5nZXRIZWFkKCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIFNlc3Npb24uY3VycmVudEVsZW1lbnQgPSBzaGlwLmdldEhlYWQoKS5nZXRDZWxsTm9kZSgpO1xuICAgICAgICAgICAgICAgIHNoaXAub3JpZW50YXRpb25Td2l0Y2goKTtcbiAgICAgICAgICAgICAgICBsZXQgaXNWaWV3ID0gdmlld1NoaXAoc2hpcCwgc2hpcC5nZXRIZWFkKCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzVmlldykge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLnNldE9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5vcmllbnRhdGlvblN3aXRjaCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc2V0U2Vzc2lvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoYGRyYWdzdGFydGAsIChldnQpID0+IHtcbiAgICAgICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmFkZChgc2VsZWN0ZWRgKTtcbiAgICAgICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcCA9IHNoaXA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXAuZ2V0Q29udGFpbmVyKCkuYWRkRXZlbnRMaXN0ZW5lcihgZHJhZ2VuZGAsIChldnQpID0+IHtcbiAgICAgICAgICAgIENvb3JkaW5hdGVzLnJlc2V0KCk7XG4gICAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoYHNlbGVjdGVkYCk7XG4gICAgICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLnN0eWxlLnNldFByb3BlcnR5KCctLXknLCBgMHB4YCk7XG4gICAgICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLnN0eWxlLnNldFByb3BlcnR5KCctLXgnLCBgMHB4YCk7XG4gICAgICAgICAgICBzaGlwRHJhZ0VuZCgpO1xuICAgICAgICAgICAgcmVzZXRTZXNzaW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXAuZ2V0Q29udGFpbmVyKCkuYWRkRXZlbnRMaXN0ZW5lcihgdG91Y2hzdGFydGAsIChldnQpID0+IHtcbiAgICAgICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcCA9IHNoaXA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXAuZ2V0Q29udGFpbmVyKCkuYWRkRXZlbnRMaXN0ZW5lcihgdG91Y2hlbmRgLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBsZXQgZXZlbnQgPSBuZXcgRHJhZ0V2ZW50KCdkcmFnZW5kJyk7XG4gICAgICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoYHRvdWNobW92ZWAsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgY3Vyc29yWCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgbGV0IGN1cnNvclkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRFbGVtZW50Rm9yTW9iaWxlRHJhZyhjdXJzb3JYLCBjdXJzb3JZKTtcbiAgICAgICAgICAgIHZpZXdEcmFnU2hpcEZvck1vYmlsZShjdXJzb3JYLCBjdXJzb3JZLCBzaGlwLmdldENvbnRhaW5lcigpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBib3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihgZHJhZ292ZXJgLCAoZXZ0KSA9PiB7XG4gICAgICAgIFNlc3Npb24uY3VycmVudEVsZW1lbnQgPSBldnQudGFyZ2V0O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2V0Q3VycmVudEVsZW1lbnRGb3JNb2JpbGVEcmFnID0gKGN1cnNvclgsIGN1cnNvclkpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChjdXJzb3JYLCBjdXJzb3JZKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbWFyaW5lLXNlY3RvcicpKSB7XG4gICAgICAgICAgICAgICAgU2Vzc2lvbi5jdXJyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufTtcbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9nYW1lQ29uZmlnJztcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICcuLi9tb2RlbHMvc2Vzc2lvbic7XG5pbXBvcnQgeyB2aWV3U2hpcCB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL3NoaXAnO1xuXG5leHBvcnQgY29uc3Qgc2hpcERyYWdFbmQgPSAoKSA9PiB7XG4gICAgbGV0IGlzTW92ZWFibGUgPSBmYWxzZTtcbiAgICBsZXQgaXNBbHRlck1vdmFibGUgPSBmYWxzZTtcbiAgICBsZXQgYm9keSA9IFNlc3Npb24uYWN0aXZlU2hpcC5nZXRCb2R5KCk7XG4gICAgXG4gICAgaWYgKFNlc3Npb24uY3VycmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgaXNNb3ZlYWJsZSA9IFNlc3Npb24uY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGBtYXJpbmUtc2VjdG9yYCk7XG4gICAgICAgIGlzQWx0ZXJNb3ZhYmxlID0gU2Vzc2lvbi5jdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoYGRlY2tgKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzTW92ZWFibGUgJiYgIWlzQWx0ZXJNb3ZhYmxlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNNb3ZlYWJsZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvbmZpZy5HYW1lYm9hcmQuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29uZmlnLkdhbWVib2FyZC53aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0U3RydWN0ZWRDb250YWluZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgW2pdW2ldLmdldENlbGxOb2RlKCkgPT09IFNlc3Npb24uY3VycmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFkZFNoaXBPbkJvYXJkKFNlc3Npb24uaW5kZXgsIGosIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNBbHRlck1vdmFibGUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2R5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYm9keVtpXS5nZXRDZWxsTm9kZSgpID09PSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgU2Vzc2lvbi5kb3VibGVJbmRleCA9IFNlc3Npb24uaW5kZXggLSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChTZXNzaW9uLmRvdWJsZUluZGV4ICE9PSAnc2hpcCcpIHtcbiAgICAgICAgICAgIGxldCBoZWFkID0gU2Vzc2lvbi5hY3RpdmVTaGlwLmdldEhlYWQoKS5nZXRDZWxsTm9kZSgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25maWcuR2FtZWJvYXJkLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBDb25maWcuR2FtZWJvYXJkLndpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0U3RydWN0ZWRDb250YWluZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtqXVtpXS5nZXRDZWxsTm9kZSgpID09PSBoZWFkXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFkZFNoaXBPbkJvYXJkKFNlc3Npb24uZG91YmxlSW5kZXgsIGosIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuY29uc3QgYWRkU2hpcE9uQm9hcmQgPSAoaW5kZXgsIHksIHgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYmJiY3h2eGN4Y3gnKVxuICAgIGxldCBkYXRhID0gZ2V0RGF0YShpbmRleCwgeSwgeCk7XG4gICAgcmV0dXJuIHZpZXdTaGlwT25Cb2FyZChkYXRhKTtcbn07XG5cbmNvbnN0IGdldERhdGEgPSAoaW5kZXgsIHgsIHkpID0+IHtcbiAgICByZXR1cm4gU2Vzc2lvbi5hY3RpdmVTaGlwLmlzSG9yaXpvbnRhbCgpXG4gICAgICAgID8geyB4OiB4LCB5OiB5IC0gaW5kZXggfVxuICAgICAgICA6IHsgeDogeCAtIGluZGV4LCB5OiB5IH07XG59O1xuXG5jb25zdCB2aWV3U2hpcE9uQm9hcmQgPSAoZGF0YSkgPT4ge1xuICAgIHJldHVybiB2aWV3U2hpcChcbiAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwLFxuICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAuZ2V0Qm9hcmQoKS5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpW2RhdGEueF1bZGF0YS55XSxcbiAgICApO1xufTtcbiIsImV4cG9ydCBjb25zdCByYW5kb21JbnRGcm9tSW50ZXJ2YWwgPSAobWluLCBtYXgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDaGlsZHMgPSAobm9kZSkgPT4ge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGFkZENsYXNzZXMgPSAobm9kZSwgLi4uY2xhc3NlcykgPT4ge1xuICAgIGZvciAobGV0IGN1ckNsYXNzIG9mIGNsYXNzZXMpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGN1ckNsYXNzKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0QXR0cmlidXRlcyA9IChlLCBhdHJzKSA9PiB7XG4gICAgZm9yIChsZXQgYXRyIG9mIGF0cnMpIHtcbiAgICAgICAgZS5zZXRBdHRyaWJ1dGUoYXRyLm5hbWUsIGF0ci52YWwpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRDaGlsZHMgPSAobm9kZSwgLi4uY2hpbGRzKSA9PiB7XG4gICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRzKSB7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9tb2RlbHMvZ2FtZSc7XG5pbXBvcnQgJy4vdmlld3Mvc3R5bGVzL21haW4uY3NzJztcblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBHYW1lKCk7XG5nYW1lLnN0YXJ0KCk7XG4iLCJjb25zdCBBbHBoYWJldCA9IChmaXJzdENoYXJDb2RlLCBsYXN0Q2hhckNvZGUpID0+IHtcbiAgICBjb25zdCBsb25nID0gbGFzdENoYXJDb2RlIC0gZmlyc3RDaGFyQ29kZSArIDE7XG4gICAgY29uc3QgY29kZXMgPSBBcnJheS5mcm9tKEFycmF5KGxvbmcpLmtleXMoKSwgKHgpID0+IHggKyBmaXJzdENoYXJDb2RlKTtcblxuICAgIGNvbnN0IGlzVGhpc0FscGhhYmV0ID0gKGNoYXJDb2RlKSA9PiB7XG4gICAgICAgIGlmIChjaGFyQ29kZSA+PSBmaXJzdENoYXJDb2RlICYmIGNoYXJDb2RlIDw9IGxhc3RDaGFyQ29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBmaXJzdENoYXJDb2RlLCBsYXN0Q2hhckNvZGUsIGxvbmcsIGlzVGhpc0FscGhhYmV0LCBjb2RlcyB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEFscGhhYmV0cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZW5nID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbHBoYWJldCA9IEFscGhhYmV0KDk3LCAxMjIpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhbHBoYWJldCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJ1cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSBBbHBoYWJldCgxMDcyLCAxMTAzKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWxwaGFiZXQpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBlbmcsIHJ1cyB9O1xufSkoKTtcbiIsImltcG9ydCB7IHJlbW92ZUNoaWxkcyB9IGZyb20gJy4uL2hlbHBlci9oZWxwZXInO1xuaW1wb3J0IHsgc2V0Tm9ybWFsT3BhY2l0eSB9IGZyb20gJy4uL3ZpZXdzL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZSc7XG5pbXBvcnQgeyBnZXROb2RlIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvZmFjdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBDZWxsID0gKHggPSAtMSwgeSA9IC0xLCBuYW1lID0gJ2NlbGwnKSA9PiB7XG4gICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgIGxldCBwYXJlbnQgPSAnZnJlZSc7XG4gICAgbGV0IG5vZGUgPSBnZXROb2RlKG5hbWUsICdjZWxsJyk7XG4gICAgbGV0IGxpbmtlZERlY2sgPSAnZnJlZSc7XG5cbiAgICBjb25zdCBzZXRMaW5rZWREZWNrID0gKGRlY2spID0+IHtcbiAgICAgICAgbGlua2VkRGVjayA9IGRlY2s7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldExpbmtlZERlY2sgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsaW5rZWREZWNrO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRUaGVIaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdCA9IHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzSGl0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaGl0O1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRQYXJlbnQgPSAoblBhcmVudCkgPT4ge1xuICAgICAgICBwYXJlbnQgPSBuUGFyZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENlbGxOb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0WFkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHgsIHkgfTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0WFkgPSAobngsIG55KSA9PiB7XG4gICAgICAgIHggPSBueDtcbiAgICAgICAgeSA9IG55O1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgaGl0ID0gZmFsc2U7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbWlzcy1oaXQnKTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdkZXN0cm95ZWQnKTtcbiAgICAgICAgcmVtb3ZlQ2hpbGRzKG5vZGUpO1xuICAgICAgICBzZXROb3JtYWxPcGFjaXR5KG5vZGUpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRUaGVIaXQsXG4gICAgICAgIGlzSGl0LFxuICAgICAgICBzZXRQYXJlbnQsXG4gICAgICAgIGdldFBhcmVudCxcbiAgICAgICAgZ2V0Q2VsbE5vZGUsXG4gICAgICAgIGdldFhZLFxuICAgICAgICBzZXRYWSxcbiAgICAgICAgc2V0TGlua2VkRGVjayxcbiAgICAgICAgZ2V0TGlua2VkRGVjayxcbiAgICAgICAgcmVzZXQsXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBEZWNrID0gKG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IENlbGwoLTEsIC0xLCAnZGVjaycpO1xuXG4gICAgY29uc3QgZ2V0TnVtYmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgZ2V0TnVtYmVyIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IE1hcmluZVNlY3RvciA9ICh5LCB4KSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gQ2VsbCh5LCB4LCAnbWFyaW5lLXNlY3RvcicpO1xuICAgIGxldCBvY2N1cGFudCA9ICdmcmVlJztcblxuICAgIGNvbnN0IG9jY3VweSA9IChuT2NjdXBhbnQpID0+IHtcbiAgICAgICAgb2NjdXBhbnQgPSBuT2NjdXBhbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgICAgICBvY2N1cGFudCA9ICdmcmVlJztcbiAgICAgICAgcHJvdG90eXBlLnJlc2V0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzRnJlZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9jY3VwYW50ID09PSAnZnJlZSc7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE9jY3VwYW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb2NjdXBhbnQ7XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyBpc0ZyZWUsIGNsZWFyLCBvY2N1cHksIGdldE9jY3VwYW50IH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCBDZWxsSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBnZXRCZWZvcmUgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50W3ldWy0teF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50W3ldWysreF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0QWZ0ZXIgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50W3ldWysreF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50W3ldWy0teF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0T3ZlciA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVt4XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVt4XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRVbmRlciA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVt4XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVt4XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXREaWFnMSA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVstLXhdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldWysreF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RGlhZzIgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1bKyt4XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVstLXhdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERpYWczID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldWysreF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1bLS14XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXREaWFnNCA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVstLXhdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldWysreF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q2VsbEFyb3VuZEFyZWEgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIGxldCBjZWxscyA9IFtdO1xuICAgICAgICBjZWxscy5wdXNoKGdldEJlZm9yZSh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXRBZnRlcih4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXRPdmVyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldFVuZGVyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWcxKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWcyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWczKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWc0KHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscyA9IGNlbGxzLmZpbHRlcigoY2VsbCkgPT4gY2VsbCAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREaWFkcyA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgbGV0IGNlbGxzID0gW107XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzEoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzIoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzMoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzQoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzID0gY2VsbHMuZmlsdGVyKChjZWxsKSA9PiBjZWxsICE9PSB1bmRlZmluZWQpO1xuICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldENlbGxBcm91bmRBcmVhLCBnZXREaWFkcyB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBDcm9zc0F0dHJpYnV0ZXMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGxpbmUgPSBbXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZScsIHZhbDogJ3JlZCcgfSxcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlLXdpZHRoJywgdmFsOiAnNSUnIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS1saW5lY2FwJywgdmFsOiAncm91bmQnIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS1kYXNoYXJyYXknLCB2YWw6ICcxMjAlJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2UtZGFzaG9mZnNldCcsIHZhbDogJzEyMCUnIH0sXG4gICAgXTtcbiAgICBjb25zdCBsZWZ0RGlhZyA9IFtcbiAgICAgICAgeyBuYW1lOiAneDEnLCB2YWw6ICcxMCUnIH0sXG4gICAgICAgIHsgbmFtZTogJ3kxJywgdmFsOiAnMTAlJyB9LFxuICAgICAgICB7IG5hbWU6ICd4MicsIHZhbDogJzkwJScgfSxcbiAgICAgICAgeyBuYW1lOiAneTInLCB2YWw6ICc5MCUnIH0sXG4gICAgXTtcbiAgICBjb25zdCByaWdodERpYWcgPSBbXG4gICAgICAgIHsgbmFtZTogJ3gyJywgdmFsOiAnMTAlJyB9LFxuICAgICAgICB7IG5hbWU6ICd5MicsIHZhbDogJzkwJScgfSxcbiAgICAgICAgeyBuYW1lOiAneDEnLCB2YWw6ICc5MCUnIH0sXG4gICAgICAgIHsgbmFtZTogJ3kxJywgdmFsOiAnMTAlJyB9LFxuICAgIF07XG4gICAgcmV0dXJuIHsgbGluZSwgbGVmdERpYWcsIHJpZ2h0RGlhZyB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IEhvcml6b250YWxMaW5lID0gKCgpID0+IHtcbiAgICBjb25zdCBob3Jpem9udGFsID0gW1xuICAgICAgICB7IG5hbWU6ICdzdHJva2UnLCB2YWw6ICdyZWQnIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS13aWR0aCcsIHZhbDogJ21pbigzdmggLDN2dyknIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS1saW5lY2FwJywgdmFsOiAncm91bmQnIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS1kYXNoYXJyYXknLCB2YWw6ICcxMDB2dycgfSxcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlLWRhc2hvZmZzZXQnLCB2YWw6ICcxMDB2dycgfSxcbiAgICAgICAgeyBuYW1lOiAneDEnLCB2YWw6ICcwdncnIH0sXG4gICAgICAgIHsgbmFtZTogJ3kxJywgdmFsOiAnMHZ3JyB9LFxuICAgICAgICB7IG5hbWU6ICd4MicsIHZhbDogJzEwMHZ3JyB9LFxuICAgICAgICB7IG5hbWU6ICd5MicsIHZhbDogJzB2dycgfSxcbiAgICBdO1xuICAgIHJldHVybiB7IGhvcml6b250YWwgfTtcbn0pKCk7XG4iLCJpbXBvcnQgY3Jvc3NBdWRpbyBmcm9tICcuLi8uLi92aWV3cy9hdWRpby9jcm9zcy5tcDMnO1xuaW1wb3J0IG1pc3NIaXQgZnJvbSAnLi4vLi4vdmlld3MvYXVkaW8vc2hvdC5tcDMnO1xuaW1wb3J0IGJvb21TaGlwIGZyb20gJy4uLy4uL3ZpZXdzL2F1ZGlvL2Jvb20ubXAzJztcbmltcG9ydCBjbGljayBmcm9tICcuLi8uLi92aWV3cy9hdWRpby9jbGlja1BsYXkubXAzJztcbmltcG9ydCB0aW1lciBmcm9tICcuLi8uLi92aWV3cy9hdWRpby90aW1lci5tcDMnO1xuaW1wb3J0IHdpblNvdW5kIGZyb20gJy4uLy4uL3ZpZXdzL2F1ZGlvL3dpbi5tcDMnO1xuaW1wb3J0IGxvc2VTb3VuZCBmcm9tICcuLi8uLi92aWV3cy9hdWRpby9sb3NlLm1wMyc7XG5cbmV4cG9ydCBjb25zdCBkcmF3Q3Jvc3MgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhjcm9zc0F1ZGlvKTtcbiAgICBhdWRpby5wbGF5YmFja1JhdGUgPSAzO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDAuNTtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3QgbWlzc0VmZmVjdCA9ICgoKSA9PiB7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKG1pc3NIaXQpO1xuICAgIGF1ZGlvLnBsYXliYWNrUmF0ZSA9IDI7XG4gICAgYXVkaW8udm9sdW1lID0gMC40O1xuICAgIHJldHVybiBhdWRpbztcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBraWxsU2hpcEVmZmVjdCA9ICgoKSA9PiB7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKGJvb21TaGlwKTtcbiAgICBhdWRpby52b2x1bWUgPSAwLjI7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGNsaWNrRWZmZWN0ID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oY2xpY2spO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDE7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IHRpbWVyRWZmZWN0ID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8odGltZXIpO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDE7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IHdpbiA9ICgoKSA9PiB7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKHdpblNvdW5kKTtcbiAgICBhdWRpby52b2x1bWUgPSAxO1xuICAgIHJldHVybiBhdWRpbztcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBsb3NlID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8obG9zZVNvdW5kKTtcbiAgICBhdWRpby52b2x1bWUgPSAxO1xuICAgIHJldHVybiBhdWRpbztcbn0pKCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVDcm9zc1NWRywgdmlld0Nyb3NzIH0gZnJvbSAnLi4vLi4vdmlld3Mvbm9kZXMvbWFya2Vycyc7XG5pbXBvcnQgeyBjcmVhdGVUaW1lclNWRywgdmlld1RpbWVyIH0gZnJvbSAnLi4vLi4vdmlld3Mvbm9kZXMvdGltZXInO1xuXG5leHBvcnQgY29uc3QgVGVtcGxhdGUgPSAoc3ZnKSA9PiB7XG4gICAgbGV0IGFuaW1hdGlvbnM7XG4gICAgY29uc3QgZ2V0U3ZnID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgYW5pbWF0aW9ucy5mb3JFYWNoKChhbmltYXRpb24pID0+IHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi5maW5pc2goKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEFuaW1hdGlvbnMgPSAodmFsKSA9PiB7XG4gICAgICAgIGFuaW1hdGlvbnMgPSB2YWw7XG4gICAgfTtcblxuICAgIHJldHVybiB7IHNldEFuaW1hdGlvbnMsIGdldFN2ZywgYW5pbWF0aW9ucywgcmVzZXQgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBDcm9zcyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBUZW1wbGF0ZShjcmVhdGVDcm9zc1NWRygpKTtcblxuICAgIGNvbnN0IHZpZXcgPSAoKSA9PiB7XG4gICAgICAgIHByb3RvdHlwZS5zZXRBbmltYXRpb25zKHZpZXdDcm9zcyhwcm90b3R5cGUuZ2V0U3ZnKCkpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IHZpZXcgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgVGltZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gVGVtcGxhdGUoY3JlYXRlVGltZXJTVkcoKSk7XG5cbiAgICBjb25zdCB2aWV3ID0gKCkgPT4ge1xuICAgICAgICBwcm90b3R5cGUuc2V0QW5pbWF0aW9ucyh2aWV3VGltZXIocHJvdG90eXBlLmdldFN2ZygpKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyB2aWV3IH0pO1xufTtcbiIsImltcG9ydCB7IHNldExpc3RlbmVyc0ZvckxpbmtzIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckxpbmtzJztcbmltcG9ydCB7XG4gICAgc2V0TGlzdGVuZXJzRm9yQ2VsbHMsXG4gICAgc2V0TGlzdGVuZXJzRm9yRXhpdEJ1dHRvbixcbiAgICBzZXRMaXN0ZW5lcnNGb3JQbGF5QnV0dG9uLFxufSBmcm9tICcuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yUGxheSc7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNmb3JQb3B1cHMgfSBmcm9tICcuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yUG9wdXBzJztcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvclNoaXBzIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclNoaXBzJztcbmltcG9ydCB7XG4gICAgcmVtb3ZlSGlkZGVuLFxuICAgIHNldEhpZGRlbixcbiAgICBzZXRMb3dPcGFjaXR5LFxufSBmcm9tICcuLi92aWV3cy9hbmltYXRpb25zL2NoYW5nZVZpc2libGUnO1xuaW1wb3J0IHsgdmlld0FjY3VyYXRlSGl0LCB2aWV3TWlzc0hpdCB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL2hpdHMnO1xuaW1wb3J0IHsgdmlld0xvc2VQb3B1cCwgdmlld1dpblBvcHVwIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvcG9wdXBzJztcbmltcG9ydCB7IHZpZXdQcm9maWxlIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvcHJvZmlsZSc7XG5pbXBvcnQgeyB2aWV3U2hpcHlhcmQgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9zaGlweWFyZCc7XG5pbXBvcnQge1xuICAgIGhpZGRlbkludGVyZmFjZUJlZm9yZVN0YXJ0UGxheSxcbiAgICBzZXRBaU1vdmVEZXNpZ24sXG4gICAgc2V0TWluaVNoaXB5YXJkRGVzaWduLFxuICAgIHNldFBsYXllck1vdmVEZXNpZ24sXG4gICAgdmlld0ludGVyZmFjZUFmdGVyRW5kR2FtZSxcbn0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvdWknO1xuaW1wb3J0IHsgQ2VsbEhhbmRsZXIgfSBmcm9tICcuL2NlbGxIYW5kbGVyJztcbmltcG9ydCB7IGtpbGxTaGlwRWZmZWN0LCBtaXNzRWZmZWN0IH0gZnJvbSAnLi9lbGVtZW50cy9hdWRpb0VmZmVjdHMnO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4vcGxheWVyJztcbmltcG9ydCB7IFRpbWVNYW5pcHVsYXRvcnMgfSBmcm9tICcuL3RpbWVNYW5pcHVsYXRvcnMnO1xuXG5leHBvcnQgY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgICBsZXQgcGxheWVyID0gUHJvZmlsZSgxLCAnUGxheWVyJywgJ3BsYXllci1ib2FyZCcsICcuYWktbWluaS1zaGlweWFyZCcpO1xuICAgIGxldCBhaSA9IFByb2ZpbGUoMCwgJ0FJJywgJ2FpLWJvYXJkJywgJy5wbGF5ZXItbWluaS1zaGlweWFyZCcpO1xuICAgIGNvbnN0IHRpbWVNYW5pcHVsYXRvcnMgPSBUaW1lTWFuaXB1bGF0b3JzKCk7XG4gICAgY29uc3QgZ2FtZUhhbmRsZXIgPSBHYW1lSGFuZGxlcihhaSwgcGxheWVyLCB0aW1lTWFuaXB1bGF0b3JzKTtcblxuICAgIGNvbnN0IHZpZXdEZWZhdWxJbnRlcmZhY2VzID0gKCkgPT4ge1xuICAgICAgICB2aWV3UHJvZmlsZShwbGF5ZXIpO1xuICAgICAgICB2aWV3UHJvZmlsZShhaSk7XG4gICAgICAgIHZpZXdTaGlweWFyZChwbGF5ZXIuZ2V0U2hpcHlhcmQoKSk7XG4gICAgICAgIHZpZXdTaGlweWFyZChwbGF5ZXIuZ2V0TWluaVNoaXB5YXJkKCkpO1xuICAgICAgICB2aWV3U2hpcHlhcmQoYWkuZ2V0TWluaVNoaXB5YXJkKCkpO1xuICAgICAgICBzZXRNaW5pU2hpcHlhcmREZXNpZ24ocGxheWVyLmdldE1pbmlTaGlweWFyZCgpKTtcbiAgICAgICAgc2V0TWluaVNoaXB5YXJkRGVzaWduKGFpLmdldE1pbmlTaGlweWFyZCgpKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0RGVmYXVsdExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yU2hpcHMocGxheWVyLmdldFNoaXB5YXJkKCkuZ2V0QWxsU2hpcHMoKSk7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckxpbmtzKCk7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvclBsYXlCdXR0b24oKTtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yRXhpdEJ1dHRvbigpO1xuICAgICAgICBzZXRMaXN0ZW5lcnNmb3JQb3B1cHMoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0R2FtZVBsYXlMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckNlbGxzKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBzZXREZWZhdWx0TGlzdGVuZXJzKCk7XG4gICAgICAgIHZpZXdEZWZhdWxJbnRlcmZhY2VzKCk7XG4gICAgICAgIGdhbWVIYW5kbGVyLmZpbGxCb2FyZHNUb1JhbmRvbVNoaXBzKCk7XG4gICAgICAgIGFpLmdldEdhbWVib2FyZCgpLmhpZGRlblNoaXBzKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYXkgPSAoKSA9PiB7XG4gICAgICAgIGdhbWVIYW5kbGVyLnNldERlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgICBzZXRHYW1lUGxheUxpc3RlbmVycygpO1xuICAgICAgICBoaWRkZW5JbnRlcmZhY2VCZWZvcmVTdGFydFBsYXkoKTtcbiAgICAgICAgcGxheUdhbWVTdGF0ZSgpO1xuICAgICAgICByZW1vdmVIaWRkZW4oYWkuZ2V0TWluaVNoaXB5YXJkKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgcmVtb3ZlSGlkZGVuKHBsYXllci5nZXRNaW5pU2hpcHlhcmQoKS5nZXROb2RlKCkpO1xuICAgICAgICBnYW1lSGFuZGxlci5wbGF5ZXJNb3ZlKCk7XG4gICAgICAgIHRpbWVNYW5pcHVsYXRvcnMuc2V0VGltZU9mVGhlTW92ZSgpO1xuICAgICAgICBzZXRNaW5pU2hpcHlhcmREZXNpZ24ocGxheWVyLmdldE1pbmlTaGlweWFyZCgpKTtcbiAgICAgICAgc2V0TWluaVNoaXB5YXJkRGVzaWduKGFpLmdldE1pbmlTaGlweWFyZCgpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZW5kID0gKCkgPT4ge1xuICAgICAgICBzZXRIaWRkZW4oYWkuZ2V0TWluaVNoaXB5YXJkKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgc2V0SGlkZGVuKHBsYXllci5nZXRNaW5pU2hpcHlhcmQoKS5nZXROb2RlKCkpO1xuICAgICAgICBhaS5nZXRNaW5pU2hpcHlhcmQoKS5yZXNldCgpO1xuICAgICAgICBwbGF5ZXIuZ2V0TWluaVNoaXB5YXJkKCkucmVzZXQoKTtcbiAgICAgICAgdGltZU1hbmlwdWxhdG9ycy5yZXNldCgpO1xuICAgICAgICB2aWV3SW50ZXJmYWNlQWZ0ZXJFbmRHYW1lKCk7XG4gICAgICAgIGVuZEdhbWVTdGF0ZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGF5R2FtZVN0YXRlID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgICAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuYmxvY2tTaGlwcygpO1xuICAgIH07XG5cbiAgICBjb25zdCBlbmRHYW1lU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKS5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0Jyk7XG4gICAgICAgIGFpLmdldEdhbWVib2FyZCgpLmJsb2NrKCk7XG4gICAgICAgIGFpLmdldEdhbWVib2FyZCgpLnJlc2V0KCk7XG4gICAgICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS51bmJsb2NrU2hpcHMoKTtcbiAgICAgICAgcGxheWVyLmdldEdhbWVib2FyZCgpLnJlc2V0KCk7XG4gICAgICAgIGdhbWVIYW5kbGVyLmZpbGxCb2FyZHNUb1JhbmRvbVNoaXBzKCk7XG4gICAgICAgIGFpLmdldEdhbWVib2FyZCgpLmhpZGRlblNoaXBzKCk7XG4gICAgICAgIHNldEFpTW92ZURlc2lnbihhaSwgcGxheWVyKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgc3RhcnQsIHBsYXksIGVuZCwgYWksIHBsYXllciwgZ2FtZUhhbmRsZXIgfTtcbn07XG5cbmNvbnN0IEdhbWVIYW5kbGVyID0gKGFpLCBwbGF5ZXIsIHRpbWVNYW5pcHVsYXRvcnMpID0+IHtcbiAgICBsZXQgbW92ZTtcbiAgICBsZXQgcGxheWVyQ2VsbHMgPSBbLi4ucGxheWVyLmdldEdhbWVib2FyZCgpLmdldFVuc3RydWN0ZWRDb250YWluZXIoKV07XG4gICAgbGV0IGFpQ2VsbHMgPSBbLi4uYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcigpXTtcblxuICAgIGNvbnN0IHNldERlZmF1bHRTZXR0aW5ncyA9ICgpID0+IHtcbiAgICAgICAgbW92ZSA9ICdwbGF5ZXInO1xuICAgICAgICBwbGF5ZXJDZWxscyA9IFsuLi5wbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcigpXTtcbiAgICAgICAgYWlDZWxscyA9IFsuLi5haS5nZXRHYW1lYm9hcmQoKS5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCldO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBtb3ZlID09PSAnYWknID8gYWkgOiBwbGF5ZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IHN3aXRjaE1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHRpbWVNYW5pcHVsYXRvcnMucmVzZXQoKTtcbiAgICAgICAgaWYgKGlzRW5kR2FtZSgpKSB7XG4gICAgICAgICAgICBvcGVuUG9wdXAoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChtb3ZlID09PSAnYWknKSB7XG4gICAgICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnNldFRpbWVPZlRoZU1vdmUoKTtcbiAgICAgICAgICAgIG1vdmUgPSAncGxheWVyJztcbiAgICAgICAgICAgIHBsYXllck1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vdmUgPSAnYWknO1xuICAgICAgICAgICAgYWlNb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaXNFbmRHYW1lID0gKCkgPT4ge1xuICAgICAgICBsZXQgaXNFbmQgPSBpc1BsYXllckxvc2UocGxheWVyKSB8fCBpc1BsYXllckxvc2UoYWkpO1xuICAgICAgICByZXR1cm4gaXNFbmQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzUGxheWVyTG9zZSA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IGlzTG9zZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gcGxheWVyLmdldFNoaXB5YXJkKCkuZ2V0QWxsU2hpcHMoKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuaXNMaXZlKCkpIHtcbiAgICAgICAgICAgICAgICBpc0xvc2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpc0xvc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYXllck1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGFpLmdldEdhbWVib2FyZCgpLnVuYmxvY2soKTtcbiAgICAgICAgc2V0UGxheWVyTW92ZURlc2lnbihhaSwgcGxheWVyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tDZWxsID0gKGNlbGwpID0+IHtcbiAgICAgICAgaWYgKGFpQ2VsbHMuaW5jbHVkZXMoY2VsbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYWlDZWxscy5pbmRleE9mKGNlbGwpO1xuICAgICAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkuYmxvY2soKTtcbiAgICAgICAgICAgIHRha2VIaXQoYWlDZWxscy5zcGxpY2UoaW5kZXgsIDEpWzBdKTtcbiAgICAgICAgICAgIHRpbWVNYW5pcHVsYXRvcnMuc2V0VGltZUJldHdlZW5Nb3Zlcyg1MDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFpTW92ZSA9ICgpID0+IHtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkuYmxvY2soKTtcbiAgICAgICAgc2V0QWlNb3ZlRGVzaWduKGFpLCBwbGF5ZXIpO1xuICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnNldEFpU3BlZWRPZlRvdWdodChwbGF5ZXJDZWxscyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRha2VIaXQgPSAoY2VsbCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gY2VsbC5nZXRPY2N1cGFudCgpO1xuICAgICAgICBjZWxsLnNldFRoZUhpdCgpO1xuICAgICAgICBpZiAoc2hpcCA9PT0gJ2ZyZWUnKSB7XG4gICAgICAgICAgICB2aWV3TWlzc0hpdChjZWxsKTtcbiAgICAgICAgICAgIG1pc3NFZmZlY3QucGxheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld0FjY3VyYXRlSGl0KGNlbGwpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrTGl2ZVNoaXAoc2hpcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGl0QWxsRGlhZ3MoY2VsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vdmUgPSBtb3ZlID09PSAnYWknID8gJ3BsYXllcicgOiAnYWknO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjaGVja0xpdmVTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgaWYgKCFzaGlwLmlzTGl2ZSgpKSB7XG4gICAgICAgICAgICBraWxsU2hpcEVmZmVjdC5wbGF5KCk7XG4gICAgICAgICAgICBzaGlwLmtpbGwoKTtcbiAgICAgICAgICAgIGxldCBtaW5pU2hpcCA9IGdldE1pbmlTaGlwKHNoaXApO1xuICAgICAgICAgICAgbWluaVNoaXAua2lsbCgpO1xuICAgICAgICAgICAgaGl0QWxsQXJlYUFyb3VuZFNoaXAoc2hpcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXAuaXNMaXZlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhpdEFsbEFyZWFBcm91bmRTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgYXJlYSA9IHNoaXAuZ2V0V2F0ZXJBcmVhcygpLmdldEFyZWFBcm91bmRUaGVTaGlwKCk7XG4gICAgICAgIGFyZWEuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjZWxsLmlzSGl0KCkpIHtcbiAgICAgICAgICAgICAgICBzZXRMb3dPcGFjaXR5KGNlbGwuZ2V0Q2VsbE5vZGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2aWV3TWlzc0hpdChjZWxsKTtcbiAgICAgICAgICAgIHJlbW92ZUNlbGwoY2VsbCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVDZWxsID0gKGNlbGwpID0+IHtcbiAgICAgICAgbGV0IGNlbGxzID0gbW92ZSA9PT0gJ2FpJyA/IHBsYXllckNlbGxzIDogYWlDZWxscztcbiAgICAgICAgbGV0IGluZGV4ID0gY2VsbHMuaW5kZXhPZihjZWxsKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGNlbGxzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGl0QWxsRGlhZ3MgPSAoaGl0Q2VsbCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gQ2VsbEhhbmRsZXIoKTtcbiAgICAgICAgY29uc3QgeCA9IGhpdENlbGwuZ2V0WFkoKS54O1xuICAgICAgICBjb25zdCB5ID0gaGl0Q2VsbC5nZXRYWSgpLnk7XG4gICAgICAgIGNvbnN0IG9wcG9uZW50ID0gbW92ZSA9PT0gJ2FpJyA/IHBsYXllciA6IGFpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBvcHBvbmVudC5nZXRHYW1lYm9hcmQoKS5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpO1xuICAgICAgICBjb25zdCBjZWxscyA9IGhhbmRsZXIuZ2V0RGlhZHMoeCwgeSwgcGFyZW50KTtcbiAgICAgICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNlbGwgIT09IGhpdENlbGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNlbGwuaXNIaXQoKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRMb3dPcGFjaXR5KGNlbGwuZ2V0Q2VsbE5vZGUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZpZXdNaXNzSGl0KGNlbGwpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUNlbGwoY2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRNaW5pU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBzaGlwLmdldFR5cGUoKTtcbiAgICAgICAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2V0QWN0aXZlUGxheWVyKCk7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gYWN0aXZlUGxheWVyLmdldE1pbmlTaGlweWFyZCgpLmdldFNoaXBzT2ZUeXBlKHR5cGUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2hpcHNbaV0uaXNMaXZlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hpcHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZmlsbEJvYXJkc1RvUmFuZG9tU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGFpLmdldEdhbWVib2FyZCgpLnJhbmRvbUZpbGxpbmdPZlNoaXBzKCk7XG4gICAgICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS5yYW5kb21GaWxsaW5nT2ZTaGlwcygpO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuUG9wdXAgPSAoKSA9PiB7XG4gICAgICAgIG1vdmUgPT09ICdwbGF5ZXInID8gdmlld0xvc2VQb3B1cCgpIDogdmlld1dpblBvcHVwKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNoZWNrQ2VsbCxcbiAgICAgICAgcGxheWVyTW92ZSxcbiAgICAgICAgc2V0RGVmYXVsdFNldHRpbmdzLFxuICAgICAgICBzd2l0Y2hNb3ZlLFxuICAgICAgICB0YWtlSGl0LFxuICAgICAgICBpc0VuZEdhbWUsXG4gICAgICAgIGZpbGxCb2FyZHNUb1JhbmRvbVNoaXBzLFxuICAgIH07XG59O1xuXG5cbmV4cG9ydCBjb25zdCBDb29yZGluYXRlcyA9ICgoKSA9PiB7XG4gICAgbGV0IHNpbmdsZVRvbmUgPSAwO1xuICAgIGxldCB4ID0gMDtcbiAgICBsZXQgeSA9IDA7XG5cbiAgICBjb25zdCBzZXRDb29yZGluYXRlcyA9IChueCwgbnkpID0+IHtcbiAgICAgICAgaWYgKHNpbmdsZVRvbmUgPT09IDApIHtcbiAgICAgICAgICAgIHNpbmdsZVRvbmUgPSAxO1xuICAgICAgICAgICAgeCA9IG54O1xuICAgICAgICAgICAgeSA9IG55O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHNpbmdsZVRvbmUgPSAwO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFhZID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB4LCB5IH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0Q29vcmRpbmF0ZXMsIGdldFhZLCByZXNldCB9O1xufSkoKTsiLCJpbXBvcnQgeyBzZXROdWxsT3BhY2l0eSB9IGZyb20gJy4uL3ZpZXdzL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZSc7XG5pbXBvcnQgeyB2aWV3U2hpcE9uUmFuZG9tQ2VsbCB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL3NoaXAnO1xuaW1wb3J0IHsgTWFyaW5lU2VjdG9yIH0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vZ2FtZUNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAobmFtZSwgcGxheWVyKSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSBDb25maWcuR2FtZWJvYXJkLndpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9IENvbmZpZy5HYW1lYm9hcmQuaGVpZ2h0O1xuICAgIGNvbnN0IGNvbnRhaW5lcnMgPSBmaWxsQm9hcmQod2lkdGgsIGhlaWdodCk7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9YCk7XG5cbiAgICBjb25zdCBnZXRTdHJ1Y3RlZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcnMuZ2V0U3RydWN0ZWQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcnMuZ2V0VW5zdHJ1Y3RlZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRTaXplID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBjb250YWluZXJzLmdldFVuc3RydWN0ZWQoKS5mb3JFYWNoKChzZWN0b3IpID0+IHtcbiAgICAgICAgICAgIHNlY3Rvci5jbGVhcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgcGxheWVyLmdldFNoaXB5YXJkKCkucmVzZXQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmFuZG9tRmlsbGluZ09mU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIGxldCBzaGlwcyA9IHBsYXllci5nZXRTaGlweWFyZCgpLmdldEFsbFNoaXBzKCk7XG5cbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcC5zZXRSYW5kb21PcmllbnRhdGlvbigpO1xuICAgICAgICAgICAgdmlld1NoaXBPblJhbmRvbUNlbGwoc2hpcCwgWy4uLmdldFVuc3RydWN0ZWRDb250YWluZXIoKV0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgYmxvY2tTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVuYmxvY2tTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2snKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhpZGRlblNoaXBzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib2FyZCA9IG5vZGUucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XG4gICAgICAgIGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSAnMHB4IGJsdWUgc29saWQnO1xuICAgICAgICB9KTtcbiAgICAgICAgYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmRlY2snKS5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICBzZXROdWxsT3BhY2l0eShkZWNrKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGJsb2NrID0gKCkgPT4ge1xuICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVuYmxvY2sgPSAoKSA9PiB7XG4gICAgICAgIG5vZGUucXVlcnlTZWxlY3RvcignLmJvYXJkJykuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2snKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmFuZG9tRmlsbGluZ09mU2hpcHMsXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBnZXRQbGF5ZXIsXG4gICAgICAgIGdldFN0cnVjdGVkQ29udGFpbmVyLFxuICAgICAgICBnZXRVbnN0cnVjdGVkQ29udGFpbmVyLFxuICAgICAgICBnZXRTaXplLFxuICAgICAgICBnZXROb2RlLFxuICAgICAgICBibG9ja1NoaXBzLFxuICAgICAgICB1bmJsb2NrU2hpcHMsXG4gICAgICAgIGhpZGRlblNoaXBzLFxuICAgICAgICBibG9jayxcbiAgICAgICAgdW5ibG9jayxcbiAgICB9O1xufTtcblxuY29uc3QgZmlsbEJvYXJkID0gKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICBsZXQgc3RydWN0ZWQgPSBbXTtcbiAgICBsZXQgdW5zdHJ1Y3RlZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICBsZXQgbGluZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBNYXJpbmVTZWN0b3IoaiwgaSk7XG4gICAgICAgICAgICBsaW5lW2pdID0gY2VsbDtcbiAgICAgICAgICAgIHVuc3RydWN0ZWQucHVzaChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICBzdHJ1Y3RlZFtpXSA9IGxpbmU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U3RydWN0ZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdHJ1Y3RlZDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VW5zdHJ1Y3RlZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHVuc3RydWN0ZWQ7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldFN0cnVjdGVkLCBnZXRVbnN0cnVjdGVkIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IENvbmZpZyA9ICgoKSA9PiB7XG4gICAgY29uc3QgR2FtZWJvYXJkID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAxMDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gMTA7XG4gICAgICAgIHJldHVybiB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwVHlwZXMgPSBbJ2ZyZWdhdHMnLCAnY2FyYXZlbHMnLCAnZHJha2thcnMnLCAnYm9hdHMnXTtcbiAgICAgICAgY29uc3QgbnVtYmVyT2YgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnJlZ2F0ZXMgPSAxO1xuICAgICAgICAgICAgY29uc3QgY2FyYXZlbHMgPSAyO1xuICAgICAgICAgICAgY29uc3QgZHJha2thcnMgPSAzO1xuICAgICAgICAgICAgY29uc3QgYm9hdHMgPSA0O1xuICAgICAgICAgICAgcmV0dXJuIHsgZnJlZ2F0ZXMsIGNhcmF2ZWxzLCBkcmFra2FycywgYm9hdHMgfTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICByZXR1cm4geyBudW1iZXJPZiwgc2hpcFR5cGVzIH07XG4gICAgfSkoKTtcblxuICAgIHJldHVybiB7IEdhbWVib2FyZCwgRWxlbWVudHMgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVCb2FyZCc7XG5pbXBvcnQgeyBTaGlweWFyZCB9IGZyb20gJy4vc2hpcHlhcmQnO1xuXG5jb25zdCBQbGF5ZXIgPSAoaWQsIG5hbWUpID0+IHtcbiAgICBjb25zdCBnZXRJZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0SWQsIGdldE5hbWUgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlID0gKGlkLCBuYW1lLCBub2RlSWQsIG1pbmlTaGlweWFyZElkKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gUGxheWVyKGlkLCBuYW1lKTtcblxuICAgIGxldCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQobm9kZUlkLCBwcm90b3R5cGUpO1xuICAgIGxldCBzaGlweWFyZCA9IFNoaXB5YXJkKHByb3RvdHlwZSk7XG4gICAgbGV0IG1pbmlTaGlweWFyZCA9IFNoaXB5YXJkKFxuICAgICAgICBwcm90b3R5cGUsXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWluaVNoaXB5YXJkSWQpLFxuICAgICk7XG5cbiAgICBjb25zdCBnZXRHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFNoaXB5YXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHlhcmQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE1pbmlTaGlweWFyZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG1pbmlTaGlweWFyZDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7XG4gICAgICAgIGdldEdhbWVib2FyZCxcbiAgICAgICAgZ2V0U2hpcHlhcmQsXG4gICAgICAgIGdldE1pbmlTaGlweWFyZCxcbiAgICB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgU2Vzc2lvbiA9ICgoKSA9PiB7XG4gICAgbGV0IGFjdGl2ZVNoaXAgPSBudWxsO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IGRvdWJsZUluZGV4ID0gJ3NoaXAnO1xuICAgIGxldCBjdXJyZW50RWxlbWVudCA9IG51bGw7XG4gICAgbGV0IGNob2lzZWRDZWxsID0gbnVsbDtcbiAgICBsZXQgbWFudWFsTW9kZSA9IGZhbHNlO1xuICAgIHJldHVybiB7XG4gICAgICAgIG1hbnVhbE1vZGUsXG4gICAgICAgIGFjdGl2ZVNoaXAsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBkb3VibGVJbmRleCxcbiAgICAgICAgY3VycmVudEVsZW1lbnQsXG4gICAgICAgIGNob2lzZWRDZWxsLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgcmVzZXRTZXNzaW9uID0gKCkgPT4ge1xuICAgIFNlc3Npb24uYWN0aXZlU2hpcCA9IG51bGw7XG4gICAgU2Vzc2lvbi5pbmRleCA9IDA7XG4gICAgU2Vzc2lvbi5kb3VibGVJbmRleCA9ICdzaGlwJztcbiAgICBTZXNzaW9uLmN1cnJlbnRFbGVtZW50ID0gbnVsbDtcbn07XG4iLCJpbXBvcnQgeyByYW5kb21JbnRGcm9tSW50ZXJ2YWwgfSBmcm9tICcuLi9oZWxwZXIvaGVscGVyJztcbmltcG9ydCB7IHNldExvd09wYWNpdHkgfSBmcm9tICcuLi92aWV3cy9hbmltYXRpb25zL2NoYW5nZVZpc2libGUnO1xuaW1wb3J0IHsgZ2V0Tm9kZSB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL2ZhY3RvcnknO1xuaW1wb3J0IHtcbiAgICByZXNldFNoaXBTdHlsZSxcbiAgICBzZXREZWF0aFN0eWxlT25TaGlwLFxuICAgIHNldFN0YW5kYXJ0SG9yaXpvbnRhbFNoaXBEZXNpZ24sXG4gICAgc2V0U3RhbmRhcnRWZXJ0aWNhbFNoaXBEZXNpZ24sXG59IGZyb20gJy4uL3ZpZXdzL25vZGVzL3NoaXAnO1xuaW1wb3J0IHsgRGVjayB9IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgeyBTaGlwV2F0ZXJBcmVhcyB9IGZyb20gJy4vd2F0ZXJBcmVhcyc7XG5cbmV4cG9ydCBjb25zdCBTaGlwID0gKGxlbmd0aCwgcGxheWVyLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Tm9kZSgnc2hpcCcsICdob3Jpem9udGFsJyk7XG4gICAgbGV0IGJvZHkgPSBbXTtcbiAgICBsZXQgbGl2ZSA9IHRydWU7XG4gICAgbGV0IGhvcml6b250YWwgPSB0cnVlO1xuICAgIGxldCBoZWFkID0gbnVsbDtcbiAgICBsZXQgc2hpcCA9IHt9O1xuICAgIGxldCBzaGlwV2F0ZXJBcmVhcyA9IFNoaXBXYXRlckFyZWFzKHBsYXllciwgc2hpcCk7XG5cbiAgICBjb25zdCBzZXRZb3Vyc2VsZiA9ICh0aGlzU2hpcCkgPT4ge1xuICAgICAgICBzaGlwID0gdGhpc1NoaXA7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFlvdXJzZWxmID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcDtcbiAgICB9O1xuXG4gICAgY29uc3QgZmlsbENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRlY2sgPSBEZWNrKGkpO1xuICAgICAgICAgICAgYm9keS5wdXNoKGRlY2spO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2suZ2V0Q2VsbE5vZGUoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0T3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICAgICAgICAgIHNldFZlcnRpY2FsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSkge1xuICAgICAgICAgICAgc2V0SG9yaXpvbnRhbCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRha2VEb3duV2F0ZXJBcmVhcyA9ICgpID0+IHtcbiAgICAgICAgc2hpcFdhdGVyQXJlYXMuY2xlYXJBcmVhcygpO1xuICAgIH07XG5cbiAgICBjb25zdCBsYXVuY2hTaGlwT25XYXRlciA9IChuSGVhZCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHdhdGVyQXJlYXMgPSBnZXRXYXRlckFyZWEobkhlYWQpO1xuICAgICAgICAgICAgbGV0IGFjZXNzaWJpbGl0eSA9IHdhdGVyQXJlYXMuY2hlY2tBcmVhKCk7XG4gICAgICAgICAgICBpZiAoYWNlc3NpYmlsaXR5KSB7XG4gICAgICAgICAgICAgICAgdGFrZURvd25XYXRlckFyZWFzKCk7XG4gICAgICAgICAgICAgICAgc2hpcFdhdGVyQXJlYXMgPSB3YXRlckFyZWFzO1xuICAgICAgICAgICAgICAgIGxpbmtTaGlwV2l0aEZpZWxkKCk7XG4gICAgICAgICAgICAgICAgc2hpcFdhdGVyQXJlYXMub2NjdXB5QXJlYXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2Vzc2liaWxpdHk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbGlua1NoaXBXaXRoRmllbGQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhcmVhID0gc2hpcFdhdGVyQXJlYXMuZ2V0QXJlYVVuZGVyVGhlU2hpcCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB4eSA9IGFyZWFbaV0uZ2V0WFkoKTtcbiAgICAgICAgICAgIGJvZHlbaV0uc2V0WFkoeHkueCwgeHkueSk7XG4gICAgICAgICAgICBhcmVhW2ldLnNldExpbmtlZERlY2soYm9keVtpXSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0V2F0ZXJBcmVhID0gKGhlYWQpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkID0gZ2V0Qm9hcmQoKS5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpO1xuICAgICAgICBsZXQgYXJlYXMgPSBTaGlwV2F0ZXJBcmVhcyhwbGF5ZXIsIHNoaXApO1xuICAgICAgICBsZXQgeCA9IGhlYWQuZ2V0WFkoKS54O1xuICAgICAgICBsZXQgeSA9IGhlYWQuZ2V0WFkoKS55O1xuICAgICAgICBsZXQgbmVjZXNzYXJ5U2VjdG9ycyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZWNlc3NhcnlTZWN0b3JzLnB1c2goYm9hcmRbeV1beF0pO1xuICAgICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICB4Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcmVhcy5zZXRBcmVhcyhuZWNlc3NhcnlTZWN0b3JzKTtcbiAgICAgICAgcmV0dXJuIGFyZWFzO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0xpdmUgPSAoKSA9PiB7XG4gICAgICAgIGxpdmUgPSBmYWxzZTtcblxuICAgICAgICBib2R5LmZvckVhY2goKGRlY2spID0+IHtcbiAgICAgICAgICAgIGlmICghZGVjay5pc0hpdCgpKSB7XG4gICAgICAgICAgICAgICAgbGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBsaXZlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRCb2R5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYm9keTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRIZWFkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaGVhZDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0SGVhZCA9IChuSGVhZCkgPT4ge1xuICAgICAgICBoZWFkID0gbkhlYWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhvcml6b250YWw7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yaWVudGF0aW9uU3dpdGNoID0gKCkgPT4ge1xuICAgICAgICBob3Jpem9udGFsID0gIWhvcml6b250YWw7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFZlcnRpY2FsID0gKCkgPT4ge1xuICAgICAgICBzZXRTdGFuZGFydFZlcnRpY2FsU2hpcERlc2lnbihjb250YWluZXIsIGxlbmd0aCk7XG4gICAgICAgIGhvcml6b250YWwgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0SG9yaXpvbnRhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhbmRhcnRIb3Jpem9udGFsU2hpcERlc2lnbihjb250YWluZXIsIGxlbmd0aCk7XG4gICAgICAgIGhvcml6b250YWwgPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRSYW5kb21PcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgcmFuZG9tSW50RnJvbUludGVydmFsKDAsIDEpID09PSAxID8gc2V0SG9yaXpvbnRhbCgpIDogc2V0VmVydGljYWwoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBoZWFkID0gbnVsbDtcbiAgICAgICAgaWYgKCFjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaW5pLXNoaXAnKSkge1xuICAgICAgICAgICAgc2V0SG9yaXpvbnRhbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlc2V0Qm9keSgpO1xuICAgICAgICBzaGlwV2F0ZXJBcmVhcy5jbGVhckFyZWFzKCk7XG4gICAgICAgIHNoaXBXYXRlckFyZWFzID0gU2hpcFdhdGVyQXJlYXMocGxheWVyLCBzaGlwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRCb2R5ID0gKCkgPT4ge1xuICAgICAgICByZXNldFNoaXBTdHlsZShjb250YWluZXIpO1xuICAgICAgICBib2R5LmZvckVhY2goKGRlY2spID0+IHtcbiAgICAgICAgICAgIGRlY2sucmVzZXQoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH07XG5cbiAgICBjb25zdCBraWxsID0gKCkgPT4ge1xuICAgICAgICBib2R5LmZvckVhY2goKGRlY2spID0+IHtcbiAgICAgICAgICAgIHNldExvd09wYWNpdHkoZGVjay5nZXRDZWxsTm9kZSgpKTtcbiAgICAgICAgICAgIGRlY2suc2V0VGhlSGl0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXREZWF0aFN0eWxlT25TaGlwKGNvbnRhaW5lcik7XG4gICAgICAgIGxpdmUgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0V2F0ZXJBcmVhcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBXYXRlckFyZWFzO1xuICAgIH07XG5cbiAgICBmaWxsQ29udGFpbmVyKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRSYW5kb21PcmllbnRhdGlvbixcbiAgICAgICAgcmVzZXQsXG4gICAgICAgIHNldEhvcml6b250YWwsXG4gICAgICAgIHNldFZlcnRpY2FsLFxuICAgICAgICBnZXRCb2FyZCxcbiAgICAgICAgdGFrZURvd25XYXRlckFyZWFzLFxuICAgICAgICBsYXVuY2hTaGlwT25XYXRlcixcbiAgICAgICAgb3JpZW50YXRpb25Td2l0Y2gsXG4gICAgICAgIHNldE9yaWVudGF0aW9uLFxuICAgICAgICBpc0xpdmUsXG4gICAgICAgIGdldEJvZHksXG4gICAgICAgIGdldENvbnRhaW5lcixcbiAgICAgICAgZ2V0SGVhZCxcbiAgICAgICAgc2V0SGVhZCxcbiAgICAgICAgaXNIb3Jpem9udGFsLFxuICAgICAgICBzZXRZb3Vyc2VsZixcbiAgICAgICAgZ2V0WW91cnNlbGYsXG4gICAgICAgIGdldFR5cGUsXG4gICAgICAgIGtpbGwsXG4gICAgICAgIGdldFdhdGVyQXJlYXMsXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBGcmVnYXQgPSAobWFya2VyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCg0LCBtYXJrZXIsICdmcmVnYXRzJyk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCBtYXJrZXIpO1xufTtcblxuZXhwb3J0IGNvbnN0IENhcmF2ZWwgPSAobWFya2VyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgzLCBtYXJrZXIsICdjYXJhdmVscycpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgRHJha2thciA9IChtYXJrZXIpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDIsIG1hcmtlciwgJ2RyYWtrYXJzJyk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBCb2F0ID0gKG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFNoaXAoMSwgbWFya2VyLCAnYm9hdHMnKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBCb2F0LCBDYXJhdmVsLCBEcmFra2FyLCBGcmVnYXQgfSBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgY29uc3QgU2hpcHlhcmQgPSAoXG4gICAgcGxheWVyLFxuICAgIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHlhcmQnKSxcbikgPT4ge1xuICAgIGNvbnN0IGZyZWdhdHMgPSBEb2NrKENvbmZpZy5FbGVtZW50cy5udW1iZXJPZi5mcmVnYXRlcywgJ0ZyZWdhdCcsIHBsYXllcik7XG4gICAgY29uc3QgY2FyYXZlbHMgPSBEb2NrKENvbmZpZy5FbGVtZW50cy5udW1iZXJPZi5jYXJhdmVscywgJ0NhcmF2ZWwnLCBwbGF5ZXIpO1xuICAgIGNvbnN0IGRyYWtrYXJzID0gRG9jayhDb25maWcuRWxlbWVudHMubnVtYmVyT2YuZHJha2thcnMsICdEcmFra2FyJywgcGxheWVyKTtcbiAgICBjb25zdCBib2F0cyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmJvYXRzLCAnQm9hdCcsIHBsYXllcik7XG4gICAgY29uc3Qgc2hpcHMgPSBmcmVnYXRzXG4gICAgICAgIC5nZXRTaGlwcygpXG4gICAgICAgIC5jb25jYXQoXG4gICAgICAgICAgICBjYXJhdmVsc1xuICAgICAgICAgICAgICAgIC5nZXRTaGlwcygpXG4gICAgICAgICAgICAgICAgLmNvbmNhdChkcmFra2Fycy5nZXRTaGlwcygpLmNvbmNhdChib2F0cy5nZXRTaGlwcygpKSksXG4gICAgICAgICk7XG5cbiAgICBjb25zdCBnZXRTaGlwc09mVHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZnJlZ2F0cyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyZWdhdHMuZ2V0U2hpcHMoKTtcbiAgICAgICAgICAgIGNhc2UgJ2NhcmF2ZWxzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FyYXZlbHMuZ2V0U2hpcHMoKTtcbiAgICAgICAgICAgIGNhc2UgJ2RyYWtrYXJzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZHJha2thcnMuZ2V0U2hpcHMoKTtcbiAgICAgICAgICAgIGNhc2UgJ2JvYXRzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9hdHMuZ2V0U2hpcHMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXREb2NrV2l0aEZyZWdhdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBmcmVnYXRzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREb2NrV2l0aENhcmF2ZWxzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY2FyYXZlbHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERvY2tXaXRoRHJha2thcnMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFra2FycztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhCb2F0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGJvYXRzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEFsbFNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0VtcHR5ID0gKCkgPT4ge1xuICAgICAgICBsZXQgbGF1bmNoZWRTaGlwcyA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcbiAgICAgICAgcmV0dXJuIGxhdW5jaGVkU2hpcHMubGVuZ3RoID09PSAwO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcC5yZXNldCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0U2hpcHNPZlR5cGUsXG4gICAgICAgIGlzRW1wdHksXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBnZXRBbGxTaGlwcyxcbiAgICAgICAgZ2V0UGxheWVyLFxuICAgICAgICBnZXREb2NrV2l0aEZyZWdhdHMsXG4gICAgICAgIGdldERvY2tXaXRoQ2FyYXZlbHMsXG4gICAgICAgIGdldERvY2tXaXRoRHJha2thcnMsXG4gICAgICAgIGdldERvY2tXaXRoQm9hdHMsXG4gICAgICAgIGdldE5vZGUsXG4gICAgfTtcbn07XG5cbmNvbnN0IERvY2sgPSAoY291bnQsIHNoaXBCbHVlUHJpbnQsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gW107XG5cbiAgICBjb25zdCBmaWxsRG9jayA9IChjb3VudCwgc2hpcEJsdWVQcmludCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBidWlsZFNoaXAoc2hpcEJsdWVQcmludCk7XG4gICAgICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGJ1aWxkU2hpcCA9IChibHVlUHJpbnQpID0+IHtcbiAgICAgICAgc3dpdGNoIChibHVlUHJpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ0ZyZWdhdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZyZWdhdChwbGF5ZXIpO1xuICAgICAgICAgICAgY2FzZSAnQ2FyYXZlbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhcmF2ZWwocGxheWVyKTtcbiAgICAgICAgICAgIGNhc2UgJ0RyYWtrYXInOlxuICAgICAgICAgICAgICAgIHJldHVybiBEcmFra2FyKHBsYXllcik7XG4gICAgICAgICAgICBjYXNlICdCb2F0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gQm9hdChwbGF5ZXIpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU29ycnksIGlsbGVnYWwgc2hpcCBibHVlcHJpbnQnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmaWxsRG9jayhjb3VudCwgc2hpcEJsdWVQcmludCk7XG5cbiAgICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRTaGlwcyB9O1xufTtcbiIsImltcG9ydCB7IGdhbWUgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBnZXRSYW5kb21DZWxsIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvc2hpcCc7XG5pbXBvcnQgeyB0aW1lckVmZmVjdCB9IGZyb20gJy4vZWxlbWVudHMvYXVkaW9FZmZlY3RzJztcbmltcG9ydCB7IFRpbWVyIH0gZnJvbSAnLi9lbGVtZW50cy90ZW1wbGF0ZXMnO1xuXG5leHBvcnQgY29uc3QgVGltZU1hbmlwdWxhdG9ycyA9ICgpID0+IHtcbiAgICBsZXQgdGltZU9mVGhlTW92ZTtcbiAgICBsZXQgYWlTcGVlZE9mVG91Z2h0O1xuICAgIGxldCB0aW1lQmV0d2Vlbk1vdmVzO1xuICAgIGxldCBhbGFybTtcbiAgICBsZXQgdGltZXIgPSBUaW1lcigpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lcicpLmFwcGVuZENoaWxkKHRpbWVyLmdldFN2ZygpKTtcblxuICAgIGNvbnN0IHNldEFpU3BlZWRPZlRvdWdodCA9IChjZWxscykgPT4ge1xuICAgICAgICBhaVNwZWVkT2ZUb3VnaHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGdhbWUuZ2FtZUhhbmRsZXIudGFrZUhpdChnZXRSYW5kb21DZWxsKGNlbGxzKSk7XG4gICAgICAgICAgICBzZXRUaW1lQmV0d2Vlbk1vdmVzKDEwMDApO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0VGltZUJldHdlZW5Nb3ZlcyA9ICh0aW1lb3V0KSA9PiB7XG4gICAgICAgIHRpbWVCZXR3ZWVuTW92ZXMgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGdhbWUuZ2FtZUhhbmRsZXIuc3dpdGNoTW92ZSgpO1xuICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0VGltZU9mVGhlTW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGltZXIudmlldygpO1xuICAgICAgICB0aW1lT2ZUaGVNb3ZlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZS5nYW1lSGFuZGxlci5zd2l0Y2hNb3ZlKCk7XG4gICAgICAgIH0sIDE1MDAwKTtcbiAgICAgICAgYWxhcm0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRpbWVyRWZmZWN0LnBsYXkoKTtcbiAgICAgICAgfSwgMTAwMDApO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgdGltZXIucmVzZXQoKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFpU3BlZWRPZlRvdWdodCk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lQmV0d2Vlbk1vdmVzKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFsYXJtKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lT2ZUaGVNb3ZlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgc2V0QWlTcGVlZE9mVG91Z2h0LCBzZXRUaW1lQmV0d2Vlbk1vdmVzLCBzZXRUaW1lT2ZUaGVNb3ZlLCByZXNldCB9O1xufTtcbiIsImltcG9ydCB7IENlbGxIYW5kbGVyIH0gZnJvbSAnLi9jZWxsSGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBTaGlwV2F0ZXJBcmVhcyA9IChwbGF5ZXIsIHNoaXApID0+IHtcbiAgICBsZXQgdW5kZXJUaGVTaGlwID0gW107XG4gICAgbGV0IGFyb3VuZFRoZVNoaXAgPSBbXTtcblxuICAgIGNvbnN0IGdldEFyZWFVbmRlclRoZVNoaXAgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB1bmRlclRoZVNoaXA7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEFyZWFBcm91bmRUaGVTaGlwID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXJvdW5kVGhlU2hpcDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0QXJlYXMgPSAoYXJlYSkgPT4ge1xuICAgICAgICB1bmRlclRoZVNoaXAgPSBhcmVhO1xuICAgICAgICBhcm91bmRUaGVTaGlwID0gc2V0QXJlYUFyb3VuZFRoZVNoaXAoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0QXJlYUFyb3VuZFRoZVNoaXAgPSAoKSA9PiB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gQ2VsbEhhbmRsZXIoKTtcbiAgICAgICAgbGV0IGFyZWFzID0gW107XG4gICAgICAgIGxldCBwYXJlbnQgPSBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0U3RydWN0ZWRDb250YWluZXIoKTtcbiAgICAgICAgdW5kZXJUaGVTaGlwLmZvckVhY2goKHNlY3RvcikgPT4ge1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gc2VjdG9yLmdldFhZKCk7XG4gICAgICAgICAgICBsZXQgYXJlYSA9IGhhbmRsZXIuZ2V0Q2VsbEFyb3VuZEFyZWEoXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMueCxcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy55LFxuICAgICAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGFyZWFzID0gYXJlYXMuY29uY2F0KGFyZWEpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcmVhcykpLmZpbHRlcihcbiAgICAgICAgICAgICh4KSA9PiAhdW5kZXJUaGVTaGlwLmluY2x1ZGVzKHgpLFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBvY2N1cHlBcmVhcyA9ICgpID0+IHtcbiAgICAgICAgdW5kZXJUaGVTaGlwLmZvckVhY2goKHNlY3RvcikgPT4ge1xuICAgICAgICAgICAgaWYgKHNlY3Rvci5pc0ZyZWUoKSkge1xuICAgICAgICAgICAgICAgIHNlY3Rvci5vY2N1cHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja0FyZWEgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhY2Vzc2liaWxpdHkgPSB0cnVlO1xuICAgICAgICBsZXQgYXJlYXMgPSB1bmRlclRoZVNoaXAuY29uY2F0KGFyb3VuZFRoZVNoaXApO1xuXG4gICAgICAgIGFyZWFzLmZvckVhY2goKHNlY3RvcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFzZWN0b3IuaXNGcmVlKCkgJiYgc2VjdG9yLmdldE9jY3VwYW50KCkgIT09IHNoaXApIHtcbiAgICAgICAgICAgICAgICBhY2Vzc2liaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFjZXNzaWJpbGl0eTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJBcmVhcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFyZWFzID0gdW5kZXJUaGVTaGlwLmNvbmNhdChhcm91bmRUaGVTaGlwKTtcbiAgICAgICAgYXJlYXMuZm9yRWFjaCgoc2VjdG9yKSA9PiB7XG4gICAgICAgICAgICBzZWN0b3IuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNsZWFyQXJlYXMsXG4gICAgICAgIGNoZWNrQXJlYSxcbiAgICAgICAgZ2V0QXJlYVVuZGVyVGhlU2hpcCxcbiAgICAgICAgZ2V0QXJlYUFyb3VuZFRoZVNoaXAsXG4gICAgICAgIHNldEFyZWFzLFxuICAgICAgICBvY2N1cHlBcmVhcyxcbiAgICB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBBbmltYXRpb25zID0gKCgpID0+IHtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB4ID0gKGUsIHgwLCB4MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGxlZnQ6IGAke3gwfWAgfSwgeyBsZWZ0OiBgJHt4MX1gIH1dLCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cixcbiAgICAgICAgICAgICAgICBmaWxsOiBmaWxsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgeSA9IChlLCB5MCwgeTEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0b3A6IGAke3kwfWAgfSwgeyB0b3A6IGAke3kxfWAgfV0sIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyLFxuICAgICAgICAgICAgICAgIGZpbGw6IGZpbGwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByb3RhdGUgPSAoZSwgcm90YXRlMSwgcm90YXRlMiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgeyB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGUxfWRlZylgIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlMn1kZWcpYCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7IHgsIHksIHJvdGF0ZSB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gKGUsIGNvbG9yMSwgY29sb3IyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBiYWNrZ3JvdW5kOiBjb2xvcjEgfSwgeyBiYWNrZ3JvdW5kOiBjb2xvcjIgfV0sIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXIsXG4gICAgICAgICAgICBmaWxsOiBmaWxsLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BhY2l0eSA9IChlLCBvcGFjaXR5MSwgb3BhY2l0eTIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IG9wYWNpdHk6IG9wYWNpdHkxIH0sIHsgb3BhY2l0eTogb3BhY2l0eTIgfV0sIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXIsXG4gICAgICAgICAgICBmaWxsOiBmaWxsLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3VzdG9tID0gKGUsIGR1ciwgZmlsbCA9ICdub25lJywgLi4ua2V5RnJhbWVzKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoLi4ua2V5RnJhbWVzLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IHRyYW5zZm9ybSwgYmFja2dyb3VuZCwgb3BhY2l0eSwgY3VzdG9tIH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IHNldEhpZGRlbiA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVIaWRkZW4gPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TG93T3BhY2l0eSA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdsb3ctb3BhY2l0eScpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldE5vcm1hbE9wYWNpdHkgPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbG93LW9wYWNpdHknKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVOdWxsT3BhY2l0eSA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdudWxsLW9wYWNpdHknKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXROdWxsT3BhY2l0eSA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdudWxsLW9wYWNpdHknKTtcbn07XG4iLCJpbXBvcnQgeyBBbmltYXRpb25zIH0gZnJvbSAnLi9hbmltYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IGRyYXdDcm9zcyA9IChlLCBkdXIsIGZpbGwsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgIEFuaW1hdGlvbnMuY3VzdG9tKGUuZmlyc3RDaGlsZCwgZHVyLCBmaWxsLCAuLi5rZXlGcmFtZXMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gQW5pbWF0aW9ucy5jdXN0b20oZS5sYXN0Q2hpbGQsIGR1ciwgZmlsbCwgLi4ua2V5RnJhbWVzKTtcbiAgICB9LCBkdXIpO1xufTtcbiIsImltcG9ydCB7IEFuaW1hdGlvbnMgfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgY29sb3JzVGltZXIgPSAoZSwgZHVyLCBmaWxsLCAuLi5rZXlGcmFtZXMpID0+IHtcbiAgICByZXR1cm4gQW5pbWF0aW9ucy5jdXN0b20oZSwgZHVyLCBmaWxsLCAuLi5rZXlGcmFtZXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRyYXdUaW1lciA9IChlLCBkdXIsIGZpbGwsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgIHJldHVybiBBbmltYXRpb25zLmN1c3RvbShlLCBkdXIsIGZpbGwsIC4uLmtleUZyYW1lcyk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHNldERyYWdnYWJsZSA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5kcmFnZ2FibGUgPSB0cnVlO1xufTtcbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lQ29uZmlnJztcbmltcG9ydCB7IHNldERyYWdnYWJsZSB9IGZyb20gJy4vc2V0RHJhZ2dhYmxlJztcblxuZXhwb3J0IGNvbnN0IHNldERyYWdnYWJsZUZvclNoaXBzID0gKCkgPT4ge1xuICAgIENvbmZpZy5FbGVtZW50cy5zaGlwVHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBmb3JUeXBlKHR5cGUpO1xuICAgIH0pO1xufTtcblxuY29uc3QgZm9yVHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgY29uc3QgZG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3R5cGV9YCk7XG4gICAgY29uc3Qgc2hpcHMgPSBBcnJheS5mcm9tKGRvY2suY2hpbGRyZW4pO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBzZXREcmFnZ2FibGUoc2hpcCk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgQWxwaGFiZXRzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FscGhhYmV0cyc7XG5pbXBvcnQgeyBnZXROb2RlIH0gZnJvbSAnLi9mYWN0b3J5JztcblxuY29uc3QgYWxwaGFiZXQgPSBBbHBoYWJldHMucnVzKCkuY29kZXM7XG5cbmV4cG9ydCBjb25zdCB2aWV3QXhpcyA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBib2FyZC5nZXROb2RlKCk7XG4gICAgY29uc3QgeEF4aXMgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKTtcbiAgICBjb25zdCB5QXhpcyA9IG5vZGUucXVlcnlTZWxlY3RvcignLnktYXhpcycpO1xuICAgIGNvbnN0IHNpemUgPSBib2FyZC5nZXRTaXplKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUud2lkdGg7IGkrKykge1xuICAgICAgICBjb25zdCBjZWxsID0gZ2V0Tm9kZSgneC1jZWxsJywgJ2NlbGwnKTtcbiAgICAgICAgY29uc3QgbGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShhbHBoYWJldFtpXSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGxldHRlcjtcbiAgICAgICAgeEF4aXMuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplLmhlaWdodDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBnZXROb2RlKCd5LWNlbGwnLCAnY2VsbCcpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgeUF4aXMuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBnZXROb2RlID0gKC4uLm5hbWVzKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUgIT09ICcnKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbm9kZTtcbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2FtZUNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCB2aWV3Qm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBib2FyZC5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCk7XG4gICAgY29uc3QgYm9hcmR3ciA9IGJvYXJkLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBjb250YWluZXIuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBib2FyZHdyLmFwcGVuZENoaWxkKGNlbGwuZ2V0Q2VsbE5vZGUoKSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBTdHlsZVByZXNldHMgPSAoKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJy0tYm9hcmQtd2lkdGgnLFxuICAgICAgICBDb25maWcuR2FtZWJvYXJkLndpZHRoLFxuICAgICk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS1ib2FyZC1oZWlnaHQnLFxuICAgICAgICBDb25maWcuR2FtZWJvYXJkLmhlaWdodCxcbiAgICApO1xufSkoKTtcbiIsImltcG9ydCB7IGRyYXdDcm9zcyB9IGZyb20gJy4uLy4uL21vZGVscy9lbGVtZW50cy9hdWRpb0VmZmVjdHMnO1xuaW1wb3J0IHsgQ3Jvc3MgfSBmcm9tICcuLi8uLi9tb2RlbHMvZWxlbWVudHMvdGVtcGxhdGVzJztcbmltcG9ydCB7IHJlbW92ZU51bGxPcGFjaXR5IH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlJztcblxuZXhwb3J0IGNvbnN0IHZpZXdNaXNzSGl0ID0gKGNlbGwpID0+IHtcbiAgICBjZWxsLmdldENlbGxOb2RlKCkuY2xhc3NMaXN0LmFkZCgnbWlzcy1oaXQnKTtcbn07XG5cbmV4cG9ydCBjb25zdCB2aWV3QWNjdXJhdGVIaXQgPSAoY2VsbCkgPT4ge1xuICAgIGNvbnN0IGRlY2sgPSBjZWxsLmdldExpbmtlZERlY2soKTtcbiAgICByZW1vdmVOdWxsT3BhY2l0eShkZWNrLmdldENlbGxOb2RlKCkpO1xuICAgIGRlY2suc2V0VGhlSGl0KCk7XG4gICAgYXBwZW5kQ3Jvc3NTdmcoZGVjayk7XG4gICAgZHJhd0Nyb3NzLnBsYXkoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRDcm9zc1N2ZyA9IChkZWNrKSA9PiB7XG4gICAgbGV0IGNyb3NzID0gQ3Jvc3MoKTtcbiAgICBkZWNrLmdldENlbGxOb2RlKCkuY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVkJyk7XG4gICAgZGVjay5nZXRDZWxsTm9kZSgpLmFwcGVuZENoaWxkKGNyb3NzLmdldFN2ZygpKTtcbiAgICBjcm9zcy52aWV3KCk7XG59O1xuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRzLCBzZXRBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vLi4vaGVscGVyL2hlbHBlcic7XG5pbXBvcnQgeyBDcm9zc0F0dHJpYnV0ZXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvZWxlbWVudHMvYXR0cmlidXRlcyc7XG5pbXBvcnQgeyBkcmF3Q3Jvc3MgfSBmcm9tICcuLi9hbmltYXRpb25zL21hcmtlcnMnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ3Jvc3NTVkcgPSAoKSA9PiB7XG4gICAgbGV0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgbGV0IGxlZnRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgICAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICAgICAgICAnbGluZScsXG4gICAgKTtcbiAgICBsZXQgcmlnaHRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgICAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICAgICAgICAnbGluZScsXG4gICAgKTtcbiAgICBhcHBlbmRDaGlsZHMoc3ZnLCBsZWZ0TGluZSwgcmlnaHRMaW5lKTtcbiAgICBzZXRBdHRyaWJ1dGVzKFxuICAgICAgICBsZWZ0TGluZSxcbiAgICAgICAgQ3Jvc3NBdHRyaWJ1dGVzLmxpbmUuY29uY2F0KENyb3NzQXR0cmlidXRlcy5sZWZ0RGlhZyksXG4gICAgKTtcbiAgICBzZXRBdHRyaWJ1dGVzKFxuICAgICAgICByaWdodExpbmUsXG4gICAgICAgIENyb3NzQXR0cmlidXRlcy5saW5lLmNvbmNhdChDcm9zc0F0dHJpYnV0ZXMucmlnaHREaWFnKSxcbiAgICApO1xuICAgIHJldHVybiBzdmc7XG59O1xuXG5leHBvcnQgY29uc3Qgdmlld0Nyb3NzID0gKHN2ZykgPT4ge1xuICAgIGNvbnN0IGFuaW1hdGlvbnMgPSBbXG4gICAgICAgIGRyYXdDcm9zcyhzdmcsIDIwMCwgJ2ZvcndhcmRzJywgW1xuICAgICAgICAgICAgeyBzdHJva2VEYXNob2Zmc2V0OiAnbWluKDV2aCAsMnZ3KScgfSxcbiAgICAgICAgICAgIHsgc3Ryb2tlRGFzaG9mZnNldDogJ21pbigwdmggLDB2dyknIH0sXG4gICAgICAgIF0pLFxuICAgIF07XG4gICAgcmV0dXJuIGFuaW1hdGlvbnM7XG59O1xuIiwiaW1wb3J0IHsgbG9zZSwgd2luIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VsZW1lbnRzL2F1ZGlvRWZmZWN0cyc7XG5cbmV4cG9ydCBjb25zdCB2aWV3V2luUG9wdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtd2luJyk7XG4gICAgcG9wdXAuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgcG9wdXAuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB3aW4ucGxheSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHZpZXdMb3NlUG9wdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtbG9zZScpO1xuICAgIHBvcHVwLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIHBvcHVwLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgbG9zZS5wbGF5KCk7XG59O1xuXG5leHBvcnQgY29uc3QgaGlkZGVuUG9wdXAgPSAocG9wdXApID0+IHtcbiAgICBwb3B1cC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBwb3B1cC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgd2luLnBhdXNlKCk7XG4gICAgbG9zZS5wYXVzZSgpO1xufTtcbiIsImltcG9ydCB7IHZpZXdBeGlzIH0gZnJvbSAnLi9heGlzJztcbmltcG9ydCB7IHZpZXdCb2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcblxuZXhwb3J0IGNvbnN0IHZpZXdQcm9maWxlID0gKHByb2ZpbGUpID0+IHtcbiAgICB2aWV3Qm9hcmQocHJvZmlsZS5nZXRHYW1lYm9hcmQoKSk7XG4gICAgdmlld0F4aXMocHJvZmlsZS5nZXRHYW1lYm9hcmQoKSk7XG59O1xuIiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IHJhbmRvbUludEZyb21JbnRlcnZhbCB9IGZyb20gJy4uLy4uL2hlbHBlci9oZWxwZXInO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2FtZSc7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Nlc3Npb24nO1xuaW1wb3J0IHsgcmVtb3ZlSGlkZGVuLCBzZXRIaWRkZW4gfSBmcm9tICcuLi9hbmltYXRpb25zL2NoYW5nZVZpc2libGUnO1xuXG5leHBvcnQgY29uc3Qgdmlld1NoaXAgPSAoc2hpcCwgaGVhZCkgPT4ge1xuICAgIGxldCBpc1ZpZXcgPSBzaGlwLmxhdW5jaFNoaXBPbldhdGVyKGhlYWQpO1xuICAgIGlmIChpc1ZpZXcpIHtcbiAgICAgICAgc2hpcC5zZXRIZWFkKGhlYWQpO1xuICAgICAgICBoZWFkLmdldENlbGxOb2RlKCkuYXBwZW5kQ2hpbGQoc2hpcC5nZXRDb250YWluZXIoKSk7XG4gICAgICAgIGNoZWNrU2hpcHlhcmQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmlldztcbn07XG5cbmNvbnN0IGNoZWNrU2hpcHlhcmQgPSAoKSA9PiB7XG4gICAgaWYgKFNlc3Npb24ubWFudWFsTW9kZSkge1xuICAgICAgICBpZiAoZ2FtZS5wbGF5ZXIuZ2V0U2hpcHlhcmQoKS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsb3NlTWFudWFsTWVudSgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IGNsb3NlTWFudWFsTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlweWFyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlweWFyZCcpO1xuICAgIHJlbW92ZUhpZGRlbihnYW1lLmFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKSk7XG4gICAgc2V0SGlkZGVuKHNoaXB5YXJkKTtcbn07XG5cbmV4cG9ydCBjb25zdCB2aWV3U2hpcE9uUmFuZG9tQ2VsbCA9IChzaGlwLCBjZWxscykgPT4ge1xuICAgIGxldCBjZWxsID0gZ2V0UmFuZG9tQ2VsbChjZWxscyk7XG4gICAgbGV0IGlzVmlldyA9IHZpZXdTaGlwKHNoaXAsIGNlbGwpO1xuICAgIHJldHVybiBpc1ZpZXcgPyB0cnVlIDogdmlld1NoaXBPblJhbmRvbUNlbGwoc2hpcCwgY2VsbHMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJhbmRvbUNlbGwgPSAoY2VsbHMpID0+IHtcbiAgICBsZXQgaW5kZXggPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMCwgY2VsbHMubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIGNlbGxzLnNwbGljZShpbmRleCwgMSlbMF07XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0U3RhbmRhcnRIb3Jpem9udGFsU2hpcERlc2lnbiA9IChjb250YWluZXIsIGxlbmd0aCkgPT4ge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG4gICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gYG1pbigke2xlbmd0aCAqIDV9dmgsJHtsZW5ndGggKiAyfXZ3KWA7XG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGBtaW4oNXZoLDJ2dylgO1xuICAgIGNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSBgMnZoYDtcbiAgICBjb250YWluZXIuc3R5bGUubWluV2lkdGggPSBgJHtsZW5ndGggKiAyfXZoYDtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRTdGFuZGFydFZlcnRpY2FsU2hpcERlc2lnbiA9IChjb250YWluZXIsIGxlbmd0aCkgPT4ge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGBtaW4oJHtsZW5ndGggKiA1fXZoLCR7bGVuZ3RoICogMn12dylgO1xuICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGBtaW4oNXZoLDJ2dylgO1xuICAgIGNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSBgJHtsZW5ndGggKiAyfXZoYDtcbiAgICBjb250YWluZXIuc3R5bGUubWluV2lkdGggPSBgMnZoYDtcbn07XG5cbmV4cG9ydCBjb25zdCByZXNldFNoaXBTdHlsZSA9IChjb250YWluZXIpID0+IHtcbiAgICBjb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICBjb250YWluZXIuc3R5bGUuYm9yZGVyID0gJ21pbigwLjF2aCwgMC4xdncpIHJnYmEoMCwgMCwgMjU1LCAxKSBzb2xpZCc7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0RGVhdGhTdHlsZU9uU2hpcCA9IChjb250YWluZXIpID0+IHtcbiAgICBjb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICcwLjMnO1xuICAgIGNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSAnbWluKDAuMXZoLCAwLjF2dykgcmdiYSgyNTUsIDAsIDAsIDEpIHNvbGlkJztcbn07XG5cblxuZXhwb3J0IGNvbnN0IHZpZXdEcmFnU2hpcEZvck1vYmlsZSA9IChjdXJzb3JYLCBjdXJzb3JZLCBjb250YWluZXIpID0+IHtcbiAgICBsZXQgeCA9IGN1cnNvclggLSBDb29yZGluYXRlcy5nZXRYWSgpLng7XG4gICAgbGV0IHkgPSBjdXJzb3JZIC0gQ29vcmRpbmF0ZXMuZ2V0WFkoKS55O1xuICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS15JywgYCR7eX1weGApO1xuICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS14JywgYCR7eH1weGApO1xufSIsImltcG9ydCB7IGdhbWUgfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBzZXREcmFnZ2FibGVGb3JTaGlwcyB9IGZyb20gJy4uL2RyYWdBbmREcm9wL3NoaXBzJztcblxuZXhwb3J0IGNvbnN0IHZpZXdTaGlweWFyZCA9IChzaGlweWFyZCkgPT4ge1xuICAgIGZpbGxTaGlweWFyZE5vZGUoc2hpcHlhcmQpO1xuICAgIHNldERyYWdnYWJsZUZvclNoaXBzKCk7XG59O1xuXG5jb25zdCBmaWxsU2hpcHlhcmROb2RlID0gKHNoaXB5YXJkKSA9PiB7XG4gICAgQ29uZmlnLkVsZW1lbnRzLnNoaXBUeXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGFkZFR5cGUodHlwZSwgc2hpcHlhcmQpO1xuICAgIH0pO1xufTtcblxuY29uc3QgYWRkVHlwZSA9ICh0eXBlLCBzaGlweWFyZCkgPT4ge1xuICAgIGNvbnN0IGRvY2sgPSBzaGlweWFyZC5nZXROb2RlKCkucXVlcnlTZWxlY3RvcihgLiR7dHlwZX1gKTtcbiAgICBjb25zdCBzaGlwcyA9IHNoaXB5YXJkLmdldFNoaXBzT2ZUeXBlKHR5cGUpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgZG9jay5hcHBlbmRDaGlsZChzaGlwLmdldENvbnRhaW5lcigpKTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBhcHBlbmRDaGlsZHMsIHNldEF0dHJpYnV0ZXMgfSBmcm9tICcuLi8uLi9oZWxwZXIvaGVscGVyJztcbmltcG9ydCB7IEhvcml6b250YWxMaW5lIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VsZW1lbnRzL2F0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgY29sb3JzVGltZXIsIGRyYXdUaW1lciB9IGZyb20gJy4uL2FuaW1hdGlvbnMvdGltZXInO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGltZXJTVkcgPSAoKSA9PiB7XG4gICAgbGV0IHRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBsZXQgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnbGluZScpO1xuICAgIHNldEF0dHJpYnV0ZXMobGluZSwgSG9yaXpvbnRhbExpbmUuaG9yaXpvbnRhbCk7XG4gICAgYXBwZW5kQ2hpbGRzKHRpbWVyLCBsaW5lKTtcbiAgICByZXR1cm4gdGltZXI7XG59O1xuXG5leHBvcnQgY29uc3Qgdmlld1RpbWVyID0gKHN2ZykgPT4ge1xuICAgIGNvbnN0IGFuaW1hdGlvbnMgPSBbXG4gICAgICAgIGNvbG9yc1RpbWVyKHN2Zy5sYXN0Q2hpbGQsIDE1MDAwLCAnbm9uZScsIFtcbiAgICAgICAgICAgIHsgc3Ryb2tlOiAnZ3JlZW4nIH0sXG4gICAgICAgICAgICB7IHN0cm9rZTogJ29yYW5nZScgfSxcbiAgICAgICAgICAgIHsgc3Ryb2tlOiAncmVkJyB9LFxuICAgICAgICBdKSxcbiAgICAgICAgZHJhd1RpbWVyKHN2Zy5sYXN0Q2hpbGQsIDE1MDAwLCAnbm9uZScsIFtcbiAgICAgICAgICAgIHsgc3Ryb2tlRGFzaG9mZnNldDogJzk5dncnIH0sXG4gICAgICAgICAgICB7IHN0cm9rZURhc2hvZmZzZXQ6ICcwdncnIH0sXG4gICAgICAgIF0pLFxuICAgIF07XG4gICAgcmV0dXJuIGFuaW1hdGlvbnM7XG59O1xuIiwiaW1wb3J0IHtcbiAgICByZW1vdmVIaWRkZW4sXG4gICAgc2V0SGlkZGVuLFxuICAgIHNldExvd09wYWNpdHksXG4gICAgc2V0Tm9ybWFsT3BhY2l0eSxcbn0gZnJvbSAnLi4vYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlJztcblxuZXhwb3J0IGNvbnN0IGhpZGRlbkludGVyZmFjZUJlZm9yZVN0YXJ0UGxheSA9ICgpID0+IHtcbiAgICBzZXRIaWRkZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKSk7XG4gICAgc2V0SGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKSk7XG4gICAgc2V0SGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXBzJykpO1xuICAgIHJlbW92ZUhpZGRlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhpdCcpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB2aWV3SW50ZXJmYWNlQWZ0ZXJFbmRHYW1lID0gKCkgPT4ge1xuICAgIHJlbW92ZUhpZGRlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheScpKTtcbiAgICByZW1vdmVIaWRkZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpKTtcbiAgICByZW1vdmVIaWRkZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpcHMnKSk7XG4gICAgc2V0SGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0JykpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFBsYXllck1vdmVEZXNpZ24gPSAoYWksIHBsYXllcikgPT4ge1xuICAgIHNldE5vcm1hbE9wYWNpdHkoYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKSk7XG4gICAgc2V0Tm9ybWFsT3BhY2l0eShhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpKTtcbiAgICBzZXROb3JtYWxPcGFjaXR5KGFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSk7XG4gICAgc2V0TG93T3BhY2l0eShwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKSk7XG4gICAgc2V0TG93T3BhY2l0eShwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy55LWF4aXMnKSk7XG4gICAgc2V0TG93T3BhY2l0eShwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRBaU1vdmVEZXNpZ24gPSAoYWksIHBsYXllcikgPT4ge1xuICAgIHNldE5vcm1hbE9wYWNpdHkocGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykpO1xuICAgIHNldE5vcm1hbE9wYWNpdHkocGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueS1heGlzJykpO1xuICAgIHNldE5vcm1hbE9wYWNpdHkocGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSk7XG4gICAgc2V0TG93T3BhY2l0eShhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLngtYXhpcycpKTtcbiAgICBzZXRMb3dPcGFjaXR5KGFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueS1heGlzJykpO1xuICAgIHNldExvd09wYWNpdHkoYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRNaW5pU2hpcHlhcmREZXNpZ24gPSAoc2hpcHlhcmQpID0+IHtcbiAgICBjb25zdCBkZWNrcyA9IHNoaXB5YXJkLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yQWxsKCcuZGVjaycpO1xuICAgIGNvbnN0IHNoaXBzID0gc2hpcHlhcmQuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJyk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ21pbmktc2hpcCcpO1xuICAgIH0pO1xuICAgIGRlY2tzLmZvckVhY2goKGRlY2spID0+IHtcbiAgICAgICAgZGVjay5jbGFzc0xpc3QuYWRkKCdtaW5pLWNlbGwnKTtcbiAgICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=