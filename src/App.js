import React, { Component } from "react";
import Map from "./components/DriverMap";
import Maps from "./components/Driver";
import { withScriptjs } from "react-google-maps";
import "./App.css";



class App extends Component {
  render() {
    const MapLoader = withScriptjs(Map);
    const MapLoaders = withScriptjs(Maps);

    return (
      <div>
        <MapLoader
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVMEaAoUnRAY9NgI3tQZ10DdsiRcmXfV8"
          loadingElement={<div style={{ height: `50%`, width: "100%" }} />}
        />
        {/* <h2>--------------------------------------------------------------------------------------------------------------------</h2>
        <MapLoaders
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVMEaAoUnRAY9NgI3tQZ10DdsiRcmXfV8"
          loadingElement={<div style={{ height: `50%`, width: "100%" }} />}
        /> */}
      </div>
    )
  }
}

export default App;
