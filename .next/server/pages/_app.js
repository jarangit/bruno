(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./styles/layout/menu.module.scss
var menu_module = __webpack_require__(869);
var menu_module_default = /*#__PURE__*/__webpack_require__.n(menu_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./redux/slice/allBuildingsSlice.ts
var allBuildingsSlice = __webpack_require__(4497);
// EXTERNAL MODULE: ./utills/setLocalstorage.ts
var setLocalstorage = __webpack_require__(1873);
;// CONCATENATED MODULE: ./utills/getLocalStorage.ts
const getFromStorage = data => {
  if (data) {
    return localStorage.getItem(data);
  }
};
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
  const allData = (0,external_react_redux_.useSelector)(state => state.allBuildings);
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

  const onChangeBuilding = e => {
    const buildingID = e.target.value;
    dispatch((0,allBuildingsSlice/* currentBuilding */.E$)(Number(buildingID)));
    (0,setLocalstorage/* setLocalStorage */.q)("currentBuildingID", buildingID);
  };

  (0,external_react_.useEffect)(() => {
    const currentBuilding = getFromStorage("currentBuildingID");

    if (status && currentBuilding) {
      setDataUser(data);
      setAllBuildings(allData.data);
      setCurrentBuildingID(currentBuilding);
    }
  }, [status, currentBuildingID, allBuildingsSlice/* currentBuilding */.E$, allData.data]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (menu_module_default()).menu,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("select", {
          className: (menu_module_default()).menuSelector,
          onChange: e => onChangeBuilding(e),
          children: allBuildings.length > 0 && currentBuildingID ? allBuildings.map((item, key) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("option", {
            value: item.id,
            defaultValue: currentBuildingID,
            selected: item.id == currentBuildingID ? true : false,
            children: ["\u0E2D\u0E32\u0E04\u0E32\u0E23: ", item.id]
          }, key)) : null
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("select", {
          className: (menu_module_default()).menuSelector,
          children: /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "1",
            children: "\u0E0A\u0E31\u0E49\u0E19"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: `${(menu_module_default()).li_inputSearch} relative`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/svg/search.svg",
          alt: "",
          width: 20
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          onChange: e => searchData(e),
          className: (menu_module_default()).inputSearch,
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
      className: (menu_module_default()).logo,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: "BRUNO"
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: (menu_module_default()).menuRigth,
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/login",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (menu_module_default()).menuItem,
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/svg/user.svg",
              alt: "",
              width: 20
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Owner Information"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/setting",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (menu_module_default()).menuItem,
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/svg/gear.svg",
              alt: "",
              width: 20
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Unit Price Setting "
            })]
          })
        })
      })]
    })]
  });
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
// EXTERNAL MODULE: ./redux/slice/buildingListSlice.ts
var buildingListSlice = __webpack_require__(6413);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: ./redux/store.ts








const store = () => (0,toolkit_.configureStore)({
  reducer: {
    auth: authSlice/* default */.ZP,
    building: buildingSlice/* default */.Z,
    buildingList: buildingListSlice/* default */.Z,
    allBuildings: allBuildingsSlice/* default */.ZP
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

/***/ 4497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T3": () => (/* binding */ keepData),
/* harmony export */   "E$": () => (/* binding */ currentBuilding),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export allBuildingsSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
 // Define a type for the slice state

// Define the initial state using that type
const initialState = {
  data: [],
  currentBuilding: null
};
const allBuildingsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'allBuildings',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    keepData: (state, action) => {
      state.data = action.payload;
    },
    currentBuilding: (state, action) => {
      state.currentBuilding = action.payload;
    }
  }
});
const {
  keepData,
  currentBuilding
} = allBuildingsSlice.actions; // Other code such as selectors can use the imported `RootState` type

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allBuildingsSlice.reducer);

/***/ }),

/***/ 1873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ setLocalStorage)
/* harmony export */ });
const setLocalStorage = (name, data) => {
  if (data) {
    return localStorage.setItem(name, data);
  }
};

/***/ }),

/***/ 869:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "menu_menu__1WHIe",
	"li_inputSearch": "menu_li_inputSearch__PTQvs",
	"menuItem": "menu_menuItem__1n_S_",
	"inputSearch": "menu_inputSearch__34N82",
	"menuSelector": "menu_menuSelector__E0S_4",
	"logo": "menu_logo__sAbwI",
	"menuRigth": "menu_menuRigth__3inJb"
};


/***/ }),

/***/ 6139:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8993:
/***/ ((module) => {

"use strict";
module.exports = require("universal-cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,788,358,474], () => (__webpack_exec__(3567)));
module.exports = __webpack_exports__;

})();