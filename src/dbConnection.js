const { connect } = require("mongoose");

connect("mongodb://127.0.0.1/Users")
  .then(() => {
    console.log("Connection With Database Successfull");
  })
  .catch((err) => {
    console.log(`Something Wen Wrong ${err}`);
  });
