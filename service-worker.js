if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const f=e=>a(e,s),n={module:{uri:s},exports:c,require:f};i[s]=Promise.all(r.map((e=>n[e]||f(e)))).then((e=>(d(...e),c)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/09/07/my-first-blog/index.html",revision:"8cb3d3a5aa7dc735426f16ff1cd7728e"},{url:"2023/01/11/my-2022/index.html",revision:"7d34dd61691bb4f0de68239082be759c"},{url:"2023/01/13/makeNote/image-13.png",revision:"fbce0e903f8cf67bd06e226e387d5114"},{url:"2023/01/13/makeNote/image-14.png",revision:"47c737c0046bb0769c18b1e08e4ace03"},{url:"2023/01/13/makeNote/image-15.png",revision:"46fcc00ad715a11c32351f3b78c380c7"},{url:"2023/01/13/makeNote/image-16.png",revision:"e55e3455fc449b51ba22d8a7f53e0cf8"},{url:"2023/01/13/makeNote/image-17.png",revision:"016de21d37a05e873811aeaf53cee3dd"},{url:"2023/01/13/makeNote/image-18.png",revision:"591e49597734a6f8c376bbe6dc4efb23"},{url:"2023/01/13/makeNote/image-19.png",revision:"8119b4f83d4318b4fffb7f4729614be4"},{url:"2023/01/13/makeNote/image-20.png",revision:"381931fa889b2eab96310784fcc92f97"},{url:"2023/01/13/makeNote/image-20230113124527359.png",revision:"82923549bdc0249640c607e37ca39f59"},{url:"2023/01/13/makeNote/index.html",revision:"00447a9d6ef0d3693907e4e8e3c273c3"},{url:"about/index.html",revision:"e6d907846086e941dd229303a65ddf01"},{url:"archives/2022/09/index.html",revision:"7a5129d7395c708d6fff8b09df0f1bcb"},{url:"archives/2022/index.html",revision:"f2b7db1950f47adb34a7b4e7366ba966"},{url:"archives/2023/01/index.html",revision:"a8e0c1c1bb8b176b64a385ebc2509d84"},{url:"archives/2023/index.html",revision:"71f1f649a5594fbd867cb8f67dc768a3"},{url:"archives/index.html",revision:"31c2f4e11025dbdf35a086a64a5639c0"},{url:"css/custom.css",revision:"bb265f372243b0dd97e64ad707c3eb8e"},{url:"css/index.css",revision:"0000a485291e71b5dda25519dcbaf954"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avter.png",revision:"805d4a582c25bbaedbf492182578108d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"1f3080ad56812832438b0a3aefe1d000"},{url:"js/custom.js",revision:"9ea42a300fa8ec4548fe464da16d17a6"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"73b50a8bbc13aa73037f9e9b2e5f3316"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"c143f032d58eb25f2bf1130f4e787476"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"tags/工具构建/index.html",revision:"6734ca95e42dd470a4032534dec9ad6a"}],{})}));
//# sourceMappingURL=service-worker.js.map
