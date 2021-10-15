const db = require("../models");
db.productos = db.productos;
db.ventas = db.ventas;
db.usuarios = db.usuarios;
const Op = db.Sequelize.Op;

// Create 
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Product
    const tecsoft = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      estado: req.body.estado ? req.body.estado : false,
      cantidad: req.body.cantidad,
      valor: req.body.valor
    };
  
    // Save Product in the database
    Tecsoft.create(tecsoft)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Product."
        });
      });
  };

// Retrieve all 
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;
  
    Tecsoft.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products."
        });
      });
  };

// Find a single Product
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Tecsoft.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Producto with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Producto with id=" + id
        });
      });
  };

// Update a Product
exports.update = (req, res) => {
    const id = req.params.id;
  
    Tecsoft.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Product with id=" + id
        });
      });
  };

// Delete a Product
exports.delete = (req, res) => {
  
};

// Delete all Products
exports.deleteAll = (req, res) => {
  
};
