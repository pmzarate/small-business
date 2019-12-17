import React from 'react'
import {
    Button,
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'



const BusinessListings = (props) => {
    console.log("made it to Listings")
    return (
        <div>
        <Container maxWidth="lg" className="businessListing-container">
            {/* <h4>Welcome, {props.user.username}</h4> */}
            <div className="flex">
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours Of Operation</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        {props.businesses.map((business, idx) => (
                        <TableRow key={business.id}>
                            <TableCell>
                                <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={props.fetchMap}> Get Map </Button>
                            </TableCell>
                            <TableCell>{business["name"]}</TableCell>
                            <TableCell>{business["name"]}</TableCell>
                            <TableCell>{business["address"]}</TableCell>
                            <TableCell>{business["description"]}</TableCell>
                            <TableCell>{business["hours"]}</TableCell>
                            <TableCell>
                                <DeleteIcon
                                onClick = {() => props.removeBusiness(idx)}// add onClick method here
                                className="icon text-red" />
                            </TableCell> 
                        </TableRow>
                    ))}
                    </TableBody>
            </Table>
        </Container>
    </div>
    )
}

export default BusinessListings