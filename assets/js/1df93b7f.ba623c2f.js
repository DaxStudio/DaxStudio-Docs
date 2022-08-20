(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[3237],{1305:(e,t,n)=>{"use strict";n.d(t,{AM:()=>p,BD:()=>h});var r=n(767),a=n(8977),o=n(7294),s=n(6010),i=n(381),c=n.n(i);var l=n(8084),u=n(2814);const d=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"];function m(e){let t=0,n=parseInt(e,10)||0;for(;n>=1024&&++t;)n/=1024;return n.toFixed(n<10&&t>0?1:0)+" "+d[t]}function f(){const e=(0,l.eZ)("docusaurus-plugin-github-releases").all_releases[0],t=e.assets.filter((function(e){return e.browser_download_url.endsWith(".exe")}))[0],n=e.assets.filter((function(e){return e.browser_download_url.endsWith(".zip")}))[0];return{tag_name:e.tag_name,installer:{browser_download_url:t.browser_download_url.toString(),download_size:t.size,download_cnt:t.download_cnt,created_at:t.created_at,download_name:t.name},portable:{browser_download_url:n.browser_download_url.toString(),download_size:n.size,download_cnt:n.download_cnt,created_at:n.created_at,download_name:n.name}}}function p(){const e=f().installer;return o.createElement("div",{className:(0,s.Z)("main-explain-area jumbotron center md-12")},o.createElement("div",{className:(0,s.Z)("centered")},o.createElement("a",{href:e.browser_download_url},o.createElement("div",{className:"button button--lg button--success"},o.createElement("h3",null,o.createElement("span",null,o.createElement(u.G,{icon:r.q7}),"\xa0 ",e.download_name)),o.createElement("div",null,"(installer)"))),o.createElement("div",{className:"download-info"},o.createElement(u.G,{icon:a.Ed}),o.createElement("span",null,"\xa0Size: ",m(e.download_size)," | "),o.createElement("i",{className:"fa fa-calendar",title:"release date"}),o.createElement("span",null,"\xa0",c()(e.created_at).format("DD-MMM-YYYY")),"\xa0|\xa0downloads:\xa0",o.createElement("span",{id:"download_cnt",className:"badge badge-info"},"n/a"))))}function h(){const e=f().portable;return o.createElement("div",{className:"centered"},o.createElement("a",{href:e.browser_download_url},o.createElement("div",{className:"button button--lg button--secondary"},o.createElement("h3",null,o.createElement("span",null,o.createElement(u.G,{icon:r.q7}),"\xa0 ",e.download_name)),o.createElement("div",null,"(portable)"))),o.createElement("div",{className:"download-info"},o.createElement("i",{className:"fa fa-download",title:"downloads"})," ",o.createElement("span",null,"Size: ",m(e.download_size),"  | "),o.createElement("i",{className:"fa fa-calendar",title:"release date"}),"\xa0",o.createElement("span",null,c()(e.created_at).format("DD-MMM-YYYY")),"\xa0|\xa0downloads:\xa0",o.createElement("span",{id:"download_cnt_zip",className:"badge badge-info"},"n/a")))}},6667:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Se});var r=n(7294),a=n(6010),o=n(2263),s=n(2164),i=n(7462);const c="features_t9lD",l="featureSvg_GfXr",u=[{title:"Easy to Use",Img:"/img/easy-to-use.png",description:r.createElement(r.Fragment,null,"DAX Studio was designed with a clean, modern user interface that supports both a light and dark mode and provides rich metadata about your data model.")},{title:"Connect to any data model",Img:"/img/any-data-source.png",description:r.createElement(r.Fragment,null,"DAX Studio can connect to all the different 'flavours' of tabular models PowerPivot for Excel,  Power BI Desktop, Azure Analysis Services and Power BI Premium XMLA endpoints")},{title:"Powerful performance tuning tools",Img:"/img/performance-tuning.png",description:r.createElement(r.Fragment,null,"You can use features like Server Timings, View Metric and Benchmarking to profile and understand the performance of your DAX code")}];function d(e){let{title:t,Img:n,description:o}=e;return r.createElement("div",{className:(0,a.Z)("col col--4")},r.createElement("div",{className:"text--center"},r.createElement("img",{className:l,role:"img",src:n})),r.createElement("div",{className:"text--center padding-horiz--md"},r.createElement("h3",null,t),r.createElement("p",null,o)))}function m(){return r.createElement("section",{className:c},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},u.map(((e,t)=>r.createElement(d,(0,i.Z)({key:t},e)))))))}var f=n(1305);const p="heroBanner_qdFl";var h,b,j,y,g=n(5697),v=n.n(g),w=n(3524),E=n.n(w),T=n(9590),A=n.n(T),C=n(7418),k=n.n(C),O="bodyAttributes",S="htmlAttributes",_="titleAttributes",N={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},P=(Object.keys(N).map((function(e){return N[e]})),"charset"),x="cssText",I="href",z="http-equiv",L="innerHTML",M="itemprop",D="name",B="property",Y="rel",R="src",q="target",F={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},H="defaultTitle",U="defer",Z="encodeSpecialCharacters",K="onChangeClientState",X="titleTemplate",G=Object.keys(F).reduce((function(e,t){return e[F[t]]=t,e}),{}),W=[N.NOSCRIPT,N.SCRIPT,N.STYLE],Q="data-react-helmet",V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},$=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},ne=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},re=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ae=function(e){var t=le(e,N.TITLE),n=le(e,X);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=le(e,H);return t||r||void 0},oe=function(e){return le(e,K)||function(){}},se=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ee({},e,t)}),{})},ie=function(e,t){return t.filter((function(e){return void 0!==e[N.BASE]})).map((function(e){return e[N.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},ce=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&pe("Helmet: "+e+' should be of type "Array". Instead found type "'+V(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),s=0;s<o.length;s++){var i=o[s],c=i.toLowerCase();-1===t.indexOf(c)||n===Y&&"canonical"===e[n].toLowerCase()||c===Y&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(i)||i!==L&&i!==x&&i!==M||(n=i)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),s=0;s<o.length;s++){var i=o[s],c=k()({},r[i],a[i]);r[i]=c}return e}),[]).reverse()},le=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ue=(h=Date.now(),function(e){var t=Date.now();t-h>16?(h=t,e(t)):setTimeout((function(){ue(e)}),0)}),de=function(e){return clearTimeout(e)},me="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ue:n.g.requestAnimationFrame||ue,fe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||de:n.g.cancelAnimationFrame||de,pe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},he=null,be=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,s=e.metaTags,i=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,m=e.titleAttributes;ge(N.BODY,r),ge(N.HTML,a),ye(d,m);var f={baseTag:ve(N.BASE,n),linkTags:ve(N.LINK,o),metaTags:ve(N.META,s),noscriptTags:ve(N.NOSCRIPT,i),scriptTags:ve(N.SCRIPT,l),styleTags:ve(N.STYLE,u)},p={},h={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(h[e]=f[e].oldTags)})),t&&t(),c(e,p,h)},je=function(e){return Array.isArray(e)?e.join(""):e},ye=function(e,t){void 0!==e&&document.title!==e&&(document.title=je(e)),ge(N.TITLE,t)},ge=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Q),a=r?r.split(","):[],o=[].concat(a),s=Object.keys(t),i=0;i<s.length;i++){var c=s[i],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute(Q):n.getAttribute(Q)!==s.join(",")&&n.setAttribute(Q,s.join(","))}},ve=function(e,t){var n=document.head||document.querySelector(N.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],s=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===L)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var i=void 0===t[r]?"":t[r];n.setAttribute(r,i)}n.setAttribute(Q,"true"),a.some((function(e,t){return s=t,n.isEqualNode(e)}))?a.splice(s,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},we=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[F[n]||n]=e[n],t}),t)},Te=function(e,t,n){switch(e){case N.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})[Q]=!0,o=Ee(n,a),[r.createElement(N.TITLE,o,e)];var e,n,a,o},toString:function(){return function(e,t,n,r){var a=we(n),o=je(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+re(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+re(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case O:case S:return{toComponent:function(){return Ee(t)},toString:function(){return we(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,o=((a={key:n})[Q]=!0,a);return Object.keys(t).forEach((function(e){var n=F[e]||e;if(n===L||n===x){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),r.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===L||e===x)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+re(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",s=-1===W.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(s?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},Ae=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,s=e.metaTags,i=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,m=e.titleAttributes;return{base:Te(N.BASE,t,r),bodyAttributes:Te(O,n,r),htmlAttributes:Te(S,a,r),link:Te(N.LINK,o,r),meta:Te(N.META,s,r),noscript:Te(N.NOSCRIPT,i,r),script:Te(N.SCRIPT,c,r),style:Te(N.STYLE,l,r),title:Te(N.TITLE,{title:d,titleAttributes:m},r)}},Ce=E()((function(e){return{baseTag:ie([I,q],e),bodyAttributes:se(O,e),defer:le(e,U),encode:le(e,Z),htmlAttributes:se(S,e),linkTags:ce(N.LINK,[Y,I],e),metaTags:ce(N.META,[D,P,z,B,M],e),noscriptTags:ce(N.NOSCRIPT,[L],e),onChangeClientState:oe(e),scriptTags:ce(N.SCRIPT,[R,L],e),styleTags:ce(N.STYLE,[x],e),title:ae(e),titleAttributes:se(_,e)}}),(function(e){he&&fe(he),e.defer?he=me((function(){be(e,(function(){he=null}))})):(be(e),he=null)}),Ae)((function(){return null})),ke=(b=Ce,y=j=function(e){function t(){return J(this,t),ne(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!A()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case N.SCRIPT:case N.NOSCRIPT:return{innerHTML:t};case N.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return ee({},r,((t={})[n.type]=[].concat(r[n.type]||[],[ee({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,s=e.nestedChildren;switch(r.type){case N.TITLE:return ee({},a,((t={})[r.type]=s,t.titleAttributes=ee({},o),t));case N.BODY:return ee({},a,{bodyAttributes:ee({},o)});case N.HTML:return ee({},a,{htmlAttributes:ee({},o)})}return ee({},a,((n={})[r.type]=ee({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=ee({},t);return Object.keys(e).forEach((function(t){var r;n=ee({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,o=r.children,s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[G[n]||n]=e[n],t}),t)}(te(r,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case N.LINK:case N.META:case N.NOSCRIPT:case N.SCRIPT:case N.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:s,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=te(e,["children"]),a=ee({},n);return t&&(a=this.mapChildrenToProps(t,a)),r.createElement(b,a)},$(t,null,[{key:"canUseDOM",set:function(e){b.canUseDOM=e}}]),t}(r.Component),j.propTypes={base:v().object,bodyAttributes:v().object,children:v().oneOfType([v().arrayOf(v().node),v().node]),defaultTitle:v().string,defer:v().bool,encodeSpecialCharacters:v().bool,htmlAttributes:v().object,link:v().arrayOf(v().object),meta:v().arrayOf(v().object),noscript:v().arrayOf(v().object),onChangeClientState:v().func,script:v().arrayOf(v().object),style:v().arrayOf(v().object),title:v().string,titleAttributes:v().object,titleTemplate:v().string},j.defaultProps={defer:!0,encodeSpecialCharacters:!0},j.peek=b.peek,j.rewind=function(){var e=b.rewind();return e||(e=Ae({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},y);ke.renderStatic=ke.rewind;function Oe(){const{siteConfig:e}=(0,o.Z)();return r.createElement("header",{className:(0,a.Z)("hero hero--primary",p)},r.createElement("div",{className:"container"},r.createElement("img",{src:e.themeConfig.navbar.logo.src,width:"200"}),r.createElement("h1",{className:"hero__title"},e.title),r.createElement("p",{className:"hero__subtitle"},e.tagline)))}function Se(){const{siteConfig:e}=(0,o.Z)();return r.createElement(s.Z,{title:""+e.title,description:"The ultimate tool for working with DAX Queries"},r.createElement(Oe,null),r.createElement("div",{className:"container"},r.createElement("div",{className:(0,a.Z)(p)},r.createElement("div",{className:"row justify-content-md-center"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col"}," Download the latest release of DAX Studio here:",r.createElement("br",null),r.createElement("br",null)))),r.createElement("div",{className:"col col--2"}),r.createElement("div",{className:"col "}," ",r.createElement(f.AM,null)),r.createElement("div",{className:"col "},r.createElement(f.BD,null)),r.createElement("div",{className:"col col--2"})),r.createElement("br",null),r.createElement("div",{className:"container"},"The details of the new features and fixes included in this release are available in the ",r.createElement("a",{href:"/changelog/latest"},"changelog")))),r.createElement("main",null,r.createElement(m,null)),r.createElement(ke,null,r.createElement("script",{src:"/js/index-downloads.js",async:!0})))}},6700:(e,t,n)=>{var r={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=6700},3524:(e,t,n)=>{"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var s=a.prototype;return s.UNSAFE_componentWillMount=function(){l.push(this),u()},s.componentDidUpdate=function(){u()},s.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},s.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return s(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),s(d,"canUseDOM",i),d}}}}]);