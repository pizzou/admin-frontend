(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7],{21523:function(e,t,n){Promise.resolve().then(n.bind(n,88832))},88832:function(e,t,n){"use strict";n.r(t);var s=n(57437);n(2265);var r=n(98350),i=n(84762),c=n(87263),a=n(21034);t.default=e=>(0,s.jsxs)("div",{children:[(0,s.jsx)(i.Z,{title:"Elearning - Admin",description:"ELearning is a platform for students to learn and get help from teachers",keywords:"Prograaming,MERN,Redux,Machine Learning"}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"1500px:w-[16%] w-1/5",children:(0,s.jsx)(r.Z,{})}),(0,s.jsxs)("div",{className:"w-[85%]",children:[(0,s.jsx)(c.Z,{}),(0,s.jsx)(a.Z,{})]})]})]})},21034:function(e,t,n){"use strict";var s=n(57437),r=n(34095),i=n(91950);n(2265);var c=n(35048),a=n(90045),l=n(24235),o=n(50039),d=n(2047),u=n(51125),x=n(87585);t.Z=e=>{let{isDashboard:t}=e,{data:n,isLoading:h}=(0,i.eN)({}),f=[];return n&&n.users.last12Months.forEach(e=>{f.push({name:e.month,count:e.count})}),(0,s.jsx)(s.Fragment,{children:h?(0,s.jsx)(x.Z,{}):(0,s.jsxs)("div",{className:"".concat(t?"mt-[50px] dark:bg-[#111C43] shadow-sm pb-5 rounded-sm":"mt-[50px]"),children:[(0,s.jsxs)("div",{className:"".concat(t?"!ml-8 mb-5":""),children:[(0,s.jsx)("h1",{className:"".concat(r.W.title," ").concat(t&&"!text-[20px]"," px-5 !text-start"),children:"Users Analytics"}),!t&&(0,s.jsxs)("p",{className:"".concat(r.W.label," px-5"),children:["Last 12 months analytics data"," "]})]}),(0,s.jsx)("div",{className:"w-full ".concat(t?"h-[30vh]":"h-screen"," flex items-center justify-center"),children:(0,s.jsx)(c.h,{width:t?"100%":"90%",height:t?"100%":"50%",children:(0,s.jsxs)(a.T,{data:f,margin:{top:20,right:30,left:0,bottom:0},children:[(0,s.jsx)(l.K,{dataKey:"name"}),(0,s.jsx)(o.B,{}),(0,s.jsx)(d.u,{}),(0,s.jsx)(u.u,{type:"monotone",dataKey:"count",stroke:"#4d62d9",fill:"#4d62d9"})]})})})]})})}},87585:function(e,t,n){"use strict";var s=n(57437);n(2265),n(1622),t.Z=()=>(0,s.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,s.jsx)("div",{className:"loader"})})},34095:function(e,t,n){"use strict";n.d(t,{W:function(){return s}});let s={title:"text-[25px] text-black dark:text-white font-[500] font-Poppins text-center py-2",label:"text-[16px] font-Poppins text-black dark:text-white",input:"w-full text-black dark:text-white bg-transparent border rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins",button:"flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] min-h-[45px] w-full text-[16px] font-Poppins font-semibold"}},91950:function(e,t,n){"use strict";n.d(t,{U_:function(){return a},eN:function(){return c},r6:function(){return i}});var s=n(10273);let r=s.gk.injectEndpoints({endpoints:e=>({getCoursesAnalytics:e.query({query:()=>({url:"get-courses-analytics",method:"GET",credentials:"include"})}),getUsersAnalytics:e.query({query:()=>({url:"get-users-analytics",method:"GET",credentials:"include"})}),getOrdersAnalytics:e.query({query:()=>({url:"get-orders-analytics",method:"GET",credentials:"include"})})})}),{useGetCoursesAnalyticsQuery:i,useGetUsersAnalyticsQuery:c,useGetOrdersAnalyticsQuery:a}=r},1622:function(){}},function(e){e.O(0,[115,400,805,215,702,724,170,45,61,971,596,744],function(){return e(e.s=21523)}),_N_E=e.O()}]);