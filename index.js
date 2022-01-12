//importing modules
var express = require("express");// to include express

var app = express();//create an object

//add dependencies 
var mongoose = require("mongoose");//to include mongoose(to interact with mongo)
var bodyparser = require("body-parser");
var cors = require("cors");//cross origin resource sharing
var path = require("path");

const routes = require("./routes/routes");

mongoose.connect("mongodb://localhost:27017/productview");

//on connection
mongoose.connection.on("connected", () => {
    console.log("Connected to database mongodb @ 27017");
});

mongoose.connection.on("error", (err) => {
    if (err) {
        console.log("Error in Database Connection: " + err);
    }
});

//localhost port no
const port = 3000;

app.use(cors());//cross origin resource sharing
//dependencies implementation

//body - parser //json: API & mongo data sharing
app.use(bodyparser.json());

//routes
app.use("/api", routes);


//intracting with front-end
app.get("/", (req, res) => {
    res.send("<h1>Response from 'server'....!</h1>")
});

app.listen(port, () => console.log("server started at port:" + port));