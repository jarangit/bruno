"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./redux/slice/allBuildingsSlice.ts
var allBuildingsSlice = __webpack_require__(4497);
// EXTERNAL MODULE: ./utills/setLocalstorage.ts
var setLocalstorage = __webpack_require__(1873);
// EXTERNAL MODULE: ./utills/getLocalStorage.ts
var getLocalStorage = __webpack_require__(4480);
// EXTERNAL MODULE: ./utills/fecthApi.ts
var fecthApi = __webpack_require__(8162);
// EXTERNAL MODULE: ./redux/slice/buildingListSlice.ts
var buildingListSlice = __webpack_require__(6413);
// EXTERNAL MODULE: ./node_modules/react-icons/ri/index.esm.js
var index_esm = __webpack_require__(9352);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/layout/menu.tsx














const Menu = () => {
  const {
    0: dataUser,
    1: setDataUser
  } = (0,external_react_.useState)([]);
  const {
    data,
    status
  } = (0,external_react_redux_.useSelector)(state => state.buildingList);
  const {
    0: foundData,
    1: setFoundData
  } = (0,external_react_.useState)([]);
  const {
    0: allBuildings,
    1: setAllBuildings
  } = (0,external_react_.useState)([]);
  const {
    0: currentBuildingID,
    1: setCurrentBuildingID
  } = (0,external_react_.useState)();
  const {
    0: activeFool,
    1: setActiveFool
  } = (0,external_react_.useState)("");
  const {
    0: activeBuilder,
    1: setActiveBuilder
  } = (0,external_react_.useState)("");
  const {
    0: toggleSelectFool,
    1: setToggleSelectFool
  } = (0,external_react_.useState)(false);
  const {
    0: toggleSelectBuilder,
    1: setToggleSelectBuilder
  } = (0,external_react_.useState)(false);
  const allData = (0,external_react_redux_.useSelector)(state => state.allBuildings);
  const buildingsList = (0,external_react_redux_.useSelector)(state => state.buildingList);
  const router = (0,router_.useRouter)();
  const buildings = (0,external_react_redux_.useSelector)(state => state.building);
  const {
    0: twoLevel,
    1: setTwoLevel
  } = (0,external_react_.useState)(false);
  const dispatch = (0,external_react_redux_.useDispatch)();

  const searchData = async e => {
    let text = e.target.value;
    const result = await dataUser.filter(_item => _item.name.toLowerCase().includes(text));

    if (result.length > 0 && text !== "") {
      setFoundData(result);
    } else if (text == "") {
      setFoundData([]);
    }
  };

  const onChangeBuilding = (id, name) => {
    const buildingID = id;
    dispatch((0,allBuildingsSlice/* currentBuilding */.E$)(Number(buildingID)));
    dispatch((0,allBuildingsSlice/* currentFloorID */.w9)(0));
    (0,setLocalstorage/* setLocalStorage */.q)("currentBuildingID", buildingID);
    setActiveFool("");
    setActiveBuilder(name);
    router.push('/');
  };

  const getAllBuildings = async token => {
    const allDataBuildings = await (0,fecthApi/* fetchApi */.a)(`https://api.airin1.com/api/buildings`, token);
    dispatch((0,allBuildingsSlice/* keepData */.T3)(allDataBuildings));
    setAllBuildings(allDataBuildings);
  };

  const activeLink = (name, id) => {
    if (name && id && buildings.data.is_two_level) {
      console.log(buildings.data.is_two_level);
      setActiveFool(name);
      setToggleSelectFool(false);
      dispatch((0,allBuildingsSlice/* currentRoomID */.U1)(Number(id)));
      dispatch((0,allBuildingsSlice/* currentFloorID */.w9)(0));
    } else {
      setActiveFool(name);
      setToggleSelectFool(false);
      dispatch((0,allBuildingsSlice/* currentFloorID */.w9)(Number(id)));
      dispatch((0,allBuildingsSlice/* currentRoomID */.U1)(0));
    }
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("currentBuildingID");
    window.location.reload();
  };

  const onToggleSelectFool = () => {
    setToggleSelectFool(!toggleSelectFool);
  };

  const setDefaultActiveBuilders = id => {
    const found = allBuildings.find(build => build.id === id);

    if (found) {
      setActiveBuilder(found.name);
    }
  };

  (0,external_react_.useEffect)(() => {
    const currentBuilding = (0,getLocalStorage/* getFromStorage */.L)("currentBuildingID");
    const token = (0,getLocalStorage/* getFromStorage */.L)("token");
    getAllBuildings(token);

    if (status || currentBuilding && buildings) {
      setDataUser(data);
      setCurrentBuildingID(Number(currentBuilding));
      dispatch((0,buildingListSlice/* buildingListAsync */.e)(currentBuilding)); // setTwoLevel(buildings.data.is_two_level)

      setDefaultActiveBuilders(Number(currentBuilding));
    }
  }, [status, currentBuildingID, allBuildingsSlice/* currentBuilding */.E$, activeBuilder]);
  const styled = (0,external_react_.useMemo)(() => ({
    menuItem: `
    
    `
  }), []);
  return (
    /*#__PURE__*/
    // <div className={styles.menu}>
    //   <ul>
    //     <li>
    //       <select className={`${styles.menuSelector}  text-xs`} onChange={(e: any) => onChangeBuilding(e)}>
    //         {allBuildings && allBuildings.length > 0 ?
    //           allBuildings.map((item: any, key: any) => (
    //             <option key={key} value={item.id} defaultValue={currentBuildingID ? currentBuildingID : 0} selected={item.id == currentBuildingID ? true : false}>
    //               {item.name}
    //             </option>
    //           )) : null}
    //       </select>
    //     </li>
    //     <li >
    //       {/* <div className={`${styles.menuSelector} text-xs relative border`}> */}
    //       <div className={`text-xs relative min-w[80px] w-[100px] max-w[60px] flex items-center h-full`}>
    //         <div className="cursor-pointer" onClick={onToggleSelectFool}>
    //           {activeFool ? activeFool : 'กรุณาเลือกชั้น'}
    //           <span className="absolute right-0 top-[5px]" >
    //             <RiArrowDownSLine size="15" />
    //           </span>
    //         </div>
    //         {buildings.data && toggleSelectFool ? (
    //           <div className={`absolute border border-gray-600 top-10 bg-black rounded-lg p-2`}>
    //             <div className={`flex-col flex gap-2 w-[120px]`}>
    //               <div onClick={() => activeLink('', 0)}>
    //                 เลือกทั้งหมด
    //               </div>
    //               {buildings?.data.children.map((item: any, key: any) => (
    //                 <div className={`cursor-pointer`}>
    //                   <div onClick={() => activeLink(item.name, item.id)}>
    //                     {item.name}
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         ) : null}
    //       </div>
    //     </li>
    //     <li className={`${styles.li_inputSearch} relative`} >
    //       <img src="/svg/search.svg" alt="" width={20} />
    //       <input type="text" onChange={(e) => searchData(e)} className={styles.inputSearch} placeholder="ค้นหาชั้น,ผู้เช่า" />
    //       {foundData.length > 0 ? (
    //         <div className="absolute top-12 bg-black w-full rounded-md px-3 py-2 z-10 border border-[#6d6d6d] md:w-[350px] lg:w-[480px] lg:overflow-hidden">
    //           {foundData.map((item: any, key) => (
    //             <a href={`/user/${key + 1}`} key={key} className="text-xs flex gap-2 my-2 bg-[#383838] p-2 rounded-sm justify-center lg:justify-start">
    //               <div >
    //                 <span className="text-[#c6c6c6]">
    //                   ซื้อ :
    //                 </span>
    //                 {item.name}
    //               </div>
    //               <div>
    //                 <span className="text-[#c6c6c6]">
    //                   ชั้น :
    //                 </span>
    //                 {item.floor_id}
    //               </div>
    //               <div>
    //                 <span className="text-[#c6c6c6]">
    //                   เบอร์โทร :
    //                 </span>
    //                 {item.mobile_number}
    //               </div>
    //               <div className="hidden lg:inline">
    //                 <span className="text-[#c6c6c6]">
    //                   Line :
    //                 </span>
    //                 {item.line_id}
    //               </div>
    //             </a>
    //           ))}
    //         </div>
    //       ) : null}
    //     </li>
    //   </ul>
    //   <div className={styles.logo}>
    //     <a href="/">
    //       <h1>BRUNO</h1>
    //     </a>
    //   </div>
    //   <ul className={styles.menuRigth}>
    //     <li>
    //       <Link href="/login">
    //         <div className={styles.menuItem}>
    //           <img src="/svg/user.svg" alt="" width={20} />
    //           <p>Owner Information</p>
    //         </div>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/setting">
    //         <div className={styles.menuItem}>
    //           <img src="/svg/gear.svg" alt="" width={20} />
    //           <p>Unit Price Setting </p>
    //         </div>
    //       </Link>
    //     </li>
    //     <li>
    //       <div className={styles.menuItem}
    //         onClick={logout}
    //       >
    //         <RiShutDownLine
    //           color="#ffffff"
    //           size={30}
    //         />
    //       </div>
    //     </li>
    //   </ul>
    // </div>
    (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "/",
          className: "text-3xl text-center my-1 lg:hidden font-bold",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "BRUNO"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "px-3 mb-6 lg:mb-1 mx-auto grid grid-cols-4 lg:grid-cols-9 gap-6 justify-center items-center max-w-[1200px]",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: " flex col-span-3 lg:col-span-4 gap-5 ",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: `h-[30px]`,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `text-xs relative min-w[80px] w-[120px]  flex items-center h-full px-3 rounded-full bg-black cursor-pointer` // onChange={(e: any) => onChangeBuilding(e)}
              ,
              onClick: () => setToggleSelectBuilder(!toggleSelectBuilder),
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `truncate w-[90px] `,
                children: activeBuilder ? activeBuilder : 'กรุณาเลือกอาคาร'
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "absolute right-2 top-2",
                children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* RiArrowDownSLine */.ZXJ, {
                  size: "15"
                })
              }), toggleSelectBuilder && allBuildings && allBuildings.length > 0 && /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `z-10 absolute border border-gray-600 top-10 bg-black rounded-lg p-2 `,
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: `flex-col flex gap-2  w-[350px]`,
                  children: allBuildings.map((item, key) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                    onClick: () => onChangeBuilding(item.id, item.name),
                    children: item.name
                  }))
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: `h-[30px]`,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: ` text-xs relative min-w[80px] w-[120px]  flex items-center h-full px-3 rounded-full bg-black cursor-pointer`,
              onClick: onToggleSelectFool,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `truncate w-[90px] `,
                onClick: onToggleSelectFool,
                children: activeFool ? activeFool : 'กรุณาเลือกชั้น'
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "absolute right-2 top-2",
                children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* RiArrowDownSLine */.ZXJ, {
                  size: "15"
                })
              }), buildings.data && toggleSelectFool ? /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `absolute border border-gray-600 top-10 bg-black rounded-lg p-2 `,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: `flex-col flex gap-2  w-[140px]`,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    onClick: () => activeLink('', 0),
                    children: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"
                  }), buildings === null || buildings === void 0 ? void 0 : buildings.data.children.map((item, key) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: `cursor-pointer`,
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      onClick: () => activeLink(item.name, item.id),
                      children: item.name
                    })
                  }))]
                })
              }) : null]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: `flex relative bg-[#808080] rounded-full h-[30px] px-2 gap-1 w-full`,
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/svg/search.svg",
              alt: "",
              width: 15
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "text",
              onChange: e => searchData(e),
              className: `bg-[#808080] text-xs lg:w-[80%] w-3/4`,
              placeholder: "\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E0A\u0E31\u0E49\u0E19,\u0E1C\u0E39\u0E49\u0E40\u0E0A\u0E48\u0E32"
            }), foundData.length > 0 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "absolute top-12 bg-black w-full rounded-md px-3 py-2 z-10 border border-[#6d6d6d] md:w-[350px] lg:w-[480px] lg:overflow-hidden",
              children: foundData.map((item, key) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: `/user/${key + 1}`,
                className: "text-xs flex gap-2 my-2 bg-[#383838] p-2 rounded-sm justify-center lg:justify-start",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "text-[#c6c6c6]",
                    children: "\u0E0B\u0E37\u0E49\u0E2D :"
                  }), item.name]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "text-[#c6c6c6]",
                    children: "\u0E0A\u0E31\u0E49\u0E19 :"
                  }), item.floor_id]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "text-[#c6c6c6]",
                    children: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23 :"
                  }), item.mobile_number]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "hidden lg:inline",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "text-[#c6c6c6]",
                    children: "Line :"
                  }), item.line_id]
                })]
              }, key))
            }) : null]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "font-bold text-center col-span-1 text-3xl hidden lg:inline-block",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: "BRUNO"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: `col-span-1 lg:col-span-4 flex gap-5 justify-end `,
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: " lg:w-full",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/login",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "bg-black flex gap-2 w-full px-3 h-[30px] items-center rounded-full cursor-pointer text-xs",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/svg/user.svg",
                  alt: "",
                  width: 15
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "hidden lg:inline-block",
                  children: "Owner Information"
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: " lg:w-full",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/setting",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "bg-black flex gap-2 w-full px-3 h-[30px] items-center rounded-full cursor-pointer text-xs",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/svg/gear.svg",
                  alt: "",
                  width: 15
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "hidden lg:inline-block",
                  children: "Unit Price Setting "
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "bg-black flex gap-2 p-1 h-[30px] items-center rounded-full w-[30px] cursor-pointer",
              onClick: logout,
              children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* RiShutDownLine */.K1g, {
                color: "#ffffff",
                size: 25
              })
            })
          })]
        })]
      })]
    })
  );
};

