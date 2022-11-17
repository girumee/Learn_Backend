const Person = require("./model");

exports.addperson = async (req, res, next) => {
  try {
    const person = await Person.create(req.body);
    res.status(200).json({ status: "Succes", person: person,});
  } catch (err) {
    res.status(400).json({ status: "error", error: err, });
  }
};

exports.getAllUsers = async (req, res, next) => {
    try {
        let person = await Person.find({});
        res.status(200).json({status: "Success", person,});
    } catch (err) {
        res.status(400).json({status: "error", error: err,});
    }
};

