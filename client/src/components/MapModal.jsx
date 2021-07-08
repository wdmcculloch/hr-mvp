import React from 'react';
import c from '../../../config.js';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function MapModal(props) {
  console.log(props);
  const Map = ReactMapboxGl({
    accessToken: c.mapbox
  });



  return (
    <div id="modal">
      <button onClick={props.modal}>CLOSE</button>
      <Map
        style='mapbox://styles/mapbox/outdoors-v11'
        containerStyle={{
          height: '50vh',
          width: '50vw'
        }}
        center={[-122.653695, 38.440796]}
      // pitch={[30]}
      >
        <Layer type='symbol' id='marker' layout={{ 'icon-image': '../../assets/svgs/marker.svg' }}>
          <Feature coordinates={[-122.653695, 38.440796]} />
        </Layer>

      </Map>
    </div>
  )
}

export default MapModal;
