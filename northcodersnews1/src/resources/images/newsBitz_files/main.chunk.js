(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: \"Courier\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\n.header-area {\n  grid-area: header;\n  background-color: white;\n  text-align: left;\n  font: 1em sans-serif;\n  font-size: 30pt;\n}\n.logo {\n  width: 70px;\n  height: 70px;\n  float: left;\n}\n.loginLabel {\n  margin-right: 10px;\n  margin-top: 2px;\n  font-size: 14px;\n}\n.loginContainer {\n  margin-top: 10px;\n}\n.header {\n  width: 100%;\n  height: 70px;\n  background-color: white;\n  border-bottom: 1px solid black;\n  margin: 0;\n  padding: 0;\n  box-shadow: 0px 5px #888888;\n}\n.title {\n  float: left;\n  margin-left: 50px;\n  margin-top: 15px;\n}\n.loginLogout {\n  font-size: 15pt;\n  float: right;\n  padding: 10px;\n  margin-right: 25px;\n}\n.loginInput {\n  outline: none;\n  border: 0px solid transparent;\n  background-color: white;\n}\n\n.avatarImage {\n  height: 40px;\n  width: 40px;\n  float: left;\n  margin-top: 5px;\n  margin-right: 3px;\n}\n.loginOutline {\n  margin-right: 5px;\n  border-radius: 14px;\n  border: 1px solid black;\n  padding: 0px 10px 2px 10px;\n}\n.logoutContainer {\n  font-size: 14px;\n}\n.logoutUsername {\n  margin-right: 5px;\n  margin-top: 2px;\n  float: left;\n}\n.logoutDetails {\n  float: left;\n  margin-top: 15px;\n}\n.main-area {\n  grid-area: main;\n  background-color: rgb(206, 240, 240);\n}\n.article-body {\n  margin: 0 auto;\n  background-color: white;\n  width: 800px;\n  border: 1px solid black;\n  padding: 5px;\n}\n.sidebar-area {\n  grid-area: sidebar;\n  background-color: rgb(247, 233, 218);\n}\n\n.container {\n  display: grid;\n  grid-template-columns: auto 30%;\n  grid-template-rows: 75px auto;\n  grid-template-areas:\n    \"header header header header\"\n    \"main main main sidebar\";\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n\n.articleOverview {\n  margin: 10px auto 10px auto;\n  background-color: white;\n  width: 600px;\n  border: 1px solid black;\n  padding: 5px;\n  box-shadow: 2px 2px #888888;\n}\n.articleOverviewTitle {\n  font-size: 20px;\n}\n.articleOverviewContent {\n  padding: 5px;\n}\n.articleOverviewFooter {\n  margin-top: 10px;\n  border-top: 1px solid black;\n  height: 20px;\n  font-size: 12px;\n}\n\n.articleOverviewFooterOne {\n  float: left;\n  margin-right: 10px;\n  padding-top: 2px;\n}\n.articleOverviewFooterTwo {\n  float: left;\n  padding-top: 7px;\n}\n.articleOverviewFooterThree {\n  float: right;\n  padding-top: 7px;\n}\n\n.singleComment {\n  margin: 0 auto;\n  background-color: white;\n  width: 800px;\n  border: 1px solid black;\n  padding: 5px;\n}\n.articleList-commentCount {\n  text-align: right;\n}\n.articleDetailContainer {\n  margin: 0 auto;\n  background-color: white;\n  width: 800px;\n  border: 1px solid black;\n  padding: 5px;\n  min-height: 300px;\n}\n\n.articleList {\n  width: 100%;\n}\n.btn {\n  background: white;\n  border-radius: 14px;\n  color: #888888;\n  font-size: 12px;\n  padding: 2px 5px 2px 5px;\n\n  text-decoration: none;\n}\n.topicSelector {\n  margin: 10px;\n}\n.topicSelectorHeader {\n  width: 100%;\n  height: 100px;\n  background-color: rgb(240, 200, 178);\n}\n.dropDown {\n  width: 40%;\n  height: 30px;\n  font-size: 14px;\n}\n.headerSloth {\n  height: 100px;\n}\n.sideBarHeaderText {\n  font-size: 30px;\n  padding-top: 40px;\n  padding-right: 40px;\n  float: right;\n}\n\n.createArticle {\n  margin: 50px 10px 10px 10px;\n  width: 100%;\n}\n.addArticle {\n  margin: 50px auto 0 auto;\n  min-width: 250px;\n  width: 400px;\n  font-size: 20px;\n}\n\n.commentFooterTwo {\n  float: right;\n  margin-right: 5px;\n}\n.articleFooter {\n  margin-top: 10px;\n  border-top: 1px solid black;\n  height: 20px;\n  font-size: 12px;\n}\n\n.articleFooterOne {\n  float: left;\n  margin-right: 10px;\n  padding-top: 7px;\n}\n.articleFooterTwo {\n  float: left;\n  padding-top: 7px;\n}\n.articleFooterThree {\n  float: right;\n  padding-top: 7px;\n}\n.articleTitle {\n  height: 60px;\n  font-size: 20px;\n}\n.articleContent {\n  min-height: 300px;\n}\n\n.addCommentContainer {\n  width: 400px;\n  margin: auto;\n}\n.notFound {\n  margin: 40px auto 0 auto;\n  font-size: 30px;\n}\n.invalidUserName {\n  font-size: 12px;\n  color: red;\n  margin-left: 100px;\n  margin-top: 2px;\n}\n.invalidInput {\n  font-size: 16px;\n  color: red;\n}\n.spinnerContainer {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  opacity: 0.5;\n  z-index: 999;\n}\n.spinner {\n  position: relative;\n  margin: 200px auto 0 auto;\n  width: 32px;\n  height: 32px;\n}\n.spinnerImg {\n  width: 50px;\n  height: 50px;\n}\n.loadingText {\n  font-size: 10px;\n}\n.userPage {\n  margin: 100px auto 0 300px;\n  font-size: 20px;\n}\n.userLoginPrompt {\n  font-size: 20px;\n  margin-left: 40px;\n  margin-top: 40px;\n}\n.userContainer {\n  width: 100%;\n}\n.userAvatarImg {\n  margin-left: 20px;\n  vertical-align: top;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var _components_home_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home */ "./src/components/home/home.js");
/* harmony import */ var _components_articleDetail_articleDetail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/articleDetail/articleDetail */ "./src/components/articleDetail/articleDetail.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/api */ "./src/utils/api.js");
/* harmony import */ var _components_notFound_notFound__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/notFound/notFound */ "./src/components/notFound/notFound.js");
/* harmony import */ var _components_badArticle_badArticle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/badArticle/badArticle */ "./src/components/badArticle/badArticle.js");
/* harmony import */ var _components_user_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user/user */ "./src/components/user/user.js");





