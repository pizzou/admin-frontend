(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[737],{10907:function(e,t,a){"use strict";var r=a(57437),o=a(2265),i=a(86982),s=a(35551),n=a(96507),l=a(6404),d=a(99150),c=a(6435),u=a(87585),p=a(40887),f=a(11038),m=a(34095),h=a(5925);t.Z=e=>{let{isTeam:t}=e,{theme:a,setTheme:b}=(0,c.F)(),[x,g]=(0,o.useState)(!1),[y,v]=(0,o.useState)(""),[w,k]=(0,o.useState)("admin"),[j,N]=(0,o.useState)(!1),[C,E]=(0,o.useState)(""),[A,{error:D,isSuccess:M}]=(0,f.V1)(),{isLoading:$,data:I,refetch:S}=(0,f.wv)({},{refetchOnMountOrArgChange:!0}),[O,{isSuccess:F,error:z}]=(0,f.I1)({});(0,o.useEffect)(()=>{D&&"data"in D&&h.toast.error(D.data.message),M&&(S(),h.toast.success("User role updated successfully"),g(!1)),F&&(S(),h.toast.success("Delete user successfully!"),N(!1)),z&&"data"in z&&h.toast.error(z.data.message)},[D,M,F,z]);let T=[{field:"id",headerName:"ID",flex:.3},{field:"name",headerName:"Name",flex:.5},{field:"email",headerName:"Email",flex:.5},{field:"role",headerName:"Role",flex:.5},{field:"courses",headerName:"Purchased Courses",flex:.5},{field:"created_at",headerName:"Joined At",flex:.5},{field:" ",headerName:"Delete",flex:.2,renderCell:e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.Z,{onClick:()=>{N(!j),E(e.row.id)},children:(0,r.jsx)(d.VPh,{className:"dark:text-white text-black",size:20})})})},{field:"  ",headerName:"Email",flex:.2,renderCell:e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("a",{href:"mailto:".concat(e.row.email),children:(0,r.jsx)(d.Dme,{className:"dark:text-white text-black",size:20})})})}],_=[];if(t){let e=I&&I.users.filter(e=>"admin"===e.role);e&&e.forEach(e=>{_.push({id:e._id,name:e.name,email:e.email,role:e.role,courses:e.courses.length,created_at:(0,p.WU)(e.createdAt)})})}else I&&I.users.forEach(e=>{_.push({id:e._id,name:e.name,email:e.email,role:e.role,courses:e.courses.length,created_at:(0,p.WU)(e.createdAt)})});let P=async()=>{await A({email:y,role:w})},W=async()=>{await O(C)};return(0,r.jsx)("div",{className:"mt-[120px]",children:$?(0,r.jsx)(u.Z,{}):(0,r.jsxs)(n.Z,{m:"20px",children:[t&&(0,r.jsx)("div",{className:"w-full flex justify-end",children:(0,r.jsx)("div",{className:"".concat(m.W.button," !w-[200px] !rounded-[10px] dark:bg-[#57c7a3] !h-[35px] dark:border dark:border-[#ffffff6c]"),onClick:()=>g(!x),children:"Add New Member"})}),(0,r.jsx)(n.Z,{m:"40px 0 0 0",height:"80vh",sx:{"& .MuiDataGrid-root":{border:"none",outline:"none"},"& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon":{color:"dark"===a?"#fff":"#000"},"& .MuiDataGrid-sortIcon":{color:"dark"===a?"#fff":"#000"},"& .MuiDataGrid-row":{color:"dark"===a?"#fff":"#000",borderBottom:"dark"===a?"1px solid #ffffff30!important":"1px solid #ccc!important"},"& .MuiTablePagination-root":{color:"dark"===a?"#fff":"#000"},"& .MuiDataGrid-cell":{borderBottom:"none!important"},"& .name-column--cell":{color:"dark"===a?"#fff":"#000"},"& .MuiDataGrid-columnHeaders":{backgroundColor:"dark"===a?"#3e4396":"#A4A9FC",borderBottom:"none",color:"dark"===a?"#fff":"#000"},"& .MuiDataGrid-virtualScroller":{backgroundColor:"dark"===a?"#1F2A40":"#F2F0F0"},"& .MuiDataGrid-footerContainer":{color:"dark"===a?"#fff":"#000",borderTop:"none",backgroundColor:"dark"===a?"#3e4396":"#A4A9FC"},"& .MuiCheckbox-root":{color:"dark"===a?"#b7ebde !important":"#000 !important"},"& .MuiDataGrid-toolbarContainer .MuiButton-text":{color:"#fff !important"}},children:(0,r.jsx)(i._$,{checkboxSelection:!0,rows:_,columns:T})}),x&&(0,r.jsx)(l.Z,{open:x,onClose:()=>g(!x),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsxs)(n.Z,{className:"absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none",children:[(0,r.jsx)("h1",{className:"".concat(m.W.title),children:"Add New Member"}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsx)("input",{type:"email",value:y,onChange:e=>v(e.target.value),placeholder:"Enter email...",className:"".concat(m.W.input)}),(0,r.jsxs)("select",{name:"",id:"",className:"".concat(m.W.input," !mt-6"),onChange:e=>k(e.target.value),children:[(0,r.jsx)("option",{value:"admin",children:"Admin"}),(0,r.jsx)("option",{value:"user",children:"User"})]}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"".concat(m.W.button," my-6 !h-[30px]"),onClick:P,children:"Submit"})]})]})}),j&&(0,r.jsx)(l.Z,{open:j,onClose:()=>N(!j),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsxs)(n.Z,{className:"absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none",children:[(0,r.jsx)("h1",{className:"".concat(m.W.title),children:"Are you sure you want to delete this user?"}),(0,r.jsxs)("div",{className:"flex w-full items-center justify-between mb-6 mt-4",children:[(0,r.jsx)("div",{className:"".concat(m.W.button," !w-[120px] h-[30px] bg-[#57c7a3]"),onClick:()=>N(!j),children:"Cancel"}),(0,r.jsx)("div",{className:"".concat(m.W.button," !w-[120px] h-[30px] bg-[#d63f3f]"),onClick:W,children:"Delete"})]})]})})]})})}},24033:function(e,t,a){e.exports=a(68165)},5925:function(e,t,a){"use strict";let r,o;a.r(t),a.d(t,{CheckmarkIcon:function(){return U},ErrorIcon:function(){return B},LoaderIcon:function(){return H},ToastBar:function(){return ee},ToastIcon:function(){return R},Toaster:function(){return eo},default:function(){return ei},resolveValue:function(){return N},toast:function(){return P},useToaster:function(){return G},useToasterStore:function(){return z}});var i,s=a(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",r="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+s+";":r+="f"==i[1]?p(s,i):i+"{"+p(s,"k"==i[1]?"":t)+"}":"object"==typeof s?r+=p(s,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=p.p?p.p(i,s):i+":"+s+";")}return a+(t&&o?t+"{"+o+"}":o)+r},f={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e},h=(e,t,a,r,o)=>{var i;let s=m(e),n=f[s]||(f[s]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(s));if(!f[n]){let t=s!==e?e:(e=>{let t,a,r=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);f[n]=p(o?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&f.g?f.g:null;return a&&(f.g=f[n]),i=f[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),n},b=(e,t,a)=>e.reduce((e,r,o)=>{let i=t[o];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function x(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?b(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}x.bind({g:1});let g,y,v,w=x.bind({k:1});function k(e,t){let a=this||{};return function(){let r=arguments;function o(i,s){let n=Object.assign({},i),l=n.className||o.className;a.p=Object.assign({theme:y&&y()},n),a.o=/ *go\d+/.test(l),n.className=x.apply(a,r)+(l?" "+l:""),t&&(n.ref=s);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),g(d,n)}return t?t(o):o}}var j=e=>"function"==typeof e,N=(e,t)=>j(e)?e(t):e,C=(r=0,()=>(++r).toString()),E=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},A=new Map,D=e=>{if(A.has(e))return;let t=setTimeout(()=>{A.delete(e),O({type:4,toastId:e})},1e3);A.set(e,t)},M=e=>{let t=A.get(e);t&&clearTimeout(t)},$=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&M(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?$(e,{type:1,toast:a}):$(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?D(r):e.toasts.forEach(e=>{D(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},I=[],S={toasts:[],pausedAt:void 0},O=e=>{S=$(S,e),I.forEach(e=>{e(S)})},F={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},z=(e={})=>{let[t,a]=(0,s.useState)(S);(0,s.useEffect)(()=>(I.push(a),()=>{let e=I.indexOf(a);e>-1&&I.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||F[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},T=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||C()}),_=e=>(t,a)=>{let r=T(t,e,a);return O({type:2,toast:r}),r.id},P=(e,t)=>_("blank")(e,t);P.error=_("error"),P.success=_("success"),P.loading=_("loading"),P.custom=_("custom"),P.dismiss=e=>{O({type:3,toastId:e})},P.remove=e=>O({type:4,toastId:e}),P.promise=(e,t,a)=>{let r=P.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(P.success(N(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{P.error(N(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var W=(e,t)=>{O({type:1,toast:{id:e,height:t}})},Z=()=>{O({type:5,time:Date.now()})},G=e=>{let{toasts:t,pausedAt:a}=z(e);(0,s.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&P.dismiss(t.id);return}return setTimeout(()=>P.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,s.useCallback)(()=>{a&&O({type:6,time:Date.now()})},[a]),o=(0,s.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:i}=a||{},s=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<n&&e.visible).length;return s.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:W,startPause:Z,endPause:r,calculateOffset:o}}},B=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,H=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,U=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,L=k("div")`
  position: absolute;
`,V=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,R=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?s.createElement(q,null,t):t:"blank"===a?null:s.createElement(V,null,s.createElement(H,{...r}),"loading"!==a&&s.createElement(L,null,"error"===a?s.createElement(B,{...r}):s.createElement(U,{...r})))},J=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Y=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,K=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let a=e.includes("top")?1:-1,[r,o]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[J(a),Y(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=s.memo(({toast:e,position:t,style:a,children:r})=>{let o=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},i=s.createElement(R,{toast:e}),n=s.createElement(Q,{...e.ariaProps},N(e.message,e));return s.createElement(K,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof r?r({icon:i,message:n}):s.createElement(s.Fragment,null,i,n))});i=s.createElement,p.p=void 0,g=i,y=void 0,v=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:o})=>{let i=s.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return s.createElement("div",{ref:i,className:t,style:a},o)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eo=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:o,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:d}=G(a);return s.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(a=>{let i=a.position||t,n=ea(i,d.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return s.createElement(et,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?er:"",style:n},"custom"===a.type?N(a.message,a):o?o(a):s.createElement(ee,{toast:a,position:i}))}))},ei=P}}]);