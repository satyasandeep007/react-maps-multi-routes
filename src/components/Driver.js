/*global google*/

import React, { Component } from "react";
import {
    withGoogleMap,
    // withScriptjs,
    GoogleMap,
    DirectionsRenderer
} from "react-google-maps";

class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            directions: [],
            // waypts: [
            //     {"Salar Jung Museum,Hyderabad"},
            //     {"LB Nagar,Hyderabad"}
            // ],
            drivers: [
                {
                    origin: {
                        lat: 17.3389249,
                        lng: 78.51335949999999
                    },
                    destination: {
                        lat: 17.4139017,
                        lng: 78.5855965
                    }
                },
                {
                    origin: {
                        lat: 17.3767499,
                        lng: 78.51248369999999
                    },
                    destination: {
                        lat: 17.354465,
                        lng: 78.4819874
                    }

                },
                {
                    origin: {
                        lat: 17.3602118,
                        lng: 78.3748019
                    },
                    destination: {
                        lat: 17.359694,
                        lng: 78.3810488
                    }

                }

            ]
        }
    };

    /**
     * create an array of objects with driver as object name and in object give origin and destination lat and long
     */

    componentDidMount() {
        this.state.drivers.map((driver, index) => {
            console.log(driver, index);

            const directionsService = new google.maps.DirectionsService();

            const origin = { lat: driver.origin.lat, lng: driver.origin.lng }
            const destination = { lat: driver.destination.lat, lng: driver.destination.lng }

            return directionsService.route(
                {
                    origin: origin,
                    destination: destination,
                    travelMode: google.maps.TravelMode.DRIVING
                },
                (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        // console.log(result);
                        console.log("result", result);
                        this.setState({
                            directions: [...this.state.directions, result]
                        });

                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                }
            );
        })
    }

    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: this.state.drivers[0].origin.lat, lng: this.state.drivers[0].origin.lng }}
                defaultZoom={13}>
                {
                    this.state.directions.map((item, index) => {
                        return <DirectionsRenderer
                            key={index}
                            directions={item}
                        />
                    }
                    )
                }
            </GoogleMap>

        ));

        return (
            <div>
                <GoogleMapExample
                    containerElement={<div style={{ height: `500px`, width: "100%" }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default Map;
