module.exports = app => {
    const tecsoft = require("../controllers/tecsoft.controller.js");
  
    var router = require("express").Router();
  
    router.post("/registrarVentas", tecsoft.crearVenta);

    router.post("/registrarProducto", tecsoft.crearProducto); 

    router.get("/obtenerProductos", tecsoft.obtenerProductos);

    router.get("/obtenerVentas", tecsoft.obtenerVentas);

    router.get("/obtenerUsuarios", tecsoft.obtenerUsuarios);

    router.get("venta/:id", tecsoft.buscarVenta);

    router.get("/producto/:id", tecsoft.buscarProducto);

    router.put("/actualizarProducto/:id", tecsoft.actualizarProducto);

    router.put("/actualizarVentas/:id", tecsoft.actualizarVenta);

    app.use('/api/', router);
  /*
    router.get("/", tecsoft.findAll);

    */
  };