import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

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
              {/* <p>{Name}</p>
              <p>{streetAddress}</p>
              <p>{city} {zip}</p>
              <p>{type}</p> */}
              <table>
                  <thead>
                  <tr>
                      <th>Name</th>
                      <th>Cost</th>
                  </tr>
                  </thead>
              </table>

              <button onClick={(handleCheckout)}>Checkout</button>

           </div>

       )
       

};

export default Checkout;


    


