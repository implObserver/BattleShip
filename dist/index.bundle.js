'use strict';
(self['webpackChunkbattleship'] = self['webpackChunkbattleship'] || []).push([
    ['index'],
    {
        /***/ './node_modules/css-loader/dist/cjs.js!./src/views/styles/main.css':
            /*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/styles/main.css ***!
  \*************************************************************************/
            /***/ (module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    },
                );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
                    );
                // Imports

                var ___CSS_LOADER_EXPORT___ =
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
                    );
                // Module
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    `*,
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
}

.y-axis {
    display: grid;
    grid-template-rows: repeat(var(--board-height), 2fr);
}

.board {
    display: inline-grid;
    grid-template-columns: repeat(var(--board-width), 2fr);
    grid-template-rows: repeat(var(--board-height), 2fr);
    border: 0.5vh rgba(0, 0, 255, 0.1) solid;
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

.x-cell,
.y-cell {
    justify-content: center;
    align-items: center;
    opacity: 0.5;
}

.marine-sector {
    border: 0.1vh rgba(0, 0, 255, 0.1) solid;
}

.ship {
    display: grid;
    width: min-content;
    height: min-content;
    background-color: rgba(0, 0, 255, 0.1);
    border: 0.1vh rgba(0, 0, 255, 1) solid;
}

.horizontal {
    grid-template-columns: repeat(4, 2fr);
}

.vertical {
    grid-template-rows: repeat(4, 2fr);
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
}
`,
                    '',
                    {
                        version: 3,
                        sources: ['webpack://./src/views/styles/main.css'],
                        names: [],
                        mappings:
                            'AAAA;;;IAGI,UAAU;IACV,SAAS;IACT,SAAS;IACT,YAAY;IACZ,sBAAsB;IACtB,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,mBAAmB;IACnB,YAAY;IACZ,4BAA4B;IAC5B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,8CAA8C;IAC9C,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,0CAA0C;IAC1C,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,2CAA2C;IAC3C,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,8BAA8B;IAC9B,sDAAsD;AAC1D;;AAEA;IACI,aAAa;IACb,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,oDAAoD;AACxD;;AAEA;IACI,oBAAoB;IACpB,sDAAsD;IACtD,oDAAoD;IACpD,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;;IAEI,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,sCAAsC;IACtC,sCAAsC;AAC1C;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8CAA8C;IAC9C,WAAW;IACX,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;;IAEI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,eAAe;AACnB;;AAEA;;IAEI,wBAAwB;IACxB,2CAA2C;AAC/C;;AAEA;IACI,aAAa;AACjB',
                        sourcesContent: [
                            '*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n}\n\n:root {\n    font-size: 2vh;\n    --board-width: 0;\n    --board-height: 0;\n    --cell-size: 5vh;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    justify-items: center;\n    align-content: center;\n    max-width: 100%;\n    max-height: 100%;\n    row-gap: 2vh;\n}\n\nspan {\n    padding: 1vh;\n    height: min-content;\n    min-width: max-content;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    width: 100%;\n    padding: 2vh;\n}\n\n.title {\n    display: grid;\n    font-size: 3rem;\n}\n\n.tips {\n    display: grid;\n    background-color: rgba(128, 128, 128, 0.2);\n    align-items: center;\n    padding: 1vh;\n    border-radius: min(2vh, 2vw);\n    height: min-content;\n}\n\n.main {\n    display: grid;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    grid-template-columns: min-content min-content;\n    height: min-content;\n}\n\n.shipyard {\n    display: grid;\n    align-content: center;\n    grid-template-rows: repeat(4, min-content);\n    row-gap: 6vh;\n    padding: 2vh;\n    width: 40vh;\n    height: 40vh;\n}\n\n.dock {\n    display: flex;\n    column-gap: 4vh;\n}\n\n.selected {\n    opacity: 0.01;\n}\n\n.board__axis-wrapper {\n    display: grid;\n    grid-template-rows: min-content min-content;\n    row-gap: 2vh;\n    width: min-content;\n    height: 100%;\n    padding: 5vh;\n}\n\n.axis-wrapper {\n    display: grid;\n    width: min-content;\n    grid-template-rows: min-content 1fr;\n}\n\n.x-axis {\n    display: grid;\n    width: min-content;\n    padding-left: var(--cell-size);\n    grid-template-columns: repeat(var(--board-width), 2fr);\n}\n\n.board-wrapper {\n    display: grid;\n    grid-template-columns: min-content min-content;\n}\n\n.y-axis {\n    display: grid;\n    grid-template-rows: repeat(var(--board-height), 2fr);\n}\n\n.board {\n    display: inline-grid;\n    grid-template-columns: repeat(var(--board-width), 2fr);\n    grid-template-rows: repeat(var(--board-height), 2fr);\n    border: 0.5vh rgba(0, 0, 255, 0.1) solid;\n}\n\n.marker {\n    display: grid;\n    justify-content: center;\n    padding-left: 5vh;\n}\n\n.cell {\n    display: grid;\n    width: var(--cell-size);\n    height: var(--cell-size);\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n\n.x-cell,\n.y-cell {\n    justify-content: center;\n    align-items: center;\n    opacity: 0.5;\n}\n\n.marine-sector {\n    border: 0.1vh rgba(0, 0, 255, 0.1) solid;\n}\n\n.ship {\n    display: grid;\n    width: min-content;\n    height: min-content;\n    background-color: rgba(0, 0, 255, 0.1);\n    border: 0.1vh rgba(0, 0, 255, 1) solid;\n}\n\n.horizontal {\n    grid-template-columns: repeat(4, 2fr);\n}\n\n.vertical {\n    grid-template-rows: repeat(4, 2fr);\n}\n\n.deck {\n    z-index: 999;\n}\n\n.footer {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    width: 100%;\n    justify-content: center;\n    gap: 4vh;\n}\n\n.random-mode,\n.manual-mode {\n    height: min-content;\n    display: grid;\n    border-bottom: 1px dotted blue;\n    color: blue;\n    cursor: pointer;\n}\n\n.random-mode:hover,\n.manual-mode:hover {\n    color: rgb(122, 231, 72);\n    border-bottom: 1px dotted rgb(122, 231, 72);\n}\n\n.hidden {\n    display: none;\n}\n',
                        ],
                        sourceRoot: '',
                    },
                ]);
                // Exports
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    ___CSS_LOADER_EXPORT___;

                /***/
            },

        /***/ './node_modules/css-loader/dist/runtime/api.js':
            /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
            /***/ (module) => {
                /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
                module.exports = function (cssWithMappingToString) {
                    var list = [];

                    // return the list of modules as css string
                    list.toString = function toString() {
                        return this.map(function (item) {
                            var content = '';
                            var needLayer = typeof item[5] !== 'undefined';
                            if (item[4]) {
                                content += '@supports ('.concat(item[4], ') {');
                            }
                            if (item[2]) {
                                content += '@media '.concat(item[2], ' {');
                            }
                            if (needLayer) {
                                content += '@layer'.concat(
                                    item[5].length > 0
                                        ? ' '.concat(item[5])
                                        : '',
                                    ' {',
                                );
                            }
                            content += cssWithMappingToString(item);
                            if (needLayer) {
                                content += '}';
                            }
                            if (item[2]) {
                                content += '}';
                            }
                            if (item[4]) {
                                content += '}';
                            }
                            return content;
                        }).join('');
                    };

                    // import a list of modules into the list
                    list.i = function i(
                        modules,
                        media,
                        dedupe,
                        supports,
                        layer,
                    ) {
                        if (typeof modules === 'string') {
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
                            if (typeof layer !== 'undefined') {
                                if (typeof item[5] === 'undefined') {
                                    item[5] = layer;
                                } else {
                                    item[1] = '@layer'
                                        .concat(
                                            item[5].length > 0
                                                ? ' '.concat(item[5])
                                                : '',
                                            ' {',
                                        )
                                        .concat(item[1], '}');
                                    item[5] = layer;
                                }
                            }
                            if (media) {
                                if (!item[2]) {
                                    item[2] = media;
                                } else {
                                    item[1] = '@media '
                                        .concat(item[2], ' {')
                                        .concat(item[1], '}');
                                    item[2] = media;
                                }
                            }
                            if (supports) {
                                if (!item[4]) {
                                    item[4] = ''.concat(supports);
                                } else {
                                    item[1] = '@supports ('
                                        .concat(item[4], ') {')
                                        .concat(item[1], '}');
                                    item[4] = supports;
                                }
                            }
                            list.push(item);
                        }
                    };
                    return list;
                };

                /***/
            },

        /***/ './node_modules/css-loader/dist/runtime/sourceMaps.js':
            /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
            /***/ (module) => {
                module.exports = function (item) {
                    var content = item[1];
                    var cssMapping = item[3];
                    if (!cssMapping) {
                        return content;
                    }
                    if (typeof btoa === 'function') {
                        var base64 = btoa(
                            unescape(
                                encodeURIComponent(JSON.stringify(cssMapping)),
                            ),
                        );
                        var data =
                            'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                                base64,
                            );
                        var sourceMapping = '/*# '.concat(data, ' */');
                        return [content].concat([sourceMapping]).join('\n');
                    }
                    return [content].join('\n');
                };

                /***/
            },

        /***/ './src/views/styles/main.css':
            /*!***********************************!*\
  !*** ./src/views/styles/main.css ***!
  \***********************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    },
                );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__(
                        /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
                    );
                /* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ =
                    __webpack_require__(
                        /*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ './node_modules/css-loader/dist/cjs.js!./src/views/styles/main.css',
                    );

                var options = {};

                options.styleTagTransform =
                    _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
                options.setAttributes =
                    _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

                options.insert =
                    _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
                        null,
                        'head',
                    );

                options.domAPI =
                    _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
                options.insertStyleElement =
                    _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

                var update =
                    _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
                        _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[
                            'default'
                        ],
                        options,
                    );

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[
                        'default'
                    ] &&
                    _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[
                        'default'
                    ].locals
                        ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[
                              'default'
                          ].locals
                        : undefined;

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
            /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
            /***/ (module) => {
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
                        var id = options.base
                            ? item[0] + options.base
                            : item[0];
                        var count = idCountMap[id] || 0;
                        var identifier = ''.concat(id, ' ').concat(count);
                        idCountMap[id] = count + 1;
                        var indexByIdentifier =
                            getIndexByIdentifier(identifier);
                        var obj = {
                            css: item[1],
                            media: item[2],
                            sourceMap: item[3],
                            supports: item[4],
                            layer: item[5],
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
                                references: 1,
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
                            if (
                                newObj.css === obj.css &&
                                newObj.media === obj.media &&
                                newObj.sourceMap === obj.sourceMap &&
                                newObj.supports === obj.supports &&
                                newObj.layer === obj.layer
                            ) {
                                return;
                            }
                            api.update((obj = newObj));
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

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
            /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
            /***/ (module) => {
                var memo = {};

                /* istanbul ignore next  */
                function getTarget(target) {
                    if (typeof memo[target] === 'undefined') {
                        var styleTarget = document.querySelector(target);

                        // Special case to return head of iframe instead of iframe itself
                        if (
                            window.HTMLIFrameElement &&
                            styleTarget instanceof window.HTMLIFrameElement
                        ) {
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
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
                        );
                    }
                    target.appendChild(style);
                }
                module.exports = insertBySelector;

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
            /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
            /***/ (module) => {
                /* istanbul ignore next  */
                function insertStyleElement(options) {
                    var element = document.createElement('style');
                    options.setAttributes(element, options.attributes);
                    options.insert(element, options.options);
                    return element;
                }
                module.exports = insertStyleElement;

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
            /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
            /***/ (module, __unused_webpack_exports, __webpack_require__) => {
                /* istanbul ignore next  */
                function setAttributesWithoutAttributes(styleElement) {
                    var nonce = true ? __webpack_require__.nc : 0;
                    if (nonce) {
                        styleElement.setAttribute('nonce', nonce);
                    }
                }
                module.exports = setAttributesWithoutAttributes;

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
            /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
            /***/ (module) => {
                /* istanbul ignore next  */
                function apply(styleElement, options, obj) {
                    var css = '';
                    if (obj.supports) {
                        css += '@supports ('.concat(obj.supports, ') {');
                    }
                    if (obj.media) {
                        css += '@media '.concat(obj.media, ' {');
                    }
                    var needLayer = typeof obj.layer !== 'undefined';
                    if (needLayer) {
                        css += '@layer'.concat(
                            obj.layer.length > 0 ? ' '.concat(obj.layer) : '',
                            ' {',
                        );
                    }
                    css += obj.css;
                    if (needLayer) {
                        css += '}';
                    }
                    if (obj.media) {
                        css += '}';
                    }
                    if (obj.supports) {
                        css += '}';
                    }
                    var sourceMap = obj.sourceMap;
                    if (sourceMap && typeof btoa !== 'undefined') {
                        css +=
                            '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                btoa(
                                    unescape(
                                        encodeURIComponent(
                                            JSON.stringify(sourceMap),
                                        ),
                                    ),
                                ),
                                ' */',
                            );
                    }

                    // For old IE
                    /* istanbul ignore if  */
                    options.styleTagTransform(
                        css,
                        styleElement,
                        options.options,
                    );
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
                    if (typeof document === 'undefined') {
                        return {
                            update: function update() {},
                            remove: function remove() {},
                        };
                    }
                    var styleElement = options.insertStyleElement(options);
                    return {
                        update: function update(obj) {
                            apply(styleElement, options, obj);
                        },
                        remove: function remove() {
                            removeStyleElement(styleElement);
                        },
                    };
                }
                module.exports = domAPI;

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
            /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
            /***/ (module) => {
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

                /***/
            },

        /***/ './src/controllers/listeners/forLinks.js':
            /*!***********************************************!*\
  !*** ./src/controllers/listeners/forLinks.js ***!
  \***********************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ setListenersForLinks: () =>
                            /* binding */ setListenersForLinks,
                        /* harmony export */
                    },
                );
                /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(/*! ../.. */ './src/index.js');
                /* harmony import */ var _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../../views/animations/changeVisible */ './src/views/animations/changeVisible.js',
                    );
                /* harmony import */ var _views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../../views/nodes/shipyard */ './src/views/nodes/shipyard.js',
                    );

                const setListenersForLinks = () => {
                    const manualModeLink =
                        document.querySelector('.manual-mode');
                    const randomModeLink =
                        document.querySelector('.random-mode');
                    const shipyard = document.querySelector('.shipyard');

                    const openManualMode = manualModeLink.addEventListener(
                        'click',
                        (e) => {
                            ___WEBPACK_IMPORTED_MODULE_0__.player1
                                .getGameboard()
                                .reset();
                            (0,
                            _views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_2__.viewShipyard)(
                                ___WEBPACK_IMPORTED_MODULE_0__.player1.getShipyard(),
                            );
                            (0,
                            _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setHidden)(
                                ___WEBPACK_IMPORTED_MODULE_0__.ai
                                    .getGameboard()
                                    .getNode(),
                            );
                            (0,
                            _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.removeHidden)(
                                shipyard,
                            );
                        },
                    );

                    const openRandomMode = randomModeLink.addEventListener(
                        'click',
                        (e) => {
                            (0,
                            _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.removeHidden)(
                                ___WEBPACK_IMPORTED_MODULE_0__.ai
                                    .getGameboard()
                                    .getNode(),
                            );
                            (0,
                            _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setHidden)(
                                shipyard,
                            );
                            ___WEBPACK_IMPORTED_MODULE_0__.player1
                                .getGameboard()
                                .randomFillingOfShips();
                        },
                    );
                };

                /***/
            },

        /***/ './src/controllers/listeners/forShips.js':
            /*!***********************************************!*\
  !*** ./src/controllers/listeners/forShips.js ***!
  \***********************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ setListenersForShips: () =>
                            /* binding */ setListenersForShips,
                        /* harmony export */
                    },
                );
                /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(/*! ../.. */ './src/index.js');
                /* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../../models/session */ './src/models/session.js',
                    );
                /* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../../views/nodes/ship */ './src/views/nodes/ship.js',
                    );
                /* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ../ship */ './src/controllers/ship.js',
                    );

                const setListenersForShips = (ships) => {
                    const border = document.querySelector('.player-board');
                    ships.forEach((ship) => {
                        const decks = ship.getBody();
                        decks.forEach((deck) => {
                            deck.getCellNode().addEventListener(
                                'mousedown',
                                (evt) => {
                                    _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.index =
                                        deck.getNumber();
                                },
                            );
                        });

                        ship.getContainer().addEventListener('click', (e) => {
                            if (ship.getHead() !== null) {
                                _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip =
                                    ship;
                                _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement =
                                    ship.getHead().getCellNode();
                                ship.orientationSwitch();
                                let isView = (0,
                                _views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__.viewShip)(
                                    ship,
                                    ship.getHead(),
                                );

                                if (isView) {
                                    ship.setOrientation();
                                } else {
                                    ship.orientationSwitch();
                                }

                                (0,
                                _models_session__WEBPACK_IMPORTED_MODULE_1__.resetSession)();
                            }
                        });

                        ship.getContainer().addEventListener(
                            `dragstart`,
                            (evt) => {
                                evt.target.classList.add(`selected`);
                                ___WEBPACK_IMPORTED_MODULE_0__.player1
                                    .getGameboard()
                                    .getUnstructedContainer()
                                    .forEach((cell) => {
                                        cell.getCellNode().style.border = '';
                                    });
                                _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip =
                                    ship;
                            },
                        );

                        ship.getContainer().addEventListener(
                            `dragend`,
                            (evt) => {
                                evt.target.classList.remove(`selected`);
                                (0,
                                _ship__WEBPACK_IMPORTED_MODULE_3__.shipDragEnd)();
                                (0,
                                _models_session__WEBPACK_IMPORTED_MODULE_1__.resetSession)();
                            },
                        );
                    });

                    border.addEventListener(`dragover`, (evt) => {
                        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement =
                            evt.target;
                    });
                };

                /***/
            },

        /***/ './src/controllers/ship.js':
            /*!*********************************!*\
  !*** ./src/controllers/ship.js ***!
  \*********************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ shipDragEnd: () =>
                            /* binding */ shipDragEnd,
                        /* harmony export */
                    },
                );
                /* harmony import */ var _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../models/gameConfig */ './src/models/gameConfig.js',
                    );
                /* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../models/session */ './src/models/session.js',
                    );
                /* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../views/nodes/ship */ './src/views/nodes/ship.js',
                    );

                const shipDragEnd = () => {
                    let isMoveable = false;
                    let isAlterMovable = false;
                    let body =
                        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip.getBody();
                    if (
                        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session
                            .currentElement !== null
                    ) {
                        isMoveable =
                            _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement.classList.contains(
                                `marine-sector`,
                            );
                        isAlterMovable =
                            _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement.classList.contains(
                                `deck`,
                            );
                    }

                    if (!isMoveable && !isAlterMovable) {
                        return false;
                    }

                    if (isMoveable) {
                        for (
                            let i = 0;
                            i <
                            _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__
                                .Config.Gameboard.height;
                            i++
                        ) {
                            for (
                                let j = 0;
                                j <
                                _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__
                                    .Config.Gameboard.width;
                                j++
                            ) {
                                if (
                                    _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip
                                        .getBoard()
                                        .getStructedContainer()
                                        [j][i].getCellNode() ===
                                    _models_session__WEBPACK_IMPORTED_MODULE_1__
                                        .Session.currentElement
                                ) {
                                    return addShipOnBoard(
                                        _models_session__WEBPACK_IMPORTED_MODULE_1__
                                            .Session.index,
                                        j,
                                        i,
                                    );
                                }
                            }
                        }
                    } else if (isAlterMovable) {
                        for (let i = 0; i < body.length; i++) {
                            if (
                                body[i].getCellNode() ===
                                _models_session__WEBPACK_IMPORTED_MODULE_1__
                                    .Session.currentElement
                            ) {
                                _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.doubleIndex =
                                    _models_session__WEBPACK_IMPORTED_MODULE_1__
                                        .Session.index - i;
                            }
                        }
                        if (
                            _models_session__WEBPACK_IMPORTED_MODULE_1__.Session
                                .doubleIndex !== 'ship'
                        ) {
                            let head =
                                _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip
                                    .getHead()
                                    .getCellNode();
                            for (
                                let i = 0;
                                i <
                                _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__
                                    .Config.Gameboard.height;
                                i++
                            ) {
                                for (
                                    let j = 0;
                                    j <
                                    _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__
                                        .Config.Gameboard.width;
                                    j++
                                ) {
                                    if (
                                        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip
                                            .getBoard()
                                            .getStructedContainer()
                                            [j][i].getCellNode() === head
                                    ) {
                                        return addShipOnBoard(
                                            _models_session__WEBPACK_IMPORTED_MODULE_1__
                                                .Session.doubleIndex,
                                            j,
                                            i,
                                        );
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
                    return (0,
                    _views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__.viewShip)(
                        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session
                            .activeShip,
                        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip
                            .getBoard()
                            .getStructedContainer()[data.x][data.y],
                    );
                };

                /***/
            },

        /***/ './src/helper/helper.js':
            /*!******************************!*\
  !*** ./src/helper/helper.js ***!
  \******************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ randomIntFromInterval: () =>
                            /* binding */ randomIntFromInterval,
                        /* harmony export */ removeChilds: () =>
                            /* binding */ removeChilds,
                        /* harmony export */
                    },
                );
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

                /***/
            },

        /***/ './src/index.js':
            /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ ai: () => /* binding */ ai,
                        /* harmony export */ player1: () =>
                            /* binding */ player1,
                        /* harmony export */
                    },
                );
                /* harmony import */ var _views_styles_main_css__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./views/styles/main.css */ './src/views/styles/main.css',
                    );
                /* harmony import */ var _models_player__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./models/player */ './src/models/player.js',
                    );
                /* harmony import */ var _views_nodes_profile__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ./views/nodes/profile */ './src/views/nodes/profile.js',
                    );
                /* harmony import */ var _controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ./controllers/listeners/forLinks */ './src/controllers/listeners/forLinks.js',
                    );
                /* harmony import */ var _views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! ./views/nodes/shipyard */ './src/views/nodes/shipyard.js',
                    );
                /* harmony import */ var _controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__(
                        /*! ./controllers/listeners/forShips */ './src/controllers/listeners/forShips.js',
                    );
                /* harmony import */ var _models_gameBoard__WEBPACK_IMPORTED_MODULE_6__ =
                    __webpack_require__(
                        /*! ./models/gameBoard */ './src/models/gameBoard.js',
                    );

                const player1 = (0,
                _models_player__WEBPACK_IMPORTED_MODULE_1__.Profile)(
                    1,
                    'Player1',
                    'player-board',
                );
                const ai = (0,
                _models_player__WEBPACK_IMPORTED_MODULE_1__.Profile)(
                    0,
                    'AI',
                    'ai-board',
                );
                (0,
                _views_nodes_profile__WEBPACK_IMPORTED_MODULE_2__.viewProfile)(
                    player1,
                );
                (0,
                _views_nodes_profile__WEBPACK_IMPORTED_MODULE_2__.viewProfile)(
                    ai,
                );
                (0,
                _views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_4__.viewShipyard)(
                    player1.getShipyard(),
                );
                (0,
                _controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_3__.setListenersForLinks)();
                (0,
                _controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_5__.setListenersForShips)(
                    player1.getShipyard().getDockWithFregats().getShips(),
                );
                (0,
                _controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_5__.setListenersForShips)(
                    player1.getShipyard().getDockWithCaravels().getShips(),
                );
                (0,
                _controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_5__.setListenersForShips)(
                    player1.getShipyard().getDockWithDrakkars().getShips(),
                );
                (0,
                _controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_5__.setListenersForShips)(
                    player1.getShipyard().getDockWithBoats().getShips(),
                );
                player1.getGameboard().randomFillingOfShips();

                /***/
            },

        /***/ './src/models/alphabets.js':
            /*!*********************************!*\
  !*** ./src/models/alphabets.js ***!
  \*********************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ Alphabets: () =>
                            /* binding */ Alphabets,
                        /* harmony export */
                    },
                );
                const Alphabet = (firstCharCode, lastCharCode) => {
                    const long = lastCharCode - firstCharCode + 1;
                    const codes = Array.from(
                        Array(long).keys(),
                        (x) => x + firstCharCode,
                    );

                    const isThisAlphabet = (charCode) => {
                        if (
                            charCode >= firstCharCode &&
                            charCode <= lastCharCode
                        ) {
                            return true;
                        }
                        return false;
                    };

                    return {
                        firstCharCode,
                        lastCharCode,
                        long,
                        isThisAlphabet,
                        codes,
                    };
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

                /***/
            },

        /***/ './src/models/cell.js':
            /*!****************************!*\
  !*** ./src/models/cell.js ***!
  \****************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ Cell: () => /* binding */ Cell,
                        /* harmony export */ Deck: () => /* binding */ Deck,
                        /* harmony export */ MarineSector: () =>
                            /* binding */ MarineSector,
                        /* harmony export */
                    },
                );
                /* harmony import */ var _views_nodes_factory__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../views/nodes/factory */ './src/views/nodes/factory.js',
                    );

                const Cell = (x = -1, y = -1, name = 'cell') => {
                    let hit = false;
                    let parent = 'free';
                    let node = (0,
                    _views_nodes_factory__WEBPACK_IMPORTED_MODULE_0__.getNode)(
                        name,
                        'cell',
                    );

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
                        setXY,
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

                    return Object.assign(prototype, {
                        isFree,
                        clear,
                        occupy,
                        getOccupant,
                    });
                };

                /***/
            },

        /***/ './src/models/cellHandler.js':
            /*!***********************************!*\
  !*** ./src/models/cellHandler.js ***!
  \***********************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ CellHandler: () =>
                            /* binding */ CellHandler,
                        /* harmony export */
                    },
                );
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

                /***/
            },

        /***/ './src/models/gameBoard.js':
            /*!*********************************!*\
  !*** ./src/models/gameBoard.js ***!
  \*********************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ Gameboard: () =>
                            /* binding */ Gameboard,
                        /* harmony export */
                    },
                );
                /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(/*! .. */ './src/index.js');
                /* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../helper/helper */ './src/helper/helper.js',
                    );
                /* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../views/nodes/ship */ './src/views/nodes/ship.js',
                    );
                /* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(/*! ./cell */ './src/models/cell.js');
                /* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! ./gameConfig */ './src/models/gameConfig.js',
                    );

                const Gameboard = (name, player) => {
                    const width =
                        _gameConfig__WEBPACK_IMPORTED_MODULE_4__.Config
                            .Gameboard.width;
                    const height =
                        _gameConfig__WEBPACK_IMPORTED_MODULE_4__.Config
                            .Gameboard.height;
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
                            (0,
                            _views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__.viewShipOnRandomCell)(
                                ship,
                                [...getUnstructedContainer()],
                            );
                        });
                    };

                    return {
                        randomFillingOfShips,
                        reset,
                        getPlayer,
                        getStructedContainer,
                        getUnstructedContainer,
                        getSize,
                        getNode,
                    };
                };

                const fillBoard = (width, height) => {
                    let structed = [];
                    let unstructed = [];

                    for (let i = 0; i < height; i++) {
                        let line = [];
                        for (let j = 0; j < width; j++) {
                            const cell = (0,
                            _cell__WEBPACK_IMPORTED_MODULE_3__.MarineSector)(
                                j,
                                i,
                            );
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

                /***/
            },

        /***/ './src/models/gameConfig.js':
            /*!**********************************!*\
  !*** ./src/models/gameConfig.js ***!
  \**********************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ Config: () => /* binding */ Config,
                        /* harmony export */
                    },
                );
                const Config = (() => {
                    const Gameboard = (() => {
                        const width = 10;
                        const height = 10;
                        return { width, height };
                    })();

                    const Elements = (() => {
                        const shipTypes = [
                            'fregats',
                            'caravels',
                            'drakkars',
                            'boats',
                        ];
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

                /***/
            },

        /***/ './src/models/player.js':
            /*!******************************!*\
  !*** ./src/models/player.js ***!
  \******************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ Profile: () =>
                            /* binding */ Profile,
                        /* harmony export */
                    },
                );
                /* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./gameBoard */ './src/models/gameBoard.js',
                    );
                /* harmony import */ var _shipyard__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./shipyard */ './src/models/shipyard.js',
                    );

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

                    let gameboard = (0,
                    _gameBoard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(
                        nodeId,
                        prototype,
                    );
                    let shipyard = (0,
                    _shipyard__WEBPACK_IMPORTED_MODULE_1__.Shipyard)(prototype);

                    const getGameboard = () => {
                        return gameboard;
                    };

                    const getShipyard = () => {
                        return shipyard;
                    };

                    return Object.assign(prototype, {
                        getGameboard,
                        getShipyard,
                    });
                };

                /***/
            },

        /***/ './src/models/session.js':
            /*!*******************************!*\
  !*** ./src/models/session.js ***!
  \*******************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ Session: () =>
                            /* binding */ Session,
                        /* harmony export */ resetSession: () =>
                            /* binding */ resetSession,
                        /* harmony export */
                    },
                );
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

                /***/
            },

        /***/ './src/models/ship.js':
            /*!****************************!*\
  !*** ./src/models/ship.js ***!
  \****************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ Boat: () => /* binding */ Boat,
                        /* harmony export */ Caravel: () =>
                            /* binding */ Caravel,
                        /* harmony export */ Drakkar: () =>
                            /* binding */ Drakkar,
                        /* harmony export */ Fregat: () => /* binding */ Fregat,
                        /* harmony export */ Ship: () => /* binding */ Ship,
                        /* harmony export */
                    },
                );
                /* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../helper/helper */ './src/helper/helper.js',
                    );
                /* harmony import */ var _views_nodes_factory__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../views/nodes/factory */ './src/views/nodes/factory.js',
                    );
                /* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../views/nodes/ship */ './src/views/nodes/ship.js',
                    );
                /* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(/*! ./cell */ './src/models/cell.js');
                /* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! ./gameBoard */ './src/models/gameBoard.js',
                    );
                /* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__(
                        /*! ./gameConfig */ './src/models/gameConfig.js',
                    );
                /* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_6__ =
                    __webpack_require__(
                        /*! ./session */ './src/models/session.js',
                    );
                /* harmony import */ var _waterAreas__WEBPACK_IMPORTED_MODULE_7__ =
                    __webpack_require__(
                        /*! ./waterAreas */ './src/models/waterAreas.js',
                    );

                const Ship = (length, player) => {
                    const container = (0,
                    _views_nodes_factory__WEBPACK_IMPORTED_MODULE_1__.getNode)(
                        'ship',
                        'horizontal',
                    );
                    let body = [];
                    let live = true;
                    let horizontal = true;
                    let head = null;
                    let shipWaterAreas = (0,
                    _waterAreas__WEBPACK_IMPORTED_MODULE_7__.ShipWaterAreas)(
                        player,
                        container,
                    );

                    const fillContainer = () => {
                        for (let i = 0; i < length; i++) {
                            let deck = (0,
                            _cell__WEBPACK_IMPORTED_MODULE_3__.Deck)(i);
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
                        let areas = (0,
                        _waterAreas__WEBPACK_IMPORTED_MODULE_7__.ShipWaterAreas)(
                            player,
                            container,
                        );
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
                        (0,
                        _helper_helper__WEBPACK_IMPORTED_MODULE_0__.randomIntFromInterval)(
                            0,
                            1,
                        ) === 1
                            ? setHorizontal()
                            : setVertical();
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
                        shipWaterAreas = (0,
                        _waterAreas__WEBPACK_IMPORTED_MODULE_7__.ShipWaterAreas)(
                            player,
                            container,
                        );
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

                /***/
            },

        /***/ './src/models/shipyard.js':
            /*!********************************!*\
  !*** ./src/models/shipyard.js ***!
  \********************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ Shipyard: () =>
                            /* binding */ Shipyard,
                        /* harmony export */
                    },
                );
                /* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./gameConfig */ './src/models/gameConfig.js',
                    );
                /* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(/*! ./ship */ './src/models/ship.js');

                const Shipyard = (player) => {
                    const fregats = Dock(
                        _gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements
                            .numberOf.fregates,
                        'Fregat',
                        player,
                    );
                    const caravels = Dock(
                        _gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements
                            .numberOf.caravels,
                        'Caravel',
                        player,
                    );
                    const drakkars = Dock(
                        _gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements
                            .numberOf.drakkars,
                        'Drakkar',
                        player,
                    );
                    const boats = Dock(
                        _gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements
                            .numberOf.boats,
                        'Boat',
                        player,
                    );
                    const ships = fregats
                        .getShips()
                        .concat(
                            caravels
                                .getShips()
                                .concat(
                                    drakkars
                                        .getShips()
                                        .concat(boats.getShips()),
                                ),
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
                                return (0,
                                _ship__WEBPACK_IMPORTED_MODULE_1__.Fregat)(
                                    player,
                                );
                            case 'Caravel':
                                return (0,
                                _ship__WEBPACK_IMPORTED_MODULE_1__.Caravel)(
                                    player,
                                );
                            case 'Drakkar':
                                return (0,
                                _ship__WEBPACK_IMPORTED_MODULE_1__.Drakkar)(
                                    player,
                                );
                            case 'Boat':
                                return (0,
                                _ship__WEBPACK_IMPORTED_MODULE_1__.Boat)(
                                    player,
                                );
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

                /***/
            },

        /***/ './src/models/waterAreas.js':
            /*!**********************************!*\
  !*** ./src/models/waterAreas.js ***!
  \**********************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ ShipWaterAreas: () =>
                            /* binding */ ShipWaterAreas,
                        /* harmony export */
                    },
                );
                /* harmony import */ var _cellHandler__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./cellHandler */ './src/models/cellHandler.js',
                    );
                /* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./session */ './src/models/session.js',
                    );

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
                        let handler = (0,
                        _cellHandler__WEBPACK_IMPORTED_MODULE_0__.CellHandler)();
                        let areas = [];
                        let parent = player
                            .getGameboard()
                            .getStructedContainer();
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
                            if (
                                !sector.isFree() &&
                                sector.getOccupant() !== container
                            ) {
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

                /***/
            },

        /***/ './src/views/animations/changeVisible.js':
            /*!***********************************************!*\
  !*** ./src/views/animations/changeVisible.js ***!
  \***********************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ removeHidden: () =>
                            /* binding */ removeHidden,
                        /* harmony export */ setHidden: () =>
                            /* binding */ setHidden,
                        /* harmony export */
                    },
                );
                const setHidden = (node) => {
                    node.classList.add('hidden');
                };

                const removeHidden = (node) => {
                    node.classList.remove('hidden');
                };

                /***/
            },

        /***/ './src/views/dragAndDrop/setDraggable.js':
            /*!***********************************************!*\
  !*** ./src/views/dragAndDrop/setDraggable.js ***!
  \***********************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ setDraggable: () =>
                            /* binding */ setDraggable,
                        /* harmony export */
                    },
                );
                const setDraggable = (node) => {
                    node.draggable = true;
                };

                /***/
            },

        /***/ './src/views/dragAndDrop/ships.js':
            /*!****************************************!*\
  !*** ./src/views/dragAndDrop/ships.js ***!
  \****************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ setDraggableForShips: () =>
                            /* binding */ setDraggableForShips,
                        /* harmony export */
                    },
                );
                /* harmony import */ var _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../../models/gameConfig */ './src/models/gameConfig.js',
                    );
                /* harmony import */ var _setDraggable__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./setDraggable */ './src/views/dragAndDrop/setDraggable.js',
                    );

                const setDraggableForShips = () => {
                    _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements.shipTypes.forEach(
                        (type) => {
                            forType(type);
                        },
                    );
                };

                const forType = (type) => {
                    const dock = document.querySelector(`.${type}`);
                    const ships = Array.from(dock.children);

                    ships.forEach((ship) => {
                        (0,
                        _setDraggable__WEBPACK_IMPORTED_MODULE_1__.setDraggable)(
                            ship,
                        );
                    });
                };

                /***/
            },

        /***/ './src/views/nodes/axis.js':
            /*!*********************************!*\
  !*** ./src/views/nodes/axis.js ***!
  \*********************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ viewAxis: () =>
                            /* binding */ viewAxis,
                        /* harmony export */
                    },
                );
                /* harmony import */ var _models_alphabets__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../../models/alphabets */ './src/models/alphabets.js',
                    );
                /* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./factory */ './src/views/nodes/factory.js',
                    );

                const alphabet =
                    _models_alphabets__WEBPACK_IMPORTED_MODULE_0__.Alphabets.rus()
                        .codes;

                const viewAxis = (board) => {
                    const node = board.getNode();
                    const xAxis = node.querySelector('.x-axis');
                    const yAxis = node.querySelector('.y-axis');
                    const size = board.getSize();

                    for (let i = 0; i < size.width; i++) {
                        const cell = (0,
                        _factory__WEBPACK_IMPORTED_MODULE_1__.getNode)(
                            'x-cell',
                            'cell',
                        );
                        const letter = String.fromCharCode(
                            alphabet[i],
                        ).toUpperCase();
                        cell.textContent = letter;
                        xAxis.appendChild(cell);
                    }

                    for (let i = 0; i < size.height; i++) {
                        const cell = (0,
                        _factory__WEBPACK_IMPORTED_MODULE_1__.getNode)(
                            'y-cell',
                            'cell',
                        );
                        cell.textContent = i;
                        yAxis.appendChild(cell);
                    }
                };

                /***/
            },

        /***/ './src/views/nodes/factory.js':
            /*!************************************!*\
  !*** ./src/views/nodes/factory.js ***!
  \************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ getNode: () =>
                            /* binding */ getNode,
                        /* harmony export */
                    },
                );
                const getNode = (...names) => {
                    const node = document.createElement('div');
                    names.forEach((name) => {
                        if (name !== '') {
                            node.classList.add(name);
                        }
                    });
                    return node;
                };

                /***/
            },

        /***/ './src/views/nodes/gameboard.js':
            /*!**************************************!*\
  !*** ./src/views/nodes/gameboard.js ***!
  \**************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ viewBoard: () =>
                            /* binding */ viewBoard,
                        /* harmony export */
                    },
                );
                /* harmony import */ var _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../../models/gameConfig */ './src/models/gameConfig.js',
                    );

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
                        _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config
                            .Gameboard.width,
                    );
                    document.documentElement.style.setProperty(
                        '--board-height',
                        _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config
                            .Gameboard.height,
                    );
                })();

                /***/
            },

        /***/ './src/views/nodes/profile.js':
            /*!************************************!*\
  !*** ./src/views/nodes/profile.js ***!
  \************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ viewProfile: () =>
                            /* binding */ viewProfile,
                        /* harmony export */
                    },
                );
                /* harmony import */ var _axis__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./axis */ './src/views/nodes/axis.js',
                    );
                /* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./gameboard */ './src/views/nodes/gameboard.js',
                    );

                const viewProfile = (profile) => {
                    (0, _gameboard__WEBPACK_IMPORTED_MODULE_1__.viewBoard)(
                        profile.getGameboard(),
                    );
                    (0, _axis__WEBPACK_IMPORTED_MODULE_0__.viewAxis)(
                        profile.getGameboard(),
                    );
                };

                /***/
            },

        /***/ './src/views/nodes/ship.js':
            /*!*********************************!*\
  !*** ./src/views/nodes/ship.js ***!
  \*********************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ viewShip: () =>
                            /* binding */ viewShip,
                        /* harmony export */ viewShipOnRandomCell: () =>
                            /* binding */ viewShipOnRandomCell,
                        /* harmony export */
                    },
                );
                /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(/*! ../.. */ './src/index.js');
                /* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../../helper/helper */ './src/helper/helper.js',
                    );
                /* harmony import */ var _animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../animations/changeVisible */ './src/views/animations/changeVisible.js',
                    );

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
                    if (
                        ___WEBPACK_IMPORTED_MODULE_0__.player1
                            .getShipyard()
                            .isEmpty()
                    ) {
                        setTimeout(() => {
                            closeManualMenu();
                        }, 500);
                    }
                };

                const closeManualMenu = () => {
                    const shipyard = document.querySelector('.shipyard');
                    (0,
                    _animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.removeHidden)(
                        ___WEBPACK_IMPORTED_MODULE_0__.ai
                            .getGameboard()
                            .getNode(),
                    );
                    (0,
                    _animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.setHidden)(
                        shipyard,
                    );
                };

                const viewShipOnRandomCell = (ship, cells) => {
                    let cell = getRandomCell(cells);
                    let isView = viewShip(ship, cell);
                    return isView ? true : viewShipOnRandomCell(ship, cells);
                };

                const getRandomCell = (cells) => {
                    let index = (0,
                    _helper_helper__WEBPACK_IMPORTED_MODULE_1__.randomIntFromInterval)(
                        0,
                        cells.length - 1,
                    );
                    return cells.splice(index, 1)[0];
                };

                /***/
            },

        /***/ './src/views/nodes/shipyard.js':
            /*!*************************************!*\
  !*** ./src/views/nodes/shipyard.js ***!
  \*************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ viewShipyard: () =>
                            /* binding */ viewShipyard,
                        /* harmony export */
                    },
                );
                /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(/*! ../.. */ './src/index.js');
                /* harmony import */ var _models_gameConfig__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../../models/gameConfig */ './src/models/gameConfig.js',
                    );
                /* harmony import */ var _dragAndDrop_ships__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../dragAndDrop/ships */ './src/views/dragAndDrop/ships.js',
                    );

                const viewShipyard = () => {
                    fillShipyardNode();
                    (0,
                    _dragAndDrop_ships__WEBPACK_IMPORTED_MODULE_2__.setDraggableForShips)();
                };

                const fillShipyardNode = () => {
                    _models_gameConfig__WEBPACK_IMPORTED_MODULE_1__.Config.Elements.shipTypes.forEach(
                        (type) => {
                            addType(type);
                        },
                    );
                };

                const addType = (type) => {
                    const dock = document.querySelector(`.${type}`);
                    const ships = ___WEBPACK_IMPORTED_MODULE_0__.player1
                        .getShipyard()
                        .getShipsOfType(type);
                    ships.forEach((ship) => {
                        dock.appendChild(ship.getContainer());
                    });
                };

                /***/
            },
    },
    /******/ (__webpack_require__) => {
        // webpackRuntimeModules
        /******/ var __webpack_exec__ = (moduleId) =>
            __webpack_require__((__webpack_require__.s = moduleId));
        /******/ var __webpack_exports__ = __webpack_exec__('./src/index.js');
        /******/
    },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDhGQUE4RixVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdB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QUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IscUVBQXFCO0FBQ3JDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDZ0M7QUFDaUI7QUFDVzs7QUFFckQ7QUFDUDtBQUNBLElBQUksd0VBQW9CO0FBQ3hCOztBQUVBO0FBQ0EsSUFBSSxzREFBTTtBQUNWO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsNENBQTRDLEtBQUs7QUFDakQsa0JBQWtCLHNDQUFPO0FBQ3pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9zdHlsZXMvbWFpbi5jc3M/ODlmNiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckxpbmtzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbGxlcnMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlbHBlci9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9hbHBoYWJldHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvY2VsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9jZWxsSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvZ2FtZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3NoaXB5YXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3dhdGVyQXJlYXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9hbmltYXRpb25zL2NoYW5nZVZpc2libGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9kcmFnQW5kRHJvcC9zZXREcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9kcmFnQW5kRHJvcC9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL2F4aXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9mYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9zaGlweWFyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgIC0tYm9hcmQtd2lkdGg6IDA7XG4gICAgLS1ib2FyZC1oZWlnaHQ6IDA7XG4gICAgLS1jZWxsLXNpemU6IDV2aDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICByb3ctZ2FwOiAydmg7XG59XG5cbnNwYW4ge1xuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAydmg7XG59XG5cbi50aXRsZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi50aXBzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMnZoLCAydncpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4uc2hpcHlhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcbiAgICByb3ctZ2FwOiA2dmg7XG4gICAgcGFkZGluZzogMnZoO1xuICAgIHdpZHRoOiA0MHZoO1xuICAgIGhlaWdodDogNDB2aDtcbn1cblxuLmRvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sdW1uLWdhcDogNHZoO1xufVxuXG4uc2VsZWN0ZWQge1xuICAgIG9wYWNpdHk6IDAuMDE7XG59XG5cbi5ib2FyZF9fYXhpcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgcm93LWdhcDogMnZoO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogNXZoO1xufVxuXG4uYXhpcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbn1cblxuLngtYXhpcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1jZWxsLXNpemUpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgMmZyKTtcbn1cblxuLmJvYXJkLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbn1cblxuLnktYXhpcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCAyZnIpO1xufVxuXG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgMmZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCAyZnIpO1xuICAgIGJvcmRlcjogMC41dmggcmdiYSgwLCAwLCAyNTUsIDAuMSkgc29saWQ7XG59XG5cbi5tYXJrZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiA1dmg7XG59XG5cbi5jZWxsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ueC1jZWxsLFxuLnktY2VsbCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5tYXJpbmUtc2VjdG9yIHtcbiAgICBib3JkZXI6IDAuMXZoIHJnYmEoMCwgMCwgMjU1LCAwLjEpIHNvbGlkO1xufVxuXG4uc2hpcCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbiAgICBib3JkZXI6IDAuMXZoIHJnYmEoMCwgMCwgMjU1LCAxKSBzb2xpZDtcbn1cblxuLmhvcml6b250YWwge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDJmcik7XG59XG5cbi52ZXJ0aWNhbCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMmZyKTtcbn1cblxuLmRlY2sge1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuLmZvb3RlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNHZoO1xufVxuXG4ucmFuZG9tLW1vZGUsXG4ubWFudWFsLW1vZGUge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsdWU7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmFuZG9tLW1vZGU6aG92ZXIsXG4ubWFudWFsLW1vZGU6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMTIyLCAyMzEsIDcyKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYigxMjIsIDIzMSwgNzIpO1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3Mvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNEQUFzRDtJQUN0RCxvREFBb0Q7SUFDcEQsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsUUFBUTtBQUNaOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIC0tYm9hcmQtd2lkdGg6IDA7XFxuICAgIC0tYm9hcmQtaGVpZ2h0OiAwO1xcbiAgICAtLWNlbGwtc2l6ZTogNXZoO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgcm93LWdhcDogMnZoO1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAydmg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnRpcHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogbWluKDJ2aCwgMnZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5zaGlweWFyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWluLWNvbnRlbnQpO1xcbiAgICByb3ctZ2FwOiA2dmg7XFxuICAgIHBhZGRpbmc6IDJ2aDtcXG4gICAgd2lkdGg6IDQwdmg7XFxuICAgIGhlaWdodDogNDB2aDtcXG59XFxuXFxuLmRvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiA0dmg7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIG9wYWNpdHk6IDAuMDE7XFxufVxcblxcbi5ib2FyZF9fYXhpcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgcm93LWdhcDogMnZoO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogNXZoO1xcbn1cXG5cXG4uYXhpcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLngtYXhpcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksIDJmcik7XFxufVxcblxcbi5ib2FyZC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG59XFxuXFxuLnktYXhpcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLWhlaWdodCksIDJmcik7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksIDJmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLWhlaWdodCksIDJmcik7XFxuICAgIGJvcmRlcjogMC41dmggcmdiYSgwLCAwLCAyNTUsIDAuMSkgc29saWQ7XFxufVxcblxcbi5tYXJrZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1dmg7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLngtY2VsbCxcXG4ueS1jZWxsIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLm1hcmluZS1zZWN0b3Ige1xcbiAgICBib3JkZXI6IDAuMXZoIHJnYmEoMCwgMCwgMjU1LCAwLjEpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XFxuICAgIGJvcmRlcjogMC4xdmggcmdiYSgwLCAwLCAyNTUsIDEpIHNvbGlkO1xcbn1cXG5cXG4uaG9yaXpvbnRhbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDJmcik7XFxufVxcblxcbi52ZXJ0aWNhbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDJmcik7XFxufVxcblxcbi5kZWNrIHtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDR2aDtcXG59XFxuXFxuLnJhbmRvbS1tb2RlLFxcbi5tYW51YWwtbW9kZSB7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmx1ZTtcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJhbmRvbS1tb2RlOmhvdmVyLFxcbi5tYW51YWwtbW9kZTpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMTIyLCAyMzEsIDcyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZ2IoMTIyLCAyMzEsIDcyKTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWksIHBsYXllcjEgfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyByZW1vdmVIaWRkZW4sIHNldEhpZGRlbiB9IGZyb20gJy4uLy4uL3ZpZXdzL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZSc7XG5pbXBvcnQgeyB2aWV3U2hpcHlhcmQgfSBmcm9tICcuLi8uLi92aWV3cy9ub2Rlcy9zaGlweWFyZCc7XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JMaW5rcyA9ICgpID0+IHtcbiAgICBjb25zdCBtYW51YWxNb2RlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW51YWwtbW9kZScpO1xuICAgIGNvbnN0IHJhbmRvbU1vZGVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbS1tb2RlJyk7XG4gICAgY29uc3Qgc2hpcHlhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHlhcmQnKTtcblxuICAgIGNvbnN0IG9wZW5NYW51YWxNb2RlID0gbWFudWFsTW9kZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBwbGF5ZXIxLmdldEdhbWVib2FyZCgpLnJlc2V0KCk7XG4gICAgICAgIHZpZXdTaGlweWFyZChwbGF5ZXIxLmdldFNoaXB5YXJkKCkpO1xuICAgICAgICBzZXRIaWRkZW4oYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgcmVtb3ZlSGlkZGVuKHNoaXB5YXJkKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG9wZW5SYW5kb21Nb2RlID0gcmFuZG9tTW9kZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICByZW1vdmVIaWRkZW4oYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgc2V0SGlkZGVuKHNoaXB5YXJkKTtcbiAgICAgICAgcGxheWVyMS5nZXRHYW1lYm9hcmQoKS5yYW5kb21GaWxsaW5nT2ZTaGlwcygpO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IHBsYXllcjEgfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyBTZXNzaW9uLCByZXNldFNlc3Npb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvc2Vzc2lvbic7XG5pbXBvcnQgeyB2aWV3U2hpcCB9IGZyb20gJy4uLy4uL3ZpZXdzL25vZGVzL3NoaXAnO1xuaW1wb3J0IHsgc2hpcERyYWdFbmQgfSBmcm9tICcuLi9zaGlwJztcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvclNoaXBzID0gKHNoaXBzKSA9PiB7XG4gICAgY29uc3QgYm9yZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgZGVja3MgPSBzaGlwLmdldEJvZHkoKTtcbiAgICAgICAgZGVja3MuZm9yRWFjaCgoZGVjaykgPT4ge1xuICAgICAgICAgICAgZGVjay5nZXRDZWxsTm9kZSgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldnQpID0+IHtcbiAgICAgICAgICAgICAgICBTZXNzaW9uLmluZGV4ID0gZGVjay5nZXROdW1iZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmdldEhlYWQoKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgU2Vzc2lvbi5jdXJyZW50RWxlbWVudCA9IHNoaXAuZ2V0SGVhZCgpLmdldENlbGxOb2RlKCk7XG4gICAgICAgICAgICAgICAgc2hpcC5vcmllbnRhdGlvblN3aXRjaCgpO1xuICAgICAgICAgICAgICAgIGxldCBpc1ZpZXcgPSB2aWV3U2hpcChzaGlwLCBzaGlwLmdldEhlYWQoKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNWaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuc2V0T3JpZW50YXRpb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLm9yaWVudGF0aW9uU3dpdGNoKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzZXRTZXNzaW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXAuZ2V0Q29udGFpbmVyKCkuYWRkRXZlbnRMaXN0ZW5lcihgZHJhZ3N0YXJ0YCwgKGV2dCkgPT4ge1xuICAgICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuYWRkKGBzZWxlY3RlZGApO1xuICAgICAgICAgICAgcGxheWVyMVxuICAgICAgICAgICAgICAgIC5nZXRHYW1lYm9hcmQoKVxuICAgICAgICAgICAgICAgIC5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKClcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmdldENlbGxOb2RlKCkuc3R5bGUuYm9yZGVyID0gJyc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAgPSBzaGlwO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoYGRyYWdlbmRgLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoYHNlbGVjdGVkYCk7XG4gICAgICAgICAgICBzaGlwRHJhZ0VuZCgpO1xuICAgICAgICAgICAgcmVzZXRTZXNzaW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYm9yZGVyLmFkZEV2ZW50TGlzdGVuZXIoYGRyYWdvdmVyYCwgKGV2dCkgPT4ge1xuICAgICAgICBTZXNzaW9uLmN1cnJlbnRFbGVtZW50ID0gZXZ0LnRhcmdldDtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi4vbW9kZWxzL3Nlc3Npb24nO1xuaW1wb3J0IHsgdmlld1NoaXAgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9zaGlwJztcblxuZXhwb3J0IGNvbnN0IHNoaXBEcmFnRW5kID0gKCkgPT4ge1xuICAgIGxldCBpc01vdmVhYmxlID0gZmFsc2U7XG4gICAgbGV0IGlzQWx0ZXJNb3ZhYmxlID0gZmFsc2U7XG4gICAgbGV0IGJvZHkgPSBTZXNzaW9uLmFjdGl2ZVNoaXAuZ2V0Qm9keSgpO1xuICAgIGlmIChTZXNzaW9uLmN1cnJlbnRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGlzTW92ZWFibGUgPSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgbWFyaW5lLXNlY3RvcmApO1xuICAgICAgICBpc0FsdGVyTW92YWJsZSA9IFNlc3Npb24uY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGBkZWNrYCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc01vdmVhYmxlICYmICFpc0FsdGVyTW92YWJsZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzTW92ZWFibGUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25maWcuR2FtZWJvYXJkLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvbmZpZy5HYW1lYm9hcmQud2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldFN0cnVjdGVkQ29udGFpbmVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIFtqXVtpXS5nZXRDZWxsTm9kZSgpID09PSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhZGRTaGlwT25Cb2FyZChTZXNzaW9uLmluZGV4LCBqLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzQWx0ZXJNb3ZhYmxlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGJvZHlbaV0uZ2V0Q2VsbE5vZGUoKSA9PT0gU2Vzc2lvbi5jdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIFNlc3Npb24uZG91YmxlSW5kZXggPSBTZXNzaW9uLmluZGV4IC0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoU2Vzc2lvbi5kb3VibGVJbmRleCAhPT0gJ3NoaXAnKSB7XG4gICAgICAgICAgICBsZXQgaGVhZCA9IFNlc3Npb24uYWN0aXZlU2hpcC5nZXRIZWFkKCkuZ2V0Q2VsbE5vZGUoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29uZmlnLkdhbWVib2FyZC53aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldFN0cnVjdGVkQ29udGFpbmVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbal1baV0uZ2V0Q2VsbE5vZGUoKSA9PT0gaGVhZFxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhZGRTaGlwT25Cb2FyZChTZXNzaW9uLmRvdWJsZUluZGV4LCBqLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IGFkZFNoaXBPbkJvYXJkID0gKGluZGV4LCB5LCB4KSA9PiB7XG4gICAgbGV0IGRhdGEgPSBnZXREYXRhKGluZGV4LCB5LCB4KTtcbiAgICByZXR1cm4gdmlld1NoaXBPbkJvYXJkKGRhdGEpO1xufTtcblxuY29uc3QgZ2V0RGF0YSA9IChpbmRleCwgeCwgeSkgPT4ge1xuICAgIHJldHVybiBTZXNzaW9uLmFjdGl2ZVNoaXAuaXNIb3Jpem9udGFsKClcbiAgICAgICAgPyB7IHg6IHgsIHk6IHkgLSBpbmRleCB9XG4gICAgICAgIDogeyB4OiB4IC0gaW5kZXgsIHk6IHkgfTtcbn07XG5cbmNvbnN0IHZpZXdTaGlwT25Cb2FyZCA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHZpZXdTaGlwKFxuICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAsXG4gICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcC5nZXRCb2FyZCgpLmdldFN0cnVjdGVkQ29udGFpbmVyKClbZGF0YS54XVtkYXRhLnldLFxuICAgICk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHJhbmRvbUludEZyb21JbnRlcnZhbCA9IChtaW4sIG1heCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNoaWxkcyA9IChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiaW1wb3J0ICcuL3ZpZXdzL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi9tb2RlbHMvcGxheWVyJztcbmltcG9ydCB7IHZpZXdQcm9maWxlIH0gZnJvbSAnLi92aWV3cy9ub2Rlcy9wcm9maWxlJztcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvckxpbmtzIH0gZnJvbSAnLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGlua3MnO1xuaW1wb3J0IHsgdmlld1NoaXB5YXJkIH0gZnJvbSAnLi92aWV3cy9ub2Rlcy9zaGlweWFyZCc7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JTaGlwcyB9IGZyb20gJy4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclNoaXBzJztcbmltcG9ydCB7IHJhbmRvbUZpbGxpbmdHYW1lYm9hcmRPZlNoaXBzIH0gZnJvbSAnLi9tb2RlbHMvZ2FtZUJvYXJkJztcbmV4cG9ydCBjb25zdCBwbGF5ZXIxID0gUHJvZmlsZSgxLCAnUGxheWVyMScsICdwbGF5ZXItYm9hcmQnKTtcbmV4cG9ydCBjb25zdCBhaSA9IFByb2ZpbGUoMCwgJ0FJJywgJ2FpLWJvYXJkJyk7XG52aWV3UHJvZmlsZShwbGF5ZXIxKTtcbnZpZXdQcm9maWxlKGFpKTtcbnZpZXdTaGlweWFyZChwbGF5ZXIxLmdldFNoaXB5YXJkKCkpO1xuc2V0TGlzdGVuZXJzRm9yTGlua3MoKTtcbnNldExpc3RlbmVyc0ZvclNoaXBzKHBsYXllcjEuZ2V0U2hpcHlhcmQoKS5nZXREb2NrV2l0aEZyZWdhdHMoKS5nZXRTaGlwcygpKTtcbnNldExpc3RlbmVyc0ZvclNoaXBzKHBsYXllcjEuZ2V0U2hpcHlhcmQoKS5nZXREb2NrV2l0aENhcmF2ZWxzKCkuZ2V0U2hpcHMoKSk7XG5zZXRMaXN0ZW5lcnNGb3JTaGlwcyhwbGF5ZXIxLmdldFNoaXB5YXJkKCkuZ2V0RG9ja1dpdGhEcmFra2FycygpLmdldFNoaXBzKCkpO1xuc2V0TGlzdGVuZXJzRm9yU2hpcHMocGxheWVyMS5nZXRTaGlweWFyZCgpLmdldERvY2tXaXRoQm9hdHMoKS5nZXRTaGlwcygpKTtcbnBsYXllcjEuZ2V0R2FtZWJvYXJkKCkucmFuZG9tRmlsbGluZ09mU2hpcHMoKTtcbiIsImNvbnN0IEFscGhhYmV0ID0gKGZpcnN0Q2hhckNvZGUsIGxhc3RDaGFyQ29kZSkgPT4ge1xuICAgIGNvbnN0IGxvbmcgPSBsYXN0Q2hhckNvZGUgLSBmaXJzdENoYXJDb2RlICsgMTtcbiAgICBjb25zdCBjb2RlcyA9IEFycmF5LmZyb20oQXJyYXkobG9uZykua2V5cygpLCAoeCkgPT4geCArIGZpcnN0Q2hhckNvZGUpO1xuXG4gICAgY29uc3QgaXNUaGlzQWxwaGFiZXQgPSAoY2hhckNvZGUpID0+IHtcbiAgICAgICAgaWYgKGNoYXJDb2RlID49IGZpcnN0Q2hhckNvZGUgJiYgY2hhckNvZGUgPD0gbGFzdENoYXJDb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGZpcnN0Q2hhckNvZGUsIGxhc3RDaGFyQ29kZSwgbG9uZywgaXNUaGlzQWxwaGFiZXQsIGNvZGVzIH07XG59O1xuXG5leHBvcnQgY29uc3QgQWxwaGFiZXRzID0gKCgpID0+IHtcbiAgICBjb25zdCBlbmcgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFscGhhYmV0ID0gQWxwaGFiZXQoOTcsIDEyMik7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFscGhhYmV0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcnVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbHBoYWJldCA9IEFscGhhYmV0KDEwNzIsIDExMDMpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhbHBoYWJldCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGVuZywgcnVzIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgZ2V0Tm9kZSB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL2ZhY3RvcnknO1xuXG5leHBvcnQgY29uc3QgQ2VsbCA9ICh4ID0gLTEsIHkgPSAtMSwgbmFtZSA9ICdjZWxsJykgPT4ge1xuICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICBsZXQgcGFyZW50ID0gJ2ZyZWUnO1xuICAgIGxldCBub2RlID0gZ2V0Tm9kZShuYW1lLCAnY2VsbCcpO1xuXG4gICAgY29uc3Qgc2V0VGhlSGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0hpdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5QYXJlbnQpID0+IHtcbiAgICAgICAgcGFyZW50ID0gblBhcmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRDZWxsTm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFhZID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB4LCB5IH07XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFhZID0gKG54LCBueSkgPT4ge1xuICAgICAgICB4ID0gbng7XG4gICAgICAgIHkgPSBueTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0VGhlSGl0LFxuICAgICAgICBpc0hpdCxcbiAgICAgICAgc2V0UGFyZW50LFxuICAgICAgICBnZXRQYXJlbnQsXG4gICAgICAgIGdldENlbGxOb2RlLFxuICAgICAgICBnZXRYWSxcbiAgICAgICAgc2V0WFksXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBEZWNrID0gKG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IENlbGwoLTEsIC0xLCAnZGVjaycpO1xuXG4gICAgY29uc3QgZ2V0TnVtYmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgZ2V0TnVtYmVyIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IE1hcmluZVNlY3RvciA9ICh5LCB4KSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gQ2VsbCh5LCB4LCAnbWFyaW5lLXNlY3RvcicpO1xuICAgIGxldCBvY2N1cGFudCA9ICdmcmVlJztcblxuICAgIGNvbnN0IG9jY3VweSA9IChuT2NjdXBhbnQpID0+IHtcbiAgICAgICAgb2NjdXBhbnQgPSBuT2NjdXBhbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgICAgICBvY2N1cGFudCA9ICdmcmVlJztcbiAgICB9O1xuXG4gICAgY29uc3QgaXNGcmVlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb2NjdXBhbnQgPT09ICdmcmVlJztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0T2NjdXBhbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvY2N1cGFudDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IGlzRnJlZSwgY2xlYXIsIG9jY3VweSwgZ2V0T2NjdXBhbnQgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IENlbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGdldEJlZm9yZSA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbeV1bLS14XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbeV1bKyt4XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRBZnRlciA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbeV1bKyt4XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbeV1bLS14XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRPdmVyID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldW3hdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldW3hdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFVuZGVyID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldW3hdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldW3hdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERpYWcxID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldWy0teF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1bKyt4XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXREaWFnMiA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVsrK3hdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldWy0teF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RGlhZzMgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1bKyt4XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVstLXhdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERpYWc0ID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldWy0teF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1bKyt4XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRDZWxsQXJvdW5kQXJlYSA9ICh4LCB5LCBwYXJlbnQsIGNvbnRhaW5lcikgPT4ge1xuICAgICAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICAgICAgY2VsbHMucHVzaChnZXRCZWZvcmUoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0QWZ0ZXIoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0T3Zlcih4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXRVbmRlcih4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnMSh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnMih4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnMyh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnNCh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMgPSBjZWxscy5maWx0ZXIoKGNlbGwpID0+IGNlbGwgIT09IHVuZGVmaW5lZCk7XG4gICAgICAgIHJldHVybiBjZWxscztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0Q2VsbEFyb3VuZEFyZWEgfTtcbn07XG4iLCJpbXBvcnQgeyBwbGF5ZXIxIH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgcmFuZG9tSW50RnJvbUludGVydmFsIH0gZnJvbSAnLi4vaGVscGVyL2hlbHBlcic7XG5pbXBvcnQgeyB2aWV3U2hpcCwgdmlld1NoaXBPblJhbmRvbUNlbGwgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9zaGlwJztcbmltcG9ydCB7IE1hcmluZVNlY3RvciB9IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2dhbWVDb25maWcnO1xuXG5leHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKG5hbWUsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gQ29uZmlnLkdhbWVib2FyZC53aWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBDb25maWcuR2FtZWJvYXJkLmhlaWdodDtcbiAgICBjb25zdCBjb250YWluZXJzID0gZmlsbEJvYXJkKHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfWApO1xuXG4gICAgY29uc3QgZ2V0U3RydWN0ZWRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250YWluZXJzLmdldFN0cnVjdGVkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFVuc3RydWN0ZWRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250YWluZXJzLmdldFVuc3RydWN0ZWQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgY29udGFpbmVycy5nZXRVbnN0cnVjdGVkKCkuZm9yRWFjaCgoc2VjdG9yKSA9PiB7XG4gICAgICAgICAgICBzZWN0b3IuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBsYXllci5nZXRTaGlweWFyZCgpLnJlc2V0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRvbUZpbGxpbmdPZlNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBsZXQgc2hpcHMgPSBwbGF5ZXIuZ2V0U2hpcHlhcmQoKS5nZXRBbGxTaGlwcygpO1xuXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAuc2V0UmFuZG9tT3JpZW50YXRpb24oKTtcbiAgICAgICAgICAgIHZpZXdTaGlwT25SYW5kb21DZWxsKHNoaXAsIFsuLi5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCldKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJhbmRvbUZpbGxpbmdPZlNoaXBzLFxuICAgICAgICByZXNldCxcbiAgICAgICAgZ2V0UGxheWVyLFxuICAgICAgICBnZXRTdHJ1Y3RlZENvbnRhaW5lcixcbiAgICAgICAgZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcixcbiAgICAgICAgZ2V0U2l6ZSxcbiAgICAgICAgZ2V0Tm9kZSxcbiAgICB9O1xufTtcblxuY29uc3QgZmlsbEJvYXJkID0gKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICBsZXQgc3RydWN0ZWQgPSBbXTtcbiAgICBsZXQgdW5zdHJ1Y3RlZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICBsZXQgbGluZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBNYXJpbmVTZWN0b3IoaiwgaSk7XG4gICAgICAgICAgICBsaW5lW2pdID0gY2VsbDtcbiAgICAgICAgICAgIHVuc3RydWN0ZWQucHVzaChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICBzdHJ1Y3RlZFtpXSA9IGxpbmU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U3RydWN0ZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdHJ1Y3RlZDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VW5zdHJ1Y3RlZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHVuc3RydWN0ZWQ7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldFN0cnVjdGVkLCBnZXRVbnN0cnVjdGVkIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IENvbmZpZyA9ICgoKSA9PiB7XG4gICAgY29uc3QgR2FtZWJvYXJkID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAxMDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gMTA7XG4gICAgICAgIHJldHVybiB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwVHlwZXMgPSBbJ2ZyZWdhdHMnLCAnY2FyYXZlbHMnLCAnZHJha2thcnMnLCAnYm9hdHMnXTtcbiAgICAgICAgY29uc3QgbnVtYmVyT2YgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnJlZ2F0ZXMgPSAxO1xuICAgICAgICAgICAgY29uc3QgY2FyYXZlbHMgPSAyO1xuICAgICAgICAgICAgY29uc3QgZHJha2thcnMgPSAzO1xuICAgICAgICAgICAgY29uc3QgYm9hdHMgPSA0O1xuICAgICAgICAgICAgcmV0dXJuIHsgZnJlZ2F0ZXMsIGNhcmF2ZWxzLCBkcmFra2FycywgYm9hdHMgfTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICByZXR1cm4geyBudW1iZXJPZiwgc2hpcFR5cGVzIH07XG4gICAgfSkoKTtcblxuICAgIHJldHVybiB7IEdhbWVib2FyZCwgRWxlbWVudHMgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVCb2FyZCc7XG5pbXBvcnQgeyBTaGlweWFyZCB9IGZyb20gJy4vc2hpcHlhcmQnO1xuXG5jb25zdCBQbGF5ZXIgPSAoaWQsIG5hbWUpID0+IHtcbiAgICBjb25zdCBnZXRJZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0SWQsIGdldE5hbWUgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlID0gKGlkLCBuYW1lLCBub2RlSWQpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBQbGF5ZXIoaWQsIG5hbWUpO1xuXG4gICAgbGV0IGdhbWVib2FyZCA9IEdhbWVib2FyZChub2RlSWQsIHByb3RvdHlwZSk7XG4gICAgbGV0IHNoaXB5YXJkID0gU2hpcHlhcmQocHJvdG90eXBlKTtcblxuICAgIGNvbnN0IGdldEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0U2hpcHlhcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlweWFyZDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IGdldEdhbWVib2FyZCwgZ2V0U2hpcHlhcmQgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IFNlc3Npb24gPSAoKCkgPT4ge1xuICAgIGxldCBhY3RpdmVTaGlwID0gbnVsbDtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBkb3VibGVJbmRleCA9ICdzaGlwJztcbiAgICBsZXQgY3VycmVudEVsZW1lbnQgPSBudWxsO1xuXG4gICAgcmV0dXJuIHsgYWN0aXZlU2hpcCwgaW5kZXgsIGRvdWJsZUluZGV4LCBjdXJyZW50RWxlbWVudCB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0U2Vzc2lvbiA9ICgpID0+IHtcbiAgICBTZXNzaW9uLmFjdGl2ZVNoaXAgPSBudWxsO1xuICAgIFNlc3Npb24uaW5kZXggPSAwO1xuICAgIFNlc3Npb24uZG91YmxlSW5kZXggPSAnc2hpcCc7XG4gICAgU2Vzc2lvbi5jdXJyZW50RWxlbWVudCA9IG51bGw7XG59O1xuIiwiaW1wb3J0IHsgcmFuZG9tSW50RnJvbUludGVydmFsIH0gZnJvbSAnLi4vaGVscGVyL2hlbHBlcic7XG5pbXBvcnQgeyBnZXROb2RlIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvZmFjdG9yeSc7XG5pbXBvcnQgeyB2aWV3U2hpcCB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL3NoaXAnO1xuaW1wb3J0IHsgRGVjayB9IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgeyBpc0ZpdE9uR2FtZWJvYXJkQXhpcyB9IGZyb20gJy4vZ2FtZUJvYXJkJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi9zZXNzaW9uJztcbmltcG9ydCB7IFNoaXBXYXRlckFyZWFzIH0gZnJvbSAnLi93YXRlckFyZWFzJztcblxuZXhwb3J0IGNvbnN0IFNoaXAgPSAobGVuZ3RoLCBwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXROb2RlKCdzaGlwJywgJ2hvcml6b250YWwnKTtcbiAgICBsZXQgYm9keSA9IFtdO1xuICAgIGxldCBsaXZlID0gdHJ1ZTtcbiAgICBsZXQgaG9yaXpvbnRhbCA9IHRydWU7XG4gICAgbGV0IGhlYWQgPSBudWxsO1xuICAgIGxldCBzaGlwV2F0ZXJBcmVhcyA9IFNoaXBXYXRlckFyZWFzKHBsYXllciwgY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGZpbGxDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkZWNrID0gRGVjayhpKTtcbiAgICAgICAgICAgIGJvZHkucHVzaChkZWNrKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWNrLmdldENlbGxOb2RlKCkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldE9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgICAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpKSB7XG4gICAgICAgICAgICBzZXRWZXJ0aWNhbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgICAgICAgIHNldEhvcml6b250YWwoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0YWtlRG93bldhdGVyQXJlYXMgPSAoKSA9PiB7XG4gICAgICAgIHNoaXBXYXRlckFyZWFzLmNsZWFyQXJlYXMoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGF1bmNoU2hpcE9uV2F0ZXIgPSAobkhlYWQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB3YXRlckFyZWFzID0gZ2V0V2F0ZXJBcmVhKG5IZWFkKTtcbiAgICAgICAgICAgIGxldCBhY2Vzc2liaWxpdHkgPSB3YXRlckFyZWFzLmNoZWNrQXJlYSgpO1xuICAgICAgICAgICAgaWYgKGFjZXNzaWJpbGl0eSkge1xuICAgICAgICAgICAgICAgIHRha2VEb3duV2F0ZXJBcmVhcygpO1xuICAgICAgICAgICAgICAgIHNoaXBXYXRlckFyZWFzID0gd2F0ZXJBcmVhcztcbiAgICAgICAgICAgICAgICBzaGlwV2F0ZXJBcmVhcy5vY2N1cHlBcmVhcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYWNlc3NpYmlsaXR5O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFdhdGVyQXJlYSA9IChoZWFkKSA9PiB7XG4gICAgICAgIGxldCBib2FyZCA9IGdldEJvYXJkKCkuZ2V0U3RydWN0ZWRDb250YWluZXIoKTtcbiAgICAgICAgbGV0IGFyZWFzID0gU2hpcFdhdGVyQXJlYXMocGxheWVyLCBjb250YWluZXIpO1xuICAgICAgICBsZXQgeCA9IGhlYWQuZ2V0WFkoKS54O1xuICAgICAgICBsZXQgeSA9IGhlYWQuZ2V0WFkoKS55O1xuICAgICAgICBsZXQgbmVjZXNzYXJ5U2VjdG9ycyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZWNlc3NhcnlTZWN0b3JzLnB1c2goYm9hcmRbeV1beF0pO1xuICAgICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICB4Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcmVhcy5zZXRBcmVhcyhuZWNlc3NhcnlTZWN0b3JzKTtcbiAgICAgICAgcmV0dXJuIGFyZWFzO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0xpdmUgPSAoKSA9PiB7XG4gICAgICAgIGxpdmUgPSBmYWxzZTtcblxuICAgICAgICBib2R5LmZvckVhY2goKGRlY2spID0+IHtcbiAgICAgICAgICAgIGlmICghZGVjay5pc0hpdCgpKSB7XG4gICAgICAgICAgICAgICAgbGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBsaXZlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRCb2R5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYm9keTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRIZWFkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaGVhZDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0SGVhZCA9IChuSGVhZCkgPT4ge1xuICAgICAgICBoZWFkID0gbkhlYWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhvcml6b250YWw7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yaWVudGF0aW9uU3dpdGNoID0gKCkgPT4ge1xuICAgICAgICBob3Jpem9udGFsID0gIWhvcml6b250YWw7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFZlcnRpY2FsID0gKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbCcpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmVydGljYWwnKTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke2xlbmd0aCAqIDV9dmhgO1xuICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSBgNXZoYDtcbiAgICAgICAgaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRIb3Jpem9udGFsID0gKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gYCR7bGVuZ3RoICogNX12aGA7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgNXZoYDtcbiAgICAgICAgaG9yaXpvbnRhbCA9IHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFJhbmRvbU9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgICAgICByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMCwgMSkgPT09IDEgPyBzZXRIb3Jpem9udGFsKCkgOiBzZXRWZXJ0aWNhbCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllci5nZXRHYW1lYm9hcmQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHNldEhvcml6b250YWwoKTtcbiAgICAgICAgaWYgKGhlYWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGhlYWQuZ2V0Q2VsbE5vZGUoKS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgaGVhZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcFdhdGVyQXJlYXMuY2xlYXJBcmVhcygpO1xuICAgICAgICBzaGlwV2F0ZXJBcmVhcyA9IFNoaXBXYXRlckFyZWFzKHBsYXllciwgY29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgZmlsbENvbnRhaW5lcigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0UmFuZG9tT3JpZW50YXRpb24sXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBzZXRIb3Jpem9udGFsLFxuICAgICAgICBzZXRWZXJ0aWNhbCxcbiAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgIHRha2VEb3duV2F0ZXJBcmVhcyxcbiAgICAgICAgbGF1bmNoU2hpcE9uV2F0ZXIsXG4gICAgICAgIG9yaWVudGF0aW9uU3dpdGNoLFxuICAgICAgICBzZXRPcmllbnRhdGlvbixcbiAgICAgICAgaXNMaXZlLFxuICAgICAgICBnZXRCb2R5LFxuICAgICAgICBnZXRDb250YWluZXIsXG4gICAgICAgIGdldEhlYWQsXG4gICAgICAgIHNldEhlYWQsXG4gICAgICAgIGlzSG9yaXpvbnRhbCxcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEZyZWdhdCA9IChtYXJrZXIpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDQsIG1hcmtlcik7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCBtYXJrZXIpO1xufTtcblxuZXhwb3J0IGNvbnN0IENhcmF2ZWwgPSAobWFya2VyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgzLCBtYXJrZXIpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgRHJha2thciA9IChtYXJrZXIpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDIsIG1hcmtlcik7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBCb2F0ID0gKG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFNoaXAoMSwgbWFya2VyKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBCb2F0LCBDYXJhdmVsLCBEcmFra2FyLCBGcmVnYXQgfSBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgY29uc3QgU2hpcHlhcmQgPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3QgZnJlZ2F0cyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmZyZWdhdGVzLCAnRnJlZ2F0JywgcGxheWVyKTtcbiAgICBjb25zdCBjYXJhdmVscyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmNhcmF2ZWxzLCAnQ2FyYXZlbCcsIHBsYXllcik7XG4gICAgY29uc3QgZHJha2thcnMgPSBEb2NrKENvbmZpZy5FbGVtZW50cy5udW1iZXJPZi5kcmFra2FycywgJ0RyYWtrYXInLCBwbGF5ZXIpO1xuICAgIGNvbnN0IGJvYXRzID0gRG9jayhDb25maWcuRWxlbWVudHMubnVtYmVyT2YuYm9hdHMsICdCb2F0JywgcGxheWVyKTtcbiAgICBjb25zdCBzaGlwcyA9IGZyZWdhdHNcbiAgICAgICAgLmdldFNoaXBzKClcbiAgICAgICAgLmNvbmNhdChcbiAgICAgICAgICAgIGNhcmF2ZWxzXG4gICAgICAgICAgICAgICAgLmdldFNoaXBzKClcbiAgICAgICAgICAgICAgICAuY29uY2F0KGRyYWtrYXJzLmdldFNoaXBzKCkuY29uY2F0KGJvYXRzLmdldFNoaXBzKCkpKSxcbiAgICAgICAgKTtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXB5YXJkJyk7XG5cbiAgICBjb25zdCBnZXRTaGlwc09mVHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZnJlZ2F0cyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyZWdhdHMuZ2V0U2hpcHMoKTtcbiAgICAgICAgICAgIGNhc2UgJ2NhcmF2ZWxzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FyYXZlbHMuZ2V0U2hpcHMoKTtcbiAgICAgICAgICAgIGNhc2UgJ2RyYWtrYXJzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZHJha2thcnMuZ2V0U2hpcHMoKTtcbiAgICAgICAgICAgIGNhc2UgJ2JvYXRzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9hdHMuZ2V0U2hpcHMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXREb2NrV2l0aEZyZWdhdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBmcmVnYXRzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREb2NrV2l0aENhcmF2ZWxzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY2FyYXZlbHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERvY2tXaXRoRHJha2thcnMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFra2FycztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhCb2F0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGJvYXRzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEFsbFNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzRW1wdHkgPSAoKSA9PiB7XG4gICAgICAgIGxldCBsYXVuY2hlZFNoaXBzID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuICAgICAgICByZXR1cm4gbGF1bmNoZWRTaGlwcy5sZW5ndGggPT09IDA7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBzaGlwLnJlc2V0KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRTaGlwc09mVHlwZSxcbiAgICAgICAgaXNFbXB0eSxcbiAgICAgICAgcmVzZXQsXG4gICAgICAgIGdldEFsbFNoaXBzLFxuICAgICAgICBnZXRQbGF5ZXIsXG4gICAgICAgIGdldERvY2tXaXRoRnJlZ2F0cyxcbiAgICAgICAgZ2V0RG9ja1dpdGhDYXJhdmVscyxcbiAgICAgICAgZ2V0RG9ja1dpdGhEcmFra2FycyxcbiAgICAgICAgZ2V0RG9ja1dpdGhCb2F0cyxcbiAgICB9O1xufTtcblxuY29uc3QgRG9jayA9IChjb3VudCwgc2hpcEJsdWVQcmludCwgcGxheWVyKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGNvbnN0IGZpbGxEb2NrID0gKGNvdW50LCBzaGlwQmx1ZVByaW50KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGJ1aWxkU2hpcChzaGlwQmx1ZVByaW50KTtcbiAgICAgICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYnVpbGRTaGlwID0gKGJsdWVQcmludCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGJsdWVQcmludCkge1xuICAgICAgICAgICAgY2FzZSAnRnJlZ2F0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gRnJlZ2F0KHBsYXllcik7XG4gICAgICAgICAgICBjYXNlICdDYXJhdmVsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FyYXZlbChwbGF5ZXIpO1xuICAgICAgICAgICAgY2FzZSAnRHJha2thcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIERyYWtrYXIocGxheWVyKTtcbiAgICAgICAgICAgIGNhc2UgJ0JvYXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBCb2F0KHBsYXllcik7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTb3JyeSwgaWxsZWdhbCBzaGlwIGJsdWVwcmludCcpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZpbGxEb2NrKGNvdW50LCBzaGlwQmx1ZVByaW50KTtcblxuICAgIGNvbnN0IGdldFNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldFNoaXBzIH07XG59O1xuIiwiaW1wb3J0IHsgQ2VsbEhhbmRsZXIgfSBmcm9tICcuL2NlbGxIYW5kbGVyJztcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICcuL3Nlc3Npb24nO1xuXG5leHBvcnQgY29uc3QgU2hpcFdhdGVyQXJlYXMgPSAocGxheWVyLCBjb250YWluZXIpID0+IHtcbiAgICBsZXQgdW5kZXJUaGVTaGlwID0gW107XG4gICAgbGV0IGFyb3VuZFRoZVNoaXAgPSBbXTtcblxuICAgIGNvbnN0IGdldEFyZWFVbmRlclRoZVNoaXAgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB1bmRlclRoZVNoaXA7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEFyZWFBcm91bmRUaGVTaGlwID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXJvdW5kVGhlU2hpcDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0QXJlYXMgPSAoYXJlYSkgPT4ge1xuICAgICAgICB1bmRlclRoZVNoaXAgPSBhcmVhO1xuICAgICAgICBhcm91bmRUaGVTaGlwID0gc2V0QXJlYUFyb3VuZFRoZVNoaXAoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0QXJlYUFyb3VuZFRoZVNoaXAgPSAoKSA9PiB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gQ2VsbEhhbmRsZXIoKTtcbiAgICAgICAgbGV0IGFyZWFzID0gW107XG4gICAgICAgIGxldCBwYXJlbnQgPSBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0U3RydWN0ZWRDb250YWluZXIoKTtcbiAgICAgICAgdW5kZXJUaGVTaGlwLmZvckVhY2goKHNlY3RvcikgPT4ge1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gc2VjdG9yLmdldFhZKCk7XG4gICAgICAgICAgICBsZXQgYXJlYSA9IGhhbmRsZXIuZ2V0Q2VsbEFyb3VuZEFyZWEoXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMueCxcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy55LFxuICAgICAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYXJlYXMgPSBhcmVhcy5jb25jYXQoYXJlYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFyZWFzKSkuZmlsdGVyKFxuICAgICAgICAgICAgKHgpID0+ICF1bmRlclRoZVNoaXAuaW5jbHVkZXMoeCksXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9jY3VweUFyZWFzID0gKCkgPT4ge1xuICAgICAgICB1bmRlclRoZVNoaXAuZm9yRWFjaCgoc2VjdG9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VjdG9yLmlzRnJlZSgpKSB7XG4gICAgICAgICAgICAgICAgc2VjdG9yLm9jY3VweShjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tBcmVhID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWNlc3NpYmlsaXR5ID0gdHJ1ZTtcbiAgICAgICAgbGV0IGFyZWFzID0gdW5kZXJUaGVTaGlwLmNvbmNhdChhcm91bmRUaGVTaGlwKTtcblxuICAgICAgICBhcmVhcy5mb3JFYWNoKChzZWN0b3IpID0+IHtcbiAgICAgICAgICAgIGlmICghc2VjdG9yLmlzRnJlZSgpICYmIHNlY3Rvci5nZXRPY2N1cGFudCgpICE9PSBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBhY2Vzc2liaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFjZXNzaWJpbGl0eTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJBcmVhcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFyZWFzID0gdW5kZXJUaGVTaGlwLmNvbmNhdChhcm91bmRUaGVTaGlwKTtcbiAgICAgICAgYXJlYXMuZm9yRWFjaCgoc2VjdG9yKSA9PiB7XG4gICAgICAgICAgICBzZWN0b3IuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNsZWFyQXJlYXMsXG4gICAgICAgIGNoZWNrQXJlYSxcbiAgICAgICAgZ2V0QXJlYVVuZGVyVGhlU2hpcCxcbiAgICAgICAgZ2V0QXJlYUFyb3VuZFRoZVNoaXAsXG4gICAgICAgIHNldEFyZWFzLFxuICAgICAgICBvY2N1cHlBcmVhcyxcbiAgICB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBzZXRIaWRkZW4gPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlSGlkZGVuID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufTtcbiIsImV4cG9ydCBjb25zdCBzZXREcmFnZ2FibGUgPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuZHJhZ2dhYmxlID0gdHJ1ZTtcbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBzZXREcmFnZ2FibGUgfSBmcm9tICcuL3NldERyYWdnYWJsZSc7XG5cbmV4cG9ydCBjb25zdCBzZXREcmFnZ2FibGVGb3JTaGlwcyA9ICgpID0+IHtcbiAgICBDb25maWcuRWxlbWVudHMuc2hpcFR5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgZm9yVHlwZSh0eXBlKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGZvclR5cGUgPSAodHlwZSkgPT4ge1xuICAgIGNvbnN0IGRvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0eXBlfWApO1xuICAgIGNvbnN0IHNoaXBzID0gQXJyYXkuZnJvbShkb2NrLmNoaWxkcmVuKTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2V0RHJhZ2dhYmxlKHNoaXApO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IEFscGhhYmV0cyB9IGZyb20gJy4uLy4uL21vZGVscy9hbHBoYWJldHMnO1xuaW1wb3J0IHsgZ2V0Tm9kZSB9IGZyb20gJy4vZmFjdG9yeSc7XG5cbmNvbnN0IGFscGhhYmV0ID0gQWxwaGFiZXRzLnJ1cygpLmNvZGVzO1xuXG5leHBvcnQgY29uc3Qgdmlld0F4aXMgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBub2RlID0gYm9hcmQuZ2V0Tm9kZSgpO1xuICAgIGNvbnN0IHhBeGlzID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJyk7XG4gICAgY29uc3QgeUF4aXMgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy55LWF4aXMnKTtcbiAgICBjb25zdCBzaXplID0gYm9hcmQuZ2V0U2l6ZSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplLndpZHRoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGdldE5vZGUoJ3gtY2VsbCcsICdjZWxsJyk7XG4gICAgICAgIGNvbnN0IGxldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYWxwaGFiZXRbaV0pLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBsZXR0ZXI7XG4gICAgICAgIHhBeGlzLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZS5oZWlnaHQ7IGkrKykge1xuICAgICAgICBjb25zdCBjZWxsID0gZ2V0Tm9kZSgneS1jZWxsJywgJ2NlbGwnKTtcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGk7XG4gICAgICAgIHlBeGlzLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0Tm9kZSA9ICguLi5uYW1lcykgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGlmIChuYW1lICE9PSAnJykge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vZGU7XG59O1xuIiwiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWVDb25maWcnO1xuXG5leHBvcnQgY29uc3Qgdmlld0JvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gYm9hcmQuZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcigpO1xuICAgIGNvbnN0IGJvYXJkd3IgPSBib2FyZC5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XG4gICAgY29udGFpbmVyLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgYm9hcmR3ci5hcHBlbmRDaGlsZChjZWxsLmdldENlbGxOb2RlKCkpO1xuICAgIH0pO1xufTtcblxuY29uc3QgU3R5bGVQcmVzZXRzID0gKCgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICctLWJvYXJkLXdpZHRoJyxcbiAgICAgICAgQ29uZmlnLkdhbWVib2FyZC53aWR0aCxcbiAgICApO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJy0tYm9hcmQtaGVpZ2h0JyxcbiAgICAgICAgQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQsXG4gICAgKTtcbn0pKCk7XG4iLCJpbXBvcnQgeyB2aWV3QXhpcyB9IGZyb20gJy4vYXhpcyc7XG5pbXBvcnQgeyB2aWV3Qm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmV4cG9ydCBjb25zdCB2aWV3UHJvZmlsZSA9IChwcm9maWxlKSA9PiB7XG4gICAgdmlld0JvYXJkKHByb2ZpbGUuZ2V0R2FtZWJvYXJkKCkpO1xuICAgIHZpZXdBeGlzKHByb2ZpbGUuZ2V0R2FtZWJvYXJkKCkpO1xufTtcbiIsImltcG9ydCB7IGFpLCBwbGF5ZXIxIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgcmFuZG9tSW50RnJvbUludGVydmFsIH0gZnJvbSAnLi4vLi4vaGVscGVyL2hlbHBlcic7XG5pbXBvcnQgeyByZW1vdmVIaWRkZW4sIHNldEhpZGRlbiB9IGZyb20gJy4uL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZSc7XG5cbmV4cG9ydCBjb25zdCB2aWV3U2hpcCA9IChzaGlwLCBoZWFkKSA9PiB7XG4gICAgbGV0IGlzVmlldyA9IHNoaXAubGF1bmNoU2hpcE9uV2F0ZXIoaGVhZCk7XG4gICAgaWYgKGlzVmlldykge1xuICAgICAgICBzaGlwLnNldEhlYWQoaGVhZCk7XG4gICAgICAgIGhlYWQuZ2V0Q2VsbE5vZGUoKS5hcHBlbmRDaGlsZChzaGlwLmdldENvbnRhaW5lcigpKTtcbiAgICAgICAgY2hlY2tTaGlweWFyZCgpO1xuICAgIH1cbiAgICByZXR1cm4gaXNWaWV3O1xufTtcblxuY29uc3QgY2hlY2tTaGlweWFyZCA9ICgpID0+IHtcbiAgICBpZiAocGxheWVyMS5nZXRTaGlweWFyZCgpLmlzRW1wdHkoKSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNsb3NlTWFudWFsTWVudSgpO1xuICAgICAgICB9LCA1MDApO1xuICAgIH1cbn07XG5cbmNvbnN0IGNsb3NlTWFudWFsTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlweWFyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlweWFyZCcpO1xuICAgIHJlbW92ZUhpZGRlbihhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkpO1xuICAgIHNldEhpZGRlbihzaGlweWFyZCk7XG59O1xuXG5leHBvcnQgY29uc3Qgdmlld1NoaXBPblJhbmRvbUNlbGwgPSAoc2hpcCwgY2VsbHMpID0+IHtcbiAgICBsZXQgY2VsbCA9IGdldFJhbmRvbUNlbGwoY2VsbHMpO1xuICAgIGxldCBpc1ZpZXcgPSB2aWV3U2hpcChzaGlwLCBjZWxsKTtcbiAgICByZXR1cm4gaXNWaWV3ID8gdHJ1ZSA6IHZpZXdTaGlwT25SYW5kb21DZWxsKHNoaXAsIGNlbGxzKTtcbn07XG5cbmNvbnN0IGdldFJhbmRvbUNlbGwgPSAoY2VsbHMpID0+IHtcbiAgICBsZXQgaW5kZXggPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMCwgY2VsbHMubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIGNlbGxzLnNwbGljZShpbmRleCwgMSlbMF07XG59O1xuIiwiaW1wb3J0IHsgcGxheWVyMSB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lQ29uZmlnJztcbmltcG9ydCB7IHNldERyYWdnYWJsZUZvclNoaXBzIH0gZnJvbSAnLi4vZHJhZ0FuZERyb3Avc2hpcHMnO1xuXG5leHBvcnQgY29uc3Qgdmlld1NoaXB5YXJkID0gKCkgPT4ge1xuICAgIGZpbGxTaGlweWFyZE5vZGUoKTtcbiAgICBzZXREcmFnZ2FibGVGb3JTaGlwcygpO1xufTtcblxuY29uc3QgZmlsbFNoaXB5YXJkTm9kZSA9ICgpID0+IHtcbiAgICBDb25maWcuRWxlbWVudHMuc2hpcFR5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgYWRkVHlwZSh0eXBlKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGFkZFR5cGUgPSAodHlwZSkgPT4ge1xuICAgIGNvbnN0IGRvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0eXBlfWApO1xuICAgIGNvbnN0IHNoaXBzID0gcGxheWVyMS5nZXRTaGlweWFyZCgpLmdldFNoaXBzT2ZUeXBlKHR5cGUpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgZG9jay5hcHBlbmRDaGlsZChzaGlwLmdldENvbnRhaW5lcigpKTtcbiAgICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
