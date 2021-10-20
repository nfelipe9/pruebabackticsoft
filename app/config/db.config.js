module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "pruebaherokubase",
    dialect: "mysql",
    timezone: "-05:00",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};