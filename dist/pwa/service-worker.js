if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,n,s)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const f={uri:location.origin+c.slice(1)};return Promise.all(n.map(c=>{switch(c){case"exports":return i;case"module":return f;default:return e(c)}})).then(e=>{const c=s(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"quasar-nasa-photos"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/app.0e433876.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/vendor.92e793e6.css",revision:"691cfced4fbf13dd98bd92b4e9016a6e"},{url:"favicon.ico",revision:"8b9eb314ff597f6f7c7bf8c7a5f717ec"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:"04b7fd97f88b82dccce5ec446ccc29e6"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:"da2721c68b4bc80db8d4c404f76b118c"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:"bf0f407102faf3a0b521d3b545f547a5"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:"68d6dabfe54e245e7d5d5c16c3c4b1a9"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:"64bba9c4e8156c152050c657e9d24bf1"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:"dc3e086fc0c5addc09702e111d2adb42"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.55e9c550.woff",revision:"852cf9255305bdf184a8b38cd38691ae"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c934fe77.woff2",revision:"8bf5ee9f803346f0b0de2c97f649f97f"},{url:"icons/apple-icon-120x120.png",revision:"c9920835d2adb9f6ab6a79a27f220a3a"},{url:"icons/apple-icon-152x152.png",revision:"9df9e65a1d2c6df3bd9143666b0e8c63"},{url:"icons/apple-icon-167x167.png",revision:"4300c6c136c06abcd781aa18644dd7a3"},{url:"icons/apple-icon-180x180.png",revision:"88dbf3d9e8269f1298486d103e22a57c"},{url:"icons/favicon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/favicon-16x16.png",revision:"df5ff7f4728c4ef4b951d46b4136906f"},{url:"icons/favicon-32x32.png",revision:"64aa9e88dd6545f64226c1e2230f66cc"},{url:"icons/favicon-96x96.png",revision:"d22664397060743b24e8956a5a3fcdec"},{url:"icons/icon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/icon-192x192.png",revision:"a1b423855a450ae7adbd9d2a782e0dfb"},{url:"icons/icon-256x256.png",revision:"9f33ebc999e51d0dc2975fc573d53a0b"},{url:"icons/icon-384x384.png",revision:"a126be0d50ed682c3129e0b8b31f680a"},{url:"icons/icon-512x512.png",revision:"02abd24e7c8638e848d96a6bf78d2c27"},{url:"icons/ms-icon-144x144.png",revision:"f256ec55be616f32ae486ab7571eb936"},{url:"icons/safari-pinned-tab.svg",revision:"de8107bed7f087fb443d8e36855e7467"},{url:"index.html",revision:"ee300f2f80670e0a3941bf530df61a64"},{url:"js/2.e718f388.js",revision:"7deb058e880948713fb48e30eb4611c1"},{url:"js/3.cb927d70.js",revision:"d9cf539f7f3662cb6226e03e4e19a958"},{url:"js/4.3b78ebeb.js",revision:"5c86aebb782b451fa6a488ef528e9446"},{url:"js/5.08539ec1.js",revision:"8bba2b886b9ce08acb675056a0a8e011"},{url:"js/6.3dd580dd.js",revision:"0e6efb2415187ba8f2e7239dad22d8b8"},{url:"js/app.ffbdc5d4.js",revision:"6d4407d52b947684ecd5a14b49d93a21"},{url:"js/vendor.0e7193eb.js",revision:"0647c6419930c6decf9b2632ec2d6658"},{url:"manifest.json",revision:"92ac3de797240dc8177afacdb9260be1"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));