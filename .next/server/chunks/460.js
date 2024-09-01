"use strict";
exports.id = 460;
exports.ids = [460];
exports.modules = {

/***/ 50460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87857);
/* harmony import */ var _redux_features_analytics_analyticsApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48472);
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10170);






// const analyticsData = [
//     { name: "January 2023", count: 440 },
//     { name: "February 2023", count: 8200 },
//     { name: "March 2023", count: 4033 },
//     { name: "April 2023", count: 4502 },
//     { name: "May 2023", count: 2042 },
//     { name: "Jun 2023", count: 3454 },
//     { name: "July 2023", count: 356 },
//     { name: "Aug 2023", count: 5667 },
//     { name: "Sept 2023", count: 1320 },
//     { name: "Oct 2023", count: 6526 },
//     { name: "Nov 2023", count: 5480 },
//     { name: "December 2023", count: 485 },
//   ];
const UserAnalytics = ({ isDashboard })=>{
    const { data, isLoading } = (0,_redux_features_analytics_analyticsApi__WEBPACK_IMPORTED_MODULE_2__/* .useGetUsersAnalyticsQuery */ .eN)({});
    const analyticsData = [];
    data && data.users.last12Months.forEach((item)=>{
        analyticsData.push({
            name: item.month,
            count: item.count
        });
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader_Loader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${!isDashboard ? "mt-[50px]" : "mt-[50px] dark:bg-[#111C43] shadow-sm pb-5 rounded-sm"}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${isDashboard ? "!ml-8 mb-5" : ""}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.title} ${isDashboard && "!text-[20px]"} px-5 !text-start`,
                            children: "Users Analytics"
                        }),
                        !isDashboard && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.label} px-5`,
                            children: [
                                "Last 12 months analytics data",
                                " "
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `w-full ${isDashboard ? "h-[30vh]" : "h-screen"} flex items-center justify-center`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__/* .ResponsiveContainer */ .h2, {
                        width: isDashboard ? "100%" : "90%",
                        height: !isDashboard ? "50%" : "100%",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_5__/* .AreaChart */ .TH, {
                            data: analyticsData,
                            margin: {
                                top: 20,
                                right: 30,
                                left: 0,
                                bottom: 0
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__/* .XAxis */ .Kc, {
                                    dataKey: "name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__/* .YAxis */ .B2, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__/* .Tooltip */ .u, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__/* .Area */ .uN, {
                                    type: "monotone",
                                    dataKey: "count",
                                    stroke: "#4d62d9",
                                    fill: "#4d62d9"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserAnalytics);


/***/ })

};
;