var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/App.js";










var App =
/*#__PURE__*/
function (_Component) {
  Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      user: null,
      error: null
    };

    _this.login = function (username) {
      Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["newLogin"])(username).then(function (user) {
        _this.setState({
          user: user,
          error: null
        });
      }).catch(function (error) {
        _this.setState({
          user: null,
          error: 1
        });
      });
    };

    _this.logout = function () {
      _this.setState({
        user: null
      });

      Object(_reach_router__WEBPACK_IMPORTED_MODULE_6__["navigate"])("/");
    };

    return _this;
  }

  Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_6__["Router"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_notFound_notFound__WEBPACK_IMPORTED_MODULE_10__["default"], {
        default: true,
        user: this.state.user,
        error: this.state.error,
        onLogin: this.login,
        onLogout: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_home_home__WEBPACK_IMPORTED_MODULE_7__["default"], {
        path: "/",
        user: this.state.user,
        error: this.state.error,
        onLogin: this.login,
        onLogout: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_articleDetail_articleDetail__WEBPACK_IMPORTED_MODULE_8__["default"], {
        path: "/article/:articleId",
        user: this.state.user,
        error: this.state.error,
        onLogin: this.login,
        onLogout: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_badArticle_badArticle__WEBPACK_IMPORTED_MODULE_11__["default"], {
        path: "/badArticle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_user_user__WEBPACK_IMPORTED_MODULE_12__["default"], {
        path: "/user",
        user: this.state.user,
        error: this.state.error,
        onLogin: this.login,
        onLogout: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/articleDetail/addComment.js":
/*!****************************************************!*\
  !*** ./src/components/articleDetail/addComment.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/api */ "./src/utils/api.js");







var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/articleDetail/addComment.js";



var AddNewComment =
/*#__PURE__*/
function (_Component) {
  Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AddNewComment, _Component);

  function AddNewComment() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddNewComment);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AddNewComment)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      body: "",
      error: null
    };

    _this.handleChange = function (event) {
      _this.setState(Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event.target.id, event.target.value));
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();

      var comment = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state);

      if (comment.body.trim() === "") {
        _this.setState({
          error: 1
        });
      } else {
        comment.created_by = _this.props.user._id;
        comment.belongs_to = _this.props.belongs_to;
        Object(_utils_api__WEBPACK_IMPORTED_MODULE_8__["addComment"])(comment).then(function (newComment) {
          newComment.created_by = {
            id: _this.props.user._id,
            username: _this.props.user.username
          };

          _this.props.onCreateComment(newComment);

          _this.setState({
            body: ""
          });
        });
      }
    };

    return _this;
  }

  Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddNewComment, [{
    key: "render",
    value: function render() {
      var invalidInput = this.state.error === 1;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "addCommentContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), "Comment"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
        rows: "15",
        cols: "50",
        disabled: !this.props.user,
        value: this.state.body,
        onChange: this.handleChange,
        type: "text-area",
        id: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        disabled: !this.props.user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Add a comment!")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), invalidInput && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "invalidInput",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Please enter your comment"), !this.props.user && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "invalidInput",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Please log in"));
    }
  }]);

  return AddNewComment;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddNewComment);

