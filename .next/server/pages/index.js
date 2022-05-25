(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
// EXTERNAL MODULE: ./styles/dashboard/monitor.module.scss
var monitor_module = __webpack_require__(1810);
var monitor_module_default = /*#__PURE__*/__webpack_require__.n(monitor_module);
;// CONCATENATED MODULE: external "google-map-react"
const external_google_map_react_namespaceObject = require("google-map-react");
var external_google_map_react_default = /*#__PURE__*/__webpack_require__.n(external_google_map_react_namespaceObject);
;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/google-map/maker.js

 // const Wrapper = styled.div`
//   // position: absolute;
//   // top: 50%;
//   // left: 50%;
//   // width: 18px;
//   // height: 18px;
//   // background-color: red;
//   // border: 2px solid #fff;
//   // border-radius: 100%;
//   // user-select: none;
//   // transform: translate(-50%, -50%);
//   // cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
//   // &:hover {
//   //   z-index: 1;
//   // }
// `;



const Marker = ({
  text,
  onClick
}) => /*#__PURE__*/jsx_runtime_.jsx("div", {
  alt: text,
  onClick: onClick,
  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: "/svg/markerMap.svg",
    alt: "",
    width: "25px"
  })
});

Marker.defaultProps = {
  onClick: null
};
/* harmony default export */ const maker = (Marker);
;// CONCATENATED MODULE: ./data/markerMap.js
const dataMarkerMap = [{
  lat: 13.73672217,
  lng: 100.522334186
}, {
  lat: 13.668217,
  lng: 100.614021
}, {
  lat: 13.736717,
  lng: 100.55634186
}, {
  lat: 13.736717,
  lng: 100.777776
}, {
  lat: 13.72321336717,
  lng: 100.345345
}];
;// CONCATENATED MODULE: ./components/google-map/googleMap.js






const GoogleMap = ({
  coordinates,
  setcoordinates,
  setbounds,
  lat,
  lng
}) => {
  const center = {
    lat: 13.736717,
    lng: 100.523186
  };

  const handleApiLoaded = (map, maps) => {
    return "Loadiing";
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "map",
    style: {
      height: "300px",
      width: "100%"
    },
    children: /*#__PURE__*/jsx_runtime_.jsx((external_google_map_react_default()), {
      bootstrapURLKeys: {
        key: "AIzaSyB4Zxfe4I4S9qjPyVT0cG6Hy8FF8_gK-9o"
      },
      defaultCenter: center,
      defaultZoom: 10,
      yesIWantToUseGoogleMapApiInternals: true,
      margin: [50, 50, 50, 50],
      onGoogleApiLoaded: ({
        map,
        maps
      }) => handleApiLoaded(map, maps),
      children: /*#__PURE__*/jsx_runtime_.jsx(maker, {
        lat: lat,
        lng: lng,
        text: "marker"
      })
    })
  });
};

/* harmony default export */ const googleMap = (GoogleMap);
;// CONCATENATED MODULE: ./components/dashborad/monitor.tsx







