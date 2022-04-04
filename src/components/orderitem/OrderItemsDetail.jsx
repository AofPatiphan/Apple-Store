import React from 'react';

function OrderItemsDetail({ item }) {
    return (
        <div className="row orderItem">
            <div className="col-8 d-flex" style={{ gap: '30px' }}>
                <div>
                    <img
                        src={item.Product?.ProductImages[0].image}
                        alt=""
                        style={{
                            height: '100px',
                            width: '100px',
                            objectFit: 'contain',
                        }}
                    />
                </div>
                <div>
                    <div className="text-secondary">
                        {item.Product.modelName}
                    </div>
                    <div className="text-secondary">x {item.amount}</div>
                </div>
            </div>
            <div className="col-4 d-flex justify-content-end text-secondary">
                ฿ {item.price}
            </div>
        </div>
    );
}

export default OrderItemsDetail;
