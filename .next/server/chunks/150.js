"use strict";
exports.id = 150;
exports.ids = [150];
exports.modules = {

/***/ 11009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Admin_DashboardHeader)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(71072);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var index_esm = __webpack_require__(32695);
;// CONCATENATED MODULE: ./app/utils/ThemeSwitcher.tsx
/* __next_internal_client_entry_do_not_use__ ThemeSwitcher auto */ 



const ThemeSwitcher = ()=>{
    const [mounted, setMounted] = (0,react_.useState)(false);
    const { theme, setTheme } = (0,dist/* useTheme */.F)();
    (0,react_.useEffect)(()=>setMounted(true), []);
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex items-center justify-center mx-4",
        children: theme === "light" ? /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BiMoon */.dZ3, {
            className: "cursor-pointer",
            fill: "black",
            size: 25,
            onClick: ()=>setTheme("dark")
        }) : /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BiSun */.JuG, {
            size: 25,
            className: "cursor-pointer",
            onClick: ()=>setTheme("light")
        })
    });
};

// EXTERNAL MODULE: ./redux/features/api/apiSlice.ts
var apiSlice = __webpack_require__(18321);
;// CONCATENATED MODULE: ./redux/features/notifications/notificationsApi.ts

const notificationsApi = apiSlice/* apiSlice */.gk.injectEndpoints({
    endpoints: (builder)=>({
            getAllNotifications: builder.query({
                query: ()=>({
                        url: "get-all-notifications",
                        method: "GET",
                        credentials: "include"
                    })
            }),
            updateNotificationStatus: builder.mutation({
                query: (id)=>({
                        url: `/update-notification/${id}`,
                        method: "PUT",
                        credentials: "include"
                    })
            })
        })
});
const { useGetAllNotificationsQuery, useUpdateNotificationStatusMutation } = notificationsApi;

// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var io_index_esm = __webpack_require__(12772);
// EXTERNAL MODULE: ./node_modules/socket.io-client/build/esm-debug/index.js + 27 modules
var esm_debug = __webpack_require__(69604);
// EXTERNAL MODULE: ./node_modules/timeago.js/lib/index.js
var lib = __webpack_require__(89912);
;// CONCATENATED MODULE: ./app/components/Admin/DashboardHeader.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const ENDPOINT = "http://localhost:8000/" || 0;
const socketId = (0,esm_debug/* default */.ZP)(ENDPOINT, {
    transports: [
        "websocket"
    ]
});
const DashboardHeader = ({ open, setOpen })=>{
    const { data, refetch } = useGetAllNotificationsQuery(undefined, {
        refetchOnMountOrArgChange: true
    });
    const [updateNotificationStatus, { isSuccess }] = useUpdateNotificationStatusMutation();
    const [notifications, setNotifications] = (0,react_.useState)([]);
    const [audio] = (0,react_.useState)( false && 0);
    const playNotificationSound = ()=>{
        audio.play();
    };
    (0,react_.useEffect)(()=>{
        if (data) {
            setNotifications(data.notifications.filter((item)=>item.status === "unread"));
        }
        if (isSuccess) {
            refetch();
        }
        audio.load();
    }, [
        data,
        isSuccess,
        audio
    ]);
    (0,react_.useEffect)(()=>{
        socketId.on("newNotification", (data)=>{
            refetch();
            playNotificationSound();
        });
    }, []);
    const handleNotificationStatusChange = async (id)=>{
        await updateNotificationStatus(id);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full flex items-center justify-end p-6 fixed top-5 right-0 z-[9999999]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ThemeSwitcher, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative cursor-pointer m-2",
                onClick: ()=>setOpen(!open),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(io_index_esm/* IoMdNotificationsOutline */.G58, {
                        className: "text-2xl cursor-pointer dark:text-white text-black"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "absolute -top-2 -right-2 bg-[#3ccba0] rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center text-white",
                        children: notifications && notifications.length
                    })
                ]
            }),
            open && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-[350px] h-[60vh] overflow-y-scroll py-3 px-2 border border-[#ffffff0c] dark:bg-[#111C43] bg-white shadow-xl absolute top-16 z-[1000000000] rounded",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "text-center text-[20px] font-Poppins text-black dark:text-white p-3",
                        children: "Notifications"
                    }),
                    notifications && notifications.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "dark:bg-[#2d3a4e] bg-[#00000013] font-Poppins border-b dark:border-b-[#ffffff47] border-b-[#0000000f]",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-full flex items-center justify-between p-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-black dark:text-white",
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-black dark:text-white cursor-pointer",
                                            onClick: ()=>handleNotificationStatusChange(item._id),
                                            children: "Mark as read"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "px-2 text-black dark:text-white",
                                    children: item.message
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-2 text-black dark:text-white text-[14px]",
                                    children: (0,lib.format)(item.createdAt)
                                })
                            ]
                        }, index))
                ]
            })
        ]
    });
};
/* harmony default export */ const Admin_DashboardHeader = (DashboardHeader);


/***/ }),

