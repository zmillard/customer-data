module.exports = {
    getCustomers(req, res) {
        res.status(200).send(req.store.customers);
    },
    getCustomer(req, res) {
        const id = req.params.id;
        res.status(200).send(req.store.customers[id]);
    },
    addCustomer(req, res) {
        req.store.customers.push(req.body);
        res.status(201).send({"id": req.store.customers.length});
    },
    editCustomer(req, res) {
        const id = req.params.postId;
        req.store.customers[id] = req.body;
        res.status(200).send(req.store.customers[id]);
    },
    removeCustomer(req, res) {
        req.store.customers.splice(req.params.id, 1);
        res.status(204).send();
    }
}