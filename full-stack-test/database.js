const Sequelize = require("sequelize");

const db = new Sequelize("buynsell", "postgres", "6567", {
  host: "localhost",
  dialect: "postgres",
});

db.authenticate().then(() => {
  console.log("DB is connected");
});

module.exports = db;