const Monitor = ({
  temperature,
  lat,
  lng,
  weather_outsides,
  total_floor,
  total_user
}) => {
  const now = new Date();

  const ShowTime = () => {
    const current = external_moment_default()();
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex gap-1",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: `${current.hours() <= 9 ? `0${current.hours()}` : current.hours()}`
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: ":"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: `${current.minutes() <= 9 ? `0${current.minutes()}` : current.minutes()}`
      })]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (monitor_module_default()).title,
      children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: " \u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E17\u0E22"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (monitor_module_default()).mainBox,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (monitor_module_default()).mainBox_item,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (monitor_module_default()).subItem,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${(monitor_module_default()).text}  items-center flex`,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `text-xl`,
                children: now.getHours() < 16 ? "สวัสดีตอนเช้า" : "สวัสดีตอนเย็น"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: `text-sm`,
                children: now.toLocaleDateString('th-TH', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  weekday: 'long'
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-4xl",
              children: /*#__PURE__*/jsx_runtime_.jsx(ShowTime, {})
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
            className: (monitor_module_default()).text,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/svg/bearLine.svg",
                  width: 60,
                  alt: ""
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "\u0E2A\u0E20\u0E32\u0E1E\u0E2D\u0E32\u0E01\u0E32\u0E28\u0E40\u0E0A\u0E49\u0E32\u0E19\u0E35\u0E49\u0E2D\u0E32\u0E01\u0E32\u0E28\u0E41\u0E08\u0E48\u0E21\u0E43\u0E2A \u0E14\u0E49\u0E32\u0E19\u0E19\u0E2D\u0E01\u0E21\u0E35\u0E41\u0E14\u0E14\u0E08\u0E49\u0E32"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (monitor_module_default()).subItem,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
            className: (monitor_module_default()).weather,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: `text-orange-400`,
                children: "Bangkok"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (monitor_module_default()).degree,
                children: [Math.round(temperature), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "\xBAc"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/svg/sun.svg",
                  width: 60,
                  alt: ""
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                children: weather_outsides
              })]
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (monitor_module_default()).mainBox_item,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (monitor_module_default()).Gmap,
          children: /*#__PURE__*/jsx_runtime_.jsx(googleMap, {
            coordinates: undefined,
            setcoordinates: undefined,
            setbounds: undefined,
            lat: lat,
            lng: lng
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (monitor_module_default()).mainBox_item,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (monitor_module_default()).subItem,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (monitor_module_default()).subItem_right,
            children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
              className: "icon",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/svg/builder.svg",
                width: 40,
                alt: ""
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: total_floor
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "\u0E0B\u0E31\u0E49\u0E19"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (monitor_module_default()).subItem,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (monitor_module_default()).subItem_right,
            children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
              className: "icon",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/svg/userOrange.svg",
                width: 40,
                alt: ""
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: total_user
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "\u0E1C\u0E39\u0E49\u0E40\u0E0A\u0E49\u0E32"
            })]
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const monitor = (Monitor);
// EXTERNAL MODULE: ./components/form/userList.tsx
var userList = __webpack_require__(1968);
// EXTERNAL MODULE: ./utills/fecthApi.ts
var fecthApi = __webpack_require__(8162);
// EXTERNAL MODULE: ./redux/slice/buildingSlice.ts
var buildingSlice = __webpack_require__(7788);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./redux/slice/buildingListSlice.ts
var buildingListSlice = __webpack_require__(6413);
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(8883);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);
// EXTERNAL MODULE: ./redux/slice/allBuildingsSlice.ts
var allBuildingsSlice = __webpack_require__(4497);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "react-loading"
const external_react_loading_namespaceObject = require("react-loading");
var external_react_loading_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_namespaceObject);
;// CONCATENATED MODULE: ./components/loading/loading.tsx




const Loading = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "w-full flex justify-center h-[300px]  items-center ",
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_loading_default()), {
      type: "spin",
      color: "#fff"
    })
  });
};

/* harmony default export */ const loading = (Loading);
;// CONCATENATED MODULE: ./components/building/selectBuilding.tsx








const SelectBuilding = props => {
  const {
    0: Data,
    1: setData
  } = (0,external_react_.useState)([]);
  const allData = (0,external_react_redux_.useSelector)(state => state.allBuildings);
  const defaultImg = "https://api.airin1.com/storage/img/tKcncQf5rAeziO6yq31k53z36oYl6X5nDiyYg8Zg.jpeg";
  const dispatch = (0,external_react_redux_.useDispatch)();
  console.log(allData.data);

  const onChangeBuilding = id => {
    console.log(id);
    dispatch((0,allBuildingsSlice/* currentBuilding */.E$)(Number(id)));
  };

  (0,external_react_.useEffect)(() => {
    if (allData.data.length > 0) {
      setData(allData.data);
    }
  }, [allData]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-xl text-center my-6",
      children: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2D\u0E32\u0E04\u0E32\u0E23"
    }), Data.length > 0 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid  md:grid-cols-4 lg:grid-cols-6 gap-6 ",
      children: Data.map((item, key) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        onClick: () => onChangeBuilding(item.id),
        className: "max-w-[300px] w-full rounded-lg bg-black overflow-hidden cursor-pointer drop-shadow-lg",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: " w-[auto] h-[100px] relative overflow-hidden ",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: item.picture !== "" ? item.picture : defaultImg,
            alt: "",
            layout: "fill"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "p-3 text-sm",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "",
            children: item.name
          })
        })]
      }, key))
    }) : /*#__PURE__*/jsx_runtime_.jsx(loading, {})]
  });
};

/* harmony default export */ const selectBuilding = (SelectBuilding);
;// CONCATENATED MODULE: ./pages/index.tsx


















const Home = ({}) => {
  var _buildingsList$data, _buildings$data$weath, _buildings$data$weath2;

  const router = (0,router_.useRouter)();
  const {
    0: userToken,
    1: setuserToken
  } = (0,external_react_.useState)();
  const {
    0: buildingData,
    1: setBuildingData
  } = (0,external_react_.useState)();
  const {
    0: buildingDataList,
    1: setBuildingDataList
  } = (0,external_react_.useState)([]);
  const buildings = (0,external_react_redux_.useSelector)(state => state.building);
  const buildingsList = (0,external_react_redux_.useSelector)(state => state.buildingList);
  const allData = (0,external_react_redux_.useSelector)(state => state.allBuildings);
  const dispatch = (0,external_react_redux_.useDispatch)();
  const buildingID = allData.currentBuilding;

  const getAllBuildings = async token => {
    const allDataBuildings = await (0,fecthApi/* fetchApi */.a)(`https://api.airin1.com/api/buildings`, token);
    dispatch((0,allBuildingsSlice/* keepData */.T3)(allDataBuildings));
  };

  (0,external_react_.useEffect)(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getAllBuildings(token);
      setuserToken(token);
      dispatch((0,buildingSlice/* buildingAsync */.v)(buildingID));
      dispatch((0,buildingListSlice/* buildingListAsync */.e)(buildingID));

      if (buildings && buildingsList) {
        setBuildingData(buildings.data);
        setBuildingDataList(buildingsList.data);
      }
    } else {
      router.push('/signin');
      return;
    }
  }, [buildingDataList, buildingData, allData.currentBuilding]);
  console.log(buildingID);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Bruno"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Bruno app"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), buildingID ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [buildings.data && ((_buildingsList$data = buildingsList.data) === null || _buildingsList$data === void 0 ? void 0 : _buildingsList$data.length) >= 0 ? /*#__PURE__*/jsx_runtime_.jsx(monitor, {
        temperature: (_buildings$data$weath = buildings.data.weather_outsides[0]) === null || _buildings$data$weath === void 0 ? void 0 : _buildings$data$weath.temperature,
        lat: buildings.data.latitude,
        lng: buildings.data.longitude,
        weather_outsides: (_buildings$data$weath2 = buildings.data.weather_outsides[0]) === null || _buildings$data$weath2 === void 0 ? void 0 : _buildings$data$weath2.weather_category,
        total_user: buildings.data.children.length,
        total_floor: buildingsList.data.length
      }) : /*#__PURE__*/jsx_runtime_.jsx(loading, {}), buildingsList.data ? /*#__PURE__*/jsx_runtime_.jsx(userList/* default */.Z, {
        data: buildingsList.data
      }) : null]
    }) : /*#__PURE__*/jsx_runtime_.jsx(selectBuilding, {})]
  });
};

