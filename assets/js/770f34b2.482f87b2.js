"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[8762],{36219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(74848),i=n(28453);const o={title:"Privacy Settings"},r=void 0,a={id:"features/privacy-settings",title:"Privacy Settings",description:"The privacy options exist to allow users to turn off some or all of the internet based functionality. This allows people with highly sensitive information in their data models to eliminate the possibility of any of this information being sent outside of their organization.",source:"@site/docs/features/privacy-settings.md",sourceDirName:"features",slug:"/features/privacy-settings",permalink:"/docs/features/privacy-settings",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Privacy Settings"},sidebar:"tutorialSidebar",previous:{title:"Parameter Support",permalink:"/docs/features/parameter-support"},next:{title:"Publish Functions",permalink:"/docs/features/publish-functions"}},c={},l=[];function h(e){const t={code:"code",em:"em",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The privacy options exist to allow users to turn off some or all of the internet based functionality. This allows people with highly sensitive information in their data models to eliminate the possibility of any of this information being sent outside of their organization."}),"\n",(0,s.jsx)(t.p,{children:"In normal operation we would recomment leaving all these options disabled as enabling them restricts the functionality of DAX Studio."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Block All Internet Access"})," this option can only be set by an administrator during an ",(0,s.jsx)(t.em,{children:"All Users"})," install. It blocks all features that access the internet and to reset this requires and uninstall and reinstall."]}),"\n",(0,s.jsxs)(t.p,{children:["This can also be set on the command line while installing DAX Studio using the ",(0,s.jsx)(t.code,{children:'/TASKS="blockallinternetaccess"'})," command line switch"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(26300).A+"",width:"499",height:"392"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Block Version Checks"})," This option blocks DAX Studio from automatically checking for new releases."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Block External Services"})," This option blocks DAX Studio from using external services. Currently the only external service is the daxformatter.com website. There is a small chance of sensitive information being leaked externally only if the queries you are formatting contain sensitive information (like customer names, account numbers, etc)"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Block Crash Reporting"})," This option blocks DAX Studio from giving the user the option to send crash reports to the development team. There crash reports include a stack trace and an optional screenshot. There is a chance that the screenshot could include query text or partial results that might include sensitive information. It should be noted that the user has the opportunity of reviewing the screenshot before sending it and can choose not to include the screenshot if necessary."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(53617).A+"",width:"878",height:"641"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},26300:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/install-options-37a964e767f7a58ecccf0fa81156bad3.png"},53617:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/privacy-options-a3fe5f4298d162d7726e9fddbe0691c9.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);