const mongoose = require("mongoose");

const CivilSchema= mongoose.Schema({
    name:String,
    age:Number,
    phone:Number,
    city:String,
    stream:String
});

module.exports = mongoose.model("civil",CivilSchema,'civil'); // here s was comming in database by itself, so to fix this use collection name as ist and last argument to be more precise 