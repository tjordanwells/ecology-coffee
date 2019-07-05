import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import mapStyle from './mapStyle.json';

class Maps extends Component {
  render() {
    const center = {
      lat: 35.9917,
      lng: -78.9041
    };

    return (
      <LoadScript
        id='script-loader'
        googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}
      >
        <GoogleMap
          id='example-map'
          center={center}
          zoom={16}
          mapContainerStyle={{
            height: "450px",
            width: "full",
          }}
          options={{ styles: mapStyle }}
        />
      </LoadScript>
    )
  }
}

export default Maps;