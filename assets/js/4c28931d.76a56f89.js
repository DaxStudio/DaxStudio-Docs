"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[545],{15254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var s=r(74848),i=r(28453);const n={title:"All Queries Trace"},l="Power BI Desktop caching",o={id:"features/traces/all-queries-trace",title:"All Queries Trace",description:"Tracing requires server admin rights, if you do not have these the trace buttons will be disabled",source:"@site/docs/features/traces/all-queries-trace.md",sourceDirName:"features/traces",slug:"/features/traces/all-queries-trace",permalink:"/docs/features/traces/all-queries-trace",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"All Queries Trace"},sidebar:"tutorialSidebar",previous:{title:"Traces",permalink:"/docs/category/traces"},next:{title:"EvaluateAndLog Trace",permalink:"/docs/features/traces/evaluateandlog-trace"}},a={},c=[];function d(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"Tracing requires server admin rights, if you do not have these the trace buttons will be disabled"})}),"\n",(0,s.jsxs)(t.p,{children:["The All Queries trace in Dax Studio supports capturing the query events from all client tools (not just queries sent from DAX Studio like the ",(0,s.jsx)(t.a,{href:"../query-plan-trace",children:"Query Plan"})," and ",(0,s.jsx)(t.a,{href:"../server-timings-trace",children:"Server Timings"})," features do)."]}),"\n",(0,s.jsx)(t.p,{children:"The 'All Queries\" trace is really useful when you wish to see the queries that are generated by a client tool like Power BI Desktop."}),"\n",(0,s.jsx)(t.p,{children:"The following window shows a list of queries generated by clicking on some slicers in report in Power BI Desktop."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:r(49923).A+"",width:"882",height:"401"})}),"\n",(0,s.jsx)(t.p,{children:"If you find a query that you wish to examine further you can double click on the query to copy it up to the editor."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:r(97505).A+"",width:"883",height:"527"})}),"\n",(0,s.jsx)(t.p,{children:"Because the All Queries trace can capture a lot of events you may find it helpful to use the filter option to help find specific queries."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:r(47309).A+"",width:"880",height:"235"})}),"\n",(0,s.jsx)(t.p,{children:"At the top of the All Queries tab is a small toolbar"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:r(67557).A+"",width:"159",height:"22"})}),"\n",(0,s.jsx)(t.p,{children:"From left to right these buttons are as follows:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Button"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Record"}),(0,s.jsx)(t.td,{children:"will start or resume a paused / stopped trace"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Pause"}),(0,s.jsx)(t.td,{children:"will temporarily pause the current trace"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Stop"}),(0,s.jsx)(t.td,{children:"will stop the current trace (the captured events will remain in the output window)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Delete"}),(0,s.jsx)(t.td,{children:"will clear all the captured events"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Copy to Editor"}),(0,s.jsx)(t.td,{children:"will copy the content of the currently highlighted query to the edit pane"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Show Filters"}),(0,s.jsx)(t.td,{children:"will show/hide the filter controls"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Clear Filters"}),(0,s.jsx)(t.td,{children:"will clear any currently set filters"})]})]})]}),"\n",(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"power-bi-desktop-caching",children:"Power BI Desktop caching"})}),"\n",(0,s.jsxs)(t.p,{children:["When connecting the ",(0,s.jsx)(t.em,{children:"All Queries"})," trace to to Power BI you need to be aware that Power BI has it's own level of internal caching. At a very high level it looks something like the following:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:r(71600).A+"",width:"1051",height:"638"})}),"\n",(0,s.jsxs)(t.p,{children:["What this means is that if a visual has already rendered before DAX Studio has connected you will normally not capture any queries unless you do something like changing a filter or crossfiltering so that you are requesting different data to that which has been stored in the ",(0,s.jsx)(t.em,{children:"Visual"})," level cache."]}),"\n",(0,s.jsx)(t.p,{children:"So the recommended procedure when attempting to performance profile the DAX queries from a Power BI report is to do the following:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Navigate to a blank page (or create a new blank page)"}),"\n",(0,s.jsx)(t.li,{children:"Save Power BI Desktop (with the blank page selected)"}),"\n",(0,s.jsx)(t.li,{children:"Close Power BI Desktop"}),"\n",(0,s.jsx)(t.li,{children:"Open the file in Power BI Desktop (there should be a blank page)"}),"\n",(0,s.jsx)(t.li,{children:"Connect DAX Studio to Power BI Desktop"}),"\n",(0,s.jsxs)(t.li,{children:["Start an ",(0,s.jsx)(t.em,{children:"All Queries"})," Trace in Dax Studio"]}),"\n",(0,s.jsx)(t.li,{children:"Switch to Power BI Desktop"}),"\n",(0,s.jsx)(t.li,{children:"Move to one of more of the other non-blank pages."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"At this point, DAX Studio should show you all the queries."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},97505:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/all-queries-copy-to-editor-824bfc1b5ea080e1af3b9b3123bf4ab9.png"},47309:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/all-queries-filters-d435a9062682a89cf5db4fe8bc553074.png"},67557:(e,t,r)=>{r.d(t,{A:()=>s});const s="data:image/png;base64,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"},49923:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/all-queries-trace-224dddfbd6a5ffc1cb3f418f217f0d30.png"},71600:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/power-bi-caches-2a45ba274fe4ec97c476502a44f8114b.png"},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var s=r(96540);const i={},n=s.createContext(i);function l(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);