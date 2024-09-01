"use strict";
exports.id = 597;
exports.ids = [597];
exports.modules = {

/***/ 32611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87857);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10345);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15816);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60930);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7625);







const CourseContent = ({ courseContentData, setCourseContentData, active, setActive, handleSubmit: handlleCourseSubmit })=>{
    const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Array(courseContentData.length).fill(false));
    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const handleSubmit = (e)=>{
        e.preventDefault();
    };
    const handleCollapseToggle = (index)=>{
        const updatedCollasped = [
            ...isCollapsed
        ];
        updatedCollasped[index] = !updatedCollasped[index];
        setIsCollapsed(updatedCollasped);
    };
    const handleRemoveLink = (index, linkIndex)=>{
        const updatedData = [
            ...courseContentData
        ];
        updatedData[index].links.splice(linkIndex, 1);
        setCourseContentData(updatedData);
    };
    const handleAddLink = (index)=>{
        const updatedData = [
            ...courseContentData
        ];
        updatedData[index].links.push({
            title: "",
            url: ""
        });
        setCourseContentData(updatedData);
    };
    const newContentHandler = (item)=>{
        if (item.title === "" || item.description === "" || item.videoUrl === "" || item.links[0].title === "" || item.links[0].url === "" || item.videoLength === "") {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error("Please fill all the fields first!");
        } else {
            let newVideoSection = "";
            if (courseContentData.length > 0) {
                const lastVideoSection = courseContentData[courseContentData.length - 1].videoSection;
                // use the last videoSection if available, else use user input
                if (lastVideoSection) {
                    newVideoSection = lastVideoSection;
                }
            }
            const newContent = {
                videoUrl: "",
                title: "",
                description: "",
                videoSection: newVideoSection,
                videoLength: "",
                links: [
                    {
                        title: "",
                        url: ""
                    }
                ]
            };
            setCourseContentData([
                ...courseContentData,
                newContent
            ]);
        }
    };
    const addNewSection = ()=>{
        if (courseContentData[courseContentData.length - 1].title === "" || courseContentData[courseContentData.length - 1].description === "" || courseContentData[courseContentData.length - 1].videoUrl === "" || courseContentData[courseContentData.length - 1].links[0].title === "" || courseContentData[courseContentData.length - 1].links[0].url === "") {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error("Please fill all the fields first!");
        } else {
            setActiveSection(activeSection + 1);
            const newContent = {
                videoUrl: "",
                title: "",
                description: "",
                videoLength: "",
                videoSection: `Untitled Section ${activeSection}`,
                links: [
                    {
                        title: "",
                        url: ""
                    }
                ]
            };
            setCourseContentData([
                ...courseContentData,
                newContent
            ]);
        }
    };
    const prevButton = ()=>{
        setActive(active - 1);
    };
    const handleOptions = ()=>{
        if (courseContentData[courseContentData.length - 1].title === "" || courseContentData[courseContentData.length - 1].description === "" || courseContentData[courseContentData.length - 1].videoUrl === "" || courseContentData[courseContentData.length - 1].links[0].title === "" || courseContentData[courseContentData.length - 1].links[0].url === "") {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error("section can't be empty!");
        } else {
            setActive(active + 1);
            handlleCourseSubmit();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-[80%] m-auto mt-24 p-3",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    courseContentData?.map((item, index)=>{
                        const showSectionInput = index === 0 || item.videoSection !== courseContentData[index - 1].videoSection;
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `w-full bg-[#cdc8c817] p-4 ${showSectionInput ? "mt-10" : "mb-0"}`,
                                children: [
                                    showSectionInput && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex w-full items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        className: `text-[20px] ${item.videoSection === "Untitled Section" ? "w-[170px]" : "w-min"} font-Poppins cursor-pointer dark:text-white text-black bg-transparent outline-none`,
                                                        value: item.videoSection,
                                                        onChange: (e)=>{
                                                            const updatedData = [
                                                                ...courseContentData
                                                            ];
                                                            updatedData[index].videoSection = e.target.value;
                                                            setCourseContentData(updatedData);
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__/* .BsPencil */ .jox, {
                                                        className: "cursor-pointer dark:text-white text-black"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex w-full items-center justify-between my-0",
                                        children: [
                                            isCollapsed[index] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: item.title ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "font-Poppins dark:text-white text-black",
                                                    children: [
                                                        index + 1,
                                                        ". ",
                                                        item.title
                                                    ]
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__/* .AiOutlineDelete */ .VPh, {
                                                        className: `dark:text-white text-[20px] mr-2 text-black ${index > 0 ? "cursor-pointer" : "cursor-no-drop"}`,
                                                        onClick: ()=>{
                                                            if (index > 0) {
                                                                const updatedData = [
                                                                    ...courseContentData
                                                                ];
                                                                updatedData.splice(index, 1);
                                                                setCourseContentData(updatedData);
                                                            }
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_6__/* .MdOutlineKeyboardArrowDown */ .x3N, {
                                                        fontSize: "large",
                                                        className: "dark:text-white text-black",
                                                        style: {
                                                            transform: isCollapsed[index] ? "rotate(180deg)" : "rotate(0deg)"
                                                        },
                                                        onClick: ()=>handleCollapseToggle(index)
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    !isCollapsed[index] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "my-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: _app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.label,
                                                        children: "Video Title"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        placeholder: "Project Plan...",
                                                        className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.input}`,
                                                        value: item.title,
                                                        onChange: (e)=>{
                                                            const updatedData = [
                                                                ...courseContentData
                                                            ];
                                                            updatedData[index].title = e.target.value;
                                                            setCourseContentData(updatedData);
                                                        }
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mb-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: _app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.label,
                                                        children: "Video Url"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        placeholder: "sdder",
                                                        className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.input}`,
                                                        value: item.videoUrl,
                                                        onChange: (e)=>{
                                                            const updatedData = [
                                                                ...courseContentData
                                                            ];
                                                            updatedData[index].videoUrl = e.target.value;
                                                            setCourseContentData(updatedData);
                                                        }
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mb-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: _app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.label,
                                                        children: "Video Length (in minutes)"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "number",
                                                        placeholder: "20",
                                                        className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.input}`,
                                                        value: item.videoLength,
                                                        onChange: (e)=>{
                                                            const updatedData = [
                                                                ...courseContentData
                                                            ];
                                                            updatedData[index].videoLength = e.target.value;
                                                            setCourseContentData(updatedData);
                                                        }
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mb-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: _app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.label,
                                                        children: "Video Description"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                        rows: 8,
                                                        cols: 30,
                                                        placeholder: "sdder",
                                                        className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.input} !h-min py-2`,
                                                        value: item.description,
                                                        onChange: (e)=>{
                                                            const updatedData = [
                                                                ...courseContentData
                                                            ];
                                                            updatedData[index].description = e.target.value;
                                                            setCourseContentData(updatedData);
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                ]
                                            }),
                                            item?.links.map((link, linkIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mb-3 block",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "w-full flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                    className: _app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.label,
                                                                    children: [
                                                                        "Link ",
                                                                        linkIndex + 1
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__/* .AiOutlineDelete */ .VPh, {
                                                                    className: `${linkIndex === 0 ? "cursor-no-drop" : "cursor-pointer"} text-black dark:text-white text-[20px]`,
                                                                    onClick: ()=>linkIndex === 0 ? null : handleRemoveLink(index, linkIndex)
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            placeholder: "Source Code... (Link title)",
                                                            className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.input}`,
                                                            value: link.title,
                                                            onChange: (e)=>{
                                                                const updatedData = [
                                                                    ...courseContentData
                                                                ];
                                                                updatedData[index].links[linkIndex].title = e.target.value;
                                                                setCourseContentData(updatedData);
                                                            }
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "url",
                                                            placeholder: "Source Code Url... (Link URL)",
                                                            className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.input} mt-6`,
                                                            value: link.url,
                                                            onChange: (e)=>{
                                                                const updatedData = [
                                                                    ...courseContentData
                                                                ];
                                                                updatedData[index].links[linkIndex].url = e.target.value;
                                                                setCourseContentData(updatedData);
                                                            }
                                                        })
                                                    ]
                                                }, linkIndex)),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "inline-block mb-4",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "flex items-center text-[18px] dark:text-white text-black cursor-pointer",
                                                    onClick: ()=>handleAddLink(index),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__/* .BsLink45Deg */ .Gzp, {
                                                            className: "mr-2"
                                                        }),
                                                        " Add Link"
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    index === courseContentData.length - 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "flex items-center text-[18px] dark:text-white text-black cursor-pointer",
                                            onClick: (e)=>newContentHandler(item),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__/* .AiOutlinePlusCircle */ .dEn, {
                                                    className: "mr-2"
                                                }),
                                                " Add New Content"
                                            ]
                                        })
                                    })
                                ]
                            }, index)
                        });
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center text-[20px] dark:text-white text-black cursor-pointer",
                        onClick: ()=>addNewSection(),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__/* .AiOutlinePlusCircle */ .dEn, {
                                className: "mr-2"
                            }),
                            " Add new Section"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex items-center justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer",
                        onClick: ()=>prevButton(),
                        children: "Prev"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer",
                        onClick: ()=>handleOptions(),
                        children: "Next"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseContent);


