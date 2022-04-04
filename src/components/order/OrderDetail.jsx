import React from 'react';
import './orderdetail.css';
import OrderItemsDetail from '../orderitem/OrderItemsDetail';

function OrderDetail({ item, summary }) {
    return (
        <>
            {/* Modal */}
            <div
                className="modal fade"
                id={'orderDetail' + item.id}
                tabIndex="-1"
                aria-labelledby="orderDetailLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="orderDetailLabel">
                                Order Number {item.id}
                            </h5>
                        </div>
                        <div className="modal-body">
                            <div className="">
                                <div className="row orderStatus">
                                    <div className="col-4"></div>
                                    <div className="col-4"></div>
                                    <div className="col-4 d-flex justify-content-end text-success">
                                        {item.status}
                                    </div>
                                </div>

                                {/* order item */}
                                {item.OrderItems?.map((item) => (
                                    <OrderItemsDetail
                                        item={item}
                                        key={item.id}
                                    />
                                ))}
                                {/* order summary */}
                                <div className="orderSummary">
                                    <div className="row">
                                        <div className="col-8">
                                            <div>ที่อยู่การจัดส่ง</div>
                                            <div>
                                                {item.User.firstName +
                                                    ' ' +
                                                    item.User.lastName}
                                            </div>
                                            <div>{item.User.phoneNumber}</div>
                                            <div>{item.User.address}</div>
                                        </div>
                                        <div className="col-4 d-flex justify-content-end text-secondary">
                                            Total : {summary}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetail;
