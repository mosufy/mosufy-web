/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(3);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = vendor;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(439);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(32);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(64);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "nav" },
        _react2.default.createElement(
          "nav",
          { className: "navbar navbar-custom" },
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { className: "navbar-header" },
              _react2.default.createElement(
                "button",
                { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-main-collapse" },
                _react2.default.createElement("i", { className: "fa fa-bars" })
              ),
              _react2.default.createElement(
                "a",
                { className: "navbar-brand page-scroll", href: "#page-top" },
                "Mohd Sufiyan"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "collapse navbar-collapse navbar-right navbar-main-collapse" },
              _react2.default.createElement(
                "ul",
                { className: "nav navbar-nav" },
                _react2.default.createElement(
                  "li",
                  { className: "hidden" },
                  _react2.default.createElement("a", { href: "#page-top" })
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { className: "page-scroll", href: "#about" },
                    "About"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { className: "page-scroll", href: "#skills" },
                    "Skills"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { className: "page-scroll", href: "#portfolio" },
                    "Portfolio"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { className: "page-scroll", href: "#resume" },
                    "Resume"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { className: "page-scroll", href: "#contact" },
                    "Contact"
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * localStorage
 *
 * Persist data to localStorage.
 * TODO: Error handler especially for saveState().
 *
 * @date 11/3/2016
 * @author Mosufy <mosufy@gmail.com>
 * @copyright Copyright (c) Mosufy
 */

var loadState = exports.loadState = function loadState() {
  try {
    var serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

var saveState = exports.saveState = function saveState(state) {
  try {
    var serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore for now
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(4);

var _portfolios = __webpack_require__(36);

var _portfolios2 = _interopRequireDefault(_portfolios);

var _portfolioCategory = __webpack_require__(35);

var _portfolioCategory2 = _interopRequireDefault(_portfolioCategory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = (0, _redux.combineReducers)({
  portfolios: _portfolios2.default,
  portfolioCategory: _portfolioCategory2.default
}); /**
     * index.js
     *
     * Binds all of our reducers into a single reducer that can be imported.
     * A reducer takes an existing state, executes the action and returns the new state.
     *
     * @date 11/3/2017
     * @author Mosufy <mosufy@gmail.com>
     * @copyright Copyright (c) Mosufy
     */

exports.default = App;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _AppContainer = __webpack_require__(31);

var _AppContainer2 = _interopRequireDefault(_AppContainer);

var _HomeContainer = __webpack_require__(32);

var _HomeContainer2 = _interopRequireDefault(_HomeContainer);

var _NotFoundPageContainer = __webpack_require__(33);

var _NotFoundPageContainer2 = _interopRequireDefault(_NotFoundPageContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _AppContainer2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomeContainer2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFoundPageContainer2.default })
);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(344);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(353);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(504);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var resetPortfolio = exports.resetPortfolio = function resetPortfolio() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'portfolio-category-all';

  return {
    type: 'RESET_PORTFOLIO',
    payload: {
      data: [{
        title: "Lument-React",
        snippet: "Foundation for an API-Centric Architecture with Laravel's Lumen (API) and React (Web)",
        category: "open-source",
        img: "lumen-react.jpg",
        link: "https://github.com/mosufy/lumen-react"
      }, {
        title: "Arena",
        snippet: "Provides quantitative metrics to help young professionals stand out for promotion through a gamified concept.",
        category: "project",
        img: "arena.jpg",
        link: "https://www.thearena.co/"
      }, {
        title: "Maggie",
        snippet: "Automates timekeeping for hourly-based professionals, offering their clients credible and accurate invoices.",
        category: "project",
        img: "maggie.jpg",
        link: "https://www.heymaggie.com/"
      }, {
        title: "PropertyAPI",
        snippet: "Provides real estate agents the ability to have their own property listing website integrated via RESTful API.",
        category: "project",
        img: "propertyapi.jpg",
        link: "https://www.propertyapi.com/"
      }, {
        title: "VixHub",
        snippet: "Simplifies and packages business processes into a single comprehensive and user-friendly cloud-based software.",
        category: "app",
        img: "vixhub.jpg",
        link: "http://www.vixhub.com/"
      }, {
        title: "API coLab",
        snippet: "Tinder for Cheaper Flights concept app for Hack Day. Coded in 6 hours with a 2-min pitch.",
        category: "experiment",
        img: "apicolab.jpg",
        link: "https://github.com/mosufy/apicolab-hackday/"
      }, {
        title: "BusWhere",
        snippet: "Search for buses near an area and know when the buses arrive at a specific bus stop using an API.",
        category: "experiment",
        img: "buswhere.jpg",
        link: "https://github.com/mosufy/bus-where"
      }, {
        title: "PHP MVC Framework",
        snippet: "Provides basic, barebone essentials to deploy a project quickly. Hosted on GitHub.",
        category: "experiment",
        img: "php-mvc.jpg",
        link: "https://github.com/mosufy/php-mvc"
      }]
    },
    category: category
  };
};

var switchCategory = exports.switchCategory = function switchCategory(category) {
  return function (dispatch, getState) {
    dispatch(resetPortfolio(category));
    dispatch(toggleCategory(category));
  };
};

var toggleCategory = exports.toggleCategory = function toggleCategory(category) {
  return {
    type: 'TOGGLE_CATEGORY',
    category: category
  };
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "about" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "section-title text-center center" },
            _react2.default.createElement(
              "h2",
              null,
              "About Me"
            ),
            _react2.default.createElement("hr", null)
          ),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "col-md-12 text-center" },
              _react2.default.createElement("img", { src: "img/about.jpg", className: "img-responsive" })
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-8 col-md-offset-2" },
              _react2.default.createElement(
                "div",
                { className: "about-text" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Pushing my boundaries and trying out new things as part of experience building for both my personal and professional progression."
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "I am a full-stack developer; from idea validation to product development to launch. I am capable of developing web apps as a service as well as an end-product. I've worked as a 1-man team, building an API service for a mobile telephony app to team lead of up to 10-men team to re-architect a high traffic dating site from the ground up as a Technical Lead at Incube8."
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "I have experienced running my own start-up; both as a part-time as well as full-time basis, and was part of JFDI's (Joyful Frog Digital Incubator) 2014A Accelerator programme."
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "As a Senior Web Developer and a founding member of the Digital Platform Team in a previous ad agency for almost 3 years, I have worked closely with various media agency partners, account managers, designers, art directors and direct with clients, and thus well versed in the advertising, media and marketing landscape."
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "I am also experienced in web server administration; particularly on Amazon Web Services (AWS) and Digital Ocean (DO) and can deploy and host web servers on the fly. Building highly scalable and redundant web is one of my next learning points."
                ),
                _react2.default.createElement(
                  "p",
                  { className: "text-center" },
                  _react2.default.createElement(
                    "a",
                    { className: "btn btn-primary", href: "#" },
                    _react2.default.createElement("i", { className: "fa fa-download" }),
                    " Download Resume"
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return About;
}(_react2.default.Component);

exports.default = About;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Footer = __webpack_require__(16);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    null,
    children,
    _react2.default.createElement(_Footer2.default, null)
  );
};

exports.default = App;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SocialIcon = __webpack_require__(28);

var _SocialIcon2 = _interopRequireDefault(_SocialIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'contact', className: 'text-center' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'section-title center' },
            _react2.default.createElement(
              'h2',
              null,
              'Contact'
            ),
            _react2.default.createElement('hr', null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-8 col-md-offset-2' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-4' },
              _react2.default.createElement('i', { className: 'fa fa-map-marker fa-2x' }),
              _react2.default.createElement(
                'p',
                null,
                'Singapore'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-4' },
              _react2.default.createElement('i', { className: 'fa fa-envelope-o fa-2x' }),
              _react2.default.createElement(
                'p',
                null,
                'mosufy@gmail.com'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-4' },
              _react2.default.createElement('i', { className: 'fa fa-phone fa-2x' }),
              _react2.default.createElement(
                'p',
                null,
                '+65 8484 0255'
              )
            ),
            _react2.default.createElement('div', { className: 'clearfix' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-8 col-md-offset-2' },
            _react2.default.createElement(
              'h3',
              null,
              'Leave me a message'
            ),
            _react2.default.createElement(
              'form',
              { name: 'sentMessage', id: 'contactForm', noValidate: true },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-6' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement('input', { type: 'text', id: 'name', className: 'form-control', placeholder: 'Name', required: 'required' }),
                    _react2.default.createElement('p', { className: 'help-block text-danger' })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-6' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement('input', { type: 'email', id: 'email', className: 'form-control', placeholder: 'Email', required: 'required' }),
                    _react2.default.createElement('p', { className: 'help-block text-danger' })
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement('textarea', { name: 'message', id: 'message', className: 'form-control', rows: '4', placeholder: 'Message', required: true }),
                _react2.default.createElement('p', { className: 'help-block text-danger' })
              ),
              _react2.default.createElement('div', { id: 'success' }),
              _react2.default.createElement(
                'button',
                { type: 'submit', className: 'btn btn-default' },
                'Send Message'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'social' },
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(_SocialIcon2.default, { link: 'https://www.facebook.com/mosufy', faName: 'fa fa-facebook' }),
                _react2.default.createElement(_SocialIcon2.default, { link: 'https://www.github.com/mosufy', faName: 'fa fa-github' }),
                _react2.default.createElement(_SocialIcon2.default, { link: 'https://stackoverflow.com/users/2617503/mosufy', faName: 'fa fa-stack-overflow' }),
                _react2.default.createElement(_SocialIcon2.default, { link: 'https://www.linkedin.com/in/mohdsufiyan', faName: 'fa fa-linkedin' })
              )
            )
          )
        )
      );
    }
  }]);

  return Contact;
}(_react2.default.Component);