/***/ }),

/***/ 74056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87857);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15816);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10345);





const CourseData = ({ benefits, setBenefits, prerequisites, setPrerequisites, active, setActive })=>{
    const handleBenefitChange = (index, value)=>{
        const updatedBenefits = [
            ...benefits
        ];
        updatedBenefits[index].title = value;
        setBenefits(updatedBenefits);
    };
    const handleAddBenefit = ()=>{
        setBenefits([
            ...benefits,
            {
                title: ""
            }
        ]);
    };
    const handlePrerequisitesChange = (index, value)=>{
        const updatedPrerequisites = [
            ...prerequisites
        ];
        updatedPrerequisites[index].title = value;
        setPrerequisites(updatedPrerequisites);
    };
    const handleAddPrerequisites = ()=>{
        setPrerequisites([
            ...prerequisites,
            {
                title: ""
            }
        ]);
    };
    const prevButton = ()=>{
        setActive(active - 1);
    };
    const handleOptions = ()=>{
        if (benefits[benefits.length - 1]?.title !== "" && prerequisites[prerequisites.length - 1]?.title !== "") {
            setActive(active + 1);
        } else {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error("Please fill the fields for go to next!");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-[80%] m-auto mt-24 block",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.label} text-[20px]`,
                        htmlFor: "email",
                        children: "What are the benefits for students in this course?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    benefits.map((benefit, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            name: "Benefit",
                            placeholder: "You will be able to build a full stack LMS Platform...",
                            required: true,
                            className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.input} my-2`,
                            value: benefit.title,
                            onChange: (e)=>handleBenefitChange(index, e.target.value)
                        }, index)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__/* .AiOutlinePlusCircle */ .dEn, {
                        style: {
                            margin: "10px 0px",
                            cursor: "pointer",
                            width: "30px"
                        },
                        onClick: handleAddBenefit
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.label} text-[20px]`,
                        htmlFor: "email",
                        children: "What are the prerequisites for starting this course?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    prerequisites.map((prerequisites, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            name: "prerequisites",
                            placeholder: "You need basic knowledge of MERN stack",
                            required: true,
                            className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.input} my-2`,
                            value: prerequisites.title,
                            onChange: (e)=>handlePrerequisitesChange(index, e.target.value)
                        }, index)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__/* .AiOutlinePlusCircle */ .dEn, {
                        style: {
                            margin: "10px 0px",
                            cursor: "pointer",
                            width: "30px"
                        },
                        onClick: handleAddPrerequisites
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex items-center justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer",
                        onClick: ()=>prevButton(),
                        children: "Prev"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer",
                        onClick: ()=>handleOptions(),
                        children: "Next"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseData);


/***/ }),

/***/ 64801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87857);
/* harmony import */ var _redux_features_layout_layoutApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5419);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const CourseInformation = ({ courseInfo, setCourseInfo, active, setActive })=>{
    const [dragging, setDragging] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { data } = (0,_redux_features_layout_layoutApi__WEBPACK_IMPORTED_MODULE_2__/* .useGetHeroDataQuery */ .Pf)("Categories", {});
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (data) {
            setCategories(data.layout.categories);
        }
    }, [
        data
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setActive(active + 1);
    };
    const handleFileChange = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e)=>{
                if (reader.readyState === 2) {
                    setCourseInfo({
                        ...courseInfo,
                        thumbnail: reader.result
                    });
                }
            };
            reader.readAsDataURL(file);
        }
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        setDragging(true);
    };
    const handleDragLeave = (e)=>{
        e.preventDefault();
        setDragging(false);
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = ()=>{
                setCourseInfo({
                    ...courseInfo,
                    thumbnail: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-[80%] m-auto mt-24",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handleSubmit,
            className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.label}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "",
                            children: "Course Name"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "name",
                            name: "",
                            required: true,
                            value: courseInfo.name,
                            onChange: (e)=>setCourseInfo({
                                    ...courseInfo,
                                    name: e.target.value
                                }),
                            id: "name",
                            placeholder: "MERN stack LMS platform with next 13",
                            className: `
            ${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.input}`
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.label}`,
                            children: "Course Description"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            name: "",
                            id: "",
                            cols: 30,
                            rows: 8,
                            placeholder: "Write something amazing...",
                            className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.input} !h-min !py-2`,
                            value: courseInfo.description,
                            onChange: (e)=>setCourseInfo({
                                    ...courseInfo,
                                    description: e.target.value
                                })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full flex justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-[45%]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.label}`,
                                    children: "Course Price"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    name: "",
                                    required: true,
                                    value: courseInfo.price,
                                    onChange: (e)=>setCourseInfo({
                                            ...courseInfo,
                                            price: e.target.value
                                        }),
                                    id: "price",
                                    placeholder: "29",
                                    className: `
            ${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.input}`
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-[50%]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.label} w-[50%]`,
                                    children: "Estimated Price (optional)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    name: "",
                                    value: courseInfo.estimatedPrice,
                                    onChange: (e)=>setCourseInfo({
                                            ...courseInfo,
                                            estimatedPrice: e.target.value
                                        }),
                                    id: "price",
                                    placeholder: "79",
                                    className: `
            ${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.input}`
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full flex justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-[45%]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.label}`,
                                    htmlFor: "email",
                                    children: "Course Tags"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    required: true,
                                    name: "",
                                    value: courseInfo.tags,
                                    onChange: (e)=>setCourseInfo({
                                            ...courseInfo,
                                            tags: e.target.value
                                        }),
                                    id: "tags",
                                    placeholder: "MERN,Next 13,Socket io,tailwind css,LMS",
                                    className: `
            ${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.input}`
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-[50%]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.label} w-[50%]`,
                                    children: "Course Categories"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    name: "",
                                    id: "",
                                    className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.input}`,
                                    value: courseInfo.category,
                                    onChange: (e)=>setCourseInfo({
                                            ...courseInfo,
                                            categories: e.target.value
                                        }),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "",
                                            children: "Select Category"
                                        }),
                                        categories && categories.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: item.title,
                                                children: item.title
                                            }, item._id))
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full flex justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-[45%]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.label}`,
                                    children: "Course Level"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    name: "",
                                    value: courseInfo.level,
                                    required: true,
                                    onChange: (e)=>setCourseInfo({
                                            ...courseInfo,
                                            level: e.target.value
                                        }),
                                    id: "level",
                                    placeholder: "Beginner/Intermediate/Expert",
                                    className: `
            ${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.input}`
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-[50%]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: `${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.label} w-[50%]`,
                                    children: "Demo Url"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    name: "",
                                    required: true,
                                    value: courseInfo.demoUrl,
                                    onChange: (e)=>setCourseInfo({
                                            ...courseInfo,
                                            demoUrl: e.target.value
                                        }),
                                    id: "demoUrl",
                                    placeholder: "eer74fd",
                                    className: `
            ${_app_styles_style__WEBPACK_IMPORTED_MODULE_1__/* .styles */ .W.input}`
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "file",
                            accept: "image/*",
                            id: "file",
                            className: "hidden",
                            onChange: handleFileChange
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "file",
                            className: `w-full min-h-[10vh] dark:border-white border-[#00000026] p-3 border flex items-center justify-center ${dragging ? "bg-blue-500" : "bg-transparent"}`,
                            onDragOver: handleDragOver,
                            onDragLeave: handleDragLeave,
                            onDrop: handleDrop,
                            children: courseInfo.thumbnail ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: courseInfo.thumbnail,
                                alt: "",
                                className: "max-h-full w-full object-cover"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-black dark:text-white",
                                children: "Drag and drop your thumbnail here or click to browse"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full flex items-center justify-end",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "submit",
                        value: "Next",
                        className: "w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseInformation);


/***/ }),

