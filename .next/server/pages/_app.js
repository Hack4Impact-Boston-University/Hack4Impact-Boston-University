(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8788:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/footer.jsx

var __jsx = (external_react_default()).createElement;




function Footer() {
  return __jsx("section", {
    className: "jsx-2080778797" + " " + "footer-section"
  }, __jsx(external_reactstrap_.Container, null, __jsx(external_reactstrap_.Row, null, __jsx(external_reactstrap_.Col, {
    md: "5",
    xs: "12",
    className: "footer-left-div"
  }, __jsx("div", {
    className: "jsx-2080778797" + " " + "footer-logo-box"
  }, __jsx("img", {
    src: "/images/logo-white.svg",
    height: "60",
    width: "240",
    alt: "Hack4Impact logo",
    className: "jsx-2080778797"
  })), __jsx("p", {
    className: "jsx-2080778797"
  }, "For all inquiries of partnership or sponsorship, please contact us at", ' ', __jsx("a", {
    href: "mailto:contanct@hack4impact.org",
    className: "jsx-2080778797" + " " + "email-link"
  }, "bostonuniversity@hack4impact.org"), ".")), __jsx("div", {
    className: "jsx-2080778797" + " " + "col-md-1"
  }), __jsx("div", {
    className: "jsx-2080778797" + " " + "col-md-2 "
  }, __jsx("h4", {
    className: "jsx-2080778797"
  }, "About the org"), __jsx("ul", {
    className: "jsx-2080778797"
  }, __jsx("li", {
    className: "jsx-2080778797"
  }, __jsx(next_link.default, {
    href: "/about"
  }, __jsx("a", {
    className: "jsx-2080778797"
  }, "About Us"))), __jsx("li", {
    className: "jsx-2080778797"
  }, __jsx(next_link.default, {
    href: "/projects"
  }, __jsx("a", {
    className: "jsx-2080778797"
  }, "Projects"))))), __jsx("div", {
    className: "jsx-2080778797" + " " + "col-md-2"
  }, __jsx("h4", {
    className: "jsx-2080778797"
  }, "Apply Now"), __jsx("ul", {
    className: "jsx-2080778797"
  }, __jsx("li", {
    className: "jsx-2080778797"
  }, __jsx(next_link.default, {
    href: "/apply"
  }, __jsx("a", {
    className: "jsx-2080778797"
  }, "How to apply"))), __jsx("li", {
    className: "jsx-2080778797"
  }, __jsx(next_link.default, {
    href: "/apply/students"
  }, __jsx("a", {
    className: "jsx-2080778797"
  }, "Students"))), __jsx("li", {
    className: "jsx-2080778797"
  }, __jsx(next_link.default, {
    href: "/apply/nonprofits"
  }, __jsx("a", {
    className: "jsx-2080778797"
  }, "Non-profits"))))), __jsx("div", {
    className: "jsx-2080778797" + " " + "col-md-2"
  }, __jsx("h4", {
    className: "jsx-2080778797"
  }, "Follow us"), __jsx("ul", {
    className: "jsx-2080778797"
  }, __jsx("li", {
    className: "jsx-2080778797"
  }, __jsx("a", {
    target: "_blank",
    href: "https://github.com/orgs/Hack4Impact-Boston-University/repositories",
    className: "jsx-2080778797"
  }, "Github")), __jsx("li", {
    className: "jsx-2080778797"
  }, __jsx("a", {
    target: "_blank",
    href: "https://www.instagram.com/hack4impactbu/",
    className: "jsx-2080778797"
  }, "Instagram")), __jsx("li", {
    className: "jsx-2080778797"
  }, __jsx("a", {
    target: "_blank",
    href: "https://www.facebook.com/hack4impactbu",
    className: "jsx-2080778797"
  }, "Facebook")))))), __jsx((style_default()), {
    id: "2080778797"
  }, [".footer-section.jsx-2080778797{background-color:var(--primary-blue);min-height:350px;padding-top:70px;color:white;font-size:15px;}", ".footer-section.jsx-2080778797 .footer-logo-box.jsx-2080778797{margin-bottom:20px;}", ".footer-section.jsx-2080778797 h4.jsx-2080778797{font-size:inherit;text-transform:uppercase;font-weight:bold;margin-bottom:15px;}", ".footer-section.jsx-2080778797 a.jsx-2080778797,.footer-section.jsx-2080778797 a.jsx-2080778797:visited{color:inherit;}", ".footer-section.jsx-2080778797 a.email-link.jsx-2080778797{-webkit-text-decoration:underline !important;text-decoration:underline !important;}", ".footer-section.jsx-2080778797 a.jsx-2080778797:hover{color:var(--secondary-seafoam);}", ".footer-section.jsx-2080778797 ul.jsx-2080778797{list-style-type:none;padding:0;}", ".footer-section.jsx-2080778797 ul.jsx-2080778797 li.jsx-2080778797{padding-bottom:5px;}"]));
}

/* harmony default export */ var footer = (Footer);
;// CONCATENATED MODULE: ./components/navbar/MobileDropdownToggle.jsx


var MobileDropdownToggle_jsx = (external_react_default()).createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MobileDropdownToggle(_ref) {
  let {
    toggled
  } = _ref,
      buttonProps = _objectWithoutProperties(_ref, ["toggled"]);

  return MobileDropdownToggle_jsx("button", _extends({
    "aria-label": "Toggle navigation dropdown"
  }, buttonProps, {
    className: "jsx-3260543772" + " " + (buttonProps && buttonProps.className != null && buttonProps.className || (toggled ? 'toggled mobile_dropdown_toggle' : 'mobile_dropdown_toggle') || "")
  }), MobileDropdownToggle_jsx("span", {
    className: "jsx-3260543772" + " " + "stripe_top"
  }), MobileDropdownToggle_jsx("span", {
    className: "jsx-3260543772" + " " + "stripe_middle"
  }), MobileDropdownToggle_jsx("span", {
    className: "jsx-3260543772" + " " + "stripe_bottom"
  }), MobileDropdownToggle_jsx((style_default()), {
    id: "3260543772"
  }, [".mobile_dropdown_toggle.jsx-3260543772{height:24px;width:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:0;z-index:1;}", "@media (min-width:1000px){.mobile_dropdown_toggle.jsx-3260543772{display:none;}}", ".mobile_dropdown_toggle.jsx-3260543772 *.jsx-3260543772{border-bottom:4px solid var(--primary-dark);-webkit-transition:-webkit-transform 0.2s,opacity 0.2s;-webkit-transition:transform 0.2s,opacity 0.2s;transition:transform 0.2s,opacity 0.2s;}", ".mobile_dropdown_toggle.jsx-3260543772 .stripe_top.jsx-3260543772{-webkit-transform-origin:top right;-ms-transform-origin:top right;transform-origin:top right;}", ".mobile_dropdown_toggle.jsx-3260543772 .stripe_bottom.jsx-3260543772{-webkit-transform-origin:bottom right;-ms-transform-origin:bottom right;transform-origin:bottom right;}", ".mobile_dropdown_toggle.toggled.jsx-3260543772 .stripe_top.jsx-3260543772{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}", ".mobile_dropdown_toggle.toggled.jsx-3260543772 .stripe_middle.jsx-3260543772{-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);}", ".mobile_dropdown_toggle.toggled.jsx-3260543772 .stripe_bottom.jsx-3260543772{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}"]));
}

/* harmony default export */ var navbar_MobileDropdownToggle = (MobileDropdownToggle);
;// CONCATENATED MODULE: ./components/navbar/NavLink.jsx


var NavLink_jsx = (external_react_default()).createElement;


function NavLink({
  children,
  href,
  activeRoute,
  ariaLabel
}) {
  return NavLink_jsx((external_react_default()).Fragment, null, NavLink_jsx(next_link.default, {
    href: href
  }, NavLink_jsx("a", {
    "aria-label": ariaLabel,
    className: "jsx-845990331" + " " + ((href === activeRoute ? 'active_route' : '') || "")
  }, children)), NavLink_jsx((style_default()), {
    id: "845990331"
  }, [".active_route.jsx-845990331{color:var(--accent-orange);font-weight:bold;}"]));
}

/* harmony default export */ var navbar_NavLink = (NavLink);
;// CONCATENATED MODULE: ./utils/useHasScrolledDown.js


const useHasScrolledDown = () => {
  const {
    0: hasScrolledDown,
    1: setHasScrolledDown
  } = (0,external_react_.useState)(false);

  const onScroll = e => {
    setHasScrolledDown(e.target.documentElement.scrollTop > 0);
  };

  (0,external_react_.useEffect)(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });
  return hasScrolledDown;
};

