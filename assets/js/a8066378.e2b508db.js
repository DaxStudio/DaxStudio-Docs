"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[6178],{79954:(A,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>h});var n=s(74848),r=s(28453);const a={title:"Blank Measure Expressions"},t="Blank Measure Expressions",u={type:"mdx",permalink:"/learn-more/blank-measure-expressions",source:"@site/src/pages/learn-more/blank-measure-expressions.md",title:"Blank Measure Expressions",description:"If you see the following warning when editing a measure in the query builder it means that DAX Studio was unable to access the expression for the measure.",frontMatter:{title:"Blank Measure Expressions"},unlisted:!1},o={},h=[];function p(A){const e={h1:"h1",header:"header",img:"img",p:"p",...(0,r.R)(),...A.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"blank-measure-expressions",children:"Blank Measure Expressions"})}),"\n",(0,n.jsx)(e.p,{children:"If you see the following warning when editing a measure in the query builder it means that DAX Studio was unable to access the expression for the measure."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:s(55994).A+"",width:"962",height:"164"})}),"\n",(0,n.jsx)(e.p,{children:"The most common cause for this is that you do not have admin rights on the data model. This is a permissions issue and there is no way to bypass this to get access to the expression."}),"\n",(0,n.jsx)(e.p,{children:"You can still type in your own measure expression to override the one in the datamodel for you current query or you can cancel out of the edit dialog and your query will still run using the expression in the data model."})]})}function d(A={}){const{wrapper:e}={...(0,r.R)(),...A.components};return e?(0,n.jsx)(e,{...A,children:(0,n.jsx)(p,{...A})}):p(A)}},55994:(A,e,s)=>{s.d(e,{A:()=>n});const n="data:image/png;base64,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"},28453:(A,e,s)=>{s.d(e,{R:()=>t,x:()=>u});var n=s(96540);const r={},a=n.createContext(r);function t(A){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function u(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(r):A.components||r:t(A.components),n.createElement(a.Provider,{value:e},A.children)}}}]);