/***/ }),

/***/ "./src/components/articleDetail/article.js":
/*!*************************************************!*\
  !*** ./src/components/articleDetail/article.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commentList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentList */ "./src/components/articleDetail/commentList.js");
var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/articleDetail/article.js";



var Article = function Article(_ref) {
  var user = _ref.user,
      article = _ref.article,
      onVote = _ref.onVote,
      onCommentDelete = _ref.onCommentDelete;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articleDetailContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articleTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Title:", article.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articleContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Article:", article.article), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articleFooter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articleFooterOne",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Votes:", article.votes), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articleFooterTwo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Topic:", article.topic), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articleFooterThree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Created By:", article.createdBy.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commentList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    comments: article.comments,
    onVote: onVote,
    onCommentDelete: onCommentDelete,
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./src/components/articleDetail/articleDetail.js":
/*!*******************************************************!*\
  !*** ./src/components/articleDetail/articleDetail.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/header */ "./src/components/shared/header.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./article */ "./src/components/articleDetail/article.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/api */ "./src/utils/api.js");
/* harmony import */ var _addComment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./addComment */ "./src/components/articleDetail/addComment.js");
/* harmony import */ var _shared_sidebarHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/sidebarHeader */ "./src/components/shared/sidebarHeader.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var _shared_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/loading */ "./src/components/shared/loading.js");







var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/articleDetail/articleDetail.js";









