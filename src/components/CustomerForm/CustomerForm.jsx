import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CustomerForm() {
    console.log('in CustomerForm');
    // let x = document.getElementById("radio").value;
    // console.log(x);

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
        zip: '',
        getOrderOption: ''
    });

    const [deliveryOptionsInfo, setDeliveryOptionsInfo] = useState

    const handleInputChange = (event) => {
        setCustomerInfo({
            // spread operator handles all user inputs
            ...customerInfo, [event.target.name]: event.target.value,
        });
    } // end handleInputChange

    const onSubmit = (event) => {
        event.preventDefault(event);
        console.log('Adding customer information', customerInfo, deliveryOptionsInfo);

        // send data to store
        dispatch({
            type: 'ADD_CUSTOMER_INFO',
            payload: customerInfo, deliveryOptionsInfo
        })

        // clear inputs
        setCustomerInfo({
            name: '',
            streetAddress: '',
            city: '',
            zip: '',
        });

        history.push('/')
    }



    return (
        <>
            <h1>Step 2: Customer Information</h1>

            <form>
                <input
                    type="text"
                    placeholder="Name"
                    value={customerInfo.name}
                    onChange={handleInputChange}    
                />

                <br></br>

                <input
                    type="text"
                    placeholder="Street Address"
                    value={customerInfo.streetAddress}
                    onChange={handleInputChange}    
                />

                <br></br>

                <input
                    type="text"
                    placeholder="City"
                    value={customerInfo.city}
                    onChange={handleInputChange}    
                />

                <br></br>

                <input
                    type="text"
                    placeholder="Zip Code"
                    value={customerInfo.zip}
                    onChange={handleInputChange}    
                />

                <br></br>

                    <input
                        type="radio"
                        id="pickup"
                        name="select"
                        value="pickup"
                        checked={true}
                        onChange={handleInputChange}
                    />
                    <label for="pickup">Pickup</label>
                    <br></br>
                
                    <input
                        type="radio"
                        id="delivery"
                        name="select"
                        value="delivery"
                    />
                    <label for="delivery">Delivery</label>
                    <br></br>

            </form>
        </>
        
    )

}


export default CustomerForm;