exports.default = Contact;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "footer" },
        _react2.default.createElement(
          "div",
          { className: "container text-center" },
          _react2.default.createElement(
            "div",
            { className: "fnav" },
            _react2.default.createElement(
              "p",
              null,
              "Copyright \xA9 2017 Mohd Sufiyan. Designed by ",
              _react2.default.createElement(
                "a",
                { href: "http://www.templatewire.com", rel: "nofollow" },
                "TemplateWire"
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hero = function (_React$Component) {
  _inherits(Hero, _React$Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
  }

  _createClass(Hero, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        { id: "header" },
        _react2.default.createElement(
          "div",
          { className: "intro" },
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement(
                "div",
                { className: "intro-text" },
                _react2.default.createElement(
                  "h1",
                  null,
                  "Hello, I'm ",
                  _react2.default.createElement(
                    "span",
                    { className: "name" },
                    "Mohd Sufiyan"
                  )
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Tech Lead & Aspiring Entrepreneur"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#about", className: "btn btn-default btn-lg page-scroll" },
                  "Learn More"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Hero;
}(_react2.default.Component);

exports.default = Hero;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navbar = __webpack_require__(5);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Hero = __webpack_require__(17);

var _Hero2 = _interopRequireDefault(_Hero);

var _About = __webpack_require__(13);

var _About2 = _interopRequireDefault(_About);

var _Skills = __webpack_require__(27);

var _Skills2 = _interopRequireDefault(_Skills);

var _Portfolio = __webpack_require__(20);

var _Portfolio2 = _interopRequireDefault(_Portfolio);

var _Stats = __webpack_require__(30);

var _Stats2 = _interopRequireDefault(_Stats);

var _Resume = __webpack_require__(23);

var _Resume2 = _interopRequireDefault(_Resume);

var _Contact = __webpack_require__(15);

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.portfolioCategory !== nextProps.portfolioCategory;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Hero2.default, null),
        _react2.default.createElement(_Navbar2.default, null),
        _react2.default.createElement(_About2.default, null),
        _react2.default.createElement(_Skills2.default, null),
        _react2.default.createElement(_Portfolio2.default, { portfolios: this.props.portfolios,
          portfolioCategory: this.props.portfolioCategory,
          handlePortfolioCategorySwitch: this.props.handlePortfolioCategorySwitch }),
        _react2.default.createElement(_Stats2.default, null),
        _react2.default.createElement(_Resume2.default, null),
        _react2.default.createElement(_Contact2.default, null)
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

Home.propTypes = {
  portfolios: _react2.default.PropTypes.array,
  portfolioCategory: _react2.default.PropTypes.string,
  handlePortfolioCategorySwitch: _react2.default.PropTypes.func
};

Home.defaultProps = {
  portfolios: [],
  portfolioCategory: 'portfolio-category-all'
};

exports.default = Home;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _Navbar = __webpack_require__(5);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'div',
        { className: 'clearfix' },
        '\xA0'
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12', style: { marginTop: 200 + 'px', marginBottom: 150 + 'px' } },
          _react2.default.createElement(
            'h2',
            null,
            '404 - Page Not Found'
          ),
          _react2.default.createElement(
            'p',
            null,
            'I\'m sorry, the page you were looking for cannot be found! Click ',
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/' },
              'here'
            ),
            ' to go back to the homepage.'
          )
        )
      )
    ),
    _react2.default.createElement(_Navbar2.default, null)
  );
};

