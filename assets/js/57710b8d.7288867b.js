"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[1765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,f=p["".concat(u,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},24432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Using the EvaluateAndLog Trace",sidebar_position:3},l=void 0,i={unversionedId:"tutorials/evaluateandlog-trace",id:"tutorials/evaluateandlog-trace",title:"Using the EvaluateAndLog Trace",description:"Prerequisites",source:"@site/docs/tutorials/evaluateandlog-trace.md",sourceDirName:"tutorials",slug:"/tutorials/evaluateandlog-trace",permalink:"/docs/tutorials/evaluateandlog-trace",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Using the EvaluateAndLog Trace",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Writing DAX Queries",permalink:"/docs/tutorials/writing-dax-queries"},next:{title:"Features",permalink:"/docs/category/features"}},u={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"About the EvalauteAndLog function",id:"about-the-evalauteandlog-function",level:2},{value:"Scalar Values",id:"scalar-values",level:2},{value:"Table Values",id:"table-values",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"If you want to follow along and try out these queries yourself all you need is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DAX Studio"),(0,r.kt)("li",{parentName:"ul"},"Power BI Desktop"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/dax-docs-sample-file"},"Adventure Works 2020")," sample file")),(0,r.kt)("p",null,"The simplest way to get started after installing both DAX Studio and Power BI Desktop is to open the ",(0,r.kt)("strong",{parentName:"p"},"Adventure Works 2020.pbix")," file, then click on External Tools and launch DAX Studio from there. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more details on how you can connect to your particular data model check out the tutorial on ",(0,r.kt)("a",{parentName:"p",href:"../getting-connected/"},"Getting Connected"))),(0,r.kt)("h2",{id:"about-the-evalauteandlog-function"},"About the EvalauteAndLog function"),(0,r.kt)("p",null,"The EvaluateAndLog trace is a great tool for helping debug logic issues with DAX measures since it helps provide insights into the context of your calculations."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"EVALUATEANDLOG()")," function is only enabled in Power BI Desktop, in order for it to work it sometimes has to disable some internal engine optimizations. DAX Studio is aware of this and will only enable the trace button when you are connected to a model hosted in Power BI Desktop ")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"EvaluateAndLog()")," function takes 3 arguments, the last 2 of which are optional using the following syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"EVALUATEANDLOG(<Value>, [Label], [MaxRows])\n")),(0,r.kt)("p",null,"Where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<value>")," can be any scalar or table expression"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[Label]")," is a string value which you can use to identify a specific instance of the EvaluateAndLog event, and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[MaxRows]")," are the maxium number of rows to return (defaults to 10)")),(0,r.kt)("p",null,"The full documentation for this function can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dax/evaluateandlog-function-dax"},"Microsoft Learn")," "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The output from the ",(0,r.kt)("inlineCode",{parentName:"p"},"EVALUATEANDLOG()")," function can potentially get very large so the engine will truncate any results over 1 million characters")),(0,r.kt)("h2",{id:"scalar-values"},"Scalar Values"),(0,r.kt)("p",null,"The count function returns a scalar number. In this example we are just evaluating a single figure based on the count of the distinct ProductKey values in the Product table which will return a value of 397."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DEFINE\n    MEASURE Sales[Measure1] =\n        EVALUATEANDLOG ( COUNT ( 'Product'[ProductKey] ), \"Measure1\" )\nEVALUATE\n{ [Measure1] }\n\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(56802).Z,width:"683",height:"398"})),(0,r.kt)("p",null,"If we change the query slightly to return the count of product per color we can see that the data scanned by the storage engine now returns a row per color."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DEFINE\n    MEASURE Sales[Measure1] =\n        EVALUATEANDLOG ( COUNT ( 'Product'[ProductKey] ), \"Measure1v2\" )\n\nEVALUATE\nSUMMARIZECOLUMNS ( 'Product'[Color], \"Measure1\", [Measure1] )\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(25275).Z,width:"677",height:"558"})),(0,r.kt)("p",null,"But notice when we introduce the ",(0,r.kt)("inlineCode",{parentName:"p"},"Customer[Country-Region]")," column that the output from ",(0,r.kt)("inlineCode",{parentName:"p"},"EVALUATEANDLOG()")," has not changed and we still have the same intermediate results logged as before."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DEFINE\n    MEASURE Sales[Measure1] =\n        EVALUATEANDLOG ( COUNT ( 'Product'[ProductKey] ), \"Measure1v3\" )\nEVALUATE\nSUMMARIZECOLUMNS (\n    'Product'[Color],\n    Customer[Country-Region],\n    \"Measure1\", [Measure1]\n)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(65219).Z,width:"675",height:"550"})),(0,r.kt)("p",null,"We can see this reflected in the results, the Customer table does not filter the Product table so the results for a given color are repeated for each value of Country-Region."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(72401).Z,width:"708",height:"680"})),(0,r.kt)("h2",{id:"table-values"},"Table Values"),(0,r.kt)("p",null,"Up until now we've seen examples of ",(0,r.kt)("inlineCode",{parentName:"p"},"EVALUATEANDLOG()")," producing a single output value for a single input, but it can also output tables of results."),(0,r.kt)("p",null,"In the following example the function is outputting all the lines from the ",(0,r.kt)("strong",{parentName:"p"},"Sales")," table for each color in the current filter context so you can see which rows are being contributing to the row count for each color."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'DEFINE\n    MEASURE sales[Measure4] =\n        COUNTROWS ( EVALUATEANDLOG ( Sales, "Sales Table" ) )\n\nEVALUATE\nSUMMARIZECOLUMNS( \'Product\'[color], "Measure4", [Measure4] )\n\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(17876).Z,width:"1685",height:"669"})))}d.isMDXComponent=!0},56802:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eval-and-log-1-5baefb0c71e170e25529b7b0516ea9b4.png"},25275:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eval-and-log-2-e6db6ee5bce0b576320cc4cec445959b.png"},72401:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eval-and-log-3-results-56c6f7aa63632360e8bedbe129c12942.png"},65219:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eval-and-log-3-ff76558ca3f154e9e21b3cab1e28197e.png"},17876:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eval-and-log-5-16126b3089b40ff762de6cb2167034df.png"}}]);