/* harmony default export */ var utils_useHasScrolledDown = (useHasScrolledDown);
;// CONCATENATED MODULE: ./components/navbar/Logo.jsx


var Logo_jsx = (external_react_default()).createElement;


function Logo() {
  return Logo_jsx((external_react_default()).Fragment, null, Logo_jsx(next_link.default, {
    href: "/"
  }, Logo_jsx("a", {
    "aria-label": "Go to homepage",
    className: "jsx-1760234247" + " " + "image-container"
  }, Logo_jsx("img", {
    height: "40",
    src: "https://images.ctfassets.net/dz50cburkkql/7trWXZia556Z9uftKAMCz/dc3b7d7fc1aa07ca0d752d09df6a01a5/Georgia_Tech_Yellow_Jackets_logo.svg",
    alt: "",
    className: "jsx-1760234247" + " " + "university-logo"
  }), Logo_jsx("img", {
    height: "40",
    src: "/images/logo.svg",
    alt: "Hack4Impact logo",
    className: "jsx-1760234247" + " " + "hack4impact-logo"
  }))), Logo_jsx((style_default()), {
    id: "1760234247"
  }, [".image-container.jsx-1760234247{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:40px;padding:0 !important;margin-right:auto;}", ".image-container.jsx-1760234247 img.jsx-1760234247{max-height:100%;}", ".image-container.jsx-1760234247 .university-logo.jsx-1760234247{border-right:1px solid #666;padding-right:15px;margin-right:15px;}", "@media (max-width:420px){.image-container.jsx-1760234247{height:32px;}.image-container.jsx-1760234247 .university-logo.jsx-1760234247{padding-right:10px;margin-right:10px;}}"]));
}

