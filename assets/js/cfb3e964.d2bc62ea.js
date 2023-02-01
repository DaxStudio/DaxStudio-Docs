"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Swap Delimiters"},l=void 0,o={unversionedId:"features/swap-delimiters",id:"features/swap-delimiters",title:"Swap Delimiters",description:"In the Options there is a setting to select a default delimiter style",source:"@site/docs/features/swap-delimiters.md",sourceDirName:"features",slug:"/features/swap-delimiters",permalink:"/docs/features/swap-delimiters",draft:!1,tags:[],version:"current",frontMatter:{title:"Swap Delimiters"},sidebar:"tutorialSidebar",previous:{title:"Status Bar",permalink:"/docs/features/statusbar"},next:{title:"Timer Results",permalink:"/docs/features/timer-results"}},s={},p=[],u={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In the Options there is a setting to select a default delimiter style ")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you have turned on the ",(0,a.kt)("strong",{parentName:"p"},"debug commas")," option the ",(0,a.kt)("strong",{parentName:"p"},"swap delimiters")," button will move to the ",(0,a.kt)("strong",{parentName:"p"},"Advanced")," tab")),(0,a.kt)("p",null,"In Excel and Power BI DAX supports 2 styles of delimiters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"US ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"comma (,) for list items"),(0,a.kt)("li",{parentName:"ul"},"period (.) for the decimal separator"))),(0,a.kt)("li",{parentName:"ul"},'"European"',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"semicolon (;) for list items"),(0,a.kt)("li",{parentName:"ul"},"comma (,) for the decimal separator")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"US")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"European")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Decimal Numbers"),(0,a.kt)("td",{parentName:"tr",align:null},"1.25"),(0,a.kt)("td",{parentName:"tr",align:null},"1,25")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"List of Strings"),(0,a.kt)("td",{parentName:"tr",align:null},'"Red","Green"'),(0,a.kt)("td",{parentName:"tr",align:null},'"Red";"Green"')))),(0,a.kt)("p",null,'The "Swap Delimiters feature lets you easily take DAX queries or expressions and switch between the two delimiter styles. This is very handy when copying examples from websites where they have used the alternate delimiter style.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(77949).Z,width:"436",height:"244"})))}m.isMDXComponent=!0},77949:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/swap-delimiters-d629a813d2f38ee83cde3cb9d28528a3.gif"}}]);