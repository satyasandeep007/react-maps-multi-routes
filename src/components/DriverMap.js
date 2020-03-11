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
            drivers: [
                {
                    origin: {
                        lat: 17.3984,
                        lng: 78.5583
                    },
                    waypoints: [
                        {
                            location: {
                                lat: 17.3715,
                                lng: 78.5695
                            }, stopover: true
                        },
                        {
                            location: {
                                lat: 17.402710,
                                lng: 78.450710
                            }, stopover: true
                        }
                    ]
                }
                ,
                {
                    origin: {
                        lat: 17.583654,
                        lng: 78.532543

                    }
                    ,
                    waypoints: [


                        {
                            location: {
                                lat: 17.502340,
                                lng: 78.524567
                            }, stopover: true
                        },
                        {
                            location: {
                                lat: 17.512340,
                                lng: 78.534567
                            }, stopover: true
                        }
                    ]
                }
                ,
                {
                    origin: {
                        lat: 17.963654,
                        lng: 78.332543

                    }
                    ,
                    waypoints: [


                        {
                            location: {
                                lat: 17.302340,
                                lng: 78.237567
                            }, stopover: true
                        },
                        {
                            location: {
                                lat: 17.312340,
                                lng: 78.337567
                            }, stopover: true
                        }
                    ]
                }


            ]
        }
    };

    /**
     * create an array of objects with driver as object name and in object give origin and destination lat and long
     */

    async componentDidMount() {

        await this.state.drivers.map((driver, index) => {
            console.log(driver, index);
            const waypts = driver.waypoints;

            const directionsService = new google.maps.DirectionsService();
            const origin = { lat: driver.origin.lat, lng: driver.origin.lng };
            // waypts.push(driver.waypoints);
            // const destination = { lat: driver.destination.lat, lng: driver.destination.lng }
            console.log(waypts, "check");

            return directionsService.route(
                {
                    origin: origin,
                    destination: origin,
                    optimizeWaypoints: true,
                    waypoints: waypts,
                    travelMode: google.maps.TravelMode.DRIVING
                },
                async (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        // console.log(result);
                        console.log("result", result);
                        await this.setState({
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
                defaultCenter={{
                    lat: this.state.drivers[0].origin.lat, lng: this.state.drivers[0].origin.lng
                }}
                defaultZoom={13}>
                {
                    this.state.directions.map((item, index) => {
                        // console.log(item, "direction");

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
