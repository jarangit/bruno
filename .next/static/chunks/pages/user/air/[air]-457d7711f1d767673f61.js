(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{7931:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var i=n(266),a=n(2809),s=n(809),r=n.n(s),l=n(1163),o=n(7294),c=n(9669),d=n.n(c),m=function(){var e=(0,i.Z)(r().mark((function e(t,n,i){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d().patch("".concat("https://api.airin1.com/api/","buildings/").concat(i,"/owner_info"),t,{headers:{Authorization:"Bearer ".concat(n),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){console.log(e.data)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,i){return e.apply(this,arguments)}}(),u=n(5021),f=n.n(u),h=n(4480),x=n(5893);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.data,n=(0,o.useState)(!1),s=n[0],c=n[1],d=(0,o.useState)(""),u=d[0],p=d[1],j=(0,o.useState)(""),v=j[0],g=j[1],b=(0,o.useState)({name:"",address:"",postal_code:"",mobile_number:"",email:"",line_id:"line",room_count:3}),w=b[0],N=b[1],y=(0,l.useRouter)(),O=w.name,A=w.address,I=w.postal_code,k=w.mobile_number,S=w.email;w.line_id;var P=function(){var e=(0,i.Z)(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c(!0),t.preventDefault(),!v){e.next=6;break}return e.next=5,m(w,v,u);case 5:c(!1);case 6:y.push("/");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){var e=(0,h.L)("token"),n=localStorage.getItem("currentBuildingID");if(e&&n&&(g(e),p(n)),t.building_owner){var i=t.building_owner;N({name:i.name,address:i.address,postal_code:i.postal_code,mobile_number:i.mobile_number,email:i.email,line_id:"line",room_count:3})}else N({name:"",address:"",postal_code:"",mobile_number:"",email:"",line_id:"",room_count:0})}),[t]),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("form",{className:f().form,onChange:function(e){N(_(_({},w),{},(0,a.Z)({},e.target.name,e.target.value)))},onSubmit:P,children:[(0,x.jsxs)("div",{className:f().formItem,children:[(0,x.jsx)("label",{children:"Owner"}),(0,x.jsx)("input",{type:"text",placeholder:"name",className:"mainInput",name:"name",defaultValue:O||""})]}),(0,x.jsxs)("div",{className:f().formItem,children:[(0,x.jsx)("label",{children:"Address"}),(0,x.jsx)("textarea",{placeholder:"Address",className:"mainTextArea",rows:5,cols:5,name:"address",defaultValue:A||""})]}),(0,x.jsxs)("div",{className:f().formItem,children:[(0,x.jsx)("label",{children:"Postal code"}),(0,x.jsx)("input",{type:"text",placeholder:"Postal code",className:"mainInput",name:"postal_code",defaultValue:I||""})]}),(0,x.jsxs)("div",{className:f().formItem,children:[(0,x.jsx)("label",{children:"Tel"}),(0,x.jsx)("input",{type:"text",placeholder:"Tel",className:"mainInput",name:"mobile_number",defaultValue:k||""})]}),(0,x.jsxs)("div",{className:f().formItem,children:[(0,x.jsx)("label",{children:"Email"}),(0,x.jsx)("input",{type:"text",placeholder:"Email",className:"mainInput",name:"email",defaultValue:S||""})]}),(0,x.jsx)("div",{className:f().boxBut,children:(0,x.jsx)("button",{className:"but_gray",type:"submit",children:s?"Loading...":"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})})}},1968:function(e,t,n){"use strict";n(7294);var i=n(2639),a=n(7095),s=n.n(a),r=n(1664),l=n(5893);t.Z=function(e){var t=e.data;return(0,l.jsxs)("div",{className:s().userList,children:[(0,l.jsxs)("div",{className:s().title,children:[(0,l.jsx)("h1",{children:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2b\u0e49\u0e2d\u0e07"}),(0,l.jsx)(r.default,{href:"/user/add_user/",children:(0,l.jsx)("a",{children:(0,l.jsxs)("h3",{className:"flex items-center",children:[(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"/svg/add.svg",width:20,className:"icon",alt:""})}),"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32"]})})})]}),(0,l.jsx)("div",{className:s().list,children:t&&t.map((function(e,t){return(0,l.jsx)(i.Z,{data:e},t)}))})]})}},2639:function(e,t,n){"use strict";var i=n(1664),a=n(7294),s=n(6497),r=n.n(s),l=n(5893);t.Z=function(e){var t=e.data,n=(0,a.useState)(t),s=(n[0],n[1],t.id),o=t.name,c=(t.lname,t.tell,t.line,t.email,t.floor_id);return(0,l.jsxs)("div",{className:r().userListItem,children:[(0,l.jsxs)("figure",{className:r().item,children:[(0,l.jsx)("img",{src:"/svg/builder.svg",width:40,className:"icon",alt:""}),(0,l.jsx)("figcaption",{children:(0,l.jsxs)("section",{children:[(0,l.jsxs)("p",{children:["\u0e0a\u0e31\u0e49\u0e19: ",c]}),(0,l.jsxs)("p",{children:["\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32: ",(0,l.jsx)("span",{children:"".concat(o," ")})]})]})})]}),(0,l.jsx)(i.default,{href:"/user/".concat(s),children:(0,l.jsxs)("figure",{className:r().item,children:[(0,l.jsx)("img",{src:"/svg/calculate.svg",width:40,className:"icon",alt:""}),(0,l.jsx)("figcaption",{children:(0,l.jsx)("p",{children:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f"})})]})})]})}},4145:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return f},default:function(){return h}});var i=n(1163),a=n(7294),s=n(2897),r=n.n(s),l=n(5675),o=n(5893),c=function(e){var t=e.title,n=e.data,i=(0,a.useState)(!1),s=i[0],c=i[1];return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:r().title,children:t}),(0,o.jsxs)("form",{className:r().box_form,children:[n&&n.map((function(e,t){return t<="".concat(s?100:9)&&(0,o.jsx)("div",{className:r().form_item,children:(0,o.jsxs)("label",{className:"container_label",children:[e.name,(0,o.jsx)("input",{type:"checkbox",disabled:"on"===e.status,defaultChecked:"on"===e.status,value:e.name}),(0,o.jsx)("span",{className:"checkmark"})]})},t)})),n.length>10?(0,o.jsx)("div",{className:"w-full text-center cursor-pointer",onClick:function(){return c(!s)},children:s?(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"rotate-180",children:(0,o.jsx)(l.default,{src:"/svg/arrowDown.svg",alt:"",width:10,height:10})}),(0,o.jsx)("div",{children:"Hidden"})]}):(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:"Show more"}),(0,o.jsx)("div",{children:(0,o.jsx)(l.default,{src:"/svg/arrowDown.svg",alt:"",width:10,height:10})})]})}):null]})]})},d=(n(7931),n(1968),n(2639),[{id:1,fname:"Holt",lname:"Tine",email:"htine0@1688.com",tell:"111-270-2230",line:"Fixflex",fool:"A"},{id:2,fname:"Florry",lname:"Pablo",email:"fpablo1@360.cn",tell:"739-327-6482",line:"Wrapsafe",fool:"A"},{id:3,fname:"Valery",lname:"Isakovitch",email:"visakovitch2@shutterfly.com",tell:"351-821-8860",line:"Trippledex",fool:"A"},{id:4,fname:"Ame",lname:"Lampart",email:"alampart3@exblog.jp",tell:"648-195-8752",line:"Holdlamis",fool:"A"},{id:5,fname:"Tan",lname:"Yele",email:"tyele4@yahoo.com",tell:"728-928-0531",line:"Holdlamis",fool:"A"},{id:6,fname:"Helaine",lname:"McDade",email:"hmcdade5@mapquest.com",tell:"456-374-1645",line:"Otcom",fool:"A"},{id:7,fname:"Karmen",lname:"Wright",email:"kwright6@digg.com",tell:"576-196-0656",line:"Job",fool:"A"},{id:8,fname:"Elsa",lname:"Gilhool",email:"egilhool7@foxnews.com",tell:"163-320-8246",line:"It",fool:"A"},{id:9,fname:"Gayel",lname:"Grasha",email:"ggrasha8@wisc.edu",tell:"954-606-6969",line:"Zontrax",fool:"A"},{id:10,fname:"Manda",lname:"Plowell",email:"mplowell9@cdc.gov",tell:"502-724-5998",line:"Trippledex",fool:"A"}]),m=n(7030),u=n.n(m),f=!0,h=function(e){var t=e.dataAitList,n=(0,i.useRouter)(),s=(0,a.useState)(),r=(s[0],s[1]),l=(0,a.useState)([]),m=l[0],f=l[1],h=(0,a.useState)([]),x=h[0],p=h[1];return(0,a.useEffect)((function(){if(n){var e=n.query.air,i=d.find((function(t){return t.id===parseInt(e)}));r(i)}if(t){var a=t.filter((function(e){return 1===e.device_type_id})),s=t.filter((function(e){return 2===e.device_type_id}));a&&s&&(f(a),p(s))}}),[n,t]),(0,o.jsxs)("div",{className:"box_black",children:[(0,o.jsxs)("div",{className:u().title,children:[(0,o.jsx)("img",{src:"/svg/follwer.svg",width:30,className:"icon",alt:""}),(0,o.jsx)("h3",{children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 AIR"})]}),(0,o.jsxs)("div",{className:u().box_grid,children:[(0,o.jsx)("div",{children:(0,o.jsx)(c,{title:"Registered points",data:m})}),(0,o.jsx)("div",{children:(0,o.jsx)(c,{title:"Un Registered points",data:x})})]}),(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)("button",{className:"but_gray",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})}},8381:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/air/[air]",function(){return n(4145)}])},2897:function(e){e.exports={title:"airRegisterForm_title__1E3v1",box_form:"airRegisterForm_box_form__2v5bv",form_item:"airRegisterForm_form_item__2e2di"}},5021:function(e){e.exports={form:"loginForm_form__2TQH8",formItem:"loginForm_formItem__3_Q8Q",boxBut:"loginForm_boxBut__3NBwF"}},7095:function(e){e.exports={userList:"userList_userList__2j7Ym",title:"userList_title__2uStV",list:"userList_list__3-rs4"}},6497:function(e){e.exports={userListItem:"userListItem_userListItem__2Ol1z",item:"userListItem_item__31vKy"}},7030:function(e){e.exports={title:"airDetailPage_title__1B9KU",box_grid:"airDetailPage_box_grid__MHSLY"}}},function(e){e.O(0,[675,774,888,179],(function(){return t=8381,e(e.s=t);var t}));var t=e.O();_N_E=t}]);