const getServerSideProps = async ({
  req,
  res
}) => {
  const myCookie = external_cookie_default().parse(req && req.headers.cookie || "");
  const token = myCookie.token;
  const allDataBuildings = await (0,fecthApi/* fetchApi */.a)(`https://api.airin1.com/api/buildings`, token); // const listBuilding = await fecthApi(`https://api.airin1.com/api/tenants?building_id=38`)

  return {
    props: {
      allDataBuildings: allDataBuildings || ''
    }
  };
}; // export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
//   console.log('store state on the server before dispatch', store.getState());
//   store.dispatch(buildingAsync(38));
//   console.log('store state on the server after dispatch', store.getState());
//   const data = query.data;
//   //  http://localhost:3000?data='some-data'
//   console.log(data);
//   return {
//     props: {
//       data
//     } // will be passed to the page component as props
//   };
// });
// export const getInitialProps = wrapper.getInitialPageProps((store) => async ({ query }) => {
//   const data = await store.dispatch(buildingAsync(38)) || "no data";
//   console.log(data);
//   const num = 123
//   return {
//     props: {
//       data
//     }
//   };
// })

/* harmony default export */ const pages = (Home);

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

/***/ 1810:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "monitor_title__et2K8",
	"mainBox": "monitor_mainBox__1C4z8",
	"subItem": "monitor_subItem__2Vzvv",
	"weather": "monitor_weather__2oEV7",
	"degree": "monitor_degree__1v12e",
	"subItem_right": "monitor_subItem_right__20tEW",
	"text": "monitor_text__WExwW",
	"Gmap": "monitor_Gmap__GPUlI",
	"mainBox_item": "monitor_mainBox_item__XKoPB"
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

/***/ 8883:
/***/ ((module) => {

"use strict";
module.exports = require("cookie");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

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

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,675,788,358,320], () => (__webpack_exec__(9426)));
module.exports = __webpack_exports__;

})();