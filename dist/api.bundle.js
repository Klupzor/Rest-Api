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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\")\r\nconst path = __webpack_require__(/*! path */ \"path\")\r\nconst app = express()\r\n\r\nconst indexRoutes = __webpack_require__(/*! ./routes/index.js */ \"./src/routes/index.js\")\r\n\r\n\r\n// settings \r\napp.set('port', process.env.PORT || 3000)\r\n\r\n//middlewares\r\napp.use(express.json())\r\napp.use(express.urlencoded({extended: false}))\r\n\r\n//routes\r\napp.use('/', indexRoutes)\r\n\r\n//static files\r\n// app.use(express.static(path.join(__dirname, 'dist')))\r\n\r\n\r\napp.listen(app.get('port'), () => {\r\n    console.log('server on port: ', app.get('port'))\r\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/libs/db-connection.js":
/*!***********************************!*\
  !*** ./src/libs/db-connection.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\")\r\n\r\nlet db\r\n\r\nmodule.exports = function Connection(){\r\n    \r\n    if (!db) {\r\n        mongoose.connect('mongodb://klupzor:12345qwer@ds135810.mlab.com:35810/test-api-glumsus')\r\n        .then(() =>  console.log('connection succesful'))\r\n        .catch((err) => console.error(err));\r\n        db = mongoose.connection\r\n    }\r\n\r\n    return db\r\n}\n\n//# sourceURL=webpack:///./src/libs/db-connection.js?");

/***/ }),

/***/ "./src/models/task.js":
/*!****************************!*\
  !*** ./src/models/task.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("    var db = __webpack_require__(/*! ../libs/db-connection */ \"./src/libs/db-connection.js\")();\r\n    var Schema = __webpack_require__(/*! mongoose */ \"mongoose\").Schema;\r\n\r\n    var TaskSchema = Schema({\r\n        title: String,\r\n        description: String,\r\n        status: Boolean\r\n\r\n    })\r\n\r\n\r\n     module.exports = db.model('task', TaskSchema)\r\n    \r\n    \r\n\n\n//# sourceURL=webpack:///./src/models/task.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__ (/*! express */ \"express\")\r\nconst router = express.Router();\r\n\r\nconst Task = __webpack_require__(/*! ../models/task */ \"./src/models/task.js\")\r\n\r\n// var datos = new model({\r\n//     title: 'primera tarea',\r\n//     description: 'primera tarea en mongo',\r\n//     status: true\r\n// })\r\n\r\nrouter.get('/', (req, res) => {\r\n\r\n    // res.send('hola')\r\n    Task.find((err, tasks) => {\r\n        if (err) return console.error(err)\r\n        // console.log(tasks)\r\n        res.json(tasks)\r\n\r\n    })\r\n})\r\n\r\nrouter.post('/', (req, res) => {\r\n    let body = req.body\r\n\r\n    Task.create(body, (err, task) => {\r\n        if (err) return console.error(err)\r\n        // res.json(post)\r\n        res.send('guardado')\r\n    })\r\n\r\n})\r\n\r\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

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

/***/ })

/******/ });