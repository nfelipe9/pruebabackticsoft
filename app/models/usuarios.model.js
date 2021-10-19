module.exports = (sequelize, Sequelize) => {
    const Usuarios = sequelize.define("Usuarios", {
        Id: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        FirstName: {
            type: Sequelize.STRING(35),
            allowNull: false
        },
        LastName: {
            type: Sequelize.STRING(35),
            allowNull: false
        },
        Email: {
            type: Sequelize.STRING(60),
            allowNull: false,
            unique: true
        },
        Password: {
            type: Sequelize.STRING(150),
            allowNull: true,
        },
        Rol: {
            type: Sequelize.STRING(20),
            defaultValue: 'Unauthorized'
        },
        ImageUrl: {
            type: Sequelize.STRING(250),
            defaultValue: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-user-user-flatart-icons-outline-flatarticons-8.png',
        },
    });

    return Usuarios
};