exports.default = NotFoundPage;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PortfolioList = __webpack_require__(22);

var _PortfolioList2 = _interopRequireDefault(_PortfolioList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portfolio = function (_React$Component) {
  _inherits(Portfolio, _React$Component);

  function Portfolio() {
    _classCallCheck(this, Portfolio);

    return _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).apply(this, arguments));
  }

  _createClass(Portfolio, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.portfolioCategory !== nextProps.portfolioCategory;
    }
  }, {
    key: 'render',
    value: function render() {
      var portfolios = this.props.portfolios;
      var portfolioCategory = this.props.portfolioCategory;
      var handlePortfolioCategorySwitch = this.props.handlePortfolioCategorySwitch;

      return _react2.default.createElement(
        'div',
        { id: 'portfolio' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'section-title text-center center' },
            _react2.default.createElement(
              'h2',
              null,
              'Portfolio'
            ),
            _react2.default.createElement('hr', null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'categories' },
            _react2.default.createElement(
              'ul',
              { className: 'cat' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'ol',
                  { className: 'type' },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#', id: 'portfolio-category-all', className: portfolioCategory == "portfolio-category-all" ? "active" : "", onClick: handlePortfolioCategorySwitch },
                      'All'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#', id: 'portfolio-category-open-source', className: portfolioCategory == "portfolio-category-open-source" ? "active" : "", onClick: handlePortfolioCategorySwitch },
                      'Open Source'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#', id: 'portfolio-category-project', className: portfolioCategory == "portfolio-category-project" ? "active" : "", onClick: handlePortfolioCategorySwitch },
                      'Project'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#', id: 'portfolio-category-experiment', className: portfolioCategory == "portfolio-category-experiment" ? "active" : "", onClick: handlePortfolioCategorySwitch },
                      'Experiment'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement('div', { className: 'clearfix' })
          ),
          _react2.default.createElement(_PortfolioList2.default, { portfolioItems: portfolios })
        )
      );
    }
  }]);

  return Portfolio;
}(_react2.default.Component);

