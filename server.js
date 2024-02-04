const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");
const routeLoggerMiddleware = require("./middleware/routeLoggerMiddleware");

const app = express();
port = process.env.PORT;

const dbName = "ShoeShop";
// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Use the route logger middleware for product routes
app.use("/api/v1/product", routeLoggerMiddleware("product"));

// Use the route logger middleware for category routes
app.use("/api/v1/category", routeLoggerMiddleware("category"));

// Use the route logger middleware for auth routes
app.use("/api/v1/auth", routeLoggerMiddleware("auth"));

// initial routes
app.get("/", (req, res, next) => {
  res.send("servering is running");
});

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// connecting to the mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/" + dbName)
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
