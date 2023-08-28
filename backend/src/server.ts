import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";
// const mongoose = require('mongoose')

const port = env.PORT;
// const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(env.MONGO_URL)
  .then(() => {
    console.log("Mongoose Connected Successfully!");
    app.listen(port, () => {
      console.log(`Server hit the groud running @port ${port}`);
    });
  })
  .catch(console.error);
