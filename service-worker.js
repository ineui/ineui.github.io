if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const a=e=>s(e,c),f={module:{uri:c},exports:n,require:a};i[c]=Promise.all(r.map((e=>f[e]||a(e)))).then((e=>(d(...e),n)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/08/19/hello-world/index.html",revision:"ff3972b875c3e45f867bd5f86a365cbe"},{url:"2022/09/07/my-first-blog/index.html",revision:"2fc27e3d0e04905e564dc6830bec3f6b"},{url:"2022/09/10/second-article/index.html",revision:"70255121de0baad6e312f64f44ff861e"},{url:"about/index.html",revision:"806289e86bb970a617fd95820bcf8b22"},{url:"archives/2022/08/index.html",revision:"0c163d94d134d1d550ea021cac5840e0"},{url:"archives/2022/09/index.html",revision:"52abd863bb365a41a9ffe4e15ca171ed"},{url:"archives/2022/index.html",revision:"0bf1d6aa9d8e3c83a06893dbddc098ab"},{url:"archives/index.html",revision:"175eeb57ac5444b5eb5c26ca97f61b10"},{url:"categories/index.html",revision:"fa8c3d4db079aa8aada2606f1635c0fe"},{url:"css/custom.css",revision:"bb265f372243b0dd97e64ad707c3eb8e"},{url:"css/index.css",revision:"3435e7d0b1f88bdbc2ed94f277fee06e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"433c3577f04040b7e856d67fe7cc16df"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"73b50a8bbc13aa73037f9e9b2e5f3316"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"54968557d074b2bb417aa35b05bd3f28"},{url:"tags/index.html",revision:"4a0da44be0e5619390356ca0c668b955"}],{})}));
//# sourceMappingURL=service-worker.js.map
