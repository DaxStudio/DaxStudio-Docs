"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[9583],{28826:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=s(74848),r=s(28453);const i={title:"Smart Paste"},a=void 0,o={id:"features/smart-paste",title:"Smart Paste",description:"When pasting DAX queries in from other sources it is possible that the text may have issues which requires fixing before the queries can be run.",source:"@site/docs/features/smart-paste.md",sourceDirName:"features",slug:"/features/smart-paste",permalink:"/docs/features/smart-paste",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Smart Paste"},sidebar:"tutorialSidebar",previous:{title:"Server FE Benchmark",permalink:"/docs/features/server-fe-benchmark"},next:{title:"Standard Hotkeys",permalink:"/docs/features/standard-hotkeys"}},c={},l=[];function d(e){const t={code:"code",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"When pasting DAX queries in from other sources it is possible that the text may have issues which requires fixing before the queries can be run."}),"\n",(0,n.jsx)(t.p,{children:"When pasting into the edit pane in DAX Studio the editor performs the following actions:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Make sure no lines are longer than 500 characters"})," - There are 2 reasons for breaking lines at 500 characters.","\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Readability. Very long lines are usually generated by some process and are hard for a person to read."}),"\n",(0,n.jsx)(t.li,{children:"Performance. The syntax highlighting in DAX Studio is only applied for the visible lines, but extremely long lines can cause it to hang the UI for an extended period"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Replace unicode spaces with ascii spaces"}),' - non-standard spaces will cause the tabular engine to throw "invalid token" errors which are very hard to understand since you cannot see the difference between the different types of whitespace.']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:'Replace "smart quotes" with standard ascii quotes'})," - smart quotes break DAX expressions since the text inside them is no longer treated as a ",(0,n.jsx)(t.code,{children:'"string"'})," or ",(0,n.jsx)(t.code,{children:"'table name'"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);