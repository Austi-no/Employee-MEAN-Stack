const { ObjectId } = require("bson");
const express = require("express");

var router = express.Router();

var { employee } = require("../model/employee.js");

var OjectId = require("mongoose").Types.ObjectId;

// Get Employees =>localhost:9000/employees/
router.get("/getAll", (req, res) => {
  employee.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Retrieving Employees: " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});
// Post Employees =>localhost:9000/employees/
router.post("/", (req, res) => {
  var emp = new employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  });

  emp.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Saving Employee: " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});
// Get employee by id Employees =>localhost:9000/employees/
router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`No record with given id : ${req.params.id} `);
  }
  employee.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Retrieving Employee: " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`No record with given id : ${req.params.id} `);
  }

  var emp = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  };

  employee.findByIdAndUpdate(req.params.id),
    { $set: emp },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in Updating Employee: " + JSON.stringify(err, undefined, 2)
        );
      }
    };
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`No record with given id : ${req.params.id} `);
  }

  employee.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Deleting Employee: " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

module.exports = router;