/* harmony default export */ const menu = (Menu);
;// CONCATENATED MODULE: ./components/layout/layout.tsx





const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(menu, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "container",
      children: children
    })]
  });
};

/* harmony default export */ const layout = (Layout);
;// CONCATENATED MODULE: ./components/layout/default.tsx



const DefaultLayout = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "container",
      children: children
    })
  });
};

/* harmony default export */ const layout_default = (DefaultLayout);
;// CONCATENATED MODULE: ./components/layout/layoutWrapper.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const layouts = {
  default: layout_default,
  admin: layout
};

const LayoutWrapper = props => {
  // to get the text value of the assigned layout of each component
  const GetLayout = layouts[props.children.type.layout]; // if we have a registered layout render children with said layout

  if (GetLayout != null) {
    return /*#__PURE__*/jsx_runtime_.jsx(layout_default, _objectSpread(_objectSpread({}, props), {}, {
      children: props.children
    }));
  } // if not render children with fragment


  return /*#__PURE__*/jsx_runtime_.jsx(layout, _objectSpread(_objectSpread({}, props), {}, {
    children: props.children
  }));
};

/* harmony default export */ const layoutWrapper = (LayoutWrapper);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: ./redux/slice/authSlice.ts
var authSlice = __webpack_require__(9474);
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./redux/slice/buildingSlice.ts
var buildingSlice = __webpack_require__(7788);
// EXTERNAL MODULE: ./redux/slice/pdfSlice.ts
var pdfSlice = __webpack_require__(2393);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
// EXTERNAL MODULE: ./redux/slice/userListByFloorID.ts
var userListByFloorID = __webpack_require__(7388);
// EXTERNAL MODULE: ./redux/slice/userListByRoomID.ts
var userListByRoomID = __webpack_require__(1453);
;// CONCATENATED MODULE: ./redux/store.ts











