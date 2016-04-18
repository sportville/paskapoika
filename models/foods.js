var mongoose = require('mongoose');

var foodSchema = new mongoose.Schema({
  name : { type : String }
});

var foods = mongoose.model('foods', foodSchema);
module.exports = foods;
