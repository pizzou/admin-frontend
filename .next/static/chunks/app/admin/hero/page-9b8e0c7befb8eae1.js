(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{13833:function(e,t,a){Promise.resolve().then(a.bind(a,49874))},49874:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var r=a(57437),o=a(29870),i=a(33309),n=a(84762),s=a(2265),l=a(98350),d=a(34095),c=a(14786),u=a(5925),p=a(99150),f=e=>{var t,a,o,i,n,l,f,m,x,v,h,g,b,y;let[w,j]=(0,s.useState)(""),[k,E]=(0,s.useState)(""),[N,C]=(0,s.useState)(""),{data:O,refetch:$}=(0,c.Pf)("Banner",{refetchOnMountOrArgChange:!0}),[T,{isLoading:z,isSuccess:I,error:P}]=(0,c.tk)();(0,s.useEffect)(()=>{var e,t,a,r,o,i;O&&(E(null==O?void 0:null===(e=O.layout)||void 0===e?void 0:e.banner.title),C(null==O?void 0:null===(t=O.layout)||void 0===t?void 0:t.banner.subTitle),j(null==O?void 0:null===(o=O.layout)||void 0===o?void 0:null===(r=o.banner)||void 0===r?void 0:null===(a=r.image)||void 0===a?void 0:a.url)),I&&(u.toast.success("Hero updated successfully!"),$()),P&&"data"in P&&u.toast.error(null==P?void 0:null===(i=P.data)||void 0===i?void 0:i.message)},[O,I,P]);let A=async()=>{await T({type:"Banner",image:w,title:k,subTitle:N})};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"w-full 1000px:flex items-center",children:[(0,r.jsx)("div",{className:"absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[500px] 1100px:w-[500px] h-[50vh] w-[50vh] hero_animation rounded-[50%] 1100px:left-[18rem] 1500px:left-[21rem]"}),(0,r.jsx)("div",{className:"1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10",children:(0,r.jsxs)("div",{className:"relative flex items-center justify-end",children:[(0,r.jsx)("img",{src:w,alt:"",className:"object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"}),(0,r.jsx)("input",{type:"file",name:"",id:"banner",accept:"image/*",onChange:e=>{var t;let a=null===(t=e.target.files)||void 0===t?void 0:t[0];if(a){let e=new FileReader;e.onload=t=>{2===e.readyState&&j(t.target.result)},e.readAsDataURL(a)}},className:"hidden"}),(0,r.jsx)("label",{htmlFor:"banner",className:"absolute bottom-0 right-0 z-20",children:(0,r.jsx)(p.rJU,{className:"dark:text-white text-black text-[18px] cursor-pointer"})})]})}),(0,r.jsxs)("div",{className:"1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]",children:[(0,r.jsx)("textarea",{className:"dark:text-white resize-none text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[60px] 1500px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[60%] 1100px:w-[78%] outline-none bg-transparent block",placeholder:"Improve Your Online Learning Experience Better Instantly",value:k,onChange:e=>E(e.target.value),rows:4}),(0,r.jsx)("br",{}),(0,r.jsx)("textarea",{value:N,onChange:e=>C(e.target.value),placeholder:"We have 40k+ Online courses & 500K+ Online registered student. Find your desired Courses from them.",className:"dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[74%] bg-transparent outline-none resize-none"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"".concat(d.W.button," !w-[100px] !min-h-[40px] !h-[40px] dark:text-white text-black bg-[#cccccc34] \n          ").concat((null==O?void 0:null===(a=O.layout)||void 0===a?void 0:null===(t=a.banner)||void 0===t?void 0:t.title)!==k||(null==O?void 0:null===(i=O.layout)||void 0===i?void 0:null===(o=i.banner)||void 0===o?void 0:o.subTitle)!==N||(null==O?void 0:null===(f=O.layout)||void 0===f?void 0:null===(l=f.banner)||void 0===l?void 0:null===(n=l.image)||void 0===n?void 0:n.url)!==w?"!cursor-pointer !bg-[#42d383]":"!cursor-not-allowed","\n          !rounded absolute bottom-12 right-12"),onClick:(null==O?void 0:null===(x=O.layout)||void 0===x?void 0:null===(m=x.banner)||void 0===m?void 0:m.title)!==k||(null==O?void 0:null===(h=O.layout)||void 0===h?void 0:null===(v=h.banner)||void 0===v?void 0:v.subTitle)!==N||(null==O?void 0:null===(y=O.layout)||void 0===y?void 0:null===(b=y.banner)||void 0===b?void 0:null===(g=b.image)||void 0===g?void 0:g.url)!==w?A:()=>null,children:"Save"})]})]})})},m=e=>(0,r.jsx)("div",{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(n.Z,{title:"Elearning - Admin",description:"ELearning is a platform for students to learn and get help from teachers",keywords:"Programming,MERN,Redux,Machine Learning"}),(0,r.jsxs)("div",{className:"flex h-screen",children:[(0,r.jsx)("div",{className:"1500px:w-[16%] w-1/5",children:(0,r.jsx)(l.Z,{})}),(0,r.jsxs)("div",{className:"w-[85%]",children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)(f,{})]})]})]})})},14786:function(e,t,a){"use strict";a.d(t,{Pf:function(){return i},tk:function(){return n}});var r=a(10273);let o=r.gk.injectEndpoints({endpoints:e=>({getHeroData:e.query({query:e=>({url:"get-layout/".concat(e),method:"GET",credentials:"include"})}),editLayout:e.mutation({query:e=>{let{type:t,image:a,title:r,subTitle:o,faq:i,categories:n}=e;return{url:"edit-layout",body:{type:t,image:a,title:r,subTitle:o,faq:i,categories:n},method:"PUT",credentials:"include"}}})})}),{useGetHeroDataQuery:i,useEditLayoutMutation:n}=o},24033:function(e,t,a){e.exports=a(68165)},5925:function(e,t,a){"use strict";let r,o;a.r(t),a.d(t,{CheckmarkIcon:function(){return Z},ErrorIcon:function(){return R},LoaderIcon:function(){return U},ToastBar:function(){return ee},ToastIcon:function(){return Y},Toaster:function(){return eo},default:function(){return ei},resolveValue:function(){return E},toast:function(){return F},useToaster:function(){return B},useToasterStore:function(){return L}});var i,n=a(2265);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",r="",o="";for(let i in e){let n=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+n+";":r+="f"==i[1]?p(n,i):i+"{"+p(n,"k"==i[1]?"":t)+"}":"object"==typeof n?r+=p(n,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=n&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=p.p?p.p(i,n):i+":"+n+";")}return a+(t&&o?t+"{"+o+"}":o)+r},f={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e},x=(e,t,a,r,o)=>{var i;let n=m(e),s=f[n]||(f[n]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(n));if(!f[s]){let t=n!==e?e:(e=>{let t,a,r=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);f[s]=p(o?{["@keyframes "+s]:t}:t,a?"":"."+s)}let l=a&&f.g?f.g:null;return a&&(f.g=f[s]),i=f[s],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),s},v=(e,t,a)=>e.reduce((e,r,o)=>{let i=t[o];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function h(e){let t=this||{},a=e.call?e(t.p):e;return x(a.unshift?a.raw?v(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}h.bind({g:1});let g,b,y,w=h.bind({k:1});function j(e,t){let a=this||{};return function(){let r=arguments;function o(i,n){let s=Object.assign({},i),l=s.className||o.className;a.p=Object.assign({theme:b&&b()},s),a.o=/ *go\d+/.test(l),s.className=h.apply(a,r)+(l?" "+l:""),t&&(s.ref=n);let d=e;return e[0]&&(d=s.as||e,delete s.as),y&&d[0]&&y(s),g(d,s)}return t?t(o):o}}var k=e=>"function"==typeof e,E=(e,t)=>k(e)?e(t):e,N=(r=0,()=>(++r).toString()),C=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},O=new Map,$=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),A({type:4,toastId:e})},1e3);O.set(e,t)},T=e=>{let t=O.get(e);t&&clearTimeout(t)},z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&T(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?z(e,{type:1,toast:a}):z(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?$(r):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},I=[],P={toasts:[],pausedAt:void 0},A=e=>{P=z(P,e),I.forEach(e=>{e(P)})},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},L=(e={})=>{let[t,a]=(0,n.useState)(P);(0,n.useEffect)(()=>(I.push(a),()=>{let e=I.indexOf(a);e>-1&&I.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||D[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},S=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||N()}),_=e=>(t,a)=>{let r=S(t,e,a);return A({type:2,toast:r}),r.id},F=(e,t)=>_("blank")(e,t);F.error=_("error"),F.success=_("success"),F.loading=_("loading"),F.custom=_("custom"),F.dismiss=e=>{A({type:3,toastId:e})},F.remove=e=>A({type:4,toastId:e}),F.promise=(e,t,a)=>{let r=F.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(F.success(E(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{F.error(E(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var M=(e,t)=>{A({type:1,toast:{id:e,height:t}})},H=()=>{A({type:5,time:Date.now()})},B=e=>{let{toasts:t,pausedAt:a}=L(e);(0,n.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&F.dismiss(t.id);return}return setTimeout(()=>F.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,n.useCallback)(()=>{a&&A({type:6,time:Date.now()})},[a]),o=(0,n.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:i}=a||{},n=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),s=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<s&&e.visible).length;return n.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:H,endPause:r,calculateOffset:o}}},R=j("div")`
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
`,U=j("div")`
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
`,Z=j("div")`
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
`,q=j("div")`
  position: absolute;
`,J=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,W=j("div")`
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
`,Y=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?n.createElement(W,null,t):t:"blank"===a?null:n.createElement(J,null,n.createElement(U,{...r}),"loading"!==a&&n.createElement(q,null,"error"===a?n.createElement(R,{...r}):n.createElement(Z,{...r})))},G=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,K=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,V=j("div")`
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
`,Q=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let a=e.includes("top")?1:-1,[r,o]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(a),K(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=n.memo(({toast:e,position:t,style:a,children:r})=>{let o=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},i=n.createElement(Y,{toast:e}),s=n.createElement(Q,{...e.ariaProps},E(e.message,e));return n.createElement(V,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof r?r({icon:i,message:s}):n.createElement(n.Fragment,null,i,s))});i=n.createElement,p.p=void 0,g=i,b=void 0,y=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:o})=>{let i=n.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return n.createElement("div",{ref:i,className:t,style:a},o)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eo=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:o,containerStyle:i,containerClassName:s})=>{let{toasts:l,handlers:d}=B(a);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:s,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(a=>{let i=a.position||t,s=ea(i,d.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return n.createElement(et,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?er:"",style:s},"custom"===a.type?E(a.message,a):o?o(a):n.createElement(ee,{toast:a,position:i}))}))},ei=F}},function(e){e.O(0,[115,400,805,712,169,215,702,724,170,587,948,45,61,462,971,596,744],function(){return e(e.s=13833)}),_N_E=e.O()}]);