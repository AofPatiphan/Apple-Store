import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    createCharge,
    deleteAllCart,
    deleteCartItems,
    getCartItem,
} from '../../apis/cart';
import { createOrder, createOrderItem } from '../../apis/order';
import CartItems from '../../components/cartitems/CartItems';
import { ErrContext } from '../../contexts/ErrContext';
import './cart.css';

let OmiseCard;

function Cart() {
    const navigate = useNavigate();
    const { setSuccess, setError } = useContext(ErrContext);
    const [cart, setCart] = useState([]);
    const [summaryCart, setSummaryCart] = useState(0);
    const [titleAmount, setTitltAmount] = useState(1);
    const [tempSummary, setTempSummary] = useState({});

    useEffect(() => {
        setSummaryCart(
            Object.values(tempSummary).reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                0
            )
        );
    }, [tempSummary]);

    const fetchCart = async () => {
        const res = await getCartItem();
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
        const res = await createOrder('Payment success');
        await createOrderItem(res.data.newOrder.id);
        setTimeout(() => {
            setSuccess('');
            deleteAllCart();
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

    const handleClickDeleteCart = async (id) => {
        try {
            await deleteCartItems(id);
            const deletedCart = cart.filter((item) => item.id !== id);
            setCart(deletedCart);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="cartbody">
            <div className="container cart-title">
                <div className="title-header">
                    นี่คือรายการที่อยู่ในถุงของคุณ ฿
                    {cart.length ? summaryCart : 0}
                </div>
                <div className="title-message">
                    รับบริการจัดส่งฟรีและส่งคืนฟรีทุกคำสั่งซื้อ
                </div>
            </div>
            <div className="container orderitemcontainer1">
                {cart.map((item) => (
                    <CartItems
                        cart={item}
                        key={item.id}
                        setTempSummary={setTempSummary}
                        handleClickDeleteCart={handleClickDeleteCart}
                    />
                ))}
                {/* <CartItems
                    cart={cart}
                    titleAmount={titleAmount}
                    setTitltAmount={setTitltAmount}
                /> */}
            </div>
            <div className="container summarycontainer">
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-7">
                        <div className="summaryheader">
                            <div className="d-flex justify-content-between">
                                <div>ยอดรวม</div>
                                <div>฿{cart.length ? summaryCart : 0}</div>
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
                                        ฿
                                        {cart.length
                                            ? (summaryCart * 0.93).toFixed(2)
                                            : 0}
                                    </div>
                                    <div>
                                        รวม VAT จำนวน ฿
                                        {cart.length
                                            ? (summaryCart * 0.07).toFixed(2)
                                            : 0}
                                    </div>
                                    <div>
                                        Total ฿
                                        {cart.length
                                            ? (+summaryCart).toFixed(2)
                                            : 0}
                                    </div>
                                    <div style={{ paddingTop: '20px' }}>
                                        <div>
                                            <form
                                                onSubmit={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                {cart.length ? (
                                                    <button
                                                        id="credit-card"
                                                        type="button"
                                                        onClick={handleClick}
                                                        className="btn btn-primary"
                                                    >
                                                        Proceed to Payment
                                                    </button>
                                                ) : (
                                                    <button
                                                        id="credit-card"
                                                        type="button"
                                                        onClick={handleClick}
                                                        className="btn btn-primary"
                                                        disabled
                                                    >
                                                        Proceed to Payment
                                                    </button>
                                                )}
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
