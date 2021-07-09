import React from 'react';
import c from '../../../config.js';
import ReactMapboxGl, { Layer, Feature, Marker, Source } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import polyline from '@mapbox/polyline';

const geojson = {
  type: 'FeatureCollection',
  features: [
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.653695, 38.440796]}}
  ]
};

const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 1000,
    'circle-color': '#060606'
  }
}

function MapModal(props) {
  const Map = ReactMapboxGl({
    accessToken: c.mapbox
  });


  // const poly = 'siuiFlc{kVl@a@NOJ?jA~@l@l@nD~CBDHb@Kd@Yt@Wh@[ZqAtCe@vAo@pAgApCYh@e@~AMTYVkBwAm@o@sDeDc@k@uBgBa@c@W[c@_@]_@MWAGHo@d@eADUEKkByAqBuBoAiAY]Yk@Y]i@YQMO]Du@h@iA~@yAX{@Jg@FeBJq@^}@dBiDr@k@b@SLAxA?ZOV_@l@qAp@kA`AqB`@u@^Ul@MbAcAHEf@C^Tb@^j@r@`@n@l@l@n@f@fAbAdAx@d@p@hAdAlA~@bAbALTB`BA`@Gj@a@bCk@rBYhCC`B?rAHfBRlAAV';

  // const decode = polyline.toGeoJSON(poly);
  // console.log(decode);


  return (
    <div id="modal">
      <button onClick={props.modal}>CLOSE</button>
      <Map
        style='mapbox://styles/mapbox/outdoors-v11'
        // container='modal'
        containerStyle={{
          height: '50vh',
          width: '50vw'
        }}
        center={[-122.653695, 38.440796]}
      >

      </Map>
    </div>
  )
}

export default MapModal;
