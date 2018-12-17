module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar config = {\n  env: \"development\" || 'development',\n  port: process.env.PORT || 4000,\n  JWT_SECRET: process.env.JWT_SECRET || \"YOUR_secret_key\",\n  DB_URL: process.env.MONGODB_URI || 'mongodb://mern:mern123@ds263571.mlab.com:63571/mern',\n  LOGIN_TYPE: {\n    DEFAULT: 0,\n    GOOGLE: 1,\n    FACEBOOK: 2\n  },\n  VERIFY: {\n    DEFAULT: false,\n    VERIFIED: true\n  },\n  EMAIL: {\n    OWNER: \"sunnysavita18@gmail.com\"\n  }\n};\n\nvar _default = config;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, 'config', '/Users/himanshusavita/Documents/Books/Node/AttendenceTacker/config/config.js');\n  reactHotLoader.register(_default, 'default', '/Users/himanshusavita/Documents/Books/Node/AttendenceTacker/config/config.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/attendance_controller.js":
/*!*****************************************************!*\
  !*** ./server/controllers/attendance_controller.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.addStudent = undefined;\n\nvar _students = __webpack_require__(/*! ../models/students */ \"./server/models/students.js\");\n\nvar _students2 = _interopRequireDefault(_students);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar addStudent = exports.addStudent = function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n        var student, data;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        student = new _students2.default({\n                            email: req.body['email'],\n                            phone: req.body['phone'],\n                            roll_no: 1,\n                            branch: req.body['branch']\n                        });\n                        _context.next = 3;\n                        return student.save();\n\n                    case 3:\n                        data = _context.sent;\n\n                        res.send({\n                            data: data\n                        });\n\n                    case 5:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, undefined);\n    }));\n\n    return function addStudent(_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n// email: req.body['email'],\n// phone: req.body['phone'],\n// branch: req.body['branch']\n\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(addStudent, 'addStudent', '/Users/himanshusavita/Documents/Books/Node/AttendenceTacker/server/controllers/attendance_controller.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/attendance_controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);\n\nvar _webpackConfigClient = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n\nvar _webpackConfigClient2 = _interopRequireDefault(_webpackConfigClient);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar compile = function compile(app) {\n  if (_config2.default.env === \"development\") {\n    var compiler = (0, _webpack2.default)(_webpackConfigClient2.default);\n    var middleware = (0, _webpackDevMiddleware2.default)(compiler, {\n      publicPath: _webpackConfigClient2.default.output.publicPath\n    });\n    app.use(middleware);\n    app.use((0, _webpackHotMiddleware2.default)(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, 'compile', '/Users/himanshusavita/Documents/Books/Node/AttendenceTacker/server/devBundle.js');\n  reactHotLoader.register(_default, 'default', '/Users/himanshusavita/Documents/Books/Node/AttendenceTacker/server/devBundle.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _attendance_routes = __webpack_require__(/*! ./routes/attendance_routes */ \"./server/routes/attendance_routes.js\");\n\nvar _attendance_routes2 = _interopRequireDefault(_attendance_routes);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _template = __webpack_require__(/*! ./../template.js */ \"./template.js\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nvar _devBundle = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n\nvar _devBundle2 = _interopRequireDefault(_devBundle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n   var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n   enterModule && enterModule(module);\n})();\n// import userRoutes from './routes/user_routes'\n// import authRoutes from './routes/auth_routes'\n\n\nvar app = (0, _express2.default)();\n\n// import path from 'path'\n\n// import cookieParser from 'cookie-parser'\n// import compress from 'compression'\n// import cors from 'cors'\n// import helmet from 'helmet'\n// import Template from './../template'\n// import userRoutes from './routes/user.routes'\n// import authRoutes from './routes/auth.routes'\n//\n// modules for server side rendering\n// import React from 'react'\n// import ReactDOMServer from 'react-dom/server'\n// import MainRouter from './../client/MainRouter'\n// import StaticRouter from 'react-router-dom/StaticRouter'\n//\n// import { SheetsRegistry } from 'react-jss/lib/jss'\n// import JssProvider from 'react-jss/lib/JssProvider'\n// import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles'\n// import { indigo, pink } from 'material-ui/colors'\n// //end\n//\n//comment out before building for production\n\n//\n// const CURRENT_WORKING_DIR = process.cwd()\n// const app = express()\n//\n//comment out before building for production\n_devBundle2.default.compile(app);\n//\n// // parse body params and attache them to req.body\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\n// app.use(cookieParser())\n// app.use(compress())\n// // secure apps by setting various HTTP headers\n// app.use(helmet())\n// // enable CORS - Cross Origin Resource Sharing\n// app.use(cors())\n//\n// app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))\n//\n// // mount routes\n// import passport_services from './services/passport';\n//\napp.use('/api', _attendance_routes2.default);\n// app.use('/api', authRoutes);\n// app.use('/api', resumeRoutes);\n\n\napp.get('*', function (req, res) {\n   res.send((0, _template2.default)());\n});\n// app.use('/', authRoutes)\n//\n// app.get('*', (req, res) => {\n//    const sheetsRegistry = new SheetsRegistry()\n//    const theme = createMuiTheme({\n//      palette: {\n//        primary: {\n//        light: '#757de8',\n//        main: '#3f51b5',\n//        dark: '#002984',\n//        contrastText: '#fff',\n//      },\n//      secondary: {\n//        light: '#ff79b0',\n//        main: '#ff4081',\n//        dark: '#c60055',\n//        contrastText: '#000',\n//      },\n//        openTitle: indigo['400'],\n//        protectedTitle: pink['400'],\n//        type: 'light'\n//      },\n//    })\n//    const generateClassName = createGenerateClassName()\n//    const context = {}\n//    const markup = ReactDOMServer.renderToString(\n//       <StaticRouter location={req.url} context={context}>\n//          <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>\n//             <MuiThemeProvider theme={theme} sheetsManager={new Map()}>\n//               <MainRouter/>\n//             </MuiThemeProvider>\n//          </JssProvider>\n//       </StaticRouter>\n//      )\n//     if (context.url) {\n//       return res.redirect(303, context.url)\n//     }\n//     const css = sheetsRegistry.toString()\n//     res.status(200).send(Template({\n//       markup: markup,\n//       css: css\n//     }))\n// })\n//\n// // Catch unauthorised errors\n// app.use((err, req, res, next) => {\n//   if (err.name === 'UnauthorizedError') {\n//     res.status(401).json({\"error\" : err.name + \": \" + err.message})\n//   }\n// })\n\nvar _default = app;\nexports.default = _default;\n;\n\n(function () {\n   var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n   var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n   if (!reactHotLoader) {\n      return;\n   }\n\n   reactHotLoader.register(app, 'app', '/Users/himanshusavita/Documents/Books/Node/AttendenceTacker/server/express.js');\n   reactHotLoader.register(_default, 'default', '/Users/himanshusavita/Documents/Books/Node/AttendenceTacker/server/express.js');\n   leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/models/students.js":
/*!***********************************!*\
  !*** ./server/models/students.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _config = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n   var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n   enterModule && enterModule(module);\n})();\n\nvar StudentSchema = new _mongoose2.default.Schema({\n   email: {\n      type: String,\n      trim: true,\n      unique: 'Email already exists',\n      match: [/.+\\@.+\\..+/, 'Not a valid Email'],\n      required: 'Email is required'\n   },\n   phone: {\n      type: Number\n   },\n   roll_no: {\n      type: Number,\n      default: 0\n   },\n   branch: {\n      type: String\n   },\n   updated: Date,\n   created: {\n      type: Date,\n      default: Date.now\n   }\n});\n\nStudentSchema.pre('save', function (next) {\n   console.log(this);\n   next();\n});\n\nvar _default = _mongoose2.default.model('students', StudentSchema);\n\nexports.default = _default;\n;\n\n(function () {\n   var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n   var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n   if (!reactHotLoader) {\n      return;\n   }\n\n   reactHotLoader.register(StudentSchema, 'StudentSchema', '/Users/himanshusavita/Documents/Books/Node/AttendenceTacker/server/models/students.js');\n   reactHotLoader.register(_default, 'default', '/Users/himanshusavita/Documents/Books/Node/AttendenceTacker/server/models/students.js');\n   leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/students.js?");

/***/ }),

