var mongoose = require('mongoose');

var foodSchema = new mongoose.Schema({
  name : { type : String }
});

var Foods = mongoose.model('foods', foodSchema);
module.exports = Foods;
