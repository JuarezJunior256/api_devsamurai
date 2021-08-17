import { Router } from 'express';

import CustomerController from './app/controllers/CustomerController';

const routes = new Router();

routes.get('/customer', CustomerController.index);
routes.post('/customer', CustomerController.create);
routes.get('/customer/:id', CustomerController.show);
routes.put('/customer/:id', CustomerController.update);
routes.delete('/customer/:id', CustomerController.destroy);

export default routes;
