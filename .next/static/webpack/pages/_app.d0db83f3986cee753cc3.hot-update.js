"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/globals.css":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/globals.css ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Prompt&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#383838), color-stop(73%, #171717));\\n  background-image: -webkit-linear-gradient(top, #383838 0%, #171717 73%);\\n  background-image: linear-gradient(180deg, #383838 0%, #171717 73%);\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  /* height: 100%; */\\n  color: white;\\n  font-family: \\\"Prompt\\\", sans-serif;\\n}\\nbutton {\\n  font-family: \\\"Prompt\\\", sans-serif;\\n  cursor: pointer;\\n}\\na {\\n  color: inherit;\\n  text-decoration: none;\\n  font-size: normal;\\n  padding: 3px 10px;\\n}\\n\\n* {\\n  -moz-box-sizing: border-box;\\n       box-sizing: border-box;\\n}\\nh1,\\nh2,\\nh3,\\nh4,\\np {\\n  margin: 0;\\n  padding: 0;\\n  font-weight: 400;\\n}\\nh1 {\\n  font-size: 32px;\\n}\\nh2 {\\n  font-size: 24px;\\n}\\nh3 {\\n  font-size: 20px;\\n}\\np {\\n  font-size: 16px;\\n}\\ninput,\\nselect {\\n  border: none;\\n  outline: none;\\n  font-family: \\\"Prompt\\\", sans-serif;\\n}\\nth,\\ntd {\\n  font-weight: normal;\\n}\\ninput::-webkit-input-placeholder {\\n  color: rgb(187, 187, 187);\\n}\\ninput::-moz-placeholder {\\n  color: rgb(187, 187, 187);\\n}\\ninput:-ms-input-placeholder {\\n  color: rgb(187, 187, 187);\\n}\\ninput::placeholder {\\n  color: rgb(187, 187, 187);\\n}\\ninput,\\nselect:focus {\\n  border: none;\\n}\\n.container {\\n  max-width: 1200px;\\n  margin: 0 auto;\\n  padding: 0 20px;\\n}\\n.icon {\\n  margin: 0 10px;\\n  vertical-align: middle;\\n  cursor: pointer;\\n}\\n\\n.map {\\n  border: 10px solid #707070;\\n  border-radius: 20px;\\n  overflow: hidden;\\n}\\nmain {\\n  min-height: 100vh;\\n}\\n.box_black {\\n  background-color: black;\\n  border-radius: 20px;\\n  padding: 5%;\\n  margin-bottom: 50px;\\n}\\n.mainInput {\\n  background-color: #707070;\\n  height: 30px;\\n  color: white;\\n  border-radius: 5px;\\n  padding: 10px;\\n  overflow: hidden;\\n  resize: none;\\n  outline: none;\\n  border: none;\\n}\\n\\n.mainTextArea {\\n  background-color: #707070;\\n  color: white;\\n  border-radius: 5px;\\n  padding: 10px;\\n  overflow: hidden;\\n  resize: none;\\n  outline: none;\\n  border: none;\\n}\\n.but_gray {\\n  background-color: #707070;\\n  color: white;\\n  border-radius: 50px;\\n  border: none;\\n  min-width: 100px;\\n  cursor: pointer;\\n  height: 30px;\\n}\\n.but_black {\\n  background-color: black;\\n  color: white;\\n  border-radius: 50px;\\n  border: none;\\n  min-width: 100px;\\n  cursor: pointer;\\n  height: 30px;\\n  border: 1px solid white;\\n}\\nfigure {\\n  margin: 0;\\n}\\n\\n.selectGray {\\n  background-color: #707070;\\n  color: white;\\n  border-radius: 50px;\\n  padding: 5px 10px;\\n}\\n\\n.selector_gray {\\n  background-color: #707070;\\n  color: white;\\n  border: none;\\n  min-width: 100px;\\n  border-radius: 50px;\\n  padding: 3px 10px;\\n  height: 30px;\\n}\\n\\n.but_green {\\n  border-radius: 50px;\\n  color: #5fe3a1;\\n  border: 2px solid #5fe3a1;\\n  background: none;\\n  height: 30px;\\n  width: 80px;\\n}\\n.but_red {\\n  border-radius: 50px;\\n  color: #ff4967;\\n  border: 2px solid #ff4967;\\n  background: none;\\n  height: 30px;\\n  width: 80px;\\n}\\n.but_blue {\\n  border-radius: 50px;\\n  color: #56d9fe;\\n  border: 2px solid #56d9fe;\\n  background: none;\\n  height: 30px;\\n  width: 80px;\\n}\\n\\n/* The container */\\n.container_label {\\n  display: block;\\n  position: relative;\\n  cursor: pointer;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n}\\n\\n/* Hide the browser's default checkbox */\\n.container_label input {\\n  /* position: absolute; */\\n  opacity: 0;\\n  cursor: pointer;\\n  height: 0;\\n  width: 0;\\n}\\n\\n/* Create a custom checkbox */\\n.checkmark {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  height: 25px;\\n  width: 25px;\\n  background-color: black;\\n  border-radius: 5px;\\n}\\n\\n/* On mouse-over, add a grey background color */\\n.container_label:hover input ~ .checkmark {\\n  background-color: black;\\n}\\n\\n/* When the checkbox is checked, add a blue background */\\n.container_label input:checked ~ .checkmark {\\n  background-color: black;\\n}\\n.container_label input:disabled ~ .checkmark {\\n  background-color: #707070;\\n  border: 2px solid #929292;\\n}\\n.container_label input:disabled ~ .checkmark:after {\\n  top: 2px;\\n  left: 7px;\\n  border: solid #929292;\\n  border-width: 0 3px 3px 0;\\n  -webkit-transform: rotate(45deg);\\n  transform: rotate(45deg);\\n}\\n\\n/* Create the checkmark/indicator (hidden when not checked) */\\n.checkmark:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  display: none;\\n}\\n\\n/* Show the checkmark when checked */\\n.container_label input:checked ~ .checkmark:after {\\n  display: block;\\n}\\n\\n/* Style the checkmark/indicator */\\n.container_label .checkmark:after {\\n  left: 9px;\\n  top: 5px;\\n  width: 5px;\\n  height: 10px;\\n  border: solid white;\\n  border-width: 0 3px 3px 0;\\n  -webkit-transform: rotate(45deg);\\n  transform: rotate(45deg);\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Prompt&display=swap\\\");\\nhtml,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-image: linear-gradient(180deg, #383838 0%, #171717 73%);\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  /* height: 100%; */\\n  color: white;\\n  font-family: \\\"Prompt\\\", sans-serif;\\n}\\nbutton {\\n  font-family: \\\"Prompt\\\", sans-serif;\\n  cursor: pointer;\\n}\\na {\\n  color: inherit;\\n  text-decoration: none;\\n  font-size: normal;\\n  padding: 3px 10px;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\nh1,\\nh2,\\nh3,\\nh4,\\np {\\n  margin: 0;\\n  padding: 0;\\n  font-weight: 400;\\n}\\nh1 {\\n  font-size: 32px;\\n}\\nh2 {\\n  font-size: 24px;\\n}\\nh3 {\\n  font-size: 20px;\\n}\\np {\\n  font-size: 16px;\\n}\\ninput,\\nselect {\\n  border: none;\\n  outline: none;\\n  font-family: \\\"Prompt\\\", sans-serif;\\n}\\nth,\\ntd {\\n  font-weight: normal;\\n}\\ninput::placeholder {\\n  color: rgb(187, 187, 187);\\n}\\ninput,\\nselect:focus {\\n  border: none;\\n}\\n.container {\\n  max-width: 1200px;\\n  margin: 0 auto;\\n  padding: 0 20px;\\n}\\n.icon {\\n  margin: 0 10px;\\n  vertical-align: middle;\\n  cursor: pointer;\\n}\\n\\n.map {\\n  border: 10px solid #707070;\\n  border-radius: 20px;\\n  overflow: hidden;\\n}\\nmain {\\n  min-height: 100vh;\\n}\\n.box_black {\\n  background-color: black;\\n  border-radius: 20px;\\n  padding: 5%;\\n  margin-bottom: 50px;\\n}\\n.mainInput {\\n  background-color: #707070;\\n  height: 30px;\\n  color: white;\\n  border-radius: 5px;\\n  padding: 10px;\\n  overflow: hidden;\\n  resize: none;\\n  outline: none;\\n  border: none;\\n}\\n\\n.mainTextArea {\\n  background-color: #707070;\\n  color: white;\\n  border-radius: 5px;\\n  padding: 10px;\\n  overflow: hidden;\\n  resize: none;\\n  outline: none;\\n  border: none;\\n}\\n.but_gray {\\n  background-color: #707070;\\n  color: white;\\n  border-radius: 50px;\\n  border: none;\\n  min-width: 100px;\\n  cursor: pointer;\\n  height: 30px;\\n}\\n.but_black {\\n  background-color: black;\\n  color: white;\\n  border-radius: 50px;\\n  border: none;\\n  min-width: 100px;\\n  cursor: pointer;\\n  height: 30px;\\n  border: 1px solid white;\\n}\\nfigure {\\n  margin: 0;\\n}\\n\\n.selectGray {\\n  background-color: #707070;\\n  color: white;\\n  border-radius: 50px;\\n  padding: 5px 10px;\\n}\\n\\n.selector_gray {\\n  background-color: #707070;\\n  color: white;\\n  border: none;\\n  min-width: 100px;\\n  border-radius: 50px;\\n  padding: 3px 10px;\\n  height: 30px;\\n}\\n\\n.but_green {\\n  border-radius: 50px;\\n  color: #5fe3a1;\\n  border: 2px solid #5fe3a1;\\n  background: none;\\n  height: 30px;\\n  width: 80px;\\n}\\n.but_red {\\n  border-radius: 50px;\\n  color: #ff4967;\\n  border: 2px solid #ff4967;\\n  background: none;\\n  height: 30px;\\n  width: 80px;\\n}\\n.but_blue {\\n  border-radius: 50px;\\n  color: #56d9fe;\\n  border: 2px solid #56d9fe;\\n  background: none;\\n  height: 30px;\\n  width: 80px;\\n}\\n\\n/* The container */\\n.container_label {\\n  display: block;\\n  position: relative;\\n  cursor: pointer;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n}\\n\\n/* Hide the browser's default checkbox */\\n.container_label input {\\n  /* position: absolute; */\\n  opacity: 0;\\n  cursor: pointer;\\n  height: 0;\\n  width: 0;\\n}\\n\\n/* Create a custom checkbox */\\n.checkmark {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  height: 25px;\\n  width: 25px;\\n  background-color: black;\\n  border-radius: 5px;\\n}\\n\\n/* On mouse-over, add a grey background color */\\n.container_label:hover input ~ .checkmark {\\n  background-color: black;\\n}\\n\\n/* When the checkbox is checked, add a blue background */\\n.container_label input:checked ~ .checkmark {\\n  background-color: black;\\n}\\n.container_label input:disabled ~ .checkmark {\\n  background-color: #707070;\\n  border: 2px solid #929292;\\n}\\n.container_label input:disabled ~ .checkmark:after {\\n  top: 2px;\\n  left: 7px;\\n  border: solid #929292;\\n  border-width: 0 3px 3px 0;\\n  -webkit-transform: rotate(45deg);\\n  -ms-transform: rotate(45deg);\\n  transform: rotate(45deg);\\n}\\n\\n/* Create the checkmark/indicator (hidden when not checked) */\\n.checkmark:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  display: none;\\n}\\n\\n/* Show the checkmark when checked */\\n.container_label input:checked ~ .checkmark:after {\\n  display: block;\\n}\\n\\n/* Style the checkmark/indicator */\\n.container_label .checkmark:after {\\n  left: 9px;\\n  top: 5px;\\n  width: 5px;\\n  height: 10px;\\n  border: solid white;\\n  border-width: 0 3px 3px 0;\\n  -webkit-transform: rotate(45deg);\\n  -ms-transform: rotate(45deg);\\n  transform: rotate(45deg);\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzZdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzZdLnVzZVsyXSEuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMrRjtBQUMvRiw4QkFBOEIseUZBQTJCO0FBQ3pELG9IQUFvSDtBQUNwSDtBQUNBLHVEQUF1RCxlQUFlLGNBQWMsK0dBQStHLDRFQUE0RSx1RUFBdUUsMkJBQTJCLGlDQUFpQyxxQkFBcUIsbUJBQW1CLHdDQUF3QyxHQUFHLFVBQVUsd0NBQXdDLG9CQUFvQixHQUFHLEtBQUssbUJBQW1CLDBCQUEwQixzQkFBc0Isc0JBQXNCLEdBQUcsT0FBTyxnQ0FBZ0MsZ0NBQWdDLEdBQUcseUJBQXlCLGNBQWMsZUFBZSxxQkFBcUIsR0FBRyxNQUFNLG9CQUFvQixHQUFHLE1BQU0sb0JBQW9CLEdBQUcsTUFBTSxvQkFBb0IsR0FBRyxLQUFLLG9CQUFvQixHQUFHLGtCQUFrQixpQkFBaUIsa0JBQWtCLHdDQUF3QyxHQUFHLFdBQVcsd0JBQXdCLEdBQUcsb0NBQW9DLDhCQUE4QixHQUFHLDJCQUEyQiw4QkFBOEIsR0FBRywrQkFBK0IsOEJBQThCLEdBQUcsc0JBQXNCLDhCQUE4QixHQUFHLHdCQUF3QixpQkFBaUIsR0FBRyxjQUFjLHNCQUFzQixtQkFBbUIsb0JBQW9CLEdBQUcsU0FBUyxtQkFBbUIsMkJBQTJCLG9CQUFvQixHQUFHLFVBQVUsK0JBQStCLHdCQUF3QixxQkFBcUIsR0FBRyxRQUFRLHNCQUFzQixHQUFHLGNBQWMsNEJBQTRCLHdCQUF3QixnQkFBZ0Isd0JBQXdCLEdBQUcsY0FBYyw4QkFBOEIsaUJBQWlCLGlCQUFpQix1QkFBdUIsa0JBQWtCLHFCQUFxQixpQkFBaUIsa0JBQWtCLGlCQUFpQixHQUFHLG1CQUFtQiw4QkFBOEIsaUJBQWlCLHVCQUF1QixrQkFBa0IscUJBQXFCLGlCQUFpQixrQkFBa0IsaUJBQWlCLEdBQUcsYUFBYSw4QkFBOEIsaUJBQWlCLHdCQUF3QixpQkFBaUIscUJBQXFCLG9CQUFvQixpQkFBaUIsR0FBRyxjQUFjLDRCQUE0QixpQkFBaUIsd0JBQXdCLGlCQUFpQixxQkFBcUIsb0JBQW9CLGlCQUFpQiw0QkFBNEIsR0FBRyxVQUFVLGNBQWMsR0FBRyxpQkFBaUIsOEJBQThCLGlCQUFpQix3QkFBd0Isc0JBQXNCLEdBQUcsb0JBQW9CLDhCQUE4QixpQkFBaUIsaUJBQWlCLHFCQUFxQix3QkFBd0Isc0JBQXNCLGlCQUFpQixHQUFHLGdCQUFnQix3QkFBd0IsbUJBQW1CLDhCQUE4QixxQkFBcUIsaUJBQWlCLGdCQUFnQixHQUFHLFlBQVksd0JBQXdCLG1CQUFtQiw4QkFBOEIscUJBQXFCLGlCQUFpQixnQkFBZ0IsR0FBRyxhQUFhLHdCQUF3QixtQkFBbUIsOEJBQThCLHFCQUFxQixpQkFBaUIsZ0JBQWdCLEdBQUcsMkNBQTJDLG1CQUFtQix1QkFBdUIsb0JBQW9CLDhCQUE4QiwyQkFBMkIsMEJBQTBCLHNCQUFzQixHQUFHLHVFQUF1RSwyQkFBMkIsaUJBQWlCLG9CQUFvQixjQUFjLGFBQWEsR0FBRyxnREFBZ0QsdUJBQXVCLFdBQVcsYUFBYSxpQkFBaUIsZ0JBQWdCLDRCQUE0Qix1QkFBdUIsR0FBRyxpR0FBaUcsNEJBQTRCLEdBQUcsNEdBQTRHLDRCQUE0QixHQUFHLGdEQUFnRCw4QkFBOEIsOEJBQThCLEdBQUcsc0RBQXNELGFBQWEsY0FBYywwQkFBMEIsOEJBQThCLHFDQUFxQyw2QkFBNkIsR0FBRyxzRkFBc0Ysa0JBQWtCLHVCQUF1QixrQkFBa0IsR0FBRyw4RkFBOEYsbUJBQW1CLEdBQUcsNEVBQTRFLGNBQWMsYUFBYSxlQUFlLGlCQUFpQix3QkFBd0IsOEJBQThCLHFDQUFxQyw2QkFBNkIsR0FBRyxTQUFTLG9GQUFvRixVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLFNBQVMsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlB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ZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJvbXB0JmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjMzgzODM4KSwgY29sb3Itc3RvcCg3MyUsICMxNzE3MTcpKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzM4MzgzOCAwJSwgIzE3MTcxNyA3MyUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzM4MzgzOCAwJSwgIzE3MTcxNyA3MyUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlByb21wdFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIlByb21wdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IG5vcm1hbDtcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcbn1cXG5cXG4qIHtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuaDEge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5oMiB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxucCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQcm9tcHRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG50aCxcXG50ZCB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xcbn1cXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xcbn1cXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcXG59XFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2IoMTg3LCAxODcsIDE4Nyk7XFxufVxcbmlucHV0LFxcbnNlbGVjdDpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuLmljb24ge1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFwIHtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjNzA3MDcwO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbm1haW4ge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbi5ib3hfYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogNSU7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4ubWFpbklucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5tYWluVGV4dEFyZWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcmVzaXplOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmJ1dF9ncmF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuLmJ1dF9ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zZWxlY3RHcmF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbi5zZWxlY3Rvcl9ncmF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uYnV0X2dyZWVuIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBjb2xvcjogIzVmZTNhMTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1ZmUzYTE7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcbi5idXRfcmVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBjb2xvcjogI2ZmNDk2NztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjQ5Njc7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcbi5idXRfYmx1ZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgY29sb3I6ICM1NmQ5ZmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNTZkOWZlO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4vKiBUaGUgY29udGFpbmVyICovXFxuLmNvbnRhaW5lcl9sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXFxuLmNvbnRhaW5lcl9sYWJlbCBpbnB1dCB7XFxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xcbi5jaGVja21hcmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cXG4uY29udGFpbmVyX2xhYmVsOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXFxuLmNvbnRhaW5lcl9sYWJlbCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLmNvbnRhaW5lcl9sYWJlbCBpbnB1dDpkaXNhYmxlZCB+IC5jaGVja21hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MjkyOTI7XFxufVxcbi5jb250YWluZXJfbGFiZWwgaW5wdXQ6ZGlzYWJsZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gIHRvcDogMnB4O1xcbiAgbGVmdDogN3B4O1xcbiAgYm9yZGVyOiBzb2xpZCAjOTI5MjkyO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xcbi5jaGVja21hcms6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXFxuLmNvbnRhaW5lcl9sYWJlbCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cXG4uY29udGFpbmVyX2xhYmVsIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgbGVmdDogOXB4O1xcbiAgdG9wOiA1cHg7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTs7RUFFRSxVQUFVO0VBQ1YsU0FBUztFQUNULDBHQUFrRTtFQUFsRSx1RUFBa0U7RUFBbEUsa0VBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBc0I7T0FBdEIsc0JBQXNCO0FBQ3hCO0FBQ0E7Ozs7O0VBS0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlDQUFpQztBQUNuQztBQUNBOztFQUVFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRkE7RUFDRSx5QkFBeUI7QUFDM0I7QUFGQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUZBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBLHdDQUF3QztBQUN4QztFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBLCtDQUErQztBQUMvQztFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSx3REFBd0Q7QUFDeEQ7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFFaEMsd0JBQXdCO0FBQzFCOztBQUVBLDZEQUE2RDtBQUM3RDtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGNBQWM7QUFDaEI7O0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0NBQWdDO0VBRWhDLHdCQUF3QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qcm9tcHQmZGlzcGxheT1zd2FwXFxcIik7XFxuaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMzgzODM4IDAlLCAjMTcxNzE3IDczJSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUHJvbXB0XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUHJvbXB0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogbm9ybWFsO1xcbiAgcGFkZGluZzogM3B4IDEwcHg7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuaDEge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5oMiB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxucCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQcm9tcHRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG50aCxcXG50ZCB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcXG59XFxuaW5wdXQsXFxuc2VsZWN0OmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG4uaWNvbiB7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYXAge1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICM3MDcwNzA7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxubWFpbiB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuLmJveF9ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiA1JTtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcbi5tYWluSW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcmVzaXplOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm1haW5UZXh0QXJlYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICByZXNpemU6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4uYnV0X2dyYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4uYnV0X2JsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnNlbGVjdEdyYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuLnNlbGVjdG9yX2dyYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogM3B4IDEwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5idXRfZ3JlZW4ge1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGNvbG9yOiAjNWZlM2ExO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzVmZTNhMTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogODBweDtcXG59XFxuLmJ1dF9yZWQge1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGNvbG9yOiAjZmY0OTY3O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmNDk2NztcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogODBweDtcXG59XFxuLmJ1dF9ibHVlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBjb2xvcjogIzU2ZDlmZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NmQ5ZmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi8qIFRoZSBjb250YWluZXIgKi9cXG4uY29udGFpbmVyX2xhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4uY29udGFpbmVyX2xhYmVsIGlucHV0IHtcXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuLmNoZWNrbWFyayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xcbi5jb250YWluZXJfbGFiZWw6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cXG4uY29udGFpbmVyX2xhYmVsIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uY29udGFpbmVyX2xhYmVsIGlucHV0OmRpc2FibGVkIH4gLmNoZWNrbWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzkyOTI5MjtcXG59XFxuLmNvbnRhaW5lcl9sYWJlbCBpbnB1dDpkaXNhYmxlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xcbiAgdG9wOiAycHg7XFxuICBsZWZ0OiA3cHg7XFxuICBib3JkZXI6IHNvbGlkICM5MjkyOTI7XFxuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xcbi5jaGVja21hcms6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXFxuLmNvbnRhaW5lcl9sYWJlbCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cXG4uY29udGFpbmVyX2xhYmVsIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgbGVmdDogOXB4O1xcbiAgdG9wOiA1cHg7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/globals.css\n");

/***/ })

});