const express = require('express');
const cors = require('cors');
const CUSTOMERS = require("./data/customers");
const MENU_ITEMS = require('./data/menu');

const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.get('/customers', (req, res) => res.send(JSON.stringify(CUSTOMERS)));
app.get('/menu', (req, res) => {
    console.log('here');
    res.send(JSON.stringify(MENU_ITEMS));
})

app.listen(8080, console.log('Server started on port 8080'));