(() => {
var exports = {};
exports.id = 777;
exports.ids = [777];
exports.modules = {

/***/ 1514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _air_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./styles/form/airRegisterForm.module.scss
var airRegisterForm_module = __webpack_require__(5275);
var airRegisterForm_module_default = /*#__PURE__*/__webpack_require__.n(airRegisterForm_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/form/airRegisteFormr.tsx

 // import { airData } from '../../data/airData'





const AirRegisterForm = ({
  title,
  data
}) => {
  const {
    0: showMore,
    1: setShowMore
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (airRegisterForm_module_default()).title,
      children: title
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: (airRegisterForm_module_default()).box_form,
      children: [data && data.map((item, key) => key <= `${showMore ? 100 : 9}` && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (airRegisterForm_module_default()).form_item,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "container_label",
          children: [item.name, /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "checkbox",
            disabled: item.status === "on" ? true : false,
            defaultChecked: item.status === "on" ? true : false,
            value: item.name
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "checkmark"
          })]
        })
      }, key)), data.length > 10 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-full text-center cursor-pointer",
        onClick: () => setShowMore(!showMore),
        children: showMore ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "rotate-180",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: `/svg/arrowDown.svg`,
              alt: "",
              width: 10,
              height: 10
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "Hidden"
          })]
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "Show more"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: `/svg/arrowDown.svg`,
              alt: "",
              width: 10,
              height: 10
            })
          })]
        })
      }) : null]
    })]
  });
};

/* harmony default export */ const airRegisteFormr = (AirRegisterForm);
// EXTERNAL MODULE: ./components/form/loginForm.tsx + 1 modules
var loginForm = __webpack_require__(7931);
// EXTERNAL MODULE: ./components/form/userList.tsx
var userList = __webpack_require__(1968);
// EXTERNAL MODULE: ./components/form/userListItem.tsx
var userListItem = __webpack_require__(2639);
;// CONCATENATED MODULE: ./components/form/index.tsx




;// CONCATENATED MODULE: ./data/usersData.js
const usersData = [{
  id: 1,
  fname: "Holt",
  lname: "Tine",
  email: "htine0@1688.com",
  tell: "111-270-2230",
  line: "Fixflex",
  fool: "A"
}, {
  id: 2,
  fname: "Florry",
  lname: "Pablo",
  email: "fpablo1@360.cn",
  tell: "739-327-6482",
  line: "Wrapsafe",
  fool: "A"
}, {
  id: 3,
  fname: "Valery",
  lname: "Isakovitch",
  email: "visakovitch2@shutterfly.com",
  tell: "351-821-8860",
  line: "Trippledex",
  fool: "A"
}, {
  id: 4,
  fname: "Ame",
  lname: "Lampart",
  email: "alampart3@exblog.jp",
  tell: "648-195-8752",
  line: "Holdlamis",
  fool: "A"
}, {
  id: 5,
  fname: "Tan",
  lname: "Yele",
  email: "tyele4@yahoo.com",
  tell: "728-928-0531",
  line: "Holdlamis",
  fool: "A"
}, {
  id: 6,
  fname: "Helaine",
  lname: "McDade",
  email: "hmcdade5@mapquest.com",
  tell: "456-374-1645",
  line: "Otcom",
  fool: "A"
}, {
  id: 7,
  fname: "Karmen",
  lname: "Wright",
  email: "kwright6@digg.com",
  tell: "576-196-0656",
  line: "Job",
  fool: "A"
}, {
  id: 8,
  fname: "Elsa",
  lname: "Gilhool",
  email: "egilhool7@foxnews.com",
  tell: "163-320-8246",
  line: "It",
  fool: "A"
}, {
  id: 9,
  fname: "Gayel",
  lname: "Grasha",
  email: "ggrasha8@wisc.edu",
  tell: "954-606-6969",
  line: "Zontrax",
  fool: "A"
}, {
  id: 10,
  fname: "Manda",
  lname: "Plowell",
  email: "mplowell9@cdc.gov",
  tell: "502-724-5998",
  line: "Trippledex",
  fool: "A"
}];
// EXTERNAL MODULE: ./styles/page/airDetailPage.module.scss
var airDetailPage_module = __webpack_require__(2684);
var airDetailPage_module_default = /*#__PURE__*/__webpack_require__.n(airDetailPage_module);
// EXTERNAL MODULE: ./utills/fecthApi.ts
var fecthApi = __webpack_require__(8162);
;// CONCATENATED MODULE: external "cookie"
const external_cookie_namespaceObject = require("cookie");
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_namespaceObject);
;// CONCATENATED MODULE: ./pages/user/air/[air].tsx










const AirDetailPage = ({
  dataAitList
}) => {
  const router = (0,router_.useRouter)();
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)();
  const {
    0: dataFormLeft,
    1: setDataFormLeft
  } = (0,external_react_.useState)([]);
  const {
    0: dataFormRight,
    1: setDataFormRight
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    if (router) {
      const id = router.query.air;
      const findUser = usersData.find(item => item.id === parseInt(id));
      setData(findUser);
    }

    if (dataAitList) {
      const findLeft = dataAitList.filter(item => item.device_type_id === 1);
      const findRight = dataAitList.filter(item => item.device_type_id === 2);

      if (findLeft && findRight) {
        setDataFormLeft(findLeft);
        setDataFormRight(findRight);
      }
    }
  }, [router, dataAitList]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "box_black",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (airDetailPage_module_default()).title,
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/svg/follwer.svg",
        width: 30,
        className: "icon",
        alt: ""
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 AIR"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (airDetailPage_module_default()).box_grid,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(airRegisteFormr, {
          title: "Registered points",
          data: dataFormLeft
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(airRegisteFormr, {
          title: "Un Registered points",
          data: dataFormRight
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        textAlign: "center"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "but_gray",
        children: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"
      })
    })]
  });
};

/* harmony default export */ const _air_ = (AirDetailPage);
const getServerSideProps = async ({
  req,
  res
}) => {
  const myCookie = external_cookie_default().parse(req && req.headers.cookie || "");
  const token = myCookie.token;
  const ariList = await (0,fecthApi/* fetchApi */.a)(`${fecthApi/* baseUrl */.F}/devices?building_id=38`, token);
  return {
    props: {
      dataAitList: ariList
    }
  };
};

/***/ }),

/***/ 5275:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "airRegisterForm_title__1E3v1",
	"box_form": "airRegisterForm_box_form__2v5bv",
	"form_item": "airRegisterForm_form_item__2e2di"
};


/***/ }),

/***/ 2684:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "airDetailPage_title__1B9KU",
	"box_grid": "airDetailPage_box_grid__MHSLY"
};


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

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,675,857,931,968], () => (__webpack_exec__(1514)));
module.exports = __webpack_exports__;

})();