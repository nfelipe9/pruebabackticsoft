const db = require("../models");
const Productos = db.productos;
const Ventas = db.ventas;
const Usuarios = db.usuarios;
const Op = db.Sequelize.Op;

//obtener productos
exports.obtenerProductos = (req, res) => {
    Productos.findAll().then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error 1"
            });
        });
};

//obtener ventas
exports.obtenerVentas = (req, res) => {
    Ventas.findAll().then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error 1"
            });
        });
};

exports.obtenerUsuarios = (req, res) => {
    Usuarios.findAll().then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error 1"
            });
        });
};

// Crear producto 
exports.crearProducto = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Product
    const productos = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        estado: req.body.estado ? req.body.estado : false,
        cantidad: req.body.cantidad,
        valor: req.body.valor
    };

    // Save Product in the database
    Productos.create(productos)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Product."
            });
        });
};

//Crear Venta
exports.crearVenta = (req, res) => {

    /*     if (!req.body.productosId) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
          return;
        } */

    const venta = {
        idCliente: req.body.idCliente,
        nombreCliente: req.body.nombreCliente,
        cantidad: req.body.cantidad,
        estadoVenta: req.body.estadoVenta ? req.body.estadoVenta : "En proceso",
        productosId: req.body.productosId,
        usuarioId: req.body.usuarioId
    };

    Ventas.create(venta)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Product."
            });
        });
};


//buscar venta por id
exports.buscarVenta = (req, res) => {
    const id = req.params.id;

    Ventas.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Venta with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Venta with id=" + id
            });
        });
};


//buscar producto id
exports.buscarProducto = (req, res) => {
    const id = req.params.id;

    Productos.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Venta with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Venta with id=" + id
            });
        });
};

//actualizar Producto
exports.actualizarProducto = (req, res) => {
    const id = req.params.id;

    Productos.update(req.body, {
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

//actualizar venta
exports.actualizarVenta = (req, res) => {
    const id = req.params.id;

    Ventas.update(req.body, {
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


//Rutas Usuarios
exports.createNewUser = (req, res) => {
    // Validate request
    if (!req.body.email) {
        res.status(400).send({
            message: "Content can not be empty!!!"
        })
        return;
    }

    // create user
    const user = {
        FirstName: req.body.givenName,
        LastName: req.body.familyName,
        Email: req.body.email,
        ImageUrl: req.body.imageUrl
    }

    Usuarios.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurs"
            })
        })
}

exports.findOneUser = (req, res) => {
    const email = req.params.Email

    Usuarios.findOne({ where: { Email: email } })
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({
                    message: `Cannot find a user with email=${email}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Some error retrieving a user with a email=" + email
            })
        })

}

exports.findAllUsers = (req, res) => {

    Usuarios.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error ocurred while retrieving all users."
            })
        })
}

exports.updateUser = (req, res) => {
    const email = req.params.Email

    Usuarios.update(req.body, {
            where: { Email: email }
        })
        .then(change => {
            if (change == 1) {
                res.send({
                    message: `The user with email=${email} was updated successfully`
                })
            } else {
                res.send({
                    messsage: `Cannot uptdate the user with email=${email}.Maybe the email was not found or req.body is empty`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating email with email=" + email
            })
        })
}