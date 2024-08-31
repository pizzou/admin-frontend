(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[488],{90786:function(e,t,a){Promise.resolve().then(a.bind(a,33113))},33113:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var r=a(57437),s=a(29870),i=a(33309),o=a(84762),n=a(2265),l=a(98350),c=a(34095),d=a(14786),u=a(5925),p=a(99150),f=a(27431),m=a(52410),h=a(87585),g=e=>{let{data:t,isLoading:a}=(0,d.Pf)("FAQ",{refetchOnMountOrArgChange:!0}),[s,{isSuccess:i,error:o}]=(0,d.tk)(),[l,g]=(0,n.useState)([]);(0,n.useEffect)(()=>{if(t&&g(t.layout.faq),i&&u.toast.success("FAQ updated successfully"),o&&"data"in o){var e;u.toast.error(null==o?void 0:null===(e=o.data)||void 0===e?void 0:e.message)}},[t,i,o]);let x=e=>{g(t=>t.map(t=>t._id===e?{...t,active:!t.active}:t))},y=(e,t)=>{g(a=>a.map(a=>a._id===e?{...a,question:t}:a))},b=(e,t)=>{g(a=>a.map(a=>a._id===e?{...a,answer:t}:a))},v=(e,t)=>JSON.stringify(e)===JSON.stringify(t),w=e=>e.some(e=>""===e.question||""===e.answer),j=async()=>{v(t.layout.faq,l)||w(l)||await s({type:"FAQ",faq:l})};return(0,r.jsx)(r.Fragment,{children:a?(0,r.jsx)(h.Z,{}):(0,r.jsxs)("div",{className:"w-[90%] 800px:w-[80%] m-auto mt-[120px]",children:[(0,r.jsxs)("div",{className:"mt-12",children:[(0,r.jsx)("dl",{className:"space-y-8",children:l.map(e=>{var t;return(0,r.jsxs)("div",{className:"".concat(e._id!==(null===(t=l[0])||void 0===t?void 0:t._id)&&"border-t"," border-gray-200 pt-6"),children:[(0,r.jsx)("dt",{className:"text-lg",children:(0,r.jsxs)("button",{className:"flex items-start dark:text-white text-black justify-between w-full text-left focus:outline-none",onClick:()=>x(e._id),children:[(0,r.jsx)("input",{className:"".concat(c.W.input," border-none"),value:e.question,onChange:t=>y(e._id,t.target.value),placeholder:"Add your question..."}),(0,r.jsx)("span",{className:"ml-6 flex-shrink-0",children:e.active?(0,r.jsx)(f.bQR,{className:"h-6 w-6"}):(0,r.jsx)(f.b9W,{className:"h-6 w-6"})})]})}),e.active&&(0,r.jsxs)("dd",{className:"mt-2 pr-12",children:[(0,r.jsx)("input",{className:"".concat(c.W.input," border-none"),value:e.answer,onChange:t=>b(e._id,t.target.value),placeholder:"Add your answer..."}),(0,r.jsx)("span",{className:"ml-6 flex-shrink-0",children:(0,r.jsx)(p.VPh,{className:"dark:text-white text-black text-[18px] cursor-pointer",onClick:()=>{g(t=>t.filter(t=>t._id!==e._id))}})})]})]},e._id)})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(m.f8n,{className:"dark:text-white text-black text-[25px] cursor-pointer",onClick:()=>{g([...l,{question:"",answer:""}])}})]}),(0,r.jsx)("div",{className:"".concat(c.W.button," !w-[100px] !min-h-[40px] !h-[40px] dark:text-white text-black bg-[#cccccc34] \n              ").concat(v(t.layout.faq,l)||w(l)?"!cursor-not-allowed":"!cursor-pointer !bg-[#42d383]","\n              !rounded fixed bottom-12 right-12"),onClick:v(t.layout.faq,l)||w(l)?()=>null:j,children:"Save"})]})})},x=e=>(0,r.jsx)("div",{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(o.Z,{title:"Elearning - Admin",description:"ELearning is a platform for students to learn and get help from teachers",keywords:"Programming,MERN,Redux,Machine Learning"}),(0,r.jsxs)("div",{className:"flex min-h-screen",children:[(0,r.jsx)("div",{className:"1500px:w-[16%] w-1/5",children:(0,r.jsx)(l.Z,{})}),(0,r.jsxs)("div",{className:"w-[85%]",children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(g,{}),(0,r.jsx)("br",{})]})]})]})})},14786:function(e,t,a){"use strict";a.d(t,{Pf:function(){return i},tk:function(){return o}});var r=a(10273);let s=r.gk.injectEndpoints({endpoints:e=>({getHeroData:e.query({query:e=>({url:"get-layout/".concat(e),method:"GET",credentials:"include"})}),editLayout:e.mutation({query:e=>{let{type:t,image:a,title:r,subTitle:s,faq:i,categories:o}=e;return{url:"edit-layout",body:{type:t,image:a,title:r,subTitle:s,faq:i,categories:o},method:"PUT",credentials:"include"}}})})}),{useGetHeroDataQuery:i,useEditLayoutMutation:o}=s},24033:function(e,t,a){e.exports=a(68165)},5925:function(e,t,a){"use strict";let r,s;a.r(t),a.d(t,{CheckmarkIcon:function(){return R},ErrorIcon:function(){return Z},LoaderIcon:function(){return Q},ToastBar:function(){return ee},ToastIcon:function(){return J},Toaster:function(){return es},default:function(){return ei},resolveValue:function(){return N},toast:function(){return F},useToaster:function(){return H},useToasterStore:function(){return z}});var i,o=a(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",r="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+o+";":r+="f"==i[1]?p(o,i):i+"{"+p(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=p(o,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(i,o):i+":"+o+";")}return a+(t&&s?t+"{"+s+"}":s)+r},f={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e},h=(e,t,a,r,s)=>{var i;let o=m(e),n=f[o]||(f[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!f[n]){let t=o!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);f[n]=p(s?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&f.g?f.g:null;return a&&(f.g=f[n]),i=f[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),n},g=(e,t,a)=>e.reduce((e,r,s)=>{let i=t[s];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function x(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}x.bind({g:1});let y,b,v,w=x.bind({k:1});function j(e,t){let a=this||{};return function(){let r=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;a.p=Object.assign({theme:b&&b()},n),a.o=/ *go\d+/.test(l),n.className=x.apply(a,r)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),y(c,n)}return t?t(s):s}}var k=e=>"function"==typeof e,N=(e,t)=>k(e)?e(t):e,E=(r=0,()=>(++r).toString()),C=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},_=new Map,O=e=>{if(_.has(e))return;let t=setTimeout(()=>{_.delete(e),T({type:4,toastId:e})},1e3);_.set(e,t)},$=e=>{let t=_.get(e);t&&clearTimeout(t)},A=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&$(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?A(e,{type:1,toast:a}):A(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?O(r):e.toasts.forEach(e=>{O(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},q=[],P={toasts:[],pausedAt:void 0},T=e=>{P=A(P,e),q.forEach(e=>{e(P)})},I={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},z=(e={})=>{let[t,a]=(0,o.useState)(P);(0,o.useEffect)(()=>(q.push(a),()=>{let e=q.indexOf(a);e>-1&&q.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||I[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},D=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||E()}),S=e=>(t,a)=>{let r=D(t,e,a);return T({type:2,toast:r}),r.id},F=(e,t)=>S("blank")(e,t);F.error=S("error"),F.success=S("success"),F.loading=S("loading"),F.custom=S("custom"),F.dismiss=e=>{T({type:3,toastId:e})},F.remove=e=>T({type:4,toastId:e}),F.promise=(e,t,a)=>{let r=F.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(F.success(N(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{F.error(N(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var M=(e,t)=>{T({type:1,toast:{id:e,height:t}})},L=()=>{T({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:a}=z(e);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&F.dismiss(t.id);return}return setTimeout(()=>F.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,o.useCallback)(()=>{a&&T({type:6,time:Date.now()})},[a]),s=(0,o.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:i}=a||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:L,endPause:r,calculateOffset:s}}},Z=j("div")`
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
`,Q=j("div")`
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
`,R=j("div")`
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
`,U=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,B=j("div")`
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
`,J=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?o.createElement(B,null,t):t:"blank"===a?null:o.createElement(U,null,o.createElement(Q,{...r}),"loading"!==a&&o.createElement(W,null,"error"===a?o.createElement(Z,{...r}):o.createElement(R,{...r})))},V=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,G=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Y=j("div")`
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
`,K=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[V(a),G(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(J,{toast:e}),n=o.createElement(K,{...e.ariaProps},N(e.message,e));return o.createElement(Y,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,p.p=void 0,y=i,b=void 0,v=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:s})=>{let i=o.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return o.createElement("div",{ref:i,className:t,style:a},s)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,es=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:s,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:c}=H(a);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let i=a.position||t,n=ea(i,c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return o.createElement(et,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?er:"",style:n},"custom"===a.type?N(a.message,a):s?s(a):o.createElement(ee,{toast:a,position:i}))}))},ei=F}},function(e){e.O(0,[115,400,805,712,169,982,215,702,724,170,587,948,45,61,462,971,596,744],function(){return e(e.s=90786)}),_N_E=e.O()}]);