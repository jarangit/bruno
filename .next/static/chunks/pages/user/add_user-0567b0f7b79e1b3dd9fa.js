(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{3855:function(e,t,n){"use strict";n.d(t,{do:function(){return l}});var r=n(7294),s=n(2897),i=n.n(s),a=n(5675),c=n(5893),l=function(e){var t=e.title,n=e.data,s=e.airSelected,l=e.setAirSelected,o=(0,r.useState)(!1),u=o[0],d=o[1];return console.log(s.find((function(e){return 162==e}))),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:i().title,children:t}),(0,c.jsxs)("form",{className:i().box_form,children:[n&&n.length?n.map((function(e,t){return t<="".concat(u?100:9)&&(0,c.jsx)("div",{className:i().form_item,children:(0,c.jsxs)("label",{className:"container_label",children:[e.name,(0,c.jsx)("input",{type:"checkbox",defaultChecked:s.find((function(t){return t==e.id})),onChange:function(){return function(e){if(e)if(s.find((function(t){return t==e}))==e){var t=s.filter((function(t){return t!==e}));l(t)}else s.push(e)}(e.id)},value:e.name}),(0,c.jsx)("span",{className:"checkmark"})]})},t)})):(0,c.jsx)("div",{className:"text-center",children:"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 Air"}),n&&n.length>10?(0,c.jsx)("div",{className:"w-full text-center cursor-pointer",onClick:function(){return d(!u)},children:u?(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"rotate-180",children:(0,c.jsx)(a.default,{src:"/svg/arrowDown.svg",alt:"",width:10,height:10})}),(0,c.jsx)("div",{children:"Hidden"})]}):(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{children:"Show more"}),(0,c.jsx)("div",{children:(0,c.jsx)(a.default,{src:"/svg/arrowDown.svg",alt:"",width:10,height:10})})]})}):null]})]})};n(7931),n(1968),n(2639)},7931:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(266),s=n(2809),i=n(809),a=n.n(i),c=n(1163),l=n(7294),o=n(9669),u=n.n(o),d=function(){var e=(0,r.Z)(a().mark((function e(t,n,r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u().patch("".concat("https://api.airin1.com/api/","buildings/").concat(r,"/owner_info"),t,{headers:{Authorization:"Bearer ".concat(n),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){console.log(e.data)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),f=n(5021),m=n.n(f),p=n(4480),h=n(5893);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.data,n=(0,l.useState)(!1),i=n[0],o=n[1],u=(0,l.useState)(""),f=u[0],x=u[1],j=(0,l.useState)(""),g=j[0],_=j[1],b=(0,l.useState)({name:"",address:"",postal_code:"",mobile_number:"",email:"",line_id:"line",room_count:3}),w=b[0],y=b[1],N=(0,c.useRouter)(),O=w.name,A=w.address,C=w.postal_code,S=w.mobile_number,k=w.email;w.line_id;var I=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(!0),t.preventDefault(),!g){e.next=6;break}return e.next=5,d(w,g,f);case 5:o(!1);case 6:N.push("/");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){var e=(0,p.L)("token"),n=localStorage.getItem("currentBuildingID");if(e&&n&&(_(e),x(n)),t.building_owner){var r=t.building_owner;y({name:r.name,address:r.address,postal_code:r.postal_code,mobile_number:r.mobile_number,email:r.email,line_id:"line",room_count:3})}else y({name:"",address:"",postal_code:"",mobile_number:"",email:"",line_id:"",room_count:0})}),[t]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("form",{className:m().form,onChange:function(e){y(v(v({},w),{},(0,s.Z)({},e.target.name,e.target.value)))},onSubmit:I,children:[(0,h.jsxs)("div",{className:m().formItem,children:[(0,h.jsx)("label",{children:"Owner"}),(0,h.jsx)("input",{type:"text",placeholder:"name",className:"mainInput",name:"name",defaultValue:O||""})]}),(0,h.jsxs)("div",{className:m().formItem,children:[(0,h.jsx)("label",{children:"Address"}),(0,h.jsx)("textarea",{placeholder:"Address",className:"mainTextArea",rows:5,cols:5,name:"address",defaultValue:A||""})]}),(0,h.jsxs)("div",{className:m().formItem,children:[(0,h.jsx)("label",{children:"Postal code"}),(0,h.jsx)("input",{type:"text",placeholder:"Postal code",className:"mainInput",name:"postal_code",defaultValue:C||""})]}),(0,h.jsxs)("div",{className:m().formItem,children:[(0,h.jsx)("label",{children:"Tel"}),(0,h.jsx)("input",{type:"text",placeholder:"Tel",className:"mainInput",name:"mobile_number",defaultValue:S||""})]}),(0,h.jsxs)("div",{className:m().formItem,children:[(0,h.jsx)("label",{children:"Email"}),(0,h.jsx)("input",{type:"text",placeholder:"Email",className:"mainInput",name:"email",defaultValue:k||""})]}),(0,h.jsx)("div",{className:m().boxBut,children:(0,h.jsx)("button",{className:"but_gray",type:"submit",children:i?"Loading...":"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})})}},1968:function(e,t,n){"use strict";n(7294);var r=n(2639),s=n(7095),i=n.n(s),a=n(1664),c=n(5893);t.Z=function(e){var t=e.data;return(0,c.jsxs)("div",{className:i().userList,children:[(0,c.jsxs)("div",{className:i().title,children:[(0,c.jsx)("h1",{children:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2b\u0e49\u0e2d\u0e07"}),(0,c.jsx)(a.default,{href:"/user/add_user/",children:(0,c.jsx)("a",{children:(0,c.jsxs)("h3",{className:"flex items-center",children:[(0,c.jsx)("span",{children:(0,c.jsx)("img",{src:"/svg/add.svg",width:20,className:"icon",alt:""})}),"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32"]})})})]}),(0,c.jsx)("div",{className:i().list,children:t&&t.map((function(e,t){return(0,c.jsx)(r.Z,{data:e},t)}))})]})}},2639:function(e,t,n){"use strict";var r=n(1664),s=n(7294),i=n(6497),a=n.n(i),c=n(5893);t.Z=function(e){var t=e.data,n=(0,s.useState)(t),i=(n[0],n[1],t.id),l=t.name,o=(t.lname,t.tell,t.line,t.email,t.floor_id);return(0,c.jsxs)("div",{className:a().userListItem,children:[(0,c.jsxs)("figure",{className:a().item,children:[(0,c.jsx)("img",{src:"/svg/builder.svg",width:40,className:"icon",alt:""}),(0,c.jsx)("figcaption",{children:(0,c.jsxs)("section",{children:[(0,c.jsxs)("p",{children:["\u0e0a\u0e31\u0e49\u0e19: ",o]}),(0,c.jsxs)("p",{children:["\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32: ",(0,c.jsx)("span",{children:"".concat(l," ")})]})]})})]}),(0,c.jsx)(r.default,{href:"/user/".concat(i),children:(0,c.jsxs)("figure",{className:a().item,children:[(0,c.jsx)("img",{src:"/svg/calculate.svg",width:40,className:"icon",alt:""}),(0,c.jsx)("figcaption",{children:(0,c.jsx)("p",{children:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f"})})]})})]})}},7309:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(266),s=n(809),i=n.n(s),a=n(1163),c=n(7294),l=n(5998),o=n(3855),u=n(2809),d=n(7536),f=n(911),m=n(3918),p=n(4480),h=n(5893);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={name:"",mobile_number:"",email:"",line_id:"",room_count:"",building_id:"",floor_id:"",device_ids:[]},g=function(e){var t=e.floorData,n=e.airSelected,s=e.setDataForm,l=e.oldData,o=e.is_two_level,u=(0,c.useState)(""),x=u[0],g=u[1],_=(0,c.useState)(),b=_[0],w=_[1],y=(0,c.useState)([]),N=y[0],O=y[1],A=(0,c.useState)(!1),C=A[0],S=A[1],k=(0,a.useRouter)(),I=((0,c.useRef)(),(0,d.cI)({defaultValues:j})),D=(I.register,I.handleSubmit),B=I.reset,L=(I.setValue,I.control),P=I.watch,Z=I.formState.errors,E=function(){var e=(0,r.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S(!0),r=v(v({},t),{},{building_id:b,device_ids:n,room_id:t.floor_id}),o?delete r.floor_id:delete r.room_id,!r||!x){e.next=6;break}return e.next=6,(0,m.H1)(r,x);case 6:B(v({},j)),S(!1),k.push("/");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x){e.next=5;break}return e.next=3,(0,f.J)(x);case 3:(t=e.sent)&&O(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){var e=(0,p.L)("token"),t=(0,p.L)("currentBuildingID");return e&&t&&(g(e),w(t),R()),l&&B(l),function(){}}),[x]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("form",{onSubmit:D(E),className:"my-10",onChange:function(){var e=P();s(e)},children:[(0,h.jsxs)("div",{className:"flex md:flex-col lg:flex-row gap-5",children:[(0,h.jsxs)("div",{className:"lg:w-1/2 flex flex-col gap-5 bg-[#262626] p-4 rounded-lg",children:[(0,h.jsx)(d.Qr,{control:L,name:"building_id",render:function(e){var t=e.field,n=t.onChange;t.onBlur,t.value,t.ref;return(0,h.jsx)(h.Fragment,{children:N&&(0,h.jsxs)("div",{className:"flex justify-between",children:[(0,h.jsx)("div",{children:"\u0e2d\u0e32\u0e04\u0e32\u0e23"}),(0,h.jsx)("select",{disabled:!0,className:"px-2 max-w-[120px] bg-[#707070] rounded-full",name:"build",id:"",onChange:n,children:N.map((function(e,t){return(0,h.jsx)("option",{value:e.id,selected:e.id==b,children:e.name},t)}))})]})})}}),(0,h.jsx)(d.Qr,{control:L,name:"floor_id",rules:{required:!0},render:function(e){var n=e.field,r=n.onChange,s=(n.onBlur,n.value);n.ref;return(0,h.jsxs)("div",{className:"flex justify-between",children:[(0,h.jsx)("div",{children:"\u0e0a\u0e31\u0e49\u0e19"}),(0,h.jsxs)("select",{className:"px-2 w-[120px] bg-[#707070] rounded-full",name:"build",id:"",onChange:r,value:s,children:[(0,h.jsx)("option",{children:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e0b\u0e31\u0e49\u0e19"}),t&&t.map((function(e,t){return(0,h.jsx)("option",{value:e.id.toString(),children:e.name},t)}))]})]})}}),(0,h.jsx)(d.Qr,{control:L,name:"room_count",rules:{required:!0},render:function(e){var t=e.field,n=t.onChange,r=(t.onBlur,t.value);t.ref;return(0,h.jsxs)("div",{className:"flex justify-between",children:[(0,h.jsx)("div",{children:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e2b\u0e49\u0e2d\u0e07"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{className:"text-red-700 mr-2 text-lg",children:Z.room_count&&(0,h.jsx)("span",{children:"*"})}),(0,h.jsx)("input",{type:"text",placeholder:"\u0e2b\u0e49\u0e2d\u0e07",className:"mainInput max-w-[120px]",value:r,onChange:n})]})]})}})]}),(0,h.jsxs)("div",{className:"lg:w-1/2 flex flex-col gap-5 p-4",children:[(0,h.jsx)(d.Qr,{control:L,name:"name",rules:{required:!0},render:function(e){var t=e.field,n=t.onChange,r=(t.onBlur,t.value);t.ref;return(0,h.jsxs)("div",{className:"flex justify-between",children:[(0,h.jsx)("div",{children:"\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{className:"text-red-700 mr-2 text-lg",children:Z.name&&(0,h.jsx)("span",{children:"*"})}),(0,h.jsx)("input",{type:"text",placeholder:"\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32",className:"mainInput",value:r,onChange:n})]})]})}}),(0,h.jsx)(d.Qr,{control:L,name:"mobile_number",rules:{required:!0},render:function(e){var t=e.field,n=t.onChange,r=(t.onBlur,t.value);t.ref;return(0,h.jsxs)("div",{className:"flex justify-between",children:[(0,h.jsx)("div",{children:"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{className:"text-red-700 mr-2 text-lg",children:Z.mobile_number&&(0,h.jsx)("span",{children:"*"})}),(0,h.jsx)("input",{type:"text",placeholder:"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23",className:"mainInput",value:r,onChange:n})]})]})}}),(0,h.jsx)(d.Qr,{control:L,name:"email",rules:{required:!0},render:function(e){var t=e.field,n=t.onChange,r=(t.onBlur,t.value);t.ref;return(0,h.jsxs)("div",{className:"flex justify-between",children:[(0,h.jsx)("div",{children:"Email"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{className:"text-red-700 mr-2 text-lg",children:Z.email&&(0,h.jsx)("span",{children:"*"})}),(0,h.jsx)("input",{type:"text",placeholder:"Email",className:"mainInput",value:r,onChange:n})]})]})}}),(0,h.jsx)(d.Qr,{control:L,name:"line_id",rules:{required:!0},render:function(e){var t=e.field,n=t.onChange,r=(t.onBlur,t.value);t.ref;return(0,h.jsxs)("div",{className:"flex justify-between",children:[(0,h.jsx)("div",{children:"ID Line"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{className:"text-red-700 mr-2 text-lg",children:Z.line_id&&(0,h.jsx)("span",{children:"*"})}),(0,h.jsx)("input",{type:"text",placeholder:"ID Line",className:"mainInput",value:r,onChange:n})]})]})}})]})]}),(0,h.jsx)("div",{style:{textAlign:"center",marginTop:"30px"},children:(0,h.jsx)("button",{type:"submit",className:"but_gray",children:C?"Loading...":"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32"})})]})})},_=n(9669),b=n.n(_),w=function(){var e=(0,r.Z)(i().mark((function e(t,n){var r,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b().get("".concat("https://api.airin1.com/api/","devices?building_id=").concat(n),{headers:{Authorization:"Bearer ".concat(t),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});case 3:return r=e.sent,s=r.data,r.status,e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),y=n(3583),N=n.n(y),O=function(e){var t=(0,c.useState)(!1),n=t[0],s=t[1],u=(0,c.useState)(""),d=u[0],f=u[1],m=(0,c.useState)(),x=m[0],v=m[1],j=(0,c.useState)(),_=j[0],b=j[1],y=(0,c.useState)([]),O=y[0],A=y[1],C=(0,c.useState)(),S=C[0],k=C[1],I=(0,c.useState)(),D=I[0],B=I[1],L=(0,l.v9)((function(e){return e.building})),P=(0,a.useRouter)(),Z=(0,c.useState)(),E=Z[0],R=Z[1],T=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d){e.next=6;break}return e.next=3,w(d,x);case 3:t=e.sent,n=t.filter((function(e){return 1===e.device_type_id})),b(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L.data&&(B(L.data.children),R(L.data.is_two_level));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){var e=(0,p.L)("token"),t=(0,p.L)("currentBuildingID");return e&&t&&(f(e),v(t),T(),q()),L.data||P.push("/"),function(){}}),[d,O]),(0,h.jsxs)("div",{className:"box_black",children:[(0,h.jsxs)("div",{className:N().title,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:"/svg/add.svg",alt:"",width:30,className:"icon"}),(0,h.jsx)("h3",{children:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32"})]}),(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:"but_gray text-center flex justify-center",onClick:function(){return s(!n)},children:n?"\u0e01\u0e25\u0e31\u0e1a":"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 AIR"})})]}),(0,h.jsx)("div",{children:n?(0,h.jsx)(o.do,{data:_,title:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 Air",airSelected:O,setAirSelected:A}):(0,h.jsx)("div",{className:N().box_form,children:(0,h.jsx)(g,{airSelected:O,setDataForm:k,oldData:S,floorData:D,is_two_level:E})})})]})}},911:function(e,t,n){"use strict";n.d(t,{J:function(){return l},T:function(){return o}});var r=n(266),s=n(809),i=n.n(s),a=n(9669),c=n.n(a),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("".concat("https://api.airin1.com/api/","buildings"),{headers:{Authorization:"Bearer ".concat(t),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});case 3:return n=e.sent,r=n.data,n.status,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(t,n,r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c().patch("".concat("https://api.airin1.com/api/","buildings/").concat(n,"/unit_price"),r,{headers:{Authorization:"Bearer ".concat(t),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){console.log(e.data)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},3918:function(e,t,n){"use strict";n.d(t,{H1:function(){return l},VY:function(){return o},dy:function(){return u}});var r=n(266),s=n(809),i=n.n(s),a=n(9669),c=n.n(a),l=function(){var e=(0,r.Z)(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c().post("".concat("https://api.airin1.com/api/","tenants"),t,{headers:{Authorization:"Bearer ".concat(n),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){console.log(e.data)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c().delete("".concat("https://api.airin1.com/api/","tenants/").concat(t),{headers:{Authorization:"Bearer ".concat(n),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){console.log(e.data)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t,n){var r,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("".concat("https://api.airin1.com/api/","tenants/").concat(n),{headers:{Authorization:"Bearer ".concat(t),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});case 3:return r=e.sent,s=r.data,r.status,e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()},382:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/add_user",function(){return n(7309)}])},2897:function(e){e.exports={title:"airRegisterForm_title__1E3v1",box_form:"airRegisterForm_box_form__2v5bv",form_item:"airRegisterForm_form_item__2e2di"}},5021:function(e){e.exports={form:"loginForm_form__2TQH8",formItem:"loginForm_formItem__3_Q8Q",boxBut:"loginForm_boxBut__3NBwF"}},7095:function(e){e.exports={userList:"userList_userList__2j7Ym",title:"userList_title__2uStV",list:"userList_list__3-rs4"}},6497:function(e){e.exports={userListItem:"userListItem_userListItem__2Ol1z",item:"userListItem_item__31vKy"}},3583:function(e){e.exports={title:"addUser_title__1tIbC"}}},function(e){e.O(0,[675,536,774,888,179],(function(){return t=382,e(e.s=t);var t}));var t=e.O();_N_E=t}]);