import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderItems from '../../components/orderitems/OrderItems';
import './cart.css';

let Omise;

function Cart() {
    const [cart, setCart] = useState({});
    const [summaryCart, setSummaryCart] = useState(0);
    const [titleAmount, setTitltAmount] = useState(1);
    const [paymentInfo, setPaymentInfo] = useState({
        number: '4242424242424242',
        name: 'wewew',
        expiration_year: '2025',
        expiration_month: '12',
        security_code: '123',
    });

    useEffect(() => {
        Omise = window.Omise;
        Omise.setPublicKey('pkey_test_5raq1i65moqwpkfb1fy');
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            Omise.createToken(
                'card',
                paymentInfo,
                async (statusCode, response) => {
                    console.log(response);

                    // const res = await axios.post('/donate', {
                    //     email,
                    //     description,
                    //     card: response.id,
                    //     amount,
                    //     currency,
                    //     customer,
                    // });
                }
            );
        } catch (err) {
            console.log(err.message);
        }
    };

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
                                        <button className="btn btn-primary">
                                            ชำระเงิน
                                        </button>
                                        {/* <!-- Button trigger modal --> */}
                                        <div className="card-donate">
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop"
                                            >
                                                PAYMENT CARD
                                            </button>
                                        </div>
                                        {/* <!-- Modal --> */}
                                        <form onSubmit={handleSubmit}>
                                            <div
                                                className="modal fade modal-payment"
                                                id="staticBackdrop"
                                                data-bs-backdrop="static"
                                                data-bs-keyboard="false"
                                                tabIndex="-1"
                                                aria-labelledby="staticBackdropLabel"
                                                aria-hidden="true"
                                            >
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5
                                                                className="modal-title"
                                                                id="staticBackdropLabel"
                                                                style={{
                                                                    color: '#02a89e',
                                                                    fontWeight: 600,
                                                                }}
                                                            >
                                                                Credit / Debit
                                                            </h5>
                                                            <button
                                                                type="button"
                                                                className="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            ></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="form-group">
                                                                <label
                                                                    style={{
                                                                        padding:
                                                                            '5px',
                                                                    }}
                                                                >
                                                                    Card Number
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    dataname="cardNumber"
                                                                    className="form-control"
                                                                    placeholder="••••••••••••••••"
                                                                />
                                                            </div>

                                                            <div className="form-group">
                                                                <label
                                                                    style={{
                                                                        padding:
                                                                            '5px',
                                                                    }}
                                                                >
                                                                    Name on card
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    dataname="nameOnCard"
                                                                    className="form-control"
                                                                    placeholder="Full Name"
                                                                />
                                                            </div>

                                                            <div className="form-group ">
                                                                <label
                                                                    style={{
                                                                        padding:
                                                                            '5px',
                                                                    }}
                                                                >
                                                                    Expiry date
                                                                </label>
                                                                <div className="row monthanddate-payment">
                                                                    <div
                                                                        className="col-xs-6 month-payment"
                                                                        style={{
                                                                            padding:
                                                                                '10px',
                                                                        }}
                                                                    >
                                                                        <select
                                                                            className="form-control"
                                                                            dataname="expiryMonth"
                                                                        >
                                                                            <option value="">
                                                                                MM
                                                                            </option>
                                                                            <option value="1">
                                                                                1
                                                                            </option>
                                                                            <option value="2">
                                                                                2
                                                                            </option>
                                                                            <option value="3">
                                                                                3
                                                                            </option>
                                                                            <option value="4">
                                                                                4
                                                                            </option>
                                                                            <option value="5">
                                                                                5
                                                                            </option>
                                                                            <option value="6">
                                                                                6
                                                                            </option>
                                                                            <option value="7">
                                                                                7
                                                                            </option>
                                                                            <option value="8">
                                                                                8
                                                                            </option>
                                                                            <option value="9">
                                                                                9
                                                                            </option>
                                                                            <option value="10">
                                                                                10
                                                                            </option>
                                                                            <option value="11">
                                                                                11
                                                                            </option>
                                                                            <option value="12">
                                                                                12
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                    <div
                                                                        className="col-xs-6 date-payment"
                                                                        style={{
                                                                            padding:
                                                                                '10px',
                                                                        }}
                                                                    >
                                                                        <select
                                                                            className="form-control"
                                                                            dataname="expiryYear"
                                                                        >
                                                                            <option value="">
                                                                                YYYY
                                                                            </option>
                                                                            <option value="2017">
                                                                                2017
                                                                            </option>
                                                                            <option value="2018">
                                                                                2018
                                                                            </option>
                                                                            <option value="2019">
                                                                                2019
                                                                            </option>
                                                                            <option value="2020">
                                                                                2020
                                                                            </option>
                                                                            <option value="2021">
                                                                                2021
                                                                            </option>
                                                                            <option value="2022">
                                                                                2022
                                                                            </option>
                                                                            <option value="2023">
                                                                                2023
                                                                            </option>
                                                                            <option value="2024">
                                                                                2024
                                                                            </option>
                                                                            <option value="2025">
                                                                                2025
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="form-group">
                                                                <label
                                                                    style={{
                                                                        padding:
                                                                            '5px',
                                                                    }}
                                                                >
                                                                    Security
                                                                    code
                                                                </label>
                                                                <input
                                                                    style={{
                                                                        marginBottom:
                                                                            '20px',
                                                                    }}
                                                                    type="text"
                                                                    dataname="securityCode"
                                                                    className="form-control"
                                                                    placeholder="123"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer payment-footer">
                                                            <button
                                                                style={{
                                                                    margin: '15px 0px 15px 0px',
                                                                }}
                                                                type="submit"
                                                                className="btn btn-primary"
                                                            >
                                                                Checkout 100.00
                                                                THB
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
