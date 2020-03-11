import React, { Component } from "react";
import Map from "./components/DriverMap";
import { withScriptjs } from "react-google-maps";
import "./App.css";

class App extends Component {
  render() {
    const MapLoader = withScriptjs(Map);

    return (
      <div>
        <MapLoader
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVMEaAoUnRAY9NgI3tQZ10DdsiRcmXfV8"
          loadingElement={<div style={{ height: `100%`, width: "100%" }} />}
        />      </div>
    )
  }
}

export default App;
