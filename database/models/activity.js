const mongoose = require('mongoose');
const axios = require('axios');
const { buildSchema } = require('../../server/helpers.js');

const activitySchema = mongoose.Schema({
  id: Number,
  type: String,
  name: String,
  distance: Number,
  start_date_local: String,
  average_speed: Number,
  average_heartrate: Number,
  max_heartrate: Number,
  elapsed_time: Number,
  moving_time: Number,
  elev_high: Number,
  elev_low: Number,
  total_elevation_gain: Number,
  start_latitude: Number,
  start_longitude: Number,
  end_latitude: Number,
  end_longitude: Number,
  map: {
    id: String,
    summary_polyline: String,
    resource_state: Number
  }
});

const Activity = mongoose.model('Activity', activitySchema);

const loadBulk = (req, res) => {
  axios.get('https://www.strava.com/api/v3/athlete/activities?access_token=6607e3f680b073d7a4d156ba223ef34baa471c05&after=1622513342&per_page=100&page=1')
    .then((activities) => {
      let apiData = activities.data;
      let arr = buildSchema(apiData);
      console.log(arr);
      //send query to add all of the data
      Activity.insertMany(arr)
        .then(() => {
          console.log('Data Inserted');
          res.sendStatus(200);
        })
        .catch((e) => {
          console.log(e);
          res.sendStatus(500);
        })
      // Activity.find({})
      //   .then(() => {
      //     console.log('HERE')
      //   })
      //   .catch((e) => console.log(e));
    })
    .catch(e => {
      console.log(e);
      res.sendStatus(500);
    });
}

module.exports = loadBulk;