Portfolio.propTypes = {
  portfolios: _react2.default.PropTypes.array,
  portfolioCategory: _react2.default.PropTypes.string,
  handlePortfolioCategorySwitch: _react2.default.PropTypes.func
};

Portfolio.defaultProps = {
  portfolios: [],
  portfolioCategory: 'portfolio-category-all'
};

exports.default = Portfolio;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PortfolioItem = function PortfolioItem(_ref) {
  var title = _ref.title,
      snippet = _ref.snippet,
      category = _ref.category,
      img = _ref.img,
      link = _ref.link;

  return _react2.default.createElement(
    "div",
    { className: "col-sm-6 col-md-4 col-lg-4 " + category },
    _react2.default.createElement(
      "div",
      { className: "portfolio-item" },
      _react2.default.createElement(
        "div",
        { className: "hover-bg" },
        _react2.default.createElement(
          "a",
          { href: link, target: "_blank", title: title, rel: "prettyPhoto" },
          _react2.default.createElement(
            "div",
            { className: "hover-text" },
            _react2.default.createElement(
              "h4",
              null,
              title
            ),
            _react2.default.createElement(
              "small",
              null,
              snippet
            )
          ),
          _react2.default.createElement("img", { src: 'img/portfolio/mockup-' + img, className: "img-responsive", alt: title })
        )
      )
    )
  );
};

exports.default = PortfolioItem;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PortfolioItem = __webpack_require__(21);

var _PortfolioItem2 = _interopRequireDefault(_PortfolioItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderPortfolioItem = function renderPortfolioItem(portfolioItem) {
  return _react2.default.createElement(
    'div',
    { key: portfolioItem.id },
    _react2.default.createElement(_PortfolioItem2.default, { title: portfolioItem.title, snippet: portfolioItem.snippet, category: portfolioItem.category, img: portfolioItem.img, link: portfolioItem.link })
  );
};

var PortfolioList = function PortfolioList(_ref) {
  var portfolioItems = _ref.portfolioItems;

  return _react2.default.createElement(
    'div',
    { className: 'row' },
    _react2.default.createElement(
      'div',
      { className: 'portfolio-items' },
      portfolioItems.map(renderPortfolioItem)
    )
  );
};

exports.default = PortfolioList;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ResumeList = __webpack_require__(25);

var _ResumeList2 = _interopRequireDefault(_ResumeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Resume = function (_React$Component) {
  _inherits(Resume, _React$Component);

  function Resume() {
    _classCallCheck(this, Resume);

    return _possibleConstructorReturn(this, (Resume.__proto__ || Object.getPrototypeOf(Resume)).apply(this, arguments));
  }

  _createClass(Resume, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'resume', className: 'text-center' },
        _react2.default.createElement(_ResumeList2.default, { section: 'Experience' }),
        _react2.default.createElement(_ResumeList2.default, { section: 'Achievement' }),
        _react2.default.createElement(_ResumeList2.default, { section: 'Certification' }),
        _react2.default.createElement(_ResumeList2.default, { section: 'Education' })
      );
    }
  }]);

  return Resume;
}(_react2.default.Component);

exports.default = Resume;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getTimeline = function getTimeline(dateFrom, dateTo) {
  if (dateFrom == "") {
    return _react2.default.createElement(
      "h4",
      null,
      dateFrom,
      _react2.default.createElement("br", null),
      dateTo
    );
  } else {
    return _react2.default.createElement(
      "h4",
      null,
      dateFrom,
      _react2.default.createElement("br", null),
      "-",
      _react2.default.createElement("br", null),
      dateTo
    );
  }
};

