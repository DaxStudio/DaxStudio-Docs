"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[6792],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=i,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return a?r.createElement(m,n(n({ref:t},d),{},{components:a})):r.createElement(m,n({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,n[1]=s;for(var c=2;c<o;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},37365:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const o={title:"Security & Privacy"},n="DAX Studio - Security & Privacy",s={unversionedId:"security-privacy",id:"security-privacy",title:"Security & Privacy",description:"This document describes the security and privacy considerations of DAX Studio and its use.",source:"@site/docs/security-privacy.md",sourceDirName:".",slug:"/security-privacy",permalink:"/docs/security-privacy",draft:!1,tags:[],version:"current",frontMatter:{title:"Security & Privacy"},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/docs/requirements"}},l={},c=[{value:"Analysis Services XMLA Protocol",id:"analysis-services-xmla-protocol",level:2},{value:"Model metadata",id:"model-metadata",level:2},{value:"Trace data",id:"trace-data",level:2},{value:"Model data content",id:"model-data-content",level:2},{value:"Web requests",id:"web-requests",level:2},{value:"Application Security",id:"application-security",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dax-studio---security--privacy"},"DAX Studio - Security & Privacy"),(0,i.kt)("p",null,"This document describes the security and privacy considerations of DAX Studio and its use. "),(0,i.kt)("p",null,"DAX Studio is a tool for executing DAX queries against Microsoft Tabular models. It does not store or cache any data itself, it queries the metadata from a data model when the user first connects. Then it executes queries the user defines and displays the results. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(95750).Z,width:"1280",height:"720"})),(0,i.kt)("h2",{id:"analysis-services-xmla-protocol"},"Analysis Services XMLA Protocol"),(0,i.kt)("p",null,"All communication with Analysis Services instances or Power BI Premium workspaces happens through the use of the Microsoft ADOMD Client libraries and Microsoft Analysis Management Objects (AMO) client libraries. These client libraries are provided by Microsoft for redistribution in 3rd party applications such as DAX Studio. More details about these libraries can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/analysis-services/client-libraries?view=asallproducts-allversions"},"here")),(0,i.kt)("p",null,"When DAX Studio connects to an instance of Analysis Services (local network or cloud) or a Power BI Premium workspace (cloud), this connection is performed through the client libraries mentioned above. By design, the ADOMD/AMO libraries handles the authentication and authorization of the user. All the permissions and roles are defined on the dataset itself, DAX Studio does not provide any access to data which the user could not do through other means (such as through other client tools like Excel or SQL Server Management Studio)."),(0,i.kt)("h2",{id:"model-metadata"},"Model metadata"),(0,i.kt)("p",null,"Once the ADOMD client library establishes connection, DAX Studio will request the full CSDL metadata for the specific Analysis Services database or Power BI dataset that the user wants to connect to. This is the same metadata call that Power BI Desktop uses to populate it's metadata pane. "),(0,i.kt)("p",null,"DAX Studio does not collect, publish, share, transfer or otherwise make public any model metadata obtained through the ADOMD client libraries unless the user specifically initiates an action to do so (for example by saving a vpax file to a shared network location)."),(0,i.kt)("h2",{id:"trace-data"},"Trace data"),(0,i.kt)("p",null,"When you enable one of the Traces in DAX Studio (eg. Server Timings or Query Plans) then DAX Studio makes an additional connection to the Tabular datamodel using the AMO library and subscribes to certain detailed events from the engine. By default the data collected from these trace events is only held in local memory, but if the user saves the current session as a daxx file this information will be persisted into that file. This file will not contain data from the query results. But it is possible that some confidential information could be included in the traces. For example if you filtered on a customer name that name could be capture in the trace information. As such users should carefully review the contents of these traces before sharing them with anyone else."),(0,i.kt)("h2",{id:"model-data-content"},"Model data content"),(0,i.kt)("p",null,'In the following, "model data" refers to the actual data records stored within the Analysis Services database or Power BI dataset. Depending on the source database or dataset, it is very likely that the model data is confidential.'),(0,i.kt)("p",null,"DAX Studio only allows retrieval of data through the AMOMD client library mentioned above. Regardless of which technique is used to access the data DAX Studio only stores retrieved data in local memory. DAX Studio does not collect, publish, share, transfer or otherwise make public any model data obtained through the tool. If a user chooses to copy or export query results obtained through DAX Studio, it is their responsibility to treat the copied or exported data according to the confidentiality of the data. This is no different than a user connecting to the Analysis Services database or Power BI dataset using client tools such as Excel or Power BI, in which case they will also have the option to copy query results."),(0,i.kt)("p",null,"In the case of using the export wizard to export a table to SQL Server DAX Studio uses the .Net System.Data.SqlClient library to connect to the specified SQL Server"),(0,i.kt)("h2",{id:"web-requests"},"Web requests"),(0,i.kt)("p",null,"DAX Studio may perform requests to online resources (web URLs) only in the following cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Upgrade checks"),". Each time DAX Studio 3 is launched, it may perform a request to our application service, in order to determine if a newer version of DAX Studio is available. This request does not contain any data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usage telemetry"),". By default, DAX Studio collects and transmits anonymous usage data. Currently this is restricted to just SessionStart and SessionEnd events. A user may opt out of sending telemetry data to us at any point."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Error reports")," When an unexpected error occurs, we transmit the stack trace and (anonymized) error message, along with an optional description provided by the user. If a user opts out of sending telemetry data, error reports will also not be sent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Using DAX formatter")," A DAX expression may be formatted by clicking a button in DAX Studio. In this case, the DAX expression (and some anonymous information about the datasource version) is sent to the ",(0,i.kt)("a",{parentName:"li",href:"http://www.daxformatter.com"},"www.daxformatter.com")," webservice. ")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"System administrators may choose to turn all these web requests off at install time. Or users can choose to switch off individual categories in the File > Options window.")),(0,i.kt)("h2",{id:"application-security"},"Application Security"),(0,i.kt)("p",null,"DAX Studio does not require any elevated privileges on the Windows machine in which it is installed, neither does it access any restricted resources on the machine. One exception from this rule, is if using the DAX Studio installer file (.exe), in which case the executable and support files required by the tool, are by default copied to the Program Files folder, which typically requires elevated permission. Both the DAX Studio binary files as well as the installer file, have been signed with a code signing certificate issued to SQL BI Inc, which is your guarantee that the code has not been tampered with by any 3rd party."))}u.isMDXComponent=!0},95750:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/DAXStudioArchitecture-1dc11fac64524842e9fe12c92eafe764.PNG"}}]);