/***/ 78251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12772);



const CourseOptions = ({ active, setActive })=>{
    const options = [
        "Course Information",
        "Course Options",
        "Course Content",
        "Course Preview"
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: options.map((option, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `w-full flex py-5`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `w-[35px] h-[35px] rounded-full flex items-center justify-center ${active + 1 > index ? "bg-blue-500" : "bg-[#384766]"} relative`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__/* .IoMdCheckmark */ .Gy1, {
                                className: "text-[25px]"
                            }),
                            index !== options.length - 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `absolute h-[30px] w-1 ${active + 1 > index ? "bg-blue-500" : "bg-[#384766]"} bottom-[-100%]`
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: `pl-3 ${active === index ? "dark:text-white text-black" : "dark:text-white text-black"} text-[20px]`,
                        children: option
                    })
                ]
            }, index))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseOptions);


/***/ }),

/***/ 25293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Course_CoursePreview)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(93258);
;// CONCATENATED MODULE: ./app/utils/CoursePlayer.tsx



const CoursePlayer = ({ videoUrl })=>{
    const [videoData, setVideoData] = (0,react_.useState)({
        otp: "",
        playbackInfo: ""
    });
    (0,react_.useEffect)(()=>{
        axios/* default */.Z.post("http://localhost:8000/api/v1/getVdoCipherOTP", {
            videoId: videoUrl
        }).then((res)=>{
            setVideoData(res.data);
        });
    }, [
        videoUrl
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            position: "relative",
            paddingTop: "56.25%",
            overflow: "hidden"
        },
        children: videoData.otp && videoData.playbackInfo !== "" && /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
            src: `https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=Ub9OiZXIOeUXH0Nv`,
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0
            },
            allowFullScreen: true,
            allow: "encrypted-media"
        })
    });
};
/* harmony default export */ const utils_CoursePlayer = (CoursePlayer);

