"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[5736],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),f=i,y=s["".concat(d,".").concat(f)]||s[f]||p[f]||o;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={title:"Query Editor"},a=void 0,c={unversionedId:"features/query-editor",id:"features/query-editor",title:"Query Editor",description:"The query editor pane is where you enter the queries that you want DAX Studio to execute.",source:"@site/docs/features/query-editor.md",sourceDirName:"features",slug:"/features/query-editor",permalink:"/docs/features/query-editor",draft:!1,editUrl:"https://github.com/daxstudio/daxstudio-docs/tree/main/packages/create-docusaurus/templates/shared/docs/features/query-editor.md",tags:[],version:"current",frontMatter:{title:"Query Editor"},sidebar:"tutorialSidebar",previous:{title:"Query Builder",permalink:"/docs/features/query-builder"},next:{title:"DAX Studio Ribbon",permalink:"/docs/features/ribbon-control"}},d={},l=[{value:"Syntax highlighting",id:"syntax-highlighting",level:3},{value:"Code Completion support",id:"code-completion-support",level:3},{value:"Function Insight Tooltips",id:"function-insight-tooltips",level:3},{value:"Bracket matching",id:"bracket-matching",level:3}],u={toc:l};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The query editor pane is where you enter the queries that you want DAX Studio to execute."),(0,i.kt)("p",null,"It has a number of advanced capabilities including:"),(0,i.kt)("h3",{id:"syntax-highlighting"},"Syntax highlighting"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6772).Z,width:"449",height:"225"})),(0,i.kt)("p",null,"As of v2.4.4 the Syntax highlighting is now dynamic and discovers new keywords and functions from the currently connected data source. This is particularly important for PowerBI where new functionality is regularly released."),(0,i.kt)("h3",{id:"code-completion-support"},"Code Completion support"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4835).Z,width:"388",height:"357"})),(0,i.kt)("p",null,"The editor can display auto-complete information for ",(0,i.kt)("a",{parentName:"p",href:"/docs/features/intellisense-support"},"functions, tables and columns")),(0,i.kt)("h3",{id:"function-insight-tooltips"},"Function Insight Tooltips"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(919).Z,width:"373",height:"99"})),(0,i.kt)("p",null,"DAX Studio displays information about the function including a description and the parameter signature"),(0,i.kt)("h3",{id:"bracket-matching"},"Bracket matching"),(0,i.kt)("p",null,"As you type or move around the editor DAX Studio will show you matching brackets"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8054).Z,width:"482",height:"181"})),(0,i.kt)("p",null,"And will highlight in red if it can't find a matching opening or closing bracket"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6183).Z,width:"494",height:"180"})))}p.isMDXComponent=!0},8054:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Query-Editor_BracketMatching-09fdcadcf53d90d9c3d1ed3ababaa459.png"},919:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},4835:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Query-Editor_Intellisense-5b7c04d661f3ca3ea076a945b36be905.png"},6183:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Query-Editor_MismatchedBrackets-4ba8646d48172a54af5c68b0b2608d0b.png"},6772:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Query-Editor_SyntaxHighlighting-d5aeb7d052bf6bdc365f43aee209b1d8.png"}}]);