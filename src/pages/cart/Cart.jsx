import React from 'react';
import OrderItems from '../../components/orderitems/OrderItems';
import './cart.css';

function Cart() {
    return (
        <>
            <div className="container cart-title">
                <div className="title-header">
                    นี่คือรายการที่อยู่ในถุงของคุณ ฿38,900
                </div>
                <div className="title-message">
                    รับบริการจัดส่งฟรีและส่งคืนฟรีทุกคำสั่งซื้อ
                </div>
            </div>
            <div className="container orderitemcontainer1">
                <OrderItems />
                <OrderItems />
            </div>
            <div className="container summarycontainer">
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-7">
                        <div className="summaryheader">
                            <div className="d-flex justify-content-between">
                                <div>ยอดรวม</div>
                                <div>฿38,900.00</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>การจัดส่ง</div>
                                <div>Free</div>
                            </div>
                        </div>
                        <div className="summarycontent">
                            <div className="row">
                                <div className="col-4">ยอดชำระเงินของคุณ</div>
                                <div
                                    className="col-8"
                                    style={{ textAlign: 'right' }}
                                >
                                    <div>฿81,800.00</div>
                                    <div>รวม VAT จำนวน ฿5,351.40</div>
                                    <div>
                                        <button className="btn btn-primary">
                                            ชำระเงิน
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