var ResumeItem = function ResumeItem(_ref) {
  var inverted = _ref.inverted,
      dateFrom = _ref.dateFrom,
      dateTo = _ref.dateTo,
      itemHead = _ref.itemHead,
      itemSubhead = _ref.itemSubhead,
      itemSnippet = _ref.itemSnippet;

  return _react2.default.createElement(
    "li",
    { className: inverted ? "timeline-inverted" : "" },
    _react2.default.createElement(
      "div",
      { className: "timeline-image" },
      getTimeline(dateFrom, dateTo)
    ),
    _react2.default.createElement(
      "div",
      { className: "timeline-panel" },
      _react2.default.createElement(
        "div",
        { className: "timeline-heading" },
        _react2.default.createElement(
          "h4",
          null,
          itemHead
        ),
        _react2.default.createElement(
          "h4",
          { className: "subheading" },
          itemSubhead
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "timeline-body" },
        _react2.default.createElement(
          "p",
          null,
          itemSnippet
        )
      )
    )
  );
};

exports.default = ResumeItem;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ResumeItem = __webpack_require__(24);

var _ResumeItem2 = _interopRequireDefault(_ResumeItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getResumeItems = function getResumeItems(sectionName) {
  switch (sectionName) {
    case 'Experience':
      return _react2.default.createElement(
        'ul',
        { className: 'timeline' },
        _react2.default.createElement(_ResumeItem2.default, { inverted: false, dateFrom: 'Aug 2014', dateTo: 'Present', itemHead: 'Incube8', itemSubhead: 'Tech Lead', itemSnippet: 'Lead 10-person development team for a flagship dating site with >200,000 active daily users. Proposed and engineered the core architecture. Acted as Scrum Master with a 2 week release life-cycle.' }),
        _react2.default.createElement(_ResumeItem2.default, { inverted: true, dateFrom: 'Mar 2014', dateTo: 'Jul 2014', itemHead: 'SM Solutions', itemSubhead: 'Co-founder', itemSnippet: 'Selected 13/315 teams to complete a 3-month Start-up Accelerator Bootcamp at JFDI.Asia with a $25,000 funding. Learnt crucial aspects of running a start-up using LEAN and Agile methodologies.' }),
        _react2.default.createElement(_ResumeItem2.default, { inverted: false, dateFrom: 'Jul 2011', dateTo: 'Mar 2014', itemHead: 'The Idea Laboratory', itemSubhead: 'Senior Web Developer', itemSnippet: 'Led 3-person digital team. Clients include Tigerair, Burger King, Workforce Development Agency, Renesas APAC, Nestle Sjora & Milo, Ngee Ann Polytechnic, Resorts World Sentosa, among others.' }),
        _react2.default.createElement(_ResumeItem2.default, { inverted: true, dateFrom: '2011', dateTo: '2014', itemHead: 'Singapore Armed Forces', itemSubhead: 'Platoon Commander, Instructor', itemSnippet: 'Gained leadership, coaching and instructional skills as a Platoon Commander of >30 men. Later on as an Instructor, trained would-be officers of the Armed Forces to excel beyond their limits.' })
      );
    case 'Achievement':
      return _react2.default.createElement(
        'ul',
        { className: 'timeline' },
        _react2.default.createElement(_ResumeItem2.default, { inverted: false, dateFrom: '', dateTo: 'Jan 2014', itemHead: 'StarHub i3', itemSubhead: '1st Place: StarHub SmartFoundry Challenge 2013', itemSnippet: 'A follow-up of StarHub\'s \u201CEnterprise Communications Made Easy\u201D Hackathon, this competition allows winning teams to build a more elaborate prototype of their ideas.' }),
        _react2.default.createElement(_ResumeItem2.default, { inverted: true, dateFrom: '', dateTo: 'Nov 2013', itemHead: 'StarHub i3', itemSubhead: '1st Runner-up: Enterprise Communications Made Easy Hackathon', itemSnippet: '7-hour hackathon to create and prototype solutions that make use of StarHub\'s SmartFoundry solutions.' }),
        _react2.default.createElement(_ResumeItem2.default, { inverted: false, dateFrom: '', dateTo: 'Nov 2007', itemHead: 'Singapore Polytechnic', itemSubhead: 'Finalist: Asia Pacific ICT Alliance Awards (APICTA) 2007', itemSnippet: 'Finalist in Asia Pacific ICT Alliance Awards (APICTA) 2007, held in Macau. Represented Singapore Polytechnic in the Tertiary Student Project Award.' })
      );
    case 'Certification':
      return _react2.default.createElement(
        'ul',
        { className: 'timeline' },
        _react2.default.createElement(_ResumeItem2.default, { inverted: false, dateFrom: '', dateTo: 'Jul 2016', itemHead: 'Scrum.org', itemSubhead: 'Professional Scrum Master I', itemSnippet: 'Professional Scrum Master (PSM) I certificate holders prove that they understand Scrum as described in the Scrum Guide and the concepts and terminology of applying Scrum.' }),
        _react2.default.createElement(_ResumeItem2.default, { inverted: true, dateFrom: '', dateTo: 'Aug 2009', itemHead: 'Centre for Management Development', itemSubhead: 'Coaching for Performance & Development', itemSnippet: 'Learn the aspects of coaching and techniques to apply those skills appropriately in their work environment to develop and improve staff performance.' }),
        _react2.default.createElement(_ResumeItem2.default, { inverted: false, dateFrom: '', dateTo: 'Jul 2009', itemHead: 'National Institute of Education', itemSubhead: 'Introducing Problem-Based Learning', itemSnippet: 'Problem-Based Learning (PBL) is a pedagogy that encourages students to learn through problem-solving.' }),
        _react2.default.createElement(_ResumeItem2.default, { inverted: true, dateFrom: '', dateTo: 'Jan 2009', itemHead: 'Centre for Management Development', itemSubhead: 'The Art of Delegation', itemSnippet: 'As management is really about getting things done through people, successful delegation is a vital aspect of a manager\'s job.' })
      );
    case 'Education':
      return _react2.default.createElement(
        'ul',
        { className: 'timeline' },
        _react2.default.createElement(_ResumeItem2.default, { inverted: false, dateFrom: '2004', dateTo: '2007', itemHead: 'Singapore Polytechnic', itemSubhead: 'Diploma in Multimedia Technology', itemSnippet: 'Finalist in Asia Pacific ICT Alliance Awards (APICTA) 2007, Macau. National IP Champion Camp Mentor for IPOS, 2006. Awarded Distinction in Drawing.' }),
        _react2.default.createElement(_ResumeItem2.default, { inverted: true, dateFrom: '2000', dateTo: '2003', itemHead: 'Montfort Seconday School', itemSubhead: 'GCE \'O\'', itemSnippet: '\'A\' Grade for Art, Math, Additional Math, Science. Vice Chairman of Art Club, 2002. Outstanding Performance in ART, 2002. EAGLES Award (Achievement, Good Leadership, Service) in 2001.' })
      );
  }
};

var ResumeList = function ResumeList(_ref) {
  var section = _ref.section;

  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(
      'div',
      { className: 'section-title center' },
      _react2.default.createElement(
        'h2',
        null,
        section
      ),
      _react2.default.createElement('hr', null)
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-lg-12' },
        getResumeItems(section)
      )
    )
  );
};

exports.default = ResumeList;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkillItem = function SkillItem(_ref) {
  var skillCategory = _ref.skillCategory,
      skillItem = _ref.skillItem;

  return _react2.default.createElement(
    "div",
    { className: "col-md-4 col-sm-6 skill" },
    _react2.default.createElement(
      "h4",
      null,
      skillCategory
    ),
    _react2.default.createElement(
      "span",
      { className: "chart" },
      _react2.default.createElement(
        "span",
        { className: "skill-items" },
        skillItem
      )
    )
  );
};

exports.default = SkillItem;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SkillItem = __webpack_require__(26);

var _SkillItem2 = _interopRequireDefault(_SkillItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Skills = function (_React$Component) {
  _inherits(Skills, _React$Component);

  function Skills() {
    _classCallCheck(this, Skills);

    return _possibleConstructorReturn(this, (Skills.__proto__ || Object.getPrototypeOf(Skills)).apply(this, arguments));
  }

  _createClass(Skills, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'skills', className: 'text-center' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'section-title center' },
            _react2.default.createElement(
              'h2',
              null,
              'Skills'
            ),
            _react2.default.createElement('hr', null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(_SkillItem2.default, { skillCategory: 'Technologies', skillItem: Skills.getSkillItems('Technologies') }),
            _react2.default.createElement(_SkillItem2.default, { skillCategory: 'Front-end', skillItem: Skills.getSkillItems('Front-end') }),
            _react2.default.createElement(_SkillItem2.default, { skillCategory: 'DevOps', skillItem: Skills.getSkillItems('DevOps') }),
            _react2.default.createElement(_SkillItem2.default, { skillCategory: 'Software', skillItem: Skills.getSkillItems('Software') }),
            _react2.default.createElement(_SkillItem2.default, { skillCategory: 'Administration', skillItem: Skills.getSkillItems('Administration') }),
            _react2.default.createElement(_SkillItem2.default, { skillCategory: 'Management', skillItem: Skills.getSkillItems('Management') })
          )
        )
      );
    }
  }], [{
    key: 'getSkillItems',
    value: function getSkillItems(skillCategory) {
      switch (skillCategory) {
        case 'Technologies':
          return _react2.default.createElement(
            'span',
            null,
            'Laravel 5.3 \u2022 Lumen',
            _react2.default.createElement('br', null),
            'PHP 7.0 \u2022 MySQL 5.6',
            _react2.default.createElement('br', null),
            'Memcached \u2022 Redis',
            _react2.default.createElement('br', null),
            'Queue Services',
            _react2.default.createElement('br', null),
            'Elasticsearch \u2022 Sphinx',
            _react2.default.createElement('br', null),
            'API \u2022 OAuth2',
            _react2.default.createElement('br', null),
            'Codeception \u2022 Unit Test'
          );
        case 'Front-end':
          return _react2.default.createElement(
            'span',
            null,
            'HTML5 \u2022 CSS3',
            _react2.default.createElement('br', null),
            'JavaScript \u2022 JQuery',
            _react2.default.createElement('br', null),
            'Blade \u2022 Bootstrap',
            _react2.default.createElement('br', null),
            'Gulp \u2022 Bower',
            _react2.default.createElement('br', null),
            'React \u2022 React Native',
            _react2.default.createElement('br', null),
            'Canvas'
          );
        case 'DevOps':
          return _react2.default.createElement(
            'span',
            null,
            'Vagrant \u2022 Virtualbox',
            _react2.default.createElement('br', null),
            'Ansible \u2022 Jenkins CI',
            _react2.default.createElement('br', null),
            'Web Server Administration',
            _react2.default.createElement('br', null),
            'AWS \u2022 Digital Ocean',
            _react2.default.createElement('br', null),
            'Cloudflare \u2022 CloudFront',
            _react2.default.createElement('br', null),
            'Bugsnag \u2022 Sentry',
            _react2.default.createElement('br', null),
            'Tinc VPN \u2022 Travis CI'
          );
        case 'Software':
          return _react2.default.createElement(
            'span',
            null,
            'SourceTree \u2022 Git',
            _react2.default.createElement('br', null),
            'JIRA \u2022 Confluence',
            _react2.default.createElement('br', null),
            'GitHub \u2022 Bitbucket',
            _react2.default.createElement('br', null),
            'Stash \u2022 Crucible',
            _react2.default.createElement('br', null),
            'Deployment Automation'
          );
        case 'Administration':
          return _react2.default.createElement(
            'span',
            null,
            'Agile \u2022 Lean',
            _react2.default.createElement('br', null),
            'Technical Documentation',
            _react2.default.createElement('br', null),
            'Technical Writing',
            _react2.default.createElement('br', null),
            'Software Architect'
          );
        case 'Management':
          return _react2.default.createElement(
            'span',
            null,
            'Tech Lead \u2022 Team Lead',
            _react2.default.createElement('br', null),
            'Team Management',
            _react2.default.createElement('br', null),
            'Team Formation',
            _react2.default.createElement('br', null),
            'Scrum Master',
            _react2.default.createElement('br', null),
            'Consultant \u2022 Coach'
          );
      }
    }
  }]);

  return Skills;
}(_react2.default.Component);

