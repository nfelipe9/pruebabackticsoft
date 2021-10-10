module.exports = (sequelize, Sequelize) => {
    const Tecsoft = sequelize.define("tecsoft", {
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
  
    return Tecsoft;
  };