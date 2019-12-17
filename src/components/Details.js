import React from 'react'
import { Container, Chip } from '@material-ui/core'
import GoogleMap from './Map'

const Details = (props) => {
    const id = props.match.params.id
    const details = props.businesses.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className=" business-container">
        { console.log("made it business detail card")}
                <h2> Name: {details.name}</h2>
                <br/>
                <h4> Address: {details.address}</h4>
                <h4> Hours: {details.hours}</h4>
                <h4> Description: {details.description}</h4>
                <br/>
                   {/* {Object.keys(businesses).map((key, index) => {
                        return <Chip label={`${key}: ${businesses[key]}`}></Chip> */}
             
        </Container>
    )
}
export default Details