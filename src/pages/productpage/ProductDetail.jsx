import React from 'react';
import './productdetail.css';

function ProductDetail() {
    return (
        <div>
            <div className="product-nav">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="nav-title">
                            <div className="product-nav-name">
                                iPhone 13 pro
                            </div>
                            <div
                                style={{
                                    textAlign: 'right',
                                    fontSize: '17px',
                                    fontWeight: '400',
                                }}
                            >
                                ฿38,900.00
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>

            <div className="row">
                <div className="col-2"></div>
                <div className="col-4">
                    <div>
                        <img
                            src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1648315119/Wow/IMG_0061_zcimqf.png"
                            alt=""
                            className="productpic"
                        />
                    </div>
                </div>
                <div className="col-4 Product-header">
                    <div>ซื้อ iPhone 13 Pro</div>

                    {/* model */}
                    <label className="col-form-label model-lebel">
                        เลือกรุ่น
                    </label>
                    <div
                        className="radioGroup"
                        style={{
                            borderBottom: '1px solid #d2d2d7',
                            padding: '0 0 30px 0',
                        }}
                    >
                        <div className="woman">
                            <input
                                type="radio"
                                className="btn-check "
                                name="options-outlined"
                                id="Woman"
                                autoComplete="off"
                            />
                            <label
                                className="btn  inputrgt d-flex justify-content-between selectermodel"
                                htmlFor="Woman"
                            >
                                <div style={{ color: '#1d1d1f' }}>
                                    iPhone 13 pro
                                </div>
                                <div style={{ color: '#1d1d1f' }}>
                                    เริ่มต้นที่ ฿38,900
                                </div>
                            </label>
                        </div>
                        <div className="man">
                            <input
                                type="radio"
                                className="btn-check"
                                name="options-outlined"
                                id="Man"
                                autoComplete="off"
                            />
                            <label
                                className="btn inputrgt d-flex justify-content-between selectermodel"
                                htmlFor="Man"
                            >
                                <div style={{ color: '#1d1d1f' }}>
                                    iPhone 13 pro Max
                                </div>
                                <div style={{ color: '#1d1d1f' }}>
                                    เริ่มต้นที่ ฿42,900
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* storage */}
                    <label className="col-form-label model-lebel">
                        เลือกความจุ
                    </label>
                    <div
                        className="radioGroup d-flex"
                        style={{
                            borderBottom: '1px solid #d2d2d7',
                            padding: '0 0 30px 0',
                            gap: '20px',
                        }}
                    >
                        <div>
                            <input
                                type="radio"
                                className="btn-check"
                                name="options-outlined"
                                id="128"
                                autoComplete="off"
                            />
                            <label
                                className="btn  inputrgt selectermodel"
                                htmlFor="128"
                            >
                                <div style={{ color: '#1d1d1f' }}>128 GB</div>
                                <div style={{ color: '#1d1d1f' }}>฿38,900</div>
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                className="btn-check"
                                name="options-outlined"
                                id="256"
                                autoComplete="off"
                            />
                            <label
                                className="btn inputrgtselectermodel"
                                htmlFor="256"
                            >
                                <div style={{ color: '#1d1d1f' }}>256 GB</div>
                                <div style={{ color: '#1d1d1f' }}>฿42,900</div>
                            </label>
                        </div>
                    </div>

                    {/* summary */}
                    <div className="detailsummary">
                        <div style={{ fontSize: '32px' }}>฿38,900</div>
                        <button className="btn btn-primary">ใส่ลงในถุง</button>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
}

export default ProductDetail;
