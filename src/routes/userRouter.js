const router = require('express').Router();
const userModel = require('../models/userModel');

router.get('/', async (req, res) => {
    try {
        const users = await userModel.find({});
        const result = [];
        users.map(v => {
            let rs = {
                id: v._id,
                name: v.name,
                email: v.email,
                status: v.status
            };
            result.push(rs);
        });
       res.send(result);
    } catch (err) {
        res.send({ message:err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.params.id });
        const rs = {
            id: user._id,
            name: user.name,
            email: user.email,
            status: user.status
        }
        res.send(rs);
    } catch (err) {
        res.send({ message:err.message });
    }
 });

router.post('/', async (req, res) => {
    try {
        const users = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
    
        const rs = await users.save();
    
        res.send(rs);
    } catch (err) {
        res.send({ code: err.code, message:err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const user = {
            name: req.body.name,
            email: req.body.email,
            status: req.body.status
        };
        const rs = await userModel.findOneAndUpdate({ _id: req.params.id }, user);
        
        if(rs) {
            res.send({message: "success"});
        } else {
            res.send({message: "failed"});
        }  
    } catch (err) {
        res.send({ code: err.code, message:err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const rs = await userModel.findByIdAndDelete({ _id: req.params.id });
        
        if(rs) {
            res.send({message: "deleted"});
        } else {
            res.send({message: "not deleted"});
        }  
    } catch (err) {
        res.send({ code: err.code, message:err.message });
    }
});

module.exports = router;