var ArticleDetail =
/*#__PURE__*/
function (_Component) {
  Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ArticleDetail, _Component);

  function ArticleDetail() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ArticleDetail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ArticleDetail)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      article: {},
      loading: true
    };

    _this.onCreateComment = function (comment) {
      _this.setState({
        article: Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state.article, {
          comments: [comment].concat(Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.article.comments))
        })
      });
    };

    _this.onCommentDelete = function (id) {
      Object(_utils_api__WEBPACK_IMPORTED_MODULE_10__["deleteComment"])(id);

      var filteredArray = _this.state.article.comments.filter(function (comment) {
        return comment._id !== id;
      });

      var newArticle = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state.article, {
        comments: filteredArray
      });

      _this.setState({
        article: newArticle
      });
    };

    return _this;
  }

  Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ArticleDetail, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "header-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shared_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onLogin: this.props.onLogin,
        user: this.props.user,
        onLogout: this.props.onLogout,
        error: this.props.error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "main-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, !this.state.loading && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article__WEBPACK_IMPORTED_MODULE_9__["default"], {
        article: this.state.article,
        onVote: this.onCommentVote,
        user: this.props.user,
        onCommentDelete: this.onCommentDelete,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "sidebar-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shared_sidebarHeader__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "write a new comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_addComment__WEBPACK_IMPORTED_MODULE_11__["default"], {
        user: this.props.user,
        onCreateComment: this.onCreateComment,
        belongs_to: this.state.article.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shared_loading__WEBPACK_IMPORTED_MODULE_14__["default"], {
        show: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(_utils_api__WEBPACK_IMPORTED_MODULE_10__["getArticle"])(this.props.articleId).then(function (article) {
        _this2.setState({
          article: article,
          loading: false
        });
      }).catch(function (error) {
        Object(_reach_router__WEBPACK_IMPORTED_MODULE_13__["navigate"])("/badArticle", {
          replace: true
        });
      });
    }
  }, {
    key: "onCommentVote",
    value: function onCommentVote(id, direction) {
      Object(_utils_api__WEBPACK_IMPORTED_MODULE_10__["voteOnComment"])(id, direction);
    }
  }]);

  return ArticleDetail;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ArticleDetail);

/***/ }),

/***/ "./src/components/articleDetail/commentList.js":
/*!*****************************************************!*\
  !*** ./src/components/articleDetail/commentList.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _singleComment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleComment */ "./src/components/articleDetail/singleComment.js");
var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/articleDetail/commentList.js";




var CommentList = function CommentList(_ref) {
  var user = _ref.user,
      onVote = _ref.onVote,
      onCommentDelete = _ref.onCommentDelete,
      comments = _ref.comments;
  if (!comments) return "";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "commentList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, comments.map(function (comment, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_singleComment__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: user,
      comment: comment,
      key: index,
      onVote: onVote,
      onCommentDelete: onCommentDelete,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }));
};

CommentList.propsTypes = {
  comments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onVote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onCommentDelete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (CommentList);

/***/ }),

/***/ "./src/components/articleDetail/singleComment.js":
/*!*******************************************************!*\
  !*** ./src/components/articleDetail/singleComment.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_vote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/vote */ "./src/components/shared/vote.js");
var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/articleDetail/singleComment.js";



var SingleComment = function SingleComment(_ref) {
  var user = _ref.user,
      onVote = _ref.onVote,
      onCommentDelete = _ref.onCommentDelete,
      comment = _ref.comment;
  var commentCreatedByLoggedInUser = false;

  if (user) {
    commentCreatedByLoggedInUser = user._id === comment.created_by._id;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "singleComment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, comment.body, "", " ", "Created by:  " + comment.created_by.username, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articleOverviewFooter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articleOverviewFooterOne",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_vote__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: comment._id,
    numberOfVotes: comment.votes,
    onVote: onVote,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "commentFooterTwo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, commentCreatedByLoggedInUser && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return onCommentDelete(comment._id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Delete"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleComment);

/***/ }),

/***/ "./src/components/badArticle/badArticle.js":
/*!*************************************************!*\
  !*** ./src/components/badArticle/badArticle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header */ "./src/components/shared/header.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/badArticle/badArticle.js";




var BadArticle = function BadArticle(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onLogin: props.onLogin,
    user: props.user,
    onLogout: props.onLogout,
    error: props.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notFound",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Sorry, the article you requested could not be found.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
};

BadArticle.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  onLogin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onLogout: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (BadArticle);

/***/ }),

/***/ "./src/components/home/addArticle.js":
/*!*******************************************!*\
  !*** ./src/components/home/addArticle.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/api */ "./src/utils/api.js");
/* harmony import */ var _topicSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./topicSelector */ "./src/components/home/topicSelector.js");







var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/home/addArticle.js";




