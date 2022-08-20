"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[8261],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(a),h=r,k=m["".concat(s,".").concat(h)]||m[h]||d[h]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},933:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={title:"Options Window"},i=void 0,o={unversionedId:"features/options-window",id:"features/options-window",title:"Options Window",description:"DAX Studio offers a number of options which users can use to customize their experience.",source:"@site/docs/features/options-window.md",sourceDirName:"features",slug:"/features/options-window",permalink:"/docs/features/options-window",draft:!1,editUrl:"https://github.com/daxstudio/daxstudio-docs/tree/main/packages/create-docusaurus/templates/shared/docs/features/options-window.md",tags:[],version:"current",frontMatter:{title:"Options Window"},sidebar:"tutorialSidebar",previous:{title:"Version notifications",permalink:"/docs/features/new-version-notification"},next:{title:"Output Modes",permalink:"/docs/features/output-modes"}},s={},p=[{value:"Editor",id:"editor",level:2},{value:"Proxy",id:"proxy",level:2},{value:"Privacy",id:"privacy",level:2},{value:"Query History",id:"query-history",level:2},{value:"Server Timings",id:"server-timings",level:2},{value:"Timeouts",id:"timeouts",level:2},{value:"Defaults",id:"defaults",level:2},{value:"Trace",id:"trace",level:2},{value:"Results",id:"results",level:2},{value:"Metadata Pane",id:"metadata-pane",level:2},{value:"Tooltips",id:"tooltips",level:3},{value:"Automatic Metadata Refresh",id:"automatic-metadata-refresh",level:3},{value:"Hidden Objects",id:"hidden-objects",level:3},{value:"Sorting",id:"sorting",level:3},{value:"DAX Formatter",id:"dax-formatter",level:2},{value:"Custom Export Format",id:"custom-export-format",level:2}],u={toc:p};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"DAX Studio offers a number of options which users can use to customize their experience."),(0,r.kt)("h2",{id:"editor"},"Editor"),(0,r.kt)("p",null,"These settings control the display and behaviour of the main editor window"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Setting")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Font Family"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the font used by the Query Editor pane"),(0,r.kt)("td",{parentName:"tr",align:null},"Lucida Console")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Font Size"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the default font size (in points)"),(0,r.kt)("td",{parentName:"tr",align:null},"11pt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show Line Numbers"),(0,r.kt)("td",{parentName:"tr",align:null},"controls whether line numbers are displayed"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable Intellisense"),(0,r.kt)("td",{parentName:"tr",align:null},"whether to display Intellisense options while typing in the query editor"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keep Metadata Search Open"),(0,r.kt)("td",{parentName:"tr",align:null},"if this is true the search box in the metadata pane will always be displayed otherwise this option collapses to a small magnifying glass option in the upper right corner of the metadata pane"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Convert Tabs to Spaces"),(0,r.kt)("td",{parentName:"tr",align:null},"if this setting is TRUE hitting the tab key will insert spaces instead of a tab character. The number of spaces inserted is controlled by the ",(0,r.kt)("strong",{parentName:"td"},"Indentation Size")," setting."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Indentation Size"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the number of spaces to insert if ",(0,r.kt)("strong",{parentName:"td"},"Convert tabs to spaces")," is set to TRUE."),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Intellisense Width"),(0,r.kt)("td",{parentName:"tr",align:null},"this option can be used to increase the default size of the intellisense dropdown window"),(0,r.kt)("td",{parentName:"tr",align:null},"100%")))),(0,r.kt)("h2",{id:"proxy"},"Proxy"),(0,r.kt)("p",null,"These settings control if/how DAX Studio will use a Proxy server to connect to online services (like DaxFormatter.com and crash reporting)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Setting")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use System Proxy"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to true DAX Studio will attempt to use the Proxy settings from the operating system"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Proxy Address"),(0,r.kt)("td",{parentName:"tr",align:null},"The url for your proxy server"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(blank)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Proxy User"),(0,r.kt)("td",{parentName:"tr",align:null},"The username for accessing the Proxy server"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(blank)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Proxy Password"),(0,r.kt)("td",{parentName:"tr",align:null},"The password for accessing the Proxy server"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(blank)"))))),(0,r.kt)("h2",{id:"privacy"},"Privacy"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Setting")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block All Internet Access"),(0,r.kt)("td",{parentName:"tr",align:null},"Stops DAX Studio from all external access. This option can only be set by an administrator during an 'All Users' install and overrides all the other options below. (and they will show up as disabled when this option has been set)"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block Version Checks"),(0,r.kt)("td",{parentName:"tr",align:null},"Stops DAX Studio from checking for and notifying of available updates"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block Crash Reporting"),(0,r.kt)("td",{parentName:"tr",align:null},"Stops DAX Studio from sending crash reports to the developer. There is a small chance that the screenshot of the crash could include personal information. Although you can untick the option to include the screenshot in the report if this is the case."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block External Services"),(0,r.kt)("td",{parentName:"tr",align:null},"Stops DAX Studio from accessing external services (such as DaxFormatter.com). We never send any data externally, but there is a small chance that query text might contain personal information if you were writing queries that filtered for specific information like Customer Names"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h2",{id:"query-history"},"Query History"),(0,r.kt)("p",null,"DAX Studio keeps a log of recently executed commands (both successful and failed commands)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Setting")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"History Items to keep"),(0,r.kt)("td",{parentName:"tr",align:null},"by default DAX Studio keeps a limited number of recent queries (",(0,r.kt)("em",{parentName:"td"},"Note: setting this number too high can affect the startup time for DAX Studio"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"200")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show Trace Timings"),(0,r.kt)("td",{parentName:"tr",align:null},"This setting controls whether any trace timings are also capturd in the query log"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h2",{id:"server-timings"},"Server Timings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Setting")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Highlight Vertipaq Callbacks"),(0,r.kt)("td",{parentName:"tr",align:null},"Highlight xmSQL queries containing callbacks that don't store the result in the storage engine cache."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Replace column ID with name"),(0,r.kt)("td",{parentName:"tr",align:null},"Replace xmSQL column ID with corresponding column name in data model."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Simplify SE query syntax"),(0,r.kt)("td",{parentName:"tr",align:null},"Remove internal IDs and verbose syntax from xmSQL queries."),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h2",{id:"timeouts"},"Timeouts"),(0,r.kt)("p",null,"These settings control the length of various timeouts for potentially long running operations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Setting")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Server Timings End Event Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"The trace events in the tabular engine are raised on a low priority background thread and occasionally if the server is very busy some events can be discarded. This setting controls how long DAX Studio will wait for a queries final QueryEnd event before it gives up and logs a warning. ",(0,r.kt)("em",{parentName:"td"},"For high latency connections (such as Azure AS and the Power BI XMLA endpoint) you may need to increase this setting.")),(0,r.kt)("td",{parentName:"tr",align:null},"15 sec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DAX Formatter Request Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"DAX Studio sends a background request ",(0,r.kt)("a",{parentName:"td",href:"https://daxformatter.com"},"https://daxformatter.com")," this setting controls how long we wait before we consider the request as failed and log an error"),(0,r.kt)("td",{parentName:"tr",align:null},"10 sec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Trace Startup Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},'When DAX Studio starts a trace it periodically "pings" the server with an empty command. It then waits until the trace captures one of these requests before it considers the trace to be fully active. This setting controls how long DAX Studio will wait to see one of these "ping" requests before it stops waiting and logs and error.  ',(0,r.kt)("em",{parentName:"td"},"For high latency connections (such as Azure AS and the Power BI XMLA endpoint) you may need to increase this setting.")),(0,r.kt)("td",{parentName:"tr",align:null},"30 sec")))),(0,r.kt)("h2",{id:"defaults"},"Defaults"),(0,r.kt)("p",null,"This setting controls the default Separator style used by DAX Studio."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Setting")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Separators"),(0,r.kt)("td",{parentName:"tr",align:null},"This setting can either be set to US/UK (commas as the list separator character) style or Other (semi-colons as the list separator character)"),(0,r.kt)("td",{parentName:"tr",align:null},"US/UK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Run Style"),(0,r.kt)("td",{parentName:"tr",align:null},"checking the ",(0,r.kt)("strong",{parentName:"td"},"Set 'Clear Cache and Run' as the default")," option will change this to the default behaviour for the run button next time DAX Studio is started"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("h2",{id:"trace"},"Trace"),(0,r.kt)("p",null,"This setting controls the behavours of the various tracing features."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Setting")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Legacy DirectQuery Trace"),(0,r.kt)("td",{parentName:"tr",align:null},"This setting controls whether tracing of DirectQuery Events is enabled for connections to servers with a version number earlier then 15.0 (SSAS 2017). For older servers the DirectQuery events do not allow per session filtering on the server so we have capture events from all sessions and apply filtering in DAX Studio. This places much more load on both the client and server which is why this option is off by default. If you need to enable it we recommend keeping any traces running for as short a time as possible"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h2",{id:"results"},"Results"),(0,r.kt)("p",null,"These settings change settings for the Results window"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Setting")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Font Family"),(0,r.kt)("td",{parentName:"tr",align:null},"This sets the font for the results pane"),(0,r.kt)("td",{parentName:"tr",align:null},"Segoe UI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Font Size"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the default size for the results font"),(0,r.kt)("td",{parentName:"tr",align:null},"11pt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scale Font with Editor"),(0,r.kt)("td",{parentName:"tr",align:null},"When this option is selected increasing the zoom factor on the editor will also increase the zoom for the results pane"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Exclude Headers when Copying data"),(0,r.kt)("td",{parentName:"tr",align:null},"This setting controls whether column headers are included when copying data from the results pane"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Automatic Format Results"),(0,r.kt)("td",{parentName:"tr",align:null},"This setting controls whether the results pane attempts to automatically format numbers and percentages"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h2",{id:"metadata-pane"},"Metadata Pane"),(0,r.kt)("h3",{id:"tooltips"},"Tooltips"),(0,r.kt)("p",null,"This section controls what additional information is displayed in the tooltips for various metadata objects"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Setting")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show Basic Statistics"),(0,r.kt)("td",{parentName:"tr",align:null},"This will show statistics like min/max/distinct values for a column"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show Sample Data"),(0,r.kt)("td",{parentName:"tr",align:null},"This will show a sample of 10 values from a given column"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h3",{id:"automatic-metadata-refresh"},"Automatic Metadata Refresh"),(0,r.kt)("p",null,"These setting control the bahaviour of the automatic metadata refresh"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Setting")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Local Connections"),(0,r.kt)("td",{parentName:"tr",align:null},"For any connections to localhost (eg. PowerPivot, Power BI Desktop, SSDT)"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Network Connections"),(0,r.kt)("td",{parentName:"tr",align:null},"For any connections to SSAS"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cloud Connections"),(0,r.kt)("td",{parentName:"tr",align:null},"For any connections to data sources that start with asazure:// or powerbi://"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h3",{id:"hidden-objects"},"Hidden Objects"),(0,r.kt)("p",null,"This section controls the visibilty of hidden objects in the Metadata pane."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Setting")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show Hidden columns, tables and Measures"),(0,r.kt)("td",{parentName:"tr",align:null},"This setting allows for the showing of objects that are hidden in the normal report views"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h3",{id:"sorting"},"Sorting"),(0,r.kt)("p",null,"This section controls the sorting of objects in the Metadata pane."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Setting")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sort Folders First in metadata pane"),(0,r.kt)("td",{parentName:"tr",align:null},"This setting will force folders to be sorted first in the metadata pane"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h2",{id:"dax-formatter"},"DAX Formatter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Setting")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default Format Style"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies whether DAX Formatter should favour Long or Short lines"),(0,r.kt)("td",{parentName:"tr",align:null},"Long Line")))),(0,r.kt)("h2",{id:"custom-export-format"},"Custom Export Format"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Setting")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CSV Delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"This controls the delimiter character used by the custom export format option"),(0,r.kt)("td",{parentName:"tr",align:null},"Culture Default Delimiter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Quote String Fields"),(0,r.kt)("td",{parentName:"tr",align:null},"This specifies whether to always quote all string fields or whether to only insert quotes if required (quotes are required if the field value includes line breaks or the delimiter character)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))))}d.isMDXComponent=!0}}]);