import React from 'react';
import OrderDetail from '../order/OrderDetail';
import './orderitems.css';
import OrderItemsDetail from './OrderItemsDetail';

function OrderItems({ item }) {
    const tempSummary = {};
    item.OrderItems.map((item) => (tempSummary[item.id] = +item.price));
    const summary = Object.values(tempSummary).reduce(
        (previous, current) => previous + current,
        0
    );
    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="orderDetail">
                    <div className="row orderStatus">
                        <div className="col-4">Order Number {item.id}</div>
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
                            <div className="col-4">
                                <button
                                    type="button"
                                    className="btn"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#orderDetail` + item.id}
                                >
                                    OrderDetail
                                </button>
                            </div>
                            <div className="col-4"></div>
                            <div className="col-4 d-flex justify-content-end text-secondary">
                                Total : {summary}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3"></div>
            <OrderDetail item={item} summary={summary} />
        </div>
    );
}

export default OrderItems;
