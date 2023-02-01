"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[9974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,v=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return n?o.createElement(v,a(a({ref:t},d),{},{components:n})):o.createElement(v,a({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={title:"Connection Dialog"},a=void 0,s={unversionedId:"features/connection-dialog",id:"features/connection-dialog",title:"Connection Dialog",description:"The connection dialog in DAX Studio provides the ability to connect to:",source:"@site/docs/features/connection-dialog.md",sourceDirName:"features",slug:"/features/connection-dialog",permalink:"/docs/features/connection-dialog",draft:!1,tags:[],version:"current",frontMatter:{title:"Connection Dialog"},sidebar:"tutorialSidebar",previous:{title:"Bracket Matching",permalink:"/docs/features/bracket-matching"},next:{title:"DaxFormatter.com Support",permalink:"/docs/features/daxformatter-support"}},c={},l=[{value:"Connect to PowerPivot",id:"connect-to-powerpivot",level:2},{value:"Connect to Power BI Desktop / SSDT Integrated Workspaces",id:"connect-to-power-bi-desktop--ssdt-integrated-workspaces",level:2},{value:"Connect to SQL Server Analysis Services servers",id:"connect-to-sql-server-analysis-services-servers",level:2},{value:"Advanced Options",id:"advanced-options",level:2}],d={toc:l};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The connection dialog in DAX Studio provides the ability to connect to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PowerPivot ",(0,r.kt)("em",{parentName:"li"},"(only available when starting DAX Studio from the Addins ribbon in Excel)")),(0,r.kt)("li",{parentName:"ul"},"Power BI Desktop / SSDT Integrated Workspaces"),(0,r.kt)("li",{parentName:"ul"},"SQL Server Analysis Services servers (running Tabular or Multi-Dimensional)"),(0,r.kt)("li",{parentName:"ul"},"Azure Analysis Services\nThe dialog box only presents connection options that are currently valid.")),(0,r.kt)("h2",{id:"connect-to-powerpivot"},"Connect to PowerPivot"),(0,r.kt)("p",null,"This option is only available when DAX Studio is launched from the Add-ins ribbon in Excel. If you launch DAX Studio outside of excel it cannot connect to PowerPivot"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(90974).Z,width:"480",height:"230"})),(0,r.kt)("h2",{id:"connect-to-power-bi-desktop--ssdt-integrated-workspaces"},"Connect to Power BI Desktop / SSDT Integrated Workspaces"),(0,r.kt)("p",null,"DAX Studio can find any running instances of Power BI Desktop that are running on the local machine and present an option to connect to model inside the pbix file. And if you run SQL Server Data Tools (SSDT) with a model that is using an Integrated Workspace we can connect to that too"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(56581).Z,width:"480",height:"263"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: For SSDT we get the name of the model from the Title bar of SSDT. This only works if your Tabular project is the only one in the solution. If you have multiple projects inside the one solution you will see multiple data sources with the same name. Unfortunately at this point in time we have not discovered any way of linking the in-memory engine instances to a specific project inside a solution. ")),(0,r.kt)("h2",{id:"connect-to-sql-server-analysis-services-servers"},"Connect to SQL Server Analysis Services servers"),(0,r.kt)("p",null,"DAX Studio can connect to any server running in Tabular or PowerPivot mode and can also connect to Multi-Dimensional servers providing they are running SQL Server 2012 SP1 CU4 or later (versions earlier than this do not understand DAX queries)"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(79489).Z,width:"480",height:"197"})),(0,r.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,r.kt)("p",null,'If you ever need to configure additional connection properties some of the more recent ones are listed under the Advanced Options section, any that are not can be added in the "Additional Options" section'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(77399).Z,width:"480",height:"496"})))}u.isMDXComponent=!0},77399:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ConnectAdvanced-d45d89a3c14b61572b9a4a74d3873f02.png"},56581:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ConnectAll-064e5cec5baacf55fc7940f2dac6f9a4.png"},90974:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ConnectPowerPivot-f68d4815529135d4ee9f7fcaeee15347.png"},79489:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ConnectServer-23bf359214996455b256696bc9583ebc.png"}}]);