import React from 'react';
import './orderitems.css';
import { deleteCartItems } from '../../apis/cart';
import { useNavigate } from 'react-router-dom';

function OrderItems({ titleAmount, setTitltAmount, cart }) {
    const navigate = useNavigate();
    const handleClickDeleteCart = async () => {
        try {
            await deleteCartItems(cart.id);
            navigate('/store');
        } catch (err) {
            console.log(err.message);
        }
    };
    return (
        <div className="row orderitemcontainer">
            <div className="col-3 d-flex justify-content-center align-items-center">
                <img
                    src={cart.Product?.ProductImages[0]?.image}
                    alt=""
                    style={{ width: '100%' }}
                />
            </div>
            <div className="col-9">
                <div className="cartitemtitle">
                    <div className="row">
                        <div className="col-4">
                            <h2 className="cartitemtitlename">
                                {cart?.Product?.modelName}
                            </h2>
                        </div>
                        <div className="col-4">
                            <div
                                className="cartitemtitleaddamount d-flex justify-content-center"
                                style={{ gap: '10px' }}
                            >
                                <button
                                    className="btn btntitleamount"
                                    onClick={() =>
                                        setTitltAmount((prev) =>
                                            prev > 1 ? prev - 1 : prev
                                        )
                                    }
                                >
                                    -
                                </button>
                                <button className="btn btntitleamount">
                                    {titleAmount}
                                </button>
                                <button
                                    className="btn btntitleamount"
                                    onClick={() =>
                                        setTitltAmount((prev) => prev + 1)
                                    }
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                            <div className="cartitemtitlesummary">
                                <div>
                                    ฿{(cart.price * titleAmount).toFixed(2)}
                                </div>
                                <div
                                    style={{
                                        fontSize: '17px',
                                        fontWeight: '400',
                                        textAlign: 'right',
                                        padding: '10px 0 0 0',
                                    }}
                                >
                                    <button
                                        className="btn"
                                        style={{ padding: '0', color: 'blue' }}
                                        onClick={handleClickDeleteCart}
                                    >
                                        delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* apple care plus */}
                <div className="applecareplus">
                    <div className="row">
                        <div className="applecareplusdetail col-10">
                            <h3 className="applecaretitle">
                                เพิ่ม AppleCare+ สำหรับ iPhone 13 Pro ในราคา
                                ฿8,290.00
                            </h3>
                            <ul>
                                <li>
                                    สิทธิพิเศษในการติดต่อกับผู้เชี่ยวชาญของ
                                    Apple
                                </li>
                                <li>
                                    บริการซ่อมที่ผ่านการรับรองจาก Apple
                                    ซึ่งใช้อะไหล่แท้ของ Apple
                                </li>
                                <li>
                                    ความคุ้มครองสำหรับ iPhone รวมถึงแบตเตอรี่
                                </li>
                                <li>
                                    ความคุ้มครองด้านความเสียหายจากอุบัติเหตุ
                                </li>
                            </ul>
                        </div>
                        <div className="col-2 " style={{ textAlign: 'right' }}>
                            <button
                                className="btn"
                                style={{ color: 'blue', padding: '0' }}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>

                {/* delivery detail */}
                <div className="deliverydetail">
                    <span>
                        ดูว่าคุณจะได้รับสินค้ารายการนี้เร็วที่สุดเมื่อไหร่
                    </span>
                    <div className="row" style={{ paddingTop: '5px' }}>
                        <div className="col-6 deliverydetailitem">
                            จัดส่งใน 3-5 วันทำการ
                        </div>
                        <div className="col-6 deliverydetailitem">
                            รับด้วยตัวเองที่ Apple Store ใกล้คุณ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItems;
