import React from 'react';
import './orderitems.css';
import OrderItemsDetail from './OrderItemsDetail';

function OrderItems({ item }) {
    const tempSummary = {};
    item.OrderItems.map((item) => (tempSummary[item.id] = +item.price));
    // console.log(Object.values(tempSummary));
    const summary = Object.values(tempSummary).reduce(
        (previous, current) => previous + current,
        0
    );
    console.log(summary);
    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="orderDetail">
                    <div className="row orderStatus">
                        <div className="col-4"></div>
                        <div className="col-4"></div>
                        <div className="col-4 d-flex justify-content-end text-success">
                            {item.status}
                        </div>
                    </div>
                    {/* order item */}

                    {item.OrderItems?.map((item) => (
                        <OrderItemsDetail item={item} key={item.id} />
                    ))}
                    {/* order summary */}
                    <div className="orderSummary">
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-4"></div>
                            <div className="col-4 d-flex justify-content-end text-secondary">
                                Total : {summary}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3"></div>
        </div>
    );
}

export default OrderItems;