/* harmony default export */ var navbar_Logo = (Logo);
;// CONCATENATED MODULE: ./components/navbar/index.jsx


var navbar_jsx = (external_react_default()).createElement;







function Nav() {
  const router = (0,router_namespaceObject.useRouter)();
  const activeRoute = router.pathname;
  const {
    0: mobileNavOpened,
    1: setMobileNavOpened
  } = (0,external_react_.useState)(false);

  const toggleMobileNav = () => setMobileNavOpened(!mobileNavOpened); // when active route changes, we probably clicked on a nav link
  // in this case, collapse the nav dropdown for mobile users


  (0,external_react_.useEffect)(() => {
    setMobileNavOpened(false);
  }, [activeRoute]);
  (0,external_react_.useEffect)(() => {
    const escapeKeyListener = event => event.key === 'Escape' && setMobileNavOpened(false);

    document.addEventListener('keypress', escapeKeyListener);
    return () => document.removeEventListener('keypress', escapeKeyListener);
  }, []);
  const hasScrolledDown = utils_useHasScrolledDown();
  return navbar_jsx((external_react_default()).Fragment, null, navbar_jsx("header", {
    className: "jsx-345073854" + " " + ((hasScrolledDown ? 'header with_background' : 'header') || "")
  }, navbar_jsx("nav", {
    className: "jsx-345073854" + " " + `container nav_container ${mobileNavOpened ? 'nav_toggled' : ''}`
  }, navbar_jsx(navbar_Logo, null), navbar_jsx(navbar_MobileDropdownToggle, {
    toggled: mobileNavOpened,
    onClick: toggleMobileNav
  }), navbar_jsx("div", {
    className: "jsx-345073854" + " " + "dropdown_link_container"
  }, navbar_jsx(navbar_NavLink, {
    activeRoute: activeRoute,
    href: "/about"
  }, "About Us"), navbar_jsx(navbar_NavLink, {
    activeRoute: activeRoute,
    href: "/projects"
  }, "Our Work"), navbar_jsx(navbar_NavLink, {
    activeRoute: activeRoute,
    href: "/apply"
  }, "Apply"), navbar_jsx("a", {
    href: "mailto:bostonuniversity@hack4impact.org",
    className: "jsx-345073854"
  }, "Contact Us")))), navbar_jsx((style_default()), {
    id: "345073854"
  }, [".header.jsx-345073854{-webkit-transition:background-color 0.3s;transition:background-color 0.3s;position:fixed;top:0;left:0;right:0;height:var(--nav-height);z-index:9999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".header.jsx-345073854::before{content:'';background-color:rgba(255,255,255,0);-webkit-transition:background-color 0.2s;transition:background-color 0.2s;}", ".header.with_background.jsx-345073854::before{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(255,255,255,0.8);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);}", ".nav_container.jsx-345073854{width:100%;margin-left:auto;margin-right:auto;padding:0 20px;font-size:20px;display:inherit;-webkit-align-items:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;}", ".nav_container.jsx-345073854 a + a{margin-left:10px;}", ".nav_container.jsx-345073854 a,a:visited{display:inline-block;color:var(--primary-dark);-webkit-text-decoration:none;text-decoration:none;padding:10px 20px;border-radius:5px;-webkit-transition:color 0.2s;transition:color 0.2s;}", ".nav_container.jsx-345073854 a:hover,a:visited:hover{color:var(--accent-orange);}", ".nav_container.jsx-345073854 .dropdown_link_container.jsx-345073854{display:inherit;-webkit-align-items:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;}", "@media (max-width:1000px){.nav_container.jsx-345073854 .dropdown_link_container.jsx-345073854{position:fixed;top:0;left:0;right:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;z-index:0;margin:0;padding-left:7vw;padding-right:7vw;height:100vh;height:-webkit-fill-available;overflow:hidden;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:-webkit-transform 0.3s,opacity 0.4s;-webkit-transition:transform 0.3s,opacity 0.4s;transition:transform 0.3s,opacity 0.4s;opacity:0;background:rgba(255,255,255,0.8);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);}.nav_container.jsx-345073854 .dropdown_link_container.jsx-345073854 a,a:visited{font-size:36px;font-weight:bold;padding:0;}.nav_container.jsx-345073854 .dropdown_link_container.jsx-345073854 a + a{margin:0;margin-top:40px;}.nav_container.nav_toggled.jsx-345073854>.dropdown_link_container.jsx-345073854{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}"]));
}

/* harmony default export */ var navbar = (Nav);
;// CONCATENATED MODULE: external "react-ga"
var external_react_ga_namespaceObject = require("react-ga");;
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_namespaceObject);
;// CONCATENATED MODULE: ./components/Analytics.jsx


const initializeGA = () => {
  external_react_ga_default().initialize('UA-144770649-1');
};

const logPage = () => {
  external_react_ga_default().pageview(window.location.pathname + window.location.search);
};

const logEvent = (name, action) => {
  ReactGA.event({
    category: name,
    action: action
  });
};


;// CONCATENATED MODULE: external "next-page-transitions"
var external_next_page_transitions_namespaceObject = require("next-page-transitions");;
;// CONCATENATED MODULE: ./pages/_app.jsx


var _app_jsx = (external_react_default()).createElement;

function _app_extends() { _app_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _app_extends.apply(this, arguments); }








function App({
  Component,
  pageProps
}) {
  const router = (0,router_namespaceObject.useRouter)();
  const activeRoute = router.pathname; // ping Google Analytics on every route change

  (0,external_react_.useEffect)(() => {
    initializeGA();
    logPage();
  }, [activeRoute]);
  return _app_jsx("div", {
    className: "jsx-3718647696"
  }, _app_jsx(navbar, null), _app_jsx(external_next_page_transitions_namespaceObject.PageTransition, {
    timeout: 300,
    classNames: "page-transition"
  }, _app_jsx(Component, _app_extends({}, pageProps, {
    className: "jsx-3718647696" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
  }))), _app_jsx(footer, null), _app_jsx((style_default()), {
    id: "3718647696"
  }, [".page-transition-enter{opacity:0;}", ".page-transition-enter-active{opacity:1;-webkit-transition:opacity 100ms;transition:opacity 100ms;}", ".page-transition-exit{opacity:1;}", ".page-transition-exit-active{opacity:0;-webkit-transition:opacity 100ms;transition:opacity 100ms;}"]));
}

/* harmony default export */ var _app = (App);

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 6099:
/***/ (function(module) {

"use strict";
module.exports = require("reactstrap");;

/***/ }),

/***/ 3289:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(8788); });
module.exports = __webpack_exports__;

})();