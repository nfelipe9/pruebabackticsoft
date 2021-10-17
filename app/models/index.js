const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.productos = require("./productos.model.js")(sequelize, Sequelize);
db.ventas = require("./ventas.model.js")(sequelize, Sequelize);
db.usuarios = require("./usuarios.model.js")(sequelize, Sequelize);

db.ventas.belongsTo(db.productos, {
  foreignKey: "productosId",
  as: "productos"
});
db.usuarios.hasMany(db.ventas, {as: "ventas"})

module.exports = db;
