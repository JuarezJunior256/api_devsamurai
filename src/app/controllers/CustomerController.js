const customers = [
  { id: 1, name: 'Danielle', email: 'danielle@email.com' },
  { id: 2, name: 'Jéssica', email: 'jeh@email.com' },
  { id: 3, name: 'Junior', email: 'juh@email.com' },
];

class CustomerController {
  constructor() {}

  index(req, res) {
    return res.json(customers);
  }

  show(req, res) {
    const id = parseInt(req.params.id);
    const customer = customers.find((item) => item.id === id);
    const status = customer ? 200 : 404;

    return res.status(status).json(customer);
  }

  create(req, res) {}

  update(req, res) {}

  destroy(req, res) {}
}

export default new CustomerController();
