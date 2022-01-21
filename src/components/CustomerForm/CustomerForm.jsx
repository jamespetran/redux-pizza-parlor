import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { FormControlLabel, Radio, RadioGroup, TextField, Button } from '@mui/material';
import { FormControl } from '@mui/material';
import './CustomerForm.css';

function CustomerForm() {
    console.log('in CustomerForm');

    // setup instances of dispatch and history
    // to be able to talk to state and advance the page to
    // checkout page after clicking the 'Next' button 
    const dispatch = useDispatch();
    const history = useHistory();

    // setup local state to store customer objects
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        streetAddress: '',
        city: '',
        zip: ''
    });


    const handleInputChange = (event) => {
        setCustomerInfo({ ...customerInfo,
            [event.target.name]: event.target.value,
        });
    } // end handleInputChange


    const onSubmit = (event) => {
        console.log('Adding customer information', customerInfo);

        // send data to store
        dispatch({
            type: 'ADD_CUSTOMER_INFO',
            payload: customerInfo
        })

        // clear inputs
        setCustomerInfo({
            name: '',
            streetAddress: '',
            city: '',
            zip: ''
        });
    }



    return (
        <>
            <h1 className="customerHeader">Step 2: Customer Information</h1>
            <div className="customerForm">
                <FormControl>
                    <TextField
                        className="formInputs"
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={customerInfo.name}
                        onChange={handleInputChange}    
                    />

                    <br></br>

                    <TextField
                        className="formInputs"
                        id="outlined-basic"
                        label="Street Address"
                        variant="outlined"
                        name="streetAddress"
                        value={customerInfo.streetAddress}
                        onChange={handleInputChange}    
                    />

                    <br></br>

                    <TextField
                        className="formInputs"
                        id="outlined-basic"
                        label="City"
                        variant="outlined"
                        name="city"
                        value={customerInfo.city}
                        onChange={handleInputChange}    
                    />

                    <br></br>

                    <TextField
                        className="formInputs"
                        id="outlined-basic"
                        label="Zip Code"
                        variant="outlined"
                        name="zip"
                        value={customerInfo.zip}
                        onChange={handleInputChange}    
                    />

                    <br></br>

                    <RadioGroup>
                        <FormControlLabel
                            control={<Radio />}
                            label="Pickup"
                            id="pickup"
                            name="select"
                            value="Pickup"
                            onChange={handleInputChange}
                        />
                            

                        <br></br>
                    
                        <FormControlLabel
                            control={<Radio />}
                            label="Delivery"
                            id="delivery"
                            name="select"
                            value="Delivery"
                            onChange={handleInputChange}
                        />
                    
                    </RadioGroup>
                    

                    <br></br>
            </FormControl>
            </div>
            <div className="nextBtn">
                <Link to="/checkout">
                    <Button 
                        variant="contained"
                        style={{
                            maxWidth: "240px",
                            minWidth: "140px",
                            maxHeight: "80px",
                            minHeight: "40px"
                        }}
                        onClick={onSubmit}>
                            NEXT
                    </Button>
                </Link>
            </div>
        </>   
    )
}


export default CustomerForm;