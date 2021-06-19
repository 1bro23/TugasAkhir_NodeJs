let express = require("express");
app = express();
let port = process.env.port || 8080;
app.listen(port, function(){
  console.log("server running at localhost:"+port)
});

let bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
  extended:true
}));
app.use(bodyparser.json());

let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/resthub",{useNewUrlParser:true,useUnifiedTopology:true});
var db = mongoose.connection;

let router = require("./api-routes");
app.use("/api", router);
