const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const cityRoutes = require("./routes/city");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

app.use(cityRoutes);
app.use(categoryRoutes);
app.use(productRoutes);

module.exports = app;
