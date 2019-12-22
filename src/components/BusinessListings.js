import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
   } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'
import Details from '../components/Details'


const Businesses = (props) => {
    console.log(props)
    return (
        <Container maxWidth="lg" className="businessListing-container">
            <Table>
                <TableHead>
                    <TableRow>
                        {/* <TableCell>Id</TableCell> */}
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours Of Operation</TableCell>
                        { document.cookie == "loggedIn=true" ? (<TableCell>Delete</TableCell>):(null)}
                    </TableRow>
                </TableHead>
                    <TableBody>
                        {props.businesses.map((business, idx) => (
                        <TableRow key={business.id}>
                            {/* <TableCell component ="th" scope="row"> {business.id}
                            </TableCell> */}
                            <TableCell><Link to={`/details/${business.id}`}>{business["name"]}</Link></TableCell>
                            {/* <TableCell>
                            <Details business={business.id}>{business["name"]}</Details>
                            </TableCell> */}
                            <TableCell>{business["address"]}</TableCell>
                            <TableCell>{business["description"]}</TableCell>
                            <TableCell>{business["hours"]}</TableCell>
                            {document.cookie == "loggedIn=true" ? (
                                    <TableCell>
                                        <DeleteIcon
                                            onClick = {() => props.removeBusiness(idx)}// add onClick method here
                                            className="icon text-red" /> 
                                    </TableCell>     
                                    ):(null)}
                        </TableRow>
                        ))}    
                    </TableBody>
            </Table>
        </Container>

    )
}

export default Businesses