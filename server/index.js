const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const auth = require("./routes/auth.routes");
const json = express.json;
const cors = require("./middleware/cors.middleware");

const app = express();

app.use(json());
app.use(cors);
app.use("/api/auth", auth);

const start = async () => {
  try {
    await mongoose.connect(config.get("mongodbUrl"));
    app.listen(config.get("PORT"), () => {
      console.log(
        `Server started on ${config.get("serverURL")}:${config.get("PORT")}`
      );
    });
  } catch (e) {
    console.error(e);
  }
};

start();
