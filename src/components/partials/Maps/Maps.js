import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import axios from "axios";

import mapStyle from "./mapStyle.json";

class Maps extends Component {
  state = {
    lat: null,
    lng: null
  };

  componentDidMount() {
    axios
      .get("/api/locater")
      .then(res => {
        this.setState({
          lat: res.data[0].lat,
          lng: res.data[0].lon
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const center = {
      lat: this.state.lat,
      lng: this.state.lng
    };
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}
      >
        <GoogleMap
          id="example-map"
          center={center}
          zoom={16}
          mapContainerStyle={{
            height: "450px",
            width: "full"
          }}
          options={{ styles: mapStyle }}
        />
      </LoadScript>
    );
  }
}

export default Maps;
