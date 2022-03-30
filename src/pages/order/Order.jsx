import React, { useEffect, useState } from 'react';
import { getOrder } from '../../apis/order';
import OrderItems from '../../components/orderitem/OrderItems';
import './order.css';

function Order() {
    const [order, setOrder] = useState([]);
    const fetchOrder = async () => {
        try {
            const res = await getOrder();
            setOrder(res.data.orders);
            console.log(res.data.orders);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchOrder();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 App">
                        <h1>Order history</h1>
                    </div>
                </div>
                {order.map((item) => (
                    <OrderItems item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default Order;
