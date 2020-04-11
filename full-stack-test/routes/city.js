const express = require("express");
const router = express.Router();
const City = require("../Models/City");

router.post("/cities", async (req, res) => {
  try {
    const { body } = req;
    let cities = await City.create({
      city: body.city,
      state: body.state,
    });
    res.send(cities);
  } catch (error) {
    console.log(error);
  }
});

router.get("/cities", async (req, res) => {
  try {
    let cities = await City.findAll({});
    res.send(cities);
  } catch (error) {
    console.log(error);
  }
});

router.put("/cities/:id", async (req, res) => {
  try {
    const { body, params } = req;
    let cities = await cities.update(
      {
        city: body.city,
        state: body.state,
      },
      { where: { id: params.id } }
    );
    res.send(cities);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/cities/:id", async (req, res) => {
  const { params } = req;
  try {
    await cities.destroy({ where: { id: params.id } });
    res.send("City Table Deleted From DB");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
