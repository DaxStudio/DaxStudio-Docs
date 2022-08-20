"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[7091],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8645:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"DAX Studio Ribbon"},i=void 0,l={unversionedId:"features/ribbon-control",id:"features/ribbon-control",title:"DAX Studio Ribbon",description:"The ribbon in DAX Studio is split into a number of functional groups",source:"@site/docs/features/ribbon-control.md",sourceDirName:"features",slug:"/features/ribbon-control",permalink:"/docs/features/ribbon-control",draft:!1,editUrl:"https://github.com/daxstudio/daxstudio-docs/tree/main/packages/create-docusaurus/templates/shared/docs/features/ribbon-control.md",tags:[],version:"current",frontMatter:{title:"DAX Studio Ribbon"},sidebar:"tutorialSidebar",previous:{title:"Query Editor",permalink:"/docs/features/query-editor"},next:{title:"Run Benchmark",permalink:"/docs/features/run-benchmark"}},s={},u=[{value:"Query",id:"query",level:2},{value:"Edit",id:"edit",level:2},{value:"Format",id:"format",level:2},{value:"Find",id:"find",level:2},{value:"Traces",id:"traces",level:2},{value:"Server Timings",id:"server-timings",level:2},{value:"Connect",id:"connect",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ribbon in DAX Studio is split into a number of functional groups"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1109).Z,width:"1144",height:"143"})),(0,a.kt)("h2",{id:"query"},"Query"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Run")," - this button can be set to 2 modes, one that simply runs the query and another that clears the cache and runs the query as a single action (useful for performance tuning)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cancel")," - this buttion will send a cancel command to the data source for a running query"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Clear Cache")," - this command is only available if you have admin rights on the data source and will sent a ClearCache command to the data source for the current database"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Output")," - this option lets you choose one of the ",(0,a.kt)("a",{parentName:"li",href:"../output-modes"},"output modes"))),(0,a.kt)("h2",{id:"edit"},"Edit"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cut / Copy / Paste")," - buttons for standard edit operations, the standard hotkeys for these commands also work"),(0,a.kt)("li",{parentName:"ul"},"Undo / Redo -")),(0,a.kt)("h2",{id:"format"},"Format"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Format Query")," - this button will send the contents of the query editor (or the current selection) to ",(0,a.kt)("a",{parentName:"li",href:"https://DaxFormatter.com"},"https://daxformatter.com")," for ",(0,a.kt)("a",{parentName:"li",href:"../daxformatter-support"},"formatting")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"To Upper")," - will convert the current selection to uppercase"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"To Lower")," - will convert the current selection to lowercase"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Swap Delimiters")," - will convert the current selection between delimiter styles for lists & decimals"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Comment")," - will prefix the lines of the current selection with comment markers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Uncomment")," - will remove the comment prefixes from the currently selected lines"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Merge XML")," - will look for a parameters XML block and merge the values into the current query text")),(0,a.kt)("h2",{id:"find"},"Find"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Find")," - will ",(0,a.kt)("a",{parentName:"li",href:"/docs/features/find-replace"},"find")," the specified text in the query"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Replace")," - will allow ",(0,a.kt)("a",{parentName:"li",href:"/docs/features/find-replace"},"replacing")," of specified text values")),(0,a.kt)("h2",{id:"traces"},"Traces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Query Plan")," - turns on the display of query plan information (requires admin rights on the data source)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Server Timings")," - turns on the display of detailed timing information (requires admin rights on the data source)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"All Queries")," - traces all queries against the given data source. This lets you capture queries from other client tools like Excel or Power BI in order to assist in tuning them or learning about how a particular client tool constructs it's queries")),(0,a.kt)("h2",{id:"server-timings"},"Server Timings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scan")," - displays information on storage engine scan events"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cache")," - displays information on storage engine cache events"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Internal")," - displays information on storage engine internal events "),(0,a.kt)("li",{parentName:"ul"},'"Right Layout/Bottom Layout* - Controls where the timing details pane appears')),(0,a.kt)("h2",{id:"connect"},"Connect"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Connect")," - opens a ",(0,a.kt)("a",{parentName:"li",href:"/docs/features/connection-dialog"},"connection dialog")," so that the user can change the connection for the current query window"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Refresh Metadata")," - will update the metadata of the currently selected model")))}p.isMDXComponent=!0},1109:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Ribbon-Control_HomeRibbon-f0a455bf4577179695ccb1b834fd355f.png"}}]);