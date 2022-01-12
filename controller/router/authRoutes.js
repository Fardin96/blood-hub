const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.model("User");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password, bloodGroup, address } = req.body;

  try {
    const newUserSchema = userSchema({
      name,
      email,
      password,
      bloodGroup,
      address,
    });
    await newUserSchema.save();

    const token = jwt.sign(
      { userId: newUserSchema._id },
      "ROKTO_DEWA_E_SECRET_KEY"
    );
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: "Must provide email and password" });
  }

  const user = await userSchema.findOne({ email });
  if (!user) {
    return res.status(422).send({ error: "Invalid email or password" });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "ROKTO_DEWA_E_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid email or password" });
  }
});

router.get("/findDonor", (req, res) => {
  const { bloodGroup } = req.body;
  console.log(req.body);

  try {
    //display all user data - find({})
    console.log(`ei ki sei lok ${bloodGroup}`);
    const data = userSchema.find({ bloodGroup: `${bloodGroup}` });

    res.json(data);
    res.send(`Your email: ${data}`);  
  } catch (err) {
    return res.send(err.message);
  }
});

module.exports = router;
