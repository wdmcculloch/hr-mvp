const Activity = require('../models/activity.js')
const axios = require('axios');
const { buildSchema } = require('../../server/helpers.js');


const loadBulk = (req, res) => {
  axios.get('https://www.strava.com/api/v3/athlete/activities?access_token=883f6773603f603b30099e85724e1b683e50c1fc&after=1622513342&per_page=2&page=1')
    .then((activities) => {
      let apiData = activities.data;
      let arr = buildSchema(apiData);
      console.log(arr);
      //send query to add all of the data
      // Activity.insertMany(arr)
      //   .then(() => {
      //     console.log('Data Inserted');
      //     res.sendStatus(200);
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //     res.sendStatus(500);
      //   })
      Activity.find({})
        .then(() => {
          console.log('HERE')
        })
        .catch((e) => console.log(e));
    })
    .catch(e => {
      console.log(e);
      res.sendStatus(500);
    });
}

module.exports = loadBulk;