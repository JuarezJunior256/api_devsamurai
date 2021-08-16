const { Router } = require("express");
const routes = new Router();

const CustomerController = require("./app/controllers/CustomerController");

routes.get("/customer", CustomerController.index);
routes.post("/customer", CustomerController.create);
routes.get("/customer/:id", CustomerController.show);
routes.put("/customer/:id", CustomerController.update);
routes.delete("/customer/:id", CustomerController.destroy);

module.exports = routes;
