"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[831],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85325:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={title:"Writing DAX Queries",sidebar_position:2},o=void 0,s={unversionedId:"tutorials/writing-dax-queries",id:"tutorials/writing-dax-queries",title:"Writing DAX Queries",description:"DAX Queries have quite a simple structure. Microsoft describes the query syntax in their documentation here. But in this guide we are going to take a very practical, example based approach.",source:"@site/docs/tutorials/writing-dax-queries.md",sourceDirName:"tutorials",slug:"/tutorials/writing-dax-queries",permalink:"/docs/tutorials/writing-dax-queries",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Writing DAX Queries",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Connected",permalink:"/docs/tutorials/getting-connected"},next:{title:"Using the EvaluateAndLog Trace",permalink:"/docs/tutorials/evaluateandlog-trace"}},i={},u=[{value:"Basic Queries",id:"basic-queries",level:2},{value:"Sorting Results",id:"sorting-results",level:2},{value:"Adding Calculations",id:"adding-calculations",level:2},{value:"Returning a single value",id:"returning-a-single-value",level:2},{value:"Selecting columns from multiple tables",id:"selecting-columns-from-multiple-tables",level:2},{value:"Multiple Resultsets",id:"multiple-resultsets",level:2},{value:"Using Parameters in Queries",id:"using-parameters-in-queries",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"DAX Queries have quite a simple structure. Microsoft describes the query syntax in their documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dax/dax-queries"},"here"),". But in this guide we are going to take a very practical, example based approach. "),(0,r.kt)("p",null,"If you want to follow along and try out these queries yourself all you need is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DAX Studio"),(0,r.kt)("li",{parentName:"ul"},"Power BI Desktop"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/dax-docs-sample-file"},"Adventure Works 2020")," sample file")),(0,r.kt)("p",null,"The simplest way to get started after installing both DAX Studio and Power BI Desktop is to open the ",(0,r.kt)("strong",{parentName:"p"},"Adventure Works 2020.pbix")," file, then click on External Tools and launch DAX Studio from there. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more details on how you can connect to your particular data model check out the tutorial on ",(0,r.kt)("a",{parentName:"p",href:"../getting-connected/"},"Getting Connected"))),(0,r.kt)("h2",{id:"basic-queries"},"Basic Queries"),(0,r.kt)("p",null,"The simplest form of DAX query is ",(0,r.kt)("inlineCode",{parentName:"p"},"EVALUATE <table expression>")," "),(0,r.kt)("p",null,"So you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"EVALUATE Customer")," to output all the rows in the customer table"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(37762).Z,width:"1125",height:"748"})),(0,r.kt)("p",null,"But you don't just have to use a table name, you can use any function that returns a table. To get a distinct list of all the values in a column you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://dax.guide/values"},"VALUES")," function which returns a table with a single column with all the unique values from the specified column."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dax"},"EVALUATE\nVALUES ( Customer[City] )\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(24617).Z,width:"1125",height:"748"})),(0,r.kt)("p",null,"Or if you don't want every row in the table you could use the ",(0,r.kt)("a",{parentName:"p",href:"https://dax.guide/calculatetable"},"CALCULATETABLE")," function to only return rows that meet a given criteria."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dax"},'EVALUATE\nCALCULATETABLE ( Customer, Customer[City] = "Redmond" )\n')),(0,r.kt)("p",null,"You can even combine the ",(0,r.kt)("a",{parentName:"p",href:"https://dax.guide/values"},"VALUES")," and ",(0,r.kt)("a",{parentName:"p",href:"https://dax.guide/calculatetable"},"CALCULATETABLE"),' functions to get a list of all Cities that have a first character of "R"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dax"},'EVALUATE\nCALCULATETABLE ( VALUES ( Customer[City] ), LEFT ( Customer[City], 1 ) = "R" )\n')),(0,r.kt)("h2",{id:"sorting-results"},"Sorting Results"),(0,r.kt)("p",null,"If we continue on with the previous example you will see that the results come back in a random order. If we want our query to sort the results we can add an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause to the end of the query. So if we wanted to sort the results by the city name we would do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dax"},'EVALUATE\nCALCULATETABLE ( VALUES ( Customer[City] ), LEFT ( Customer[City], 1 ) = "R" )\nORDER BY Customer[City]\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE:")," Some client tools (like Power BI Desktop) will generate an ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause for you based on the properties set in your data model")),(0,r.kt)("h2",{id:"adding-calculations"},"Adding Calculations"),(0,r.kt)("p",null,"To add a calculation to your query like measures and variables you would use the optional ",(0,r.kt)("inlineCode",{parentName:"p"},"DEFINE")," keyword at the start of your query"),(0,r.kt)("p",null,"To define a new measure in your query which sums the value of the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"Sales[Sales Amount]")," column you would write the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dax"},"DEFINE\n    MEASURE Sales[My Sales Amount] =\n        SUM ( Sales[Sales Amount] )\nEVALUATE\nADDCOLUMNS ( VALUES ( 'Date'[Month] ), \"My Sales Amount\", [My Sales Amount] )\n")),(0,r.kt)("p",null,"To define multiple measures you can add multiple blocks of ",(0,r.kt)("inlineCode",{parentName:"p"},"MEASURE <table>[<measure name>] = <expression>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dax"},'DEFINE\n    MEASURE Sales[My Sales Amount] =\n        SUM ( Sales[Sales Amount] )\n    MEASURE Sales[My Double Sales Amount] =\n        SUM ( Sales[Sales Amount] ) * 2\nEVALUATE\nADDCOLUMNS (\n    VALUES ( \'Date\'[Month] ),\n    "My Sales Amount", [My Sales Amount],\n    "My Double Sales Amount", [My Double Sales Amount]\n)\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(69433).Z,width:"1125",height:"748"})),(0,r.kt)("h2",{id:"returning-a-single-value"},"Returning a single value"),(0,r.kt)("p",null,"Sometimes you may just want to return the result of a measure. But measures return a single scalar value not a table, so if you try to write the following it will produce a syntax error"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dax"},"EVALUATE\nSUM ( Sales[Sales Amount] )\n")),(0,r.kt)("p",null,"We can fix this by using the table constructor syntax and wrapping the measure in curly braces ",(0,r.kt)("inlineCode",{parentName:"p"},"{ }")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dax"},"EVALUATE\n{ SUM ( Sales[Sales Amount] ) }\n")),(0,r.kt)("p",null,"For older versions of the tabular engine which do not support the table constructor syntax we can use the ",(0,r.kt)("a",{parentName:"p",href:"https://dax.guide/row"},"ROW")," function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dax"},'EVALUATE\nROW ( "Sales Amount", [Sales Amount] )\n')),(0,r.kt)("p",null,"You can also mix this with the ",(0,r.kt)("inlineCode",{parentName:"p"},"DEFINE")," clause to create a measure expression and then return a single value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dax"},"DEFINE\n    MEASURE Sales[Total Sales] =\n        SUM ( Sales[Sales Amount] )\nEVALUATE\n{ [Total Sales] }\n")),(0,r.kt)("h2",{id:"selecting-columns-from-multiple-tables"},"Selecting columns from multiple tables"),(0,r.kt)("p",null,"The easiest way to generate a query using columns from multiple tables is to use the ",(0,r.kt)("a",{parentName:"p",href:"https://dax.guide/summarizecolumns"},"SUMMARIZECOLUMNS")," function. This function takes a list of columns, followed by an optional list of table expressions to use as filters, followed by an optional list of measures/expressions."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE:")," It is ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"strongly"))," recommended to always use a measure or expression of some sort with the ",(0,r.kt)("inlineCode",{parentName:"p"},"SUMMARIZECOLUMNS")," function if you don't do this the function will generate a large crossjoin of all possible combinations of every value in the specified columns which is not normally useful")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dax"},"EVALUATE\nSUMMARIZECOLUMNS (\n    Product[Color],\n    Reseller[Business Type],\n    FILTER ( ALL ( 'Product'[List Price] ), 'Product'[List Price] > 150.00 ),\n    TREATAS ( { \"Accessories\", \"Bikes\" }, 'Product'[Category] ),\n    \"Total Sales\", SUM ( Sales[Sales Amount] )\n)\n")),(0,r.kt)("h2",{id:"multiple-resultsets"},"Multiple Resultsets"),(0,r.kt)("p",null,"DAX queries also allow for the return of multiple recordsets within a given batch"),(0,r.kt)("p",null,"So you can execute the following: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dax"},"EVALUATE\nCustomer\nEVALUATE\n'Product'\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(42578).Z,width:"1125",height:"748"})),(0,r.kt)("p",null,"And you will get 2 tabs returned in DAX Studio, one with the contents of the ",(0,r.kt)("strong",{parentName:"p"},"Customer")," table and the other with the contents of the ",(0,r.kt)("strong",{parentName:"p"},"Product")," table."),(0,r.kt)("p",null,"But note that within a single batch, although you can have multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"EVALUATE")," statements you can only have a single ",(0,r.kt)("inlineCode",{parentName:"p"},"DEFINE")," statement. So you would need to declare all your calculations in that one block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dax"},"DEFINE\n    MEASURE Sales[Total Sales] =\n        SUM ( Sales[Sales Amount] )\n    MEASURE Sales[Total Cost] =\n        SUMX ( Sales, Sales[Unit Price] * Sales[Order Quantity] )\nEVALUATE\n{ [Total Sales] }\nEVALUATE\n{ [Total Cost] }\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(18708).Z,width:"1125",height:"748"})),(0,r.kt)("h2",{id:"using-parameters-in-queries"},"Using Parameters in Queries"),(0,r.kt)("p",null,"One of the unique features that DAX Studio has is the ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/parameter-support/"},"support for parameterized queries")),(0,r.kt)("p",null,"To add a parameter to a DAX query you can start with a query that includes a filter such as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dax"},"EVALUATE\nFILTER ( 'Product', 'Product'[Color] = \"Red\" )\n")),(0,r.kt)("p",null,"And then replace the reference to ",(0,r.kt)("inlineCode",{parentName:"p"},'"Red"')," with a parameter called ",(0,r.kt)("inlineCode",{parentName:"p"},"@Color")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dax"},"EVALUATE\nFILTER ( 'Product', 'Product'[Color] = @Color )\n")),(0,r.kt)("p",null,"When you execute a query with a parameter, DAX Studio will prompt you for the parameter to use"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(43203).Z,width:"1125",height:"748"})))}d.isMDXComponent=!0},18708:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evaluate-2-recordsets-with-measures-1d0c4c52e0042829e6b6f95b9b6d16f9.png"},42578:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evaluate-2-recordsets-2d36bd864113220bd2636a99f73be28a.png"},24617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evaluate-customer-city-1484eb060755d9d8bb25076f699babed.png"},37762:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evaluate-customer-deabbc4433258f76548dc2405db162cd.png"},69433:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evaluate-define-measures-9adf45b3ddd382db8272b26eaa4a3550.png"},43203:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evaluate-parameter-87695ba16a33454db1700d49ea2b72e3.png"}}]);