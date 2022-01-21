import {useSelector} from 'react-redux';

function Checkout() {
    const customerInfo = useSelector(store => store.customerInfoReducer)

    const onAddOrder = (evt) => {
        evt.preventDefault();

        const orderInfo = {
            name: '',
            streetAddress: '',
            city: '',
            zip: ''
        }

        axios.post('/api/order', orderInfo)
        .then(res => {
            console.log('POST /pizza/order', res);

            dispatchEvent({
                type: 'UPDATE_ORDER_LIST',
                payload: orderInfo
            })
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
           <button>Checkout</button>
        
        </>
       
    )
};


export default Checkout;



