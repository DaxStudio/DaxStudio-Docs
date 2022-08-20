"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={title:"Swap Delimiters"},i=void 0,s={unversionedId:"features/swap-delimiters",id:"features/swap-delimiters",title:"Swap Delimiters",description:"Note: In the Options there is a setting to select a default delimiter style",source:"@site/docs/features/swap-delimiters.md",sourceDirName:"features",slug:"/features/swap-delimiters",permalink:"/docs/features/swap-delimiters",draft:!1,editUrl:"https://github.com/daxstudio/daxstudio-docs/tree/main/packages/create-docusaurus/templates/shared/docs/features/swap-delimiters.md",tags:[],version:"current",frontMatter:{title:"Swap Delimiters"},sidebar:"tutorialSidebar",previous:{title:"Status Bar",permalink:"/docs/features/statusbar"},next:{title:"Timer Results",permalink:"/docs/features/timer-results"}},o={},u=[],p={toc:u};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," In the Options there is a setting to select a default delimiter style ")),(0,n.kt)("p",null,"In Excel and Power BI DAX supports 2 styles of delimiters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"US ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"comma (,) for list items"),(0,n.kt)("li",{parentName:"ul"},"period (.) for the decimal separator"))),(0,n.kt)("li",{parentName:"ul"},'"European"',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"semicolon (;) for list items"),(0,n.kt)("li",{parentName:"ul"},"comma (,) for the decimal separator")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"US")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"European")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Decimal Numbers"),(0,n.kt)("td",{parentName:"tr",align:null},"1.25"),(0,n.kt)("td",{parentName:"tr",align:null},"1,25")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"List of Strings"),(0,n.kt)("td",{parentName:"tr",align:null},'"Red","Green"'),(0,n.kt)("td",{parentName:"tr",align:null},'"Red";"Green"')))),(0,n.kt)("p",null,'The "Swap Delimiters feature lets you easily take DAX queries or expressions and switch between the two delimiter styles. This is very handy when copying examples from websites where they have used the alternate delimiter style.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(7949).Z,width:"436",height:"244"})))}c.isMDXComponent=!0},7949:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/swap-delimiters-d629a813d2f38ee83cde3cb9d28528a3.gif"}}]);