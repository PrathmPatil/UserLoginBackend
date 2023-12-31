"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNote = exports.newNote = exports.getNote = exports.getAllNote = exports.deleteNote = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _note = _interopRequireDefault(require("../models/note.model"));
//get  note by title
var getNote = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _note["default"].findById(id);
        case 2:
          data = _context.sent;
          if (!data) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", data);
        case 7:
          throw new Error("invalid id");
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getNote(_x) {
    return _ref.apply(this, arguments);
  };
}();

//get all notes
exports.getNote = getNote;
var getAllNote = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _note["default"].find();
        case 2:
          data = _context2.sent;
          if (!data) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", data);
        case 7:
          throw new Error("No Notes Here");
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getAllNote() {
    return _ref2.apply(this, arguments);
  };
}();

//create new note
exports.getAllNote = getAllNote;
var newNote = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(body) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _note["default"].create(body);
        case 2:
          data = _context3.sent;
          return _context3.abrupt("return", data);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function newNote(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

//update note
exports.newNote = newNote;
var updateNote = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_id, body) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _note["default"].findByIdAndUpdate({
            _id: _id
          }, body, {
            "new": true
          });
        case 2:
          data = _context4.sent;
          return _context4.abrupt("return", data);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateNote(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

//delete single user
exports.updateNote = updateNote;
var deleteNote = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _note["default"].findByIdAndDelete(id);
        case 2:
          return _context5.abrupt("return", '');
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function deleteNote(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteNote = deleteNote;