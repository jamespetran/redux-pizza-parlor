import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import dateFormatter from './dateFormatter'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Time Order Placed</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Cost</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {customerList.map(customer => (
                    <TableRow
                        key={customer.customer_name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="right">
                            {customer.customer_name}
                        </TableCell>
                    <TableCell align="right">{dateFormatter(customer.time)}</TableCell>
                    <TableCell align="right">{customer.type}</TableCell>
                    <TableCell align="right">{customer.total}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    )
}
export default AdminPage;