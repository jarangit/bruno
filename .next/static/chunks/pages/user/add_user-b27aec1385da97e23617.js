(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{4363:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var r=t(7294),a=t(2809),i=t(266),c=t(809),s=t.n(c),o=t(1163),u=t(7536),l=t(911),d=t(3918),f=t(4480),p=t(5893);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m={name:"",mobile_number:"",email:"",line_id:"",room_count:"",building_id:"",floor_id:"",device_ids:[]},v=function(e){var n=(0,r.useState)(""),t=n[0],a=n[1],c=(0,r.useState)([]),h=c[0],v=c[1],j=(0,r.useState)(!1),g=j[0],b=j[1],w=(0,o.useRouter)(),y=(0,u.cI)({defaultValues:m}),_=(y.register,y.handleSubmit),C=y.reset,N=(y.setValue,y.control),O=(y.watch,y.formState.errors),A=function(){var e=(0,i.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(!0),!(r=x(x({},n),{},{device_ids:[173,174]}))||!t){e.next=5;break}return e.next=5,(0,d.H)(r,t);case 5:C(x({},m)),b(!1),w.push("/");case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();console.log(O);var k=function(){var e=(0,i.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,(0,l.J)(t);case 3:(n=e.sent)&&v(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){var e=(0,f.L)("token");return e&&(a(e),k()),function(){}}),[t]),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("form",{onSubmit:_(A),className:"my-10",children:[(0,p.jsxs)("div",{className:"flex md:flex-col lg:flex-row gap-5",children:[(0,p.jsxs)("div",{className:"lg:w-1/2 flex flex-col gap-5 bg-[#262626] p-4 rounded-lg",children:[(0,p.jsx)(u.Qr,{control:N,name:"building_id",render:function(e){var n=e.field,t=n.onChange,r=(n.onBlur,n.value);n.ref;return(0,p.jsx)(p.Fragment,{children:h&&(0,p.jsxs)("div",{className:"flex justify-between",children:[(0,p.jsx)("div",{children:"\u0e2d\u0e32\u0e04\u0e32\u0e23"}),(0,p.jsxs)("select",{className:"max-w-[120px] bg-[#707070] rounded-full",name:"build",id:"",value:r,onChange:t,children:[(0,p.jsx)("option",{value:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2d\u0e32\u0e04\u0e32\u0e23",children:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2d\u0e32\u0e04\u0e32\u0e23"}),h.map((function(e,n){return(0,p.jsx)("option",{value:e.id,children:e.name},n)}))]})]})})}}),(0,p.jsx)(u.Qr,{control:N,name:"floor_id",render:function(e){var n=e.field,t=n.onChange,r=(n.onBlur,n.value);n.ref;return(0,p.jsxs)("div",{className:"flex justify-between",children:[(0,p.jsx)("div",{children:"\u0e0a\u0e31\u0e49\u0e19"}),(0,p.jsx)("input",{type:"text",placeholder:"\u0e0a\u0e31\u0e49\u0e19",className:"mainInput max-w-[120px]",value:r,onChange:t})]})}}),(0,p.jsx)(u.Qr,{control:N,name:"room_count",render:function(e){var n=e.field,t=n.onChange,r=(n.onBlur,n.value);n.ref;return(0,p.jsxs)("div",{className:"flex justify-between",children:[(0,p.jsx)("div",{children:"\u0e2b\u0e49\u0e2d\u0e07"}),(0,p.jsx)("input",{type:"text",placeholder:"\u0e2b\u0e49\u0e2d\u0e07",className:"mainInput max-w-[120px]",value:r,onChange:t})]})}})]}),(0,p.jsxs)("div",{className:"lg:w-1/2 flex flex-col gap-5 p-4",children:[(0,p.jsx)(u.Qr,{control:N,name:"name",render:function(e){var n=e.field,t=n.onChange,r=(n.onBlur,n.value);n.ref;return(0,p.jsxs)("div",{className:"flex justify-between",children:[(0,p.jsx)("div",{children:"\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32"}),(0,p.jsx)("input",{type:"text",placeholder:"\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32",className:"mainInput",value:r,onChange:t})]})}}),(0,p.jsx)(u.Qr,{control:N,name:"mobile_number",render:function(e){var n=e.field,t=n.onChange,r=(n.onBlur,n.value);n.ref;return(0,p.jsxs)("div",{className:"flex justify-between",children:[(0,p.jsx)("div",{children:"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23"}),(0,p.jsx)("input",{type:"text",placeholder:"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23",className:"mainInput",value:r,onChange:t})]})}}),(0,p.jsx)(u.Qr,{control:N,name:"email",render:function(e){var n=e.field,t=n.onChange,r=(n.onBlur,n.value);n.ref;return(0,p.jsxs)("div",{className:"flex justify-between",children:[(0,p.jsx)("div",{children:"Email"}),(0,p.jsx)("input",{type:"text",placeholder:"Email",className:"mainInput",value:r,onChange:t})]})}}),(0,p.jsx)(u.Qr,{control:N,name:"line_id",render:function(e){var n=e.field,t=n.onChange,r=(n.onBlur,n.value);n.ref;return(0,p.jsxs)("div",{className:"flex justify-between",children:[(0,p.jsx)("div",{children:"ID Line"}),(0,p.jsx)("input",{type:"text",placeholder:"ID Line",className:"mainInput",value:r,onChange:t})]})}})]})]}),(0,p.jsx)("div",{style:{textAlign:"center",marginTop:"30px"},children:(0,p.jsx)("button",{type:"submit",className:"but_gray",children:g?"Loading...":"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32"})})]})})},j=t(3583),g=t.n(j),b=function(e){return(0,p.jsxs)("div",{className:"box_black",children:[(0,p.jsx)("div",{className:g().title,children:(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:"/svg/add.svg",alt:"",width:30,className:"icon"}),(0,p.jsx)("h3",{children:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32"})]})}),(0,p.jsx)("div",{className:g().box_form,children:(0,p.jsx)(v,{})})]})}},911:function(e,n,t){"use strict";t.d(n,{J:function(){return o},T:function(){return u}});var r=t(266),a=t(809),i=t.n(a),c=t(9669),s=t.n(c),o=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat("https://api.airin1.com/api/","buildings"),{headers:{Authorization:"Bearer ".concat(n),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});case 3:return t=e.sent,r=t.data,t.status,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n,t,r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s().patch("".concat("https://api.airin1.com/api/","buildings/").concat(t,"/unit_price"),r,{headers:{Authorization:"Bearer ".concat(n),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){console.log(e.data)})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()},3918:function(e,n,t){"use strict";t.d(n,{H:function(){return o},V:function(){return u}});var r=t(266),a=t(809),i=t.n(a),c=t(9669),s=t.n(c),o=function(){var e=(0,r.Z)(i().mark((function e(n,t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s().post("".concat("https://api.airin1.com/api/","tenants"),n,{headers:{Authorization:"Bearer ".concat(t),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){console.log(e.data)})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n,t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s().delete("".concat("https://api.airin1.com/api/","tenants/").concat(n),{headers:{Authorization:"Bearer ".concat(t),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){console.log(e.data)})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},382:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/add_user",function(){return t(4363)}])},3583:function(e){e.exports={title:"addUser_title__1tIbC"}}},function(e){e.O(0,[536,774,888,179],(function(){return n=382,e(e.s=n);var n}));var n=e.O();_N_E=n}]);