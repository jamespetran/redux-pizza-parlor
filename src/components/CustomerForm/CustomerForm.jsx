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
        setCustomerInfo({
            // spread operator handles all user inputs
            ...customerInfo, [event.target.name]: event.target.value,
        });
    } // end handleInputChange



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
                    name="pickup"
                    value=""
                />

            </form>
        </>
        
    )

}


export default CustomerForm;