"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInRegistration = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var signInRegistration = function signInRegistration(req, res, next) {
  var schema = _joi["default"].object({
    firstName: _joi["default"].string().min(2).required(),
    lastName: _joi["default"].string().min(2).required(),
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().min(8).required()
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
exports.signInRegistration = signInRegistration;