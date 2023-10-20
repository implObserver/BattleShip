'use strict';
(self['webpackChunkbattleship'] = self['webpackChunkbattleship'] || []).push([
    ['index'],
    {
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
                /* harmony import */ var _models_ship__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./models/ship */ './src/models/ship.js',
                    );

                let r = (0, _models_ship__WEBPACK_IMPORTED_MODULE_0__.Fregat)();

                console.log(r.isLive());

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
                        /* harmony export */
                    },
                );
                /* harmony import */ var _views_nodes_cell__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../views/nodes/cell */ './src/views/nodes/cell.js',
                    );

                const Cell = (cx = -1, cy = -1) => {
                    let hit = false;
                    let parent;
                    let node = (0,
                    _views_nodes_cell__WEBPACK_IMPORTED_MODULE_0__.getCell)();
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

                    const getNode = () => {
                        return node;
                    };

                    return { setTheHit, isHit, setParent, getParent, getNode };
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
                        /* harmony export */
                    },
                );
                /* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(/*! ./cell */ './src/models/cell.js');

                const Ship = (l) => {
                    let length = l;
                    let body = [];
                    let live = true;
                    let orientation = 'horizontal';

                    for (let i = 0; i < length; i++) {
                        body.push(
                            (0, _cell__WEBPACK_IMPORTED_MODULE_0__.Cell)(),
                        );
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

                    return { isLive, getBody };
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

                /***/
            },

        /***/ './src/views/nodes/cell.js':
            /*!*********************************!*\
  !*** ./src/views/nodes/cell.js ***!
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
                        /* harmony export */ getCell: () =>
                            /* binding */ getCell,
                        /* harmony export */
                    },
                );
                const getCell = () => {
                    const cell = document.createElement('div');
                    cell.classList.add('cell');
                    return cell;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZDOztBQUU3QyxRQUFRLG9EQUFNOztBQUVkOzs7Ozs7Ozs7Ozs7Ozs7O0FDSjhDOztBQUV2QztBQUNQO0FBQ0E7QUFDQSxlQUFlLDBEQUFPO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QjhCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixZQUFZO0FBQ2hDLGtCQUFrQiwyQ0FBSTtBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pETztBQUNQO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9jZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9jZWxsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyZWdhdCwgU2hpcCB9IGZyb20gJy4vbW9kZWxzL3NoaXAnO1xuXG5sZXQgciA9IEZyZWdhdCgpO1xuXG5jb25zb2xlLmxvZyhyLmlzTGl2ZSgpKTtcbiIsImltcG9ydCB7IGdldENlbGwgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9jZWxsJztcblxuZXhwb3J0IGNvbnN0IENlbGwgPSAoY3ggPSAtMSwgY3kgPSAtMSkgPT4ge1xuICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICBsZXQgcGFyZW50O1xuICAgIGxldCBub2RlID0gZ2V0Q2VsbCgpO1xuICAgIGxldCB4ID0gY3g7XG4gICAgbGV0IHkgPSBjeTtcblxuICAgIGNvbnN0IHNldFRoZUhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNIaXQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoaXQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFBhcmVudCA9IChuUGFyZW50KSA9PiB7XG4gICAgICAgIHBhcmVudCA9IG5QYXJlbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBhcmVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIHJldHVybiB7IHNldFRoZUhpdCwgaXNIaXQsIHNldFBhcmVudCwgZ2V0UGFyZW50LCBnZXROb2RlIH07XG59O1xuIiwiaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vY2VsbCc7XG5cbmNvbnN0IFNoaXAgPSAobCkgPT4ge1xuICAgIGxldCBsZW5ndGggPSBsO1xuICAgIGxldCBib2R5ID0gW107XG4gICAgbGV0IGxpdmUgPSB0cnVlO1xuICAgIGxldCBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9keS5wdXNoKENlbGwoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNMaXZlID0gKCkgPT4ge1xuICAgICAgICBsaXZlID0gZmFsc2U7XG5cbiAgICAgICAgYm9keS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNlbGwuaXNIaXQoKSkge1xuICAgICAgICAgICAgICAgIGxpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbGl2ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Qm9keSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGlzTGl2ZSwgZ2V0Qm9keSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEZyZWdhdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDQpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgQ2FyYXZlbCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDMpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgRHJha2thciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDIpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgQm9hdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDEpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldENlbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgIHJldHVybiBjZWxsO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
