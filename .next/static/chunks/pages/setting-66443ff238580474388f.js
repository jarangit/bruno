(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{5626:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return B}});var n=t(1664),a=t(1163),c=t(7294),o=t(5998),i=t(2809),s=t(3328),d=t(5376),u=t(5893);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}s.kL.register(s.uw,s.f$,s.od,s.jn,s.ST,s.u,s.De);var p=["-1","0","1"],g=["#FF4967","#FFA726","#56D9FE"],x={plugins:{legend:{display:!1}},responsive:!0,maintainAspectRatio:!1,scales:{y:{display:!1},x:{grid:{color:"#595959"}}}};function b(e,r){var t=g[0],n=g[1],a=g[2],c=e.createLinearGradient(0,r.top,550,r.bottom);return c.addColorStop(0,t),c.addColorStop(.5,n),c.addColorStop(1,a),c}function h(e){var r=e.dataGraph,t={labels:p,datasets:[{label:"Dataset 1",data:r.length>0?r.map((function(e){return e.unit_price})):"",tension:.5,pointRadius:0}]},n=(0,c.useRef)(null),a=(0,c.useState)({datasets:[]}),o=a[0],i=a[1];return(0,c.useEffect)((function(){var e=n.current;if(e){var r=f(f({},t),{},{datasets:t.datasets.map((function(r){return f(f({},r),{},{borderColor:b(e.ctx,e.chartArea)})}))});i(r)}}),[]),(0,u.jsx)(u.Fragment,{children:r.length>0?(0,u.jsx)(d.kL,{ref:n,type:"line",data:o,options:x}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.kL,{ref:n,type:"line",className:"relative",data:o,options:x}),(0,u.jsx)("div",{className:" absolute top-1/2 left-[45%]",children:"No Data"})]})})}var j=t(1508),m=t(266),v=t(809),y=t.n(v),_=t(9059),k=t.n(_),w=t(7536),O=t(911),P=t(9198),N=t.n(P),S=(t(7276),function(e){var r=e.setTime,t=e.current,n=e.onChange;console.log("%cMyProject%cline:11%ccurrent","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(17, 63, 61);padding:3px;border-radius:2px",t);var a=(0,c.useState)(new Date),o=a[0],i=a[1];return(0,c.useEffect)((function(){var e=parseFloat(t.slice(0,2)),r=parseFloat(t.slice(3,5));console.log("%cMyProject%cline:34%cminute","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px",r),console.log("%cMyProject%cline:32%chour","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(118, 77, 57);padding:3px;border-radius:2px",e);var n=(new Date).setHours(e,r,0,0);console.log("%cMyProject%cline:36%cnow","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(237, 222, 139);padding:3px;border-radius:2px",n),n&&i(new Date(n))}),[t]),(0,u.jsx)("div",{className:"relative iconDatePicker",children:(0,u.jsx)(N(),{className:"bg-[#707070] w-[115px] px-3 rounded-full cursor-pointer",selected:o,onChange:function(e){return n(function(e){console.log("%cMyProject%cline:16%cdate","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(130, 57, 53);padding:3px;border-radius:2px",e);var t=e.getHours();console.log("%cMyProject%cline:18%chour","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(178, 190, 126);padding:3px;border-radius:2px",t);var n=e.getMinutes(),a="".concat(t<=9?"0".concat(t):t,":").concat(n<=9?"0".concat(n):n);return console.log("%cMyProject%cline:17%ctime","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(89, 61, 67);padding:3px;border-radius:2px",a),a&&(i(e),r(a)),a}(e))},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,timeCaption:"Time",dateFormat:"h:mm aa"})})});function T(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function C(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?T(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var D=function(e){var r=e.data,t=e.token,n=e.currentBId,o=(0,c.useState)(""),i=o[0],s=o[1],d=(0,c.useState)(""),l=d[0],f=d[1],p=(0,c.useState)(!1),g=p[0],x=p[1],b=(0,c.useState)([]),h=(b[0],b[1],(0,c.useState)("")),v=(h[0],h[1]),_=(0,c.useState)(""),P=(_[0],_[1],(0,a.useRouter)(),(0,w.cI)({defaultValues:{user:[{from_time:"",name:"",to_time:"",unit_price:""}]}})),N=(P.register,P.control),T=P.handleSubmit,D=P.reset,E=(P.trigger,P.setError,(0,w.Dq)({control:N,name:"user"})),F=E.fields,A=(E.append,(0,c.useCallback)(function(){var e=(0,m.Z)(y().mark((function e(r){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x(!0),!i||!l){e.next=5;break}return e.next=4,(0,O.T)(i,l,r.user);case 4:x(!1);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[i,l]));return(0,c.useEffect)((function(){if(t&&(s(t),f(n)),r.length){var e={user:(0,j.Z)(r)};D(e)}}),[r,t,n]),(0,u.jsx)(u.Fragment,{children:r.length>0?(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{action:"",onSubmit:T(A),children:[(0,u.jsxs)("table",{className:k().table,children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Priority"}),(0,u.jsx)("th",{children:"Name"}),(0,u.jsx)("th",{children:"Time Zone"}),(0,u.jsx)("th",{children:"Unit Price"})]})}),(0,u.jsx)("tbody",{className:"text-center",children:F.map((function(e,r){return(0,u.jsxs)("tr",{className:"text-center",children:[(0,u.jsx)("td",{children:r+1}),(0,u.jsx)("td",{children:(0,u.jsx)(w.Qr,{render:function(e){var r=e.field;return(0,u.jsx)("input",C(C({},r),{},{className:"w-[70px] bg-[#707070] text-center rounded-full"}))},name:"user.".concat(r,".name"),control:N})}),(0,u.jsxs)("td",{className:"flex gap-3 justify-center",children:[(0,u.jsx)(w.Qr,{render:function(e){var r=e.field;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(S,{current:r.value,setTime:v,onChange:r.onChange})})},name:"user.".concat(r,".from_time"),control:N}),(0,u.jsx)("div",{children:"To"}),(0,u.jsx)(w.Qr,{name:"user.".concat(r,".to_time"),control:N,render:function(e){var r=e.field;return(0,u.jsx)(S,{current:r.value,setTime:v,onChange:r.onChange})}})]}),(0,u.jsx)("td",{children:(0,u.jsxs)("div",{className:"flex gap-3 justify-center",children:[(0,u.jsx)(w.Qr,{render:function(e){var r=e.field;return(0,u.jsx)("input",C(C({},r),{},{className:"w-[70px] bg-black border-solid border-[#FF4967] text-center rounded-full"}))},name:"user.".concat(r,".unit_price"),control:N}),(0,u.jsx)("div",{children:"THB/kWh"})]})})]},r)}))})]}),(0,u.jsx)("div",{className:"w-ful text-center mt-6",children:(0,u.jsx)("button",{type:"submit",className:"but_gray text-center",children:g?"Loading...":"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})}):(0,u.jsx)("div",{className:" h-24 flex items-center justify-center",children:"No Data"})})},E=t(7788),F=t(8957),A=t.n(F),M=t(4480),B=function(e){var r=(0,o.I0)(),t=(0,a.useRouter)(),i=(0,o.v9)((function(e){return e.building})).data,s=(0,o.v9)((function(e){return e.allBuildings})),d=(0,c.useState)(""),l=d[0],f=d[1];console.log("%cMyProject%cline:19%cisToken","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px",l);var p=(0,c.useState)(),g=p[0],x=p[1];return console.log("%cMyProject%cline:20%ccurrentBId","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(96, 143, 159);padding:3px;border-radius:2px",g),(0,c.useEffect)((function(){var e=localStorage.getItem("token"),n=(0,M.L)("currentBuildingID");e&&n?(r((0,E.v)(Number(n))),f(e),x(n)):t.push("/signin")}),[s.currentBuilding]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.default,{href:"/",children:(0,u.jsx)("img",{src:"svg/arrowLeft.svg",className:"icon",width:40,style:{margin:"0px"},alt:""})}),(0,u.jsxs)("div",{className:"box_black",children:[(0,u.jsxs)("div",{className:A().title,children:[(0,u.jsx)("img",{src:"/svg/gear.svg",alt:"",width:20,className:"icon"}),(0,u.jsx)("p",{children:"Unit Price Setting "})]}),(0,u.jsxs)("div",{className:A().boxGraph,children:[(0,u.jsxs)("div",{className:A().boxGrapgL,children:[(0,u.jsxs)("p",{className:A().bath,children:["\u0e2a\u0e01\u0e38\u0e25\u0e40\u0e07\u0e34\u0e19",(0,u.jsx)("span",{children:"THB"})]}),(0,u.jsx)("div",{children:(0,u.jsx)("p",{children:"Price/Time Zone"})})]}),(0,u.jsx)("div",{className:"".concat(A().graph," relative"),children:i?(0,u.jsx)(h,{dataGraph:i.unit_price}):null})]}),(0,u.jsx)("div",{children:i&&l&&g?(0,u.jsx)(D,{data:i.unit_price||[],token:l,currentBId:g}):"no data"})]})]})}},911:function(e,r,t){"use strict";t.d(r,{J:function(){return s},T:function(){return d}});var n=t(266),a=t(809),c=t.n(a),o=t(9669),i=t.n(o),s=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat("https://api.airin1.com/api/","buildings"),{headers:{Authorization:"Bearer ".concat(r),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});case 3:return t=e.sent,n=t.data,t.status,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(r,t,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i().patch("".concat("https://api.airin1.com/api/","buildings/").concat(t,"/unit_price"),n,{headers:{Authorization:"Bearer ".concat(r),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){console.log(e.data)})));case 1:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}()},6515:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setting",function(){return t(5626)}])},8957:function(e){e.exports={title:"settingPage_title__3qnJP",boxGraph:"settingPage_boxGraph__2y9Jr",boxGrapgL:"settingPage_boxGrapgL__3OaJ6",graph:"settingPage_graph__zKETm",bath:"settingPage_bath__2EMtT"}},9059:function(e){e.exports={table:"settingTable_table__egSQ9",name:"settingTable_name__31NDq",fillSelect:"settingTable_fillSelect__2byq3",unitPrice:"settingTable_unitPrice__XyaKE"}}},function(e){e.O(0,[774,570,536,996,532,888,179],(function(){return r=6515,e(e.s=r);var r}));var r=e.O();_N_E=r}]);