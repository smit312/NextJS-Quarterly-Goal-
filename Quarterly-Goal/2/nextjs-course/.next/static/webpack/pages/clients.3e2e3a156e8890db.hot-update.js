"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/clients",{

/***/ "./pages/clients/index.js":
/*!********************************!*\
  !*** ./pages/clients/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ClientsPage() {\n    var _this = this;\n    var clients = [\n        {\n            id: \"smit\",\n            name: \"Smit Thakkar\"\n        },\n        {\n            id: \"hemil\",\n            name: \"HemilRajpura\"\n        },\n        {\n            id: \"sagar\",\n            name: \"SagarChhatbar\"\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" The Clients Page \"\n            }, void 0, false, {\n                fileName: \"/home/smitthakkar/Simform/Quarterly-Goal/2/nextjs-course/pages/clients/index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: clients.map(function(client) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/clients/\".concat(client.id),\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: client\n                                }, void 0, false, {\n                                    fileName: \"/home/smitthakkar/Simform/Quarterly-Goal/2/nextjs-course/pages/clients/index.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 51\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/smitthakkar/Simform/Quarterly-Goal/2/nextjs-course/pages/clients/index.js\",\n                            lineNumber: 14,\n                            columnNumber: 13\n                        }, _this)\n                    }, client.id, false, {\n                        fileName: \"/home/smitthakkar/Simform/Quarterly-Goal/2/nextjs-course/pages/clients/index.js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/smitthakkar/Simform/Quarterly-Goal/2/nextjs-course/pages/clients/index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/smitthakkar/Simform/Quarterly-Goal/2/nextjs-course/pages/clients/index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = ClientsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClientsPage);\nvar _c;\n$RefreshReg$(_c, \"ClientsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jbGllbnRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBNkI7QUFDN0IsU0FBU0MsV0FBVyxHQUFHOztJQUNyQixJQUFNQyxPQUFPLEdBQUc7UUFDZDtZQUFFQyxFQUFFLEVBQUUsTUFBTTtZQUFFQyxJQUFJLEVBQUUsY0FBYztTQUFFO1FBQ3BDO1lBQUVELEVBQUUsRUFBRSxPQUFPO1lBQUVDLElBQUksRUFBRSxjQUFjO1NBQUU7UUFDckM7WUFBRUQsRUFBRSxFQUFFLE9BQU87WUFBRUMsSUFBSSxFQUFFLGVBQWU7U0FBRTtLQUN2QztJQUNELHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxvQkFBa0I7Ozs7O29CQUFLOzBCQUMzQiw4REFBQ0MsSUFBRTswQkFDQUwsT0FBTyxDQUFDTSxHQUFHLENBQUMsU0FBQ0MsTUFBTTt5Q0FDbEIsOERBQUNDLElBQUU7a0NBQ0QsNEVBQUNWLGtEQUFJOzRCQUFDVyxJQUFJLEVBQUUsV0FBVSxDQUFZLE9BQVZGLE1BQU0sQ0FBQ04sRUFBRSxDQUFFOztnQ0FBRSxHQUFDOzhDQUFBLDhEQUFDRSxLQUFHOzhDQUFFSSxNQUFNOzs7Ozt5Q0FBTzs7Ozs7O2lDQUFPO3VCQUR6REEsTUFBTSxDQUFDTixFQUFFOzs7OzZCQUViO2lCQUNOLENBQUM7Ozs7O29CQUNDOzs7Ozs7WUFDRCxDQUNOO0NBQ0g7QUFsQlFGLEtBQUFBLFdBQVc7QUFvQnBCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50cy9pbmRleC5qcz80NWU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmZ1bmN0aW9uIENsaWVudHNQYWdlKCkge1xuICBjb25zdCBjbGllbnRzID0gW1xuICAgIHsgaWQ6IFwic21pdFwiLCBuYW1lOiBcIlNtaXQgVGhha2thclwiIH0sXG4gICAgeyBpZDogXCJoZW1pbFwiLCBuYW1lOiBcIkhlbWlsUmFqcHVyYVwiIH0sXG4gICAgeyBpZDogXCJzYWdhclwiLCBuYW1lOiBcIlNhZ2FyQ2hoYXRiYXJcIiB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+IFRoZSBDbGllbnRzIFBhZ2UgPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge2NsaWVudHMubWFwKChjbGllbnQpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtjbGllbnQuaWR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jbGllbnRzLyR7Y2xpZW50LmlkfWB9PiA8ZGl2PntjbGllbnR9PC9kaXY+PC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50c1BhZ2U7XG4iXSwibmFtZXMiOlsiTGluayIsIkNsaWVudHNQYWdlIiwiY2xpZW50cyIsImlkIiwibmFtZSIsImRpdiIsImgxIiwidWwiLCJtYXAiLCJjbGllbnQiLCJsaSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/clients/index.js\n"));

/***/ })

});