import {useSelector} from 'reat-redux';

function AdminPage(){

    const customerList = useSelector(store => store.whateverItShallBeNamedByWhoWhomMustNotBeNamed)

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
                    <tr>
                        <td>customer.customer_name</td>
                        <td>customer.time</td>
                        <td>customer.type</td>
                        <td>customer.total</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default AdminPage;