/***/ "./server/routes/attendance_routes.js":
/*!********************************************!*\
  !*** ./server/routes/attendance_routes.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n      value: true\n});\n\nvar _attendance_controller = __webpack_require__(/*! ../controllers/attendance_controller */ \"./server/controllers/attendance_controller.js\");\n\nvar attendacneController = _interopRequireWildcard(_attendance_controller);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n(function () {\n      var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n      enterModule && enterModule(module);\n})();\n\nvar router = _express2.default.Router();\n\nrouter.route('/add-student').post(attendacneController.addStudent);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n      var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n      var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n      if (!reactHotLoader) {\n            return;\n      }\n\n      reactHotLoader.register(router, 'router', '/Users/himanshusavita/Documents/Books/Node/AttendenceTacker/server/routes/attendance_routes.js');\n      reactHotLoader.register(_default, 'default', '/Users/himanshusavita/Documents/Books/Node/AttendenceTacker/server/routes/attendance_routes.js');\n      leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/attendance_routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _express = __webpack_require__(/*! ./express */ \"./server/express.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Connection URL\n_mongoose2.default.Promise = global.Promise;\n_mongoose2.default.connect(_config2.default.DB_URL);\n_mongoose2.default.connection.on('error', function () {\n  throw new Error('unable to connect to database: ' + DB_URL);\n});\n\n_express2.default.listen(_config2.default.port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n  console.info('Server started on port %s.', _config2.default.port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar _default = function _default() {\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n          <meta charset=\\\"utf-8\\\">\\n          <title>MERN Skeleton</title>\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\\\">\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\">\\n        </head>\\n        <body style=\\\"margin:0\\\">\\n          <div id=\\\"root\\\"></div>\\n          <style id=\\\"jss-server-side\\\"></style>\\n          <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n        </body>\\n      </html>\";\n};\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/Books/Node/AttendenceTacker/template.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar CURRENT_WORKING_DIR = process.cwd();\n\nvar config = {\n    name: \"browser\",\n    mode: \"development\",\n    devtool: 'eval-source-map',\n    entry: ['babel-polyfill', 'react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n    output: {\n        path: path.join(CURRENT_WORKING_DIR, '/dist'),\n        filename: 'bundle.js',\n        publicPath: '/dist/'\n    },\n    module: {\n        rules: [{\n            test: /\\.jsx?$/,\n            exclude: /node_modules/,\n            use: ['babel-loader']\n        }, {\n            test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n            use: 'file-loader'\n        }]\n    }, plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\nmodule.exports = config;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', '/Users/himanshusavita/Documents/Books/Node/AttendenceTacker/webpack.config.client.js');\n    reactHotLoader.register(config, 'config', '/Users/himanshusavita/Documents/Books/Node/AttendenceTacker/webpack.config.client.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi babel-polyfill ./server/server.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! /Users/himanshusavita/Documents/Books/Node/AttendenceTacker/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./server/server.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });