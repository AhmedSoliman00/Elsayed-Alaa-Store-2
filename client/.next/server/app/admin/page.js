(()=>{var e={};e.id=3,e.ids=[3],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},51750:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var r=s(50482),i=s(69108),a=s(62563),n=s.n(a),l=s(68300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let c=["",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,80245)),"E:\\library\\ReactProjects\\App-v2\\client\\src\\app\\admin\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,35615)),"E:\\library\\ReactProjects\\App-v2\\client\\src\\app\\admin\\layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,51965)),"E:\\library\\ReactProjects\\App-v2\\client\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["E:\\library\\ReactProjects\\App-v2\\client\\src\\app\\admin\\page.jsx"],p="/admin/page",u={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/admin/page",pathname:"/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},14793:(e,t,s)=>{Promise.resolve().then(s.bind(s,34656))},35303:()=>{},34656:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>q});var r=s(95344),i=s(8428);s(8471);var a=s(3729),n=s(2717),l=s(43876),o=s(71564),c=s(23435),d=s(50658),p=s(4497),u=s(78518),m=s(48315),x=s(7415),h=s(65492),j=s(83185),g=s(13056),v=s(56506),f=s(80443);let b=(0,n.Z)(e=>({menuSliderContainer:{width:250,background:"#F5F5F5",color:"#09090A",height:"100%",padding:"0 10px"},avatar:{margin:"0.5rem auto",padding:"1rem",width:e.spacing(13),height:e.spacing(13)},listItem:{color:"#09090A"},hideOnDesktop:{[e.breakpoints.up("md")]:{display:"none"}}})),P=[{listIcon:r.jsx("i",{className:"bi bi-bar-chart fs-5"}),listText:"المنتجات",link:"/admin/products",name:"products"},{listIcon:r.jsx("i",{className:"bi bi-view-list fs-5"}),listText:"الطلبات",link:"/admin/orders",name:"orders"},{listIcon:r.jsx("i",{className:"bi bi-person-gear fs-5"}),listText:"طلبات الدعم",link:"/admin/order-support",name:"order-support"}];function y(){let e=(0,i.useRouter)(),t=(0,i.usePathname)(),s=b(),[n,y]=(0,a.useState)(!0),q=()=>{y(!n),console.log(t.split("/")[2])};return(0,r.jsxs)(r.Fragment,{children:[r.jsx(x.ZP,{}),(0,r.jsxs)(h.Z,{children:[r.jsx(f.Z,{onClick:q,className:s.hideOnDesktop,children:r.jsx(g.Z,{})}),r.jsx(j.ZP,{open:n,anchor:"right",onClose:q,children:(0,r.jsxs)(l.Z,{className:s.menuSliderContainer,component:"div",children:[r.jsx(l.Z,{children:r.jsx(o.Z,{className:s.avatar,src:"https://i.ibb.co/rx5DFbs/avatar.png",alt:"Juaneme8"})}),r.jsx(c.Z,{}),(0,r.jsxs)(l.Z,{sx:{flexDirection:"column",justifyContent:"space-between",display:"flex",minHeight:"80%"},children:[r.jsx(d.Z,{children:P.map((e,i)=>r.jsx(v.default,{href:e.link,className:`text-decoration-none ${t.split("/")[2]==e.name&&"admin-active"}`,children:(0,r.jsxs)(p.Z,{className:s.listItem,button:!0,children:[r.jsx(u.Z,{className:s.listItem,children:e.listIcon}),r.jsx(m.Z,{children:r.jsx("span",{className:"fs-6 fw-bold",children:e.listText})})]})},i))}),r.jsx(d.Z,{children:(0,r.jsxs)(p.Z,{className:s.listItem,button:!0,onClick:()=>{window.localStorage.removeItem("authAdminPanel"),e.push("/admin/login")},children:[r.jsx(u.Z,{className:s.listItem,children:r.jsx("i",{className:"bi bi-box-arrow-in-left fs-5"})}),r.jsx(m.Z,{children:r.jsx("span",{className:"fs-6 fw-bold",children:"تسجيل الخروج"})})]})})]})]})})]})]})}function q({children:e}){let t=(0,i.useRouter)();(0,a.useEffect)(()=>{window.localStorage.getItem("authAdminPanel")||t.push("/admin/login")});let s=(0,i.usePathname)();return r.jsx("div",{className:"admin-page",style:{minHeight:"100vh"},children:(0,r.jsxs)("div",{className:"row",style:{minHeight:"100vh"},children:[r.jsx("div",{className:"col-lg-2 col-sm-12",children:"login"!==s.split("/")[2]&&r.jsx("div",{className:"div",children:r.jsx(y,{})})}),r.jsx("div",{className:"col-lg-10 col-sm-12",children:r.jsx("div",{className:"div",children:e})})]})})}},35615:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>a,__esModule:()=>i,default:()=>n});let r=(0,s(86843).createProxy)(String.raw`E:\library\ReactProjects\App-v2\client\src\app\admin\layout.js`),{__esModule:i,$$typeof:a}=r,n=r.default},80245:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(25036);s(40002);let i=function(){return r.jsx("div",{className:"admin-home",children:r.jsx("h1",{children:"page"})})}},73881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(70337);let i=e=>[{type:"image/x-icon",sizes:"256x256",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},8471:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,194,337,772,615,829],()=>s(51750));module.exports=r})();