module.exports = (sequelize, Sequelize) => {
    const Productos = sequelize.define("productos", {
      nombre: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.BOOLEAN
      },
      cantidad: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.STRING
      }
    });
  
    return Productos;
  };