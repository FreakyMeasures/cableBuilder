const crypto = require("crypto");
const Sequelize = require("sequelize");
const db = require("../db");

const Cable = db.define("cable", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  jacketColor: {
    type: Sequelize.STRING,
    validate: {
      isIn: [["black", "sea foam green", "purple", "orange", "purple"]],
    },
    defaultValue: "black",
  },
  description: {
    type: Sequelize.TEXT,
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://btpa.com/var/images/product/366.440/T/gi22of-xx.jpg",
  },
});

module.exports = Cable;