var AddNewArticle =
/*#__PURE__*/
function (_Component) {
  Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AddNewArticle, _Component);

  function AddNewArticle() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddNewArticle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AddNewArticle)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      title: "",
      belongs_to: "",
      body: "",
      error: null
    };

    _this.handleChange = function (event) {
      _this.setState(Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event.target.id, event.target.value));
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();

      var article = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state);

      if (article.title.trim() === "" || article.belongs_to.trim() === "" || article.body.trim() === "") {
        _this.setState({
          error: 1
        });
      } else {
        article.created_by = _this.props.user._id;
        Object(_utils_api__WEBPACK_IMPORTED_MODULE_8__["addArticle"])(article).then(function (newArticle) {
          newArticle.createdBy.id = _this.props.user._id;
          newArticle.createdBy.name = _this.props.user.name;

          _this.props.onCreateArticle(newArticle);

          _this.setState({
            title: "",
            belongs_to: "",
            body: ""
          });
        });
      }
    };

    _this.onChangeTopic = function (topic) {
      _this.setState({
        belongs_to: topic
      });
    };

    return _this;
  }

  Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddNewArticle, [{
    key: "render",
    value: function render() {
      var invalidInput = this.state.error === 1;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "addArticle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, " give it a name...")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        disabled: !this.props.user,
        value: this.state.title,
        onChange: this.handleChange,
        type: "text",
        id: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "topic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "what's the topic?")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_topicSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onTopicSelect: this.onChangeTopic,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "your article")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
        rows: "10",
        cols: "50",
        disabled: !this.props.user,
        value: this.state.body,
        onChange: this.handleChange,
        type: "text-area",
        id: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        disabled: !this.props.user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Add an article!")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), invalidInput && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "invalidInput",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Please enter all fields"), !this.props.user && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "invalidInput",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Please log in"));
    }
  }]);

  return AddNewArticle;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddNewArticle);

/***/ }),

/***/ "./src/components/home/articleList/articleList.js":
/*!********************************************************!*\
  !*** ./src/components/home/articleList/articleList.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _articleOverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articleOverview */ "./src/components/home/articleList/articleOverview.js");
var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/home/articleList/articleList.js";




var ArticleList = function ArticleList(props) {
  if (props.show) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articleList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.articles.map(function (articles, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_articleOverview__WEBPACK_IMPORTED_MODULE_2__["default"], {
      article: articles,
      key: index,
      onVote: props.onVote,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }));
  return "";
};

ArticleList.propsTypes = {
  articles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

/***/ }),

/***/ "./src/components/home/articleList/articleOverview.js":
/*!************************************************************!*\
  !*** ./src/components/home/articleList/articleOverview.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var _shared_vote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/vote */ "./src/components/shared/vote.js");
var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/home/articleList/articleOverview.js";




var ArticleOverview = function ArticleOverview(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articleOverview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "articleOverviewTitle",
    to: "article/" + props.article.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, " ", props.article.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articleOverviewContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.article.shortDescription, "..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articleOverviewFooter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articleOverviewFooterOne",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_vote__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: props.article.id,
    numberOfVotes: props.article.votes,
    onVote: props.onVote,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articleOverviewFooterTwo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Author: ", props.article.createdBy.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articleOverviewFooterThree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Comment count:", props.article.commentCount)));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleOverview);

/***/ }),

/***/ "./src/components/home/home.js":
/*!*************************************!*\
  !*** ./src/components/home/home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _articleList_articleList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articleList/articleList */ "./src/components/home/articleList/articleList.js");
/* harmony import */ var _shared_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/header */ "./src/components/shared/header.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/api */ "./src/utils/api.js");
/* harmony import */ var _topicSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./topicSelector */ "./src/components/home/topicSelector.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _addArticle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./addArticle */ "./src/components/home/addArticle.js");
/* harmony import */ var _shared_sidebarHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/sidebarHeader */ "./src/components/shared/sidebarHeader.js");
/* harmony import */ var _shared_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/loading */ "./src/components/shared/loading.js");






var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/home/home.js";










