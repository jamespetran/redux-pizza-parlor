import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
        event.preventDefault(event);
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

        //history.push('/')
    }



    return (
        <>
            <h1>Step 2: Customer Information</h1>

            <form>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}    
                />

                <br></br>

                <input
                    type="text"
                    placeholder="Street Address"
                    name="streetAddress"
                    value={customerInfo.streetAddress}
                    onChange={handleInputChange}    
                />

                <br></br>

                <input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={customerInfo.city}
                    onChange={handleInputChange}    
                />

                <br></br>

                <input
                    type="text"
                    placeholder="Zip Code"
                    name="zip"
                    value={customerInfo.zip}
                    onChange={handleInputChange}    
                />

                <br></br>

                <div>
                    <input
                        type="radio"
                        id="pickup"
                        name="select"
                        value="Pickup"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="pickup">Pickup</label>

                    <br></br>
                
                    <input
                        type="radio"
                        id="delivery"
                        name="select"
                        value="Delivery"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="delivery">Delivery</label>
                </div>
                

                <br></br>
            </form>
            <button onClick={onSubmit}>NEXT</button>
        </>   
    )
}


export default CustomerForm;