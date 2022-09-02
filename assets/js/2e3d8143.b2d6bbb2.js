"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[3025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,p=m["".concat(u,".").concat(h)]||m[h]||d[h]||o;return n?r.createElement(p,c(c({ref:t},l),{},{components:n})):r.createElement(p,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Run Benchmark"},c=void 0,i={unversionedId:"features/run-benchmark",id:"features/run-benchmark",title:"Run Benchmark",description:"The benchmarking feature provides an automated way of running a query a number of times with a cold and warm cache and then collecting detailed timing information.",source:"@site/docs/features/run-benchmark.md",sourceDirName:"features",slug:"/features/run-benchmark",permalink:"/docs/features/run-benchmark",draft:!1,tags:[],version:"current",frontMatter:{title:"Run Benchmark"},sidebar:"tutorialSidebar",previous:{title:"DAX Studio Ribbon",permalink:"/docs/features/ribbon-control"},next:{title:"Run Modes",permalink:"/docs/features/run-modes"}},u={},s=[],l={toc:s};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The benchmarking feature provides an automated way of running a query a number of times with a cold and warm cache and then collecting detailed timing information."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Run Benchmark")," button is in the ",(0,a.kt)("strong",{parentName:"p"},"Advanced")," tab in the ribbon"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(17584).Z,width:"606",height:"152"})),(0,a.kt)("p",null,"Clicking on this button brings up the following dialog where you can set the number of times the current query should be run on a cold and warm cache. To do the ",(0,a.kt)("em",{parentName:"p"},"cold cache")," runs we execute a Clear Cache command before each execution. The ",(0,a.kt)("em",{parentName:"p"},"warm cache")," runs we just execute the query without clearing the cache so you should see lower durations if your query is able to take advantage of the engine cache."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(30865).Z,width:"554",height:"233"})),(0,a.kt)("p",null,"By default we run the same number of cold and warm cache executions, but you can change this by unticking the link between the two and then setting the two numbers individually."),(0,a.kt)("p",null,"Once all of the queries are complete we show the timings results. The first tab is the summary results which shows you various summary statistics about the cold and warm cache runs"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(80318).Z,width:"708",height:"231"})),(0,a.kt)("p",null,"And there is also a detailed view which shows the detailed results of each individual query."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(20421).Z,width:"710",height:"230"})))}d.isMDXComponent=!0},17584:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/benchmark-button-f6dc04da0fad3576c5e1103c500c1a5d.png"},20421:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/benchmark-details-160610ef55644d2dcf41020671adf8ac.png"},30865:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/benchmark-dialog-726e3acb7ed3d38579082e65c332c2d6.png"},80318:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/benchmark-summary-4013c7e3ef68d12705c8bdce203e2c88.png"}}]);