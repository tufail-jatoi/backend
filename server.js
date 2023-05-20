const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const StudentRouter = require("./routes/studentRouter");
require("dotenv").config();
const mongoose = require("mongoose");

// Use body-parser middleware
app.use(bodyParser.json());

app.use("/api/student", StudentRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Database Connected Successfully and server is listening on this port 5000"
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
