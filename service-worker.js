if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let b={};const n=e=>c(e,d),f={module:{uri:d},exports:b,require:n};i[d]=Promise.all(r.map((e=>f[e]||n(e)))).then((e=>(s(...e),b)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/08/19/hello-world/index.html",revision:"bd3dbbd830146b91e940d00d453857db"},{url:"2022/09/07/my-first-blog/index.html",revision:"ccd267ac9fef791539c4a04427da7c82"},{url:"2022/09/10/second-article/index.html",revision:"1abb9c0287c2f95028c215b15d49409d"},{url:"about/index.html",revision:"94d4a1d4ec5c700fbb24a54b568c9276"},{url:"archives/2022/08/index.html",revision:"85e9c0f095773914d455ee326390a30e"},{url:"archives/2022/09/index.html",revision:"067040b46ec736f574c919e86711896b"},{url:"archives/2022/index.html",revision:"f99aa3c2720c3b375cb4fe3d6d7a3640"},{url:"archives/index.html",revision:"7be293262ba6051b28efe8722060e7b5"},{url:"categories/index.html",revision:"eaa36b5e30ac9c4fbc03bf7615d9b0e4"},{url:"css/custom.css",revision:"bb265f372243b0dd97e64ad707c3eb8e"},{url:"css/index.css",revision:"3435e7d0b1f88bdbc2ed94f277fee06e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"9fd7cc68f6cdf77109534e42cd9431a6"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avter.png",revision:"805d4a582c25bbaedbf492182578108d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"7dc9bb977a8627fdbbe2a34ee3db3398"},{url:"js/custom.js",revision:"b20b0a335b58e2f2427eb16c225f433e"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"73b50a8bbc13aa73037f9e9b2e5f3316"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"bfcefcd36fe4c5b48043e2188ee8ff2b"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"movies/index.html",revision:"fe03025f688c741c9963ac30975186b6"},{url:"music/index.html",revision:"ece9cdafffb2d1c1968337641fe2718f"}],{})}));
//# sourceMappingURL=service-worker.js.map
