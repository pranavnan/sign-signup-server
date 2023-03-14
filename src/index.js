const express = require("express");
require("./dbConnection");
const cors = require("cors");
const User = require("./userModel");

const app = express();

app.use(express.json());

app.use(cors());

app.post("/authenticate-user", (req, res, next) => {
  console.log("aara");

  // console.log(req.body);
  const { email, password } = req.body;
  console.log(email, password);

  User.find({ email: email, password: password }).then((data) =>
    res.json(data)
  );
});

app.post("/create-user", (req, res, next) => {
  console.log(req.body);

  User.create(req.body)
    .then(() =>
      res.send({
        status: "success",
        message: "successfully created new user",
      })
    )
    .catch((err) => res.send(err));
});

app.get("/get-all-users", (req, res, next) => {
  User.find().then((data) => res.json(data));
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
