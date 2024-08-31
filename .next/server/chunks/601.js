"use strict";
exports.id = 601;
exports.ids = [601];
exports.modules = {

/***/ 98601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Order_AllInvoices)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/x-data-grid/node/index.js
var node = __webpack_require__(14800);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var material_node = __webpack_require__(17421);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(71072);
// EXTERNAL MODULE: ./redux/features/courses/coursesApi.ts
var coursesApi = __webpack_require__(31166);
// EXTERNAL MODULE: ./app/components/Loader/Loader.tsx
var Loader = __webpack_require__(10170);
// EXTERNAL MODULE: ./node_modules/timeago.js/lib/index.js
var lib = __webpack_require__(89912);
// EXTERNAL MODULE: ./redux/features/api/apiSlice.ts
var apiSlice = __webpack_require__(18321);
;// CONCATENATED MODULE: ./redux/features/orders/ordersApi.ts

const ordersApi = apiSlice/* apiSlice */.gk.injectEndpoints({
    endpoints: (builder)=>({
            getAllOrders: builder.query({
                query: (type)=>({
                        url: `get-orders`,
                        method: "GET",
                        credentials: "include"
                    })
            }),
            getStripePublishablekey: builder.query({
                query: ()=>({
                        url: `payment/stripepublishablekey`,
                        method: "GET",
                        credentials: "include"
                    })
            }),
            createPaymentIntent: builder.mutation({
                query: (amount)=>({
                        url: "payment",
                        method: "POST",
                        body: {
                            amount
                        },
                        credentials: "include"
                    })
            }),
            createOrder: builder.mutation({
                query: ({ courseId, payment_info })=>({
                        url: "create-order",
                        body: {
                            courseId,
                            payment_info
                        },
                        method: "POST",
                        credentials: "include"
                    })
            })
        })
});
const { useGetAllOrdersQuery, useGetStripePublishablekeyQuery, useCreatePaymentIntentMutation, useCreateOrderMutation } = ordersApi;

// EXTERNAL MODULE: ./redux/features/user/userApi.ts
var userApi = __webpack_require__(89276);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(15816);
;// CONCATENATED MODULE: ./app/components/Admin/Order/AllInvoices.tsx











