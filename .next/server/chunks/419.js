"use strict";
exports.id = 419;
exports.ids = [419];
exports.modules = {

/***/ 5419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pf: () => (/* binding */ useGetHeroDataQuery),
/* harmony export */   tk: () => (/* binding */ useEditLayoutMutation)
/* harmony export */ });
/* unused harmony export layoutApi */
/* harmony import */ var _api_apiSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18321);

const layoutApi = _api_apiSlice__WEBPACK_IMPORTED_MODULE_0__/* .apiSlice */ .gk.injectEndpoints({
    endpoints: (builder)=>({
            getHeroData: builder.query({
                query: (type)=>({
                        url: `get-layout/${type}`,
                        method: "GET",
                        credentials: "include"
                    })
            }),
            editLayout: builder.mutation({
                query: ({ type, image, title, subTitle, faq, categories })=>({
                        url: `edit-layout`,
                        body: {
                            type,
                            image,
                            title,
                            subTitle,
                            faq,
                            categories
                        },
                        method: "PUT",
                        credentials: "include"
                    })
            })
        })
});
const { useGetHeroDataQuery, useEditLayoutMutation } = layoutApi;


/***/ })

};
;