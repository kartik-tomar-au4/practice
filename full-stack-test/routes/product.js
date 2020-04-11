const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");

router.post("/product", async (req, res) => {
  try {
    const { body } = req;
    console.log(body);
    let product = await Product.create({
      name: body.name,
      price: body.price,
      negotiable: body.negotiable,
      seller_name: body.sellerName,
      seller_contact_no: body.sellerContactNo,
      category: body.category,
      city: body.city,
    });
    res.send(product);
  } catch (error) {
    console.log(error);
  }
});

router.get("/product", async (req, res) => {
  try {
    console.log("working");
    let product = await Product.findAll();
    res.send(product);
  } catch (error) {
    console.log("mjcfccyjryvgh", error);
  }
});

router.put("/product/:id", async (req, res) => {
  try {
    const { body, params } = res;
    let product = await Product.update(
      {
        name: body.name,
        price: body.price,
        negotiable: body.negotiable,
        seller_name: body.sellerName,
        seller_contact_no: body.sellerContactNo,
        category: body.category,
        city: body.city,
      },
      { where: { id: params.id } }
    );
    res.send(product);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/product/:id", async (req, res) => {
  try {
    const { params } = req;
    await Product.destroy({ where: { id: params.id } });
    res.send("deleted successfully");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
