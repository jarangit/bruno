/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/add_user",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./styles/form/addUserForm.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./styles/form/addUserForm.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".addUserForm_main__3ew9f {\\n  width: 100%;\\n  margin-top: 30px;\\n  display: -webkit-flex;\\n  display: flex;\\n  -webkit-justify-content: space-between;\\n          justify-content: space-between;\\n  -webkit-align-items: center;\\n          align-items: center;\\n  grid-gap: 30px;\\n  gap: 30px;\\n}\\n.addUserForm_main__3ew9f div {\\n  width: 100%;\\n  padding: 20px;\\n  min-height: 250px;\\n}\\n.addUserForm_main__3ew9f div:first-child {\\n  background-color: #262626;\\n  border-radius: 20px;\\n}\\n\\n.addUserForm_l_form__2glRh, .addUserForm_r_form__2qtIc {\\n  display: -webkit-flex;\\n  display: flex;\\n  -webkit-flex-direction: column;\\n          flex-direction: column;\\n  grid-gap: 20px;\\n  gap: 20px;\\n}\\n.addUserForm_l_form__2glRh label, .addUserForm_r_form__2qtIc label {\\n  display: -webkit-flex;\\n  display: flex;\\n  -webkit-justify-content: space-between;\\n          justify-content: space-between;\\n}\\n.addUserForm_l_form__2glRh label input, .addUserForm_r_form__2qtIc label input,\\n.addUserForm_l_form__2glRh label select,\\n.addUserForm_r_form__2qtIc label select {\\n  width: 150px;\\n}\\n.addUserForm_l_form__2glRh label input, .addUserForm_r_form__2qtIc label input {\\n  border-radius: 50px;\\n}\\n\\n.addUserForm_r_form__2qtIc label input {\\n  width: 200px;\\n  border-radius: 3px;\\n}\\n\\n@media only screen and (max-width: 414px) {\\n  .addUserForm_main__3ew9f {\\n    -webkit-flex-wrap: wrap;\\n            flex-wrap: wrap;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://addUserForm.module.scss\",\"webpack://../_mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,WAAA;EACA,gBAAA;EACA,qBAAA;EAAA,aAAA;EACA,sCAAA;UAAA,8BAAA;EACA,2BAAA;UAAA,mBAAA;EACA,cAAA;EAAA,SAAA;AADF;AAGE;EACE,WAAA;EACA,aAAA;EACA,iBAAA;AADJ;AAIE;EACE,yBCda;EDeb,mBAAA;AAFJ;;AAMA;EACE,qBAAA;EAAA,aAAA;EACA,8BAAA;UAAA,sBAAA;EACA,cAAA;EAAA,SAAA;AAHF;AAKE;EACE,qBAAA;EAAA,aAAA;EACA,sCAAA;UAAA,8BAAA;AAHJ;AAKI;;;EAEE,YAAA;AAFN;AAKI;EACE,mBAAA;AAHN;;AAYI;EACE,YAAA;EACA,kBAAA;AATN;;AAcA;EACE;IACE,uBAAA;YAAA,eAAA;EAXF;AACF\",\"sourcesContent\":[\"@import \\\"mixins\\\";\\n\\n.main {\\n  width: 100%;\\n  margin-top: 30px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 30px;\\n\\n  div {\\n    width: 100%;\\n    padding: 20px;\\n    min-height: 250px;\\n  }\\n\\n  div:first-child {\\n    background-color: $color-darkGray;\\n    border-radius: 20px;\\n  }\\n}\\n\\n.l_form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n\\n  label {\\n    display: flex;\\n    justify-content: space-between;\\n\\n    input,\\n    select {\\n      width: 150px;\\n    }\\n\\n    input {\\n      border-radius: 50px;\\n    }\\n  }\\n}\\n\\n.r_form {\\n  @extend .l_form;\\n\\n  label {\\n    input {\\n      width: 200px;\\n      border-radius: 3px;\\n    }\\n  }\\n}\\n\\n@media only screen and (max-width: 414px) {\\n  .main{\\n    flex-wrap: wrap;\\n  }\\n }\",\"$color-black: rgb(0, 0, 0);\\n$color-white: #ffff;\\n$color-gray: #707070;\\n$color-darkGray: #262626;\\n$color-green: #5FE3A1;\\n$color-sky: #56D9FE;\\n$color-red: #FF4967;\\n$color-orange: #FFA726;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main\": \"addUserForm_main__3ew9f\",\n\t\"l_form\": \"addUserForm_l_form__2glRh\",\n\t\"r_form\": \"addUserForm_r_form__2qtIc\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVs0XSEuL3N0eWxlcy9mb3JtL2FkZFVzZXJGb3JtLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0hBQXlEO0FBQ25HO0FBQ0E7QUFDQSxvRUFBb0UsZ0JBQWdCLHFCQUFxQiwwQkFBMEIsa0JBQWtCLDJDQUEyQywyQ0FBMkMsZ0NBQWdDLGdDQUFnQyxtQkFBbUIsY0FBYyxHQUFHLGdDQUFnQyxnQkFBZ0Isa0JBQWtCLHNCQUFzQixHQUFHLDRDQUE0Qyw4QkFBOEIsd0JBQXdCLEdBQUcsNERBQTRELDBCQUEwQixrQkFBa0IsbUNBQW1DLG1DQUFtQyxtQkFBbUIsY0FBYyxHQUFHLHNFQUFzRSwwQkFBMEIsa0JBQWtCLDJDQUEyQywyQ0FBMkMsR0FBRyxzS0FBc0ssaUJBQWlCLEdBQUcsa0ZBQWtGLHdCQUF3QixHQUFHLDRDQUE0QyxpQkFBaUIsdUJBQXVCLEdBQUcsK0NBQStDLDhCQUE4Qiw4QkFBOEIsOEJBQThCLEtBQUssR0FBRyxPQUFPLG9IQUFvSCxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLE9BQU8sVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLDRDQUE0QyxXQUFXLGdCQUFnQixxQkFBcUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsY0FBYyxXQUFXLGtCQUFrQixvQkFBb0Isd0JBQXdCLEtBQUssdUJBQXVCLHdDQUF3QywwQkFBMEIsS0FBSyxHQUFHLGFBQWEsa0JBQWtCLDJCQUEyQixjQUFjLGFBQWEsb0JBQW9CLHFDQUFxQyw0QkFBNEIscUJBQXFCLE9BQU8sZUFBZSw0QkFBNEIsT0FBTyxLQUFLLEdBQUcsYUFBYSxvQkFBb0IsYUFBYSxhQUFhLHFCQUFxQiwyQkFBMkIsT0FBTyxLQUFLLEdBQUcsK0NBQStDLFVBQVUsc0JBQXNCLEtBQUssSUFBSSw4QkFBOEIsc0JBQXNCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHNCQUFzQixzQkFBc0IseUJBQXlCLHFCQUFxQjtBQUM3K0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2Zvcm0vYWRkVXNlckZvcm0ubW9kdWxlLnNjc3M/OGEwYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYWRkVXNlckZvcm1fbWFpbl9fM2V3OWYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWdhcDogMzBweDtcXG4gIGdhcDogMzBweDtcXG59XFxuLmFkZFVzZXJGb3JtX21haW5fXzNldzlmIGRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG59XFxuLmFkZFVzZXJGb3JtX21haW5fXzNldzlmIGRpdjpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmFkZFVzZXJGb3JtX2xfZm9ybV9fMmdsUmgsIC5hZGRVc2VyRm9ybV9yX2Zvcm1fXzJxdEljIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBncmlkLWdhcDogMjBweDtcXG4gIGdhcDogMjBweDtcXG59XFxuLmFkZFVzZXJGb3JtX2xfZm9ybV9fMmdsUmggbGFiZWwsIC5hZGRVc2VyRm9ybV9yX2Zvcm1fXzJxdEljIGxhYmVsIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uYWRkVXNlckZvcm1fbF9mb3JtX18yZ2xSaCBsYWJlbCBpbnB1dCwgLmFkZFVzZXJGb3JtX3JfZm9ybV9fMnF0SWMgbGFiZWwgaW5wdXQsXFxuLmFkZFVzZXJGb3JtX2xfZm9ybV9fMmdsUmggbGFiZWwgc2VsZWN0LFxcbi5hZGRVc2VyRm9ybV9yX2Zvcm1fXzJxdEljIGxhYmVsIHNlbGVjdCB7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcbi5hZGRVc2VyRm9ybV9sX2Zvcm1fXzJnbFJoIGxhYmVsIGlucHV0LCAuYWRkVXNlckZvcm1fcl9mb3JtX18ycXRJYyBsYWJlbCBpbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4uYWRkVXNlckZvcm1fcl9mb3JtX18ycXRJYyBsYWJlbCBpbnB1dCB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcXG4gIC5hZGRVc2VyRm9ybV9tYWluX18zZXc5ZiB7XFxuICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2FkZFVzZXJGb3JtLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vX21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFBQSxhQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBREo7QUFJRTtFQUNFLHlCQ2RhO0VEZWIsbUJBQUE7QUFGSjs7QUFNQTtFQUNFLHFCQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQUhGO0FBS0U7RUFDRSxxQkFBQTtFQUFBLGFBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FBSEo7QUFLSTs7O0VBRUUsWUFBQTtBQUZOO0FBS0k7RUFDRSxtQkFBQTtBQUhOOztBQVlJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBVE47O0FBY0E7RUFDRTtJQUNFLHVCQUFBO1lBQUEsZUFBQTtFQVhGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwibWl4aW5zXFxcIjtcXG5cXG4ubWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG5cXG4gIGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIH1cXG5cXG4gIGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kYXJrR3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIH1cXG59XFxuXFxuLmxfZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG5cXG4gIGxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICBpbnB1dCxcXG4gICAgc2VsZWN0IHtcXG4gICAgICB3aWR0aDogMTUwcHg7XFxuICAgIH1cXG5cXG4gICAgaW5wdXQge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnJfZm9ybSB7XFxuICBAZXh0ZW5kIC5sX2Zvcm07XFxuXFxuICBsYWJlbCB7XFxuICAgIGlucHV0IHtcXG4gICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcXG4gIC5tYWlue1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxuIH1cIixcIiRjb2xvci1ibGFjazogcmdiKDAsIDAsIDApO1xcbiRjb2xvci13aGl0ZTogI2ZmZmY7XFxuJGNvbG9yLWdyYXk6ICM3MDcwNzA7XFxuJGNvbG9yLWRhcmtHcmF5OiAjMjYyNjI2O1xcbiRjb2xvci1ncmVlbjogIzVGRTNBMTtcXG4kY29sb3Itc2t5OiAjNTZEOUZFO1xcbiRjb2xvci1yZWQ6ICNGRjQ5Njc7XFxuJGNvbG9yLW9yYW5nZTogI0ZGQTcyNjtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtYWluXCI6IFwiYWRkVXNlckZvcm1fbWFpbl9fM2V3OWZcIixcblx0XCJsX2Zvcm1cIjogXCJhZGRVc2VyRm9ybV9sX2Zvcm1fXzJnbFJoXCIsXG5cdFwicl9mb3JtXCI6IFwiYWRkVXNlckZvcm1fcl9mb3JtX18ycXRJY1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./styles/form/addUserForm.module.scss\n");

/***/ })

});