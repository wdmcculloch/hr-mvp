const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const db = require('../database');
const { loadBulk, Activity } = require('../database/models/activity.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));


//routes
app.get('/all', (req, res) => {
  Activity.find({})
    .then(result => {
      console.log(result);
      res.send(result).status(200);
    })
    .catch(e => {
      console.log(e);
      res.sendStatus(500);
    })
})

//load
app.post('/load', loadBulk);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})