module.exports = app => {
    const tecsoft = require("../controllers/tecsoft.controller.js");
  
    var router = require("express").Router();
  
    router.post("/RegistrarProducto", tecsoft.create);
  
    router.get("/ActualizarProducto", tecsoft.findAll);

    router.get("/:id", tecsoft.findOne);
  
    router.put("/:id", tecsoft.update);
  

    router.delete("/:id", tecsoft.delete);
  
    router.delete("/", tecsoft.deleteAll);
  
    app.use('/api/', router);
  };