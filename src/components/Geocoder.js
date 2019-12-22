import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core'
import GoogleMapReact from "google-map-react"
import Geocode from "react-geocode";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Geocoder from 'react-native-geocoding';

Geocoder.init("REACT_APP_KEY", {language : "en"});

Geocoder.from("Colosseum")
        .then(json => {
            var location = json.results[0].geometry.location;
            console.log(location);
        })
        .catch(error => console.warn(error));