const store = () => (0,toolkit_.configureStore)({
  reducer: {
    auth: authSlice/* default */.ZP,
    building: buildingSlice/* default */.Z,
    buildingList: buildingListSlice/* default */.Z,
    allBuildings: allBuildingsSlice/* default */.ZP,
    pdfData: pdfSlice/* default */.ZP,
    userListByFloorID: userListByFloorID/* default */.Z,
    userListByRoomID: userListByRoomID/* default */.Z
  },
  middleware: [(external_redux_thunk_default())]
}); // type RootState = ReturnType<typeof store.getState>;
// type AppDispath = typeof store.dispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useAppDispatch = () => useDispatch<AppDispath>();


const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(store);
;// CONCATENATED MODULE: external "react-cookie"
const external_react_cookie_namespaceObject = require("react-cookie");
;// CONCATENATED MODULE: ./pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return (
    /*#__PURE__*/
    // <Provider store={store}>
    //   <LayoutWrapper {...pageProps} >
    //     <Component {...pageProps} />
    //   </LayoutWrapper>
    // </Provider>
    jsx_runtime_.jsx(external_react_cookie_namespaceObject.CookiesProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx(layoutWrapper, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
      }))
    })
  );
} // export default MyApp;


/* harmony default export */ const _app = (wrapper.withRedux(MyApp));

/***/ }),

/***/ 6139:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8993:
/***/ ((module) => {

module.exports = require("universal-cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,127,352,798,857,821,474,393], () => (__webpack_exec__(5705)));
module.exports = __webpack_exports__;

})();