// EXTERNAL MODULE: ./app/styles/style.ts
var style = __webpack_require__(87857);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(15816);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var bs_index_esm = __webpack_require__(60930);
;// CONCATENATED MODULE: ./app/utils/Ratings.tsx




const Ratings = ({ rating })=>{
    const stars = [];
    for(let i = 1; i <= 5; i++){
        if (i <= rating) {
            stars.push(/*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiFillStar */.pHD, {
                size: 20,
                color: "#f6b100",
                className: "mr-2 cursor-pointer"
            }, i));
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(/*#__PURE__*/ jsx_runtime_.jsx(bs_index_esm/* BsStarHalf */.fXH, {
                size: 17,
                color: "#f6ba00",
                className: "mr-2 cursor-pointer"
            }, i));
        } else {
            stars.push(/*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiOutlineStar */.y5j, {
                size: 20,
                color: "#f6ba00",
                className: "mr-2 cursor-pointer"
            }, i));
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex mt-1 ml-2 800px:mt-0 800px:ml-0",
        children: [
            " ",
            stars
        ]
    });
};
/* harmony default export */ const utils_Ratings = (Ratings);

// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var io5_index_esm = __webpack_require__(72279);
;// CONCATENATED MODULE: ./app/components/Admin/Course/CoursePreview.tsx