const AllInvoices = ({ isDashboard })=>{
    const { theme, setTheme } = (0,dist/* useTheme */.F)();
    const { isLoading, data } = useGetAllOrdersQuery({});
    const { data: usersData } = (0,userApi/* useGetAllUsersQuery */.wv)({});
    const { data: coursesData } = (0,coursesApi/* useGetAllCoursesQuery */.zk)({});
    const [orderData, setOrderData] = (0,react_.useState)([]);
    (0,react_.useEffect)(()=>{
        if (data) {
            const temp = data.orders.map((item)=>{
                const user = usersData?.users.find((user)=>user._id === item.userId);
                const course = coursesData?.courses.find((course)=>course._id === item.courseId);
                return {
                    ...item,
                    userName: user?.name,
                    userEmail: user?.email,
                    title: course?.name,
                    price: "$" + course?.price
                };
            });
            setOrderData(temp);
        }
    }, [
        data,
        usersData,
        coursesData
    ]);
    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.3
        },
        {
            field: "userName",
            headerName: "Name",
            flex: isDashboard ? 0.6 : 0.5
        },
        ...isDashboard ? [] : [
            {
                field: "userEmail",
                headerName: "Email",
                flex: 1
            },
            {
                field: "title",
                headerName: "Course Title",
                flex: 1
            }
        ],
        {
            field: "price",
            headerName: "Price",
            flex: 0.5
        },
        ...isDashboard ? [
            {
                field: "created_at",
                headerName: "Created At",
                flex: 0.5
            }
        ] : [
            {
                field: " ",
                headerName: "Email",
                flex: 0.2,
                renderCell: (params)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: `mailto:${params.row.userEmail}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiOutlineMail */.Dme, {
                            className: "dark:text-white text-black",
                            size: 20
                        })
                    });
                }
            }
        ]
    ];
    const rows = [];
    orderData && orderData.forEach((item)=>{
        rows.push({
            id: item._id,
            userName: item.userName,
            userEmail: item.userEmail,
            title: item.title,
            price: item.price,
            created_at: (0,lib.format)(item.createdAt)
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: !isDashboard ? "mt-[120px]" : "mt-[0px]",
        children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx(material_node.Box, {
            m: isDashboard ? "0" : "40px",
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_node.Box, {
                m: isDashboard ? "0" : "40px 0 0 0",
                height: isDashboard ? "35vh" : "90vh",
                overflow: "hidden",
                sx: {
                    "& .MuiDataGrid-root": {
                        border: "none",
                        outline: "none"
                    },
                    "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                        color: theme === "dark" ? "#fff" : "#000"
                    },
                    "& .MuiDataGrid-sortIcon": {
                        color: theme === "dark" ? "#fff" : "#000"
                    },
                    "& .MuiDataGrid-row": {
                        color: theme === "dark" ? "#fff" : "#000",
                        borderBottom: theme === "dark" ? "1px solid #ffffff30!important" : "1px solid #ccc!important"
                    },
                    "& .MuiTablePagination-root": {
                        color: theme === "dark" ? "#fff" : "#000"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none!important"
                    },
                    "& .name-column--cell": {
                        color: theme === "dark" ? "#fff" : "#000"
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
                        borderBottom: "none",
                        color: theme === "dark" ? "#fff" : "#000"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: theme === "dark" ? "#1F2A40" : "#F2F0F0"
                    },
                    "& .MuiDataGrid-footerContainer": {
                        color: theme === "dark" ? "#fff" : "#000",
                        borderTop: "none",
                        backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC"
                    },
                    "& .MuiCheckbox-root": {
                        color: theme === "dark" ? `#b7ebde !important` : `#000 !important`
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `#fff !important`
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(node.DataGrid, {
                    checkboxSelection: isDashboard ? false : true,
                    rows: rows,
                    columns: columns,
                    components: isDashboard ? {} : {
                        Toolbar: node.GridToolbar
                    }
                })
            })
        })
    });
};
/* harmony default export */ const Order_AllInvoices = (AllInvoices);


/***/ }),

/***/ 89276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I1: () => (/* binding */ useDeleteUserMutation),
/* harmony export */   V1: () => (/* binding */ useUpdateUserRoleMutation),
/* harmony export */   wv: () => (/* binding */ useGetAllUsersQuery)
/* harmony export */ });
/* unused harmony exports userApi, useUpdateAvatarMutation, useEditProfileMutation, useUpdatePasswordMutation */
/* harmony import */ var _api_apiSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18321);

const userApi = _api_apiSlice__WEBPACK_IMPORTED_MODULE_0__/* .apiSlice */ .gk.injectEndpoints({
    endpoints: (builder)=>({
            updateAvatar: builder.mutation({
                query: (avatar)=>({
                        url: "update-user-avatar",
                        method: "PUT",
                        body: {
                            avatar
                        },
                        credentials: "include"
                    })
            }),
            editProfile: builder.mutation({
                query: ({ name })=>({
                        url: "update-user-info",
                        method: "PUT",
                        body: {
                            name
                        },
                        credentials: "include"
                    })
            }),
            updatePassword: builder.mutation({
                query: ({ oldPassword, newPassword })=>({
                        url: "update-user-password",
                        method: "PUT",
                        body: {
                            oldPassword,
                            newPassword
                        },
                        credentials: "include"
                    })
            }),
            getAllUsers: builder.query({
                query: ()=>({
                        url: "get-users",
                        method: "GET",
                        credentials: "include"
                    })
            }),
            updateUserRole: builder.mutation({
                query: ({ email, role })=>({
                        url: "update-user",
                        method: "PUT",
                        body: {
                            email,
                            role
                        },
                        credentials: "include"
                    })
            }),
            deleteUser: builder.mutation({
                query: (id)=>({
                        url: `delete-user/${id}`,
                        method: "DELETE",
                        credentials: "include"
                    })
            })
        })
});
const { useUpdateAvatarMutation, useEditProfileMutation, useUpdatePasswordMutation, useGetAllUsersQuery, useUpdateUserRoleMutation, useDeleteUserMutation } = userApi;


/***/ })

};
;