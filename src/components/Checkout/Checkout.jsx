import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react=router-dom';

function Checkout (){
    const dispatch = useDispatch();
    const history = useHistory();

    const checkoutPizza = useSelector(store => store.checkoutReducer);

    const handleCheckout = () => {
        dispatch({
            type: 'EMPTY_PIZZA'
        })

        history.push('/');
    }
    
       return (
           <div>
               <h2>Check Out</h2>
               <h3>Name</h3>
               <h3>Address</h3>
                <P>
                <button onClick={handleCheckout}>Checkout</button>
                </P>
           </div>
       )


};

export default Checkout;


    


