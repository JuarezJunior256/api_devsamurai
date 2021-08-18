// class princinpal da estrutura do serviço de API
import express from "express";
import routes from "./routes";

import "./database";

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

export default new App().server;
