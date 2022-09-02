"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[7820],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Excel - Linked Results"},i=void 0,s={unversionedId:"features/excel-linked-results",id:"features/excel-linked-results",title:"Excel - Linked Results",description:"This output option is only available when DAX Studio is launched from the Excel Addin",source:"@site/docs/features/excel-linked-results.md",sourceDirName:"features",slug:"/features/excel-linked-results",permalink:"/docs/features/excel-linked-results",draft:!1,tags:[],version:"current",frontMatter:{title:"Excel - Linked Results"},sidebar:"tutorialSidebar",previous:{title:"Editor Help Text",permalink:"/docs/features/editor-help-text"},next:{title:"Excel - Static Results",permalink:"/docs/features/excel-static-results"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This output option is only available when DAX Studio is launched from the Excel Addin")),(0,o.kt)("p",null,"When the results are output using the Linked Excel mode a table is created in the active Excel workbook which has the connection to the tabular data source and the DAX query embedded in it. What this means is that users without Dax Studio could refresh the data in this table."),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("em",{parentName:"p"},'using this type of output really only makes sense when the data source is PowerPivot or a Server based connection. When connecting to PowerBI Desktop or and SSDT Integrated Workspace the internal port these 2 data sources use is randomized each time they are opened. This will effectively break the "link" meaning that the ',(0,o.kt)("a",{parentName:"em",href:"/docs/features/excel-static-results"},"Static Excel")," output is a better choice for these data sources.")))}p.isMDXComponent=!0}}]);