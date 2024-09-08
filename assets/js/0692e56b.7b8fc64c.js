"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[2086],{44713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=n(74848),i=n(28453);const o={title:"Indent Based Code Folding"},a=void 0,c={id:"features/indent-code-folding",title:"Indent Based Code Folding",description:"This is a preview feature an needs to be enabled using the setting under Options > Preview",source:"@site/docs/features/indent-code-folding.md",sourceDirName:"features",slug:"/features/indent-code-folding",permalink:"/docs/features/indent-code-folding",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Indent Based Code Folding"},sidebar:"tutorialSidebar",previous:{title:"Function Metadata",permalink:"/docs/features/function-metadata"},next:{title:"Code Completion Support",permalink:"/docs/features/intellisense-support"}},r={},d=[];function l(e){const t={a:"a",admonition:"admonition",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"This is a preview feature an needs to be enabled using the setting under Options > Preview"})}),"\n",(0,s.jsx)(t.p,{children:'DAX Studio does not have a fully featured DAX parser making some features like code folding impossible to implement correctly, but this feature provides an interesting work around which works for "well formatted" DAX code by allowing the code to be collapsed based on indentation levels. This does allow for some interesting use cases where you can indent a block of code from a long query and collapse it so that you can view just the portions of code that are of interest to you in a single screen.'}),"\n",(0,s.jsx)(t.p,{children:"If we take the following query as an example"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(33640).A+"",width:"1178",height:"171"})}),"\n",(0,s.jsx)(t.p,{children:"When we turn on the indent based code folding we see that lines 6-9 can be collapsed"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(37859).A+"",width:"1184",height:"178"})}),"\n",(0,s.jsxs)(t.p,{children:["However if we use the ",(0,s.jsx)(t.a,{href:"../daxformatter-support",children:"Format DAX"})," to format the code we can see how it is now possible to collapse logical blocks of the code"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(7231).A+"",width:"697",height:"270"})}),"\n",(0,s.jsx)(t.p,{children:"This allows us to collapse variables and measures or function calls so that it is possible to just focus on a specific part of the query"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(33600).A+"",width:"354",height:"128"})})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},33600:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,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"},7231:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/indent-code-folding-formatted-86f28a9c2e62a18bb06a3b3aef1e40bf.png"},33640:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/indent-code-folding-unformatted-0eb8ff65200d2c13077524623735e814.png"},37859:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/indent-code-folding-unformatted1-23f1da2eb64236410b02ee5bdc0f0fb6.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(96540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);