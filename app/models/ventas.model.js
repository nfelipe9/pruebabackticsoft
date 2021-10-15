module.exports = (sequelize, Sequelize) => {
const Ventas = sequelize.define("ventas", {
    idCliente: {
      type: Sequelize.STRING
    },
    nombreCliente: {
      type: Sequelize.STRING
    },
    cantidad: {
        type: Sequelize.STRING
    },
    estadoVenta: {
        type: Sequelize.STRING
    }
  });

  return Ventas;
};