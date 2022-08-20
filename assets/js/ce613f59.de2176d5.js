"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[9246],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2326:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const i={title:"Installation Pre-Requisites"},a=void 0,s={unversionedId:"installation/installation-pre-requisites",id:"installation/installation-pre-requisites",title:"Installation Pre-Requisites",description:"The page details the installation pre-requisites for Dax Studio",source:"@site/docs/installation/installation-pre-requisites.md",sourceDirName:"installation",slug:"/installation/installation-pre-requisites",permalink:"/docs/installation/installation-pre-requisites",draft:!1,editUrl:"https://github.com/daxstudio/daxstudio-docs/tree/main/packages/create-docusaurus/templates/shared/docs/installation/installation-pre-requisites.md",tags:[],version:"current",frontMatter:{title:"Installation Pre-Requisites"},sidebar:"tutorialSidebar",previous:{title:"Command Line Parameters for the Installer",permalink:"/docs/installation/command-line-install"},next:{title:"Portable Install",permalink:"/docs/installation/portable"}},l={},u=[{value:"Office 2013 Primary Interop Assemblies",id:"office-2013-primary-interop-assemblies",level:2},{value:"Windows XP",id:"windows-xp",level:2},{value:"Windows Server 2003",id:"windows-server-2003",level:2},{value:"Windows Vista or Windows Server 2008",id:"windows-vista-or-windows-server-2008",level:2},{value:"Windows 7 or Windows 10,",id:"windows-7-or-windows-10",level:2},{value:"Make sure .NET Programmability Support is set to &quot;Run from My Computer&quot;",id:"make-sure-net-programmability-support-is-set-to-run-from-my-computer",level:2}],c={toc:u};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The page details the installation pre-requisites for Dax Studio"),(0,n.kt)("h2",{id:"office-2013-primary-interop-assemblies"},"Office 2013 Primary Interop Assemblies"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Installation Instructions")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"NOTE: Office 2016 and later should have this enabled by default")),(0,n.kt)("p",null,"DAX Studio requires Office Primary Interop Assemblies. Currently, the Office 2013 Primary Interop Assemblies Redistributable is not yet available. However, you can install the Primary Interop Assemblies for Office 2013 (also known as .NET Programmability Support) as follows:"),(0,n.kt)("h2",{id:"windows-xp"},"Windows XP"),(0,n.kt)("p",null,"Go to Start... Settings... Control Panel... Add or Remove Programs. Click on your version of Microsoft Office 2013 and click Change. Choose Add or Remove Features."),(0,n.kt)("h2",{id:"windows-server-2003"},"Windows Server 2003"),(0,n.kt)("p",null,"Go to Start... Control Panel... Add or Remove Programs. Click on your version of Microsoft Office 2013 and click Change. Choose Add or Remove Features."),(0,n.kt)("h2",{id:"windows-vista-or-windows-server-2008"},"Windows Vista or Windows Server 2008"),(0,n.kt)("p",null,"Go to Start... Control Panel... Classic View... Programs and Features. Right click on your version of Microsoft Office 2013 and choose Change. Choose Add or Remove Features."),(0,n.kt)("h2",{id:"windows-7-or-windows-10"},"Windows 7 or Windows 10,"),(0,n.kt)("p",null,"Go to Start... Control Panel... Uninstall a program. Right click on your version of Microsoft Office 2013 and choose Change. Choose Add or Remove Features."),(0,n.kt)("h2",{id:"make-sure-net-programmability-support-is-set-to-run-from-my-computer"},'Make sure .NET Programmability Support is set to "Run from My Computer"'),(0,n.kt)("p",null,"As shown in the following image:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Office 2013 PIA Install",src:r(2060).Z,width:"616",height:"500"})))}d.isMDXComponent=!0},2060:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Installation-Pre-Requisites_Office2013PIA-40ef8ccbf6a245acdf9ca2c76f13779b.png"}}]);