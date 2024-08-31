exports.id = 484;
exports.ids = [484];
exports.modules = {

/***/ 20517:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 53979));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 10345));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 26607))

/***/ }),

/***/ 91513:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 53979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Custom: () => (/* binding */ Custom),
  Providers: () => (/* binding */ Providers)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(91388);
// EXTERNAL MODULE: ./redux/features/api/apiSlice.ts
var apiSlice = __webpack_require__(18321);
// EXTERNAL MODULE: ./redux/features/auth/authSlice.ts
var authSlice = __webpack_require__(79093);
;// CONCATENATED MODULE: ./redux/features/store.ts
/* __next_internal_client_entry_do_not_use__ store auto */ 


const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        [apiSlice/* apiSlice */.gk.reducerPath]: apiSlice/* apiSlice */.gk.reducer,
        auth: authSlice/* default */.ZP
    },
    devTools: false,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice/* apiSlice */.gk.middleware)
});
// call the load user function on every page load
const initializeApp = async ()=>{
    await store.dispatch(apiSlice/* apiSlice */.gk.endpoints.loadUser.initiate({}, {
        forceRefetch: true
    }));
};
initializeApp();

// EXTERNAL MODULE: ./app/components/Loader/Loader.tsx
var Loader = __webpack_require__(10170);
// EXTERNAL MODULE: ./node_modules/socket.io-client/build/esm-debug/index.js + 27 modules
var esm_debug = __webpack_require__(69604);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(74284);
;// CONCATENATED MODULE: ./app/Provider.tsx
/* __next_internal_client_entry_do_not_use__ Providers,Custom auto */ 







const ENDPOINT = "http://localhost:8000/" || 0;
const socketId = (0,esm_debug/* default */.ZP)(ENDPOINT, {
    transports: [
        "websocket"
    ]
});
function Providers({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: store,
        children: children
    });
}
const Custom = ({ children })=>{
    const { isLoading } = (0,apiSlice/* useLoadUserQuery */.Ac)({});
    const [isMounted, setisMounted] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        socketId.on("connection", ()=>{});
        setisMounted(true);
    }, []);
    if (!isMounted) {
        return;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(react.SessionProvider, {
                children: children
            })
        })
    });
};


/***/ }),

/***/ 10170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loader_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75574);
/* harmony import */ var _Loader_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Loader_css__WEBPACK_IMPORTED_MODULE_2__);



const Loader = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex justify-center items-center h-screen",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "loader"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 29610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Heading = ({ title, description, keywords })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "keywords",
                content: keywords
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);


/***/ }),

/***/ 26607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71072);
/* __next_internal_client_entry_do_not_use__ ThemeProvider auto */ 


function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_2__/* .ThemeProvider */ .f, {
        ...props,
        children: children
    });
}


/***/ }),

/***/ 18321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ac: () => (/* binding */ useLoadUserQuery),
/* harmony export */   gk: () => (/* binding */ apiSlice)
/* harmony export */ });
/* unused harmony export useRefreshTokenQuery */
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23298);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_authSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79093);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72479);



const apiSlice = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.createApi)({
    reducerPath: "api",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.fetchBaseQuery)({
        baseUrl: "http://localhost:8000/api/v1",
        prepareHeaders: (headers)=>{
            const accessToken = js_cookie__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("accessToken");
            const refreshToken = js_cookie__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("refreshToken");
            if (accessToken) {
                headers.set("access-token", accessToken);
            }
            if (refreshToken) {
                headers.set("refresh-token", refreshToken);
            }
            return headers;
        }
    }),
    endpoints: (builder)=>({
            refreshToken: builder.query({
                query: (data)=>({
                        url: "refresh",
                        method: "GET",
                        credentials: "include"
                    })
            }),
            loadUser: builder.query({
                query: (data)=>({
                        url: "me",
                        method: "GET",
                        credentials: "include"
                    }),
                async onQueryStarted (arg, { queryFulfilled, dispatch }) {
                    try {
                        const result = await queryFulfilled;
                        dispatch((0,_auth_authSlice__WEBPACK_IMPORTED_MODULE_0__/* .userLoggedIn */ .nD)({
                            accessToken: result.data.accessToken,
                            refreshToken: result.data.refreshToken,
                            user: result.data.user
                        }));
                    } catch (error) {
                        console.log(error);
                    }
                }
            })
        })
});
const { useRefreshTokenQuery, useLoadUserQuery } = apiSlice;


