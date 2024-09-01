"use strict";
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 28265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ OrdersAnalytics)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87857);
/* harmony import */ var _redux_features_analytics_analyticsApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48472);
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10170);






function OrdersAnalytics({ isDashboard }) {
    const { data, isLoading } = (0,_redux_features_analytics_analyticsApi__WEBPACK_IMPORTED_MODULE_2__/* .useGetOrdersAnalyticsQuery */ .U_)({});
    const analyticsData = [];
    data && data.orders.last12Months.forEach((item)=>{
        analyticsData.push({
            name: item.name,
            Count: item.count
        });
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader_Loader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: isDashboard ? "h-[30vh]" : "h-screen",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: isDashboard ? "mt-[0px] pl-[40px] mb-2" : "mt-[50px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.title} ${isDashboard && "!text-[20px]"} px-5 !text-start`,
                            children: "Orders Analytics"
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
                    className: `w-full ${!isDashboard ? "h-[90%]" : "h-full"} flex items-center justify-center`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__/* .ResponsiveContainer */ .h2, {
                        width: isDashboard ? "100%" : "90%",
                        height: isDashboard ? "100%" : "50%",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_5__/* .LineChart */ .wW, {
                            width: 500,
                            height: 300,
                            data: analyticsData,
                            margin: {
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__/* .CartesianGrid */ .q3, {
                                    strokeDasharray: "3 3"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__/* .XAxis */ .Kc, {
                                    dataKey: "name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__/* .YAxis */ .B2, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__/* .Tooltip */ .u, {}),
                                !isDashboard && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__/* .Legend */ .De, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__/* .Line */ .x1, {
                                    type: "monotone",
                                    dataKey: "Count",
                                    stroke: "#82ca9d"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}


/***/ })

};
;