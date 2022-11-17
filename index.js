const express = require("express");
const mongoose = require("mongoose");

const Person = require("./model")
const app = express()
app.use(express.json());

const personRoute = require("./route")

mongoose.connect("mongodb://localhost:27017/jslearning")
.then(() => {
    console.log("connected to the Mango database");
})
.catch((err) => {
    console.log("error", err);
})


app.use("/person", personRoute);

app.get("/learning", (req,res,next) => {
    //console.log("re")
    res.json ({
        name: "Dan Energy",
        age: "25",
        
    });
});

app.post("/income", (req,res,next) => {
    console.log("This is from the FrontEnd", req.body);
    return res.status(200).json({message: "You are Frontend."})

})

app.listen(4000, () => {
    console.log("Server is running on port 4000")
})
