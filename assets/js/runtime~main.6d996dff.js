(()=>{"use strict";var e,f,c,a,d,b={},t={};function r(e){var f=t[e];if(void 0!==f)return f.exports;var c=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}r.m=b,e=[],r.O=(f,c,a,d)=>{if(!c){var b=1/0;for(i=0;i<e.length;i++){c=e[i][0],a=e[i][1],d=e[i][2];for(var t=!0,o=0;o<c.length;o++)(!1&d||b>=d)&&Object.keys(r.O).every((e=>r.O[e](c[o])))?c.splice(o--,1):(t=!1,d<b&&(b=d));if(t){e.splice(i--,1);var n=a();void 0!==n&&(f=n)}}return f}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[c,a,d]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var b={};f=f||[null,c({}),c([]),c(c)];for(var t=2&a&&e;"object"==typeof t&&!~f.indexOf(t);t=c(t))Object.getOwnPropertyNames(t).forEach((f=>b[f]=()=>e[f]));return b.default=()=>e,r.d(d,b),d},r.d=(e,f)=>{for(var c in f)r.o(f,c)&&!r.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:f[c]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((f,c)=>(r.f[c](e,f),f)),[])),r.u=e=>"assets/js/"+({1:"8eb4e46b",40:"1ec77461",53:"935f2afb",159:"770f34b2",166:"0fd71c41",175:"269afbcb",193:"8cd7f2ba",241:"78d39804",516:"e0771895",533:"b2b675dd",647:"b8c6ff78",671:"cfb3e964",702:"57319746",749:"e74907cc",794:"9a363bf5",831:"3a50354e",1054:"4a60097b",1055:"269c4cbc",1064:"52af686b",1180:"d638f728",1233:"463c643f",1236:"098c7e4e",1274:"153ff16b",1352:"ef284668",1372:"83623e2b",1380:"593fbaf2",1389:"a2698c3b",1391:"28f93917",1477:"b2f554cd",1652:"9f190227",1707:"2233a1d4",1713:"a7023ddc",1765:"57710b8d",1881:"b94b0bc5",1902:"6a0debeb",2032:"5ed3387d",2033:"578340b3",2046:"99f967d1",2085:"f174ea87",2275:"c7b02872",2455:"a7513f74",2521:"84510ede",2535:"814f3328",2604:"b31a7ea1",2653:"efc591cd",2656:"7f9f2f99",2704:"55c0771e",2903:"7c399f03",2930:"0f13792b",3025:"2e3d8143",3034:"c6d64e38",3055:"7d8f9c6f",3085:"1f391b9e",3089:"a6aa9e1f",3131:"1ed98f26",3205:"fff8345c",3237:"1df93b7f",3238:"24e9227a",3337:"067e97f4",3419:"bccd4ed4",3435:"6d397f01",3439:"4a565e32",3466:"5d529600",3500:"7e9909cd",3608:"9e4087bc",3754:"83f9c181",3890:"8644cb3d",3968:"9d55670a",4013:"01a85c17",4094:"fc932ebe",4130:"201aaf0a",4198:"78784c1a",4292:"fb0fc812",4337:"4c28931d",4390:"477c0b90",4531:"08de4570",4580:"c6619a71",4643:"6181e220",4716:"e847458b",4758:"17df8513",4884:"c088b524",4928:"963ce625",4994:"0b5a3683",5172:"37c41fcc",5386:"d51ed584",5736:"74b52c12",5792:"38de0bf8",5932:"41b0eeee",5951:"0692e56b",6084:"a878af63",6103:"ccc49370",6164:"6454eea4",6268:"e49a1c2d",6530:"c1306eef",6641:"3ab9ced8",6703:"b8a19701",6744:"f55b9d4d",6746:"cb2a68c8",6792:"68e1e469",6795:"62679cae",6806:"1e84b078",6938:"a8066378",6954:"146a3fea",6965:"b936a1c9",7091:"472ebff0",7096:"bbf923dd",7160:"c7cc4d21",7177:"3f12cad5",7287:"9f7a4dc4",7329:"375899c1",7373:"af4979cf",7486:"797206cd",7501:"5ad9220a",7531:"3fef104c",7650:"d4d66791",7737:"c7cd18fc",7809:"51d69ccd",7820:"e0093d59",7859:"cbe0d3d9",7918:"17896441",7920:"1a4e3797",8249:"8b881688",8267:"986c1f6c",8322:"4cd738bd",8341:"63f06f20",8441:"37941f36",8448:"b5b1eb5b",8474:"b98614be",8486:"cffb28e8",8529:"ac5280f2",8556:"c2844a2f",8610:"6875c492",8709:"bb2a38b4",8745:"1f8db154",8949:"f7335334",8999:"d0ae32ce",9246:"ce613f59",9326:"3bb663a9",9334:"0431096d",9390:"c1388ae0",9418:"8424f61e",9466:"eda46626",9490:"29e9c80d",9514:"1be78505",9547:"a342c8c4",9671:"0e384e19",9673:"363dcd3c",9674:"27116c6e",9804:"e42faa22",9817:"14eb3368",9850:"ae8d26d0",9855:"71aaf241",9891:"471ee850",9974:"74088e0d"}[e]||e)+"."+{1:"e950dbdf",40:"589b2bfc",53:"7a00d893",159:"ac75cfb5",166:"af5cae69",175:"e929c576",193:"e023c8cd",241:"210e232e",516:"a7efc0b2",533:"503ff8a3",543:"e6ab5fa8",647:"d7013f38",671:"8b979388",702:"df53bc04",749:"b0973e72",794:"c786ec32",831:"6e5b752d",1054:"c86dbd69",1055:"2cc441c3",1064:"26438361",1180:"9e6bed67",1233:"e035eca7",1236:"9eb75b5e",1274:"6e525ed9",1352:"359c258b",1372:"9e56b35d",1380:"fcc74b43",1389:"4ba3322e",1391:"5f8153e6",1426:"0d1349e3",1477:"77bdbbe6",1652:"66ffcdd3",1707:"23f70564",1713:"acbb50f2",1765:"7288867b",1881:"9b55251b",1902:"641145b1",2032:"1777c974",2033:"8ea9a6b3",2046:"cd43890a",2085:"4b5773fa",2275:"53a864a4",2455:"8453b0c0",2521:"9d1464db",2529:"489aec43",2535:"b59d1c44",2604:"1e015345",2653:"c101f6e1",2656:"9965c100",2704:"4c59d2fb",2903:"386525a8",2930:"089e0d6e",3025:"70bd6b90",3034:"b0148f97",3055:"b3e666be",3085:"6af3468a",3089:"ed3a22de",3131:"5b26db94",3205:"cc7277f0",3237:"807a1d39",3238:"6db477ae",3337:"add8f3ae",3419:"520cb28f",3435:"11b0fb97",3439:"b2b014c8",3466:"0360d1e8",3500:"e6efd1a1",3608:"95144c82",3754:"cf113949",3890:"46d55183",3968:"f16b18bf",4013:"30fb252b",4094:"1e51054a",4130:"96c64001",4198:"59eaaf9d",4292:"e43da6cf",4337:"327b3254",4390:"dc12b73f",4531:"ab228513",4580:"8e60c022",4643:"812654ac",4716:"80baa9ee",4758:"ce984827",4884:"d4838735",4928:"eec0d5d5",4972:"d3eb53f8",4994:"51ad8666",5172:"7783d44f",5386:"ae764f57",5736:"12a68145",5792:"6a673046",5932:"55cb5c86",5951:"9ecdec1c",6084:"f05d793d",6103:"ac0d232a",6164:"107aaae9",6268:"7936c20e",6530:"f56ff0e9",6641:"a00df4e0",6703:"cce99df4",6744:"da67862d",6746:"b8a90669",6792:"a5a41ab2",6795:"985914a6",6806:"64a5ea84",6938:"997cec88",6945:"d615d9f5",6954:"e16d2cc2",6965:"6f772147",7091:"4395b1d5",7096:"c3f8e6e8",7160:"672f4057",7177:"cf4731d3",7287:"8c09b85d",7329:"31ff24ef",7373:"93422cee",7441:"d4e06d59",7486:"3161b740",7501:"85c4c879",7531:"7012fd56",7650:"787f9f01",7737:"43cdedf4",7809:"cac344ce",7820:"5bb946ea",7859:"a11fd439",7918:"25fc7029",7920:"b3acaf52",8249:"9ba20212",8267:"7a6c0120",8322:"0b34f0ab",8341:"7f5e6d08",8441:"a988bef0",8448:"e31f54ba",8474:"d6ec70e7",8486:"ef6f789f",8529:"50584281",8556:"d1127275",8610:"85c17e58",8709:"9b0957c0",8718:"d27c9383",8745:"ae2fd587",8894:"a2d6c066",8949:"980119f0",8999:"00dca5f6",9246:"94a712ce",9326:"1c9f57e4",9334:"f73e38ce",9390:"d9804be8",9418:"2f1cbd0a",9466:"745ad48d",9490:"17926177",9514:"748e226d",9547:"09db971d",9603:"4ada11f8",9671:"dd80ced2",9673:"e75dc0a8",9674:"7a5b4554",9804:"5842e515",9817:"82cce2b8",9850:"fab67fa9",9855:"e1b5bbf9",9891:"389d928b",9974:"a55f9eb4"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),a={},d="daxstudio-docusaurus:",r.l=(e,f,c,b)=>{if(a[e])a[e].push(f);else{var t,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+c){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+c),t.src=e),a[e]=[f];var l=(f,c)=>{t.onerror=t.onload=null,clearTimeout(s);var d=a[e];if(delete a[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(c))),f)return f(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/",r.gca=function(e){return e={17896441:"7918",57319746:"702","8eb4e46b":"1","1ec77461":"40","935f2afb":"53","770f34b2":"159","0fd71c41":"166","269afbcb":"175","8cd7f2ba":"193","78d39804":"241",e0771895:"516",b2b675dd:"533",b8c6ff78:"647",cfb3e964:"671",e74907cc:"749","9a363bf5":"794","3a50354e":"831","4a60097b":"1054","269c4cbc":"1055","52af686b":"1064",d638f728:"1180","463c643f":"1233","098c7e4e":"1236","153ff16b":"1274",ef284668:"1352","83623e2b":"1372","593fbaf2":"1380",a2698c3b:"1389","28f93917":"1391",b2f554cd:"1477","9f190227":"1652","2233a1d4":"1707",a7023ddc:"1713","57710b8d":"1765",b94b0bc5:"1881","6a0debeb":"1902","5ed3387d":"2032","578340b3":"2033","99f967d1":"2046",f174ea87:"2085",c7b02872:"2275",a7513f74:"2455","84510ede":"2521","814f3328":"2535",b31a7ea1:"2604",efc591cd:"2653","7f9f2f99":"2656","55c0771e":"2704","7c399f03":"2903","0f13792b":"2930","2e3d8143":"3025",c6d64e38:"3034","7d8f9c6f":"3055","1f391b9e":"3085",a6aa9e1f:"3089","1ed98f26":"3131",fff8345c:"3205","1df93b7f":"3237","24e9227a":"3238","067e97f4":"3337",bccd4ed4:"3419","6d397f01":"3435","4a565e32":"3439","5d529600":"3466","7e9909cd":"3500","9e4087bc":"3608","83f9c181":"3754","8644cb3d":"3890","9d55670a":"3968","01a85c17":"4013",fc932ebe:"4094","201aaf0a":"4130","78784c1a":"4198",fb0fc812:"4292","4c28931d":"4337","477c0b90":"4390","08de4570":"4531",c6619a71:"4580","6181e220":"4643",e847458b:"4716","17df8513":"4758",c088b524:"4884","963ce625":"4928","0b5a3683":"4994","37c41fcc":"5172",d51ed584:"5386","74b52c12":"5736","38de0bf8":"5792","41b0eeee":"5932","0692e56b":"5951",a878af63:"6084",ccc49370:"6103","6454eea4":"6164",e49a1c2d:"6268",c1306eef:"6530","3ab9ced8":"6641",b8a19701:"6703",f55b9d4d:"6744",cb2a68c8:"6746","68e1e469":"6792","62679cae":"6795","1e84b078":"6806",a8066378:"6938","146a3fea":"6954",b936a1c9:"6965","472ebff0":"7091",bbf923dd:"7096",c7cc4d21:"7160","3f12cad5":"7177","9f7a4dc4":"7287","375899c1":"7329",af4979cf:"7373","797206cd":"7486","5ad9220a":"7501","3fef104c":"7531",d4d66791:"7650",c7cd18fc:"7737","51d69ccd":"7809",e0093d59:"7820",cbe0d3d9:"7859","1a4e3797":"7920","8b881688":"8249","986c1f6c":"8267","4cd738bd":"8322","63f06f20":"8341","37941f36":"8441",b5b1eb5b:"8448",b98614be:"8474",cffb28e8:"8486",ac5280f2:"8529",c2844a2f:"8556","6875c492":"8610",bb2a38b4:"8709","1f8db154":"8745",f7335334:"8949",d0ae32ce:"8999",ce613f59:"9246","3bb663a9":"9326","0431096d":"9334",c1388ae0:"9390","8424f61e":"9418",eda46626:"9466","29e9c80d":"9490","1be78505":"9514",a342c8c4:"9547","0e384e19":"9671","363dcd3c":"9673","27116c6e":"9674",e42faa22:"9804","14eb3368":"9817",ae8d26d0:"9850","71aaf241":"9855","471ee850":"9891","74088e0d":"9974"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(f,c)=>{var a=r.o(e,f)?e[f]:void 0;if(0!==a)if(a)c.push(a[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var d=new Promise(((c,d)=>a=e[f]=[c,d]));c.push(a[2]=d);var b=r.p+r.u(f),t=new Error;r.l(b,(c=>{if(r.o(e,f)&&(0!==(a=e[f])&&(e[f]=void 0),a)){var d=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;t.message="Loading chunk "+f+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,a[1](t)}}),"chunk-"+f,f)}},r.O.j=f=>0===e[f];var f=(f,c)=>{var a,d,b=c[0],t=c[1],o=c[2],n=0;if(b.some((f=>0!==e[f]))){for(a in t)r.o(t,a)&&(r.m[a]=t[a]);if(o)var i=o(r)}for(f&&f(c);n<b.length;n++)d=b[n],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},c=self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[];c.forEach(f.bind(null,0)),c.push=f.bind(null,c.push.bind(c))})()})();