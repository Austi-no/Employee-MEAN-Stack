var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/Mean_Stack", (err) => {
  if (!err) {
    return console.log("MongoDB connection Suceeded...");
  } else {
    console.log(
      "Error Establishing DB connection: " + JSON.stringify(err, undefined, 2)
    );
  }
});

module.exports = {
  mongoose,
};
