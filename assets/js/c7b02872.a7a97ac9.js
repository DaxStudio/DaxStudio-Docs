"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[5394],{75585:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var t=n(74848),s=n(28453),a=n(21398);const o={slug:"v3_0_6-release",title:"v3.0.6 Release",authors:["dgosbell"],tags:["daxstudio"]},r="DAX Studio version 3.0.6",l={permalink:"/blog/v3_0_6-release",source:"@site/blog/2023-03-13-v3_0_6/index.mdx",title:"v3.0.6 Release",description:"Today we are happy to announce the release of version 3.0.6 of DAX Studio",date:"2023-03-13T00:00:00.000Z",tags:[{inline:!0,label:"daxstudio",permalink:"/blog/tags/daxstudio"}],readingTime:5.03,hasTruncateMarker:!0,authors:[{name:"Darren Gosbell",title:"Maintainer of DAX Studio",url:"https://github.com/dgosbell",imageURL:"https://github.com/dgosbell.png",key:"dgosbell",page:null}],frontMatter:{slug:"v3_0_6-release",title:"v3.0.6 Release",authors:["dgosbell"],tags:["daxstudio"]},unlisted:!1,prevItem:{title:"v3.0.7 Release",permalink:"/blog/v3_0_7-release"},nextItem:{title:"v3 Release",permalink:"/blog/v3-release"}},d={authorsImageUrls:[void 0]},h=[{value:"Updated Timeline/Waterfall visualization in Server Timings",id:"updated-timelinewaterfall-visualization-in-server-timings",level:2},{value:"xmSQL / DirectQuery formatting improvements",id:"xmsql--directquery-formatting-improvements",level:2},{value:"New output options",id:"new-output-options",level:2},{value:"New .json file Output option",id:"new-json-file-output-option",level:3},{value:"Custom CSV encoding",id:"custom-csv-encoding",level:3},{value:"Formatted File output",id:"formatted-file-output",level:3},{value:"FE Benchmarks (Preview)",id:"fe-benchmarks-preview",level:2},{value:"All new Features &amp; Fixes",id:"all-new-features--fixes",level:2},{value:"New Features",id:"new-features",level:3},{value:"Fixes",id:"fixes",level:3}];function c(e){const i={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Today we are happy to announce the release of version 3.0.6 of DAX Studio"}),"\n",(0,t.jsx)(i.h2,{id:"updated-timelinewaterfall-visualization-in-server-timings",children:"Updated Timeline/Waterfall visualization in Server Timings"}),"\n",(0,t.jsx)(i.p,{children:"The old Waterfall column has been replaced by the new Timeline column. This column contains the same information as the old waterfall column, but includes a new background image to help visualise times during the execution of a query when either the formula engine (denoted by yellow sections) or the storage engine (denoted by blue sections) was active."}),"\n",(0,t.jsxs)(i.p,{children:["Below is an annotated example of the new ",(0,t.jsx)(i.strong,{children:"Timeline"})," column."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"new timeline chart",src:n(79995).A+"",width:"1151",height:"238"})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"You can see at the start of this query that there is a block of yellow Formula Engine work taking place"}),"\n",(0,t.jsx)(i.li,{children:"Then each of the Storage Engine scans are represented by a thicker blue rectangle"}),"\n",(0,t.jsx)(i.li,{children:"Any batch events are represented by a lighter blue rectangle. You can see in this example that 3 preceeding scans are part of the batch"}),"\n",(0,t.jsx)(i.li,{children:"Finally we can see that the query has a block of Formula engine work at the end of the query"}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"Note that the time that is allocated to the Formula Engine (denoted by the yellow portions of the Timeline) are simply those times during the query when no Storage Engine events were taking place. We do not have separate events for the formula engine activity."})}),"\n",(0,t.jsx)(i.h2,{id:"xmsql--directquery-formatting-improvements",children:"xmSQL / DirectQuery formatting improvements"}),"\n",(0,t.jsxs)(i.p,{children:["The formatting of the xmSQL code in the Server Timings pane has been improved to include key word highlighting and improved line breaks to make the code easier to read\n",(0,t.jsx)(i.img,{alt:"updated xmSQL formatting",src:n(21809).A+"",width:"1024",height:"382"})]}),"\n",(0,t.jsx)(i.h2,{id:"new-output-options",children:"New output options"}),"\n",(0,t.jsx)(i.p,{children:"There are a number of improvements to the output options in this release of DAX Studio"}),"\n",(0,t.jsx)(i.h3,{id:"new-json-file-output-option",children:"New .json file Output option"}),"\n",(0,t.jsxs)(i.p,{children:["When outputting to a file you now have the option to output to a json format. This output produces the same format as the Power BI ",(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/rest/api/power-bi/datasets/execute-queries",children:"ExecuteQueries"})," REST API\n",(0,t.jsx)(i.img,{src:n(13219).A+"",width:"970",height:"653"})]}),"\n",(0,t.jsx)(i.h3,{id:"custom-csv-encoding",children:"Custom CSV encoding"}),"\n",(0,t.jsxs)(i.p,{children:["When using the custom csv format you can now choose between utf-8 or unicode encoding\n",(0,t.jsx)(i.img,{src:n(85195).A+"",width:"860",height:"608"})]}),"\n",(0,t.jsx)(i.h3,{id:"formatted-file-output",children:"Formatted File output"}),"\n",(0,t.jsx)(i.p,{children:'There is now a "Formatted File" output option. The standard "File" output is the recommended one as it outputs your data with full precision, decimal numbers are output without any rounding and datetimes are output using a standard ISO 8601 format. However if you require a csv output which uses the same formatting that gets applied to the grid output then this new "Formatted File" option gives you that. Just be aware that if you are transferring these files between machines that you may have issues with datetime data if your regional settings are different between the machines.'}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(92411).A+"",width:"243",height:"402"})}),"\n",(0,t.jsx)(i.h2,{id:"fe-benchmarks-preview",children:"FE Benchmarks (Preview)"}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsx)(i.p,{children:"This feature is not visible by default you need to turn it on in the Options - Preview settings"})}),"\n",(0,t.jsx)(i.p,{children:"The FE Benchmark feature runs a standard formula engine only query against the current data source. It produces a FE Benchmark number that should help in estimating the expected performance in production."}),"\n",(0,t.jsx)(i.p,{children:"If your laptop runs a query in 2 seconds and it's index is 200, then if you run the same query on a server that has an index 100 we should expect roughly 4 seconds ie. the query will take twice as long since the benchmark score was half."}),"\n",(0,t.jsx)(i.p,{children:"This option is currently in preview so that we can start testing this across a wider range of real world scenarios. There are a lot of other factors that can influence query performance such concurrent load, CPU cache size and type and the memory and memory bus speeds to name a few. So we may need to look at adjusting this as we gather more real information."}),"\n",(0,t.jsx)(i.h2,{id:"",children:(0,t.jsx)(i.img,{src:n(10957).A+"",width:"1265",height:"921"})}),"\n",(0,t.jsx)(i.h2,{id:"all-new-features--fixes",children:"All new Features & Fixes"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"Below is the full list of all the new features and fixes."})}),"\n",(0,t.jsx)(i.h3,{id:"new-features",children:"New Features"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"861"})," adding SHA256 hashes for downloads"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"866"})," added copy with/without headers option for query results"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"973"})," Added Duplicate option to tab right-click menu"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"1016"})," open a .dax file by dragging it onto DAX Studio"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"1031"})," adding encoding option for custom CSV output"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"1051"})," added Formatted File as an output option"]}),"\n",(0,t.jsx)(i.li,{children:"added json option when outputting to a file"}),"\n",(0,t.jsx)(i.li,{children:"FE Benchmarks"}),"\n",(0,t.jsx)(i.li,{children:"Updated Timeline/Waterfall visualization in Server Timings"}),"\n",(0,t.jsx)(i.li,{children:"xmSQL / DirectQuery formatting improvements"}),"\n",(0,t.jsx)(i.li,{children:"moved preview and vertipaq analyzer settings from the advanced to the standard options page"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"fixes",children:"Fixes"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"1062"})," fix vertipaq analyzer showing >unknown< in summary pane for AAS / PBIP"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"1060"})," enabling Shift+Enter to be used as a custom hotkey"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"1052"})," disabled re-ordering of columns in vertipaq analyzer"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"1036"})," fix location of desktop shortcut file for Current User installs"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"1030"})," QueryBuilder measures missing table references when loading from file"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"1029"})," QueryBuilder IN filters not loading from file correctly"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"1026"})," improving VertiPaq Analyzer tooltips"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"1025"})," fixing spelling / capitalization errors"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"968"})," Tool Window incorrectly docking"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"967"})," permission error on non-admin install"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"979"})," improved color contrast in dark mode"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"994"})," adjusted measure icon position when vertical scrollbars are always displayed"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"997"})," adding support for measure filters in Query Builder"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"999"})," fixed display of columns with open parenthesis as first character"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(a.A,{id:"951"})," moved Swap Delimiters / Debug Commas to advanced"]}),"\n",(0,t.jsx)(i.li,{children:"fixed metadata display for multi-dimensional models"}),"\n",(0,t.jsx)(i.li,{children:"skip showing crash dialog if app is shutting down"}),"\n",(0,t.jsx)(i.li,{children:"Improved generation of Define Measure and Define Dependent Measures"}),"\n",(0,t.jsx)(i.li,{children:"Fixed crash in BindableFocusBehaviour and AutomationPeer"}),"\n",(0,t.jsx)(i.li,{children:"fixed cell alignment in View Metrics Columns screen"}),"\n",(0,t.jsx)(i.li,{children:"Fixed crash on update flag click event"}),"\n",(0,t.jsx)(i.li,{children:"Fixed crash when browsing for a folder during CSV data export"}),"\n",(0,t.jsx)(i.li,{children:"improvements for FE duration calculation"}),"\n",(0,t.jsx)(i.li,{children:"added default file name when exporting bim from vpax"}),"\n",(0,t.jsx)(i.li,{children:"fixed the hidden table icon"}),"\n",(0,t.jsx)(i.li,{children:"fixed Excel tracing"}),"\n",(0,t.jsx)(i.li,{children:"fixed invalid button states after failed connection attempt"}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},21398:(e,i,n)=>{n.d(i,{A:()=>a});n(96540);var t=n(28774),s=n(74848);function a(e){const i=`https://github.com/daxstudio/daxstudio/issues/${e.id}`;return(0,s.jsxs)(t.A,{to:i,children:["#",e.id]})}},85195:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/custom_encoding-7eb37a016e95428d34890ec6dacbbdfe.png"},10957:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/fe_benchmark-e5e0bb6c5919027dbd61efd9cf69635b.png"},92411:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/formatted_file_output-82ea0a3efb8559204bfe38e2bc70323f.png"},13219:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/results_to_json-cf319badb5630ed6e3254ad54a0dd605.png"},79995:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/timeline-b080066d769fb12e96e775d676b33a68.png"},21809:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/xmsql_formatting-69c8dabbc71daf00884880a0505452ec.png"},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>r});var t=n(96540);const s={},a=t.createContext(s);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);