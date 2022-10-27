const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('News API Running');
});


app.get('/categories', (req, res) => {
    res.send(categories)
});


app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const selectedCode = categories.find(n => n.id == id);
    res.send(selectedCode);
});

app.listen(port, () => {
    console.log('Learn-With-Programming Server running on port', port);
})

module.exports = app;