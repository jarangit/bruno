(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{5626:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return L}});var n=r(1664),a=r(1163),s=r(7294),i=r(5998),c=r(2809),o=r(3328),u=r(5376),l=r(5893);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}o.kL.register(o.uw,o.f$,o.od,o.jn,o.ST,o.u,o.De);var f=["#FF4967","#FFA726","#56D9FE"],h={plugins:{legend:{display:!1}},responsive:!0,maintainAspectRatio:!1,scales:{y:{display:!1},x:{grid:{color:"#595959"}}}};function g(e,t){var r=f[0],n=f[1],a=f[2],s=e.createLinearGradient(0,t.top,550,t.bottom);return s.addColorStop(0,r),s.addColorStop(.5,n),s.addColorStop(1,a),s}function m(e){var t=e.dataGraph,r={labels:t.length>0&&t.map((function(e,t){return t+1})),datasets:[{label:"Dataset 1",data:t.length>0?t.map((function(e){return e.unit_price})):"",tension:.5,pointRadius:0}]},n=(0,s.useRef)(null),a=(0,s.useState)({datasets:[]}),i=a[0],c=a[1];return(0,s.useEffect)((function(){var e=n.current;if(e){var t=p(p({},r),{},{datasets:r.datasets.map((function(t){return p(p({},t),{},{borderColor:g(e.ctx,e.chartArea)})}))});c(t)}}),[]),(0,l.jsx)(l.Fragment,{children:t.length>0?(0,l.jsx)(u.kL,{ref:n,type:"line",data:i,options:h}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.kL,{ref:n,type:"line",className:"relative",data:i,options:h}),(0,l.jsx)("div",{className:" absolute top-1/2 left-[45%]",children:"No Data"})]})})}var x=r(1508),j=r(266),b=r(809),v=r.n(b),_=r(9059),y=r.n(_),O=r(7536),w=r(911),N=r(9198),P=r.n(N),S=(r(7276),function(e){var t=e.setTime,r=e.current,n=e.onChange,a=(0,s.useState)(new Date),i=a[0],c=a[1];return(0,s.useEffect)((function(){var e=parseFloat(r.slice(0,2)),t=parseFloat(r.slice(3,5)),n=(new Date).setHours(e,t,0,0);n&&c(new Date(n))}),[r]),(0,l.jsx)("div",{className:"relative iconDatePicker",children:(0,l.jsx)(P(),{className:"bg-[#707070] w-[115px] px-3 rounded-full cursor-pointer",selected:i,onChange:function(e){return n(function(e){var r=e.getHours(),n=e.getMinutes(),a="".concat(r<=9?"0".concat(r):r,":").concat(n<=9?"0".concat(n):n);return a&&(c(e),t(a)),a}(e))},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,timeCaption:"Time",dateFormat:"h:mm aa"})})});function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=function(e){var t=e.data,r=e.token,n=e.currentBId,i=(0,s.useState)(""),c=i[0],o=i[1],u=(0,s.useState)(""),d=u[0],p=u[1],f=(0,s.useState)(!1),h=f[0],g=f[1],m=(0,s.useState)([]),b=(m[0],m[1],(0,s.useState)("")),_=(b[0],b[1]),N=(0,s.useState)(""),P=(N[0],N[1],(0,a.useRouter)(),(0,O.cI)({defaultValues:{user:[{from_time:"",name:"",to_time:"",unit_price:""}]}})),T=(P.register,P.control),C=P.handleSubmit,D=P.reset,E=(P.trigger,P.setError,(0,O.Dq)({control:T,name:"user"})),F=E.fields,A=(E.append,(0,s.useCallback)(function(){var e=(0,j.Z)(v().mark((function e(t){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g(!0),!c||!d){e.next=5;break}return e.next=4,(0,w.T)(c,d,t.user);case 4:g(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[c,d]));return(0,s.useEffect)((function(){if(r&&(o(r),p(n)),t.length){var e={user:(0,x.Z)(t)};D(e)}}),[t,r,n]),(0,l.jsx)(l.Fragment,{children:t.length>0?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{action:"",onSubmit:C(A),children:[(0,l.jsxs)("table",{className:y().table,children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Priority"}),(0,l.jsx)("th",{children:"Name"}),(0,l.jsx)("th",{children:"Time Zone"}),(0,l.jsx)("th",{children:"Unit Price"})]})}),(0,l.jsx)("tbody",{className:"text-center",children:F.map((function(e,t){return(0,l.jsxs)("tr",{className:"text-center",children:[(0,l.jsx)("td",{children:t+1}),(0,l.jsx)("td",{children:(0,l.jsx)(O.Qr,{render:function(e){var t=e.field;return(0,l.jsx)("input",k(k({},t),{},{className:"w-[70px] bg-[#707070] text-center rounded-full"}))},name:"user.".concat(t,".name"),control:T})}),(0,l.jsxs)("td",{className:"flex gap-3 justify-center",children:[(0,l.jsx)(O.Qr,{render:function(e){var t=e.field;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(S,{current:t.value,setTime:_,onChange:t.onChange})})},name:"user.".concat(t,".from_time"),control:T}),(0,l.jsx)("div",{children:"To"}),(0,l.jsx)(O.Qr,{name:"user.".concat(t,".to_time"),control:T,render:function(e){var t=e.field;return(0,l.jsx)(S,{current:t.value,setTime:_,onChange:t.onChange})}})]}),(0,l.jsx)("td",{children:(0,l.jsxs)("div",{className:"flex gap-3 justify-center",children:[(0,l.jsx)(O.Qr,{render:function(e){var t=e.field;return(0,l.jsx)("input",k(k({},t),{},{className:"w-[70px] bg-black border-solid border-[#FF4967] text-center rounded-full"}))},name:"user.".concat(t,".unit_price"),control:T}),(0,l.jsx)("div",{children:"THB/kWh"})]})})]},t)}))})]}),(0,l.jsx)("div",{className:"w-ful text-center mt-6",children:(0,l.jsx)("button",{type:"submit",className:"but_gray text-center",children:h?"Loading...":"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})}):(0,l.jsx)("div",{className:" h-24 flex items-center justify-center",children:"No Data"})})},D=r(7788),E=r(8957),F=r.n(E),A=r(4480),L=function(e){var t=(0,i.I0)(),r=(0,a.useRouter)(),c=(0,i.v9)((function(e){return e.building})).data,o=(0,i.v9)((function(e){return e.allBuildings})),u=(0,s.useState)(""),d=u[0],p=u[1],f=(0,s.useState)(),h=f[0],g=f[1];return(0,s.useEffect)((function(){var e=localStorage.getItem("token"),n=(0,A.L)("currentBuildingID");e&&n?(t((0,D.v)(Number(n))),p(e),g(n)):r.push("/signin")}),[o.currentBuilding]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.default,{href:"/",children:(0,l.jsx)("img",{src:"svg/arrowLeft.svg",className:"icon",width:40,style:{margin:"0px"},alt:""})}),(0,l.jsxs)("div",{className:"box_black",children:[(0,l.jsxs)("div",{className:F().title,children:[(0,l.jsx)("img",{src:"/svg/gear.svg",alt:"",width:20,className:"icon"}),(0,l.jsx)("p",{children:"Unit Price Setting "})]}),(0,l.jsxs)("div",{className:F().boxGraph,children:[(0,l.jsxs)("div",{className:F().boxGrapgL,children:[(0,l.jsxs)("p",{className:F().bath,children:["\u0e2a\u0e01\u0e38\u0e25\u0e40\u0e07\u0e34\u0e19",(0,l.jsx)("span",{children:"THB"})]}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:"Price/Time Zone"})})]}),(0,l.jsx)("div",{className:"".concat(F().graph," relative"),children:c?(0,l.jsx)(m,{dataGraph:c.unit_price}):null})]}),(0,l.jsx)("div",{children:c&&d&&h?(0,l.jsx)(C,{data:c.unit_price||[],token:d,currentBId:h}):"no data"})]})]})}},911:function(e,t,r){"use strict";r.d(t,{J:function(){return o},T:function(){return u}});var n=r(266),a=r(809),s=r.n(a),i=r(9669),c=r.n(i),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("".concat("https://api.airin1.com/api/","buildings"),{headers:{Authorization:"Bearer ".concat(t),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});case 3:return r=e.sent,n=r.data,r.status,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t,r,n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c().patch("".concat("https://api.airin1.com/api/","buildings/").concat(r,"/unit_price"),n,{headers:{Authorization:"Bearer ".concat(t),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){console.log(e.data)})));case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},6515:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setting",function(){return r(5626)}])},8957:function(e){e.exports={title:"settingPage_title__3qnJP",boxGraph:"settingPage_boxGraph__2y9Jr",boxGrapgL:"settingPage_boxGrapgL__3OaJ6",graph:"settingPage_graph__zKETm",bath:"settingPage_bath__2EMtT"}},9059:function(e){e.exports={table:"settingTable_table__egSQ9",name:"settingTable_name__31NDq",fillSelect:"settingTable_fillSelect__2byq3",unitPrice:"settingTable_unitPrice__XyaKE"}}},function(e){e.O(0,[774,570,536,996,532,888,179],(function(){return t=6515,e(e.s=t);var t}));var t=e.O();_N_E=t}]);