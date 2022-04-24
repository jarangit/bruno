(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
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
  temperture,
  lat,
  lng,
  weather_outsides,
  total_floor,
  total_user
}) => {
  const now = new Date();
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
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
            className: (monitor_module_default()).text,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: now.getHours() < 16 ? "สวัสดีตอนเช้า" : "สวัสดีตอนเย็น"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: (monitor_module_default()).date,
                children: now.toLocaleDateString('th-TH', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  weekday: 'long'
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: `${now.getHours()}:${now.getMinutes()}`
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
            className: (monitor_module_default()).text,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                className: "icon",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/svg/bearLine.svg",
                  width: 30,
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
                children: "Bangkok"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (monitor_module_default()).degree,
                children: [temperture, /*#__PURE__*/jsx_runtime_.jsx("span", {
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
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./utills/fecthApi.ts

const baseUrl = "https://api.airin1.com/api/";
const fecthApi = async url => {
  const {
    data
  } = await external_axios_default().get(url, {
    headers: {
      "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDg0NTU2MjcsImV4cCI6MTY1MTA0NzYyNywib3RwIjoiIiwidWlkIjo0M30.8UVfTKIS0l5c0lpjeIBItMeVW-bxV5tr17_wzhCW0tA `
    }
  });
  return data;
};
;// CONCATENATED MODULE: ./pages/index.tsx







const Home = ({
  data,
  dataList
}) => {
  var _data$weather_outside, _data$weather_outside2;

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
    }), /*#__PURE__*/jsx_runtime_.jsx(monitor, {
      temperture: (_data$weather_outside = data.weather_outsides[0]) === null || _data$weather_outside === void 0 ? void 0 : _data$weather_outside.temperature,
      lat: data.latitude,
      lng: data.longitude,
      weather_outsides: (_data$weather_outside2 = data.weather_outsides[0]) === null || _data$weather_outside2 === void 0 ? void 0 : _data$weather_outside2.weather_category,
      total_user: data.children.length,
      total_floor: dataList.length
    }), /*#__PURE__*/jsx_runtime_.jsx(userList/* default */.Z, {
      data: dataList
    })]
  });
};

async function getStaticProps() {
  // Fetch data from external API
  const dataBuilding = await fecthApi(`https://api.airin1.com/api/buildings/38`);
  const listBuilding = await fecthApi(`https://api.airin1.com/api/tenants?building_id=38`); // Pass data to the page via props

  return {
    props: {
      data: dataBuilding,
      dataList: listBuilding
    }
  };
}
/* harmony default export */ const pages = (Home);

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
	"date": "monitor_date__1TuKU",
	"Gmap": "monitor_Gmap__GPUlI",
	"mainBox_item": "monitor_mainBox_item__XKoPB"
};


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
var __webpack_exports__ = __webpack_require__.X(0, [664,394], () => (__webpack_exec__(123)));
module.exports = __webpack_exports__;

})();