const db = require("../database");
const Sequelize = require("sequelize");
let City = db.define(
  "cities",
  {
    city: {
      type: Sequelize.STRING,
      notNull: true,
    },
    state: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: false }
);
db.sync().then((res) => {
  console.log("Created cities table in DB");
});
module.exports = City;
