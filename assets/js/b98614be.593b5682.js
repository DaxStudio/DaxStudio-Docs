"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[8474],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(n),f=r,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?a.createElement(h,o(o({ref:e},u),{},{components:n})):a.createElement(h,o({ref:e},u))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2432:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Signed Installer"},o=void 0,s={unversionedId:"installation/signed-installer",id:"installation/signed-installer",title:"Signed Installer",description:"As of v2.12 the DAX Studio installer is now signed with an Extended Validation (EV) Certificate",source:"@site/docs/installation/signed-installer.md",sourceDirName:"installation",slug:"/installation/signed-installer",permalink:"/docs/installation/signed-installer",draft:!1,editUrl:"https://github.com/daxstudio/daxstudio-docs/tree/main/packages/create-docusaurus/templates/shared/docs/installation/signed-installer.md",tags:[],version:"current",frontMatter:{title:"Signed Installer"},sidebar:"tutorialSidebar",previous:{title:"Portable Install",permalink:"/docs/installation/portable"},next:{title:"Universal Installer",permalink:"/docs/installation/single-installer"}},l={},c=[],u={toc:c};function p(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As of v2.12 the DAX Studio installer is now signed with an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Extended_Validation_Certificate"},"Extended Validation (EV) Certificate")," "),(0,r.kt)("p",null,"The fact that Installer now signed with an EV certificate should hopefully prevent all the issues and warnings coming from Windows ",(0,r.kt)("a",{parentName:"p",href:"../smart-screen"},"SmartScreen")," when attempting to download and install DAX Studio."),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"HUGE")," thank-you goes out to the guys at ",(0,r.kt)("a",{parentName:"p",href:"https://sqlbi.com"},"SQLBI.com"),". To acquire an EV certificate not only requires a financial outlay, but you also need to have a legal company entity with a physical office with financial records and things like that. Both of these things make it pretty much impossible for a free/open source tool to obtain an EV certificate on their own without assistance."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Even though Windows may show ",(0,r.kt)("strong",{parentName:"p"},"SQLBI")," as the publisher this is just because they have funded the code signing certificate and it is a condition of the EV certificate that it has to bear the legal name of the entity that purchased it. ",(0,r.kt)("strong",{parentName:"p"},"DAX Studio")," is still an open source tool and all support requests still go through our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/daxstudio/daxstudio/issues"},"github issue register"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"uac-prompt",src:n(1776).Z,width:"458",height:"335"})))}p.isMDXComponent=!0},1776:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/uac-prompt-a25c7bdf11b7f2baa5d012646efc9d60.png"}}]);