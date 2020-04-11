const db = require("../database");
const Sequelize = require("sequelize");
let Product = db.define(
  "products",
  {
    name: {
      type: Sequelize.STRING,
      notNull: true,
    },
    price: {
      type: Sequelize.INTEGER,
      notNull: true,
    },
    negotiable: {
      type: Sequelize.STRING,
      notNull: true,
    },
    seller_name: {
      type: Sequelize.STRING,
      notNull: true,
    },
    seller_contact_no: {
      type: Sequelize.INTEGER,
      notNull: true,
    },
    category: {
      type: Sequelize.STRING,
      notNull: true,
      // references: {
      //   model: "categories",
      //   key: "id",
      //   deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      // },
    },
    city: {
      type: Sequelize.STRING,
      notNull: true,
      // references: {
      //   model: "categories",
      //   key: "id",
      //   deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      // },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

db.sync().then((res) => {
  console.log("Created products table in DB");
});

module.exports = Product;
