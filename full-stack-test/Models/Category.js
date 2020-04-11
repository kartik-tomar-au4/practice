const db = require("../database");
const Sequelize = require("sequelize");

let Category = db.define(
  "categories",
  {
    category: {
      type: Sequelize.INTEGER,
      notNull: true,
    },
    description: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: false }
);

db.sync().then((res) => {
  console.log("created categories table in DB");
});

module.exports = Category;
