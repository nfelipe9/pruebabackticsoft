module.exports = (sequelize, Sequelize) => {
    const Usuarios = sequelize.define("usuarios", {
        nombre: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        rol: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING
        }
      });
    
      return Usuarios;
    };