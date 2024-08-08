"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[9490],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||l;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},82389:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"EXPORT CSV command"},o=void 0,i={unversionedId:"features/command-line/commands/export-csv-command",id:"features/command-line/commands/export-csv-command",title:"EXPORT CSV command",description:"This command runs the Export Data function and sends the output to a folder with one csv file per table.",source:"@site/docs/features/command-line/commands/export-csv-command.md",sourceDirName:"features/command-line/commands",slug:"/features/command-line/commands/export-csv-command",permalink:"/docs/features/command-line/commands/export-csv-command",draft:!1,tags:[],version:"current",frontMatter:{title:"EXPORT CSV command"},sidebar:"tutorialSidebar",previous:{title:"CSV command",permalink:"/docs/features/command-line/commands/csv-command"},next:{title:"EXPORT SQL command",permalink:"/docs/features/command-line/commands/export-sql-command"}},p={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Options",id:"options",level:2},{value:"-t --tables Option",id:"-t---tables-option",level:2},{value:"Examples",id:"examples",level:2}],m={toc:d},u="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This command runs the Export Data function and sends the output to a folder with one csv file per table."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DSCMD EXPORT CSV <OutputFolder> [OPTIONS]\n")),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<","OutputFolder>"),(0,r.kt)("td",{parentName:"tr",align:null},"The path and name of the folder to which the CSV data will be written")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-h, --help"),(0,r.kt)("td",{parentName:"tr",align:null},"displays the help for the EXPORT CSV command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-s, --server ","<","SERVER>"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of the server to connect to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-d, --database ","<","DATABASE>"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the tabular database to export from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-u, --userid ","<","USERID>"),(0,r.kt)("td",{parentName:"tr",align:null},"The username to use for authentication (see ",(0,r.kt)("a",{parentName:"td",href:"../../authentication"},"Authentication")," for more details)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-p, --password ","<","PASSWORD>"),(0,r.kt)("td",{parentName:"tr",align:null},"The password to use for authentication (see ",(0,r.kt)("a",{parentName:"td",href:"../../authentication"},"Authentication")," for more details)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-c, --connectionstring ","<","CONNECTIONSTRING>"),(0,r.kt)("td",{parentName:"tr",align:null},"The connection string for the data source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-q, --query ","<","QUERY>"),(0,r.kt)("td",{parentName:"tr",align:null},"A string with the DAX query to be executed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-t, --tables ","<","TABLES>"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of tables to be exported (defaults to all tables)")))),(0,r.kt)("h2",{id:"-t---tables-option"},"-t --tables Option"),(0,r.kt)("p",null,"This option is a comma separate list of table names"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you need to include tables with spaces the whole parameter needs to be quoted eg. ",(0,r.kt)("inlineCode",{parentName:"p"},'-t "Table 1,Table 2"')),(0,r.kt)("p",{parentName:"admonition"},"If you need to include ",(0,r.kt)("inlineCode",{parentName:"p"},'"')," characters these need to be escaped with a leading backslash eg. ",(0,r.kt)("inlineCode",{parentName:"p"},'-t "My \\"Table\\" 1,Table2')),(0,r.kt)("p",{parentName:"admonition"},"If you need to include ",(0,r.kt)("inlineCode",{parentName:"p"},",")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"\\")," characters these need to be doubled up eg. ",(0,r.kt)("inlineCode",{parentName:"p"},'-t "My \\"Table\\" \\\\ 1,Table2'))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Table Name Scenario"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Table Names"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"No Spaces"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-t Table1,Table2,Table3")),(0,r.kt)("td",{parentName:"tr",align:null},"Table1",(0,r.kt)("br",null),"Table2",(0,r.kt)("br",null),"Table3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Including Spaces"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'-t "Table 1,Table 2,Table3"')),(0,r.kt)("td",{parentName:"tr",align:null},"Table 1",(0,r.kt)("br",null),"Table 2",(0,r.kt)("br",null),"Table3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Including Quotes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'-t "Table1,My \\"Table\\" 2,Table3"')),(0,r.kt)("td",{parentName:"tr",align:null},"Table1",(0,r.kt)("br",null),'My "Table" 2',(0,r.kt)("br",null),"Table3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Including Commas"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-t Table1,My,,Table2,Table3")),(0,r.kt)("td",{parentName:"tr",align:null},"Table1",(0,r.kt)("br",null),"My,Table2",(0,r.kt)("br",null),"Table3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Including Quotes,Commas & Spaces"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'-t "Table1,My,,\\"Table\\" 2,Table3"')),(0,r.kt)("td",{parentName:"tr",align:null},"Table1",(0,r.kt)("br",null),'My,"Table" 2',(0,r.kt)("br",null),"Table3")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The following example exports all of the tables from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Adventure Works")," model to the ",(0,r.kt)("inlineCode",{parentName:"p"},"c:\\temp\\export")," folder as .csv files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'dscmd.exe export csv c:\\temp\\export -s localhost\\tabular -d "Adventure Works"\n')),(0,r.kt)("p",null,"The following example exports only exports the ",(0,r.kt)("inlineCode",{parentName:"p"},"Product"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Product Category")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Reseller Sales")," tables from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Adventure Works")," model to the ",(0,r.kt)("inlineCode",{parentName:"p"},"c:\\temp\\export")," folder as .csv files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'dscmd.exe export csv c:\\temp\\export -s localhost\\tabular -d "Adventure Works" -t Product "Product Category" "Reseller Sales"\n')))}s.isMDXComponent=!0}}]);