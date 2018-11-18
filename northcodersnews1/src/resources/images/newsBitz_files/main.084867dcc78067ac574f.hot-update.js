webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.084867dcc78067ac574f.hot-update.js.map