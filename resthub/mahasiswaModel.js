let mongoose = require("mongoose");
let schema = mongoose.Schema({
  create_date:{
    type:Date,
    default:Date.now
  },
  nim:String,
  nama:String,
  jurusan:String,
  semester:String
})

var Contact = module.exports = mongoose.model("kontak", schema);
module.exports.get = function(callback,limit){
  Contact.find(callback).limit(limit)
};
