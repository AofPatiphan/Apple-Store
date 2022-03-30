import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createCharge, deleteCartItems, getCartItem } from '../../apis/cart';
import { createOrder, createOrderItem } from '../../apis/order';
import OrderItems from '../../components/orderitems/OrderItems';
import { ErrContext } from '../../contexts/ErrContext';
import './cart.css';

let OmiseCard;

function Cart() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { setSuccess, setError } = useContext(ErrContext);
    const [cart, setCart] = useState({});
    const [summaryCart, setSummaryCart] = useState(0);
    const [titleAmount, setTitltAmount] = useState(1);

    const fetchCart = async () => {
        const res = await getCartItem(id);
        setCart(res.data.cart);
        setSummaryCart(res.data.cart.price);
    };
    useEffect(() => {
        fetchCart();
    }, []);

    const customerTestData = {
        email: 'test3@gmail.com',
        description: 'Test3',
    };
    useEffect(() => {
        OmiseCard = window.OmiseCard;
        OmiseCard.configure({
            publicKey: 'pkey_test_5raq1i65moqwpkfb1fy',
            currency: 'thb',
            frameLabel: 'Apple Store',
            submitLabel: 'Pay Now',
        });
    }, []);

    const creditCardConfigure = () => {
        OmiseCard.configure({
            defaultPaymentMethod: 'credit_card',
        });
        OmiseCard.configureButton('#credit-card');
    };

    const omiseCartHandler = () => {
        OmiseCard.open({
            frameDescription: `Order no.${cart.id}`,
            amount: summaryCart * 100,
            onCreateTokenSuccess: async (token) => {
                const res = await createCharge(
                    customerTestData.email,
                    customerTestData.description,
                    token,
                    summaryCart * 100
                );
                if (res.status !== 200) {
                    setError('Your payment is rejected');
                }
                successfullyCheckout();
            },
            onFormClosed: () => {
                console.log('form Cloased');
            },
        });
    };

    const successfullyCheckout = async () => {
        setSuccess('Payment Successful');
        const res = await createOrder('success');
        await createOrderItem(
            res.data.newOrder.id,
            cart.productId,
            +summaryCart,
            titleAmount
        );
        setTimeout(() => {
            setSuccess('');
            deleteCartItems();
            navigate('/order');
        }, 2500);
    };

    const handleClick = (e) => {
        e.preventDefault();
        creditCardConfigure();
        OmiseCard.attach();
        omiseCartHandler();
    };

    useEffect(() => {
        setSummaryCart((cart.price * titleAmount).toFixed(2));
    }, [titleAmount]);

    return (
        <div className="cartbody">
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
                                    <div style={{ paddingTop: '20px' }}>
                                        <div>
                                            <form
                                                onSubmit={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                <button
                                                    id="credit-card"
                                                    type="button"
                                                    onClick={handleClick}
                                                    className="btn btn-primary"
                                                >
                                                    Proceed to Payment
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
