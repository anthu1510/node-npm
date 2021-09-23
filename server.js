const express = require('express');

const app = express();
const port = 6000;

const userRouter = require('./src/routes/userRouter');
const orderRouter = require('./src/routes/orderRouter');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.listen(port, () => {
    console.log(`server running port at ${port}`);
})