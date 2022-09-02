"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[7160],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>A});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),A=a,f=d["".concat(i,".").concat(A)]||d[A]||p[A]||o;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function A(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Status Bar"},u=void 0,s={unversionedId:"features/statusbar",id:"features/statusbar",title:"Status Bar",description:"The statusbar in DAX Studio contains a number of useful bits of information",source:"@site/docs/features/statusbar.md",sourceDirName:"features",slug:"/features/statusbar",permalink:"/docs/features/statusbar",draft:!1,tags:[],version:"current",frontMatter:{title:"Status Bar"},sidebar:"tutorialSidebar",previous:{title:"Run Modes",permalink:"/docs/features/run-modes"},next:{title:"Swap Delimiters",permalink:"/docs/features/swap-delimiters"}},i={},l=[],c={toc:l};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The statusbar in DAX Studio contains a number of useful bits of information"),(0,a.kt)("p",null,"The left-hand side will show if a query is currently running or not"),(0,a.kt)("p",null,"The right-hand side shows a number of useful bits of information\n",(0,a.kt)("img",{src:r(15288).Z,width:"398",height:"23"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Editor location - this is useful if you have syntax errors in your query"),(0,a.kt)("li",{parentName:"ul"},"Connection name and version number"),(0,a.kt)("li",{parentName:"ul"},"Current SPID "),(0,a.kt)("li",{parentName:"ul"},"Number of rows returned by the previous query"),(0,a.kt)("li",{parentName:"ul"},"Duration of the previous query (using client timings)")))}p.isMDXComponent=!0},15288:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);