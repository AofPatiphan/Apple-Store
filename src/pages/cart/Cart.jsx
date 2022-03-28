import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderItems from '../../components/orderitems/OrderItems';
import './cart.css';

function Cart() {
    const [cart, setCart] = useState({});
    const [summaryCart, setSummaryCart] = useState(0);
    const [titleAmount, setTitltAmount] = useState(1);

    const { id } = useParams();
    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        const res = await axios.get(`/carts/${id}`);
        console.log(res.data.cart);
        setCart(res.data.cart);
        setSummaryCart(res.data.cart.price);
    };

    useEffect(() => {
        setSummaryCart((cart.price * titleAmount).toFixed(2));
    }, [titleAmount]);

    return (
        <>
            <div className="container cart-title">
                <div className="title-header">
                    นี่คือรายการที่อยู่ในถุงของคุณ ฿{cart.price}
                </div>
                <div className="title-message">
                    รับบริการจัดส่งฟรีและส่งคืนฟรีทุกคำสั่งซื้อ
                </div>
            </div>
            <div className="container orderitemcontainer1">
                <OrderItems
                    cart={cart}
                    titleAmount={titleAmount}
                    setTitltAmount={setTitltAmount}
                />
            </div>
            <div className="container summarycontainer">
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-7">
                        <div className="summaryheader">
                            <div className="d-flex justify-content-between">
                                <div>ยอดรวม</div>
                                <div>฿{summaryCart}</div>
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
                                    <div>
                                        ฿{(summaryCart * 0.93).toFixed(2)}
                                    </div>
                                    <div>
                                        รวม VAT จำนวน ฿
                                        {(summaryCart * 0.07).toFixed(2)}
                                    </div>
                                    <div>
                                        Total ฿{(+summaryCart).toFixed(2)}
                                    </div>
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
