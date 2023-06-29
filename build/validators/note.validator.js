"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNote = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var createNote = function createNote(req, res, next) {
  var schema = _joi["default"].object({
    title: _joi["default"].string().min(2).required(),
    description: _joi["default"].string().min(2).required(),
    color: _joi["default"].string().min(4).optional()
  });
  var _schema$validate = schema.validate(req.body),
    error = _schema$validate.error,
    value = _schema$validate.value;
  if (error) {
    next(error);
  } else {
    // req.validatedBody = value;
    next();
  }
};
exports.createNote = createNote;