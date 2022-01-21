import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


function Checkout (){
    const dispatch = useDispatch();
    const history = useHistory();
    const checkoutPizza = useSelector(store => store.cartReducer);
    const customerInfo = useSelector(store => store.customerInfoReducer);

    const handleCheckout = () => {
        axios.post('/api/order', {
            customer_name: customerInfo.name,
            street_address: customerInfo.streetAddress,
            city: customerInfo.city,
            zip: customerInfo.zip,
            type: customerInfo.select,
            total: 69420,
            pizzas: {id: checkoutPizza.id, quantity: checkoutPizza.qty}
        }).then(res => {
            console.log('POST /pizza/order', res);
 //           dispatchEvent({
   //             type: 'UPDATE_ORDER_LIST'
     //       }) 
       //     dispatch({
         //       type: 'EMPTY_PIZZA'
           // })
        })
        .catch (err => {
            console.error('POST/pizza/order', err)
        })
    }

    return (
        <>
        <h1>Prime Pizza</h1>
        <h3>Step:3 Checkout</h3>
           <p>{customerInfo.name}</p>
           <p>{customerInfo.streetAddress}</p>
           <p>{customerInfo.city}, {customerInfo.zip}</p>
           <table>
               <thead>
                   <tr>
                       <th>Customer Name:</th>
                       <th>Cost:</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>{customerInfo.name}</td>
                   </tr>
               </tbody>
           </table>
           <h2>Total: {}</h2>
           <button onClick={handleCheckout}>Checkout</button>
        
        </>
       
    )
};


export default Checkout;