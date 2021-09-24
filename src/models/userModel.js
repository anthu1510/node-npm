const mongoose = require('mongoose');

const UserScema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: Boolean, required: true, default: true }
});

const users = mongoose.model('user', UserScema);

module.exports = users;
