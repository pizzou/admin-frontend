(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[331],{49493:function(e,t,r){Promise.resolve().then(r.bind(r,400))},400:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var a=r(57437),o=r(29870),i=r(33309),s=r(84762),n=r(2265),l=r(98350),c=r(14786),d=r(87585),u=r(34095),p=r(99150),f=r(52410),m=r(5925),g=e=>{let{data:t,isLoading:r,refetch:o}=(0,c.Pf)("Categories",{refetchOnMountOrArgChange:!0}),[i,{isSuccess:s,error:l}]=(0,c.tk)(),[g,h]=(0,n.useState)([]);(0,n.useEffect)(()=>{if(t&&h(t.layout.categories),s&&(o(),m.toast.success("Categories updated successfully")),l&&"data"in l){var e;m.toast.error(null==l?void 0:null===(e=l.data)||void 0===e?void 0:e.message)}},[t,s,l,o]);let y=(e,t)=>{h(r=>r.map(r=>r._id===e?{...r,title:t}:r))},x=(e,t)=>JSON.stringify(e)===JSON.stringify(t),b=e=>e.some(e=>""===e.title),v=async()=>{x(t.layout.categories,g)||b(g)||await i({type:"Categories",categories:g})};return(0,a.jsx)(a.Fragment,{children:r?(0,a.jsx)(d.Z,{}):(0,a.jsxs)("div",{className:"mt-[120px] text-center",children:[(0,a.jsx)("h1",{className:"".concat(u.W.title),children:"All Categories"}),g&&g.map((e,t)=>(0,a.jsx)("div",{className:"p-3",children:(0,a.jsxs)("div",{className:"flex items-center w-full justify-center",children:[(0,a.jsx)("input",{className:"".concat(u.W.input," !w-[unset] !border-none !text-[20px]"),value:e.title,onChange:t=>y(e._id,t.target.value),placeholder:"Enter category title..."}),(0,a.jsx)(p.VPh,{className:"dark:text-white text-black text-[18px] cursor-pointer",onClick:()=>{h(t=>t.filter(t=>t._id!==e._id))}})]})},t)),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:"w-full flex justify-center",children:(0,a.jsx)(f.f8n,{className:"dark:text-white text-black text-[25px] cursor-pointer",onClick:()=>{""===g[g.length-1].title?m.toast.error("Category title cannot be empty"):h(e=>[...e,{title:""}])}})}),(0,a.jsx)("div",{className:"".concat(u.W.button," !w-[100px] !min-h-[40px] !h-[40px] dark:text-white text-black bg-[#cccccc34] \n            ").concat(x(t.layout.categories,g)||b(g)?"!cursor-not-allowed":"!cursor-pointer !bg-[#42d383]","\n            !rounded absolute bottom-12 right-12"),onClick:x(t.layout.categories,g)||b(g)?()=>null:v,children:"Save"})]})})},h=e=>(0,a.jsx)("div",{children:(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(s.Z,{title:"Elearning - Admin",description:"ELearning is a platform for students to learn and get help from teachers",keywords:"Programming,MERN,Redux,Machine Learning"}),(0,a.jsxs)("div",{className:"flex h-screen",children:[(0,a.jsx)("div",{className:"1500px:w-[16%] w-1/5",children:(0,a.jsx)(l.Z,{})}),(0,a.jsxs)("div",{className:"w-[85%]",children:[(0,a.jsx)(o.Z,{}),(0,a.jsx)(g,{})]})]})]})})},14786:function(e,t,r){"use strict";r.d(t,{Pf:function(){return i},tk:function(){return s}});var a=r(10273);let o=a.gk.injectEndpoints({endpoints:e=>({getHeroData:e.query({query:e=>({url:"get-layout/".concat(e),method:"GET",credentials:"include"})}),editLayout:e.mutation({query:e=>{let{type:t,image:r,title:a,subTitle:o,faq:i,categories:s}=e;return{url:"edit-layout",body:{type:t,image:r,title:a,subTitle:o,faq:i,categories:s},method:"PUT",credentials:"include"}}})})}),{useGetHeroDataQuery:i,useEditLayoutMutation:s}=o},24033:function(e,t,r){e.exports=r(68165)},5925:function(e,t,r){"use strict";let a,o;r.r(t),r.d(t,{CheckmarkIcon:function(){return U},ErrorIcon:function(){return q},LoaderIcon:function(){return R},ToastBar:function(){return ee},ToastIcon:function(){return V},Toaster:function(){return eo},default:function(){return ei},resolveValue:function(){return E},toast:function(){return L},useToaster:function(){return Z},useToasterStore:function(){return D}});var i,s=r(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+s+";":a+="f"==i[1]?p(s,i):i+"{"+p(s,"k"==i[1]?"":t)+"}":"object"==typeof s?a+=p(s,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=p.p?p.p(i,s):i+":"+s+";")}return r+(t&&o?t+"{"+o+"}":o)+a},f={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e},g=(e,t,r,a,o)=>{var i;let s=m(e),n=f[s]||(f[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!f[n]){let t=s!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);f[n]=p(o?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&f.g?f.g:null;return r&&(f.g=f[n]),i=f[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),n},h=(e,t,r)=>e.reduce((e,a,o)=>{let i=t[o];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function y(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let x,b,v,w=y.bind({k:1});function j(e,t){let r=this||{};return function(){let a=arguments;function o(i,s){let n=Object.assign({},i),l=n.className||o.className;r.p=Object.assign({theme:b&&b()},n),r.o=/ *go\d+/.test(l),n.className=y.apply(r,a)+(l?" "+l:""),t&&(n.ref=s);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),x(c,n)}return t?t(o):o}}var k=e=>"function"==typeof e,E=(e,t)=>k(e)?e(t):e,N=(a=0,()=>(++a).toString()),C=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},O=new Map,$=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),I({type:4,toastId:e})},1e3);O.set(e,t)},P=e=>{let t=O.get(e);t&&clearTimeout(t)},T=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&P(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?T(e,{type:1,toast:r}):T(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?$(a):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},_=[],A={toasts:[],pausedAt:void 0},I=e=>{A=T(A,e),_.forEach(e=>{e(A)})},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={})=>{let[t,r]=(0,s.useState)(A);(0,s.useEffect)(()=>(_.push(r),()=>{let e=_.indexOf(r);e>-1&&_.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||z[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},S=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||N()}),M=e=>(t,r)=>{let a=S(t,e,r);return I({type:2,toast:a}),a.id},L=(e,t)=>M("blank")(e,t);L.error=M("error"),L.success=M("success"),L.loading=M("loading"),L.custom=M("custom"),L.dismiss=e=>{I({type:3,toastId:e})},L.remove=e=>I({type:4,toastId:e}),L.promise=(e,t,r)=>{let a=L.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(L.success(E(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{L.error(E(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var F=(e,t)=>{I({type:1,toast:{id:e,height:t}})},H=()=>{I({type:5,time:Date.now()})},Z=e=>{let{toasts:t,pausedAt:r}=D(e);(0,s.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&L.dismiss(t.id);return}return setTimeout(()=>L.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,s.useCallback)(()=>{r&&I({type:6,time:Date.now()})},[r]),o=(0,s.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:i}=r||{},s=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<n&&e.visible).length;return s.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:F,startPause:H,endPause:a,calculateOffset:o}}},q=j("div")`
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
`,R=j("div")`
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
`,U=j("div")`
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
`,W=j("div")`
  position: absolute;
`,B=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,J=j("div")`
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
`,V=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?s.createElement(J,null,t):t:"blank"===r?null:s.createElement(B,null,s.createElement(R,{...a}),"loading"!==r&&s.createElement(W,null,"error"===r?s.createElement(q,{...a}):s.createElement(U,{...a})))},G=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Y=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,K=j("div")`
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
`,X=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(r),Y(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=s.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},i=s.createElement(V,{toast:e}),n=s.createElement(Q,{...e.ariaProps},E(e.message,e));return s.createElement(K,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:i,message:n}):s.createElement(s.Fragment,null,i,n))});i=s.createElement,p.p=void 0,x=i,b=void 0,v=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let i=s.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return s.createElement("div",{ref:i,className:t,style:r},o)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eo=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:c}=Z(r);return s.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let i=r.position||t,n=er(i,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return s.createElement(et,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ea:"",style:n},"custom"===r.type?E(r.message,r):o?o(r):s.createElement(ee,{toast:r,position:i}))}))},ei=L}},function(e){e.O(0,[115,400,805,712,169,215,702,724,170,587,948,45,61,462,971,596,744],function(){return e(e.s=49493)}),_N_E=e.O()}]);