var Home =
/*#__PURE__*/
function (_Component) {
  Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      articles: [],
      loading: true
    };

    _this.getArticlesForTopic = function (topicFilter) {
      Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["getAllArticles"])(topicFilter).then(function (articles) {
        _this.setState({
          articles: articles,
          loading: false
        });
      });
    };

    _this.onCreateArticle = function (article) {
      _this.setState({
        articles: [article].concat(Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.articles))
      });
    };

    _this.onArticleVote = function (id, direction) {
      Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["voteOnArticle"])(id, direction);
    };

    return _this;
  }

  Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "header-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_shared_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onLogin: this.props.onLogin,
        user: this.props.user,
        onLogout: this.props.onLogout,
        error: this.props.error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "main-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_articleList_articleList__WEBPACK_IMPORTED_MODULE_7__["default"], {
        show: !this.state.loading,
        articles: this.state.articles,
        onVote: this.onArticleVote,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "sidebar-area",
        user: this.props.user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "topicSelector",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_shared_sidebarHeader__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "filter your articles",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_topicSelector__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onTopicSelect: this.getArticlesForTopic,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "createArticle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_shared_sidebarHeader__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "write a new article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_addArticle__WEBPACK_IMPORTED_MODULE_12__["default"], {
        user: this.props.user,
        onCreateArticle: this.onCreateArticle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_shared_loading__WEBPACK_IMPORTED_MODULE_14__["default"], {
        show: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["getAllArticles"])("").then(function (articles) {
        _this2.setState({
          articles: articles,
          loading: false
        });
      });
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Home.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,
  onLogin: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onLogout: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/home/topicSelector.js":
/*!**********************************************!*\
  !*** ./src/components/home/topicSelector.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/home/topicSelector.js";


var TopicSelector = function TopicSelector(props) {
  var topics = ["football", "coding", "cooking"];

  var handleChange = function handleChange(event) {
    props.onTopicSelect(event.target.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "dropDown",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Article Topics"), topics.map(function (topic, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: i,
      value: topic,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, topic);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TopicSelector);

/***/ }),

/***/ "./src/components/notFound/notFound.js":
/*!*********************************************!*\
  !*** ./src/components/notFound/notFound.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header */ "./src/components/shared/header.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/notFound/notFound.js";




var NotFound = function NotFound(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onLogin: props.onLogin,
    user: props.user,
    onLogout: props.onLogout,
    error: props.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notFound",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Sorry, we couldn't find what you were looking for.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
};

NotFound.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  onLogin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onLogout: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/components/shared/header.js":
/*!*****************************************!*\
  !*** ./src/components/shared/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/components/shared/login.js");
/* harmony import */ var _logout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout */ "./src/components/shared/logout.js");
/* harmony import */ var _resources_images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resources/images/logo.png */ "./src/resources/images/logo.png");
/* harmony import */ var _resources_images_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_images_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/shared/header.js";







var Header = function Header(_ref) {
  var user = _ref.user,
      onLogin = _ref.onLogin,
      onLogout = _ref.onLogout,
      error = _ref.error;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "logo",
    src: _resources_images_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "newsBitz sloth logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "newsBitz"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loginLogout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, !user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onLogin: onLogin,
    error: error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onLogout: onLogout,
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })));
};

Header.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onLogin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onLogout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/shared/loading.js":
/*!******************************************!*\
  !*** ./src/components/shared/loading.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources_images_spinner_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resources/images/spinner.gif */ "./src/resources/images/spinner.gif");
/* harmony import */ var _resources_images_spinner_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_images_spinner_gif__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/shared/loading.js";



