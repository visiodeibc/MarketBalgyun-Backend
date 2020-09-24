var express = require("express");
var router = express.Router();
const User = require("../models/User");

router.use(express.json());

// GeneralCustomer.insertMany([
//   { name: "0000", password: "0000", level: "1234" },
//   { name: "0001", password: "1111", level: "2345" },
//   { name: "0002", password: "2222", level: "3456" },
//   { name: "0003", password: "3333", level: "4567" },
// ]);

router.get("/", async (req, res) => {
  try {
    const userName = req.query.name;
    const userTemp = await User.find({
      name: userName,
    });
    if (userTemp.length != 0) {
      userJson = JSON.stringify(userTemp);
      res.send(userJson);
    } else {
      res.send("No User");
    }
  } catch (error) {
    console.log(error);
    return next(error);
  }
});

router.post("/", (req, res) => {
  try {
    User.insertMany([req.body]);
    res.send("Posting Success");
  } catch (error) {
    console.log(error);
    return next(error);
  }
});

router.put("/", async (req, res) => {
  try {
    let userName = req.body.name;

    if (req.body.password) {
      User.update(
        { name: userName },
        { $set: { password: req.body.password } },
        function (err, res) {
          if (err) throw err;
        }
      );
    }
    if (req.body.level) {
      User.update(
        { name: userName },
        { $set: { level: req.body.level } },
        function (err, res) {
          if (err) throw err;
        }
      );
    }
    const userTemp = await User.find({
      name: userName,
    });
    res.send(userTemp);

  } catch (error) {
    console.log(error);
    return error;
  }
});

router.delete("/", (req, res) => {
  User.deleteOne({ name: req.query.name }, (err, result) => {
    if (err) {
      return next(err);
    }
    res.json(result);
  });
});

module.exports = router;
