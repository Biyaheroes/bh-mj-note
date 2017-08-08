(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["note"] = factory();
	else
		root["note"] = factory();
})(this, function() {
return webpackJsonpnote([4],{

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*;
  @module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Biyaheroes Developers
		@email: developers@biyaheroes.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
  @end-module-license

  @module-configuration:
	{
	  "package": "bh-mj-note",
	  "path": "bh-mj-note/note.jsx",
	  "file": "note.jsx",
	  "module": "note",
	  "author": "Biyaheroes Developers",
	  "contributors": [
		"Robot Biyaheroes <robot@biyaheroes.com>",
		"Vinse Vinalon <vinsevinalon@gmail.com>"
	  ],
	  "eMail": "developers@biyaheroes.com",
	  "repository": "https://github.com/Biyaheroes/bh-mj-note.git",
	  "global": true
	}
  @end-module-configuration

  @module-documentation:
	Biyaheroes MJML Focus Detail Component
  @end-module-documentation

  @include:
	{
	  "MJMLElement": "mjml-core",
	  "React": "react",
	  "Component": "react.Component",
	  "Column": "mjml-column",
	  "Table": "mjml-table",
	  "wichevr": "wichevr"
	}
  @end-include
*/Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(307);var _extends3=_interopRequireDefault(_extends2);var _jsx2=__webpack_require__(315);var _jsx3=_interopRequireDefault(_jsx2);var _getPrototypeOf=__webpack_require__(329);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(333);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(334);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(338);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(347);var _inherits3=_interopRequireDefault(_inherits2);var _class;

var _mjmlCore=__webpack_require__(25);
var _react=__webpack_require__(34);var _react2=_interopRequireDefault(_react);
var _mjmlColumn=__webpack_require__(675);var _mjmlColumn2=_interopRequireDefault(_mjmlColumn);
var _mjmlDivider=__webpack_require__(680);var _mjmlDivider2=_interopRequireDefault(_mjmlDivider);
var _mjmlSection=__webpack_require__(681);var _mjmlSection2=_interopRequireDefault(_mjmlSection);
var _mjmlText=__webpack_require__(682);var _mjmlText2=_interopRequireDefault(_mjmlText);
var _wichevr=__webpack_require__(683);var _wichevr2=_interopRequireDefault(_wichevr);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var tagName="mj-note";

var parentTag=["mj-container"];

var endingTag=false;

var defaultMJMLDefinition={
"content":"",
"attributes":{
"label":"Label",
"value-color":"black"}};var




Note=(0,_mjmlCore.MJMLElement)(_class=function(_Component){(0,_inherits3.default)(Note,_Component);function Note(){(0,_classCallCheck3.default)(this,Note);return(0,_possibleConstructorReturn3.default)(this,(Note.__proto__||(0,_getPrototypeOf2.default)(Note)).apply(this,arguments));}(0,_createClass3.default)(Note,[{key:"render",value:function render()
{var
mjAttribute=this.props.mjAttribute;

return(
_react2.default.createElement(_mjmlSection2.default,(0,_extends3.default)({},
this.props,{
padding:"0px 0px 0px 0px",
"background-color":mjAttribute("value-color")}),(0,_jsx3.default)(_mjmlColumn2.default,{width:


"70%","background-color":
mjAttribute("label-color")},void 0,(0,_jsx3.default)(_mjmlText2.default,{"font-size":


"16px","font-weight":
"500","letter-spacing":
"0.3px"},void 0,
(0,_wichevr2.default)(mjAttribute("title"),mjAttribute("label")))),(0,_jsx3.default)(_mjmlDivider2.default,{"background-color":



mjAttribute("value-color")},void 0)));



}}]);return Note;}(_react.Component))||_class;


Note.tagName=tagName;
Note.parentTag=parentTag;
Note.endingTag=endingTag;
Note.defaultMJMLDefinition=defaultMJMLDefinition;exports.default=

Note;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGUubW9kdWxlLmpzeCJdLCJuYW1lcyI6WyJ0YWdOYW1lIiwicGFyZW50VGFnIiwiZW5kaW5nVGFnIiwiZGVmYXVsdE1KTUxEZWZpbml0aW9uIiwiTm90ZSIsIm1qQXR0cmlidXRlIiwicHJvcHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REE7QUFDQSw0QjtBQUNBLHVDO0FBQ0EseUM7QUFDQSx5QztBQUNBLG1DO0FBQ0EsZ0M7O0FBRUEsR0FBTUEsU0FBVSxTQUFoQjs7QUFFQSxHQUFNQyxXQUFZLENBQUMsY0FBRCxDQUFsQjs7QUFFQSxHQUFNQyxXQUFZLEtBQWxCOztBQUVBLEdBQU1DLHVCQUF3QjtBQUM3QixVQUFXLEVBRGtCO0FBRTdCLGFBQWM7QUFDYixRQUFTLE9BREk7QUFFYixjQUFlLE9BRkYsQ0FGZSxDQUE5QixDOzs7OztBQVNNQyxJO0FBQ0k7QUFDQUMsV0FEQSxDQUNnQixLQUFLQyxLQURyQixDQUNBRCxXQURBOztBQUdSO0FBQ0M7QUFDTSxLQUFLQyxLQURYO0FBRUUsUUFBUSxpQkFGVjtBQUdFLG1CQUFtQkQsWUFBYyxhQUFkLENBSHJCOzs7QUFNUSxLQU5SO0FBT3FCQSxZQUFjLGFBQWQsQ0FQckI7OztBQVVhLE1BVmI7QUFXZSxLQVhmO0FBWWtCLE9BWmxCO0FBYUssc0JBQVNBLFlBQWEsT0FBYixDQUFULENBQWlDQSxZQUFhLE9BQWIsQ0FBakMsQ0FiTDs7OztBQWlCcUJBLFlBQWMsYUFBZCxDQWpCckIsVUFERDs7OztBQXNCQSxDOzs7QUFHRkQsS0FBS0osT0FBTCxDQUFlQSxPQUFmO0FBQ0FJLEtBQUtILFNBQUwsQ0FBaUJBLFNBQWpCO0FBQ0FHLEtBQUtGLFNBQUwsQ0FBaUJBLFNBQWpCO0FBQ0FFLEtBQUtELHFCQUFMLENBQTZCQSxxQkFBN0IsQzs7QUFFZUMsSSIsImZpbGUiOiJub3RlLm1vZHVsZS5qc3giLCJzb3VyY2VSb290IjoiL21udC9jL1VzZXJzL3ZpbnNlL0RvY3VtZW50cy9CaXlhaGVyb2VzL2JoL2JoLW1qLW5vdGUiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG4gIEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBCaXlhaGVyb2VzIERldmVsb3BlcnNcclxuXHRcdEBlbWFpbDogZGV2ZWxvcGVyc0BiaXlhaGVyb2VzLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcbiAgQGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuICBAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0e1xyXG5cdCAgXCJwYWNrYWdlXCI6IFwiYmgtbWotbm90ZVwiLFxyXG5cdCAgXCJwYXRoXCI6IFwiYmgtbWotbm90ZS9ub3RlLmpzeFwiLFxyXG5cdCAgXCJmaWxlXCI6IFwibm90ZS5qc3hcIixcclxuXHQgIFwibW9kdWxlXCI6IFwibm90ZVwiLFxyXG5cdCAgXCJhdXRob3JcIjogXCJCaXlhaGVyb2VzIERldmVsb3BlcnNcIixcclxuXHQgIFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFwiUm9ib3QgQml5YWhlcm9lcyA8cm9ib3RAYml5YWhlcm9lcy5jb20+XCIsXHJcblx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHQgIF0sXHJcblx0ICBcImVNYWlsXCI6IFwiZGV2ZWxvcGVyc0BiaXlhaGVyb2VzLmNvbVwiLFxyXG5cdCAgXCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0JpeWFoZXJvZXMvYmgtbWotbm90ZS5naXRcIixcclxuXHQgIFwiZ2xvYmFsXCI6IHRydWVcclxuXHR9XHJcbiAgQGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuICBAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0Qml5YWhlcm9lcyBNSk1MIEZvY3VzIERldGFpbCBDb21wb25lbnRcclxuICBAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG4gIEBpbmNsdWRlOlxyXG5cdHtcclxuXHQgIFwiTUpNTEVsZW1lbnRcIjogXCJtam1sLWNvcmVcIixcclxuXHQgIFwiUmVhY3RcIjogXCJyZWFjdFwiLFxyXG5cdCAgXCJDb21wb25lbnRcIjogXCJyZWFjdC5Db21wb25lbnRcIixcclxuXHQgIFwiQ29sdW1uXCI6IFwibWptbC1jb2x1bW5cIixcclxuXHQgIFwiVGFibGVcIjogXCJtam1sLXRhYmxlXCIsXHJcblx0ICBcIndpY2hldnJcIjogXCJ3aWNoZXZyXCJcclxuXHR9XHJcbiAgQGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5pbXBvcnQgeyBNSk1MRWxlbWVudCB9IGZyb20gXCJtam1sLWNvcmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29sdW1uIGZyb20gXCJtam1sLWNvbHVtblwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwibWptbC1kaXZpZGVyXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCJtam1sLXNlY3Rpb25cIjtcclxuaW1wb3J0IFRleHQgZnJvbSBcIm1qbWwtdGV4dFwiO1xyXG5pbXBvcnQgd2ljaGV2ciBmcm9tIFwid2ljaGV2clwiO1xyXG5cclxuY29uc3QgdGFnTmFtZSA9IFwibWotbm90ZVwiO1xyXG5cclxuY29uc3QgcGFyZW50VGFnID0gW1wibWotY29udGFpbmVyXCJdO1xyXG5cclxuY29uc3QgZW5kaW5nVGFnID0gZmFsc2U7XHJcblxyXG5jb25zdCBkZWZhdWx0TUpNTERlZmluaXRpb24gPSB7XHJcblx0XCJjb250ZW50XCI6IFwiXCIsXHJcblx0XCJhdHRyaWJ1dGVzXCI6IHtcclxuXHRcdFwibGFiZWxcIjogXCJMYWJlbFwiLFxyXG5cdFx0XCJ2YWx1ZS1jb2xvclwiOiBcImJsYWNrXCJcclxuXHR9LFxyXG59O1xyXG5cclxuQE1KTUxFbGVtZW50XHJcbmNsYXNzIE5vdGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgbWpBdHRyaWJ1dGUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFNlY3Rpb24gXHJcblx0XHRcdFx0eyAuLi50aGlzLnByb3BzIH1cclxuXHRcdFx0XHRcdHBhZGRpbmc9XCIwcHggMHB4IDBweCAwcHhcIlxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcj17IG1qQXR0cmlidXRlICggXCJ2YWx1ZS1jb2xvclwiICkgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdDxDb2x1bW4gXHJcblx0XHRcdFx0XHR3aWR0aD1cIjcwJVwiXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yPXsgbWpBdHRyaWJ1dGUgKCBcImxhYmVsLWNvbG9yXCIgKSB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8VGV4dFxyXG5cdFx0XHRcdFx0XHRmb250LXNpemU9XCIxNnB4XCJcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ9XCI1MDBcIlxyXG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZz1cIjAuM3B4XCI+XHJcblx0XHRcdFx0XHRcdHsgd2ljaGV2ciggbWpBdHRyaWJ1dGUoIFwidGl0bGVcIiApLCBtakF0dHJpYnV0ZSggXCJsYWJlbFwiICkgKSB9XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0PC9Db2x1bW4+XHJcblx0XHRcdFx0PERpdmlkZXJcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I9eyBtakF0dHJpYnV0ZSAoIFwidmFsdWUtY29sb3JcIiApIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHQ8L0RpdmlkZXI+XHJcblx0XHRcdDwvU2VjdGlvbj4pO1xyXG5cdH1cclxufVxyXG5cclxuTm90ZS50YWdOYW1lID0gdGFnTmFtZTtcclxuTm90ZS5wYXJlbnRUYWcgPSBwYXJlbnRUYWc7XHJcbk5vdGUuZW5kaW5nVGFnID0gZW5kaW5nVGFnO1xyXG5Ob3RlLmRlZmF1bHRNSk1MRGVmaW5pdGlvbiA9IGRlZmF1bHRNSk1MRGVmaW5pdGlvbjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGU7Il19

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[306]);
});
//# sourceMappingURL=note.support.js.map