var Loading = function Loading(props) {
  if (props.show) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spinnerContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spinner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spinner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _resources_images_spinner_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "spinner",
    className: "spinnerImg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loadingText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "loading...")));else return "";
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/components/shared/login.js":
/*!****************************************!*\
  !*** ./src/components/shared/login.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/shared/login.js";



var Login =
/*#__PURE__*/
function (_Component) {
  Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      username: ""
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();

      _this.props.onLogin(_this.state.username);
    };

    _this.handleChange = function (event) {
      var _event$target = event.target,
          value = _event$target.value,
          id = _event$target.id;

      _this.setState(Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, id, value));
    };

    return _this;
  }

  Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Login, [{
    key: "render",
    value: function render() {
      var invalidUserName = this.props.error === 1;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "loginContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "loginLabel",
        htmlFor: "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "username:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "loginOutline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        placeholder: "jessjelly",
        className: "loginInput",
        onChange: this.handleChange,
        id: "username",
        type: "text",
        value: this.state.username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Log in"))), invalidUserName && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "invalidUserName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Invalid username"));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Login.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  onLogin: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  error: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/components/shared/logout.js":
/*!*****************************************!*\
  !*** ./src/components/shared/logout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/shared/logout.js";




var Logout = function Logout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logoutContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "avatarImage",
    src: props.user.avatar_url,
    alt: "user avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logoutDetails",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logoutUsername",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.user.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn",
    onClick: props.onLogout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "log out")));
};

Logout.propTypes = {
  onLogout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Logout);

/***/ }),

/***/ "./src/components/shared/sidebarHeader.js":
/*!************************************************!*\
  !*** ./src/components/shared/sidebarHeader.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resources_images_headerSloth_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/images/headerSloth.jpg */ "./src/resources/images/headerSloth.jpg");
/* harmony import */ var _resources_images_headerSloth_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_resources_images_headerSloth_jpg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/shared/sidebarHeader.js";




var SidebarHeader = function SidebarHeader(_ref) {
  var title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topicSelectorHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "headerSloth",
    src: _resources_images_headerSloth_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "side bar header logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sideBarHeaderText ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, title));
};

SidebarHeader.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SidebarHeader);

/***/ }),

/***/ "./src/components/shared/vote.js":
/*!***************************************!*\
  !*** ./src/components/shared/vote.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/shared/vote.js";


var Vote =
/*#__PURE__*/
function (_Component) {
  Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Vote, _Component);

  function Vote() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Vote);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Vote)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      voteChange: 0
    };
    return _this;
  }

  Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Vote, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _onClick = function onClick(direction) {
        _this2.props.onVote(_this2.props.id, direction);

        if (direction === "up") {
          _this2.setState({
            voteChange: _this2.state.voteChange + 1
          });
        } else {
          _this2.setState({
            voteChange: _this2.state.voteChange - 1
          });
        }
      };

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: function onClick() {
          return _onClick("up");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "^"), "Votes:", this.props.numberOfVotes + this.state.voteChange, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: function onClick() {
          return _onClick("down");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "v"));
    }
  }]);

  return Vote;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Vote);

/***/ }),

/***/ "./src/components/user/user.js":
/*!*************************************!*\
  !*** ./src/components/user/user.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header */ "./src/components/shared/header.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_sidebarHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sidebarHeader */ "./src/components/shared/sidebarHeader.js");
var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/components/user/user.js";





var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onLogin: props.onLogin,
    user: props.user,
    onLogout: props.onLogout,
    error: props.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "userContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "userPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.user.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Username:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, props.user.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Avatar:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "userAvatarImg",
    id: "avatar",
    src: props.user.avatar_url,
    alt: "user avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }))), !props.user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "userLoginPrompt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Please log in"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_sidebarHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Hi there user!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })));
};

User.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  onLogin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onLogout: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), document.getElementById("root"));

/***/ }),

/***/ "./src/resources/images/headerSloth.jpg":
/*!**********************************************!*\
  !*** ./src/resources/images/headerSloth.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/headerSloth.c75bd542.jpg";

/***/ }),

/***/ "./src/resources/images/logo.png":
/*!***************************************!*\
  !*** ./src/resources/images/logo.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.0b8f53c1.png";

/***/ }),