/***/ 98662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ sidebar_AdminSidebar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-pro-sidebar/dist/index.js
var dist = __webpack_require__(48503);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(17421);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ArrowForwardIos.js
var ArrowForwardIos = __webpack_require__(36580);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ArrowBackIos.js
var ArrowBackIos = __webpack_require__(65099);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/HomeOutlined.js
var HomeOutlined = __webpack_require__(8051);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Groups.js
var Groups = __webpack_require__(36851);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ReceiptOutlined.js
var ReceiptOutlined = __webpack_require__(42298);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/VideoCall.js
var VideoCall = __webpack_require__(22065);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/OndemandVideo.js
var OndemandVideo = __webpack_require__(9397);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Web.js
var Web = __webpack_require__(29557);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Quiz.js
var Quiz = __webpack_require__(74206);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Wysiwyg.js
var Wysiwyg = __webpack_require__(88925);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/PeopleOutlined.js
var PeopleOutlined = __webpack_require__(21495);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/BarChartOutlined.js
var BarChartOutlined = __webpack_require__(44773);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/MapOutlined.js
var MapOutlined = __webpack_require__(74874);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ManageHistory.js
var ManageHistory = __webpack_require__(67206);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ExitToApp.js
var ExitToApp = __webpack_require__(97899);
;// CONCATENATED MODULE: ./public/assests/avatar.png
/* harmony default export */ const avatar = ({"src":"/_next/static/media/avatar.9f7dd818.png","height":150,"width":150,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA90lEQVR42mMAgbiMVk334IqDjv5lv0AYxAaJATEDQ1JOu6ZXeNW7ioap/09fuPrv9MWr/0BskBhIjiEmreWghUfR//Vb9//8+O3b/4/fvv4HsUFiIDmGqJSmX5aexf93Hzzx79X7D/9ff/jwf8+hk/9ACqJSmn8xRCY3/bL3Lf2/bM32fyDJl+/e/5+3ZOM/p4Dy/xFAOZCCg27BFf/dgit/Pn7x8v/1O/f/S5pk/fSNrPkfntR4kEHNOkczv6L/LdDY/8/fvP3/5OWr/1t2HfqfU9r3Vs8xX5MBBF68faf57vPng0AFv168ffsLxH74/IXmw+cvGAAx6qASJMiumAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var next_themes_dist = __webpack_require__(71072);
// EXTERNAL MODULE: ./node_modules/js-cookie/dist/js.cookie.mjs
var js_cookie = __webpack_require__(72479);
;// CONCATENATED MODULE: ./app/components/Admin/sidebar/AdminSidebar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










const Item = ({ title, to, icon, selected, setSelected })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(dist/* MenuItem */.sN, {
        active: selected === title,
        onClick: ()=>setSelected(title),
        icon: icon,
        className: "hover:!bg-[unset]",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: to,
            className: "hover:!bg-[unset]",
            children: /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                className: "!text-[16px] !font-Poppins text-black dark:text-white",
                children: title
            })
        })
    });
};
const AdminSidebar = ()=>{
    const { user } = (0,lib.useSelector)((state)=>state.auth);
    const [logout, setlogout] = (0,react_.useState)(false);
    const [isCollapsed, setIsCollapsed] = (0,react_.useState)(false);
    const [selected, setSelected] = (0,react_.useState)("Dashboard");
    const [mounted, setMounted] = (0,react_.useState)(false);
    const { theme, setTheme } = (0,next_themes_dist/* useTheme */.F)();
    (0,react_.useEffect)(()=>setMounted(true), []);
    if (!mounted) {
        return null;
    }
    const logoutHandler = async ()=>{
        js_cookie/* default */.Z.remove("accessToken");
        js_cookie/* default */.Z.remove("refreshToken");
        window.location.reload();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
        sx: {
            "& .pro-sidebar-inner": {
                background: `${theme === "dark" ? "#111C43 !important" : "#fff !important"}`
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important"
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important"
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important"
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
                opacity: 1
            },
            "& .pro-menu-item": {
                color: `${theme !== "dark" && "#000"}`
            }
        },
        className: "!bg-white dark:bg-[#111C43]",
        children: /*#__PURE__*/ jsx_runtime_.jsx(dist/* Sidebar */.YE, {
            collapsed: isCollapsed,
            style: {
                position: "fixed",
                top: 0,
                left: 0,
                height: "100vh",
                zIndex: 99999999999999,
                width: isCollapsed ? "0%" : "16%"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Menu */.v2, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(dist/* MenuItem */.sN, {
                        onClick: ()=>setIsCollapsed(!isCollapsed),
                        icon: isCollapsed ? /*#__PURE__*/ jsx_runtime_.jsx(ArrowForwardIos/* default */.Z, {}) : undefined,
                        style: {
                            margin: "10px 0 20px 0"
                        },
                        children: !isCollapsed && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Box, {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            ml: "15px",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    className: "block",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-[25px] font-Poppins uppercase dark:text-white text-black",
                                        children: "ELearning"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(node.IconButton, {
                                    onClick: ()=>setIsCollapsed(!isCollapsed),
                                    className: "inline-block",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowBackIos/* default */.Z, {
                                        className: "text-black dark:text-[#ffffffc1]"
                                    })
                                })
                            ]
                        })
                    }),
                    !isCollapsed && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Box, {
                        mb: "25px",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    alt: "profile-user",
                                    width: 100,
                                    height: 100,
                                    src: user.avatar ? user.avatar.url : avatar,
                                    style: {
                                        cursor: "pointer",
                                        borderRadius: "50%",
                                        border: "3px solid #5b6fe6"
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Box, {
                                textAlign: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                        variant: "h4",
                                        className: "!text-[20px] text-black dark:text-[#ffffffc1]",
                                        sx: {
                                            m: "10px 0 0 0"
                                        },
                                        children: user?.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Typography, {
                                        variant: "h6",
                                        sx: {
                                            m: "10px 0 0 0"
                                        },
                                        className: "!text-[20px] text-black dark:text-[#ffffffc1] capitalize",
                                        children: [
                                            "- ",
                                            user?.role
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Box, {
                        paddingLeft: isCollapsed ? undefined : "10%",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                                title: "Dashboard",
                                to: "/admin",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(HomeOutlined/* default */.Z, {}),
                                selected: selected,
                                setSelected: setSelected
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                variant: "h5",
                                sx: {
                                    m: "15px 0 5px 25px"
                                },
                                className: "!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]",
                                children: !isCollapsed && "Data"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                                title: "Users",
                                to: "/admin/users",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(Groups/* default */.Z, {
                                    className: "text-black dark:text-white"
                                }),
                                selected: selected,
                                setSelected: setSelected
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                                title: "Invoices",
                                to: "/admin/invoices",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(ReceiptOutlined/* default */.Z, {
                                    className: "text-black dark:text-white"
                                }),
                                selected: selected,
                                setSelected: setSelected
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                variant: "h5",
                                className: "!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]",
                                sx: {
                                    m: "15px 0 5px 20px"
                                },
                                children: !isCollapsed && "Content"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                                title: "Create Course",
                                to: "/admin/create-course",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(VideoCall/* default */.Z, {
                                    className: "text-black dark:text-white"
                                }),
                                selected: selected,
                                setSelected: setSelected
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                                title: "Live Courses",
                                to: "/admin/courses",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(OndemandVideo/* default */.Z, {
                                    className: "text-black dark:text-white"
                                }),
                                selected: selected,
                                setSelected: setSelected
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                variant: "h5",
                                className: "!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]",
                                sx: {
                                    m: "15px 0 5px 20px"
                                },
                                children: !isCollapsed && "Customization"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                                title: "Hero",
                                to: "/admin/hero",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(Web/* default */.Z, {
                                    className: "text-black dark:text-white"
                                }),
                                selected: selected,
                                setSelected: setSelected
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                                title: "FAQ",
                                to: "/admin/faq",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(Quiz/* default */.Z, {
                                    className: "text-black dark:text-white"
                                }),
                                selected: selected,
                                setSelected: setSelected
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                                title: "Categories",
                                to: "/admin/categories",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(Wysiwyg/* default */.Z, {
                                    className: "text-black dark:text-white"
                                }),
                                selected: selected,
                                setSelected: setSelected
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                variant: "h5",
                                className: "!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]",
                                sx: {
                                    m: "15px 0 5px 20px"
                                },
                                children: !isCollapsed && "Controllers"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                                title: "Manage Team",
                                to: "/admin/team",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(PeopleOutlined/* default */.Z, {
                                    className: "text-black dark:text-white"
                                }),
                                selected: selected,
                                setSelected: setSelected
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                variant: "h6",
                                className: "!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]",
                                sx: {
                                    m: "15px 0 5px 20px"
                                },
                                children: !isCollapsed && "Analytics"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                                title: "Courses Analytics",
                                to: "/admin/courses-analytics",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(BarChartOutlined/* default */.Z, {
                                    className: "text-black dark:text-white"
                                }),
                                selected: selected,
                                setSelected: setSelected
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                                title: "Orders Analytics",
                                to: "/admin/orders-analytics",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(MapOutlined/* default */.Z, {
                                    className: "text-black dark:text-white"
                                }),
                                selected: selected,
                                setSelected: setSelected
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                                title: "Users Analytics",
                                to: "/admin/users-analytics",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(ManageHistory/* default */.Z, {
                                    className: "text-black dark:text-white"
                                }),
                                selected: selected,
                                setSelected: setSelected
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                variant: "h6",
                                className: "!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]",
                                sx: {
                                    m: "15px 0 5px 20px"
                                },
                                children: !isCollapsed && "Extras"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: logoutHandler,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                                    title: "Logout",
                                    to: "/",
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(ExitToApp/* default */.Z, {
                                        className: "text-black dark:text-white"
                                    }),
                                    selected: selected,
                                    setSelected: setSelected
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const sidebar_AdminSidebar = (AdminSidebar);


/***/ })

};
;