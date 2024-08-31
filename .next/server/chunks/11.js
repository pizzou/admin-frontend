"use strict";
exports.id = 11;
exports.ids = [11];
exports.modules = {

/***/ 89008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14800);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15816);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71072);
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10170);
/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89912);
/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(timeago_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_features_user_userApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89276);
/* harmony import */ var _app_styles_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87857);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10345);











const AllCourses = ({ isTeam })=>{
    const { theme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .F)();
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("admin");
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [updateUserRole, { error: updateError, isSuccess }] = (0,_redux_features_user_userApi__WEBPACK_IMPORTED_MODULE_5__/* .useUpdateUserRoleMutation */ .V1)();
    const { isLoading, data, refetch } = (0,_redux_features_user_userApi__WEBPACK_IMPORTED_MODULE_5__/* .useGetAllUsersQuery */ .wv)({}, {
        refetchOnMountOrArgChange: true
    });
    const [deleteUser, { isSuccess: deleteSuccess, error: deleteError }] = (0,_redux_features_user_userApi__WEBPACK_IMPORTED_MODULE_5__/* .useDeleteUserMutation */ .I1)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (updateError) {
            if ("data" in updateError) {
                const errorMessage = updateError;
                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.error(errorMessage.data.message);
            }
        }
        if (isSuccess) {
            refetch();
            react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.success("User role updated successfully");
            setActive(false);
        }
        if (deleteSuccess) {
            refetch();
            react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.success("Delete user successfully!");
            setOpen(false);
        }
        if (deleteError) {
            if ("data" in deleteError) {
                const errorMessage = deleteError;
                react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.error(errorMessage.data.message);
            }
        }
    }, [
        updateError,
        isSuccess,
        deleteSuccess,
        deleteError
    ]);
    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.3
        },
        {
            field: "name",
            headerName: "Name",
            flex: 0.5
        },
        {
            field: "email",
            headerName: "Email",
            flex: 0.5
        },
        {
            field: "role",
            headerName: "Role",
            flex: 0.5
        },
        {
            field: "courses",
            headerName: "Purchased Courses",
            flex: 0.5
        },
        {
            field: "created_at",
            headerName: "Joined At",
            flex: 0.5
        },
        {
            field: " ",
            headerName: "Delete",
            flex: 0.2,
            renderCell: (params)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {
                        onClick: ()=>{
                            setOpen(!open);
                            setUserId(params.row.id);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__/* .AiOutlineDelete */ .VPh, {
                            className: "dark:text-white text-black",
                            size: 20
                        })
                    })
                });
            }
        },
        {
            field: "  ",
            headerName: "Email",
            flex: 0.2,
            renderCell: (params)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: `mailto:${params.row.email}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__/* .AiOutlineMail */ .Dme, {
                            className: "dark:text-white text-black",
                            size: 20
                        })
                    })
                });
            }
        }
    ];
    const rows = [];
    if (isTeam) {
        const newData = data && data.users.filter((item)=>item.role === "admin");
        newData && newData.forEach((item)=>{
            rows.push({
                id: item._id,
                name: item.name,
                email: item.email,
                role: item.role,
                courses: item.courses.length,
                created_at: (0,timeago_js__WEBPACK_IMPORTED_MODULE_4__.format)(item.createdAt)
            });
        });
    } else {
        data && data.users.forEach((item)=>{
            rows.push({
                id: item._id,
                name: item.name,
                email: item.email,
                role: item.role,
                courses: item.courses.length,
                created_at: (0,timeago_js__WEBPACK_IMPORTED_MODULE_4__.format)(item.createdAt)
            });
        });
    }
    const handleSubmit = async ()=>{
        await updateUserRole({
            email,
            role
        });
    };
    const handleDelete = async ()=>{
        const id = userId;
        await deleteUser(id);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mt-[120px]",
        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader_Loader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
            m: "20px",
            children: [
                isTeam && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full flex justify-end",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_6__/* .styles */ .W.button} !w-[200px] !rounded-[10px] dark:bg-[#57c7a3] !h-[35px] dark:border dark:border-[#ffffff6c]`,
                        onClick: ()=>setActive(!active),
                        children: "Add New Member"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                    m: "40px 0 0 0",
                    height: "80vh",
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
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_10__.DataGrid, {
                        checkboxSelection: true,
                        rows: rows,
                        columns: columns
                    })
                }),
                active && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Modal, {
                    open: active,
                    onClose: ()=>setActive(!active),
                    "aria-labelledby": "modal-modal-title",
                    "aria-describedby": "modal-modal-description",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                        className: "absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_6__/* .styles */ .W.title}`,
                                children: "Add New Member"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "email",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        placeholder: "Enter email...",
                                        className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_6__/* .styles */ .W.input}`
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        name: "",
                                        id: "",
                                        className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_6__/* .styles */ .W.input} !mt-6`,
                                        onChange: (e)=>setRole(e.target.value),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "admin",
                                                children: "Admin"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "user",
                                                children: "User"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_6__/* .styles */ .W.button} my-6 !h-[30px]`,
                                        onClick: handleSubmit,
                                        children: "Submit"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Modal, {
                    open: open,
                    onClose: ()=>setOpen(!open),
                    "aria-labelledby": "modal-modal-title",
                    "aria-describedby": "modal-modal-description",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
                        className: "absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_6__/* .styles */ .W.title}`,
                                children: "Are you sure you want to delete this user?"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-full items-center justify-between mb-6 mt-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_6__/* .styles */ .W.button} !w-[120px] h-[30px] bg-[#57c7a3]`,
                                        onClick: ()=>setOpen(!open),
                                        children: "Cancel"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_6__/* .styles */ .W.button} !w-[120px] h-[30px] bg-[#d63f3f]`,
                                        onClick: handleDelete,
                                        children: "Delete"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllCourses);


/***/ })

};
;