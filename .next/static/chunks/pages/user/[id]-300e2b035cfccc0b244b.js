(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{9414:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var a=n(266),s=n(809),c=n.n(s),r=n(1163),i=n(7294),l=n(9930),o=n.n(l),d=n(9007),u=n.n(d),h=n(5893),x=function(e){var t=e.title,n=e.onClose,a=e.onDeleteTenant;return(0,h.jsx)("div",{id:"myModal",className:u().modal,children:(0,h.jsxs)("div",{className:u().modal_content,children:[(0,h.jsxs)("p",{children:[" ",t]}),(0,h.jsx)("img",{src:"/svg/close.svg",width:40,alt:"",className:"".concat(u().close_icon," icon"),onClick:function(){return n(!1)}}),(0,h.jsx)("img",{src:"/svg/tashOpen.svg",width:150,alt:""}),(0,h.jsxs)("div",{className:u().box_but,children:[(0,h.jsx)("button",{className:"but_black",onClick:function(){return n(!1)},children:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01"}),(0,h.jsx)("button",{className:"but_gray",onClick:a,children:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"})]})]})})},j=n(5998),p=n(2393),m=n(3918),f=n(4480),v=function(e){var t=e.id,n=e.fname,s=(e.lname,e.email),l=e.tell,d=e.line,u=e.setIsToggleAirList;console.log("%cMyProject%cline:20%cfname","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(20, 68, 106);padding:3px;border-radius:2px",n);var v=(0,i.useState)(!1),g=v[0],b=v[1],_=(0,i.useState)(""),w=_[0],y=_[1],S=(0,i.useState)(""),N=(S[0],S[1],(0,j.I0)()),C=(0,r.useRouter)(),k=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w){e.next=5;break}return e.next=3,(0,m.VY)(t,w);case 3:b(!1),C.push("/");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=(0,a.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(!0);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){var e=(0,f.L)("token");e&&y(e),n&&N((0,p.vu)(n))}),[n]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"box_black",children:[(0,h.jsxs)("div",{className:o().title,children:[(0,h.jsxs)("figure",{children:[(0,h.jsx)("img",{src:"/svg/builder.svg",alt:"",className:"icon"}),(0,h.jsxs)("figcaption",{children:[(0,h.jsx)("p",{children:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32"}),(0,h.jsxs)("p",{children:["\u0e0a\u0e37\u0e48\u0e2d: ",(0,h.jsx)("span",{children:"".concat(n)})]})]})]}),(0,h.jsxs)("div",{className:"flex items-center",children:[(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:"but_gray flex justify-center items-center cursor-pointer",onClick:function(){return u(!0)},children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 AIR"})}),(0,h.jsx)("img",{src:"/svg/tash.svg",alt:"",className:"icon",width:20,onClick:function(){return A(t)}})]})]}),(0,h.jsxs)("ul",{className:o().listContact,children:[(0,h.jsx)("li",{children:(0,h.jsxs)("p",{children:[(0,h.jsx)("span",{children:(0,h.jsx)("img",{src:"/svg/phone.svg",alt:"",className:"icon",width:30})}),l]})}),(0,h.jsx)("li",{children:(0,h.jsxs)("p",{children:[(0,h.jsx)("span",{children:(0,h.jsx)("img",{src:"/svg/email.svg",alt:"",className:"icon",width:30})}),s]})}),(0,h.jsx)("li",{children:(0,h.jsxs)("p",{children:[(0,h.jsx)("span",{children:(0,h.jsx)("img",{src:"/svg/line.svg",alt:"",className:"icon",width:30})}),d]})})]}),g&&(0,h.jsx)(x,{title:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e17\u0e35\u0e48\u0e08\u0e30\u0e25\u0e1a\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32\u0e19\u0e35\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48",onClose:b,onDeleteTenant:k})]})})},g=n(3592),b=n.n(g),_=function(e){var t=e.id,n=e.title,a=e.activeTab,s=e.setActiveTab;return(0,h.jsx)("li",{onClick:function(){s(t)},className:a===t?b().tabOn:"",children:n})},w=function(e){var t=e.id,n=e.activeTab,a=e.children;return n===t?(0,h.jsx)("div",{className:b().tabContent,children:a}):null},y=n(1664),S=n(7333),N=n(743),C=n.n(N),k=n(9198),A=n.n(k),T=(n(7276),function(e){var t=e.set,n=(0,i.useState)(new Date),a=n[0],s=n[1];return(0,h.jsx)("div",{className:"relative iconDatePicker ",children:(0,h.jsx)(A(),{selected:a,onChange:function(e){return function(e){if(e){s(e);var n=e.getFullYear();t(n)}}(e)},showYearPicker:!0,dateFormat:"yyyy",yearItemNumber:9,className:"text-white bg-[#707070] rounded-full px-2 max-w-[120px] cursor-pointer h-[30px]"})})}),F=function(e){var t=e.set,n=(0,i.useState)(new Date),a=n[0],s=n[1];return(0,h.jsx)("div",{className:"relative iconDatePicker ",children:(0,h.jsx)(A(),{selected:a,onChange:function(e){return function(e){if(e){s(e);var n=e.getMonth()+1;t(n)}}(e)},dateFormat:"MMM",showMonthYearPicker:!0,className:"text-white bg-[#707070] rounded-full px-2 max-w-[120px] cursor-pointer h-[30px]"})})},D=function(e){var t=e.onClear,n=e.onShow,s=e.setStartDate,r=e.setEndDate,l=(e.title,e.slug),o=e.data,d=e.statusCallApi,u=e.onShowAll,x=(0,i.useState)([]),m=x[0],f=x[1],v=(0,i.useState)(0),g=v[0],b=v[1],_=(0,i.useState)(),w=(_[0],_[1],(0,i.useState)(new Date)),N=w[0],k=w[1],A=(0,i.useState)(new Date),D=A[0],Z=A[1],E=(0,i.useState)(),M=(E[0],E[1],(0,i.useState)()),I=(M[0],M[1],(0,i.useState)(!1)),O=(I[0],I[1],(0,i.useState)()),L=O[0],P=O[1],R=(0,i.useState)(),z=R[0],H=R[1],q=new Array(31).fill(""),B=new Date,V=(0,j.I0)(),Y=function(){var e=(0,a.Z)(c().mark((function e(){var t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("set data"),t="".concat(N,"-").concat(D,"-").concat(L),a="".concat(N,"-").concat(D,"-").concat(z),e.next=5,n();case 5:t&&a&&(s(t),r(a));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){var e=0;f(o),V((0,p.M)(g)),m&&m.forEach((function(t){return b(e+=t.price)}))}),[o,s,D,N,r,d,g]),(0,h.jsxs)("div",{className:"box_black",children:[(0,h.jsxs)("div",{className:C().title,children:[(0,h.jsx)("h3",{children:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e1a\u0e1a\u0e23\u0e32\u0e22\u0e27\u0e31\u0e19"}),(0,h.jsxs)("div",{className:C().box_icon,children:[(0,h.jsx)("div",{children:(0,h.jsx)(F,{set:Z})}),(0,h.jsx)("div",{children:(0,h.jsx)(T,{set:k})}),(0,h.jsx)("div",{onClick:t,children:(0,h.jsx)("img",{src:"/svg/refersh.svg",width:30,alt:"",className:"icon"})}),(0,h.jsx)("div",{children:m?(0,h.jsx)(y.default,{href:"/user/pdf/".concat(l),children:(0,h.jsx)("img",{src:"/svg/sendMail.svg",width:30,alt:"",className:"icon"})}):null})]})]}),(0,h.jsxs)("ul",{className:C().menu_item,children:[(0,h.jsxs)("li",{children:[(0,h.jsx)("p",{children:"\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"}),(0,h.jsx)("div",{className:"selector_gray",children:(0,h.jsx)("select",{name:"start_day",id:"",className:"selector_gray",onChange:function(e){return function(e){P(e)}(e.target.value)},children:q.map((function(e,t){return(0,h.jsx)("option",{value:t+1,selected:t+1==B.getDate(),children:t+1<=9?"0".concat(t+1):"".concat(t+1)},t)}))})})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("p",{children:"\u0e16\u0e36\u0e07"}),(0,h.jsx)("div",{className:"selector_gray",children:(0,h.jsx)("select",{name:"start_day",id:"",className:"selector_gray",onChange:function(e){return function(e){H(e)}(e.target.value)},children:q.map((function(e,t){return(0,h.jsx)("option",{value:t+1,selected:t+1==B.getDate(),children:t+1<=9?"0".concat(t+1):"".concat(t+1)},t)}))})})]}),(0,h.jsx)("li",{children:(0,h.jsx)("button",{className:"but_green",onClick:u,children:d?"Loading":"Show All"})}),(0,h.jsx)("li",{children:(0,h.jsx)("button",{className:"border-2  w-[100px]  rounded-full border-[#56D9FE] text-[#56D9FE]",onClick:Y,children:d?"Loading":"Show"})})]}),(0,h.jsxs)("table",{className:C().table,children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"\u0e40\u0e27\u0e25\u0e32"}),(0,h.jsx)("th",{children:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e1e\u0e25\u0e31\u0e07\u0e07\u0e32\u0e19"}),(0,h.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32"}),(0,h.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32\u0e15\u0e48\u0e2d\u0e2b\u0e19\u0e48\u0e27\u0e22"})]})}),(0,h.jsxs)("tbody",{className:"relative",children:[m&&m.length?m.map((function(e,t){return(0,h.jsx)(i.Fragment,{children:(0,h.jsxs)("tr",{style:{color:"".concat((n=e.unit,n>90?"#FF4967":n>50&&n<90?"#FFFF82":"white"))},children:[(0,h.jsx)("td",{children:e.unit_name}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:e.unit,decimalScale:0,displayType:"text"})}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:e.price,decimalScale:0,displayType:"text"})}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:e.unit_price,decimalScale:0,displayType:"text"})})]})},t);var n})):(0,h.jsx)("div",{className:"absolute  w-full top-2 ",children:d?"loading":(0,h.jsx)("div",{className:"text-yellow-600",children:"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e31\u0e19-\u0e40\u0e27\u0e25\u0e32 \u0e08\u0e32\u0e01\u0e19\u0e31\u0e49\u0e19\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 Show"})}),m&&m.length?(0,h.jsxs)("tr",{className:C().total,children:[(0,h.jsx)("td",{children:"Total"}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:m.reduce((function(e,t){return+e+ +t.unit}),0),decimalScale:0,displayType:"text"})}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:m.reduce((function(e,t){return+e+ +t.price}),0),decimalScale:0,displayType:"text"})}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:m.reduce((function(e,t){return+e+ +t.unit_price}),0),decimalScale:0,displayType:"text"})})]}):null]})]})]})},Z=n(381),E=n.n(Z),M=function(e){var t=e.onClear,n=e.onShow,s=e.onShowAll,r=e.title,l=e.slug,o=e.data,d=e.setStartDate,u=e.setEndDate,x=e.statusCallApi,m=(0,i.useState)([]),f=m[0],v=m[1],g=(0,i.useState)(0),b=g[0],_=g[1],w=(0,i.useState)(new Date),N=w[0],k=w[1],A=(0,i.useState)(new Date),D=A[0],Z=A[1],M=(0,i.useState)(),I=(M[0],M[1],(0,i.useState)()),O=(I[0],I[1],E()().date()),L=(0,j.I0)(),P=function(){var e=(0,a.Z)(c().mark((function e(){var t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(N,"-").concat(D,"-").concat(O),a="".concat(N,"-").concat(D,"-").concat(O),e.next=4,n();case 4:t&&a&&(d(t),u(a));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){var e=0;v(o),L((0,p.M)(b)),f&&f.forEach((function(t){return _(e+=t.price)}))}),[o,d,D,N,u,x,b]),(0,h.jsxs)("div",{className:"box_black",children:[(0,h.jsxs)("div",{className:C().title,children:[(0,h.jsx)("h3",{children:r}),(0,h.jsxs)("div",{className:C().box_icon,children:[(0,h.jsx)("div",{children:(0,h.jsx)(T,{set:k})}),(0,h.jsx)("div",{onClick:t,children:(0,h.jsx)("img",{src:"/svg/refersh.svg",width:30,alt:"",className:"icon"})}),(0,h.jsx)("div",{children:f?(0,h.jsx)(y.default,{href:"/user/pdf/".concat(l),children:(0,h.jsx)("img",{src:"/svg/sendMail.svg",width:30,alt:"",className:"icon"})}):null})]})]}),(0,h.jsxs)("ul",{className:C().menu_item,children:[(0,h.jsxs)("li",{children:[(0,h.jsx)("p",{children:"\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e17\u0e35\u0e48"}),(0,h.jsx)("div",{children:(0,h.jsx)(F,{set:Z})})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("p",{children:"\u0e16\u0e36\u0e07"}),(0,h.jsx)("div",{children:(0,h.jsx)(F,{set:Z})})]}),"        ",(0,h.jsx)("li",{children:(0,h.jsx)("button",{className:"but_green",onClick:s,children:x?"Loading":"Show All"})}),(0,h.jsx)("li",{children:(0,h.jsx)("button",{className:"but_blue",onClick:P,children:x?"Loading":"Show"})})]}),(0,h.jsxs)("table",{className:C().table,children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"\u0e40\u0e27\u0e25\u0e32"}),(0,h.jsx)("th",{children:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e1e\u0e25\u0e31\u0e07\u0e07\u0e32\u0e19"}),(0,h.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32"}),(0,h.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32\u0e15\u0e48\u0e2d\u0e2b\u0e19\u0e48\u0e27\u0e22"})]})}),(0,h.jsxs)("tbody",{className:"relative",children:[f&&f.length?f.map((function(e,t){return(0,h.jsx)(i.Fragment,{children:(0,h.jsxs)("tr",{style:{color:"".concat((n=e.unit,n>90?"#FF4967":n>50&&n<90?"#FFFF82":"white"))},children:[(0,h.jsx)("td",{children:e.unit_name}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:e.unit,decimalScale:0,displayType:"text"})}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:e.price,decimalScale:0,displayType:"text"})}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:e.unit_price,decimalScale:0,displayType:"text"})})]})},t);var n})):(0,h.jsx)("div",{className:"absolute  w-full top-2 ",children:x?"loading":(0,h.jsx)("div",{className:"text-yellow-600",children:"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e31\u0e19-\u0e40\u0e27\u0e25\u0e32 \u0e08\u0e32\u0e01\u0e19\u0e31\u0e49\u0e19\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 Show"})}),f&&f.length?(0,h.jsxs)("tr",{className:C().total,children:[(0,h.jsx)("td",{children:"Total"}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:f.reduce((function(e,t){return+e+ +t.unit}),0),decimalScale:0,displayType:"text"})}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:f.reduce((function(e,t){return+e+ +t.price}),0),decimalScale:0,displayType:"text"})}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:f.reduce((function(e,t){return+e+ +t.unit_price}),0),decimalScale:0,displayType:"text"})})]}):null]})]})]})},I=function(e){var t=e.onClear,n=e.onShow,s=e.onShowAll,r=e.title,l=e.slug,o=e.data,d=e.setStartDate,u=e.setEndDate,x=e.statusCallApi,m=(0,i.useState)([]),f=m[0],v=m[1],g=(0,i.useState)(0),b=g[0],_=g[1],w=(0,i.useState)(),N=(w[0],w[1],(0,i.useState)(new Date)),k=N[0],A=N[1],F=(0,i.useState)(new Date),D=F[0],Z=(F[1],(0,i.useState)(new Date)),M=Z[0],I=Z[1],O=(0,i.useState)(),L=(O[0],O[1],(0,i.useState)()),P=(L[0],L[1],(0,i.useState)(!1)),R=(P[0],P[1],(0,i.useState)()),z=(R[0],R[1],(0,i.useState)()),H=(z[0],z[1],E()().date()),q=E()().month(),B=(0,j.I0)(),V=function(){var e=(0,a.Z)(c().mark((function e(){var t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("number"==typeof k?k:"2022","-").concat(q,"-").concat(H),a="".concat("number"==typeof M?M:"2022","-").concat(q,"-").concat(H),e.next=4,n();case 4:t&&a&&(d(t),u(a));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){var e=0;v(o),B((0,p.M)(b)),f&&f.forEach((function(t){return _(e+=t.price)}))}),[o,d,D,k,u,x,b]),(0,h.jsxs)("div",{className:"box_black",children:[(0,h.jsxs)("div",{className:C().title,children:[(0,h.jsx)("h3",{children:r}),(0,h.jsxs)("div",{className:C().box_icon,children:[(0,h.jsx)("div",{onClick:t,children:(0,h.jsx)("img",{src:"/svg/refersh.svg",width:30,alt:"",className:"icon"})}),(0,h.jsx)("div",{children:f?(0,h.jsx)(y.default,{href:"/user/pdf/".concat(l),children:(0,h.jsx)("img",{src:"/svg/sendMail.svg",width:30,alt:"",className:"icon"})}):null})]})]}),(0,h.jsxs)("ul",{className:C().menu_item,children:[(0,h.jsxs)("li",{children:[(0,h.jsx)("p",{children:"\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e1b\u0e35\u0e17\u0e35\u0e48"}),(0,h.jsx)("div",{children:(0,h.jsx)(T,{set:A})})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("p",{children:"\u0e16\u0e36\u0e07"}),(0,h.jsx)("div",{children:(0,h.jsx)(T,{set:I})})]}),(0,h.jsx)("li",{children:(0,h.jsx)("button",{className:"but_green",onClick:s,children:x?"Loading":"Show All"})}),(0,h.jsx)("li",{children:(0,h.jsx)("button",{className:"but_blue",onClick:V,children:x?"Loading":"Show"})})]}),(0,h.jsxs)("table",{className:C().table,children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"\u0e40\u0e27\u0e25\u0e32"}),(0,h.jsx)("th",{children:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e1e\u0e25\u0e31\u0e07\u0e07\u0e32\u0e19"}),(0,h.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32"}),(0,h.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32\u0e15\u0e48\u0e2d\u0e2b\u0e19\u0e48\u0e27\u0e22"})]})}),(0,h.jsxs)("tbody",{className:"relative",children:[f&&f.length?f.map((function(e,t){return(0,h.jsx)(i.Fragment,{children:(0,h.jsxs)("tr",{style:{color:"".concat((n=e.unit,n>90?"#FF4967":n>50&&n<90?"#FFFF82":"white"))},children:[(0,h.jsx)("td",{children:e.unit_name}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:e.unit,decimalScale:0,displayType:"text"})}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:e.price,decimalScale:0,displayType:"text"})}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:e.unit_price,decimalScale:0,displayType:"text"})})]})},t);var n})):(0,h.jsx)("div",{className:"absolute  w-full top-2 ",children:x?"loading":(0,h.jsx)("div",{className:"text-yellow-600",children:"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e31\u0e19-\u0e40\u0e27\u0e25\u0e32 \u0e08\u0e32\u0e01\u0e19\u0e31\u0e49\u0e19\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 Show"})}),f&&f.length?(0,h.jsxs)("tr",{className:C().total,children:[(0,h.jsx)("td",{children:"Total"}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:f.reduce((function(e,t){return+e+ +t.unit}),0),decimalScale:0,displayType:"text"})}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:f.reduce((function(e,t){return+e+ +t.price}),0),decimalScale:0,displayType:"text"})}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:f.reduce((function(e,t){return+e+ +t.unit_price}),0),decimalScale:0,displayType:"text"})})]}):null]})]})]})},O=n(5434),L=function(e){var t=e.setValue,n=(0,i.useState)(new Date),s=n[0],r=n[1],l=function(){var e=(0,a.Z)(c().mark((function e(n){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(n),e.next=3,E()(n).format("L");case 3:(a=e.sent)&&t(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:"relative",children:[(0,h.jsx)(A(),{selected:s,onChange:function(e){return l(e)},onCalendarClose:function(){return console.log("Calendar closed")},onCalendarOpen:function(){return console.log("Calendar opened")},className:"bg-[#707070] rounded-full h-[30px] px-3 w-[150px] cursor-pointer"}),(0,h.jsx)("div",{className:"absolute top-1 right-3 cursor-pointer",children:(0,h.jsx)(O.FFD,{size:20})})]})},P=function(e){var t=e.onClear,n=e.onShowAll,a=e.title,s=e.slug,c=e.data,r=e.setStartItem,l=e.setEndItem,o=e.statusCallApi,d=(0,i.useState)(),u=d[0],x=d[1],j=(0,i.useState)(0),p=(j[0],j[1]);return(0,i.useEffect)((function(){x(c);var e=0;u&&u.forEach((function(t){return p(e+=t.unit)}))}),[c,r,l,o]),(0,h.jsxs)("div",{className:"box_black",children:[(0,h.jsxs)("div",{className:C().title,children:[(0,h.jsx)("h3",{children:a}),(0,h.jsxs)("div",{className:C().box_icon,children:[(0,h.jsx)("div",{onClick:t,children:(0,h.jsx)("img",{src:"/svg/refersh.svg",width:30,alt:"",className:"icon"})}),(0,h.jsx)("div",{children:u?(0,h.jsx)(y.default,{href:"/user/pdf/".concat(s),children:(0,h.jsx)("img",{src:"/svg/sendMail.svg",width:30,alt:"",className:"icon"})}):null})]})]}),(0,h.jsxs)("ul",{className:C().menu_item,children:[(0,h.jsxs)("li",{children:[(0,h.jsx)("p",{children:"\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"}),(0,h.jsx)(L,{setValue:r})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("p",{children:"\u0e16\u0e36\u0e07"}),(0,h.jsx)(L,{setValue:l})]}),(0,h.jsx)("li",{children:(0,h.jsx)("button",{className:"but_green",onClick:n,children:o?"Loading":"Show All"})}),(0,h.jsx)("li",{children:(0,h.jsx)("button",{className:"but_blue",children:"Show"})})]}),(0,h.jsxs)("table",{className:C().table,children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"\u0e40\u0e27\u0e25\u0e32"}),(0,h.jsx)("th",{children:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e1e\u0e25\u0e31\u0e07\u0e07\u0e32\u0e19"}),(0,h.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32"}),(0,h.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32\u0e15\u0e48\u0e2d\u0e2b\u0e19\u0e48\u0e27\u0e22"})]})}),(0,h.jsxs)("tbody",{className:"relative",children:[u?u.map((function(e,t){return(0,h.jsx)(i.Fragment,{children:(0,h.jsxs)("tr",{style:{color:"".concat((n=e.unit,n>90?"#FF4967":n>50&&n<90?"#FFFF82":"white"))},children:[(0,h.jsx)("td",{children:e.device_name}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:e.unit,decimalScale:0,displayType:"text"})}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:e.price,decimalScale:0,displayType:"text"})}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:e.unit_price,decimalScale:0,displayType:"text"})})]})},t);var n})):(0,h.jsx)("div",{className:"absolute  w-full top-2 ",children:o?"loading":(0,h.jsx)("div",{className:"text-yellow-600",children:"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e31\u0e19-\u0e40\u0e27\u0e25\u0e32 \u0e08\u0e32\u0e01\u0e19\u0e31\u0e49\u0e19\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 Show"})}),u&&u.length?(0,h.jsxs)("tr",{className:C().total,children:[(0,h.jsx)("td",{children:"Total"}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:u.reduce((function(e,t){return+e+ +t.unit}),0),decimalScale:0,displayType:"text"})}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:u.reduce((function(e,t){return+e+ +t.price}),0),decimalScale:0,displayType:"text"})}),(0,h.jsx)("td",{children:(0,h.jsx)(S.Z,{value:u.reduce((function(e,t){return+e+ +t.unit_price}),0),decimalScale:0,displayType:"text"})})]}):null]})]})]})},R=n(8162),z=function(){var e=(0,i.useState)("tab1"),t=e[0],n=e[1],s=(0,i.useState)(),l=s[0],o=s[1],d=(0,i.useState)(),u=d[0],x=d[1],m=(0,i.useState)(!1),v=m[0],g=m[1],y=(0,i.useState)(),S=y[0],N=y[1],C=(0,i.useState)(),k=C[0],A=C[1],T=(0,i.useState)(),F=T[0],Z=T[1],E=(0,i.useState)(),O=E[0],L=E[1],z=(0,i.useState)(""),H=z[0],q=z[1],B=(0,i.useState)(""),V=B[0],Y=B[1],X=(0,j.v9)((function(e){return e.building})),G=(0,j.I0)(),W=(0,r.useRouter)(),U=function(){var e=(0,a.Z)(c().mark((function e(t){var n,a,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,(0,R.a)("".concat("https://api-cache.airin1.com/","tenants/1/electricity_bill/range?start_date=").concat(S,"&end_date=").concat(k),t);case 3:return n=e.sent,e.next=6,(0,R.a)("".concat("https://api-cache.airin1.com/","tenants/1/electricity_bill/device?start_date=").concat(F,"&end_date=").concat(O),t);case 6:a=e.sent,n?(s=n.summary,o(n.summary),g(!1),G((0,p.kP)(s)),G((0,p.M8)(S)),G((0,p.sc)(k))):a?(x(a.summary),g(!1)):(o(),x(),g(!1));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=(0,a.Z)(c().mark((function e(){var t,n,a,s,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g(!0),t=H.slice(0,10),n=new Date,a="".concat(n.getFullYear(),"-").concat(n.getMonth(),"-").concat(n.getDate()),!t){e.next=17;break}return e.next=7,(0,R.a)("".concat("https://api-cache.airin1.com/","tenants/1/electricity_bill/range?start_date=").concat(t,"&end_date=").concat(a),V);case 7:return s=e.sent,e.next=10,(0,R.a)("".concat("https://api-cache.airin1.com/","tenants/1/electricity_bill/device?start_date=").concat(t,"&end_date=").concat(a),V);case 10:(r=e.sent)&&(x(r.summary),G((0,p.M8)(t)),G((0,p.sc)(a))),o(s.summary),g(!1),G((0,p.kP)(s.summary)),G((0,p.M8)(t)),G((0,p.sc)(a));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){o(),x()};return(0,i.useMemo)((function(){console.log("clear data"),o()}),[t]),(0,i.useEffect)((function(){var e=(0,f.L)("token");e&&X.data?(U(e),J(),Y(e),G((0,p.U4)(X.data.address)),q(X.data.created_at)):W.push("/"),console.log("re render")}),[S,k,F,O]),(0,h.jsxs)("div",{children:[(0,h.jsxs)("ul",{className:b().nav,children:[(0,h.jsx)(_,{title:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e1a\u0e1a\u0e23\u0e32\u0e22\u0e27\u0e31\u0e19",id:"tab1",activeTab:t,setActiveTab:n}),(0,h.jsx)(_,{title:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e1a\u0e1a\u0e23\u0e32\u0e22\u0e40\u0e14\u0e37\u0e2d\u0e19",id:"tab2",activeTab:t,setActiveTab:n}),(0,h.jsx)(_,{title:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e1a\u0e1a\u0e23\u0e32\u0e22\u0e1b\u0e35",id:"tab3",activeTab:t,setActiveTab:n}),(0,h.jsx)(_,{title:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e2d\u0e23\u0e4c\u0e23\u0e32\u0e22\u0e15\u0e31\u0e27",id:"tab4",activeTab:t,setActiveTab:n})]}),(0,h.jsx)("div",{children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(w,{id:"tab1",activeTab:t,children:(0,h.jsx)(D,{title:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e1a\u0e1a\u0e23\u0e32\u0e22\u0e27\u0e31\u0e19",slug:"day",data:l,setStartDate:N,setEndDate:A,statusCallApi:v,onShowAll:J,onShow:U,onClear:K})}),(0,h.jsx)(w,{id:"tab2",activeTab:t,children:(0,h.jsx)(M,{title:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e1a\u0e1a\u0e23\u0e32\u0e22\u0e40\u0e14\u0e37\u0e2d\u0e19",slug:"month",data:l,setStartDate:N,setEndDate:A,statusCallApi:v,onShowAll:J,onShow:U,onClear:K})}),(0,h.jsx)(w,{id:"tab3",activeTab:t,children:(0,h.jsx)(I,{title:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e1a\u0e1a\u0e23\u0e32\u0e22\u0e1b\u0e35",slug:"year",data:l,setStartDate:N,setEndDate:A,statusCallApi:v,onShowAll:J,onShow:U,onClear:K})}),(0,h.jsx)(w,{id:"tab4",activeTab:t,children:(0,h.jsx)(P,{title:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f\u0e41\u0e2d\u0e23\u0e4c\u0e23\u0e32\u0e22\u0e15\u0e31\u0e27",slug:"single",data:u,setStartItem:Z,setEndItem:L,statusCallApi:v,onShowAll:J,onShow:U,onClear:K})})]})})]})},H=n(2897),q=n.n(H),B=n(5675),V=function(e){var t=e.title,n=e.data,a=e.airSelected,s=(0,i.useState)(!1),c=s[0],r=s[1];return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:q().title,children:t}),(0,h.jsxs)("form",{className:q().box_form,children:[n&&n.length?n.map((function(e,t){return t<="".concat(c?100:9)&&(0,h.jsx)("div",{className:q().form_item,children:(0,h.jsxs)("label",{className:"container_label",children:[e.name,(0,h.jsx)("input",{type:"checkbox",disabled:!0,defaultChecked:!0,onChange:function(){var t;(t=e.id)&&a.push(t)},value:e.name}),(0,h.jsx)("span",{className:"checkmark"})]})},t)})):(0,h.jsx)("div",{className:"text-center",children:"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 Air"}),n&&n.length>10?(0,h.jsx)("div",{className:"w-full text-center cursor-pointer",onClick:function(){return r(!c)},children:c?(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"rotate-180",children:(0,h.jsx)(B.default,{src:"/svg/arrowDown.svg",alt:"",width:10,height:10})}),(0,h.jsx)("div",{children:"Hidden"})]}):(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:"Show more"}),(0,h.jsx)("div",{children:(0,h.jsx)(B.default,{src:"/svg/arrowDown.svg",alt:"",width:10,height:10})})]})}):null]})]})},Y=function(e){var t=(0,i.useState)([]),n=(t[0],t[1],(0,i.useState)(!1)),s=n[0],l=n[1],o=(0,j.v9)((function(e){return e.buildingList})),d=o.data,u=o.status,x=((0,j.I0)(),(0,r.useRouter)()),p=(0,i.useState)({}),f=p[0],g=p[1];console.log("%cMyProject%cline:33%cdataUser","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(23, 44, 60);padding:3px;border-radius:2px",f);var b=function(){var e=(0,a.Z)(c().mark((function e(t,n){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.dy)(t,n);case 2:(a=e.sent)&&g(a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){var e=localStorage.getItem("token");if(x&&e){var t=x.query.id;if(void 0!=d){d.filter((function(e){return e.id===parseInt(t)}));b(e,t)}}}),[x,u]),(0,h.jsx)("div",{children:f&&(0,h.jsx)(h.Fragment,{children:s?(0,h.jsxs)("div",{className:"bg-black p-10 rounded-2xl",children:[(0,h.jsx)("div",{onClick:function(){return l(!1)},children:(0,h.jsx)("img",{src:"/svg/arrowLeft.svg",className:"icon",width:40,style:{margin:"0px"},alt:""})}),(0,h.jsx)(V,{data:f.devices,title:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 Air",airSelected:""})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{id:f.id,fname:f.name||"",lname:f.name||"",email:f.email||"",tell:f.mobile_number||"",line:f.line_id||"",setIsToggleAirList:l}),(0,h.jsx)(z,{})]})})})}},3918:function(e,t,n){"use strict";n.d(t,{H1:function(){return l},VY:function(){return o},dy:function(){return d},zz:function(){return u}});var a=n(266),s=n(809),c=n.n(s),r=n(9669),i=n.n(r),l=function(){var e=(0,a.Z)(c().mark((function e(t,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i().post("".concat("https://api.airin1.com/api/","tenants"),t,{headers:{Authorization:"Bearer ".concat(n),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){console.log(e.data)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)(c().mark((function e(t,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i().delete("".concat("https://api.airin1.com/api/","tenants/").concat(t),{headers:{Authorization:"Bearer ".concat(n),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){console.log(e.data)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(c().mark((function e(t,n){var a,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat("https://api.airin1.com/api/","tenants/").concat(n),{headers:{Authorization:"Bearer ".concat(t),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});case 3:return a=e.sent,s=a.data,a.status,e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)(c().mark((function e(t,n){var a,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat("https://api-cache.airin1.com/","tenants?building_id=").concat(n),{headers:{Authorization:"Bearer ".concat(t),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});case 3:return a=e.sent,s=a.data,a.status,console.log(s),e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}()},8096:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[id]",function(){return n(9414)}])},743:function(e){e.exports={title:"calculator_title__3hUGH",box_icon:"calculator_box_icon__3qHG6",menu_item:"calculator_menu_item__PynSv",table:"calculator_table__2lxFJ",inputDate:"calculator_inputDate__3G49z",total:"calculator_total__GT19q"}},2897:function(e){e.exports={title:"airRegisterForm_title__1E3v1",box_form:"airRegisterForm_box_form__2v5bv",form_item:"airRegisterForm_form_item__2e2di"}},9007:function(e){e.exports={modal:"delModal_modal__2ABBv",modal_content:"delModal_modal_content__18zmp",box_but:"delModal_box_but__34KAx",close_icon:"delModal_close_icon__1yZVx"}},3592:function(e){e.exports={nav:"navTab_nav__2dg8P",tabOn:"navTab_tabOn__2jVmv"}},9930:function(e){e.exports={title:"userCardDetail_title__3YTmD",listContact:"userCardDetail_listContact__ez8B3"}}},function(e){e.O(0,[774,885,228,675,996,333,888,179],(function(){return t=8096,e(e.s=t);var t}));var t=e.O();_N_E=t}]);