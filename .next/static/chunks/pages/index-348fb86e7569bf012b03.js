(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1968:function(e,s,t){"use strict";t(7294);var r=t(2639),i=t(7095),n=t.n(i),a=t(1664),c=t(5893);s.Z=function(e){var s=e.data,t=e.typeUser;return(0,c.jsxs)("div",{className:n().userList,children:[(0,c.jsxs)("div",{className:n().title,children:[(0,c.jsx)("h1",{children:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2b\u0e49\u0e2d\u0e07"}),(0,c.jsx)(a.default,{href:"/user/add_user/",children:(0,c.jsx)("a",{children:(0,c.jsxs)("h3",{className:"flex items-center",children:[(0,c.jsx)("span",{children:(0,c.jsx)("img",{src:"/svg/add.svg",width:20,className:"icon",alt:""})}),"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32"]})})})]}),(0,c.jsx)("div",{className:"gap-5 grid  grid-cols-1 lg:grid-cols-2",children:s&&s.length?s.map((function(e,s){return(0,c.jsx)(r.Z,{data:e,typeUser:t},s)})):"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23"})]})}},2639:function(e,s,t){"use strict";var r=t(1664),i=t(7294),n=t(6497),a=t.n(n),c=t(5893);s.Z=function(e){var s=e.data,t=e.typeUser,n=(0,i.useState)(s),l=(n[0],n[1],s.id),d=s.name,o=(s.lname,s.tell,s.line,s.email,s.floor_id);return(0,c.jsxs)("div",{className:a().userListItem,children:[(0,c.jsxs)("figure",{className:a().item,children:[(0,c.jsx)("img",{src:"/svg/".concat(t?"userOrange.svg":"builder.svg"),width:40,className:"icon",alt:""}),(0,c.jsx)("figcaption",{children:(0,c.jsxs)("section",{children:[(0,c.jsxs)("p",{children:["\u0e0a\u0e31\u0e49\u0e19: ",o]}),(0,c.jsxs)("p",{children:["\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e48\u0e32: ",(0,c.jsx)("span",{children:"".concat(d," ")})]})]})})]}),(0,c.jsx)(r.default,{href:"/user/".concat(l),children:(0,c.jsxs)("figure",{className:a().item,children:[(0,c.jsx)("img",{src:"/svg/calculate.svg",width:40,className:"icon",alt:""}),(0,c.jsx)("figcaption",{children:(0,c.jsx)("p",{children:"\u0e04\u0e34\u0e14\u0e04\u0e48\u0e32\u0e44\u0e1f"})})]})})]})}},9258:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return G}});var r=t(266),i=t(5523),n=t(809),a=t.n(n),c=t(1163),l=t(9008),d=t(7294),o=t(381),u=t.n(o),x=t(2322),m=t.n(x),h=t(8986),g=t(5893),v=function(e){var s=e.text,t=e.onClick;return(0,g.jsx)("div",{alt:s,onClick:t,children:(0,g.jsx)("img",{src:"/svg/markerMap.svg",alt:"",width:"25px"})})};v.defaultProps={onClick:null};var f=v,j=function(e){e.coordinates,e.setcoordinates,e.setbounds;var s=e.lat,t=e.lng;return(0,g.jsx)("div",{className:"map",style:{height:"300px",width:"100%"},children:(0,g.jsx)(h.ZP,{bootstrapURLKeys:{key:"AIzaSyB4Zxfe4I4S9qjPyVT0cG6Hy8FF8_gK-9o"},defaultCenter:{lat:13.736717,lng:100.523186},defaultZoom:10,yesIWantToUseGoogleMapApiInternals:!0,margin:[50,50,50,50],onGoogleApiLoaded:function(e){e.map,e.maps;return"Loadiing"},children:(0,g.jsx)(f,{lat:s,lng:t,text:"marker"})})})},p=function(e){var s=e.temperature,t=e.lat,r=e.lng,i=e.weather_outsides,n=e.total_floor,a=e.total_user,c=new Date,l=function(){var e=u()();return(0,g.jsxs)("div",{className:"flex gap-1",children:[(0,g.jsx)("div",{children:"".concat(e.hours()<=9?"0".concat(e.hours()):e.hours())}),(0,g.jsx)("div",{children:":"}),(0,g.jsx)("div",{children:"".concat(e.minutes()<=9?"0".concat(e.minutes()):e.minutes())})]})};return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:m().title,children:(0,g.jsx)("h2",{children:" \u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22"})}),(0,g.jsxs)("div",{className:m().mainBox,children:[(0,g.jsxs)("div",{className:m().mainBox_item,children:[(0,g.jsxs)("div",{className:m().subItem,children:[(0,g.jsxs)("div",{className:"".concat(m().text,"  items-center flex"),children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"text-xl",children:c.getHours()<16?"\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e15\u0e2d\u0e19\u0e40\u0e0a\u0e49\u0e32":"\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e15\u0e2d\u0e19\u0e40\u0e22\u0e47\u0e19"}),(0,g.jsx)("p",{className:"text-sm",children:c.toLocaleDateString("th-TH",{year:"numeric",month:"long",day:"numeric",weekday:"long"})})]}),(0,g.jsx)("div",{className:"text-4xl",children:(0,g.jsx)(l,{})})]}),(0,g.jsxs)("section",{className:m().text,children:[(0,g.jsx)("div",{children:(0,g.jsx)("figure",{className:"icon",children:(0,g.jsx)("img",{src:"/svg/bearLine.svg",width:60,alt:""})})}),(0,g.jsx)("p",{children:"\u0e2a\u0e20\u0e32\u0e1e\u0e2d\u0e32\u0e01\u0e32\u0e28\u0e40\u0e0a\u0e49\u0e32\u0e19\u0e35\u0e49\u0e2d\u0e32\u0e01\u0e32\u0e28\u0e41\u0e08\u0e48\u0e21\u0e43\u0e2a \u0e14\u0e49\u0e32\u0e19\u0e19\u0e2d\u0e01\u0e21\u0e35\u0e41\u0e14\u0e14\u0e08\u0e49\u0e32"})]})]}),(0,g.jsx)("div",{className:m().subItem,children:(0,g.jsxs)("section",{className:m().weather,children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"text-orange-400",children:"Bangkok"}),(0,g.jsxs)("div",{className:m().degree,children:[Math.round(s),(0,g.jsx)("span",{children:"\xbac"})]})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("figure",{className:"icon",children:(0,g.jsx)("img",{src:"/svg/sun.svg",width:60,alt:""})}),(0,g.jsx)("div",{children:i})]})]})})]}),(0,g.jsx)("div",{className:m().mainBox_item,children:(0,g.jsx)("div",{className:m().Gmap,children:(0,g.jsx)(j,{coordinates:void 0,setcoordinates:void 0,setbounds:void 0,lat:t,lng:r})})}),(0,g.jsxs)("div",{className:m().mainBox_item,children:[(0,g.jsx)("div",{className:m().subItem,children:(0,g.jsxs)("div",{className:m().subItem_right,children:[(0,g.jsx)("figure",{className:"icon",children:(0,g.jsx)("img",{src:"/svg/builder.svg",width:40,alt:""})}),(0,g.jsx)("p",{children:n}),(0,g.jsx)("p",{children:"\u0e0b\u0e31\u0e49\u0e19"})]})}),(0,g.jsx)("div",{className:m().subItem,children:(0,g.jsxs)("div",{className:m().subItem_right,children:[(0,g.jsx)("figure",{className:"icon",children:(0,g.jsx)("img",{src:"/svg/userOrange.svg",width:40,alt:""})}),(0,g.jsx)("p",{children:a}),(0,g.jsx)("p",{children:"\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e49\u0e32"})]})})]})]})]})},_=t(1968),N=t(8162),w=t(7788),b=t(5998),I=t(6413),y=t(4497),k=t(5675),B=t(733),L=t.n(B),S=function(e){return(0,g.jsx)("div",{className:"w-full flex justify-center h-[300px]  items-center ",children:(0,g.jsx)(L(),{type:"spin",color:"#fff"})})},Z=t(1873),D=function(e){var s=(0,d.useState)([]),t=s[0],r=s[1],i=(0,b.v9)((function(e){return e.allBuildings})),n=(0,b.I0)();return(0,d.useEffect)((function(){i&&i.data&&r(i.data)}),[i]),(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"text-xl text-center my-6",children:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2d\u0e32\u0e04\u0e32\u0e23"}),t.length>0?(0,g.jsx)("div",{className:"grid  md:grid-cols-4 lg:grid-cols-6 gap-6 ",children:t.map((function(e,s){return(0,g.jsxs)("div",{onClick:function(){return s=e.id,n((0,y.E$)(Number(s))),void(0,Z.q)("currentBuildingID",s);var s},className:"max-w-[300px] w-full rounded-lg bg-black overflow-hidden cursor-pointer drop-shadow-lg",children:[(0,g.jsx)("div",{className:" w-[auto] h-[100px] relative overflow-hidden ",children:(0,g.jsx)(k.default,{src:""!==e.picture?e.picture:"https://api.airin1.com/storage/img/tKcncQf5rAeziO6yq31k53z36oYl6X5nDiyYg8Zg.jpeg",alt:"",layout:"fill"})}),(0,g.jsx)("div",{className:"p-3 text-sm",children:(0,g.jsx)("div",{className:"",children:e.name})})]},s)}))}):(0,g.jsx)(S,{})]})},E=t(6245),C=function(){var e=(0,r.Z)(a().mark((function e(s){var t,r,i,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=6;break}return t=(0,E.Z)(s),r=t.exp,i=(new Date).getTime()/1e3,(n=i<r)||(window.localStorage.removeItem("token"),window.localStorage.removeItem("currentBuildingID"),window.location.reload()),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),P=t(4480),U=t(7388),G=function(e){var s,t,n;(0,i.Z)(e);var o=(0,d.useState)(!0),u=(o[0],o[1],(0,c.useRouter)()),x=(0,d.useState)(),m=(x[0],x[1]),h=(0,d.useState)(),v=h[0],f=h[1],j=(0,d.useState)([]),k=j[0],B=j[1],L=(0,d.useState)(),Z=L[0],E=L[1],G=(0,b.v9)((function(e){return e.building})),T=(0,b.v9)((function(e){return e.buildingList})),z=(0,b.v9)((function(e){return e.allBuildings})),K=(0,b.v9)((function(e){return e.userListByFloorID})),O=(0,d.useState)(),F=(O[0],O[1]),A=(0,d.useState)(!1),M=A[0],V=A[1];console.log("%cMyProject%cline:42%cisLoading","color:#fff;background:#ee6f57;padding:3px;border-radius:2px","color:#fff;background:#1f3c88;padding:3px;border-radius:2px","color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px",M);var W=(0,b.I0)(),X=function(){var e=(0,r.Z)(a().mark((function e(s){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.next=3,(0,N.a)("https://api.airin1.com/api/buildings",s);case 3:t=e.sent,W((0,y.T3)(t)),V(!1);case 6:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),q=function(){var e=(0,r.Z)(a().mark((function e(s){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(s);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return(0,d.useEffect)((function(){var e=(0,P.L)("token"),s=localStorage.getItem("currentBuildingID");q(e),e?(console.log("re-rendering"),X(e),m(e),E(s),W((0,w.v)(s)),W((0,I.e)(s)),W((0,U.u)({buildingID:s,floorID:z.floorID})),G&&T&&(f(G.data),B(T.data),F(K))):u.push("/signin")}),[k,v,z.currentBuilding,z.floorID]),(0,g.jsxs)("div",{children:[(0,g.jsxs)(l.default,{children:[(0,g.jsx)("title",{children:"Bruno"}),(0,g.jsx)("meta",{name:"description",content:"Bruno app"}),(0,g.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Z?(0,g.jsxs)(g.Fragment,{children:[G.data&&(null===(s=T.data)||void 0===s?void 0:s.length)>=0?(0,g.jsx)(p,{temperature:null===(t=G.data.weather_outsides[0])||void 0===t?void 0:t.temperature,lat:G.data.latitude,lng:G.data.longitude,weather_outsides:null===(n=G.data.weather_outsides[0])||void 0===n?void 0:n.weather_category,total_user:G.data.children.length,total_floor:T.data.length}):(0,g.jsx)(S,{}),M?(0,g.jsx)(S,{}):(0,g.jsx)(g.Fragment,{children:T.data?(0,g.jsx)("div",{children:z.floorID>0?(0,g.jsx)(_.Z,{data:K.data,typeUser:!0}):(0,g.jsx)(_.Z,{data:T.data,typeUser:!1})}):null})]}):(0,g.jsx)(D,{})]})}},5301:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9258)}])},2322:function(e){e.exports={title:"monitor_title__et2K8",mainBox:"monitor_mainBox__1C4z8",subItem:"monitor_subItem__2Vzvv",weather:"monitor_weather__2oEV7",degree:"monitor_degree__1v12e",subItem_right:"monitor_subItem_right__20tEW",text:"monitor_text__WExwW",Gmap:"monitor_Gmap__GPUlI",mainBox_item:"monitor_mainBox_item__XKoPB"}},7095:function(e){e.exports={userList:"userList_userList__2j7Ym",title:"userList_title__2uStV",list:"userList_list__3-rs4"}},6497:function(e){e.exports={userListItem:"userListItem_userListItem__2Ol1z",item:"userListItem_item__31vKy"}}},function(e){e.O(0,[774,885,675,950,888,179],(function(){return s=5301,e(e.s=s);var s}));var s=e.O();_N_E=s}]);