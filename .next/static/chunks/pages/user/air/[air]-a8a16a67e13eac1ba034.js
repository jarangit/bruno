(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{3855:function(e,t,r){"use strict";r.d(t,{do:function(){return o}});var i=r(7294),n=r(2897),a=r.n(n),s=r(5675),l=r(5893),o=function(e){var t=e.title,r=e.data,n=e.airSelected;console.log("%cMyProject%cline:11%cdata","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(3, 22, 52);padding:3px;border-radius:2px",r);var o=(0,i.useState)(!1),c=o[0],d=o[1];return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:a().title,children:t}),(0,l.jsxs)("form",{className:a().box_form,children:[r&&r.map((function(e,t){return t<="".concat(c?100:9)&&(0,l.jsx)("div",{className:a().form_item,children:(0,l.jsxs)("label",{className:"container_label",children:[e.name,(0,l.jsx)("input",{type:"checkbox",disabled:"on"===e.status,defaultChecked:"on"===e.status,onChange:function(){var t;(t=e.id)&&n.push(t)},value:e.name}),(0,l.jsx)("span",{className:"checkmark"})]})},t)})),r&&r.length>10?(0,l.jsx)("div",{className:"w-full text-center cursor-pointer",onClick:function(){return d(!c)},children:c?(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"rotate-180",children:(0,l.jsx)(s.default,{src:"/svg/arrowDown.svg",alt:"",width:10,height:10})}),(0,l.jsx)("div",{children:"Hidden"})]}):(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:"Show more"}),(0,l.jsx)("div",{children:(0,l.jsx)(s.default,{src:"/svg/arrowDown.svg",alt:"",width:10,height:10})})]})}):(0,l.jsx)("div",{className:"text-center",children:"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 Air"})]})]})};r(7931),r(1968),r(2639)},7931:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var i=r(266),n=r(2809),a=r(809),s=r.n(a),l=r(1163),o=r(7294),c=r(9669),d=r.n(c),u=function(){var e=(0,i.Z)(s().mark((function e(t,r,i){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d().patch("".concat("https://api.airin1.com/api/","buildings/").concat(i,"/owner_info"),t,{headers:{Authorization:"Bearer ".concat(r),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){console.log(e.data)})));case 1:case"end":return e.stop()}}),e)})));return function(t,r,i){return e.apply(this,arguments)}}(),m=r(5021),f=r.n(m),x=r(4480),p=r(5893);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){var t=e.data,r=(0,o.useState)(!1),a=r[0],c=r[1],d=(0,o.useState)(""),m=d[0],h=d[1],g=(0,o.useState)(""),j=g[0],v=g[1],b=(0,o.useState)({name:"",address:"",postal_code:"",mobile_number:"",email:"",line_id:"line",room_count:3}),N=b[0],w=b[1],y=(0,l.useRouter)(),A=N.name,k=N.address,O=N.postal_code,I=N.mobile_number,S=N.email;N.line_id;var P=function(){var e=(0,i.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c(!0),t.preventDefault(),!j){e.next=6;break}return e.next=5,u(N,j,m);case 5:c(!1);case 6:y.push("/");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){var e=(0,x.L)("token"),r=localStorage.getItem("currentBuildingID");if(e&&r&&(v(e),h(r)),t.building_owner){var i=t.building_owner;w({name:i.name,address:i.address,postal_code:i.postal_code,mobile_number:i.mobile_number,email:i.email,line_id:"line",room_count:3})}else w({name:"",address:"",postal_code:"",mobile_number:"",email:"",line_id:"",room_count:0})}),[t]),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("form",{className:f().form,onChange:function(e){w(_(_({},N),{},(0,n.Z)({},e.target.name,e.target.value)))},onSubmit:P,children:[(0,p.jsxs)("div",{className:f().formItem,children:[(0,p.jsx)("label",{children:"Owner"}),(0,p.jsx)("input",{type:"text",placeholder:"name",className:"mainInput",name:"name",defaultValue:A||""})]}),(0,p.jsxs)("div",{className:f().formItem,children:[(0,p.jsx)("label",{children:"Address"}),(0,p.jsx)("textarea",{placeholder:"Address",className:"mainTextArea",rows:5,cols:5,name:"address",defaultValue:k||""})]}),(0,p.jsxs)("div",{className:f().formItem,children:[(0,p.jsx)("label",{children:"Postal code"}),(0,p.jsx)("input",{type:"text",placeholder:"Postal code",className:"mainInput",name:"postal_code",defaultValue:O||""})]}),(0,p.jsxs)("div",{className:f().formItem,children:[(0,p.jsx)("label",{children:"Tel"}),(0,p.jsx)("input",{type:"text",placeholder:"Tel",className:"mainInput",name:"mobile_number",defaultValue:I||""})]}),(0,p.jsxs)("div",{className:f().formItem,children:[(0,p.jsx)("label",{children:"Email"}),(0,p.jsx)("input",{type:"text",placeholder:"Email",className:"mainInput",name:"email",defaultValue:S||""})]}),(0,p.jsx)("div",{className:f().boxBut,children:(0,p.jsx)("button",{className:"but_gray",type:"submit",children:a?"Loading...":"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})})}},1968:function(e,t,r){"use strict";r(7294);var i=r(2639),n=r(7095),a=r.n(n),s=r(1664),l=r(5893);t.Z=function(e){var t=e.data;return(0,l.jsxs)("div",{className:a().userList,children:[(0,l.jsxs)("div",{className:a().title,children:[(0,l.jsx)("h1",{children:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2b\u0e49\u0e2d\u0e07"}),(0,l.jsx)(s.default,{href:"/user/add_user/",children:(0,l.jsx)("a",{children:(0,l.jsxs)("h3",{className:"flex items-center",children:[(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"/svg/add.svg",width:20,className:"icon",alt:""})}),"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32"]})})})]}),(0,l.jsx)("div",{className:a().list,children:t&&t.map((function(e,t){return(0,l.jsx)(i.Z,{data:e},t)}))})]})}},2639:function(e,t,r){"use strict";var i=r(1664),n=r(7294),a=r(6497),s=r.n(a),l=r(5893);t.Z=function(e){var t=e.data,r=(0,n.useState)(t),a=(r[0],r[1],t.id),o=t.name,c=(t.lname,t.tell,t.line,t.email,t.floor_id);return(0,l.jsxs)("div",{className:s().userListItem,children:[(0,l.jsxs)("figure",{className:s().item,children:[(0,l.jsx)("img",{src:"/svg/builder.svg",width:40,className:"icon",alt:""}),(0,l.jsx)("figcaption",{children:(0,l.jsxs)("section",{children:[(0,l.jsxs)("p",{children:["\u0e0a\u0e31\u0e49\u0e19: ",c]}),(0,l.jsxs)("p",{children:["\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32: ",(0,l.jsx)("span",{children:"".concat(o," ")})]})]})})]}),(0,l.jsx)(i.default,{href:"/user/".concat(a),children:(0,l.jsxs)("figure",{className:s().item,children:[(0,l.jsx)("img",{src:"/svg/calculate.svg",width:40,className:"icon",alt:""}),(0,l.jsx)("figcaption",{children:(0,l.jsx)("p",{children:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f"})})]})})]})}},8569:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return d},default:function(){return u}});var i=r(1163),n=r(7294),a=r(3855),s=[{id:1,fname:"Holt",lname:"Tine",email:"htine0@1688.com",tell:"111-270-2230",line:"Fixflex",fool:"A"},{id:2,fname:"Florry",lname:"Pablo",email:"fpablo1@360.cn",tell:"739-327-6482",line:"Wrapsafe",fool:"A"},{id:3,fname:"Valery",lname:"Isakovitch",email:"visakovitch2@shutterfly.com",tell:"351-821-8860",line:"Trippledex",fool:"A"},{id:4,fname:"Ame",lname:"Lampart",email:"alampart3@exblog.jp",tell:"648-195-8752",line:"Holdlamis",fool:"A"},{id:5,fname:"Tan",lname:"Yele",email:"tyele4@yahoo.com",tell:"728-928-0531",line:"Holdlamis",fool:"A"},{id:6,fname:"Helaine",lname:"McDade",email:"hmcdade5@mapquest.com",tell:"456-374-1645",line:"Otcom",fool:"A"},{id:7,fname:"Karmen",lname:"Wright",email:"kwright6@digg.com",tell:"576-196-0656",line:"Job",fool:"A"},{id:8,fname:"Elsa",lname:"Gilhool",email:"egilhool7@foxnews.com",tell:"163-320-8246",line:"It",fool:"A"},{id:9,fname:"Gayel",lname:"Grasha",email:"ggrasha8@wisc.edu",tell:"954-606-6969",line:"Zontrax",fool:"A"},{id:10,fname:"Manda",lname:"Plowell",email:"mplowell9@cdc.gov",tell:"502-724-5998",line:"Trippledex",fool:"A"}],l=r(7030),o=r.n(l),c=r(5893),d=!0,u=function(e){var t=e.dataAitList;console.log("%cMyProject%cline:26%cdataAitList","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px",t);var r=(0,i.useRouter)(),l=(0,n.useState)(),d=(l[0],l[1]),u=(0,n.useState)([]),m=u[0],f=u[1],x=(0,n.useState)([]),p=x[0],h=x[1];return(0,n.useEffect)((function(){if(r){var e=r.query.air,i=s.find((function(t){return t.id===parseInt(e)}));d(i)}if(t){var n=t.filter((function(e){return 1===e.device_type_id})),a=t.filter((function(e){return 2===e.device_type_id}));n&&a&&(f(n),h(a))}}),[r,t]),(0,c.jsxs)("div",{className:"box_black",children:[(0,c.jsxs)("div",{className:o().title,children:[(0,c.jsx)("img",{src:"/svg/follwer.svg",width:30,className:"icon",alt:""}),(0,c.jsx)("h3",{children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 AIR"})]}),(0,c.jsxs)("div",{className:o().box_grid,children:[(0,c.jsx)("div",{children:(0,c.jsx)(a.do,{title:"Registered points",data:m,airSelected:""})}),(0,c.jsx)("div",{children:(0,c.jsx)(a.do,{title:"Un Registered points",data:p,airSelected:""})})]}),(0,c.jsx)("div",{style:{textAlign:"center"},children:(0,c.jsx)("button",{className:"but_gray",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})}},8381:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/air/[air]",function(){return r(8569)}])},2897:function(e){e.exports={title:"airRegisterForm_title__1E3v1",box_form:"airRegisterForm_box_form__2v5bv",form_item:"airRegisterForm_form_item__2e2di"}},5021:function(e){e.exports={form:"loginForm_form__2TQH8",formItem:"loginForm_formItem__3_Q8Q",boxBut:"loginForm_boxBut__3NBwF"}},7095:function(e){e.exports={userList:"userList_userList__2j7Ym",title:"userList_title__2uStV",list:"userList_list__3-rs4"}},6497:function(e){e.exports={userListItem:"userListItem_userListItem__2Ol1z",item:"userListItem_item__31vKy"}},7030:function(e){e.exports={title:"airDetailPage_title__1B9KU",box_grid:"airDetailPage_box_grid__MHSLY"}}},function(e){e.O(0,[675,774,888,179],(function(){return t=8381,e(e.s=t);var t}));var t=e.O();_N_E=t}]);