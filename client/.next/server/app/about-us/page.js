(()=>{var e={};e.id=554,e.ids=[554],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},81666:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>o});var r=t(50482),a=t(69108),i=t(62563),n=t.n(i),l=t(68300),c={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>l[e]);t.d(s,c);let o=["",{children:["about-us",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,10374)),"E:\\library\\ReactProjects\\App-v2\\client\\src\\app\\about-us\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,51965)),"E:\\library\\ReactProjects\\App-v2\\client\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["E:\\library\\ReactProjects\\App-v2\\client\\src\\app\\about-us\\page.jsx"],m="/about-us/page",p={require:t,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/about-us/page",pathname:"/about-us",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},97792:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,31900,23)),Promise.resolve().then(t.bind(t,47720))},47720:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});var r=t(95344),a=t(53608),i=t(89410),n=t(3729),l=t(18671);let c=function(){let[e,s]=(0,n.useState)({name:"",phone:"",placeType:"",country:"",email:"",message:"",interested:""}),t=t=>{s({...e,[t.target.name]:t.target.value})},c=async t=>{t.preventDefault(),console.log(e);try{await a.Z.post("http://localhost:5000/forms/contact",e),l.Am.success("تم ارسال البيانات بنجاح"),s({name:"",phone:"",placeType:"",country:"",email:"",message:"",interested:""})}catch(e){console.log(e)}};return(0,r.jsxs)("div",{className:"help",children:[r.jsx("div",{className:"main-heading mt-5",children:r.jsx("h1",{className:"text-primary",children:"هل تريد المساعدة"})}),r.jsx("div",{className:"icons text-center",children:r.jsx(i.default,{src:"/icon/line.png",alt:"line",width:225,height:22,className:"mt-3"})}),r.jsx("div",{className:"form mt-5",children:r.jsx("form",{onSubmit:c,children:(0,r.jsxs)("div",{className:"row row-gap-4 w-75 mx-auto",children:[r.jsx("div",{className:"col-lg-6 col-sm-12",children:r.jsx("input",{type:"text",placeholder:"الاسم*",className:"form-control",required:!0,name:"name",onChange:t,value:e.name})}),r.jsx("div",{className:"col-lg-6 col-sm-12",children:r.jsx("input",{type:"text",onChange:t,placeholder:"رقم الهاتف*",className:"form-control",value:e.phone,required:!0,name:"phone"})}),r.jsx("div",{className:"col-lg-6 col-sm-12",children:r.jsx("input",{type:"text",onChange:t,placeholder:"نوع المكينة*",value:e.placeType,className:"form-control",required:!0,name:"placeType"})}),r.jsx("div",{className:"col-lg-6 col-sm-12",children:r.jsx("input",{onChange:t,type:"text",placeholder:"البلد*",value:e.country,className:"form-control",required:!0,name:"country"})}),r.jsx("div",{className:"col-12",children:r.jsx("input",{onChange:t,type:"email",placeholder:"البريد الالكتروني*",value:e.email,className:"form-control",required:!0,name:"email"})}),r.jsx("div",{className:"col-12",children:r.jsx("textarea",{placeholder:"اكتب استفسارك*",className:"form-control",value:e.message,onChange:t,rows:"7",required:!0,name:"message"})}),r.jsx("div",{className:"col-12",children:r.jsx("button",{className:"btn btn-primary fs-5 w-100",children:"ارسال"})})]})})})]})}},10374:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var r=t(25036),a=t(2813);t(40002);var i=t(34698);let n=function(){return r.jsx("div",{className:"about-us",children:(0,r.jsxs)("div",{className:"container",children:[r.jsx("div",{className:"main-heading mt-5",children:r.jsx("h1",{className:"text-primary",children:"من نحن"})}),r.jsx("div",{className:"description text-center fs-5 mb-5",children:(0,r.jsxs)("p",{children:["مؤسسة"," ",r.jsx("span",{className:"main-heading text-primary",style:{zIndex:"9"},children:"السيد علاء"})," ","هي شركة رائدة في قطاع تصنيع جميع انواع ماكينات الرخام والجرانيت علي المستوى المحلي والعربي في منطقة الشرق الاوسط وشمال افريقيا،حيث تمتلك اكثر من 18عام من الخبرة التي مكنتها من تطوير مجال ماكينات الرخام والجرانيت بجميع انواعها اليدوية والاتوماتيكية،كما تسعي جاهدة لتحقيق اهداف ارضاء عملائها حيث تم تخصيص فريق صيانة مدرب ومجهز لاي اعمال صيانة لمنتجاتها او خدمات مابعد البيع،كما توفر ايضا جميع قطع غيار منتجاتها بكافة انواعها سواء محلي الصنع منها او المستورد،كما تعمل ايضا علي اعطاء الرأي والمشورة الصحيحة لكل عميل علي وجه الاخص المستجدين في استخدام ماكينات الرخام والجرانيت،لان هدف المؤسسة الاساسي هو الارتقاء بمجال صناعة ماكينات الرخام والجرانيت لأعلي مستوي ورفع علامة الجودة المصرية علي المستوي المحلي والدولى في منطقة الشرق الاوسط"]})}),(0,r.jsxs)("div",{className:"row mt-5 align-items-center row-gap-5",children:[(0,r.jsxs)("div",{className:"col-lg-6 col-sm-12",children:[r.jsx("div",{className:"main-heading text-start mx-0",children:r.jsx("h1",{className:"text-primary",children:"كيف نساعدك "})}),(0,r.jsxs)("div",{className:"description",children:["توفر مؤسسة"," ",r.jsx("span",{className:"main-heading text-primary fs-5",style:{zIndex:"9"},children:"السيد علاء"})," ","احدث ماكينات الرخام والجرانيت سواءً ماكينات تقطيع الرخام والجرانيت ( ماكينة قص الرخام والجرانيت ) أو جلايات الرخام والجرانيت والمسؤولة عن تلميع الرخام والجرانيت قبل تقديمه في صورة سلعة قابلة للاستهلاك التجاري. وهو ما يُساعد أصحاب المصانع والورش في تطوير أعمالهم الحالية بصورة ملحوظة أو البدء بمعدات ممتازة تساعدهم على المنافسة في السوق بأفضل جودة ممكنة."]})]}),r.jsx("div",{className:"col-lg-6 col-sm-12",children:r.jsx(a.default,{src:"/image/chromed.png",width:507,height:484,alt:"image"})}),r.jsx("div",{className:"col-12",children:r.jsx(i.ZP,{})})]})]})})}},34698:(e,s,t)=>{"use strict";t.d(s,{ZP:()=>n});let r=(0,t(86843).createProxy)(String.raw`E:\library\ReactProjects\App-v2\client\src\app\components\home-components\Help.jsx`),{__esModule:a,$$typeof:i}=r,n=r.default},73881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(70337);let a=e=>[{type:"image/x-icon",sizes:"256x256",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[638,194,337,671,813,829],()=>t(81666));module.exports=r})();