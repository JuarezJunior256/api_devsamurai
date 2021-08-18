import Customer from "../models/Customer";

class CustomerController {
  async index(req, res) {
    const data = await Customer.findAll({
      limit: 1000,
    });

    return res.json(data);
  }

  // show(req, res) {
  //   // const id = parseInt(req.params.id);
  //   // const customer = customers.find((item) => item.id === id);
  //   // const status = customer ? 200 : 404;
  //   // return res.status(status).json(customer);
  // }

  // create(req, res) {}

  // update(req, res) {}

  // destroy(req, res) {}
}

export default new CustomerController();
