const router = require('express').Router();
const userModel = require('../models/userModel');

router.get('/', async (req, res) => {
   const users = await userModel.find({});

   res.send(users);
});

router.get('/:id', async (req, res) => {
    const users = await userModel.findOne({ _id: req.params.id });
 
    res.send(users);
 });

router.post('/', async (req, res) => {
    const users = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    const rs = await users.save();

    res.send(rs);
});

router.put('/:id', (req, res) => {
    res.send('put users');
});

router.delete('/', (req, res) => {
    res.send('delete users');
});

module.exports = router;

