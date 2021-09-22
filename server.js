const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('welcome to the first node api');
});

app.get('/users', (req, res) => {
    res.send('welcome to users');
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    //res.send('user Id is :' + id);
    res.send(`user Id is :${id}`);
});


app.post('/users', (req, res) => {
    const rs = parseInt(req.body.a) + parseInt(req.body.b);
    //const rs = req.body.a + req.body.b;
   res.status(200).json({total: rs});
});


app.listen(5000, () => {
    console.log('server is started....');
});