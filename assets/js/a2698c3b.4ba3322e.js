"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[1389],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,g=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Capture Diagnostics"},o=void 0,s={unversionedId:"features/capture-diagnostics",id:"features/capture-diagnostics",title:"Capture Diagnostics",description:"Capture Diagnostics is designed as a way to capture diagnostic information about 1 or more queries in a single file. This file can then be used for later analysis.",source:"@site/docs/features/capture-diagnostics.md",sourceDirName:"features",slug:"/features/capture-diagnostics",permalink:"/docs/features/capture-diagnostics",draft:!1,tags:[],version:"current",frontMatter:{title:"Capture Diagnostics"},sidebar:"tutorialSidebar",previous:{title:"Bracket Matching",permalink:"/docs/features/bracket-matching"},next:{title:"Clear Cache",permalink:"/docs/features/clear-cache"}},l={},c=[],u={toc:c},p="wrapper";function f(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Capture Diagnostics is designed as a way to capture diagnostic information about 1 or more queries in a single file. This file can then be used for later analysis."),(0,a.kt)("p",null,"When you click the Capture Diagnostic it will automate performing the following actions."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Running ",(0,a.kt)("strong",{parentName:"li"},"View Metrics")," "),(0,a.kt)("li",{parentName:"ol"},"Starting a ",(0,a.kt)("strong",{parentName:"li"},"Server Timings")," trace"),(0,a.kt)("li",{parentName:"ol"},"Starting a ",(0,a.kt)("strong",{parentName:"li"},"Query Plan")," trace"),(0,a.kt)("li",{parentName:"ol"},"Running a ",(0,a.kt)("strong",{parentName:"li"},"Clear Cache")," command"),(0,a.kt)("li",{parentName:"ol"},"Saving the results as a .daxx file (or saving multiple daxx files to a zip file)")),(0,a.kt)("p",null,"Capture Diagnostics can be trigged in a number of different ways."),(0,a.kt)("p",null,"It is available as a button in the Advanced Ribbon. In this scenario it will attempt to capture diagnostics against the query in the editor window. If there is no text in the editor window it will check the clipboard contents for a possible DAX query and use that."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(86680).Z,width:"899",height:"200"})),(0,a.kt)("p",null,"It is also available in both the All Queries Trace window: "),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(92752).Z,width:"1431",height:"314"})),(0,a.kt)("p",null,"And in the Power BI Performance Data window:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(45106).Z,width:"1426",height:"310"})),(0,a.kt)("p",null,"In both of these cases you can use the filter option to further refine the list of queries. For example you can filter for only those that took longer than a given duration. The Capture Diagnostics option will then run all of the selected queries and save the results in a single .zip file."))}f.isMDXComponent=!0},92752:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/capture-diagnostics-all-queries-6bc8c9804306e5678e5bfa19d910aa5d.png"},45106:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/capture-diagnostics-pbi-performance-94604337e03590f407dfbd56fb0c7381.png"},86680:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/capture-diagnostics-ribbon-5d7261b42f04385b29b2ffd70b4b7e49.png"}}]);