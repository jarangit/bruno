(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1968:function(e,r,s){"use strict";s(7294);var t=s(2639),n=s(7095),i=s.n(n),a=s(1664),c=s(5893);r.Z=function(e){var r=e.data;return(0,c.jsxs)("div",{className:i().userList,children:[(0,c.jsxs)("div",{className:i().title,children:[(0,c.jsx)("h1",{children:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2b\u0e49\u0e2d\u0e07"}),(0,c.jsx)(a.default,{href:"/user/add_user/",children:(0,c.jsx)("a",{children:(0,c.jsxs)("h3",{className:"flex items-center",children:[(0,c.jsx)("span",{children:(0,c.jsx)("img",{src:"/svg/add.svg",width:20,className:"icon",alt:""})}),"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32"]})})})]}),(0,c.jsx)("div",{className:i().list,children:r&&r.map((function(e,r){return(0,c.jsx)(t.Z,{data:e},r)}))})]})}},2639:function(e,r,s){"use strict";var t=s(1664),n=s(7294),i=s(6497),a=s.n(i),c=s(5893);r.Z=function(e){var r=e.data,s=(0,n.useState)(r),i=(s[0],s[1],r.id),d=r.name,l=(r.lname,r.tell,r.line,r.email,r.floor_id);return(0,c.jsxs)("div",{className:a().userListItem,children:[(0,c.jsxs)("figure",{className:a().item,children:[(0,c.jsx)("img",{src:"/svg/builder.svg",width:40,className:"icon",alt:""}),(0,c.jsx)("figcaption",{children:(0,c.jsxs)("section",{children:[(0,c.jsxs)("p",{children:["\u0e0a\u0e31\u0e49\u0e19: ",l]}),(0,c.jsxs)("p",{children:["\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32: ",(0,c.jsx)("span",{children:"".concat(d," ")})]})]})})]}),(0,c.jsx)(t.default,{href:"/user/".concat(i),children:(0,c.jsxs)("figure",{className:a().item,children:[(0,c.jsx)("img",{src:"/svg/calculate.svg",width:40,className:"icon",alt:""}),(0,c.jsx)("figcaption",{children:(0,c.jsx)("p",{children:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f"})})]})})]})}},9258:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return G}});var t=s(266),n=s(5523),i=s(809),a=s.n(i),c=s(1163),d=s(9008),l=s(7294),o=s(381),u=s.n(o),x=s(2322),m=s.n(x),f=s(8986),h=s(5893),g=function(e){var r=e.text,s=e.onClick;return(0,h.jsx)("div",{alt:r,onClick:s,children:(0,h.jsx)("img",{src:"/svg/markerMap.svg",alt:"",width:"25px"})})};g.defaultProps={onClick:null};var p=g,v=function(e){e.coordinates,e.setcoordinates,e.setbounds;var r=e.lat,s=e.lng;return(0,h.jsx)("div",{className:"map",style:{height:"300px",width:"100%"},children:(0,h.jsx)(f.ZP,{bootstrapURLKeys:{key:"AIzaSyB4Zxfe4I4S9qjPyVT0cG6Hy8FF8_gK-9o"},defaultCenter:{lat:13.736717,lng:100.523186},defaultZoom:10,yesIWantToUseGoogleMapApiInternals:!0,margin:[50,50,50,50],onGoogleApiLoaded:function(e){e.map,e.maps;return"Loadiing"},children:(0,h.jsx)(p,{lat:r,lng:s,text:"marker"})})})},j=function(e){var r=e.temperature,s=e.lat,t=e.lng,n=e.weather_outsides,i=e.total_floor,a=e.total_user,c=new Date,d=function(){var e=u()();return(0,h.jsxs)("div",{className:"flex gap-1",children:[(0,h.jsx)("div",{children:"".concat(e.hours()<=9?"0".concat(e.hours()):e.hours())}),(0,h.jsx)("div",{children:":"}),(0,h.jsx)("div",{children:"".concat(e.minutes()<=9?"0".concat(e.minutes()):e.minutes())})]})};return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:m().title,children:(0,h.jsx)("h2",{children:" \u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22"})}),(0,h.jsxs)("div",{className:m().mainBox,children:[(0,h.jsxs)("div",{className:m().mainBox_item,children:[(0,h.jsxs)("div",{className:m().subItem,children:[(0,h.jsxs)("div",{className:"".concat(m().text,"  items-center flex"),children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"text-xl",children:c.getHours()<16?"\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e15\u0e2d\u0e19\u0e40\u0e0a\u0e49\u0e32":"\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e15\u0e2d\u0e19\u0e40\u0e22\u0e47\u0e19"}),(0,h.jsx)("p",{className:"text-sm",children:c.toLocaleDateString("th-TH",{year:"numeric",month:"long",day:"numeric",weekday:"long"})})]}),(0,h.jsx)("div",{className:"text-4xl",children:(0,h.jsx)(d,{})})]}),(0,h.jsxs)("section",{className:m().text,children:[(0,h.jsx)("div",{children:(0,h.jsx)("figure",{className:"icon",children:(0,h.jsx)("img",{src:"/svg/bearLine.svg",width:60,alt:""})})}),(0,h.jsx)("p",{children:"\u0e2a\u0e20\u0e32\u0e1e\u0e2d\u0e32\u0e01\u0e32\u0e28\u0e40\u0e0a\u0e49\u0e32\u0e19\u0e35\u0e49\u0e2d\u0e32\u0e01\u0e32\u0e28\u0e41\u0e08\u0e48\u0e21\u0e43\u0e2a \u0e14\u0e49\u0e32\u0e19\u0e19\u0e2d\u0e01\u0e21\u0e35\u0e41\u0e14\u0e14\u0e08\u0e49\u0e32"})]})]}),(0,h.jsx)("div",{className:m().subItem,children:(0,h.jsxs)("section",{className:m().weather,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:"text-orange-400",children:"Bangkok"}),(0,h.jsxs)("div",{className:m().degree,children:[Math.round(r),(0,h.jsx)("span",{children:"\xbac"})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("figure",{className:"icon",children:(0,h.jsx)("img",{src:"/svg/sun.svg",width:60,alt:""})}),(0,h.jsx)("div",{children:n})]})]})})]}),(0,h.jsx)("div",{className:m().mainBox_item,children:(0,h.jsx)("div",{className:m().Gmap,children:(0,h.jsx)(v,{coordinates:void 0,setcoordinates:void 0,setbounds:void 0,lat:s,lng:t})})}),(0,h.jsxs)("div",{className:m().mainBox_item,children:[(0,h.jsx)("div",{className:m().subItem,children:(0,h.jsxs)("div",{className:m().subItem_right,children:[(0,h.jsx)("figure",{className:"icon",children:(0,h.jsx)("img",{src:"/svg/builder.svg",width:40,alt:""})}),(0,h.jsx)("p",{children:i}),(0,h.jsx)("p",{children:"\u0e0b\u0e31\u0e49\u0e19"})]})}),(0,h.jsx)("div",{className:m().subItem,children:(0,h.jsxs)("div",{className:m().subItem_right,children:[(0,h.jsx)("figure",{className:"icon",children:(0,h.jsx)("img",{src:"/svg/userOrange.svg",width:40,alt:""})}),(0,h.jsx)("p",{children:a}),(0,h.jsx)("p",{children:"\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e49\u0e32"})]})})]})]})]})},_=s(1968),b=s(8162),N=s(7788),w=s(5998),k=s(6413),I=s(4497),y=s(5675),B=s(733),L=s.n(B),S=function(e){return(0,h.jsx)("div",{className:"w-full flex justify-center h-[300px]  items-center ",children:(0,h.jsx)(L(),{type:"spin",color:"#fff"})})},Z=s(1873),E=function(e){var r=(0,l.useState)([]),s=r[0],t=r[1],n=(0,w.v9)((function(e){return e.allBuildings})),i=(0,w.I0)();return(0,l.useEffect)((function(){n&&n.data&&t(n.data)}),[n]),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"text-xl text-center my-6",children:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2d\u0e32\u0e04\u0e32\u0e23"}),s.length>0?(0,h.jsx)("div",{className:"grid  md:grid-cols-4 lg:grid-cols-6 gap-6 ",children:s.map((function(e,r){return(0,h.jsxs)("div",{onClick:function(){return r=e.id,i((0,I.E$)(Number(r))),void(0,Z.q)("currentBuildingID",r);var r},className:"max-w-[300px] w-full rounded-lg bg-black overflow-hidden cursor-pointer drop-shadow-lg",children:[(0,h.jsx)("div",{className:" w-[auto] h-[100px] relative overflow-hidden ",children:(0,h.jsx)(y.default,{src:""!==e.picture?e.picture:"https://api.airin1.com/storage/img/tKcncQf5rAeziO6yq31k53z36oYl6X5nDiyYg8Zg.jpeg",alt:"",layout:"fill"})}),(0,h.jsx)("div",{className:"p-3 text-sm",children:(0,h.jsx)("div",{className:"",children:e.name})})]},r)}))}):(0,h.jsx)(S,{})]})},P=s(6245),C=function(){var e=(0,t.Z)(a().mark((function e(r){var s,t,n,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=8;break}return s=(0,P.Z)(r),t=s.exp,console.log("%cMyProject%cline:4%cexp","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(254, 67, 101);padding:3px;border-radius:2px",t),n=(new Date).getTime()/1e3,console.log("%cMyProject%cline:6%cnow","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(254, 67, 101);padding:3px;border-radius:2px",n),(i=n<t)||(window.localStorage.removeItem("token"),window.localStorage.removeItem("currentBuildingID"),window.location.reload()),e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),D=s(4480),G=function(e){var r,s,i;(0,n.Z)(e);var o=(0,l.useState)(!0),u=(o[0],o[1],(0,c.useRouter)()),x=(0,l.useState)(),m=(x[0],x[1]),f=(0,l.useState)(),g=f[0],p=f[1],v=(0,l.useState)([]),y=v[0],B=v[1],L=(0,l.useState)(),Z=L[0],P=L[1],G=(0,w.v9)((function(e){return e.building})),M=(0,w.v9)((function(e){return e.buildingList})),T=(0,w.v9)((function(e){return e.allBuildings})),z=(0,w.I0)(),K=function(){var e=(0,t.Z)(a().mark((function e(r){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.a)("https://api.airin1.com/api/buildings",r);case 2:s=e.sent,z((0,I.T3)(s));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),O=function(){var e=(0,t.Z)(a().mark((function e(r){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(r);case 2:return s=e.sent,console.log("%cMyProject%cline:49%cexp","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(60, 79, 57);padding:3px;border-radius:2px",s),e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){var e=(0,D.L)("token");console.log("%cMyProject%cline:57%ctoken","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(227, 160, 93);padding:3px;border-radius:2px",e);var r=localStorage.getItem("currentBuildingID");O(e),e?(K(e),m(e),P(r),z((0,N.v)(r)),z((0,k.e)(r)),G&&M&&(p(G.data),B(M.data))):u.push("/signin")}),[y,g,T.currentBuilding]),(0,h.jsxs)("div",{children:[(0,h.jsxs)(d.default,{children:[(0,h.jsx)("title",{children:"Bruno"}),(0,h.jsx)("meta",{name:"description",content:"Bruno app"}),(0,h.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Z?(0,h.jsxs)(h.Fragment,{children:[G.data&&(null===(r=M.data)||void 0===r?void 0:r.length)>=0?(0,h.jsx)(j,{temperature:null===(s=G.data.weather_outsides[0])||void 0===s?void 0:s.temperature,lat:G.data.latitude,lng:G.data.longitude,weather_outsides:null===(i=G.data.weather_outsides[0])||void 0===i?void 0:i.weather_category,total_user:G.data.children.length,total_floor:M.data.length}):(0,h.jsx)(S,{}),M.data?(0,h.jsx)(_.Z,{data:M.data}):null]}):(0,h.jsx)(E,{})]})}},5301:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(9258)}])},2322:function(e){e.exports={title:"monitor_title__et2K8",mainBox:"monitor_mainBox__1C4z8",subItem:"monitor_subItem__2Vzvv",weather:"monitor_weather__2oEV7",degree:"monitor_degree__1v12e",subItem_right:"monitor_subItem_right__20tEW",text:"monitor_text__WExwW",Gmap:"monitor_Gmap__GPUlI",mainBox_item:"monitor_mainBox_item__XKoPB"}},7095:function(e){e.exports={userList:"userList_userList__2j7Ym",title:"userList_title__2uStV",list:"userList_list__3-rs4"}},6497:function(e){e.exports={userListItem:"userListItem_userListItem__2Ol1z",item:"userListItem_item__31vKy"}}},function(e){e.O(0,[774,885,675,950,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);