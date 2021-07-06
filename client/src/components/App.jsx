import React, { useState, useEffect } from 'react';
import axios from 'axios';
import polyline from '@mapbox/polyline';
// import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

const convertTime = (val) => {
  let time = new Date(val * 1000).toISOString().substr(11, 8);
  time = time.split(':');
  let hour = Number(time[0]);
  let min = Number(time[1]);
  let sec = Number (time[2]);

  if(hour > 0) {
    return `${hour}h ${min}m`;
  } else {
    return `${min}m ${sec}s`;
  }
}

function App(props) {
  console.log(props.data);
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState([]);
  const data = props.data




  return (
    <div className="App">
      <h1>Straba</h1>
      {data.map((item, i) =>
        <div key={i}>
          <div>{item.name}</div>
          <div>{item.type}</div>
          <div>{`${(item.distance / 1609.34).toFixed(2)} mi`}</div>
          <div>{convertTime(item.elapsed_time)}</div>
          <div>{item.average_speed}</div>
        </div>
      )}

    </div>
  );
}

export default App;


// get current access token on page load
  // useEffect(() => {
  //   axios.post(callRefresh)
  //     .then((result) => {
  //       console.log(result.json());
  //       //get activities with token
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }, [callRefresh])


  // use current access token to call all activities
  // function getActivities(e){
  //   e.preventDefault();
  //   // console.log(callActivities + access)

  //   axios.get(callActivities + access)
  //     .then(data => setActivities(data.data), setIsLoading(prev => !prev))
  //     .then(() => { console.log(activities); })
  //     .catch(e => console.log(e))
  // }

  // function showActivities(){
  //   if(isLoading) return <>LOADING</>
  //   if(!isLoading) {
  //     console.log(activities)
  //     return activities.length
  //   }
  // }