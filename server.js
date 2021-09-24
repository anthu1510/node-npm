const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 6000;

const userRouter = require('./src/routes/userRouter');
const orderRouter = require('./src/routes/orderRouter');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

// mongoDB connection
mongoose.connect('mongodb://localhost:27017/node-mongo');
const db = mongoose.connection;
db.once("open", () => {
    console.log('mongoDB connection connected....');
});

app.listen(port, () => {
    console.log(`server running port at ${port}`);
})