"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[3157],{12756:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var n=s(74848),d=s(28453);const r={title:"EXPORT SQL command"},l=void 0,a={id:"features/command-line/commands/export-sql-command",title:"EXPORT SQL command",description:"This command runs the Export Data function and sends the output to a SQL database with one sql table per table in the source tabular model.",source:"@site/docs/features/command-line/commands/export-sql-command.md",sourceDirName:"features/command-line/commands",slug:"/features/command-line/commands/export-sql-command",permalink:"/docs/features/command-line/commands/export-sql-command",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"EXPORT SQL command"},sidebar:"tutorialSidebar",previous:{title:"EXPORT CSV command",permalink:"/docs/features/command-line/commands/export-csv-command"},next:{title:"VPAX command",permalink:"/docs/features/command-line/commands/vpax-command"}},c={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Options",id:"options",level:2},{value:"-t --tables Option",id:"-t---tables-option",level:3},{value:"Examples",id:"examples",level:2}];function i(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This command runs the Export Data function and sends the output to a SQL database with one sql table per table in the source tabular model."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"DSCMD EXPORT SQL <OutputFolder> [OPTIONS]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"<SqlConnectionString>"}),(0,n.jsx)(t.td,{children:"The connection string for the target SQL Server where the data is to be written"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Option"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-h, --help"}),(0,n.jsx)(t.td,{children:"displays the help for the EXPORT SQL command"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-s, --server <SERVER>"}),(0,n.jsx)(t.td,{children:"the name of the server to connect to"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-d, --database <DATABASE>"}),(0,n.jsx)(t.td,{children:"The name of the tabular database to export from"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-u, --userid <USERID>"}),(0,n.jsxs)(t.td,{children:["The username to use for AzureAD authentication (see ",(0,n.jsx)(t.a,{href:"../../authentication",children:"Authentication"})," for more details)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-p, --password <PASSWORD>"}),(0,n.jsxs)(t.td,{children:["The password to use for AzureAD authentication (see ",(0,n.jsx)(t.a,{href:"../../authentication",children:"Authentication"})," for more details)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-c, --connectionstring <CONNECTIONSTRING>"}),(0,n.jsx)(t.td,{children:"The connection string for the data source"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-t, --tables <TABLES>"}),(0,n.jsx)(t.td,{children:"A list of tables to be exported, if this option is not specified all the tables in the model are exported"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-e, --schema <SCHEMA>"}),(0,n.jsx)(t.td,{children:"The schema in which the destination tables belong (defaults to 'dbo')"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-r, --recreate-tables"}),(0,n.jsx)(t.td,{children:"Will drop and re-create the target tables"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"-t---tables-option",children:"-t --tables Option"}),"\n",(0,n.jsx)(t.p,{children:"This option is a comma separate list of table names"}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["If you need to include tables with spaces the whole parameter needs to be quoted eg. ",(0,n.jsx)(t.code,{children:'-t "Table 1,Table 2"'})]}),(0,n.jsxs)(t.p,{children:["If you need to include ",(0,n.jsx)(t.code,{children:'"'})," characters these need to be escaped with a leading backslash eg. ",(0,n.jsx)(t.code,{children:'-t "My \\"Table\\" 1,Table2'})]}),(0,n.jsxs)(t.p,{children:["If you need to include ",(0,n.jsx)(t.code,{children:","})," or ",(0,n.jsx)(t.code,{children:"\\"})," characters these need to be doubled up eg. ",(0,n.jsx)(t.code,{children:'-t "My \\"Table\\" \\\\ 1,Table2'})]})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Table Name Scenario"}),(0,n.jsx)(t.th,{children:"Example"}),(0,n.jsx)(t.th,{children:"Table Names"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"No Spaces"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"-t Table1,Table2,Table3"})}),(0,n.jsxs)(t.td,{children:["Table1",(0,n.jsx)("br",{}),"Table2",(0,n.jsx)("br",{}),"Table3"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Including Spaces"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'-t "Table 1,Table 2,Table3"'})}),(0,n.jsxs)(t.td,{children:["Table 1",(0,n.jsx)("br",{}),"Table 2",(0,n.jsx)("br",{}),"Table3"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Including Quotes"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'-t "Table1,My \\"Table\\" 2,Table3"'})}),(0,n.jsxs)(t.td,{children:["Table1",(0,n.jsx)("br",{}),'My "Table" 2',(0,n.jsx)("br",{}),"Table3"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Including Commas"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"-t Table1,My,,Table2,Table3"})}),(0,n.jsxs)(t.td,{children:["Table1",(0,n.jsx)("br",{}),"My,Table2",(0,n.jsx)("br",{}),"Table3"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Including Quotes,Commas & Spaces"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'-t "Table1,My,,\\"Table\\" 2,Table3"'})}),(0,n.jsxs)(t.td,{children:["Table1",(0,n.jsx)("br",{}),'My,"Table" 2',(0,n.jsx)("br",{}),"Table3"]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["The following example exports all of the tables from the ",(0,n.jsx)(t.code,{children:"Adventure Works"})," model"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'dscmd.exe export sql "Data Source=localhost\\sql;Initial Catalog=DataDump;Integrated Security=SSPI" -s localhost\\tabular -d "Adventure Works"'})}),"\n",(0,n.jsxs)(t.p,{children:["The following example exports only exports the ",(0,n.jsx)(t.code,{children:"Product"}),", ",(0,n.jsx)(t.code,{children:"Product Category"})," and ",(0,n.jsx)(t.code,{children:"Reseller Sales"})," tables from the ",(0,n.jsx)(t.code,{children:"Adventure Works"})," model"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'dscmd.exe export sql "Data Source=localhost\\sql;Initial Catalog=DataDump;Integrated Security=SSPI" -s localhost\\tabular -d "Adventure Works" -t Product "Product Category" "Reseller Sales"'})})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>a});var n=s(96540);const d={},r=n.createContext(d);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);