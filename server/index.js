const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

//routes
app.get('/connect', (req, res) => {

})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})