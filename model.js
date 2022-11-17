const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    age: {
        type: Number,
    },
});

const person = mongoose.model("person", Schema);

module.exports = person;