"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[7531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||c[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Result Formatting"},i=void 0,l={unversionedId:"features/result-formatting",id:"features/result-formatting",title:"Result Formatting",description:'When the results of a DAX query are returned they come back in a "raw", unformatted format and it is then up to the client tool to apply any formatting. In the case of client tools like Power BI Desktop where the tool is generating the DAX query this is not hard since the tool knows exactly how to map a column in the results to the source column, but with DAX Studio it gets a lot trickier since the user can type in an arbitrary query with any structure they like.',source:"@site/docs/features/result-formatting.md",sourceDirName:"features",slug:"/features/result-formatting",permalink:"/docs/features/result-formatting",draft:!1,tags:[],version:"current",frontMatter:{title:"Result Formatting"},sidebar:"tutorialSidebar",previous:{title:"Query Editor",permalink:"/docs/features/query-editor"},next:{title:"DAX Studio Ribbon",permalink:"/docs/features/ribbon-control"}},s={},u=[],m={toc:u};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'When the results of a DAX query are returned they come back in a "raw", unformatted format and it is then up to the client tool to apply any formatting. In the case of client tools like Power BI Desktop where the tool is generating the DAX query this is not hard since the tool knows exactly how to map a column in the results to the source column, but with DAX Studio it gets a lot trickier since the user can type in an arbitrary query with any structure they like.'),(0,a.kt)("p",null,"DAX Studio uses the following logic when trying to format a column in the result grid:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"DAX Studio attempts to match the column name in the resultset to a column or measure in the data model. If it finds a match then it will apply the format string for that column or measure."),(0,a.kt)("li",{parentName:"ol"},"Then if Automatic Formatting is enabled in the options the formatting depends on the data type of the result column:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},'If it\'s a floating point column with either "%" or "pcnt" in the column name then ',(0,a.kt)("inlineCode",{parentName:"li"},'"#,##0.00"')," format string is applied"),(0,a.kt)("li",{parentName:"ol"},"If it is an integer column the ",(0,a.kt)("inlineCode",{parentName:"li"},'"#,0"')," format string is applied"),(0,a.kt)("li",{parentName:"ol"},'If it is a datetime column with the words "time" or "hour" the system default datetime format is used otherwise the ',(0,a.kt)("inlineCode",{parentName:"li"},'"yyyy-MM-dd"')," format string is applied (this format can be changed in the Options)"))),(0,a.kt)("li",{parentName:"ol"},"Otherwise the local system's default formats are applied.")),(0,a.kt)("p",null,"In the following Example the column names match the columns in the model and the following format strings which are defined in the data model are applied"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[Sales Amount]"," = ",(0,a.kt)("inlineCode",{parentName:"li"},'"$#,##0.00"')),(0,a.kt)("li",{parentName:"ul"},"[Pcnt of Total]"," = ",(0,a.kt)("inlineCode",{parentName:"li"},'"0.00%"')),(0,a.kt)("li",{parentName:"ul"},"[Pcnt of Blue]"," = ",(0,a.kt)("inlineCode",{parentName:"li"},'"0.00%"'))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9575).Z,width:"386",height:"365"})),(0,a.kt)("p",null,"In the following Example the column names in the query have been edited so that they ",(0,a.kt)("strong",{parentName:"p"},"DO NOT")," all match the columns in the model and the following format strings which are defined in the data model are applied:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[Pcnt of Total]"," ",(0,a.kt)("strong",{parentName:"li"},"matches")," so ",(0,a.kt)("inlineCode",{parentName:"li"},'"0.00%"')," from the data model is applied"),(0,a.kt)("li",{parentName:"ul"},"[% Sales Amount]"," does ",(0,a.kt)("strong",{parentName:"li"},"not"),' match and the column is an integer internally so the "%" does not trigger the percentage formatting and the default integer format string of ',(0,a.kt)("inlineCode",{parentName:"li"},'"#,0"')," is applied ",(0,a.kt)("strong",{parentName:"li"},"(1)")),(0,a.kt)("li",{parentName:"ul"},"[Pct of Blue 2]"," does ",(0,a.kt)("strong",{parentName:"li"},"not"),' match the measure name, but this is an floating point column and it does have "Pct" in the column name so the default percentage format of ',(0,a.kt)("inlineCode",{parentName:"li"},'"0.00%"')," is applied ",(0,a.kt)("strong",{parentName:"li"},"(2)"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(41809).Z,width:"366",height:"360"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"if you build your queries using the ",(0,a.kt)("a",{parentName:"p",href:"../query-builder"},"Query Builder")," then queries that are generated should have the correct formatting applied")))}c.isMDXComponent=!0},41809:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/format-names-dont-match-45f9a0aef88fbcbe6f6abfbfb3dcd2cd.png"},9575:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/format-names-match-c623521245e0303937f76d7cdf36ba12.png"}}]);