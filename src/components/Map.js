import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";


const mapMarker = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      latitude: '',
      longitude: ''
    },
    zoom: 11
  };

  render() {
    console.log("PROCESS .ENV", process.env.REACT_APP_Map);
    console.log(this.props);
    return !this.props.state ? (
      <div style={{ height: "30vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <mapMarker latitude={this.props.latitude} longitude={this.props.longitude} />
        </GoogleMapReact>
      </div>
    ) : (
    
      <div id="detail-map" style={{ height: "30vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:process.env.REACT_APP_MAP_KEY }}
          defaultCenter={{
            latitude: this.props.state.latitude,
            longitude: this.props.state.longitude
          }}
          defaultZoom={this.props.zoom}
        >
          <LocationOnIcon
            latitude={this.props.state.latitude}
            longitude={this.props.state.longitude}
          />

          {/* <MarkerComponent
            lat={this.props.location.state.lat}
            lng={this.props.location.state.lng}
            
          /> */}
        </GoogleMapReact>
        <div>
          <h1>{this.props.state.name}</h1>
        </div>
        <div>{this.props.state.address}</div>
        <div>{this.props.state.description}</div>
        <div>{this.props.state.hours}</div>
      </div>
    );
  }
}

export default Map;