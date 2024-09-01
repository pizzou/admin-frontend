"use strict";
exports.id = 977;
exports.ids = [977];
exports.modules = {

/***/ 87857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ styles)
/* harmony export */ });
const styles = {
    title: "text-[25px] text-black dark:text-white font-[500] font-Poppins text-center py-2",
    label: "text-[16px] font-Poppins text-black dark:text-white",
    input: "w-full text-black dark:text-white bg-transparent border rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins",
    button: "flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] min-h-[45px] w-full text-[16px] font-Poppins font-semibold"
};


/***/ }),

/***/ 82603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U_: () => (/* binding */ useGetOrdersAnalyticsQuery),
/* harmony export */   eN: () => (/* binding */ useGetUsersAnalyticsQuery),
/* harmony export */   r6: () => (/* binding */ useGetCoursesAnalyticsQuery)
/* harmony export */ });
/* unused harmony export analyticsApi */
/* harmony import */ var _api_apiSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18321);

const analyticsApi = _api_apiSlice__WEBPACK_IMPORTED_MODULE_0__/* .apiSlice */ .gk.injectEndpoints({
    endpoints: (builder)=>({
            getCoursesAnalytics: builder.query({
                query: ()=>({
                        url: "get-courses-analytics",
                        method: "GET",
                        credentials: "include"
                    })
            }),
            getUsersAnalytics: builder.query({
                query: ()=>({
                        url: "get-users-analytics",
                        method: "GET",
                        credentials: "include"
                    })
            }),
            getOrdersAnalytics: builder.query({
                query: ()=>({
                        url: "get-orders-analytics",
                        method: "GET",
                        credentials: "include"
                    })
            })
        })
});
const { useGetCoursesAnalyticsQuery, useGetUsersAnalyticsQuery, useGetOrdersAnalyticsQuery } = analyticsApi;


/***/ })

};
;