exports.default = Skills;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialIcon = function SocialIcon(_ref) {
  var link = _ref.link,
      faName = _ref.faName;

  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'a',
      { href: link },
      _react2.default.createElement('i', { className: faName })
    )
  );
};

exports.default = SocialIcon;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatItem = function StatItem(_ref) {
  var statName = _ref.statName,
      statCount = _ref.statCount;

  return _react2.default.createElement(
    "div",
    { className: "col-md-3 col-sm-3" },
    _react2.default.createElement(
      "div",
      { className: "achievement-box" },
      _react2.default.createElement(
        "span",
        { className: "count" },
        statCount
      ),
      _react2.default.createElement(
        "h4",
        null,
        statName
      )
    )
  );
};

exports.default = StatItem;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _StatItem = __webpack_require__(29);

var _StatItem2 = _interopRequireDefault(_StatItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stats = function (_React$Component) {
  _inherits(Stats, _React$Component);

  function Stats() {
    _classCallCheck(this, Stats);

    return _possibleConstructorReturn(this, (Stats.__proto__ || Object.getPrototypeOf(Stats)).apply(this, arguments));
  }

  _createClass(Stats, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'achievements', className: 'text-center' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'section-title center' },
            _react2.default.createElement(
              'h2',
              null,
              'Some Stats'
            ),
            _react2.default.createElement('hr', null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(_StatItem2.default, {
              statName: 'Happy Clients',
              statCount: 310 }),
            _react2.default.createElement(_StatItem2.default, {
              statName: 'Hours of Work',
              statCount: 4700 }),
            _react2.default.createElement(_StatItem2.default, {
              statName: 'Awards Won',
              statCount: 30 }),
            _react2.default.createElement(_StatItem2.default, {
              statName: 'Years of Experience',
              statCount: 6 })
          )
        )
      );
    }
  }]);

  return Stats;
}(_react2.default.Component);

exports.default = Stats;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _reactRouter = __webpack_require__(2);

