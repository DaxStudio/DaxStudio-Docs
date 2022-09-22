"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[3419],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),h=s(r),m=a,p=h["".concat(l,".").concat(m)]||h[m]||c[m]||o;return r?n.createElement(p,i(i({ref:t},d),{},{components:r})):n.createElement(p,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},92430:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Query Builder"},i=void 0,u={unversionedId:"features/query-builder",id:"features/query-builder",title:"Query Builder",description:"The query builder provides a drag and drop interface for building queries against your data model.",source:"@site/docs/features/query-builder.md",sourceDirName:"features",slug:"/features/query-builder",permalink:"/docs/features/query-builder",draft:!1,tags:[],version:"current",frontMatter:{title:"Query Builder"},sidebar:"tutorialSidebar",previous:{title:"Publish Functions",permalink:"/docs/features/publish-functions"},next:{title:"Query Editor",permalink:"/docs/features/query-editor"}},l={},s=[{value:"Creating new Measures",id:"creating-new-measures",level:2},{value:"Editing Existing Measures",id:"editing-existing-measures",level:2},{value:"Running your query",id:"running-your-query",level:2},{value:"Editing your query",id:"editing-your-query",level:2},{value:"Keyboard Shortcuts",id:"keyboard-shortcuts",level:2}],d={toc:s};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The query builder provides a drag and drop interface for building queries against your data model."),(0,a.kt)("p",null,"You open the query builder by clicking on the ",(0,a.kt)("strong",{parentName:"p"},"Query Builder")," button in the ",(0,a.kt)("strong",{parentName:"p"},"Home")," ribbon"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(36967).Z,width:"435",height:"145"})),(0,a.kt)("p",null,"Then you can drag and drop columns you want to appear in the output for your query into the top ",(0,a.kt)("strong",{parentName:"p"},"Columns / Measures")," area"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(76004).Z,width:"414",height:"616"})),(0,a.kt)("p",null,"And any columns you wish to use as filters you drag into the ",(0,a.kt)("strong",{parentName:"p"},"Filters")," area. There are a number of different filter operations available which may vary according to the data type of the column which you are filtering. For example you can do a ",(0,a.kt)("em",{parentName:"p"},"Between")," filter for numbers or dates, but not for text based columns"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(31387).Z,width:"226",height:"277"})),(0,a.kt)("p",null,"For filters like ",(0,a.kt)("strong",{parentName:"p"},"In")," and ",(0,a.kt)("strong",{parentName:"p"},"Not in")," where you can supply a list of values you would enter each value on a new line"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(62175).Z,width:"199",height:"202"})),(0,a.kt)("h2",{id:"creating-new-measures"},"Creating new Measures"),(0,a.kt)("p",null,"Clicking the ",(0,a.kt)("strong",{parentName:"p"},"New")," button in the top right corner will open the measure editor where you can enter the name and expression for a brand new measure. The measure editor uses the same editor as the main query window so you can use the code completion feature or drag and drop objects from the metadata pane to build up your expression"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(81130).Z,width:"1195",height:"616"})),(0,a.kt)("h2",{id:"editing-existing-measures"},"Editing Existing Measures"),(0,a.kt)("p",null,"In addition to creating new measures you can use the pencil icon next to an existing measure to override the expression for that measure. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," DAX Studio does not make any changes to your model, if you look at the generated query with the ",(0,a.kt)("strong",{parentName:"p"},"Edit Query")," option you will see that it is just generating a ",(0,a.kt)("inlineCode",{parentName:"p"},"DEFINE")," block with the updated measure expression. If you want to put any of the expressions you have altered back into your data model you need to copy/paste them manually.")),(0,a.kt)("h2",{id:"running-your-query"},"Running your query"),(0,a.kt)("p",null,"Once you have constructed the query with the desired output columns and filters you can either run the query to see the results"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(95029).Z,width:"541",height:"595"})),(0,a.kt)("h2",{id:"editing-your-query"},"Editing your query"),(0,a.kt)("p",null,"Or you can use the ",(0,a.kt)("strong",{parentName:"p"},"Edit Query")," button to send the generated query to the edit window where you can customize it further or copy it to another application."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(61837).Z,width:"868",height:"589"})),(0,a.kt)("a",{name:"keyboard-shortcuts"}),(0,a.kt)("h2",{id:"keyboard-shortcuts"},"Keyboard Shortcuts"),(0,a.kt)("p",null,"In addition to using the mouse to drag and drop items from the metadata pane you can use the metadata search function and the following keyboard short cuts to add items to the Query Builder."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Hotkey"),(0,a.kt)("th",{parentName:"tr",align:null},"Action"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"C")," ",(0,a.kt)("em",{parentName:"td"},"or")," ","<","Enter",">"),(0,a.kt)("td",{parentName:"tr",align:null},"add the selected item to the ",(0,a.kt)("strong",{parentName:"td"},"Columns/Measures")," area")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"F"),"\xa0",(0,a.kt)("em",{parentName:"td"},"or"),"\xa0","<","Space",">"),(0,a.kt)("td",{parentName:"tr",align:null},"add the selected item to the ",(0,a.kt)("strong",{parentName:"td"},"Filters")," area")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"B")),(0,a.kt)("td",{parentName:"tr",align:null},"add the selected item to ",(0,a.kt)("em",{parentName:"td"},"both")," the ",(0,a.kt)("strong",{parentName:"td"},"Columns/Measures")," and the ",(0,a.kt)("strong",{parentName:"td"},"Filters")," areas")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"<","Up","\xa0","Arrow",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Move up in the metadata")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"<","Down","\xa0","Arrow",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Move down in the metadata")))))}c.isMDXComponent=!0},76004:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dragging-metadata-bc49387968449acf12e49709d5c2b2bc.png"},61837:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/edit-query-3d28154483dc34146f4cafc19495c86b.png"},31387:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},62175:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},81130:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/new-measure-cacb8fa8a8ee9b779c0129e88d2669c4.png"},36967:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ribbon-button-fc1d233637e2f38b50be5d861c3b2921.png"},95029:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/run-query-9377f8a36eb745122b3108ab1a5fc60a.png"}}]);