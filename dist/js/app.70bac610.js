(function(){"use strict";var e={341:function(e,t,n){var r=n(9242),o=n(3396);const a=(0,o.Uk)("Events"),i=(0,o.Uk)(" | "),u=(0,o.Uk)("About");function s(e,t){const n=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(n,{to:{name:"EventList"}},{default:(0,o.w5)((()=>[a])),_:1}),i,(0,o.Wm)(n,{to:{name:"About"}},{default:(0,o.w5)((()=>[u])),_:1})]),(0,o.Wm)(r)],64)}var v=n(89);const c={},l=(0,v.Z)(c,[["render",s]]);var p=l,d=n(2483);const f=e=>((0,o.dD)("data-v-527a7fa2"),e=e(),(0,o.Cn)(),e),g=f((()=>(0,o._)("h1",null,"Events for Good",-1))),h={class:"events"},w={class:"pagination"},m=(0,o.Uk)("< Previous"),_=(0,o.Uk)(" Next >");function b(e,t,n,r,a,i){const u=(0,o.up)("EventCard"),s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[g,(0,o._)("div",h,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.events,(e=>((0,o.wg)(),(0,o.j4)(u,{key:e.id,event:e},null,8,["event"])))),128)),(0,o._)("div",w,[1!=n.page?((0,o.wg)(),(0,o.j4)(s,{key:0,id:"page-prev",to:{name:"EventList",query:{page:n.page-1}},rel:"prev"},{default:(0,o.w5)((()=>[m])),_:1},8,["to"])):(0,o.kq)("",!0),i.hasNextPage?((0,o.wg)(),(0,o.j4)(s,{key:1,id:"page-next",to:{name:"EventList",query:{page:n.page+1}},rel:"next"},{default:(0,o.w5)((()=>[_])),_:1},8,["to"])):(0,o.kq)("",!0)])])],64)}var k=n(7139);const E={class:"event-card"};function y(e,t,n,r,a,i){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(u,{class:"event-link",to:{name:"EventDetails",params:{id:n.event.id}}},{default:(0,o.w5)((()=>[(0,o._)("div",E,[(0,o._)("span",null,"@"+(0,k.zw)(n.event.time)+" on "+(0,k.zw)(n.event.date),1),(0,o._)("h4",null,(0,k.zw)(n.event.title),1)])])),_:1},8,["to"])}var j={name:"EventCard",props:{event:{type:Object,required:!0}}};const O=(0,v.Z)(j,[["render",y],["__scopeId","data-v-6ebb5ca0"]]);var x=O,z=n(6265),C=n.n(z);const D=C().create({baseURL:"https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});var q={getEvents(e,t){return D.get("/events?_limit="+e+"&_page="+t)},getEvent(e){return D.get("/events/"+e)}},P={name:"EventList",props:["page"],components:{EventCard:x},data(){return{events:null,totalEvents:0}},created(){(0,o.m0)((()=>{this.events=null,q.getEvents(2,this.page).then((e=>{this.events=e.data,this.totalEvents=e.headers["x-total-count"]})).catch((e=>{console.log(e)}))}))},computed:{hasNextPage(){var e=Math.ceil(this.totalEvents/2);return this.page<e}}};const L=(0,v.Z)(P,[["render",b],["__scopeId","data-v-527a7fa2"]]);var U=L;const A={class:"about"},T=(0,o._)("h1",null,"A site for events to better the world.",-1),Z=[T];function H(e,t){return(0,o.wg)(),(0,o.iD)("div",A,Z)}const I={},M=(0,v.Z)(I,[["render",H]]);var N=M;const W={key:0};function Y(e,t,n,r,a,i){return a.event?((0,o.wg)(),(0,o.iD)("div",W,[(0,o._)("h1",null,(0,k.zw)(a.event.title),1),(0,o._)("p",null,(0,k.zw)(a.event.time)+" on "+(0,k.zw)(a.event.date)+" @ "+(0,k.zw)(a.event.location),1),(0,o._)("p",null,(0,k.zw)(a.event.description),1),(0,o._)("span",null,"Event #"+(0,k.zw)(e.$route.params.id),1)])):(0,o.kq)("",!0)}var R={props:["id"],data(){return{event:null}},created(){q.getEvent(this.id).then((e=>{this.event=e.data})).catch((e=>{console.log(e)}))}};const F=(0,v.Z)(R,[["render",Y]]);var G=F;const K=[{path:"/",name:"EventList",component:U,props:e=>({page:parseInt(e.query.page)||1})},{path:"/about",name:"About",component:N},{path:"/event/:id",name:"EventDetails",props:!0,component:G}],V=(0,d.p7)({history:(0,d.PO)("/"),routes:K});var $=V,B=n(65),J=(0,B.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(p).use(J).use($).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(c--,1);var v=o();void 0!==v&&(t=v)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],s=r[2],v=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var c=s(n)}for(t&&t(r);v<i.length;v++)a=i[v],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkreal_vue_app"]=self["webpackChunkreal_vue_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(341)}));r=n.O(r)})();
//# sourceMappingURL=app.70bac610.js.map