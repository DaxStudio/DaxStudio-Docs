"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[8249],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(a),c=r,f=s["".concat(m,".").concat(c)]||s[c]||d[c]||o;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},59469:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"CSV command"},l=void 0,i={unversionedId:"features/command-line/commands/csv-command",id:"features/command-line/commands/csv-command",title:"CSV command",description:"This command will output a csv file based on the results of a DAX query",source:"@site/docs/features/command-line/commands/csv-command.md",sourceDirName:"features/command-line/commands",slug:"/features/command-line/commands/csv-command",permalink:"/docs/features/command-line/commands/csv-command",draft:!1,tags:[],version:"current",frontMatter:{title:"CSV command"},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/docs/features/command-line/commands"},next:{title:"EXPORT CSV command",permalink:"/docs/features/command-line/commands/export-csv-command"}},m={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Options",id:"options",level:2},{value:"-m --parameter Option",id:"-m---parameter-option",level:3},{value:"Examples",id:"examples",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This command will output a csv file based on the results of a DAX query"),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DSCMD CSV <OutputFile> [OPTIONS]\n")),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<","OutputFile>"),(0,r.kt)("td",{parentName:"tr",align:null},"The path and name of the file to which the CSV data will be written")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-h, --help"),(0,r.kt)("td",{parentName:"tr",align:null},"displays the help for the CSV command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-s, --server ","<","SERVER>"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of the server to connect to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-d, --database ","<","DATABASE>"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the tabular database to export from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-u, --userid ","<","USERID>"),(0,r.kt)("td",{parentName:"tr",align:null},"The username to use for authentication (see ",(0,r.kt)("a",{parentName:"td",href:"../../authentication"},"Authentication")," for more details)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-p, --password ","<","PASSWORD>"),(0,r.kt)("td",{parentName:"tr",align:null},"The password to use for authentication (see ",(0,r.kt)("a",{parentName:"td",href:"../../authentication"},"Authentication")," for more details)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-c, --connectionstring ","<","CONNECTIONSTRING>"),(0,r.kt)("td",{parentName:"tr",align:null},"The connection string for the data source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-f, --file ","<","FILE>"),(0,r.kt)("td",{parentName:"tr",align:null},"A file containing a DAX query to be executed. Could be a text file or .dax or .daxx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-q, --query ","<","QUERY>"),(0,r.kt)("td",{parentName:"tr",align:null},"A string with the DAX query to be executed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-t, --filetype ","<","VALUE>"),(0,r.kt)("td",{parentName:"tr",align:null},"Can be one of the following values { UTF8CSV, UNICODECSV, JSON, TAB } if omitted the file extension is used ",(0,r.kt)("ul",null,(0,r.kt)("li",null,".csv - UFT-8 csv file is generated"),(0,r.kt)("li",null,".txt - tab delimited file is generated"),(0,r.kt)("li",null,".json - a json file is generated ")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-m, --parameter ","<","PARAMETER=VALUE>"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter values to be passed into the query (see ",(0,r.kt)("a",{parentName:"td",href:"#-m---parameter-option"},"-m --parameter option")," below)")))),(0,r.kt)("h3",{id:"-m---parameter-option"},"-m --parameter Option"),(0,r.kt)("p",null,"If you have a DAX query with parameters you can pass these in using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-m, -parameter")," option, if you have multiple parameters in your query you can provide multiple parameter values"),(0,r.kt)("p",null,"In the following example the query has 2 parameters ",(0,r.kt)("strong",{parentName:"p"},"@myColor")," and ",(0,r.kt)("strong",{parentName:"p"},"@myCategory")," which are passed in using 2 ",(0,r.kt)("inlineCode",{parentName:"p"},"-m")," options"),(0,r.kt)("p",null,"eg."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dscmd csv c:\\temp\\myquery.csv -s localhost\\tab19 -d \"Adventure Works DW\"  ^\n  -m myColor=Red ^\n  -m myCategory=Bikes ^\n  -q \"EVALUATE FILTER('product', 'product[Color]=@myColor && 'product'[Category]=@myCategory)\"\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The following example exports to a file called myquery.csv in the c:\\temp folder and connects as the user running the command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'dscmd csv c:\\temp\\myquery.csv -s localhost\\tab19 -d "Adventure Works DW" -q "EVALUATE \'product\'"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'dscmd csv c:\\temp\\myquery.csv -c "Data Source=localhost\\tab19;initial catalog=Adventure Works DW" -q "EVALUATE \'product\'"\n')))}d.isMDXComponent=!0}}]);