const CoursePreview = ({ courseData, handleCourseCreate, setActive, active, isEdit })=>{
    const dicountPercentenge = (courseData?.estimatedPrice - courseData?.price) / courseData?.estimatedPrice * 100;
    const discountPercentengePrice = dicountPercentenge.toFixed(0);
    const prevButton = ()=>{
        setActive(active - 1);
    };
    const createCourse = ()=>{
        handleCourseCreate();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-[90%] m-auto py-5 mb-5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full mt-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(utils_CoursePlayer, {
                            videoUrl: courseData?.demoUrl,
                            title: courseData?.title
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "pt-5 text-[25px]",
                                children: courseData?.price === 0 ? "Free" : courseData?.price + "$"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                className: "pl-3 text-[20px] mt-2 line-through opacity-80",
                                children: [
                                    courseData?.estimatedPrice,
                                    "$"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                className: "pl-5 pt-4 text-[22px]",
                                children: [
                                    discountPercentengePrice,
                                    "% Off"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${style/* styles */.W.button} !w-[180px] my-3 font-Poppins !bg-[crimson] cursor-not-allowed`,
                            children: [
                                "Buy Now ",
                                courseData?.price,
                                "$"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                name: "",
                                id: "",
                                placeholder: "Discount code...",
                                className: `${style/* styles */.W.input} 1500px:!w-[50%] 1100px:w-[60%] ml-3 !mt-0`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${style/* styles */.W.button} !w-[120px] my-3 ml-4 font-Poppins cursor-pointer`,
                                children: "Apply"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "pb-1",
                        children: "• Source code included"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "pb-1",
                        children: "• Full lifetime access"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "pb-1",
                        children: "• Certificate of completion"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "pb-3 800px:pb-1",
                        children: "• Premium Support"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full 800px:pr-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-[25px] font-Poppins font-[600]",
                                children: courseData?.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-between pt-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(utils_Ratings, {
                                                rating: 0
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "0 Reviews"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "0 Students"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-[25px] font-Poppins font-[600]",
                                children: "What you will learn from this course?"
                            })
                        ]
                    }),
                    courseData?.benefits?.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full flex 800px:items-center py-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-[15px] mr-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5_index_esm/* IoCheckmarkDoneOutline */.xOC, {
                                        size: 20
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "pl-2",
                                    children: item.title
                                })
                            ]
                        }, index)),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-[25px] font-Poppins font-[600]",
                        children: "What are the prerequisites for starting this course?"
                    }),
                    courseData?.prerequisites?.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full flex 800px:items-center py-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-[15px] mr-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(io5_index_esm/* IoCheckmarkDoneOutline */.xOC, {
                                        size: 20
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "pl-2",
                                    children: item.title
                                })
                            ]
                        }, index)),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-[25px] font-Poppins font-[600]",
                                children: "Course Details"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden",
                                children: courseData?.description
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full flex items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer",
                        onClick: ()=>prevButton(),
                        children: "Prev"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer",
                        onClick: ()=>createCourse(),
                        children: isEdit ? "Update" : "Create"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Course_CoursePreview = (CoursePreview);


/***/ }),

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


/***/ })

};
;