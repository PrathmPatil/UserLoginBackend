"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var noteSchema = new _mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  color: {
    type: String
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('Notes', noteSchema);
exports["default"] = _default;