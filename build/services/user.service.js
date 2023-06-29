"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrationUser = exports.loginUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = _interopRequireDefault(require("../models/user.model"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
//get all users
var loginUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _user["default"].findOne({
            email: body.email
          });
        case 2:
          data = _context.sent;
          if (!data) {
            _context.next = 11;
            break;
          }
          if (!_bcrypt["default"].compareSync(body.password, data.password)) {
            _context.next = 8;
            break;
          }
          return _context.abrupt("return", data);
        case 8:
          throw new Error("invalid password");
        case 9:
          _context.next = 12;
          break;
        case 11:
          throw new Error("invalid email");
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function loginUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

//create new user
exports.loginUser = loginUser;
var registrationUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var saltRounds, hashedPasswordByAwit, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _user["default"].findOne({
            email: body.email
          });
        case 2:
          if (!_context2.sent) {
            _context2.next = 6;
            break;
          }
          throw new Error("Email Already used in");
        case 6:
          saltRounds = 10;
          _context2.next = 9;
          return _bcrypt["default"].hash(body.password, saltRounds);
        case 9:
          hashedPasswordByAwit = _context2.sent;
          // const hashedPassword=bcrypt.hashSync(body.password,saltRounds)
          body.password = hashedPasswordByAwit;
          _context2.next = 13;
          return _user["default"].create(body);
        case 13:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function registrationUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.registrationUser = registrationUser;