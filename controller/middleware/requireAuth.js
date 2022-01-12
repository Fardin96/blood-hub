const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const userSchema = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in" });
  }

  // authorization === 'Bearer sdfsdfsdfsdfs'
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, "ROKTO_DEWA_E_SECRET_KEY", async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "Maybe try a different email?" });
    }

    const { userId } = payload;

    const user = await userSchema.findById(userId);
    req.user = user;
    next();
  });
};
