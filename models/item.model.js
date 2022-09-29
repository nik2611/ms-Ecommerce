

const mongoose = require("mongoose");
const Schema = new mongoose.Schema({

    itemName: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true}

}, {timestamps:true});

Schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

module.exports = mongoose.model("items", Schema);