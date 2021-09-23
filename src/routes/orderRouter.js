const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('get orders');
});

router.post('/', (req, res) => {
    res.send('post orders');
});

router.put('/', (req, res) => {
    res.send('put orders');
});

router.delete('/', (req, res) => {
    res.send('delete orders');
});

module.exports = router;

