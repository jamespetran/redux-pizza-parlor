import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';

function AdminPage(){
    const dispatch = useDispatch();
    const customerList = useSelector(store => store.ordersReducer)
    useEffect(() => {
        GetOrders();
    }, [])
    const GetOrders = () => {
        axios.get('/api/order').then(res => {
            console.log('GETTING /api/order', res);
            dispatch({
                type: 'SET_ORDERS',
                payload: res.data,
            });
        }).catch(err => {
            console.error('FAILED GET /api/order', err)
        })
    }
    return(
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Time Oder Placed</td>
                    <td>Type</td>
                    <td>Cost</td>
                </tr>
            </thead>
            <tbody>
                {customerList.map(customer => (
                    <tr key={customer.id}>
                        <td>{customer.customer_name}</td>
                        <td>{customer.time}</td>
                        <td>{customer.type}</td>
                        <td>{customer.total}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default AdminPage;