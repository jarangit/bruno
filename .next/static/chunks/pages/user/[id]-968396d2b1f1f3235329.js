(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{3282:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var a=n(1163),s=n(7294),c=n(266),r=n(809),i=n.n(r),l=n(9930),d=n.n(l),o=n(9007),u=n.n(o),x=n(5893),h=function(e){var t=e.title,n=e.onClose,a=e.onDeleteTenant;return(0,x.jsx)("div",{id:"myModal",className:u().modal,children:(0,x.jsxs)("div",{className:u().modal_content,children:[(0,x.jsxs)("p",{children:[" ",t]}),(0,x.jsx)("img",{src:"/svg/close.svg",width:40,alt:"",className:"".concat(u().close_icon," icon"),onClick:function(){return n(!1)}}),(0,x.jsx)("img",{src:"/svg/tashOpen.svg",width:150,alt:""}),(0,x.jsxs)("div",{className:u().box_but,children:[(0,x.jsx)("button",{className:"but_black",onClick:function(){return n(!1)},children:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01"}),(0,x.jsx)("button",{className:"but_gray",onClick:a,children:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"})]})]})})},j=n(5998),p=n(2393),f=n(3918),m=n(4480),v=function(e){var t=e.id,n=e.fname,r=(e.lname,e.email),l=e.tell,o=e.line,u=(0,s.useState)(!1),v=u[0],g=u[1],b=(0,s.useState)(""),_=b[0],y=b[1],S=(0,s.useState)(""),N=(S[0],S[1],(0,j.I0)()),w=(0,a.useRouter)(),k=function(){var e=(0,c.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_){e.next=5;break}return e.next=3,(0,f.V)(t,_);case 3:g(!1),w.push("/");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=(0,c.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(!0);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){var e=(0,m.L)("token");e&&y(e),N((0,p.vu)(n))}),[]),(0,x.jsxs)("div",{className:"box_black",children:[(0,x.jsxs)("div",{className:d().title,children:[(0,x.jsxs)("figure",{children:[(0,x.jsx)("img",{src:"/svg/builder.svg",alt:"",className:"icon"}),(0,x.jsxs)("figcaption",{children:[(0,x.jsx)("p",{children:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32"}),(0,x.jsxs)("p",{children:["\u0e0a\u0e37\u0e48\u0e2d: ",(0,x.jsx)("span",{children:"".concat(n)})]})]})]}),(0,x.jsx)("div",{className:"flex items-center",children:(0,x.jsx)("img",{src:"/svg/tash.svg",alt:"",className:"icon",width:20,onClick:function(){return T(t)}})})]}),(0,x.jsxs)("ul",{className:d().listContact,children:[(0,x.jsx)("li",{children:(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{children:(0,x.jsx)("img",{src:"/svg/phone.svg",alt:"",className:"icon",width:30})}),l]})}),(0,x.jsx)("li",{children:(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{children:(0,x.jsx)("img",{src:"/svg/email.svg",alt:"",className:"icon",width:30})}),r]})}),(0,x.jsx)("li",{children:(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{children:(0,x.jsx)("img",{src:"/svg/line.svg",alt:"",className:"icon",width:30})}),o]})})]}),v&&(0,x.jsx)(h,{title:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e17\u0e35\u0e48\u0e08\u0e30\u0e25\u0e1a\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32\u0e19\u0e35\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48",onClose:g,onDeleteTenant:k})]})},g=n(3592),b=n.n(g),_=function(e){var t=e.id,n=e.title,a=e.activeTab,s=e.setActiveTab;return(0,x.jsx)("li",{onClick:function(){s(t)},className:a===t?b().tabOn:"",children:n})},y=function(e){var t=e.id,n=e.activeTab,a=e.children;return n===t?(0,x.jsx)("div",{className:b().tabContent,children:a}):null},S=n(1664),N=n(7333),w=n(743),k=n.n(w),T=n(9198),C=n.n(T),D=(n(7276),function(e){var t=e.set,n=(0,s.useState)(new Date),a=n[0],c=n[1];return(0,x.jsx)("div",{className:"relative iconDatePicker ",children:(0,x.jsx)(C(),{selected:a,onChange:function(e){return function(e){if(e){c(e);var n=e.getFullYear();t(n)}}(e)},showYearPicker:!0,dateFormat:"yyyy",yearItemNumber:9,className:"text-white bg-[#707070] rounded-full px-2 max-w-[120px] cursor-pointer h-[30px]"})})}),F=function(e){var t=e.set,n=(0,s.useState)(new Date),a=n[0],c=n[1];return(0,x.jsx)("div",{className:"relative iconDatePicker ",children:(0,x.jsx)(C(),{selected:a,onChange:function(e){return function(e){if(e){c(e);var n=e.getMonth()+1;t(n)}}(e)},dateFormat:"MMM",showMonthYearPicker:!0,className:"text-white bg-[#707070] rounded-full px-2 max-w-[120px] cursor-pointer h-[30px]"})})},A=function(e){var t=e.setStartDate,n=e.setEndDate,a=(e.title,e.slug),c=e.data,r=e.statusCallApi,i=(0,s.useState)([]),l=i[0],d=i[1],o=(0,s.useState)(0),u=o[0],h=o[1],f=(0,s.useState)(),m=(f[0],f[1],(0,s.useState)(new Date)),v=m[0],g=m[1],b=(0,s.useState)(new Date),_=b[0],y=b[1],w=(0,s.useState)(),T=(w[0],w[1],(0,s.useState)()),C=(T[0],T[1],(0,s.useState)(!1)),A=(C[0],C[1],(0,s.useState)()),Z=A[0],E=A[1],M=(0,s.useState)(),P=M[0],I=M[1],O=new Array(31).fill(""),L=new Date;console.log("%cMyProject%cline:42%cnow","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(130, 57, 53);padding:3px;border-radius:2px",L.getDate());var V=(0,j.I0)();return(0,s.useEffect)((function(){var e=0;d(c),V((0,p.M)(u)),l&&l.forEach((function(t){return h(e+=t.price)}))}),[c,t,_,v,n,r,u]),(0,x.jsxs)("div",{className:"box_black",children:[(0,x.jsxs)("div",{className:k().title,children:[(0,x.jsx)("h3",{children:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e1a\u0e1a\u0e23\u0e32\u0e22\u0e27\u0e31\u0e19"}),(0,x.jsxs)("div",{className:k().box_icon,children:[(0,x.jsx)("div",{children:(0,x.jsx)(F,{set:y})}),(0,x.jsx)("div",{children:(0,x.jsx)(D,{set:g})}),(0,x.jsx)("img",{src:"/svg/refersh.svg",width:30,alt:"",className:"icon"}),(0,x.jsx)("div",{children:l?(0,x.jsx)(S.default,{href:"/user/pdf/".concat(a),children:(0,x.jsx)("img",{src:"/svg/sendMail.svg",width:30,alt:"",className:"icon"})}):null})]})]}),(0,x.jsxs)("ul",{className:k().menu_item,children:[(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:"\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"}),(0,x.jsx)("div",{className:"selector_gray",children:(0,x.jsx)("select",{name:"start_day",id:"",className:"selector_gray",onChange:function(e){return function(e){E(e)}(e.target.value)},disabled:"object"===typeof v||"object"===typeof _,children:O.map((function(e,t){return(0,x.jsx)("option",{value:t+1,selected:t+1==L.getDate(),children:t+1<=9?"0".concat(t+1):"".concat(t+1)},t)}))})})]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:"\u0e16\u0e36\u0e07"}),(0,x.jsx)("div",{className:"selector_gray",children:(0,x.jsx)("select",{name:"start_day",id:"",className:"selector_gray",onChange:function(e){return function(e){I(e)}(e.target.value)},disabled:"object"===typeof v||"object"===typeof _,children:O.map((function(e,t){return(0,x.jsx)("option",{value:t+1,selected:t+1==L.getDate(),children:t+1<=9?"0".concat(t+1):"".concat(t+1)},t)}))})})]}),(0,x.jsx)("li",{children:(0,x.jsx)("button",{className:"but_green",children:"Show All"})}),(0,x.jsx)("li",{children:(0,x.jsx)("button",{className:"border-2  w-[100px]  rounded-full ".concat(Z&&P?"border-[#56D9FE] text-[#56D9FE]":"border-gray-500 text-gray-500"),onClick:function(){var e="".concat(v,"-").concat(_,"-").concat(Z),a="".concat(v,"-").concat(_,"-").concat(P);e&&a&&(t(e),n(a))},children:r?"Loading":"Show"})})]}),(0,x.jsxs)("table",{className:k().table,children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"\u0e40\u0e27\u0e25\u0e32"}),(0,x.jsx)("th",{children:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e1e\u0e25\u0e31\u0e07\u0e07\u0e32\u0e19"}),(0,x.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32"}),(0,x.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32\u0e15\u0e48\u0e2d\u0e2b\u0e19\u0e48\u0e27\u0e22"})]})}),(0,x.jsxs)("tbody",{className:"relative",children:[l&&l.length?l.map((function(e,t){return(0,x.jsx)(s.Fragment,{children:(0,x.jsxs)("tr",{style:{color:"".concat((n=e.unit,n>90?"#FF4967":n>50&&n<90?"#FFFF82":"white"))},children:[(0,x.jsx)("td",{children:e.unit_name}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:e.unit,decimalScale:0,displayType:"text"})}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:e.price,decimalScale:0,displayType:"text"})}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:e.unit_price,decimalScale:0,displayType:"text"})})]})},t);var n})):(0,x.jsx)("div",{className:"absolute  w-full top-2 ",children:r?"loading":(0,x.jsx)("div",{className:"text-yellow-600",children:"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e31\u0e19-\u0e40\u0e27\u0e25\u0e32"})}),l&&l.length?(0,x.jsxs)("tr",{className:k().total,children:[(0,x.jsx)("td",{children:"Total"}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:l.reduce((function(e,t){return+e+ +t.unit}),0),decimalScale:0,displayType:"text"})}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:l.reduce((function(e,t){return+e+ +t.price}),0),decimalScale:0,displayType:"text"})}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:l.reduce((function(e,t){return+e+ +t.unit_price}),0),decimalScale:0,displayType:"text"})})]}):null]})]})]})},Z=n(381),E=n.n(Z),M=function(e){var t=e.title,n=e.slug,a=e.data,c=e.setStartDate,r=e.setEndDate,i=e.statusCallApi,l=(0,s.useState)([]),d=l[0],o=l[1],u=(0,s.useState)(0),h=u[0],f=u[1],m=(0,s.useState)(new Date),v=m[0],g=m[1],b=(0,s.useState)(new Date),_=b[0],y=b[1],w=(0,s.useState)(),T=(w[0],w[1],(0,s.useState)()),C=(T[0],T[1],E()().date()),A=(0,j.I0)();return(0,s.useEffect)((function(){var e=0;o(a),A((0,p.M)(h)),d&&d.forEach((function(t){return f(e+=t.price)}))}),[a,c,_,v,r,i,h]),(0,x.jsxs)("div",{className:"box_black",children:[(0,x.jsxs)("div",{className:k().title,children:[(0,x.jsx)("h3",{children:t}),(0,x.jsxs)("div",{className:k().box_icon,children:[(0,x.jsx)("div",{children:(0,x.jsx)(D,{set:g})}),(0,x.jsx)("img",{src:"/svg/refersh.svg",width:30,alt:"",className:"icon"}),(0,x.jsx)(S.default,{href:"/user/pdf/".concat(n),children:(0,x.jsx)("img",{src:"/svg/sendMail.svg",width:30,alt:"",className:"icon"})})]})]}),(0,x.jsxs)("ul",{className:k().menu_item,children:[(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:"\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e17\u0e35\u0e48"}),(0,x.jsx)("div",{children:(0,x.jsx)(F,{set:y})})]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:"\u0e16\u0e36\u0e07"}),(0,x.jsx)("div",{children:(0,x.jsx)(F,{set:y})})]}),"        ",(0,x.jsx)("li",{children:(0,x.jsx)("button",{className:"but_green",children:"Show All"})}),(0,x.jsx)("li",{children:(0,x.jsx)("button",{className:"but_blue",onClick:function(){var e="".concat(v,"-").concat(_,"-").concat(C),t="".concat(v,"-").concat(_,"-").concat(C);e&&t&&(c(e),r(t))},children:i?"Loading":"Show"})})]}),(0,x.jsxs)("table",{className:k().table,children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"\u0e40\u0e27\u0e25\u0e32"}),(0,x.jsx)("th",{children:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e1e\u0e25\u0e31\u0e07\u0e07\u0e32\u0e19"}),(0,x.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32"}),(0,x.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32\u0e15\u0e48\u0e2d\u0e2b\u0e19\u0e48\u0e27\u0e22"})]})}),(0,x.jsxs)("tbody",{className:"relative",children:[d&&d.length?d.map((function(e,t){return(0,x.jsx)(s.Fragment,{children:(0,x.jsxs)("tr",{style:{color:"".concat((n=e.unit,n>90?"#FF4967":n>50&&n<90?"#FFFF82":"white"))},children:[(0,x.jsx)("td",{children:e.unit_name}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:e.unit,decimalScale:0,displayType:"text"})}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:e.price,decimalScale:0,displayType:"text"})}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:e.unit_price,decimalScale:0,displayType:"text"})})]})},t);var n})):(0,x.jsx)("div",{className:"absolute  w-full top-2 ",children:i?"loading":(0,x.jsx)("div",{className:"text-yellow-600",children:"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e31\u0e19-\u0e40\u0e27\u0e25\u0e32"})}),d&&d.length?(0,x.jsxs)("tr",{className:k().total,children:[(0,x.jsx)("td",{children:"Total"}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:d.reduce((function(e,t){return+e+ +t.unit}),0),decimalScale:0,displayType:"text"})}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:d.reduce((function(e,t){return+e+ +t.price}),0),decimalScale:0,displayType:"text"})}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:d.reduce((function(e,t){return+e+ +t.unit_price}),0),decimalScale:0,displayType:"text"})})]}):null]})]})]})},P=function(e){var t=e.title,n=e.slug,a=e.data,c=e.setStartDate,r=e.setEndDate,i=e.statusCallApi,l=(0,s.useState)([]),d=l[0],o=l[1],u=(0,s.useState)(0),h=u[0],f=u[1],m=(0,s.useState)(),v=(m[0],m[1],(0,s.useState)(new Date)),g=v[0],b=v[1],_=(0,s.useState)(new Date),y=_[0],w=(_[1],(0,s.useState)(new Date)),T=w[0],C=w[1],F=(0,s.useState)(),A=(F[0],F[1],(0,s.useState)()),Z=(A[0],A[1],(0,s.useState)(!1)),M=(Z[0],Z[1],(0,s.useState)()),P=(M[0],M[1],(0,s.useState)()),I=(P[0],P[1],E()().date()),O=E()().month(),L=(0,j.I0)();return(0,s.useEffect)((function(){var e=0;o(a),L((0,p.M)(h)),d&&d.forEach((function(t){return f(e+=t.price)}))}),[a,c,y,g,r,i,h]),(0,x.jsxs)("div",{className:"box_black",children:[(0,x.jsxs)("div",{className:k().title,children:[(0,x.jsx)("h3",{children:t}),(0,x.jsxs)("div",{className:k().box_icon,children:[(0,x.jsx)("img",{src:"/svg/refersh.svg",width:30,alt:"",className:"icon"}),(0,x.jsx)(S.default,{href:"/user/pdf/".concat(n),children:(0,x.jsx)("img",{src:"/svg/sendMail.svg",width:30,alt:"",className:"icon"})})]})]}),(0,x.jsxs)("ul",{className:k().menu_item,children:[(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:"\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e1b\u0e35\u0e17\u0e35\u0e48"}),(0,x.jsx)("div",{children:(0,x.jsx)(D,{set:b})})]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:"\u0e16\u0e36\u0e07"}),(0,x.jsx)("div",{children:(0,x.jsx)(D,{set:C})})]}),(0,x.jsx)("li",{children:(0,x.jsx)("button",{className:"but_green",children:"Show All"})}),(0,x.jsx)("li",{children:(0,x.jsx)("button",{className:"but_blue",onClick:function(){var e="".concat("number"==typeof g?g:"2022","-").concat(O,"-").concat(I),t="".concat("number"==typeof T?T:"2022","-").concat(O,"-").concat(I);e&&t&&(c(e),r(t))},children:i?"Loading":"Show"})})]}),(0,x.jsxs)("table",{className:k().table,children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"\u0e40\u0e27\u0e25\u0e32"}),(0,x.jsx)("th",{children:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e1e\u0e25\u0e31\u0e07\u0e07\u0e32\u0e19"}),(0,x.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32"}),(0,x.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32\u0e15\u0e48\u0e2d\u0e2b\u0e19\u0e48\u0e27\u0e22"})]})}),(0,x.jsxs)("tbody",{className:"relative",children:[d&&d.length?d.map((function(e,t){return(0,x.jsx)(s.Fragment,{children:(0,x.jsxs)("tr",{style:{color:"".concat((n=e.unit,n>90?"#FF4967":n>50&&n<90?"#FFFF82":"white"))},children:[(0,x.jsx)("td",{children:e.unit_name}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:e.unit,decimalScale:0,displayType:"text"})}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:e.price,decimalScale:0,displayType:"text"})}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:e.unit_price,decimalScale:0,displayType:"text"})})]})},t);var n})):(0,x.jsx)("div",{className:"absolute  w-full top-2 ",children:i?"loading":(0,x.jsx)("div",{className:"text-yellow-600",children:"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e31\u0e19-\u0e40\u0e27\u0e25\u0e32"})}),d&&d.length?(0,x.jsxs)("tr",{className:k().total,children:[(0,x.jsx)("td",{children:"Total"}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:d.reduce((function(e,t){return+e+ +t.unit}),0),decimalScale:0,displayType:"text"})}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:d.reduce((function(e,t){return+e+ +t.price}),0),decimalScale:0,displayType:"text"})}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:d.reduce((function(e,t){return+e+ +t.unit_price}),0),decimalScale:0,displayType:"text"})})]}):null]})]})]})},I=n(5434),O=function(e){var t=e.setValue,n=(0,s.useState)(new Date),a=n[0],r=n[1],l=function(){var e=(0,c.Z)(i().mark((function e(n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(n),e.next=3,E()(n).format("L");case 3:a=e.sent,console.log("%cMyProject%cline:19%cdata","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(131, 175, 155);padding:3px;border-radius:2px",a),a&&t(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{className:"relative",children:[(0,x.jsx)(C(),{selected:a,onChange:function(e){return l(e)},onCalendarClose:function(){return console.log("Calendar closed")},onCalendarOpen:function(){return console.log("Calendar opened")},className:"bg-[#707070] rounded-full h-[30px] px-3 w-[150px] cursor-pointer"}),(0,x.jsx)("div",{className:"absolute top-1 right-3 cursor-pointer",children:(0,x.jsx)(I.FFD,{size:20})})]})},L=function(e){var t=e.title,n=e.slug,a=e.data,c=e.setStartItem,r=e.setEndItem,i=e.statusCallApi,l=(0,s.useState)(),d=l[0],o=l[1];console.log("%cMyProject%cline:25%cdataTable","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(237, 222, 139);padding:3px;border-radius:2px",d);var u=(0,s.useState)(0),h=(u[0],u[1]);return(0,s.useEffect)((function(){o(a);var e=0;d&&d.forEach((function(t){return h(e+=t.unit)}))}),[a,c,r,i]),(0,x.jsxs)("div",{className:"box_black",children:[(0,x.jsxs)("div",{className:k().title,children:[(0,x.jsx)("h3",{children:t}),(0,x.jsxs)("div",{className:k().box_icon,children:[(0,x.jsx)("img",{src:"/svg/refersh.svg",width:30,alt:"",className:"icon"}),(0,x.jsx)(S.default,{href:"/user/pdf/".concat(n),children:(0,x.jsx)("img",{src:"/svg/sendMail.svg",width:30,alt:"",className:"icon"})})]})]}),(0,x.jsxs)("ul",{className:k().menu_item,children:[(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:"\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"}),(0,x.jsx)(O,{setValue:c})]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:"\u0e16\u0e36\u0e07"}),(0,x.jsx)(O,{setValue:r})]}),(0,x.jsx)("li",{children:(0,x.jsx)("button",{className:"but_green",children:"Show All"})}),(0,x.jsx)("li",{children:(0,x.jsx)("button",{className:"but_blue",children:"Show"})})]}),(0,x.jsxs)("table",{className:k().table,children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"\u0e40\u0e27\u0e25\u0e32"}),(0,x.jsx)("th",{children:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e1e\u0e25\u0e31\u0e07\u0e07\u0e32\u0e19"}),(0,x.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32"}),(0,x.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32\u0e15\u0e48\u0e2d\u0e2b\u0e19\u0e48\u0e27\u0e22"})]})}),(0,x.jsxs)("tbody",{className:"relative",children:[d?d.map((function(e,t){return(0,x.jsx)(s.Fragment,{children:(0,x.jsxs)("tr",{style:{color:"".concat((n=e.unit,n>90?"#FF4967":n>50&&n<90?"#FFFF82":"white"))},children:[(0,x.jsx)("td",{children:e.device_name}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:e.unit,decimalScale:0,displayType:"text"})}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:e.price,decimalScale:0,displayType:"text"})}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:e.unit_price,decimalScale:0,displayType:"text"})})]})},t);var n})):(0,x.jsx)("div",{className:"absolute  w-full top-2 ",children:i?"loading":(0,x.jsx)("div",{className:"text-yellow-600",children:"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e31\u0e19-\u0e40\u0e27\u0e25\u0e32"})}),d&&d.length?(0,x.jsxs)("tr",{className:k().total,children:[(0,x.jsx)("td",{children:"Total"}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:d.reduce((function(e,t){return+e+ +t.unit}),0),decimalScale:0,displayType:"text"})}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:d.reduce((function(e,t){return+e+ +t.price}),0),decimalScale:0,displayType:"text"})}),(0,x.jsx)("td",{children:(0,x.jsx)(N.Z,{value:d.reduce((function(e,t){return+e+ +t.unit_price}),0),decimalScale:0,displayType:"text"})})]}):null]})]})]})},V=n(8162),z=function(){var e=(0,s.useState)("tab1"),t=e[0],n=e[1],r=(0,s.useState)(),l=r[0],d=r[1],o=(0,s.useState)(),u=o[0],h=o[1],f=(0,s.useState)(!1),v=f[0],g=f[1],S=(0,s.useState)(),N=S[0],w=S[1],k=(0,s.useState)(),T=k[0],C=k[1],D=(0,s.useState)(),F=D[0],Z=D[1];console.log("%cMyProject%cline:27%cstartItem","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(39, 72, 98);padding:3px;border-radius:2px",F);var E=(0,s.useState)(),I=E[0],O=E[1],z=(0,j.v9)((function(e){return e.building})),q=(0,j.I0)(),B=(0,a.useRouter)(),H=function(){var e=(0,c.Z)(i().mark((function e(t){var n,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,(0,V.a)("".concat("https://api-cache.airin1.com","/tenants/1/electricity_bill/range?start_date=").concat(N,"&end_date=").concat(T),t);case 3:return n=e.sent,e.next=6,(0,V.a)("".concat("https://api-cache.airin1.com","/tenants/1/electricity_bill/device?start_date=").concat(F,"&end_date=").concat(I),t);case 6:a=e.sent,n?(console.log("%cMyProject%cline:36%cdataSingle","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(222, 125, 44);padding:3px;border-radius:2px",a),s=n.summary,d(n.summary),g(!1),q((0,p.kP)(s)),q((0,p.M8)(N)),q((0,p.sc)(T))):a?(h(a.summary),g(!1)):(d(),h(),g(!1));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){var e=(0,m.L)("token");e&&z.data?(H(e),q((0,p.U4)(z.data.address))):B.push("/")}),[N,T,F,I]),console.log("%cMyProject%cline:23%ccalSingle","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(217, 104, 49);padding:3px;border-radius:2px",u),(0,x.jsxs)("div",{children:[(0,x.jsxs)("ul",{className:b().nav,children:[(0,x.jsx)(_,{title:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e1a\u0e1a\u0e23\u0e32\u0e22\u0e27\u0e31\u0e19",id:"tab1",activeTab:t,setActiveTab:n}),(0,x.jsx)(_,{title:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e1a\u0e1a\u0e23\u0e32\u0e22\u0e40\u0e14\u0e37\u0e2d\u0e19",id:"tab2",activeTab:t,setActiveTab:n}),(0,x.jsx)(_,{title:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e1a\u0e1a\u0e23\u0e32\u0e22\u0e1b\u0e35",id:"tab3",activeTab:t,setActiveTab:n}),(0,x.jsx)(_,{title:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e2d\u0e23\u0e4c\u0e23\u0e32\u0e22\u0e15\u0e31\u0e27",id:"tab4",activeTab:t,setActiveTab:n})]}),(0,x.jsx)("div",{children:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(y,{id:"tab1",activeTab:t,children:(0,x.jsx)(A,{title:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e1a\u0e1a\u0e23\u0e32\u0e22\u0e27\u0e31\u0e19",slug:"day",data:l,setStartDate:w,setEndDate:C,statusCallApi:v})}),(0,x.jsx)(y,{id:"tab2",activeTab:t,children:(0,x.jsx)(M,{title:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e1a\u0e1a\u0e23\u0e32\u0e22\u0e40\u0e14\u0e37\u0e2d\u0e19",slug:"month",data:l,setStartDate:w,setEndDate:C,statusCallApi:v})}),(0,x.jsx)(y,{id:"tab3",activeTab:t,children:(0,x.jsx)(P,{title:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e1a\u0e1a\u0e23\u0e32\u0e22\u0e1b\u0e35",slug:"year",data:l,setStartDate:w,setEndDate:C,statusCallApi:v})}),(0,x.jsx)(y,{id:"tab4",activeTab:t,children:(0,x.jsx)(L,{title:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e2d\u0e23\u0e4c\u0e23\u0e32\u0e22\u0e15\u0e31\u0e27",slug:"single",data:u,setStartItem:Z,setEndItem:O,statusCallApi:v})})]})})]})},q=n(6413),B=function(e){var t=(0,s.useState)([]),n=(t[0],t[1],(0,j.v9)((function(e){return e.buildingList}))),c=n.data,r=n.status,i=(0,j.I0)(),l=(0,a.useRouter)(),d=(0,s.useState)([]),o=d[0],u=d[1];return console.log("%cMyProject%cline:27%cdataUser","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(252, 157, 154);padding:3px;border-radius:2px",o),(0,s.useEffect)((function(){var e=localStorage.getItem("token");if(l&&e){i((0,q.e)(38));var t=l.query.id;if(void 0!=c){var n=c.filter((function(e){return e.id===parseInt(t)}));u(n)}}}),[l,r]),(0,x.jsxs)("div",{children:[c&&o.map((function(e,t){return(0,x.jsx)(s.Fragment,{children:(0,x.jsx)(v,{id:e.id,fname:e.name||"",lname:e.name||"",email:e.email||"",tell:e.mobile_number||"",line:e.line_id||""})},t)})),(0,x.jsx)(z,{})]})}},3918:function(e,t,n){"use strict";n.d(t,{H:function(){return l},V:function(){return d}});var a=n(266),s=n(809),c=n.n(s),r=n(9669),i=n.n(r),l=function(){var e=(0,a.Z)(c().mark((function e(t,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i().post("".concat("https://api.airin1.com/api/","tenants"),t,{headers:{Authorization:"Bearer ".concat(n),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){console.log(e.data)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(c().mark((function e(t,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i().delete("".concat("https://api.airin1.com/api/","tenants/").concat(t),{headers:{Authorization:"Bearer ".concat(n),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){console.log(e.data)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},8096:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[id]",function(){return n(3282)}])},743:function(e){e.exports={title:"calculator_title__3hUGH",box_icon:"calculator_box_icon__3qHG6",menu_item:"calculator_menu_item__PynSv",table:"calculator_table__2lxFJ",inputDate:"calculator_inputDate__3G49z",total:"calculator_total__GT19q"}},9007:function(e){e.exports={modal:"delModal_modal__2ABBv",modal_content:"delModal_modal_content__18zmp",box_but:"delModal_box_but__34KAx",close_icon:"delModal_close_icon__1yZVx"}},3592:function(e){e.exports={nav:"navTab_nav__2dg8P",tabOn:"navTab_tabOn__2jVmv"}},9930:function(e){e.exports={title:"userCardDetail_title__3YTmD",listContact:"userCardDetail_listContact__ez8B3"}}},function(e){e.O(0,[774,885,228,996,333,888,179],(function(){return t=8096,e(e.s=t);var t}));var t=e.O();_N_E=t}]);