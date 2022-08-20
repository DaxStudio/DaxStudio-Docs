"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[3500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Publish Functions"},i=void 0,s={unversionedId:"features/publish-functions",id:"features/publish-functions",title:"Publish Functions",description:"There are two buttons available in the Advanced tab of the Options window. These buttons exist to help support the https://dax.guide website.",source:"@site/docs/features/publish-functions.md",sourceDirName:"features",slug:"/features/publish-functions",permalink:"/docs/features/publish-functions",draft:!1,editUrl:"https://github.com/daxstudio/daxstudio-docs/tree/main/packages/create-docusaurus/templates/shared/docs/features/publish-functions.md",tags:[],version:"current",frontMatter:{title:"Publish Functions"},sidebar:"tutorialSidebar",previous:{title:"Privacy Settings",permalink:"/docs/features/privacy-settings"},next:{title:"Query Builder",permalink:"/docs/features/query-builder"}},l={},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are two buttons available in the ",(0,o.kt)("strong",{parentName:"p"},"Advanced")," tab of the ",(0,o.kt)("strong",{parentName:"p"},"Options")," window. These buttons exist to help support the ",(0,o.kt)("a",{parentName:"p",href:"https://dax.guide"},"https://dax.guide")," website. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Publish Functions")," this options sends a list of all the DAX functions and their parameters to dax.guide."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Export Functions")," this option exports a file with the list of DAX functions. (only used when there is no internet connection available)")),(0,o.kt)("p",null,"Typically these buttons would be rarely used and would usually be at the request of one of the DAX Studio development team."),(0,o.kt)("p",null,"However there is now an extremely wide variety of versions of the tabular engine being used with the following major varieties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"at least 5 versions of Power BI Desktop ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"3 supported releases of Power BI Desktop for Report Server"),(0,o.kt)("li",{parentName:"ul"},"the Microsoft Store version"),(0,o.kt)("li",{parentName:"ul"},"the install version"))),(0,o.kt)("li",{parentName:"ul"},"at least 5 versions of SSAS on-prem (2012/2014/2016/2017/2019)"),(0,o.kt)("li",{parentName:"ul"},"Power BI Premium XMLA endpoint"),(0,o.kt)("li",{parentName:"ul"},"Azure Analysis Services"),(0,o.kt)("li",{parentName:"ul"},"at least 4 major versions of PowerPivot (Excel 2010/2013/2016/O365)")),(0,o.kt)("p",null,"And then there are different service packs and cummulative updates for all of the above plus beta versions and preview releases. So with all this variation it was decided that these buttons should be publically available. So should anyone notice a new function in the code completion that was not listed on dax.guide this gives them an easy way of sending the details of the functions and the engine version to dax.guide."))}c.isMDXComponent=!0}}]);