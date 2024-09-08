"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[1184],{10657:(t,e,A)=>{A.r(e),A.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>s,toc:()=>r});var a=A(74848),n=A(28453);const i={title:"Bracket Matching"},c=void 0,s={id:"features/bracket-matching",title:"Bracket Matching",description:"Dax queries can get quite involved and can include deep levels of nested brackets. Dax Studio helps you with this by highlighting matching brackets.",source:"@site/docs/features/bracket-matching.md",sourceDirName:"features",slug:"/features/bracket-matching",permalink:"/docs/features/bracket-matching",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Bracket Matching"},sidebar:"tutorialSidebar",previous:{title:"Syntax",permalink:"/docs/features/command-line/syntax"},next:{title:"Capture Diagnostics",permalink:"/docs/features/capture-diagnostics"}},d={},r=[];function u(t){const e={img:"img",p:"p",...(0,n.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"Dax queries can get quite involved and can include deep levels of nested brackets. Dax Studio helps you with this by highlighting matching brackets."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:A(37310).A+"",width:"361",height:"83"})})]})}function o(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(u,{...t})}):u(t)}},37310:(t,e,A)=>{A.d(e,{A:()=>a});const a="data:image/png;base64,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"},28453:(t,e,A)=>{A.d(e,{R:()=>c,x:()=>s});var a=A(96540);const n={},i=a.createContext(n);function c(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:c(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);