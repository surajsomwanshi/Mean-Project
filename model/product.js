const mongoose = require("mongoose");// importing mongoose module
/*
 A mongooes model is a wrapper on the mongoose schema.
 A mongoose schema defines the structure of the document , default values,validators,etc.
 whereas a mongoose model provides an interface for the database for creating,qurifying,updating .
*/
const ProductSchema = mongoose.Schema({
    prodId: {
        type: String,
        required: true,
    },
    prodName: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
});

/*The module is a variable that represents the current module,
 and exports is an object that will be exposed as a module.*/
module.exports = mongoose.model("Product", ProductSchema);