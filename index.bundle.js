"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/ship */ "./src/models/ship.js");


let r = (0,_models_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(4);

console.log(r.isLive())

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
const Cell = () => {
    let hit = false;
    let parent;
    let node;
    let x;
    let y;

    const setTheHit = () => {
        hit = true;
    }

    const isHit = () => {
        return hit;
    }

    const setParent = (nParent) => {
        parent = nParent;
    }

    const getParent = () => {
        return parent;
    }

    return { setTheHit, isHit, setParent, getParent }
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
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");


const Ship = (l) => {
    let length = l;
    let body = [];
    let live = true;

    for (let i = 0; i < length; i++) {
        body.push((0,_cell__WEBPACK_IMPORTED_MODULE_0__.Cell)());
    }

    const isLive = () => {
        live = false;

        body.forEach(cell => {
            if (!cell.isHit()) {
                live = true;
            }
        })

        return live;
    }

    const getBody = () => {
        return body;
    }

    return { isLive, getBody };
}

const Fregat = () => {
    const prototype = Ship(4);
    return Object.assign(prototype);
}

const Caravel = () => {
    const prototype = Ship(3);
    return Object.assign(prototype);
}

const Drakkar = () => {
    const prototype = Ship(2);
    return Object.assign(prototype);
}

const Boat = () => {
    const prototype = Ship(1);
    return Object.assign(prototype);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXFDOztBQUVyQyxRQUFRLGtEQUFJOztBQUVaOzs7Ozs7Ozs7Ozs7OztBQ0pPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEI4Qjs7QUFFdkI7QUFDUDtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLFlBQVk7QUFDaEMsa0JBQWtCLDJDQUFJO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvY2VsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9tb2RlbHMvc2hpcFwiO1xuXG5sZXQgciA9IFNoaXAoNCk7XG5cbmNvbnNvbGUubG9nKHIuaXNMaXZlKCkpIiwiZXhwb3J0IGNvbnN0IENlbGwgPSAoKSA9PiB7XG4gICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgIGxldCBwYXJlbnQ7XG4gICAgbGV0IG5vZGU7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG5cbiAgICBjb25zdCBzZXRUaGVIaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdCA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgaXNIaXQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoaXQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5QYXJlbnQpID0+IHtcbiAgICAgICAgcGFyZW50ID0gblBhcmVudDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0VGhlSGl0LCBpc0hpdCwgc2V0UGFyZW50LCBnZXRQYXJlbnQgfVxufSIsImltcG9ydCB7IENlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5cbmV4cG9ydCBjb25zdCBTaGlwID0gKGwpID0+IHtcbiAgICBsZXQgbGVuZ3RoID0gbDtcbiAgICBsZXQgYm9keSA9IFtdO1xuICAgIGxldCBsaXZlID0gdHJ1ZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9keS5wdXNoKENlbGwoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNMaXZlID0gKCkgPT4ge1xuICAgICAgICBsaXZlID0gZmFsc2U7XG5cbiAgICAgICAgYm9keS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgaWYgKCFjZWxsLmlzSGl0KCkpIHtcbiAgICAgICAgICAgICAgICBsaXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gbGl2ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRCb2R5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYm9keTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpc0xpdmUsIGdldEJvZHkgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEZyZWdhdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDQpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59XG5cbmV4cG9ydCBjb25zdCBDYXJhdmVsID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFNoaXAoMyk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlKTtcbn1cblxuZXhwb3J0IGNvbnN0IERyYWtrYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgyKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufVxuXG5leHBvcnQgY29uc3QgQm9hdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDEpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9