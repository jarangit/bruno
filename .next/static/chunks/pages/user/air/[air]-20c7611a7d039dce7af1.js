(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{1706:function(e,l,a){"use strict";var t=a(2809),s=a(7294),i=a(5021),n=a.n(i),r=a(5893);function c(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?c(Object(a),!0).forEach((function(l){(0,t.Z)(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}l.Z=function(e){var l=e.data;console.log(l);var a=(0,s.useState)({owner:"",address:"",pastal_code:"",tel:"",email:""}),i=a[0],c=a[1],d=i.owner,m=i.address,u=i.pastal_code,f=i.tel,h=i.email;return(0,s.useEffect)((function(){if(l){var e=l.building_owner;console.log(e),c({owner:e.name,address:e.address,pastal_code:e.postal_code,tel:e.mobile_number,email:e.email})}}),[l]),(0,r.jsxs)("form",{className:n().form,onChange:function(e){c(o(o({},i),{},(0,t.Z)({},e.target.name,e.target.value)))},onSubmit:function(e){e.preventDefault()},children:[(0,r.jsxs)("div",{className:n().formItem,children:[(0,r.jsx)("label",{children:"Owner"}),(0,r.jsx)("input",{type:"text",placeholder:"Owner",className:"mainInput",name:"owner",defaultValue:d})]}),(0,r.jsxs)("div",{className:n().formItem,children:[(0,r.jsx)("label",{children:"Address"}),(0,r.jsx)("textarea",{placeholder:"Address",className:"mainTextArea",rows:5,cols:5,name:"address",defaultValue:m})]}),(0,r.jsxs)("div",{className:n().formItem,children:[(0,r.jsx)("label",{children:"Postal code"}),(0,r.jsx)("input",{type:"text",placeholder:"Postal code",className:"mainInput",name:"pastal_code",defaultValue:u})]}),(0,r.jsxs)("div",{className:n().formItem,children:[(0,r.jsx)("label",{children:"Tel"}),(0,r.jsx)("input",{type:"text",placeholder:"Tel",className:"mainInput",name:"tel",defaultValue:f})]}),(0,r.jsxs)("div",{className:n().formItem,children:[(0,r.jsx)("label",{children:"Email"}),(0,r.jsx)("input",{type:"text",placeholder:"Email",className:"mainInput",name:"email",defaultValue:h})]}),(0,r.jsx)("div",{className:n().boxBut,children:(0,r.jsx)("button",{className:"but_gray",type:"submit",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})}},1968:function(e,l,a){"use strict";a(7294);var t=a(2639),s=a(7095),i=a.n(s),n=a(1664),r=a(5893);l.Z=function(e){var l=e.data;return console.log(l.length),(0,r.jsxs)("div",{className:i().userList,children:[(0,r.jsxs)("div",{className:i().title,children:[(0,r.jsx)("h1",{children:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2b\u0e49\u0e2d\u0e07"}),(0,r.jsx)(n.default,{href:"/user/add_user/",children:(0,r.jsx)("a",{children:(0,r.jsxs)("h3",{children:[(0,r.jsx)("span",{children:(0,r.jsx)("img",{src:"/svg/add.svg",width:20,className:"icon",alt:""})}),"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32"]})})})]}),(0,r.jsx)("div",{className:i().list,children:l&&l.map((function(e,l){return(0,r.jsx)(t.Z,{data:e},l)}))})]})}},2639:function(e,l,a){"use strict";var t=a(1664),s=a(7294),i=a(6497),n=a.n(i),r=a(5893);l.Z=function(e){var l=e.data,a=(0,s.useState)(l),i=(a[0],a[1],l.id),c=l.name,o=(l.lname,l.tell,l.line,l.email,l.floor_id);return(0,r.jsxs)("div",{className:n().userListItem,children:[(0,r.jsxs)("figure",{className:n().item,children:[(0,r.jsx)("img",{src:"/svg/builder.svg",width:40,className:"icon",alt:""}),(0,r.jsx)("figcaption",{children:(0,r.jsxs)("section",{children:[(0,r.jsxs)("p",{children:["\u0e0a\u0e31\u0e49\u0e19: ",o]}),(0,r.jsxs)("p",{children:["\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32: ",(0,r.jsx)("span",{children:"".concat(c," ")})]})]})})]}),(0,r.jsx)(t.default,{href:"/user/".concat(i),children:(0,r.jsxs)("figure",{className:n().item,children:[(0,r.jsx)("img",{src:"/svg/calculate.svg",width:40,className:"icon",alt:""}),(0,r.jsx)("figcaption",{children:(0,r.jsx)("p",{children:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f"})})]})})]})}},5125:function(e,l,a){"use strict";a.d(l,{R:function(){return t}});var t=[{id:1,fname:"Holt",lname:"Tine",email:"htine0@1688.com",tell:"111-270-2230",line:"Fixflex",fool:"A"},{id:2,fname:"Florry",lname:"Pablo",email:"fpablo1@360.cn",tell:"739-327-6482",line:"Wrapsafe",fool:"A"},{id:3,fname:"Valery",lname:"Isakovitch",email:"visakovitch2@shutterfly.com",tell:"351-821-8860",line:"Trippledex",fool:"A"},{id:4,fname:"Ame",lname:"Lampart",email:"alampart3@exblog.jp",tell:"648-195-8752",line:"Holdlamis",fool:"A"},{id:5,fname:"Tan",lname:"Yele",email:"tyele4@yahoo.com",tell:"728-928-0531",line:"Holdlamis",fool:"A"},{id:6,fname:"Helaine",lname:"McDade",email:"hmcdade5@mapquest.com",tell:"456-374-1645",line:"Otcom",fool:"A"},{id:7,fname:"Karmen",lname:"Wright",email:"kwright6@digg.com",tell:"576-196-0656",line:"Job",fool:"A"},{id:8,fname:"Elsa",lname:"Gilhool",email:"egilhool7@foxnews.com",tell:"163-320-8246",line:"It",fool:"A"},{id:9,fname:"Gayel",lname:"Grasha",email:"ggrasha8@wisc.edu",tell:"954-606-6969",line:"Zontrax",fool:"A"},{id:10,fname:"Manda",lname:"Plowell",email:"mplowell9@cdc.gov",tell:"502-724-5998",line:"Trippledex",fool:"A"}]},9704:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return f}});var t=a(1163),s=a(7294),i=a(2897),n=a.n(i),r=[{name:"MPH FCU 1",checked:!0,disable:!1},{name:"MPH FCU 2",checked:!0,disable:!1},{name:"MPH FCU 3",checked:!1,disable:!1},{name:"Maid Room 2 1",checked:!0,disable:!0},{name:"Maid Room 2",checked:!0,disable:!0}],c=a(5893),o=function(e){var l=e.title;return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:n().title,children:l}),(0,c.jsx)("form",{className:n().box_form,children:r&&r.map((function(e,l){return(0,c.jsx)("div",{className:n().form_item,children:(0,c.jsxs)("label",{className:"container_label",children:[e.name,(0,c.jsx)("input",{type:"checkbox",disabled:!!e.disable,defaultChecked:!!e.checked,value:e.name}),(0,c.jsx)("span",{className:"checkmark"})]})},l)}))})]})},d=(a(1706),a(1968),a(2639),a(5125)),m=a(7030),u=a.n(m),f=function(e){var l=(0,t.useRouter)(),a=(0,s.useState)(),i=(a[0],a[1]);return(0,s.useEffect)((function(){if(l){var e=l.query.air;console.log(l);var a=d.R.find((function(l){return l.id===parseInt(e)}));i(a)}}),[l]),(0,c.jsxs)("div",{className:"box_black",children:[(0,c.jsxs)("div",{className:u().title,children:[(0,c.jsx)("img",{src:"/svg/follwer.svg",width:30,className:"icon",alt:""}),(0,c.jsx)("h3",{children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 AIR"})]}),(0,c.jsxs)("div",{className:u().box_grid,children:[(0,c.jsx)("div",{children:(0,c.jsx)(o,{title:"Registered points"})}),(0,c.jsx)("div",{children:(0,c.jsx)(o,{title:"Un Registered points"})})]}),(0,c.jsx)("div",{style:{textAlign:"center"},children:(0,c.jsx)("button",{className:"but_gray",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})}},8381:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/air/[air]",function(){return a(9704)}])},2897:function(e){e.exports={title:"airRegisterForm_title__1E3v1",box_form:"airRegisterForm_box_form__2v5bv",form_item:"airRegisterForm_form_item__2e2di"}},5021:function(e){e.exports={form:"loginForm_form__2TQH8",formItem:"loginForm_formItem__3_Q8Q",boxBut:"loginForm_boxBut__3NBwF"}},7095:function(e){e.exports={userList:"userList_userList__2j7Ym",title:"userList_title__2uStV",list:"userList_list__3-rs4"}},6497:function(e){e.exports={userListItem:"userListItem_userListItem__2Ol1z",item:"userListItem_item__31vKy"}},7030:function(e){e.exports={title:"airDetailPage_title__1B9KU",box_grid:"airDetailPage_box_grid__MHSLY"}},1163:function(e,l,a){e.exports=a(4651)}},function(e){e.O(0,[774,888,179],(function(){return l=8381,e(e.s=l);var l}));var l=e.O();_N_E=l}]);