var _App = __webpack_require__(14);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AppContainer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 11/3/2017
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Mosufy <mosufy@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright Copyright (c) Mosufy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var AppContainer = function (_React$Component) {
  _inherits(AppContainer, _React$Component);

  function AppContainer() {
    _classCallCheck(this, AppContainer);

    return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));
  }

  _createClass(AppContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_App2.default, this.props);
    }
  }]);

  return AppContainer;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppContainer);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(18);

var _Home2 = _interopRequireDefault(_Home);

var _reactRedux = __webpack_require__(3);

var _portfolioActions = __webpack_require__(12);

var portfolioActions = _interopRequireWildcard(_portfolioActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * HomeContainer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 11/3/2017
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Mosufy <mosufy@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright Copyright (c) Mosufy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var HomeContainer = function (_React$Component) {
  _inherits(HomeContainer, _React$Component);

  function HomeContainer() {
    _classCallCheck(this, HomeContainer);

    return _possibleConstructorReturn(this, (HomeContainer.__proto__ || Object.getPrototypeOf(HomeContainer)).apply(this, arguments));
  }

  _createClass(HomeContainer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.portfolioCategory !== nextProps.portfolioCategory;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.resetPortfolio();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Home2.default, { portfolios: this.props.portfolios,
        portfolioCategory: this.props.portfolioCategory,
        handlePortfolioCategorySwitch: this.props.handlePortfolioCategorySwitch });
    }
  }]);

  return HomeContainer;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    portfolios: state.portfolios,
    portfolioCategory: state.portfolioCategory
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handlePortfolioCategorySwitch: function handlePortfolioCategorySwitch(e) {
      e.preventDefault();

      var category = $(e.target).closest("a").attr('id');
      dispatch(portfolioActions.switchCategory(category));
    },
    resetPortfolio: function resetPortfolio() {
      dispatch(portfolioActions.switchCategory('portfolio-category-all'));
    }
  };
};

HomeContainer.propTypes = {
  portfolios: _react2.default.PropTypes.array,
  portfolioCategory: _react2.default.PropTypes.string,
  handlePortfolioCategorySwitch: _react2.default.PropTypes.func
};

HomeContainer.defaultProps = {
  portfolios: [],
  portfolioCategory: 'portfolio-category-all'
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomeContainer);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NotFoundPage = __webpack_require__(19);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * NotFoundPageContainer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 11/3/2017
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Mosufy <mosufy@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright Copyright (c) Mosufy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var NotFoundPageContainer = function (_React$Component) {
  _inherits(NotFoundPageContainer, _React$Component);

  function NotFoundPageContainer() {
    _classCallCheck(this, NotFoundPageContainer);

    return _possibleConstructorReturn(this, (NotFoundPageContainer.__proto__ || Object.getPrototypeOf(NotFoundPageContainer)).apply(this, arguments));
  }

  _createClass(NotFoundPageContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_NotFoundPage2.default, null);
    }
  }]);

  return NotFoundPageContainer;
}(_react2.default.Component);

exports.default = NotFoundPageContainer;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(4);

var _reactRouter = __webpack_require__(2);

var _routes = __webpack_require__(8);

var _routes2 = _interopRequireDefault(_routes);

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

var _localStorage = __webpack_require__(6);

var _throttle = __webpack_require__(9);

var _throttle2 = _interopRequireDefault(_throttle);

var _reduxThunk = __webpack_require__(11);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create store with persisted state using localStorage
/**
 * Main ReactJS app
 *
 * @date 11/3/2017
 * @author Mosufy <mosufy@gmail.com>
 * @copyright Copyright (c) Mosufy
 */

var persistedState = (0, _localStorage.loadState)();
var store = (0, _redux.createStore)(_index2.default, persistedState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

// subscribe to state changes
// throttle added to only persist to localStorage at 1s interval
store.subscribe((0, _throttle2.default)(function () {
  (0, _localStorage.saveState)({
    // Add more state objects as required for persistence
    // example > todos: store.getState().todos
  });
}, 1000));

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes2.default })
), document.getElementById('root'));

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var portfolioCategory = function portfolioCategory() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case 'TOGGLE_CATEGORY':
      return action.category;
    default:
      return state;
  }
};

exports.default = portfolioCategory;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var portfolios = function portfolios() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'RESET_PORTFOLIO':
      var _portfolios = action.payload.data;
      var category = action.category;
      var items = [];

      for (var i = 0; i < _portfolios.length; i++) {
        if (category == "portfolio-category-all" || category == "portfolio-category-" + action.payload.data[i].category) {
          items.push({
            id: i,
            title: _portfolios[i].title,
            snippet: _portfolios[i].snippet,
            category: _portfolios[i].category,
            img: _portfolios[i].img,
            link: _portfolios[i].link
          });
        }
      }

      return items;
    default:
      return state;
  }
};

exports.default = portfolios;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle-7df65982c6b6f89a2dfe.js.map