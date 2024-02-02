const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Routers
const auth = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");
const CategoryRouter = require("./Routes/CategoryRouter");
const CartRouter = require("./Routes/CartRouter");

const app = express();
app.use(cors());
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
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/auth", auth);
app.use("/product", ProductRouter);
app.use("/category", CategoryRouter);
app.use("/cart", CartRouter);
