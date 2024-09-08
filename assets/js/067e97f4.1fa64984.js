"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[6155],{69440:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=t(74848),r=t(28453);const s={title:"UCEERR_RENDERTHREADFAILURE Error"},i=void 0,c={id:"troubleshooting/known-issues/UCEERR_RENDERTHREADFAILURE",title:"UCEERR_RENDERTHREADFAILURE Error",description:"There have been some reports of the following error",source:"@site/docs/troubleshooting/known-issues/UCEERR_RENDERTHREADFAILURE.md",sourceDirName:"troubleshooting/known-issues",slug:"/troubleshooting/known-issues/UCEERR_RENDERTHREADFAILURE",permalink:"/docs/troubleshooting/known-issues/UCEERR_RENDERTHREADFAILURE",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"UCEERR_RENDERTHREADFAILURE Error"},sidebar:"tutorialSidebar",previous:{title:"Known Issues",permalink:"/docs/category/known-issues"},next:{title:"DAX Studio Checker",permalink:"/docs/troubleshooting/daxstudio-checker"}},a={},l=[];function d(e){const o={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"There have been some reports of the following error"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"UCEERR_RENDERTHREADFAILURE (Exception from HRESULT: 0x88980406)\n"})}),"\n",(0,n.jsx)(o.p,{children:"This appears to be a problem with Graphics Hardware acceleration. You can turn off the hardware acceleration by changing a setting in the config file."}),"\n",(0,n.jsxs)(o.p,{children:["In the folder where DAX Studio is installed there is a file called ",(0,n.jsx)(o.code,{children:"daxstudio.exe.config"})]}),"\n",(0,n.jsx)(o.p,{children:"If you open that file with a text editor like notepad you should be able to find the following line"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'<add key="ForceSoftwareRendering" value="false" />\n'})}),"\n",(0,n.jsx)(o.p,{children:'if you change the value from "false" to "true" and then restart DAX Studio it should turn off the hardware acceleration which should help with this error.'})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>c});var n=t(96540);const r={},s=n.createContext(r);function i(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);