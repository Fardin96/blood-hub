require("../model/src/schema/userSchema");
const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser"); //no one gives a shit about this anymore!
const requireAuth = require("./middleware/requireAuth");
const authRoutes = require("./router/authRoutes");

const app = express();

app.use(express.json());
app.use(authRoutes);

const mongoUri =
  "mongodb+srv://admin:bbUserPassword@blooappcluster.asiww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  //   useCreateIndex: true //this ain't used in mongoose v6.0+
});

mongoose.connection.on("connected", () => {
  console.log("Mamma connection paise mongo!!!!");
});

mongoose.connection.on("error", (err) => {
  console.error("Mamma connection to paitese na mongo!!!!", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});


app.listen(3000, () => {
  console.log("Rocking on 3000!");
});