/***/ "./src/resources/images/spinner.gif":
/*!******************************************!*\
  !*** ./src/resources/images/spinner.gif ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/spinner.25ef2804.gif";

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/*! exports provided: getAllArticles, getArticle, newLogin, addArticle, addComment, voteOnArticle, voteOnComment, deleteComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllArticles", function() { return getAllArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticle", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newLogin", function() { return newLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticle", function() { return addArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voteOnArticle", function() { return voteOnArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voteOnComment", function() { return voteOnComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteComment", function() { return deleteComment; });
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var BASE_URL = "https://peaceful-temple-55135.herokuapp.com/api";
var extract = 150;
var getAllArticles =
/*#__PURE__*/
function () {
  var _ref = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(topicFilter) {
    var result;
    return _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = {};

            if (!(topicFilter === "")) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(BASE_URL, "/articles"));

          case 4:
            result = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.next = 9;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(BASE_URL, "/topics/").concat(topicFilter, "/articles"));

          case 9:
            result = _context.sent;

          case 10:
            return _context.abrupt("return", result.data.articles.map(function (articles) {
              return {
                id: articles._id,
                votes: articles.votes,
                title: articles.title,
                shortDescription: articles.body.slice(0, extract),
                topic: articles.belongs_to,
                createdBy: {
                  id: articles.created_by._id,
                  name: articles.created_by.name
                },
                commentCount: articles.commentCount
              };
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAllArticles(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getArticle =
/*#__PURE__*/
function () {
  var _ref2 = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
    var articleResult, commentsResult, articleToDisplay;
    return _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(BASE_URL, "/articles/").concat(id));

          case 2:
            articleResult = _context2.sent;
            _context2.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(BASE_URL, "/articles/").concat(id, "/comments"));

          case 5:
            commentsResult = _context2.sent;
            articleToDisplay = articleResult.data.article;
            return _context2.abrupt("return", {
              id: articleToDisplay._id,
              votes: articleToDisplay.votes,
              title: articleToDisplay.title,
              topic: articleToDisplay.belongs_to,
              article: articleToDisplay.body,
              createdBy: {
                id: articleToDisplay.created_by._id,
                username: articleToDisplay.created_by.username,
                name: articleToDisplay.created_by.name,
                avatarURL: articleToDisplay.created_by.avatar_url
              },
              comments: commentsResult.data.comments
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getArticle(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var newLogin =
/*#__PURE__*/
function () {
  var _ref3 = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(username) {
    var _ref4, data;

    return _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(BASE_URL, "/users/").concat(username));

          case 2:
            _ref4 = _context3.sent;
            data = _ref4.data;
            return _context3.abrupt("return", data.user);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function newLogin(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var addArticle =
/*#__PURE__*/
function () {
  var _ref5 = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(newArticle) {
    var _ref6, data;

    return _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(BASE_URL, "/topics/").concat(newArticle.belongs_to, "/articles"), newArticle);

          case 2:
            _ref6 = _context4.sent;
            data = _ref6.data;
            return _context4.abrupt("return", {
              id: data.article._id,
              votes: 0,
              title: data.article.title,
              shortDescription: data.article.body.slice(0, extract),
              topic: data.article.belongs_to,
              createdBy: {
                id: 0,
                name: ""
              },
              commentCount: 0
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function addArticle(_x4) {
    return _ref5.apply(this, arguments);
  };
}();
var addComment =
/*#__PURE__*/
function () {
  var _ref7 = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(newComment) {
    var _ref8, data;

    return _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(BASE_URL, "/articles/").concat(newComment.belongs_to, "/comments"), newComment);

          case 2:
            _ref8 = _context5.sent;
            data = _ref8.data;
            return _context5.abrupt("return", data.comment);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function addComment(_x5) {
    return _ref7.apply(this, arguments);
  };
}();
var voteOnArticle =
/*#__PURE__*/
function () {
  var _ref9 = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(id, direction) {
    return _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("".concat(BASE_URL, "/articles/").concat(id, "?vote=").concat(direction));

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function voteOnArticle(_x6, _x7) {
    return _ref9.apply(this, arguments);
  };
}();
var voteOnComment =
/*#__PURE__*/
function () {
  var _ref10 = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id, direction) {
    return _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("".concat(BASE_URL, "/comments/").concat(id, "?vote=").concat(direction));

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function voteOnComment(_x8, _x9) {
    return _ref10.apply(this, arguments);
  };
}();
var deleteComment =
/*#__PURE__*/
function () {
  var _ref11 = Object(_home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id) {
    return _home_rachel_NC_sprints_frontEnd2_northcodersNews_northcodersnews1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete("".concat(BASE_URL, "/comments/").concat(id));

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function deleteComment(_x10) {
    return _ref11.apply(this, arguments);
  };
}();

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/rachel/NC-sprints/frontEnd2/northcodersNews/northcodersnews1/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map