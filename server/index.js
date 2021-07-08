const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const db = require('../database');
const loadBulk = require('../database/models/activity.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));


//routes
app.get('/connect', (req, res) => {

})

//load
app.post('/load', loadBulk);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})