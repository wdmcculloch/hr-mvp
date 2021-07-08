module.exports = {
  //format data to fit model
  buildSchema: function (array){
    let edit = [];
        for(let i = 0; i < array.length; i++) {
          let cur = array[i];

          let act = {
            id: cur.id,
            type: cur.type,
            name: cur.name,
            distance: cur.distance,
            start_date_local: cur.start_date_local,
            average_speed: cur.average_speed,
            average_heartrate: cur.average_heartrate,
            max_heartrate: cur.max_heartrate,
            elapsed_time: cur.elapsed_time,
            moving_time: cur.moving_time,
            elev_high: cur.elev_high,
            elev_low: cur.elev_low,
            total_elevation_gain: cur.total_elevation_gain,
            start_latitude: cur.start_latitude,
            start_longitude: cur.start_longitude,
            end_latitude: cur.end_latlng[0],
            end_longitude: cur.end_latlng[1],
            map: {
              id: cur.map.id,
              summary_polyline: cur.map.summary_polyline,
              resource_state: cur.map.resource_state
            }
          }
          edit.push(act);
        }
    return edit;
  }
}