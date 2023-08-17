"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[3337],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},E=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),E=o,d=p["".concat(s,".").concat(E)]||p[E]||f[E]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=E;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}E.displayName="MDXCreateElement"},62144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"UCEERR_RENDERTHREADFAILURE Error"},i=void 0,l={unversionedId:"troubleshooting/known-issues/UCEERR_RENDERTHREADFAILURE",id:"troubleshooting/known-issues/UCEERR_RENDERTHREADFAILURE",title:"UCEERR_RENDERTHREADFAILURE Error",description:"There have been some reports of the following error",source:"@site/docs/troubleshooting/known-issues/UCEERR_RENDERTHREADFAILURE.md",sourceDirName:"troubleshooting/known-issues",slug:"/troubleshooting/known-issues/UCEERR_RENDERTHREADFAILURE",permalink:"/docs/troubleshooting/known-issues/UCEERR_RENDERTHREADFAILURE",draft:!1,tags:[],version:"current",frontMatter:{title:"UCEERR_RENDERTHREADFAILURE Error"},sidebar:"tutorialSidebar",previous:{title:"Known Issues",permalink:"/docs/category/known-issues"},next:{title:"DAX Studio Checker",permalink:"/docs/troubleshooting/daxstudio-checker"}},s={},u=[],c={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There have been some reports of the following error"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"UCEERR_RENDERTHREADFAILURE (Exception from HRESULT: 0x88980406)\n")),(0,o.kt)("p",null,"This appears to be a problem with Graphics Hardware acceleration. You can turn off the hardware acceleration by changing a setting in the config file."),(0,o.kt)("p",null,"In the folder where DAX Studio is installed there is a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"daxstudio.exe.config")),(0,o.kt)("p",null,"If you open that file with a text editor like notepad you should be able to find the following line"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<add key="ForceSoftwareRendering" value="false" />\n')),(0,o.kt)("p",null,'if you change the value from "false" to "true" and then restart DAX Studio it should turn off the hardware acceleration which should help with this error.'))}f.isMDXComponent=!0}}]);