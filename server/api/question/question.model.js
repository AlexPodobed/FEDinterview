'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  question: String,
  answer: String,
  topic: String,
  code: String,
  img: String
});

module.exports = mongoose.model('Question', QuestionSchema);