/***/ }),

/***/ 79093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   _e: () => (/* binding */ userLoggedOut),
/* harmony export */   f0: () => (/* binding */ userRegistration),
/* harmony export */   nD: () => (/* binding */ userLoggedIn)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    token: "",
    user: ""
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        userRegistration: (state, action)=>{
            state.token = action.payload.token;
        },
        userLoggedIn: (state, action)=>{
            state.token = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.user = action.payload.user;
        },
        userLoggedOut: (state)=>{
            state.token = "";
            state.user = "";
        }
    }
});
const { userRegistration, userLoggedIn, userLoggedOut } = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


/***/ }),

/***/ 74746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Poppins","arguments":[{"subsets":["latin"],"weight":["400","500","600","700"],"variable":"--font-Poppins"}],"variableName":"poppins"}
var target_path_app_layout_tsx_import_Poppins_arguments_subsets_latin_weight_400_500_600_700_variable_font_Poppins_variableName_poppins_ = __webpack_require__(67538);
var target_path_app_layout_tsx_import_Poppins_arguments_subsets_latin_weight_400_500_600_700_variable_font_Poppins_variableName_poppins_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Poppins_arguments_subsets_latin_weight_400_500_600_700_variable_font_Poppins_variableName_poppins_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Josefin_Sans","arguments":[{"subsets":["latin"],"weight":["400","500","600","700"],"variable":"--font-Josefin"}],"variableName":"josefin"}
var target_path_app_layout_tsx_import_Josefin_Sans_arguments_subsets_latin_weight_400_500_600_700_variable_font_Josefin_variableName_josefin_ = __webpack_require__(29976);
var target_path_app_layout_tsx_import_Josefin_Sans_arguments_subsets_latin_weight_400_500_600_700_variable_font_Josefin_variableName_josefin_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Josefin_Sans_arguments_subsets_latin_weight_400_500_600_700_variable_font_Josefin_variableName_josefin_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(67272);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./app/utils/theme-provider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\HP EliteBook\Downloads\Lms-Mobile-App\Lms-Mobile-App-master\admin\app\utils\theme-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["ThemeProvider"];

// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs
var dist = __webpack_require__(86014);
;// CONCATENATED MODULE: ./app/Provider.tsx

const Provider_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\HP EliteBook\Downloads\Lms-Mobile-App\Lms-Mobile-App-master\admin\app\Provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Provider_esModule, $$typeof: Provider_$$typeof } = Provider_proxy;
const Provider_default_ = Provider_proxy.default;

const Provider_e0 = Provider_proxy["Providers"];

const e1 = Provider_proxy["Custom"];

;// CONCATENATED MODULE: ./app/layout.tsx







function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: `${(target_path_app_layout_tsx_import_Poppins_arguments_subsets_latin_weight_400_500_600_700_variable_font_Poppins_variableName_poppins_default()).variable} ${(target_path_app_layout_tsx_import_Josefin_Sans_arguments_subsets_latin_weight_400_500_600_700_variable_font_Josefin_variableName_josefin_default()).variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Provider_e0, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e0, {
                    attribute: "class",
                    defaultTheme: "system",
                    enableSystem: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(e1, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: children
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(dist/* Toaster */.x7, {
                            position: "top-center",
                            reverseOrder: false
                        })
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 57481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 75574:
/***/ (() => {



/***/ }),

/***/ 67272:
/***/ (() => {



/***/ })

};
;