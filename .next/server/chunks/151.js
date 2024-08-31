"use strict";
exports.id = 151;
exports.ids = [151];
exports.modules = {

/***/ 66538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Admin_DashboardHero)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./app/components/Admin/DashboardHeader.tsx + 2 modules
var DashboardHeader = __webpack_require__(11009);
// EXTERNAL MODULE: ./app/components/Admin/Analytics/UserAnalytics.tsx
var UserAnalytics = __webpack_require__(50460);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var index_esm = __webpack_require__(32695);
// EXTERNAL MODULE: ./node_modules/react-icons/pi/index.esm.js
var pi_index_esm = __webpack_require__(82460);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(17421);
// EXTERNAL MODULE: ./app/components/Admin/Analytics/OrdersAnalytics.tsx
var OrdersAnalytics = __webpack_require__(28265);
// EXTERNAL MODULE: ./app/components/Admin/Order/AllInvoices.tsx + 1 modules
var AllInvoices = __webpack_require__(98601);
// EXTERNAL MODULE: ./redux/features/analytics/analyticsApi.ts
var analyticsApi = __webpack_require__(82603);
;// CONCATENATED MODULE: ./app/components/Admin/Widgets/DashboardWidgets.tsx









const CircularProgressWithLabel = ({ open, value })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Box, {
        sx: {
            position: "relative",
            display: "inline-flex"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(node.CircularProgress, {
                variant: "determinate",
                value: value,
                size: 45,
                color: value && value > 99 ? "info" : "error",
                thickness: 4,
                style: {
                    zIndex: open ? -1 : 1
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                sx: {
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }
            })
        ]
    });
};
const DashboardWidgets = ({ open })=>{
    const [ordersComparePercentage, setOrdersComparePercentage] = (0,react_.useState)();
    const [userComparePercentage, setuserComparePercentage] = (0,react_.useState)();
    const { data, isLoading } = (0,analyticsApi/* useGetUsersAnalyticsQuery */.eN)({});
    const { data: ordersData, isLoading: ordersLoading } = (0,analyticsApi/* useGetOrdersAnalyticsQuery */.U_)({});
    (0,react_.useEffect)(()=>{
        if (isLoading && ordersLoading) {
            return;
        } else {
            if (data && ordersData) {
                const usersLastTwoMonths = data.users.last12Months.slice(-2);
                const ordersLastTwoMonths = ordersData.orders.last12Months.slice(-2);
                if (usersLastTwoMonths.length === 2 && ordersLastTwoMonths.length === 2) {
                    const usersCurrentMonth = usersLastTwoMonths[1].count;
                    const usersPreviousMonth = usersLastTwoMonths[0].count;
                    const ordersCurrentMonth = ordersLastTwoMonths[1].count;
                    const ordersPreviousMonth = ordersLastTwoMonths[0].count;
                    const usersPercentChange = usersPreviousMonth !== 0 ? (usersCurrentMonth - usersPreviousMonth) / usersPreviousMonth * 100 : 100;
                    const ordersPercentChange = ordersPreviousMonth !== 0 ? (ordersCurrentMonth - ordersPreviousMonth) / ordersPreviousMonth * 100 : 100;
                    setuserComparePercentage({
                        currentMonth: usersCurrentMonth,
                        previousMonth: usersPreviousMonth,
                        percentChange: usersPercentChange
                    });
                    setOrdersComparePercentage({
                        currentMonth: ordersCurrentMonth,
                        previousMonth: ordersPreviousMonth,
                        percentChange: ordersPercentChange
                    });
                }
            }
        }
    }, [
        isLoading,
        ordersLoading,
        data,
        ordersData
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-[30px] min-h-screen",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-[75%,25%]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-8 ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(UserAnalytics/* default */.Z, {
                            isDashboard: true
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "pt-[80px] pr-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full dark:bg-[#111C43] rounded-sm shadow",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center p-5 justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BiBorderLeft */.gbd, {
                                                    className: "dark:text-[#45CBA0] text-[#000] text-[30px]"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "pt-2 font-Poppins dark:text-[#fff] text-black text-[20px]",
                                                    children: ordersComparePercentage?.currentMonth
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "py-2 font-Poppins dark:text-[#45CBA0] text-black text-[20px] font-[400]",
                                                    children: "Sales Obtained"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CircularProgressWithLabel, {
                                                    value: ordersComparePercentage?.percentChange > 0 ? 100 : 0,
                                                    open: open
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    className: "text-center pt-4",
                                                    children: [
                                                        ordersComparePercentage?.percentChange > 0 ? "+" + ordersComparePercentage?.percentChange.toFixed(2) : "-" + ordersComparePercentage?.percentChange.toFixed(2),
                                                        " %"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full dark:bg-[#111C43] rounded-sm shadow my-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center p-5 justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(pi_index_esm/* PiUsersFourLight */.lyE, {
                                                    className: "dark:text-[#45CBA0] text-[#000] text-[30px]"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "pt-2 font-Poppins dark:text-[#fff] text-black text-[20px]",
                                                    children: userComparePercentage?.currentMonth
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "py-2 font-Poppins dark:text-[#45CBA0] text-black text-[20px] font-[400]",
                                                    children: "New Users"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CircularProgressWithLabel, {
                                                    value: userComparePercentage?.percentChange > 0 ? 100 : 0,
                                                    open: open
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    className: "text-center pt-4",
                                                    children: [
                                                        userComparePercentage?.percentChange > 0 ? "+" + userComparePercentage?.percentChange.toFixed(2) : "-" + userComparePercentage?.percentChange.toFixed(2),
                                                        " %"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-[65%,35%] mt-[-20px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dark:bg-[#111c43] w-[94%] mt-[30px] h-[40vh] shadow-sm m-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(OrdersAnalytics/* default */.Z, {
                            isDashboard: true
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "p-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "dark:text-[#fff] text-black text-[20px] font-[400] font-Poppins pb-3",
                                children: "Recent Transactions"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(AllInvoices/* default */.Z, {
                                isDashboard: true
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Widgets_DashboardWidgets = (DashboardWidgets);

;// CONCATENATED MODULE: ./app/components/Admin/DashboardHero.tsx




const DashboardHero = ({ isDashboard })=>{
    const [open, setOpen] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DashboardHeader/* default */.Z, {
                open: open,
                setOpen: setOpen
            }),
            isDashboard && /*#__PURE__*/ jsx_runtime_.jsx(Widgets_DashboardWidgets, {
                open: open
            })
        ]
    });
};
/* harmony default export */ const Admin_DashboardHero = (DashboardHero);


/***/ }),

/***/ 78164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ AdminProtected)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);




function AdminProtected({ children }) {
    const { user } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.auth);
    const [isAdmin, setIsAdmin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (user) {
            const isAdminUser = user?.role === "admin";
            if (isAdminUser) {
                setIsAdmin(true);
            } else {
                (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.redirect)("/");
            }
        } else {
            (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.redirect)("/");
        }
    }, [
        user
    ]);
    if (isAdmin === null) {
        return null;
    }
    return isAdmin ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    }) : null;
}


/***/ })

};
;