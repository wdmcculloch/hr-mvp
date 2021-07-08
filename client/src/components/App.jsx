import React, { useState, useEffect } from 'react';
import axios from 'axios';
import polyline from '@mapbox/polyline';
import ActivityList from './ActivityList.jsx';
import MapModal from './MapModal.jsx';
import config from '../../../config.js';



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
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('/all')
      .then((act) => {
        setActivities(act.data);
      })
      .catch(e => console.log(e));
  }, [])

  //  use current access token to call all activities
  function getActivities(e){
    e.preventDefault();
    //initial auth
    axios.get(config.auth)
      .then((result) => {
        console.log(result)
      })
      .catch(e => console.log(e))
  }

  function load(e) {
    e.preventDefault();
    axios.post('/load')
      .then(() => { console.log('success'); })
      .catch((err) => { console.log(err); })
  }

  function handleModal(e) {
    e.preventDefault();
    setShowModal(!showModal);
  }


  return (
    <div className="App">
      <h1>Straba</h1>
      {/* <button onClick={load}>Load</button> */}
      {/* <button onClick={getActivities}>CONNECT</button> */}
      <ActivityList activities={activities} modal={handleModal}/>
      {showModal ? <div id='modal-bg'></div> : null}
      {showModal ? <MapModal modal={handleModal}/> : null}
    </div>
  );
}

export default App;

// const Map = ReactMapboxGl({
  //   accessToken:
  // });



  {/* <Map
        style='mapbox://styles/mapbox/outdoors-v11'
        containerStyle={{
          height: '50vh',
          width: '50vw'
        }}
        center={[-122.653695, 38.440796]}
        // pitch={[30]}
      >
      <Layer type='symbol' id='marker' layout={{'icon-image': '../../assets/svgs/marker.svg'}}>
        <Feature coordinates={[-122.653695, 38.440796]}/>
      </Layer>

      </Map> */}

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