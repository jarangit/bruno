/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/addUser",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./styles/form/addUserForm.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./styles/form/addUserForm.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".addUserForm_main__3ew9f {\\n  width: 100%;\\n  margin-top: 30px;\\n  display: -webkit-flex;\\n  display: flex;\\n  -webkit-justify-content: space-between;\\n          justify-content: space-between;\\n  -webkit-align-items: center;\\n          align-items: center;\\n  grid-gap: 30px;\\n  gap: 30px;\\n}\\n.addUserForm_main__3ew9f div {\\n  width: 100%;\\n  padding: 20px;\\n  min-height: 250px;\\n}\\n.addUserForm_main__3ew9f div:first-child {\\n  background-color: #262626;\\n  border-radius: 20px;\\n}\\n\\n.addUserForm_l_form__2glRh, .addUserForm_r_form__2qtIc {\\n  display: -webkit-flex;\\n  display: flex;\\n  -webkit-flex-direction: column;\\n          flex-direction: column;\\n  grid-gap: 20px;\\n  gap: 20px;\\n}\\n.addUserForm_l_form__2glRh label, .addUserForm_r_form__2qtIc label {\\n  display: -webkit-flex;\\n  display: flex;\\n  -webkit-justify-content: space-between;\\n          justify-content: space-between;\\n}\\n.addUserForm_l_form__2glRh label input, .addUserForm_r_form__2qtIc label input,\\n.addUserForm_l_form__2glRh label select,\\n.addUserForm_r_form__2qtIc label select {\\n  width: 150px;\\n}\\n.addUserForm_l_form__2glRh label input, .addUserForm_r_form__2qtIc label input {\\n  border-radius: 50px;\\n}\\n\\n.addUserForm_r_form__2qtIc label input {\\n  border-radius: 3px;\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .addUserForm_main__3ew9f {\\n    -webkit-flex-wrap: wrap;\\n            flex-wrap: wrap;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://addUserForm.module.scss\",\"webpack://../_mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,WAAA;EACA,gBAAA;EACA,qBAAA;EAAA,aAAA;EACA,sCAAA;UAAA,8BAAA;EACA,2BAAA;UAAA,mBAAA;EACA,cAAA;EAAA,SAAA;AADF;AAGE;EACE,WAAA;EACA,aAAA;EACA,iBAAA;AADJ;AAIE;EACE,yBCda;EDeb,mBAAA;AAFJ;;AAMA;EACE,qBAAA;EAAA,aAAA;EACA,8BAAA;UAAA,sBAAA;EACA,cAAA;EAAA,SAAA;AAHF;AAKE;EACE,qBAAA;EAAA,aAAA;EACA,sCAAA;UAAA,8BAAA;AAHJ;AAKI;;;EAEE,YAAA;AAFN;AAKI;EACE,mBAAA;AAHN;;AAYI;EACE,kBAAA;AATN;;AAcA;EACE;IACE,uBAAA;YAAA,eAAA;EAXF;AACF\",\"sourcesContent\":[\"@import \\\"mixins\\\";\\n\\n.main {\\n  width: 100%;\\n  margin-top: 30px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 30px;\\n\\n  div {\\n    width: 100%;\\n    padding: 20px;\\n    min-height: 250px;\\n  }\\n\\n  div:first-child {\\n    background-color: $color-darkGray;\\n    border-radius: 20px;\\n  }\\n}\\n\\n.l_form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n\\n  label {\\n    display: flex;\\n    justify-content: space-between;\\n\\n    input,\\n    select {\\n      width: 150px;\\n    }\\n\\n    input {\\n      border-radius: 50px;\\n    }\\n  }\\n}\\n\\n.r_form {\\n  @extend .l_form;\\n\\n  label {\\n    input {\\n      border-radius: 3px;\\n    }\\n  }\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .main{\\n    flex-wrap: wrap;\\n  }\\n }\",\"$color-black: rgb(0, 0, 0);\\n$color-white: #ffff;\\n$color-gray: #707070;\\n$color-darkGray: #262626;\\n$color-green: #5FE3A1;\\n$color-sky: #56D9FE;\\n$color-red: #FF4967;\\n$color-orange: #FFA726;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main\": \"addUserForm_main__3ew9f\",\n\t\"l_form\": \"addUserForm_l_form__2glRh\",\n\t\"r_form\": \"addUserForm_r_form__2qtIc\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVs0XSEuL3N0eWxlcy9mb3JtL2FkZFVzZXJGb3JtLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0hBQXlEO0FBQ25HO0FBQ0E7QUFDQSxvRUFBb0UsZ0JBQWdCLHFCQUFxQiwwQkFBMEIsa0JBQWtCLDJDQUEyQywyQ0FBMkMsZ0NBQWdDLGdDQUFnQyxtQkFBbUIsY0FBYyxHQUFHLGdDQUFnQyxnQkFBZ0Isa0JBQWtCLHNCQUFzQixHQUFHLDRDQUE0Qyw4QkFBOEIsd0JBQXdCLEdBQUcsNERBQTRELDBCQUEwQixrQkFBa0IsbUNBQW1DLG1DQUFtQyxtQkFBbUIsY0FBYyxHQUFHLHNFQUFzRSwwQkFBMEIsa0JBQWtCLDJDQUEyQywyQ0FBMkMsR0FBRyxzS0FBc0ssaUJBQWlCLEdBQUcsa0ZBQWtGLHdCQUF3QixHQUFHLDRDQUE0Qyx1QkFBdUIsR0FBRyxnREFBZ0QsOEJBQThCLDhCQUE4Qiw4QkFBOEIsS0FBSyxHQUFHLE9BQU8sb0hBQW9ILFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssT0FBTyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLDRDQUE0QyxXQUFXLGdCQUFnQixxQkFBcUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsY0FBYyxXQUFXLGtCQUFrQixvQkFBb0Isd0JBQXdCLEtBQUssdUJBQXVCLHdDQUF3QywwQkFBMEIsS0FBSyxHQUFHLGFBQWEsa0JBQWtCLDJCQUEyQixjQUFjLGFBQWEsb0JBQW9CLHFDQUFxQyw0QkFBNEIscUJBQXFCLE9BQU8sZUFBZSw0QkFBNEIsT0FBTyxLQUFLLEdBQUcsYUFBYSxvQkFBb0IsYUFBYSxhQUFhLDJCQUEyQixPQUFPLEtBQUssR0FBRyxnREFBZ0QsVUFBVSxzQkFBc0IsS0FBSyxJQUFJLDhCQUE4QixzQkFBc0IsdUJBQXVCLDJCQUEyQix3QkFBd0Isc0JBQXNCLHNCQUFzQix5QkFBeUIscUJBQXFCO0FBQy83RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZm9ybS9hZGRVc2VyRm9ybS5tb2R1bGUuc2Nzcz84YTBjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5hZGRVc2VyRm9ybV9tYWluX18zZXc5ZiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtZ2FwOiAzMHB4O1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG4uYWRkVXNlckZvcm1fbWFpbl9fM2V3OWYgZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbn1cXG4uYWRkVXNlckZvcm1fbWFpbl9fM2V3OWYgZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uYWRkVXNlckZvcm1fbF9mb3JtX18yZ2xSaCwgLmFkZFVzZXJGb3JtX3JfZm9ybV9fMnF0SWMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4uYWRkVXNlckZvcm1fbF9mb3JtX18yZ2xSaCBsYWJlbCwgLmFkZFVzZXJGb3JtX3JfZm9ybV9fMnF0SWMgbGFiZWwge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5hZGRVc2VyRm9ybV9sX2Zvcm1fXzJnbFJoIGxhYmVsIGlucHV0LCAuYWRkVXNlckZvcm1fcl9mb3JtX18ycXRJYyBsYWJlbCBpbnB1dCxcXG4uYWRkVXNlckZvcm1fbF9mb3JtX18yZ2xSaCBsYWJlbCBzZWxlY3QsXFxuLmFkZFVzZXJGb3JtX3JfZm9ybV9fMnF0SWMgbGFiZWwgc2VsZWN0IHtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuLmFkZFVzZXJGb3JtX2xfZm9ybV9fMmdsUmggbGFiZWwgaW5wdXQsIC5hZGRVc2VyRm9ybV9yX2Zvcm1fXzJxdEljIGxhYmVsIGlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi5hZGRVc2VyRm9ybV9yX2Zvcm1fXzJxdEljIGxhYmVsIGlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5hZGRVc2VyRm9ybV9tYWluX18zZXc5ZiB7XFxuICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2FkZFVzZXJGb3JtLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vX21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFBQSxhQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBREo7QUFJRTtFQUNFLHlCQ2RhO0VEZWIsbUJBQUE7QUFGSjs7QUFNQTtFQUNFLHFCQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQUhGO0FBS0U7RUFDRSxxQkFBQTtFQUFBLGFBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FBSEo7QUFLSTs7O0VBRUUsWUFBQTtBQUZOO0FBS0k7RUFDRSxtQkFBQTtBQUhOOztBQVlJO0VBQ0Usa0JBQUE7QUFUTjs7QUFjQTtFQUNFO0lBQ0UsdUJBQUE7WUFBQSxlQUFBO0VBWEY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCJtaXhpbnNcXFwiO1xcblxcbi5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcblxcbiAgZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgfVxcblxcbiAgZGl2OmZpcnN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRhcmtHcmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgfVxcbn1cXG5cXG4ubF9mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcblxcbiAgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGlucHV0LFxcbiAgICBzZWxlY3Qge1xcbiAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgfVxcblxcbiAgICBpbnB1dCB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ucl9mb3JtIHtcXG4gIEBleHRlbmQgLmxfZm9ybTtcXG5cXG4gIGxhYmVsIHtcXG4gICAgaW5wdXQge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLm1haW57XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG4gfVwiLFwiJGNvbG9yLWJsYWNrOiByZ2IoMCwgMCwgMCk7XFxuJGNvbG9yLXdoaXRlOiAjZmZmZjtcXG4kY29sb3ItZ3JheTogIzcwNzA3MDtcXG4kY29sb3ItZGFya0dyYXk6ICMyNjI2MjY7XFxuJGNvbG9yLWdyZWVuOiAjNUZFM0ExO1xcbiRjb2xvci1za3k6ICM1NkQ5RkU7XFxuJGNvbG9yLXJlZDogI0ZGNDk2NztcXG4kY29sb3Itb3JhbmdlOiAjRkZBNzI2O1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1haW5cIjogXCJhZGRVc2VyRm9ybV9tYWluX18zZXc5ZlwiLFxuXHRcImxfZm9ybVwiOiBcImFkZFVzZXJGb3JtX2xfZm9ybV9fMmdsUmhcIixcblx0XCJyX2Zvcm1cIjogXCJhZGRVc2VyRm9ybV9yX2Zvcm1fXzJxdEljXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./styles/form/addUserForm.module.scss\n");

/***/ })

});