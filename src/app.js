// class princinpal da estrutura do serviço de API
const express = require("express");
const routes = require("./routes");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  // método responsavel por chamar as rotas da aplicação
  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
