const Schema = require('mongoose').Schema;

module.exports = new Schema({
  nickname: { type: String, required: true},
  author: String,
  description: String,
  created: { type: Date, default: Date.now }
});