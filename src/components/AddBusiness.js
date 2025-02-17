import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'


class AddBusiness extends Component {
    state = {
        // open: false,
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        description: '', 
        hours: '' 
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        console.log(newState)
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newBusiness = { ...this.state }
        newBusiness.id = this.props.newBusiness + 1
        // delete payload.open
        this.props.addBusiness(newBusiness)
        this.props.history.push("/")
        // this.setState({ open: false })
    }

    // componentDidUpdate = (prevProps, prevState) => {
    //     if (prevState.open !== this.state.open) {
    //         this.setState({
    //             name: '',
    //             address: '',
    //             city: '',
    //             state: '',
    //             zip: '',
    //             description: '', 
    //             hours: '' 
    //         })
    //     }
    // }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    {/* <h1>Add Business:</h1> */}
                    <Button
                        variant="contained"
                        className="add-business"
                        onClick={this.toggleDialog}
                    >
                        Add Business Listing
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Business Listing</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="name" 
                                    placeholder="Name" 
                                    value={this.state.name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="address" 
                                    placeholder="Address" 
                                    value={this.state.address} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="city" 
                                    placeholder="City" 
                                    value={this.state.city} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="state" 
                                    placeholder="State" 
                                    value={this.state.state}
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="zip" 
                                    placeholder="Zip Code" 
                                    value={this.state.zip}
                                    onChange={this.handleTextChange} 
                                    required />   
                                <TextField 
                                    id="description" 
                                    placeholder="Description" 
                                    value={this.state.description}
                                    onChange={this.handleTextChange} 
                                    required />  
                                <TextField 
                                    id="hours" 
                                    placeholder="Hours of Operation" 
                                    value={this.state.hours}
                                    onChange={this.handleTextChange} 
                                    required />      
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddBusiness