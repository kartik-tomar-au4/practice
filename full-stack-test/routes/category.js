const express = require("express");
const router = express.Router();
const Category = require("../Models/Category");

router.post("/categories", async (req, res) => {
  try {
    const { body } = req;
    let category = await Category.create({
      category: body.category,
      description: body.description,
      floor: body.floor,
    });
    res.send(category);
  } catch (error) {
    console.log(error);
  }
});

router.get("/categories", async (req, res) => {
  try {
    let category = await Category.findAll({});
    res.send(category);
  } catch (error) {
    console.log(error);
  }
});

router.put("/categories/:id", async (req, res) => {
  try {
    const { body, params } = req;
    let category = await Category.update(
      {
        category: body.category,
        description: body.description,
      },
      { where: { id: params.id } }
    );
    res.send(category);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/categories/:id", async (req, res) => {
  const { params } = req;
  try {
    await Category.destroy({ where: { id: params.id } });
    res.send("Category Table Deleted from DB");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
