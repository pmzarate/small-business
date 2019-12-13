import React from 'react'
import { Container, Chip } from '@material-ui/core';
import businessInfo  from '../business.json' // remove this

const BusinessList = (props) => {
    const id = props.match.params.id
    {/* Change cars to props.cars and remove the cars.json import above */}
    const car = props.cars.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className="-container">
            <div className="car-paper">
                <h2>{car.name}</h2>
                {
                    Object.keys(car).map((key, idx) => {
                        return <Chip label={`${key}: ${car[key]}`}></Chip>
                    })
                }
            </div>
        </Container>
    )
}

export default BusinessList