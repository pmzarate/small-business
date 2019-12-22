import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core'
import GoogleMapReact from "google-map-react"
import Geocode from "react-geocode";
import LocationOnIcon from "@material-ui/icons/LocationOn";



const AnyReactComponent = ({ text }) => <div> <LocationOnIcon className="text-red" /></div>

const Details = (props) => {
    const id = props.match.params.id
    const details = props.businesses.find(businesses => businesses.id == id)


// Geocode.fromAddress(details.address)
//     .then(response => {
//         const { lat,lng } = response.results[0].geometry.location;
//         console.log(lat, lng);
//     },
//     error => {
//         console.error(error);
//     }
//     );


const mapProps = {
    center: {
        lat: Number(details.latitude),
        lng: Number(details.longitude),
    },
    zoom: 13,
};

console.log(mapProps.center)  

return (
        <Container maxWidth="sm" className=" business-container">
            <h2> Name: {details.name}</h2>
            <br/>
            <h4> Address: {details.address}</h4>
            <h4> Hours: {details.hours}</h4>
            <h4> Description: {details.description}</h4>
            <br/>
            <Container style = {{ height: "300px", width: "350px"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_KEY}}
                    center={mapProps.center}
                    zoom={mapProps.zoom}
                    >
                    <AnyReactComponent 
                    lat={details.latitude}
                    lng={details.longitude}
                    text={details.name}/>
                </GoogleMapReact>
            </Container>
           {/* {Object.keys(businesses).map((key, index) => {
                        return <Chip label={`${key}: ${businesses[key]}`}></Chip> */}
        </Container>  
    )
}
export default Details