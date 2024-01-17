const express = require("express");
const mongoose = require("mongoose");

// Routers
const auth = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");

const app = express();
app.use(express.json());

app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/GreenMind")
  .then(() => {
    app.listen(3060, () => {
      console.log("server is on 3060");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/auth", auth);
app.use("/product", ProductRouter);
