(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[3237],{7611:(e,t,a)=>{"use strict";a.d(t,{AM:()=>p,BD:()=>w});var n=a(767),s=a(8977),l=a(7294),r=a(6010),o=a(381),c=a.n(o);var d=a(8084),i=a(2814),m=a(9669),u=a.n(m);class j extends l.Component{render(){const{type:e}=this.props;var t=0;if("undefined"!=typeof Storage&&localStorage.release)var a=JSON.parse(localStorage.release);var n=0;if(a&&a.downloadCnt){t="zip"==e?a.downloadCntZip.toLocaleString():a.downloadCnt.toLocaleString();var s=new Date,r=new Date(a.refreshDate);n=Math.round(Math.abs(s.getTime()-r.getTime())/36e5)}if(!a||n>1||!a.downloadCnt){var o=0,c=0;u().get("https://api.github.com/repos/daxstudio/daxstudio/releases/latest").then((a=>{var n=a.data;n.assets.forEach((function(a){a.name.endsWith(".zip")&&(o=a.download_count),a.name.endsWith(".exe")&&(c=a.download_count);var s={refreshDate:new Date,downloadCnt:c,downloadCntZip:o,tagName:n.tag_name};"undefined"!=typeof Storage&&(localStorage.release=JSON.stringify(s)),t="zip"==e?s.downloadCntZip:s.downloadCnt}))}))}return l.createElement("span",null,"\xa0|\xa0downloads: ",l.createElement("span",{id:"download_cnt",className:"badge badge-info"},t.toLocaleString()," "))}}const f=j,h=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"];function g(e){let t=0,a=parseInt(e,10)||0;for(;a>=1024&&++t;)a/=1024;return a.toFixed(a<10&&t>0?1:0)+" "+h[t]}function E(){const e=(0,d.eZ)("docusaurus-plugin-github-releases").all_releases[0],t=e.assets.filter((function(e){return e.browser_download_url.endsWith(".exe")}))[0],a=e.assets.filter((function(e){return e.browser_download_url.endsWith(".zip")}))[0];return{tag_name:e.tag_name,installer:{browser_download_url:t.browser_download_url.toString(),download_size:t.size,download_cnt:t.download_cnt,created_at:t.created_at,download_name:t.name},portable:{browser_download_url:a.browser_download_url.toString(),download_size:a.size,download_cnt:a.download_cnt,created_at:a.created_at,download_name:a.name}}}function p(){const e=E().installer;return l.createElement("div",{className:(0,r.Z)("main-explain-area jumbotron center md-12")},l.createElement("div",{className:(0,r.Z)("centered")},l.createElement("a",{href:e.browser_download_url},l.createElement("div",{className:"button button--lg button--success"},l.createElement("h3",null,l.createElement("span",null,l.createElement(i.G,{icon:n.q7}),"\xa0 ",e.download_name)),l.createElement("div",null,"(installer)"))),l.createElement("div",{className:"download-info"},l.createElement(i.G,{icon:s.Ed}),l.createElement("span",null,"\xa0Size: ",g(e.download_size)," | "),l.createElement("i",{className:"fa fa-calendar",title:"release date"}),l.createElement("span",null,"\xa0",c()(e.created_at).format("DD-MMM-YYYY")),l.createElement(f,{type:"exe"}))))}function w(){const e=E().portable;return l.createElement("div",{className:"centered"},l.createElement("a",{href:e.browser_download_url},l.createElement("div",{className:"button button--lg button--secondary"},l.createElement("h3",null,l.createElement("span",null,l.createElement(i.G,{icon:n.q7}),"\xa0 ",e.download_name)),l.createElement("div",null,"(portable)"))),l.createElement("div",{className:"download-info"},l.createElement("i",{className:"fa fa-download",title:"downloads"})," ",l.createElement("span",null,"Size: ",g(e.download_size),"  | "),l.createElement("i",{className:"fa fa-calendar",title:"release date"}),"\xa0",l.createElement("span",null,c()(e.created_at).format("DD-MMM-YYYY")),l.createElement(f,{type:"zip"})))}},8391:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g});var n=a(7294),s=a(6010),l=a(2263),r=a(2164),o=a(7462);const c="features_t9lD",d="featureSvg_GfXr",i=[{title:"Easy to Use",Img:"/img/easy-to-use.png",description:n.createElement(n.Fragment,null,"DAX Studio was designed with a clean, modern user interface that supports both a light and dark mode and provides rich metadata about your data model.")},{title:"Connect to any data model",Img:"/img/any-data-source.png",description:n.createElement(n.Fragment,null,"DAX Studio can connect to all the different 'flavours' of tabular models PowerPivot for Excel,  Power BI Desktop, Azure Analysis Services and Power BI Premium XMLA endpoints")},{title:"Powerful performance tuning tools",Img:"/img/performance-tuning.png",description:n.createElement(n.Fragment,null,"You can use features like Server Timings, View Metric and Benchmarking to profile and understand the performance of your DAX code")}];function m(e){let{title:t,Img:a,description:l}=e;return n.createElement("div",{className:(0,s.Z)("col col--4")},n.createElement("div",{className:"text--center"},n.createElement("img",{className:d,role:"img",src:a})),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("h3",null,t),n.createElement("p",null,l)))}function u(){return n.createElement("section",{className:c},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},i.map(((e,t)=>n.createElement(m,(0,o.Z)({key:t},e)))))))}var j=a(7611);const f="heroBanner_qdFl";function h(){const{siteConfig:e}=(0,l.Z)();return n.createElement("header",{className:(0,s.Z)("hero hero--primary",f)},n.createElement("div",{className:"container"},n.createElement("img",{src:e.themeConfig.navbar.logo.src,width:"200"}),n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:"hero__subtitle"},e.tagline)))}function g(){const{siteConfig:e}=(0,l.Z)();return n.createElement(r.Z,{title:""+e.title,description:"The ultimate tool for working with DAX Queries"},n.createElement(h,null),n.createElement("div",{className:"container"},n.createElement("div",{className:(0,s.Z)(f)},n.createElement("div",{className:"row justify-content-md-center"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col"}," Download the latest release of DAX Studio here:",n.createElement("br",null),n.createElement("br",null)))),n.createElement("div",{className:"col col--2"}),n.createElement("div",{className:"col "}," ",n.createElement(j.AM,null)),n.createElement("div",{className:"col "},n.createElement(j.BD,null)),n.createElement("div",{className:"col col--2"})),n.createElement("br",null),n.createElement("div",{className:"container"},"The details of the new features and fixes included in this release are available in the ",n.createElement("a",{href:"/changelog/latest"},"changelog")))),n.createElement("main",null,n.createElement(u,null)))}},6700:(e,t,a)=>{var n={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function s(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=l,e.exports=s,s.id=6700}}]);