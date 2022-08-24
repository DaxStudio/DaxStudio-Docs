"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[1180],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"Multiple Queries Detected dialog"},i=void 0,u={unversionedId:"features/multiple-queries-detected",id:"features/multiple-queries-detected",title:"Multiple Queries Detected dialog",description:"This dialog is displayed when pasting in text copied from the Power BI Performance Analyzer which contains both the DAX query generated by Power BI plus any additional query generated from a Direct Query connection. If you are connected to the main report data model the secondary query is not as useful as the initial DAX query since it cannot be executed against the main report data model, so this dialog gives you the option to automatically strip out the second query. You can choose an option for a default behaviour or you can choose to be prompted any time such a query is pasted",source:"@site/docs/features/multiple-queries-detected.md",sourceDirName:"features",slug:"/features/multiple-queries-detected",permalink:"/docs/features/multiple-queries-detected",draft:!1,tags:[],version:"current",frontMatter:{title:"Multiple Queries Detected dialog"},sidebar:"tutorialSidebar",previous:{title:"Model Metrics",permalink:"/docs/features/model-metrics"},next:{title:"Multiple Tabs",permalink:"/docs/features/multiple-tabs"}},c={},s=[],l={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(8999).Z,width:"572",height:"352"})),(0,o.kt)("p",null,"This dialog is displayed when pasting in text copied from the Power BI Performance Analyzer which contains both the DAX query generated by Power BI plus any additional query generated from a Direct Query connection. If you are connected to the main report data model the secondary query is not as useful as the initial DAX query since it cannot be executed against the main report data model, so this dialog gives you the option to automatically strip out the second query. You can choose an option for a default behaviour or you can choose to be prompted any time such a query is pasted"))}d.isMDXComponent=!0},8999:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/multiple-queries-detected-dialog-1fddd00f30c8f1cbc157e99273e621e3.png"}}]);